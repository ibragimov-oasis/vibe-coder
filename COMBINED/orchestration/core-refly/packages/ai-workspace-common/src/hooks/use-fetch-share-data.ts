import { useCallback, useState, useEffect, useMemo, useRef } from 'react';
import { staticPublicEndpoint } from '@refly/ui-kit';

/**
 * Hook to fetch share data with type safety
 * @template T - The expected type of the share data
 * @param shareId - The ID of the share to fetch
 * @returns Object containing loading state, error state, and fetched data
 */
export const useFetchShareData = <T = any>(shareId?: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(!!shareId);
  const [error, setError] = useState<Error | null>(null);
  const [dataForShareId, setDataForShareId] = useState<string | null>(null);

  // Use ref to store options to avoid dependency issues
  const optionsRef = useRef<RequestInit | undefined>(options);
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  // Function to fetch share data
  const fetchShareData = useCallback(async (id: string) => {
    try {
      const response = await fetch(`${staticPublicEndpoint}/share/${id}.json`, optionsRef.current);
      if (!response.ok) {
        throw new Error(`Failed to fetch share data: ${response?.status}`);
      }
      const responseData = await response.json();
      return responseData as T;
    } catch (err) {
      throw err instanceof Error ? err : new Error('Unknown error occurred');
    }
  }, []);

  // Effect to fetch data when shareId changes
  useEffect(() => {
    // Reset state when shareId changes
    setData(null);
    setError(null);
    setDataForShareId(null);

    // Immediately reflect loading state based on shareId presence
    const hasShareId = !!shareId?.trim();
    setLoading(hasShareId);

    // Only fetch if shareId is provided and non-empty
    if (!hasShareId) {
      return;
    }

    let isMounted = true;
    const fetchData = async () => {
      try {
        const result = await fetchShareData(shareId);
        if (isMounted) {
          setData(result);
          setDataForShareId(shareId);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [shareId, fetchShareData]);

  // Memoize the return value to maintain referential equality
  const normalizedShareId = useMemo(() => shareId?.trim() ?? null, [shareId]);
  const effectiveData = useMemo<T | null>(
    () => (dataForShareId === normalizedShareId ? data : null),
    [dataForShareId, normalizedShareId, data],
  );

  const returnValue = useMemo(
    () => ({
      data: effectiveData,
      loading,
      error,
      fetchShareData,
    }),
    [effectiveData, loading, error, fetchShareData],
  );

  return returnValue;
};
