import { visit } from 'unist-util-visit';
import { processCodeNode, processParagraphNode, processRawNode } from './nodeProcessor';
import { TOOL_USE_TAG_RENDER } from './toolProcessor';

export { TOOL_USE_TAG_RENDER } from './toolProcessor';

/**
 * Rehype plugin to process tool_use tags in markdown
 * When parsing <tool_use> tags, if a <result> exists, extract both <arguments> and <result> and put them on the same node property.
 * If there is no <result>, only extract <arguments>.
 * Preserves text content outside the tags, so text in paragraphs is not lost.
 */
function rehypePlugin() {
  return (tree: any) => {
    visit(tree, (node, index, parent) => {
      // Process raw HTML nodes that might contain tool tags
      const rawResult = processRawNode(node, index, parent);
      if (rawResult) {
        return rawResult;
      }

      // Process paragraph nodes that might contain tool tags
      const paragraphResult = processParagraphNode(node, index);
      if (paragraphResult) {
        return paragraphResult;
      }

      // Process code nodes with specific language class that might contain tool tags
      const codeResult = processCodeNode(node, index, parent);
      if (codeResult) {
        return codeResult;
      }
    });

    // Post-pass: merge duplicated tool nodes by callId, keeping the first occurrence
    const toolNodes: Array<{ node: any; index: number; parent: any }> = [];
    visit(tree, (node: any, index: number | null, parent: any) => {
      if (
        node?.type === 'element' &&
        node?.tagName === TOOL_USE_TAG_RENDER &&
        parent &&
        typeof index === 'number'
      ) {
        toolNodes.push({ node, index, parent });
      }
    });

    const firstByCallId = new Map<string, { node: any; index: number; parent: any }>();
    const toRemove: Array<{ index: number; parent: any }> = [];

    for (const entry of toolNodes) {
      const callId = entry.node?.properties?.['data-tool-call-id'];
      if (!callId) continue;

      const existing = firstByCallId.get(callId);
      if (!existing) {
        firstByCallId.set(callId, entry);
      } else {
        // Merge properties from later node into the first one, preferring non-empty values
        const targetProps = existing.node.properties ?? {};
        const sourceProps = entry.node.properties ?? {};
        for (const key of Object.keys(sourceProps)) {
          const val = sourceProps[key];
          if (val !== undefined && val !== null && String(val).trim() !== '') {
            targetProps[key] = val;
          }
        }
        existing.node.properties = targetProps;
        // Mark the later duplicate for removal
        toRemove.push({ index: entry.index, parent: entry.parent });
      }
    }

    // Remove duplicates from the tree (in reverse order to keep indices valid)
    const sortedRemovals = toRemove.sort((a, b) => b.index - a.index);
    for (const { index, parent } of sortedRemovals) {
      if (Array.isArray(parent?.children)) {
        parent.children.splice(index, 1);
      }
    }
  };
}

export default rehypePlugin;
