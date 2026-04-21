import { IContextItem } from '@refly/common-types';
import { CanvasData, CanvasEdge, CanvasNode, GenericToolset } from '@refly/openapi-schema';
import { deepmerge, genNodeEntityId } from '@refly/utils';

/**
 * Configuration options for the mirrorCanvasData function
 */
interface MirrorCanvasOptions {
  /** Optional function to process/transform each node during mirroring */
  nodeProcessor?: (node: CanvasNode) => CanvasNode;
  /** Optional function to process/transform each edge during mirroring */
  edgeProcessor?: (edge: CanvasEdge) => CanvasEdge;
  /** Optional mapping to replace toolsets with new instances during mirroring */
  replaceToolsetMap?: Record<string, GenericToolset>;
}

/**
 * Creates a deep copy of canvas data with new entity IDs while preserving node IDs
 *
 * This function performs a complete mirroring operation that:
 * 1. Preserves original node IDs
 * 2. Generates new unique IDs for all entities
 * 3. Updates all references to use the new entity IDs (context items, etc.)
 * 4. Optionally transforms nodes/edges using provided processors
 * 5. Optionally replaces toolsets with new instances
 *
 * This is primarily used when duplicating canvases to ensure entity ID uniqueness
 * while preserving all node IDs and relationships.
 *
 * @param data - The original canvas data containing nodes and edges
 * @param options - Optional configuration for the mirroring process
 * @returns A new CanvasData object with entity IDs regenerated and references updated
 *
 * @example
 * ```typescript
 * const originalCanvas = { nodes: [...], edges: [...] };
 * const mirroredCanvas = mirrorCanvasData(originalCanvas, {
 *   nodeProcessor: (node) => ({ ...node, data: { ...node.data, isMirrored: true } })
 * });
 * ```
 */
export const mirrorCanvasData = (data: CanvasData, options?: MirrorCanvasOptions) => {
  const { nodes, edges } = data;

  // Phase 1: Create entity ID mapping table
  // Generate new entity IDs for nodes that have entity data
  // Entity IDs are used to track unique content across the canvas
  const entityIdMap = new Map<string, string>(); // old entity id -> new entity id
  for (const node of nodes) {
    const entityId = node.data?.entityId;

    if (entityId) {
      // Generate a new entity ID based on the node type
      const targetEntityId = genNodeEntityId(node.type);
      entityIdMap.set(entityId, targetEntityId);
    }
  }

  // Phase 2: Transform nodes with new entity IDs and update all references
  const newNodes: CanvasNode[] = [];

  // Track entity mappings for context management
  const entityMap = new Map<string, IContextItem>();

  for (const node of nodes) {
    // Preserve original node ID, only update entity ID
    const sourceEntityId = node.data?.entityId ?? '';
    const targetEntityId = entityIdMap.get(sourceEntityId) ?? sourceEntityId;

    // Create a deep copy of the node with updated entity ID
    let newNode: CanvasNode = deepmerge(
      { ...node },
      {
        data: { entityId: targetEntityId },
      },
    );

    // Replace toolset references if a replacement map is provided
    // This allows updating tool configurations during duplication
    if (Array.isArray(newNode.data?.metadata?.selectedToolsets) && options?.replaceToolsetMap) {
      newNode.data.metadata.selectedToolsets = newNode.data.metadata.selectedToolsets.map(
        (toolset) => options.replaceToolsetMap![toolset.id] ?? toolset,
      );
    }

    // Apply custom node processor if provided
    if (options?.nodeProcessor) {
      newNode = options.nodeProcessor(newNode);
    }

    // Track the entity mapping for this node
    entityMap.set(sourceEntityId, {
      entityId: targetEntityId,
      type: newNode.type,
    });

    newNodes.push(newNode);
  }

  // Update context items to reference new entities
  for (const node of newNodes) {
    if (Array.isArray(node.data?.metadata?.contextItems)) {
      node.data.metadata.contextItems = node.data.metadata.contextItems.map((item) => ({
        ...item,
        ...entityMap.get(item.entityId),
      }));
    }
  }

  // Phase 3: Transform edges (preserve original node IDs)
  const newEdges: CanvasEdge[] = [];
  for (const edge of edges) {
    // Preserve original edge source and target since node IDs are not regenerated
    let newEdge = { ...edge };

    // Apply custom edge processor if provided
    if (options?.edgeProcessor) {
      newEdge = options.edgeProcessor(newEdge);
    }

    newEdges.push(newEdge);
  }

  // Return the completely transformed canvas data
  return { nodes: newNodes, edges: newEdges };
};
