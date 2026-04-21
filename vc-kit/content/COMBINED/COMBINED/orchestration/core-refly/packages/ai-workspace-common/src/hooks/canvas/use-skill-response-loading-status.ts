import { useMemo } from 'react';
import { useActionResultStoreShallow } from '@refly/stores';
import { useRealtimeCanvasData } from '@refly-packages/ai-workspace-common/hooks/canvas/use-realtime-canvas-data';

export const useSkillResponseLoadingStatus = (_canvasId: string) => {
  const { nodes } = useRealtimeCanvasData();

  // 只订阅 streamResults，避免不必要的重渲染
  const { streamResults } = useActionResultStoreShallow((state) => ({
    streamResults: state.streamResults,
  }));

  const skillResponseNodes = useMemo(
    () => nodes.filter((node) => node.type === 'skillResponse'),
    [nodes],
  );

  const loadingStatus = useMemo(() => {
    if (skillResponseNodes.length === 0) {
      return {
        isLoading: false,
        loadingCount: 0,
        totalCount: 0,
      };
    }

    let loadingCount = 0;

    for (const node of skillResponseNodes) {
      const entityId = node.data?.entityId;
      const metadata = node.data?.metadata as any;
      const status = metadata?.status;

      const isStreaming = !!streamResults[entityId as string];
      const isWaiting = status === 'waiting';
      const isExecuting = status === 'executing';

      if (isWaiting || isExecuting || isStreaming) {
        loadingCount++;
      }
    }

    return {
      isLoading: loadingCount > 0,
      loadingCount,
      totalCount: skillResponseNodes.length,
    };
  }, [streamResults, skillResponseNodes]);

  return { ...loadingStatus, skillResponseNodes, nodes };
};
