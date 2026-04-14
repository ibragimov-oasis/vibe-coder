import { describe, it, expect, vi } from 'vitest';
import { mirrorCanvasData } from './data';
import type {
  CanvasData,
  CanvasNode,
  CanvasEdge,
  CanvasNodeType,
  GenericToolset,
} from '@refly/openapi-schema';
import type { IContextItem } from '@refly-packages/common-types';

// Use a valid CanvasNodeType for tests
const TEST_NODE_TYPE: CanvasNodeType = 'document';

// Helper to create a minimal CanvasNode
const createNode = (
  id: string,
  entityId?: string,
  metadata: Record<string, any> = {},
): CanvasNode => ({
  id,
  type: TEST_NODE_TYPE,
  position: { x: 0, y: 0 },
  data: {
    title: `Node ${id}`,
    entityId: entityId ?? id,
    metadata,
  },
});

// Helper to create a CanvasNode with context items
const createNodeWithContext = (
  id: string,
  entityId: string,
  contextItems: IContextItem[],
): CanvasNode => ({
  id,
  type: TEST_NODE_TYPE,
  position: { x: 0, y: 0 },
  data: {
    title: `Node ${id}`,
    entityId,
    metadata: {
      contextItems,
    },
  },
});

// Helper to create a CanvasNode with toolsets
const createNodeWithToolsets = (
  id: string,
  entityId: string,
  toolsets: GenericToolset[],
): CanvasNode => ({
  id,
  type: TEST_NODE_TYPE,
  position: { x: 0, y: 0 },
  data: {
    title: `Node ${id}`,
    entityId,
    metadata: {
      selectedToolsets: toolsets,
    },
  },
});

// Helper to create a minimal CanvasEdge
const createEdge = (
  id: string,
  source: string,
  target: string,
  extra: Partial<CanvasEdge> = {},
): CanvasEdge => ({
  id,
  source,
  target,
  type: 'default',
  ...extra,
});

// Helper to create a toolset
const createToolset = (id: string, name: string): GenericToolset => ({
  id,
  name,
  type: 'regular' as const,
});

