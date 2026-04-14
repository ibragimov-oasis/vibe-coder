import { Edge, Node } from '@xyflow/react';

/**
 * Efficient thread history query class with caching and pre-computed data structures
 * Supports multiple queries with resultId or startNode without rebuilding internal maps
 */
export class ThreadHistoryQuery {
  private nodeMap = new Map<string, Node>();
  private targetToSourceMap = new Map<string, string[]>();
  private sourceToTargetsMap = new Map<string, string[]>();
  private resultIdToNodeMap = new Map<string, Node>();
  private cache = new Map<string, Node[]>();
  private isDirty = true;

  constructor(nodes: Node[] = [], edges: Edge[] = []) {
    this.updateData(nodes, edges);
  }

  /**
   * Update the internal data structures with new nodes and edges
   * This will invalidate the cache and rebuild all maps
   */
  updateData(nodes: Node[], edges: Edge[]): void {
    this.nodeMap.clear();
    this.targetToSourceMap.clear();
    this.sourceToTargetsMap.clear();
    this.resultIdToNodeMap.clear();
    this.cache.clear();
    this.isDirty = true;

    // Build node map and resultId mapping
    for (const node of nodes) {
      this.nodeMap.set(node.id, node);
      if (node.data?.entityId && typeof node.data.entityId === 'string') {
        this.resultIdToNodeMap.set(node.data.entityId, node);
      }
    }

    // Build edge maps
    for (const edge of edges) {
      // Map target -> source for backward traversal (support multiple incoming connections)
      if (!this.targetToSourceMap.has(edge.target)) {
        this.targetToSourceMap.set(edge.target, []);
      }
      this.targetToSourceMap.get(edge.target)?.push(edge.source);

      // Map source -> targets for forward traversal if needed
      if (!this.sourceToTargetsMap.has(edge.source)) {
        this.sourceToTargetsMap.set(edge.source, []);
      }
      this.sourceToTargetsMap.get(edge.source)?.push(edge.target);
    }

    this.isDirty = false;
  }

  /**
   * Add or update a single node
   * This is more efficient than rebuilding all data for small changes
   */
  updateNode(node: Node): void {
    // Remove old entityId mapping if it exists
    const oldNode = this.nodeMap.get(node.id);
    if (
      oldNode?.data?.entityId &&
      typeof oldNode.data.entityId === 'string' &&
      oldNode.data.entityId !== node.data?.entityId
    ) {
      this.resultIdToNodeMap.delete(oldNode.data.entityId);
    }

    this.nodeMap.set(node.id, node);
    if (node.data?.entityId && typeof node.data.entityId === 'string') {
      this.resultIdToNodeMap.set(node.data.entityId, node);
    }
    this.invalidateCache();
  }

  /**
   * Add or update a single edge
   * This is more efficient than rebuilding all data for small changes
   */
  updateEdge(edge: Edge): void {
    // Update target -> source mapping
    if (!this.targetToSourceMap.has(edge.target)) {
      this.targetToSourceMap.set(edge.target, []);
    }
    const targetSources = this.targetToSourceMap.get(edge.target);
    if (targetSources && !targetSources.includes(edge.source)) {
      targetSources.push(edge.source);
    }

    // Update source -> targets mapping
    if (!this.sourceToTargetsMap.has(edge.source)) {
      this.sourceToTargetsMap.set(edge.source, []);
    }
    const sourceTargets = this.sourceToTargetsMap.get(edge.source);
    if (sourceTargets && !sourceTargets.includes(edge.target)) {
      sourceTargets.push(edge.target);
    }

    this.invalidateCache();
  }

  /**
   * Remove a node and all its associated edges
   */
  removeNode(nodeId: string): void {
    this.nodeMap.delete(nodeId);

    // Remove from resultId mapping
    for (const [resultId, node] of this.resultIdToNodeMap.entries()) {
      if (node.id === nodeId) {
        this.resultIdToNodeMap.delete(resultId);
        break;
      }
    }

    // Remove all edges connected to this node
    this.targetToSourceMap.delete(nodeId);
    this.sourceToTargetsMap.delete(nodeId);

    // Remove references from other nodes
    for (const [target, sources] of this.targetToSourceMap.entries()) {
      const filteredSources = sources.filter((source) => source !== nodeId);
      if (filteredSources.length === 0) {
        this.targetToSourceMap.delete(target);
      } else {
        this.targetToSourceMap.set(target, filteredSources);
      }
    }

    for (const [source, targets] of this.sourceToTargetsMap.entries()) {
      const filteredTargets = targets.filter((target) => target !== nodeId);
      if (filteredTargets.length === 0) {
        this.sourceToTargetsMap.delete(source);
      } else {
        this.sourceToTargetsMap.set(source, filteredTargets);
      }
    }

    this.invalidateCache();
  }

