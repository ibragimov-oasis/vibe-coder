import { SKIP } from 'unist-util-visit';
import {
  hasToolUseTag,
  processToolUseInText,
  extractToolUseContent,
  getFullToolUseMatch,
  extractToolAttributes,
  createToolNode,
  TOOL_USE_TAG,
} from './toolProcessor';

/**
 * Decode URL that may have been encoded by remarkGfm
 * Optimized with pre-defined mappings for better performance
 */
const decodeUrlFromRemarkGfm = (url: string): string => {
  const URL_DECODE_MAPPINGS = [
    [/%5C%22/g, '\\"'],
    [/%5Cn/g, '\\n'],
    [/%5Cr/g, '\\r'],
    [/%5Ct/g, '\\t'],
    [/%2C/g, ','],
    [/%5C/g, '\\'],
  ] as const;

  let decodedUrl = url;
  for (const [pattern, replacement] of URL_DECODE_MAPPINGS) {
    decodedUrl = decodedUrl.replace(pattern, replacement);
  }

  try {
    // Then try standard URL decoding for any remaining encoded characters
    return decodeURIComponent(decodedUrl);
  } catch {
    // If decoding fails, return the URL with replacements only
    return decodedUrl;
  }
};

/**
 * Extract text content and link elements from node children
 */
const extractTextAndLinks = (children: any[]): { text: string; linkElements: any[] } => {
  let text = '';
  const linkElements: any[] = [];

  for (const child of children) {
    let value = '';
    if (child.type === 'text' || child.type === 'raw') {
      value = child.value || '';
    } else if (child.type === 'element' && child.tagName === 'a' && child.properties?.href) {
      value = decodeUrlFromRemarkGfm(child.properties.href);
      linkElements.push(child);
    }

    text += value;
  }

  return { text, linkElements };
};

/**
 * Process raw HTML nodes that might contain tool tags
 */
export const processRawNode = (
  node: any,
  index: number,
  parent: any,
): [typeof SKIP, number] | null => {
  if (node.type !== 'raw' || !hasToolUseTag(node.value)) {
    return null;
  }

  const content = extractToolUseContent(node.value);
  if (!content) {
    return null;
  }

  const fullMatch = getFullToolUseMatch(node.value);
  if (!fullMatch) {
    return null;
  }

  const attributes = extractToolAttributes(content);
  const toolNode = createToolNode(attributes);

  // Split the raw text by the full match to get text before and after the tool_use tag
  const parts = node.value.split(fullMatch);
  const newNodes = [];

  // Add text before the tool_use tag if it exists
  if (parts[0]) {
    newNodes.push({
      type: 'raw',
      value: parts[0],
    });
  }

  newNodes.push(toolNode);

  // Add text after the tool_use tag if it exists
  if (parts[1]) {
    newNodes.push({
      type: 'raw',
      value: parts[1],
    });
  }

  // Replace the original node with the new nodes
  parent.children.splice(index, 1, ...newNodes);
  // Skip to after the last inserted node
  return [SKIP, (index ?? 0) + newNodes.length - 1];
};

/**
 * Process paragraph nodes that might contain tool tags
 */
export const processParagraphNode = (node: any, index: number): [typeof SKIP, number] | null => {
  if (node.type !== 'element' || node.tagName !== 'p' || !node.children?.length) {
    return null;
  }

  const { text, linkElements } = extractTextAndLinks(node.children);

  if (!hasToolUseTag(text)) {
    return null;
  }

  const result = processToolUseInText(text, linkElements, 'text');
  if (!result) {
    return null;
  }

  const { toolNode, textNodes } = result;

  const newChildren = [];

  // Add text nodes before and after the tool node
  if (textNodes[0]) {
    newChildren.push(textNodes[0]);
  }

  newChildren.push(toolNode);

  // Add text after the tool_use tag if it exists
  if (textNodes[1]) {
    newChildren.push(textNodes[1]);
  }

  // Replace the children of the paragraph with our new children
  node.children = newChildren;
  return [SKIP, index];
};

/**
 * Process code nodes with specific language class that might contain tool tags
 */
export const processCodeNode = (
  node: any,
  index: number,
  parent: any,
): [typeof SKIP, number] | null => {
  if (
    node.type !== 'element' ||
    node.tagName !== 'code' ||
    !node.properties?.className?.includes(`language-${TOOL_USE_TAG}`) ||
    !node.children?.length
  ) {
    return null;
  }

  const { text, linkElements } = extractTextAndLinks(node.children);

  if (!hasToolUseTag(text)) {
    return null;
  }

  const result = processToolUseInText(text, linkElements, 'text');
  if (!result) {
    return null;
  }

  const { toolNode, textNodes } = result;

  const newChildren = [];

  // Add text nodes before and after the tool node
  if (textNodes[0]) {
    newChildren.push(textNodes[0]);
  }

  newChildren.push(toolNode);

  // Add text after the tool_use tag if it exists
  if (textNodes[1]) {
    newChildren.push(textNodes[1]);
  }

  // Replace the parent's children and change tag name to paragraph
  parent.children = newChildren;
  parent.tagName = 'p';
  return [SKIP, index];
};
