import { useEffect, useRef, useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';
import { useCanvasStoreShallow } from '@refly/stores';

interface UseNodeExecutionFocusOptions {
  isExecuting: boolean;
  canvasId: string;
  delay?: number;
}

/**
 * Hook to automatically focus on executing nodes
 * When multiple nodes are executing simultaneously, focuses on all executing nodes
 * When only one node is executing, focuses on that single node
 */
export const useNodeExecutionFocus = ({
  isExecuting,
  canvasId,
  delay = 500,
}: UseNodeExecutionFocusOptions) => {
  const { fitView, getNodes } = useReactFlow();
  const hasFocusedRef = useRef(false);
  const focusTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { nodeExecutions } = useCanvasStoreShallow((state) => ({
    nodeExecutions: state.canvasNodeExecutions[canvasId] ?? [],
  }));

  const focusOnExecutingNodes = useCallback(() => {
    try {
      // Get all currently executing nodes
      const executingNodes =
        nodeExecutions
          ?.filter((execution) => execution.status === 'executing')
          ?.map((execution) => execution.nodeId) ?? [];

      if (executingNodes.length === 0) {
        return;
      }

      // Get all nodes from ReactFlow to check if they exist
      const allNodes = getNodes();
      const existingExecutingNodes = executingNodes.filter((execNodeId) =>
        allNodes.some((node) => node.id === execNodeId),
      );

      if (existingExecutingNodes.length > 0) {
        fitView({
          nodes: existingExecutingNodes.map((id) => ({ id })),
          padding: 0.3,
          duration: 800,
          minZoom: 0.1,
          maxZoom: 1,
        });
        hasFocusedRef.current = true;
      }
    } catch (error) {
      console.warn('Failed to focus on executing nodes:', error);
    }
  }, [nodeExecutions, getNodes, fitView]);

  useEffect(() => {
    // Clear any existing timeout
    if (focusTimeoutRef.current) {
      clearTimeout(focusTimeoutRef.current);
      focusTimeoutRef.current = null;
    }

    if (isExecuting && !hasFocusedRef.current) {
      focusTimeoutRef.current = setTimeout(() => {
        focusOnExecutingNodes();
      }, delay);

      return () => {
        if (focusTimeoutRef.current) {
          clearTimeout(focusTimeoutRef.current);
          focusTimeoutRef.current = null;
        }
      };
    }

    // Reset focus flag when execution stops
    if (!isExecuting) {
      hasFocusedRef.current = false;
    }
  }, [isExecuting, focusOnExecutingNodes, delay]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (focusTimeoutRef.current) {
        clearTimeout(focusTimeoutRef.current);
      }
    };
  }, []);
};
