/**
 * @fileoverview Canvas node utilities and type-specific metadata generators
 * @description This module provides helper functions for working with different types of canvas nodes,
 * including default metadata generation, dimension calculations, and node relationship analysis.
 */

import { CanvasNodeType } from '@refly/openapi-schema';
import { Edge, Node } from '@xyflow/react';
import {
  DocumentNodeMeta,
  ResourceNodeMeta,
  SkillNodeMeta,
  ToolNodeMeta,
  ResponseNodeMeta,
  CodeArtifactNodeMeta,
} from './types';

/**
 * Generates default metadata for a canvas node based on its type
 *
 * This function provides sensible defaults for each node type's metadata,
 * ensuring consistent initialization and proper type safety across the canvas system.
 *
 * @param nodeType - The type of canvas node to generate metadata for
 * @returns Default metadata object appropriate for the node type
 *
 * @example
 * ```typescript
 * const documentMeta = getNodeDefaultMetadata('document');
 * // Returns: { sizeMode: 'adaptive', contentPreview: '', title: '', ... }
 * ```
 */
export const getNodeDefaultMetadata = (nodeType: CanvasNodeType) => {
  // Handle invalid or missing node types gracefully
  if (!nodeType) {
    return {};
  }

  // Base metadata applied to all node types for consistent behavior
  const baseMetadata = {
    sizeMode: 'adaptive' as const, // Default size mode that will be overridden with global setting
  };

  // Generate type-specific metadata based on the node type
  switch (nodeType) {
    case 'document':
      return {
        ...baseMetadata,
        contentPreview: '', // Empty preview until content is loaded
        title: '', // Document title, empty by default
        lastModified: new Date().toISOString(), // Track modification time
        status: 'finish', // Document processing status
      } as DocumentNodeMeta;

    case 'resource':
      return {
        ...baseMetadata,
        resourceType: 'weblink', // Default resource type
        lastAccessed: new Date().toISOString(), // Track access time
      } as ResourceNodeMeta;

    case 'skill':
      return {
        ...baseMetadata,
        query: '', // User's query or prompt for the skill
        modelInfo: undefined, // AI model information (populated when used)
      } as SkillNodeMeta;

    case 'tool':
      return {
        ...baseMetadata,
        toolType: 'TextToSpeech', // Default tool type
        configuration: {}, // Tool-specific configuration object
        status: 'ready', // Tool readiness status
        lastUsed: null, // Timestamp of last usage
      } as ToolNodeMeta;

    case 'skillResponse':
      return {
        ...baseMetadata,
        status: 'waiting', // Initial status before skill execution
        version: 0, // Response version for tracking updates
      } as ResponseNodeMeta;

    case 'toolResponse':
      return {
        ...baseMetadata,
        modelName: 'Tool Response', // Display name for the response
        status: 'waiting', // Initial status before tool execution
        executionTime: null, // Time taken to execute the tool
      } as ResponseNodeMeta;

    case 'image':
      return {
        ...baseMetadata,
        style: {}, // Image styling and display options
      };

    case 'codeArtifact':
      return {
        ...baseMetadata,
        status: 'generating', // Initial generation status
        language: 'typescript', // Default programming language
        style: {}, // Code styling options
        activeTab: 'preview', // Default active tab in the artifact view
      } as CodeArtifactNodeMeta;

    default:
      // For unknown node types, return only base metadata
      return baseMetadata;
  }
};

/**
 * Gets the measured height of a canvas node
 *
 * Returns the actual measured height from the DOM, or a default fallback value
 * if the node hasn't been measured yet (e.g., during initial render).
 *
 * @param node - The canvas node to get height for
 * @returns The measured height in pixels, or 320px as fallback
 */
export const getNodeHeight = (node: Node): number => {
  return node.measured?.height ?? 320;
};

/**
 * Gets the measured width of a canvas node
 *
 * Returns the actual measured width from the DOM, or a default fallback value
 * if the node hasn't been measured yet (e.g., during initial render).
 *
 * @param node - The canvas node to get width for
 * @returns The measured width in pixels, or 288px as fallback
 */
export const getNodeWidth = (node: Node): number => {
  return node.measured?.width ?? 288;
};

/**
 * Calculates the hierarchical level of a node from the root nodes
 *
 * This function performs a breadth-first search to determine how many levels
 * deep a node is in the canvas graph, starting from the root nodes (nodes with
 * no incoming edges). Used for layout algorithms and visual hierarchy.
 *
 * @param nodeId - The ID of the node to find the level for
 * @param _nodes - Array of all nodes in the canvas (currently unused)
 * @param edges - Array of all edges defining node connections
 * @param rootNodes - Array of root nodes to start the level calculation from
 * @returns The level number (0 for root nodes), or -1 if node not found
 */
export const getNodeLevel = (
  nodeId: string,
  _nodes: Node[],
  edges: any[],
  rootNodes: Node[],
): number => {
  // Track visited nodes to prevent infinite loops in case of circular dependencies
  const visited = new Set<string>();

  // Initialize BFS queue with root nodes at level 0
  const queue: Array<{ id: string; level: number }> = rootNodes.map((node) => ({
    id: node.id,
    level: 0,
  }));

  // Perform breadth-first search to find the target node's level
  while (queue.length > 0) {
    const item = queue.shift() ?? { id: '', level: -1 };
    const { id, level } = item;

    // Found the target node, return its level
    if (id && id === nodeId) return level;

    // Skip if already visited or invalid ID
    if (visited.has(id) || !id) continue;
    visited.add(id);

    // Find all nodes directly connected from this node and add them to queue
    const nextIds = edges
      .filter((edge) => edge.source === id)
      .map((edge) => ({ id: edge.target, level: level + 1 }));

    queue.push(...nextIds);
  }

  // Node not found in the graph
  return -1;
};

/**
 * Identifies root nodes in a canvas graph (nodes with no incoming edges)
 *
 * Root nodes are the starting points of the canvas workflow - they have no
 * dependencies on other nodes and can be executed first. This is essential
 * for workflow execution order and layout algorithms.
 *
 * @param nodes - Array of all nodes in the canvas
 * @param edges - Array of all edges defining node connections
 * @returns Array of root nodes (nodes with no incoming edges)
 *
 * @example
 * ```typescript
 * const rootNodes = getRootNodes(allNodes, allEdges);
 * // Returns nodes that have no edges pointing to them
 * ```
 */
export const getRootNodes = (nodes: Node[], edges: Edge[]): Node[] => {
  return nodes.filter((node) => !edges.some((edge) => edge.target === node.id));
};
