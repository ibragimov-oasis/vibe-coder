import { describe, it, expect, beforeEach } from 'vitest';
import { findThreadHistory, ThreadHistoryQuery } from './history';
import type { Node, Edge } from '@xyflow/react';

// Helper to create a skillResponse node
const createSkillResponseNode = (id: string, entityId?: string): Node => ({
  id,
  type: 'skillResponse',
  position: { x: 0, y: 0 },
  data: { entityId: entityId ?? id },
});

// Helper to create a non-skillResponse node
const createOtherNode = (id: string, type = 'document'): Node => ({
  id,
  type,
  position: { x: 0, y: 0 },
  data: { entityId: id },
});

// Helper to create an edge
const createEdge = (id: string, source: string, target: string): Edge => ({
  id,
  source,
  target,
  type: 'default',
});

describe('findThreadHistory', () => {
  describe('Basic functionality', () => {
    it('should return empty array when no startNode and no resultId provided', () => {
      const nodes: Node[] = [];
      const edges: Edge[] = [];

      const result = findThreadHistory({
        nodes,
        edges,
      });

      expect(result).toEqual([]);
    });

    it('should return empty array when resultId is provided but no matching node found', () => {
      const nodes = [createSkillResponseNode('node1')];
      const edges: Edge[] = [];

      const result = findThreadHistory({
        resultId: 'nonexistent',
        nodes,
        edges,
      });

      expect(result).toEqual([]);
    });

    it('should return empty array when startNode is not a skillResponse type', () => {
      const startNode = createOtherNode('node1');
      const nodes = [startNode];
      const edges: Edge[] = [];

      const result = findThreadHistory({
        startNode,
        nodes,
        edges,
      });

      expect(result).toEqual([]);
    });

    it('should return single node when no edges exist', () => {
      const startNode = createSkillResponseNode('node1');
      const nodes = [startNode];
      const edges: Edge[] = [];

      const result = findThreadHistory({
        startNode,
        nodes,
        edges,
      });

      expect(result).toEqual([startNode]);
    });

    it('should find startNode by resultId when startNode is not provided', () => {
      const node1 = createSkillResponseNode('node1', 'entity1');
      const nodes = [node1];
      const edges: Edge[] = [];

      const result = findThreadHistory({
        resultId: 'entity1',
        nodes,
        edges,
      });

      expect(result).toEqual([node1]);
    });
  });

  describe('Thread traversal', () => {
    it('should traverse a simple chain of skillResponse nodes', () => {
      const node1 = createSkillResponseNode('node1');
      const node2 = createSkillResponseNode('node2');
      const node3 = createSkillResponseNode('node3');
      const nodes = [node1, node2, node3];
      const edges = [
        createEdge('edge1', 'node1', 'node2'), // node1 -> node2
        createEdge('edge2', 'node2', 'node3'), // node2 -> node3
      ];

      const result = findThreadHistory({
        startNode: node3,
        nodes,
        edges,
      });

      // Should return nodes in reverse order (oldest to newest)
      expect(result).toEqual([node1, node2, node3]);
    });

    it('should handle multiple incoming edges to the same node', () => {
      const node1 = createSkillResponseNode('node1');
      const node2 = createSkillResponseNode('node2');
      const node3 = createSkillResponseNode('node3');
      const node4 = createSkillResponseNode('node4');
      const nodes = [node1, node2, node3, node4];
      const edges = [
        createEdge('edge1', 'node1', 'node2'), // node1 -> node2
        createEdge('edge2', 'node1', 'node3'), // node1 -> node3
        createEdge('edge3', 'node2', 'node4'), // node2 -> node4
        createEdge('edge4', 'node3', 'node4'), // node3 -> node4
      ];

      const result = findThreadHistory({
        startNode: node4,
        nodes,
        edges,
      });

      // Should include all connected skillResponse nodes
      expect(result).toHaveLength(4);
      expect(result).toContainEqual(node1);
      expect(result).toContainEqual(node2);
      expect(result).toContainEqual(node3);
      expect(result).toContainEqual(node4);
    });

    it('should ignore non-skillResponse nodes in traversal', () => {
      const node1 = createSkillResponseNode('node1');
      const node2 = createOtherNode('node2', 'document');
      const node3 = createSkillResponseNode('node3');
      const nodes = [node1, node2, node3];
      const edges = [
        createEdge('edge1', 'node1', 'node2'), // node1 -> node2 (document)
        createEdge('edge2', 'node2', 'node3'), // node2 (document) -> node3
      ];

      const result = findThreadHistory({
        startNode: node3,
        nodes,
        edges,
      });

      // The function only traverses through skillResponse nodes, so it won't find node1
      // because it can't traverse through the document node
      expect(result).toEqual([node3]);
    });

    it('should handle complex branching structure', () => {
      const node1 = createSkillResponseNode('node1');
      const node2 = createSkillResponseNode('node2');
      const node3 = createSkillResponseNode('node3');
      const node4 = createSkillResponseNode('node4');
      const node5 = createSkillResponseNode('node5');
      const nodes = [node1, node2, node3, node4, node5];
      const edges = [
        createEdge('edge1', 'node1', 'node2'), // node1 -> node2
        createEdge('edge2', 'node1', 'node3'), // node1 -> node3
        createEdge('edge3', 'node2', 'node4'), // node2 -> node4
        createEdge('edge4', 'node3', 'node5'), // node3 -> node5
      ];

      const result = findThreadHistory({
        startNode: node4,
        nodes,
        edges,
      });

      // Should include node1, node2, and node4
      expect(result).toHaveLength(3);
      expect(result).toContainEqual(node1);
      expect(result).toContainEqual(node2);
      expect(result).toContainEqual(node4);
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle circular dependencies without infinite loops', () => {
      const node1 = createSkillResponseNode('node1');
      const node2 = createSkillResponseNode('node2');
      const nodes = [node1, node2];
      const edges = [
        createEdge('edge1', 'node1', 'node2'), // node1 -> node2
        createEdge('edge2', 'node2', 'node1'), // node2 -> node1 (circular)
      ];

      const result = findThreadHistory({
        startNode: node1,
        nodes,
        edges,
      });

      // Should not cause infinite loop and should include both nodes
      expect(result).toHaveLength(2);
      expect(result).toContainEqual(node1);
      expect(result).toContainEqual(node2);
    });

    it('should handle missing source nodes in edges', () => {
      const node1 = createSkillResponseNode('node1');
      const nodes = [node1];
      const edges = [
        createEdge('edge1', 'nonexistent', 'node1'), // nonexistent -> node1
      ];

      const result = findThreadHistory({
        startNode: node1,
        nodes,
        edges,
      });

      // Should still work and return the start node
      expect(result).toEqual([node1]);
    });

    it('should handle missing target nodes in edges', () => {
      const node1 = createSkillResponseNode('node1');
      const nodes = [node1];
      const edges = [
        createEdge('edge1', 'node1', 'nonexistent'), // node1 -> nonexistent
      ];

      const result = findThreadHistory({
        startNode: node1,
        nodes,
        edges,
      });

      // Should still work and return the start node
      expect(result).toEqual([node1]);
    });

    it('should handle empty nodes array', () => {
      const nodes: Node[] = [];
      const edges: Edge[] = [];

      const result = findThreadHistory({
        resultId: 'test',
        nodes,
        edges,
      });

      expect(result).toEqual([]);
    });

    it('should handle empty edges array', () => {
      const startNode = createSkillResponseNode('node1');
      const nodes = [startNode];
      const edges: Edge[] = [];

      const result = findThreadHistory({
        startNode,
        nodes,
        edges,
      });

      expect(result).toEqual([startNode]);
    });

    it('should handle duplicate nodes in history', () => {
      const node1 = createSkillResponseNode('node1');
      const node2 = createSkillResponseNode('node2');
      const nodes = [node1, node2];
      const edges = [
        createEdge('edge1', 'node1', 'node2'),
        createEdge('edge2', 'node2', 'node1'), // This would create a cycle
      ];

      const result = findThreadHistory({
        startNode: node1,
        nodes,
        edges,
      });

      // Should not include duplicate nodes
      const uniqueIds = new Set(result.map((node) => node.id));
      expect(uniqueIds.size).toBe(result.length);
    });
  });

  describe('Ordering and structure', () => {
    it('should return nodes in reverse order (oldest to newest)', () => {
      const node1 = createSkillResponseNode('node1');
      const node2 = createSkillResponseNode('node2');
      const node3 = createSkillResponseNode('node3');
      const nodes = [node1, node2, node3];
      const edges = [
        createEdge('edge1', 'node1', 'node2'), // node1 -> node2
        createEdge('edge2', 'node2', 'node3'), // node2 -> node3
      ];

      const result = findThreadHistory({
        startNode: node3,
        nodes,
        edges,
      });

      // Should be in order: node1 (oldest), node2, node3 (newest)
      expect(result[0]).toEqual(node1);
      expect(result[1]).toEqual(node2);
      expect(result[2]).toEqual(node3);
    });

    it('should maintain consistent ordering for complex graphs', () => {
      const node1 = createSkillResponseNode('node1');
      const node2 = createSkillResponseNode('node2');
      const node3 = createSkillResponseNode('node3');
      const node4 = createSkillResponseNode('node4');
      const nodes = [node1, node2, node3, node4];
      const edges = [
        createEdge('edge1', 'node1', 'node2'), // node1 -> node2
        createEdge('edge2', 'node1', 'node3'), // node1 -> node3
        createEdge('edge3', 'node2', 'node4'), // node2 -> node4
        createEdge('edge4', 'node3', 'node4'), // node3 -> node4
      ];

      const result = findThreadHistory({
        startNode: node4,
        nodes,
        edges,
      });

      // Should include all 4 nodes and end with node4 (the start)
      expect(result).toHaveLength(4);
      expect(result).toContainEqual(node1);
      expect(result).toContainEqual(node2);
      expect(result).toContainEqual(node3);
      expect(result).toContainEqual(node4);
      expect(result[result.length - 1]).toEqual(node4);
    });
  });

  describe('Performance and large graphs', () => {
    it('should handle large graphs efficiently', () => {
      const nodeCount = 1000;
      const nodes: Node[] = [];
      const edges: Edge[] = [];

      // Create a chain of 1000 nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(createSkillResponseNode(`node${i}`));
        if (i > 0) {
          edges.push(createEdge(`edge${i}`, `node${i - 1}`, `node${i}`)); // node[i-1] -> node[i]
        }
      }

      const startNode = nodes[nodeCount - 1];

      const startTime = performance.now();
      const result = findThreadHistory({
        startNode,
        nodes,
        edges,
      });
      const endTime = performance.now();

      // Should complete in reasonable time (less than 100ms)
      expect(endTime - startTime).toBeLessThan(100);
      expect(result).toHaveLength(nodeCount);
    });

    it('should handle highly connected graphs', () => {
      const nodeCount = 100;
      const nodes: Node[] = [];
      const edges: Edge[] = [];

      // Create a fully connected graph
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(createSkillResponseNode(`node${i}`));
        for (let j = 0; j < i; j++) {
          edges.push(createEdge(`edge${i}-${j}`, `node${j}`, `node${i}`)); // node[j] -> node[i]
        }
      }

      const startNode = nodes[nodeCount - 1];

      const startTime = performance.now();
      const result = findThreadHistory({
        startNode,
        nodes,
        edges,
      });
      const endTime = performance.now();

      // Should complete in reasonable time
      expect(endTime - startTime).toBeLessThan(100);
      expect(result).toHaveLength(nodeCount);
    });
  });

  describe('Data integrity', () => {
    it('should preserve original node data', () => {
      const node1 = createSkillResponseNode('node1', 'entity1');
      const node2 = createSkillResponseNode('node2', 'entity2');
      const nodes = [node1, node2];
      const edges = [createEdge('edge1', 'node1', 'node2')]; // node1 -> node2

      const result = findThreadHistory({
        startNode: node2,
        nodes,
        edges,
      });

      // Should preserve all original node properties
      expect(result[0]).toEqual(node1);
      expect(result[1]).toEqual(node2);
      expect(result[0].data?.entityId).toBe('entity1');
      expect(result[1].data?.entityId).toBe('entity2');
    });

    it('should not modify original nodes or edges arrays', () => {
      const node1 = createSkillResponseNode('node1');
      const node2 = createSkillResponseNode('node2');
      const nodes = [node1, node2];
      const edges = [createEdge('edge1', 'node1', 'node2')]; // node1 -> node2

      const originalNodes = [...nodes];
      const originalEdges = [...edges];

      findThreadHistory({
        startNode: node2,
        nodes,
        edges,
      });

      // Original arrays should be unchanged
      expect(nodes).toEqual(originalNodes);
      expect(edges).toEqual(originalEdges);
    });
  });
});

