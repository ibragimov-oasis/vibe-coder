import { client, BaseResponse } from '@refly/openapi-schema';
import * as requestModule from '@refly/openapi-schema';

import { isDesktop, serverOrigin } from '@refly/ui-kit';
import {
  AuthenticationExpiredError,
  ConnectionError,
  OperationTooFrequent,
  UnknownError,
} from '@refly/errors';
import { responseInterceptorWithTokenRefresh } from '@refly-packages/ai-workspace-common/utils/auth';
import { getLocale } from '@refly-packages/ai-workspace-common/utils/locale';
import { showErrorNotification } from '@refly-packages/ai-workspace-common/utils/notification';

// Create a WeakMap to store cloned requests
const requestCache = new WeakMap<Request, Request>();

// Function to cache a cloned request
export const cacheClonedRequest = (originalRequest: Request, clonedRequest: Request) => {
  requestCache.set(originalRequest, clonedRequest);
};

// Function to get and clear cached request
export const getAndClearCachedRequest = (originalRequest: Request): Request | undefined => {
  const cachedRequest = requestCache.get(originalRequest);
  if (cachedRequest) {
    requestCache.delete(originalRequest);
  }
  return cachedRequest;
};

client.setConfig({
  baseUrl: `${serverOrigin}/v1`,
  credentials: isDesktop() ? 'omit' : 'include',
});

export interface CheckResponseResult {
  isError: boolean;
  baseResponse?: BaseResponse;
}

export const extractBaseResp = async (response: Response, data: any): Promise<BaseResponse> => {
  if (!response.ok) {
    switch (response?.status) {
      case 429:
        return {
          success: false,
          errCode: new OperationTooFrequent().code,
        };

      case 401:
        return {
          success: false,
          errCode: new AuthenticationExpiredError().code,
        };

      default:
        return {
          success: false,
          errCode: new UnknownError().code,
        };
    }
  }

  if (response.headers.get('Content-Type')?.includes('application/json')) {
    return data;
  }

  return { success: true };
};

client.interceptors.request.use(async (request) => {
  // Clone and cache the request before processing
  // Since we may resend the request after refreshing access tokens
  const clonedRequest = request.clone();
  cacheClonedRequest(request, clonedRequest);

  return request;
});

client.interceptors.response.use(async (response, request): Promise<Response> => {
  // Get the cached request and clear it from cache
  const cachedRequest = getAndClearCachedRequest(request);
  return await responseInterceptorWithTokenRefresh(response, cachedRequest ?? request);
});

const wrapFunctions = (module: any) => {
  const wrappedModule: any = {};

  for (const key of Reflect.ownKeys(module)) {
    const origMethod = module[key];

    wrappedModule[key] = async (...args: unknown[]) => {
      try {
        const response = await origMethod(...args);

        if (response) {
          const error = await extractBaseResp(response?.response as Response, response?.data);
          if (!error.success) {
            showErrorNotification(error, getLocale());
          }
        }

        return response;
      } catch (err) {
        const errResp = {
          success: false,
          errCode: new ConnectionError(err instanceof Error ? err.message : String(err)).code,
        };
        showErrorNotification(errResp, getLocale());
        return {
          error: errResp,
        };
      }
    };
  }

  return wrappedModule as typeof requestModule;
};

const wrappedRequestModule = () => {
  return wrapFunctions(requestModule);
};

export default wrappedRequestModule;
