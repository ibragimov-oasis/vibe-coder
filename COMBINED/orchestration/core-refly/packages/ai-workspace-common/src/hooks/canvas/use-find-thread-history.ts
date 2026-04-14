import { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';
import { CanvasNode, ResponseNodeMeta, findThreadHistory } from '@refly/canvas-common';

export const useFindThreadHistory = () => {
  const { getNode, getNodes, getEdges } = useReactFlow();

  return useCallback(
    ({ resultId, startNode }: { resultId?: string; startNode?: CanvasNode<ResponseNodeMeta> }) => {
      const nodes = getNodes();
      const edges = getEdges();
      return findThreadHistory({
        resultId,
        startNode,
        nodes,
        edges,
      }) as CanvasNode<ResponseNodeMeta>[];
    },
    [getNode, getNodes, getEdges],
  );
};