  /**
   * Remove an edge
   */
  removeEdge(sourceId: string, targetId: string): void {
    // Remove from target -> source mapping
    const targetSources = this.targetToSourceMap.get(targetId);
    if (targetSources) {
      const filteredSources = targetSources.filter((source) => source !== sourceId);
      if (filteredSources.length === 0) {
        this.targetToSourceMap.delete(targetId);
      } else {
        this.targetToSourceMap.set(targetId, filteredSources);
      }
    }

    // Remove from source -> targets mapping
    const sourceTargets = this.sourceToTargetsMap.get(sourceId);
    if (sourceTargets) {
      const filteredTargets = sourceTargets.filter((target) => target !== targetId);
      if (filteredTargets.length === 0) {
        this.sourceToTargetsMap.delete(sourceId);
      } else {
        this.sourceToTargetsMap.set(sourceId, filteredTargets);
      }
    }

    this.invalidateCache();
  }

  /**
   * Query thread history by resultId
   */
  findByResultId(resultId: string): Node[] {
    const cacheKey = `resultId:${resultId}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) ?? [];
    }

    const startNode = this.resultIdToNodeMap.get(resultId);
    if (!startNode) {
      this.cache.set(cacheKey, []);
      return [];
    }

    const result = this.findByStartNode(startNode);
    this.cache.set(cacheKey, result);
    return result;
  }

  /**
   * Query thread history by startNode
   */
  findByStartNode(startNode: Node): Node[] {
    const cacheKey = `startNode:${startNode.id}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) ?? [];
    }

    if (!startNode || startNode.type !== 'skillResponse') {
      this.cache.set(cacheKey, []);
      return [];
    }

    const history = [startNode];
    const visited = new Set<string>();

    // Helper function to recursively find source nodes
    const findSourceNodes = (nodeId: string) => {
      // Prevent infinite loops in case of circular dependencies
      if (visited.has(nodeId)) return;
      visited.add(nodeId);

      const sourceIds = this.targetToSourceMap.get(nodeId) ?? [];
      for (const sourceId of sourceIds) {
        const sourceNode = this.nodeMap.get(sourceId);

        if (sourceNode?.type === 'skillResponse') {
          // Only add if not already in history
          if (!history.some((node) => node.id === sourceNode.id)) {
            history.push(sourceNode);
          }
          // Continue traversing up the chain
          findSourceNodes(sourceId);
        }
      }
    };

    // Start the recursive search from the start node
    findSourceNodes(startNode.id);

    // Return nodes in reverse order (oldest to newest)
    const result = history.reverse();
    this.cache.set(cacheKey, result);
    return result;
  }

  /**
   * Query thread history with either resultId or startNode
   * This is the main public API that matches the original function signature
   */
  findThreadHistory({
    resultId,
    startNode,
  }: {
    resultId?: string;
    startNode?: Node;
  }): Node[] {
    if (!startNode && !resultId) return [];

    if (resultId) {
      return this.findByResultId(resultId);
    }

    if (startNode) {
      return this.findByStartNode(startNode);
    }

    return [];
  }

  /**
   * Get all nodes in the current dataset
   */
  getAllNodes(): Node[] {
    return Array.from(this.nodeMap.values());
  }

  /**
   * Get all edges in the current dataset
   */
  getAllEdges(): Edge[] {
    const edges: Edge[] = [];
    for (const [source, targets] of this.sourceToTargetsMap.entries()) {
      for (const target of targets) {
        edges.push({ id: `${source}-${target}`, source, target });
      }
    }
    return edges;
  }

  /**
   * Clear the cache (useful for memory management)
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics for debugging
   */
  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }

  /**
   * Check if the data is dirty (needs rebuilding)
   */
  isDataDirty(): boolean {
    return this.isDirty;
  }

  private invalidateCache(): void {
    this.cache.clear();
  }
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use ThreadHistoryQuery class instead for better performance
 */
export const findThreadHistory = ({
  resultId,
  startNode,
  nodes,
  edges,
}: {
  resultId?: string;
  startNode?: Node;
  nodes: Node[];
  edges: Edge[];
}) => {
  const query = new ThreadHistoryQuery(nodes, edges);
  return query.findThreadHistory({ resultId, startNode });
};