describe('ThreadHistoryQuery', () => {
  let query: ThreadHistoryQuery;
  let nodes: Node[];
  let edges: Edge[];

  beforeEach(() => {
    // Reset test data for each test
    nodes = [
      createSkillResponseNode('node1', 'entity1'),
      createSkillResponseNode('node2', 'entity2'),
      createSkillResponseNode('node3', 'entity3'),
      createOtherNode('node4', 'document'),
    ];
    edges = [createEdge('edge1', 'node1', 'node2'), createEdge('edge2', 'node2', 'node3')];
    query = new ThreadHistoryQuery(nodes, edges);
    // Clear cache to ensure clean state for each test
    query.clearCache();
  });

  describe('Constructor and initialization', () => {
    it('should initialize with empty data by default', () => {
      const emptyQuery = new ThreadHistoryQuery();
      expect(emptyQuery.getAllNodes()).toEqual([]);
      expect(emptyQuery.getAllEdges()).toEqual([]);
    });

    it('should initialize with provided nodes and edges', () => {
      expect(query.getAllNodes()).toHaveLength(4);
      expect(query.getAllEdges()).toHaveLength(2);
    });

    it('should build internal maps correctly', () => {
      const result = query.findByResultId('entity1');
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('node1');
    });
  });

  describe('findByResultId', () => {
    it('should find thread history by resultId', () => {
      const result = query.findByResultId('entity2');
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe('node1');
      expect(result[1].id).toBe('node2');
    });

    it('should return empty array for non-existent resultId', () => {
      const result = query.findByResultId('nonexistent');
      expect(result).toEqual([]);
    });

    it('should cache results for repeated queries', () => {
      const result1 = query.findByResultId('entity2');
      const result2 = query.findByResultId('entity2');

      expect(result1).toBe(result2); // Same reference due to caching
      // findByResultId internally calls findByStartNode, so we get 2 cache entries
      expect(query.getCacheStats().size).toBe(2);
    });
  });

  describe('findByStartNode', () => {
    it('should find thread history by startNode', () => {
      const startNode = nodes[2]; // node3
      const result = query.findByStartNode(startNode);

      expect(result).toHaveLength(3);
      expect(result[0].id).toBe('node1');
      expect(result[1].id).toBe('node2');
      expect(result[2].id).toBe('node3');
    });

    it('should return empty array for non-skillResponse node', () => {
      const startNode = nodes[3]; // document node
      const result = query.findByStartNode(startNode);

      expect(result).toEqual([]);
    });

    it('should cache results for repeated queries', () => {
      const startNode = nodes[2];
      const result1 = query.findByStartNode(startNode);
      const result2 = query.findByStartNode(startNode);

      expect(result1).toBe(result2); // Same reference due to caching
    });
  });

  describe('findThreadHistory (main API)', () => {
    it('should work with resultId parameter', () => {
      const result = query.findThreadHistory({ resultId: 'entity2' });
      expect(result).toHaveLength(2);
    });

    it('should work with startNode parameter', () => {
      const result = query.findThreadHistory({ startNode: nodes[2] });
      expect(result).toHaveLength(3);
    });

    it('should return empty array when no parameters provided', () => {
      const result = query.findThreadHistory({});
      expect(result).toEqual([]);
    });

    it('should prioritize resultId over startNode when both provided', () => {
      const result = query.findThreadHistory({
        resultId: 'entity1',
        startNode: nodes[2],
      });
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('node1');
    });
  });

  describe('updateData', () => {
    it('should update all data and clear cache', () => {
      const newNodes = [createSkillResponseNode('newNode1', 'newEntity1')];
      const newEdges: Edge[] = [];

      query.updateData(newNodes, newEdges);

      expect(query.getAllNodes()).toHaveLength(1);
      expect(query.getAllEdges()).toHaveLength(0);
      expect(query.getCacheStats().size).toBe(0);
    });

    it('should rebuild internal maps after update', () => {
      const newNodes = [createSkillResponseNode('newNode1', 'newEntity1')];
      const newEdges: Edge[] = [];

      query.updateData(newNodes, newEdges);

      const result = query.findByResultId('newEntity1');
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('newNode1');
    });
  });

  describe('updateNode', () => {
    it('should add new node', () => {
      const newNode = createSkillResponseNode('newNode', 'newEntity');
      query.updateNode(newNode);

      expect(query.getAllNodes()).toHaveLength(5);
      expect(query.findByResultId('newEntity')).toHaveLength(1);
    });

    it('should update existing node', () => {
      const updatedNode = { ...nodes[0], data: { ...nodes[0].data, entityId: 'updatedEntity' } };
      query.updateNode(updatedNode);

      expect(query.findByResultId('updatedEntity')).toHaveLength(1);
      expect(query.findByResultId('entity1')).toEqual([]);
    });

    it('should clear cache after update', () => {
      query.findByResultId('entity1'); // Populate cache
      query.updateNode(nodes[0]);

      expect(query.getCacheStats().size).toBe(0);
    });
  });

  describe('updateEdge', () => {
    it('should add new edge', () => {
      const newEdge = createEdge('newEdge', 'node1', 'node3');
      query.updateEdge(newEdge);

      expect(query.getAllEdges()).toHaveLength(3);
    });

    it('should not add duplicate edges', () => {
      const duplicateEdge = createEdge('duplicate', 'node1', 'node2');
      query.updateEdge(duplicateEdge);

      expect(query.getAllEdges()).toHaveLength(2);
    });

    it('should clear cache after update', () => {
      query.findByResultId('entity1'); // Populate cache
      query.updateEdge(createEdge('newEdge', 'node1', 'node3'));

      expect(query.getCacheStats().size).toBe(0);
    });
  });

  describe('removeNode', () => {
    it('should remove node and all connected edges', () => {
      query.removeNode('node2');

      expect(query.getAllNodes()).toHaveLength(3);
      expect(query.getAllEdges()).toHaveLength(0);
    });

    it('should remove node from resultId mapping', () => {
      query.removeNode('node1');

      expect(query.findByResultId('entity1')).toEqual([]);
    });

    it('should clear cache after removal', () => {
      query.findByResultId('entity1'); // Populate cache
      query.removeNode('node1');

      expect(query.getCacheStats().size).toBe(0);
    });
  });

  describe('removeEdge', () => {
    it('should remove specific edge', () => {
      query.removeEdge('node1', 'node2');

      expect(query.getAllEdges()).toHaveLength(1);
    });

    it('should clear cache after removal', () => {
      query.findByResultId('entity1'); // Populate cache
      query.removeEdge('node1', 'node2');

      expect(query.getCacheStats().size).toBe(0);
    });
  });

  describe('Cache management', () => {
    it('should clear cache when clearCache is called', () => {
      query.findByResultId('entity1');
      query.findByResultId('entity2');

      // Each findByResultId call creates 2 cache entries (resultId + startNode)
      expect(query.getCacheStats().size).toBe(4);

      query.clearCache();

      expect(query.getCacheStats().size).toBe(0);
    });

    it('should provide cache statistics', () => {
      query.findByResultId('entity1');
      query.findByStartNode(nodes[2]);

      const stats = query.getCacheStats();
      // findByResultId creates 2 entries, findByStartNode creates 1 entry
      expect(stats.size).toBe(3);
      expect(stats.keys).toContain('resultId:entity1');
      expect(stats.keys).toContain('startNode:node1'); // From findByResultId
      expect(stats.keys).toContain('startNode:node3'); // From findByStartNode
    });
  });

  describe('Utility methods', () => {
    it('should return all nodes', () => {
      const allNodes = query.getAllNodes();
      expect(allNodes).toHaveLength(4);
      expect(allNodes).toEqual(expect.arrayContaining(nodes));
    });

    it('should return all edges', () => {
      const allEdges = query.getAllEdges();
      expect(allEdges).toHaveLength(2);
      expect(allEdges[0]).toMatchObject({ source: 'node1', target: 'node2' });
      expect(allEdges[1]).toMatchObject({ source: 'node2', target: 'node3' });
    });

    it('should track dirty state', () => {
      expect(query.isDataDirty()).toBe(false);

      query.updateNode(createSkillResponseNode('newNode'));
      expect(query.isDataDirty()).toBe(false); // Should be false after update

      query.updateData([], []);
      expect(query.isDataDirty()).toBe(false); // Should be false after full update
    });
  });

  describe('Performance with caching', () => {
    it('should be faster on repeated queries due to caching', () => {
      const largeNodes: Node[] = [];
      const largeEdges: Edge[] = [];

      // Create a large chain
      for (let i = 0; i < 100; i++) {
        largeNodes.push(createSkillResponseNode(`node${i}`, `entity${i}`));
        if (i > 0) {
          largeEdges.push(createEdge(`edge${i}`, `node${i - 1}`, `node${i}`));
        }
      }

      const largeQuery = new ThreadHistoryQuery(largeNodes, largeEdges);

      // First query (no cache)
      const start1 = performance.now();
      largeQuery.findByResultId('entity50');
      const end1 = performance.now();
      const firstQueryTime = end1 - start1;

      // Second query (cached)
      const start2 = performance.now();
      largeQuery.findByResultId('entity50');
      const end2 = performance.now();
      const secondQueryTime = end2 - start2;

      // Cached query should be significantly faster
      expect(secondQueryTime).toBeLessThan(firstQueryTime);
    });
  });

  describe('Complex scenarios', () => {
    it('should handle complex branching with caching', () => {
      const complexNodes = [
        createSkillResponseNode('root', 'rootEntity'),
        createSkillResponseNode('branch1', 'branch1Entity'),
        createSkillResponseNode('branch2', 'branch2Entity'),
        createSkillResponseNode('leaf1', 'leaf1Entity'),
        createSkillResponseNode('leaf2', 'leaf2Entity'),
      ];

      const complexEdges = [
        createEdge('e1', 'root', 'branch1'),
        createEdge('e2', 'root', 'branch2'),
        createEdge('e3', 'branch1', 'leaf1'),
        createEdge('e4', 'branch2', 'leaf2'),
      ];

      const complexQuery = new ThreadHistoryQuery(complexNodes, complexEdges);

      // Query from different leaf nodes
      const result1 = complexQuery.findByResultId('leaf1Entity');
      const result2 = complexQuery.findByResultId('leaf2Entity');

      expect(result1).toHaveLength(3); // root, branch1, leaf1
      expect(result2).toHaveLength(3); // root, branch2, leaf2
      // Each findByResultId call creates 2 cache entries (resultId + startNode)
      expect(complexQuery.getCacheStats().size).toBe(4);
    });

    it('should handle incremental updates efficiently', () => {
      const initialQuery = new ThreadHistoryQuery([], []);

      // Add nodes one by one
      for (let i = 0; i < 10; i++) {
        const node = createSkillResponseNode(`node${i}`, `entity${i}`);
        initialQuery.updateNode(node);

        if (i > 0) {
          const edge = createEdge(`edge${i}`, `node${i - 1}`, `node${i}`);
          initialQuery.updateEdge(edge);
        }
      }

      const result = initialQuery.findByResultId('entity9');
      expect(result).toHaveLength(10);
    });
  });

  describe('Backward compatibility', () => {
    it('should produce same results as original function', () => {
      const originalResult = findThreadHistory({
        resultId: 'entity2',
        nodes,
        edges,
      });

      const classResult = query.findThreadHistory({
        resultId: 'entity2',
      });

      expect(classResult).toEqual(originalResult);
    });

    it('should handle all edge cases like original function', () => {
      const testCases = [
        { resultId: 'nonexistent' },
        { startNode: createOtherNode('invalid', 'document') },
        { resultId: 'entity1' },
        { startNode: nodes[2] },
      ];

      for (const testCase of testCases) {
        const originalResult = findThreadHistory({
          ...testCase,
          nodes,
          edges,
        });

        const classResult = query.findThreadHistory(testCase);

        expect(classResult).toEqual(originalResult);
      }
    });
  });
});