describe('mirrorCanvasData', () => {
  it('should return empty canvas data when input is empty', () => {
    const input: CanvasData = { nodes: [], edges: [] };
    const result = mirrorCanvasData(input);

    expect(result).toEqual({ nodes: [], edges: [] });
  });

  it('should preserve original node IDs', () => {
    const node1 = createNode('original-node-1');
    const node2 = createNode('original-node-2');
    const input: CanvasData = {
      nodes: [node1, node2],
      edges: [],
    };

    const result = mirrorCanvasData(input);

    expect(result.nodes).toHaveLength(2);
    expect(result.nodes[0].id).toBe('original-node-1');
    expect(result.nodes[1].id).toBe('original-node-2');
  });

  it('should generate new unique entity IDs', () => {
    const node1 = createNode('node-1', 'entity-1');
    const node2 = createNode('node-2', 'entity-2');
    const input: CanvasData = {
      nodes: [node1, node2],
      edges: [],
    };

    const result = mirrorCanvasData(input);

    expect(result.nodes[0].data?.entityId).not.toBe('entity-1');
    expect(result.nodes[1].data?.entityId).not.toBe('entity-2');
    expect(result.nodes[0].data?.entityId).not.toBe(result.nodes[1].data?.entityId);
  });

  it('should preserve node properties except IDs', () => {
    const node = createNode('original-node', 'original-entity', {
      customProp: 'custom-value',
      contentPreview: 'preview text',
    });
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input);

    expect(result.nodes[0].type).toBe(TEST_NODE_TYPE);
    expect(result.nodes[0].position).toEqual({ x: 0, y: 0 });
    expect(result.nodes[0].data?.title).toBe('Node original-node');
    expect(result.nodes[0].data?.metadata?.customProp).toBe('custom-value');
    expect(result.nodes[0].data?.metadata?.contentPreview).toBe('preview text');
  });

  it('should preserve edge source and target references to original node IDs', () => {
    const node1 = createNode('node-1');
    const node2 = createNode('node-2');
    const edge = createEdge('edge-1', 'node-1', 'node-2');
    const input: CanvasData = {
      nodes: [node1, node2],
      edges: [edge],
    };

    const result = mirrorCanvasData(input);

    expect(result.edges).toHaveLength(1);
    expect(result.edges[0].source).toBe('node-1');
    expect(result.edges[0].target).toBe('node-2');
    expect(result.edges[0].source).toBe(result.nodes[0].id);
    expect(result.edges[0].target).toBe(result.nodes[1].id);
  });

  it('should preserve edge properties except source and target', () => {
    const node1 = createNode('node-1');
    const node2 = createNode('node-2');
    const edge = createEdge('edge-1', 'node-1', 'node-2', {
      type: 'custom-edge-type',
    });
    const input: CanvasData = {
      nodes: [node1, node2],
      edges: [edge],
    };

    const result = mirrorCanvasData(input);

    expect(result.edges[0].id).toBe('edge-1');
    expect(result.edges[0].type).toBe('custom-edge-type');
  });

  it('should update context items to reference new entity IDs', () => {
    const contextItem1: IContextItem = {
      title: 'Referenced Node 1',
      entityId: 'entity-1',
      type: 'document',
    };
    const contextItem2: IContextItem = {
      title: 'Referenced Node 2',
      entityId: 'entity-2',
      type: 'document',
    };

    const node1 = createNodeWithContext('node-1', 'entity-1', []);
    const node2 = createNodeWithContext('node-2', 'entity-2', [contextItem1, contextItem2]);

    const input: CanvasData = {
      nodes: [node1, node2],
      edges: [],
    };

    const result = mirrorCanvasData(input);

    const contextItems = result.nodes[1].data?.metadata?.contextItems as IContextItem[];
    expect(contextItems).toHaveLength(2);
    if (contextItems && contextItems.length >= 2) {
      expect(contextItems[0].entityId).not.toBe('entity-1');
      expect(contextItems[1].entityId).not.toBe('entity-2');
      expect(contextItems[0].entityId).toBe(result.nodes[0].data?.entityId);
    }
  });

  it('should handle nodes without entity IDs', () => {
    const node: CanvasNode = {
      id: 'node-1',
      type: TEST_NODE_TYPE,
      position: { x: 0, y: 0 },
      data: {
        title: 'Node node-1',
        entityId: undefined as any, // Test undefined case
      },
    };
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input);

    // When entityId is undefined, it gets converted to empty string
    expect(result.nodes[0].data?.entityId).toBe('');
  });

  it('should handle nodes without metadata', () => {
    const node: CanvasNode = {
      id: 'node-1',
      type: TEST_NODE_TYPE,
      position: { x: 0, y: 0 },
      data: {
        title: 'Node 1',
        entityId: 'entity-1',
        // No metadata
      },
    };
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input);

    expect(result.nodes[0].data?.entityId).not.toBe('entity-1');
    expect(result.nodes[0].data?.metadata).toBeUndefined();
  });

  it('should handle nodes without context items array', () => {
    const node: CanvasNode = {
      id: 'node-1',
      type: TEST_NODE_TYPE,
      position: { x: 0, y: 0 },
      data: {
        title: 'Node 1',
        entityId: 'entity-1',
        metadata: {
          // contextItems is not an array
          contextItems: 'not-an-array',
        },
      },
    };
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input);

    expect(result.nodes[0].data?.metadata?.contextItems).toBe('not-an-array');
  });

  it('should apply node processor when provided', () => {
    const node = createNode('node-1');
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const nodeProcessor = vi.fn((node: CanvasNode) => ({
      ...node,
      data: {
        ...node.data,
        metadata: {
          ...node.data?.metadata,
          processed: true,
        },
      },
    }));

    const result = mirrorCanvasData(input, { nodeProcessor });

    expect(nodeProcessor).toHaveBeenCalledTimes(1);
    expect(result.nodes[0].data?.metadata?.processed).toBe(true);
  });

  it('should apply edge processor when provided', () => {
    const node1 = createNode('node-1');
    const node2 = createNode('node-2');
    const edge = createEdge('edge-1', 'node-1', 'node-2');
    const input: CanvasData = {
      nodes: [node1, node2],
      edges: [edge],
    };

    const edgeProcessor = vi.fn((edge: CanvasEdge) => ({
      ...edge,
      type: 'processed',
    }));

    const result = mirrorCanvasData(input, { edgeProcessor });

    expect(edgeProcessor).toHaveBeenCalledTimes(1);
    expect(result.edges[0].type).toBe('processed');
  });

  it('should replace toolsets when replaceToolsetMap is provided', () => {
    const originalToolset = createToolset('toolset-1', 'Original Toolset');
    const replacementToolset = createToolset('replacement-1', 'Replacement Toolset');

    const node = createNodeWithToolsets('node-1', 'entity-1', [originalToolset]);
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input, {
      replaceToolsetMap: {
        'toolset-1': replacementToolset,
      },
    });

    const toolsets = result.nodes[0].data?.metadata?.selectedToolsets as GenericToolset[];
    expect(toolsets).toHaveLength(1);
    if (toolsets && toolsets.length > 0) {
      expect(toolsets[0]).toEqual(replacementToolset);
    }
  });

  it('should keep original toolset when not in replaceToolsetMap', () => {
    const originalToolset = createToolset('toolset-1', 'Original Toolset');
    const node = createNodeWithToolsets('node-1', 'entity-1', [originalToolset]);
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input, {
      replaceToolsetMap: {
        'other-toolset': createToolset('other', 'Other'),
      },
    });

    const toolsets = result.nodes[0].data?.metadata?.selectedToolsets as GenericToolset[];
    if (toolsets && toolsets.length > 0) {
      expect(toolsets[0]).toEqual(originalToolset);
    }
  });

  it('should handle empty toolsets array', () => {
    const node = createNodeWithToolsets('node-1', 'entity-1', []);
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input, {
      replaceToolsetMap: {
        'toolset-1': createToolset('replacement', 'Replacement'),
      },
    });

    expect(result.nodes[0].data?.metadata?.selectedToolsets).toEqual([]);
  });

  it('should handle non-array toolsets', () => {
    const node: CanvasNode = {
      id: 'node-1',
      type: TEST_NODE_TYPE,
      position: { x: 0, y: 0 },
      data: {
        title: 'Node 1',
        entityId: 'entity-1',
        metadata: {
          selectedToolsets: 'not-an-array',
        },
      },
    };
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input, {
      replaceToolsetMap: {
        'toolset-1': createToolset('replacement', 'Replacement'),
      },
    });

    expect(result.nodes[0].data?.metadata?.selectedToolsets).toBe('not-an-array');
  });

  it('should handle context items referencing non-existent entities', () => {
    const contextItem: IContextItem = {
      title: 'Referenced Node',
      entityId: 'non-existent-entity',
      type: 'document',
    };

    const node = createNodeWithContext('node-1', 'entity-1', [contextItem]);
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input);

    // Should keep the original entity ID for non-existent entities
    const contextItems = result.nodes[0].data?.metadata?.contextItems as IContextItem[];
    expect(contextItems?.[0].entityId).toBe('non-existent-entity');
  });

  it('should handle multiple nodes with complex relationships', () => {
    const node1 = createNode('node-1', 'entity-1');
    const node2 = createNode('node-2', 'entity-2');
    const node3 = createNode('node-3', 'entity-3');

    const contextItem1: IContextItem = {
      title: 'Node 1',
      entityId: 'entity-1',
      type: 'document',
    };
    const contextItem2: IContextItem = {
      title: 'Node 2',
      entityId: 'entity-2',
      type: 'document',
    };

    const node4 = createNodeWithContext('node-4', 'entity-4', [contextItem1, contextItem2]);

    const edges = [
      createEdge('edge-1', 'node-1', 'node-2'),
      createEdge('edge-2', 'node-2', 'node-3'),
      createEdge('edge-3', 'node-3', 'node-4'),
    ];

    const input: CanvasData = {
      nodes: [node1, node2, node3, node4],
      edges,
    };

    const result = mirrorCanvasData(input);

    // All nodes should preserve original IDs
    expect(result.nodes).toHaveLength(4);
    const nodeIds = result.nodes.map((n) => n.id);
    expect(nodeIds).toEqual(['node-1', 'node-2', 'node-3', 'node-4']);

    // All entity IDs should be new
    const entityIds = result.nodes.map((n) => n.data?.entityId).filter(Boolean);
    expect(new Set(entityIds).size).toBe(4); // All entity IDs are unique

    // All edges should reference the original node IDs
    expect(result.edges).toHaveLength(3);
    for (const edge of result.edges) {
      expect(nodeIds).toContain(edge.source);
      expect(nodeIds).toContain(edge.target);
    }

    // Context items should reference the new entity IDs
    const contextItems = result.nodes[3].data?.metadata?.contextItems as IContextItem[];
    expect(contextItems).toHaveLength(2);
    if (contextItems) {
      expect(entityIds).toContain(contextItems[0].entityId);
      expect(entityIds).toContain(contextItems[1].entityId);
    }
  });

  it('should maintain original data structure and types', () => {
    const node = createNode('node-1', 'entity-1', {
      numberProp: 42,
      booleanProp: true,
      arrayProp: [1, 2, 3],
      objectProp: { nested: 'value' },
    });
    const input: CanvasData = {
      nodes: [node],
      edges: [],
    };

    const result = mirrorCanvasData(input);

    expect(typeof result.nodes[0].data?.metadata?.numberProp).toBe('number');
    expect(typeof result.nodes[0].data?.metadata?.booleanProp).toBe('boolean');
    expect(Array.isArray(result.nodes[0].data?.metadata?.arrayProp)).toBe(true);
    expect(typeof result.nodes[0].data?.metadata?.objectProp).toBe('object');
  });
});
