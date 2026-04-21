import { Injectable, ExecutionContext, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OAuthError } from '@refly/errors';
import { Request } from 'express';

// Extend session type to include uid
declare module 'express-session' {
  interface SessionData {
    uid?: string;
  }
}

@Injectable()
export class TwitterOauthGuard extends AuthGuard('twitter') {
  private readonly logger = new Logger(TwitterOauthGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const uid = request.query?.uid as string;

    // Store uid in session before OAuth redirect
    if (uid) {
      request.session.uid = uid;
    }

    // Continue with normal OAuth flow
    return super.canActivate(context) as Promise<boolean>;
  }

  handleRequest(err: any, user: any) {
    if (err || !user) {
      this.logger.error(
        `Twitter OAuth guard error: ${JSON.stringify(err)}, stack: ${err?.stack ?? 'unknown'}, user: ${JSON.stringify(user)}`,
      );
      throw new OAuthError(); // This will be properly handled by global exception filter
    }
    return user;
  }
}
