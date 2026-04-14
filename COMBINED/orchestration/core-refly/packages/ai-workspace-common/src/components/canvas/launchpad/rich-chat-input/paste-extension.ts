import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Fragment, Slice } from '@tiptap/pm/model';

// Helper types from ProseMirror model
import type { Node as PMNode, Schema } from '@tiptap/pm/model';

// Extension to handle paste events: keep plain text and structure, preserve mention nodes
export const PasteCleanupExtension = Extension.create({
  name: 'pasteCleanup',

  addProseMirrorPlugins() {
    const key = new PluginKey('pasteCleanup');

    // Detect if clipboard contains image items
    const clipboardHasImage = (event: ClipboardEvent): boolean => {
      const items = event?.clipboardData?.items ?? null;
      if (!items || items.length === 0) return false;
      for (const item of Array.from(items)) {
        if ((item?.type ?? '').startsWith('image/')) return true;
      }
      return false;
    };

    // Check whether a fragment contains any mention nodes
    const fragmentHasMention = (fragment: Fragment): boolean => {
      let found = false;
      const childCount = fragment.childCount;
      for (let i = 0; i < childCount; i += 1) {
        const child = fragment.child(i) as PMNode;
        if (child.type?.name === 'mention') {
          found = true;
          break;
        }
        const hasChildren = (child?.content?.childCount ?? 0) > 0;
        if (hasChildren) {
          if (fragmentHasMention(child.content)) {
            found = true;
            break;
          }
        }
      }
      return found;
    };

    // Build a Slice from plain text, preserving paragraphs and line breaks
    const buildSliceFromPlainText = (text: string, schema: Schema): Slice => {
      const paragraphType = schema?.nodes?.paragraph;
      const hardBreakType = schema?.nodes?.hardBreak;

      const paragraphs: PMNode[] = [];
      const rawParagraphs = (text ?? '').replace(/\r\n?/g, '\n').split('\n\n');

      for (let pi = 0; pi < rawParagraphs.length; pi += 1) {
        const paraText = rawParagraphs[pi] ?? '';
        const parts = paraText.split('\n');
        const inlineNodes: PMNode[] = [];

        for (let i = 0; i < parts.length; i += 1) {
          const part = parts[i] ?? '';
          if (part) {
            inlineNodes.push(schema.text(part));
          }
          if (i < parts.length - 1) {
            if (hardBreakType) inlineNodes.push(hardBreakType.create());
          }
        }

        // Allow empty paragraph to represent blank line between paragraphs
        const paragraphNode = paragraphType.create(null, Fragment.from(inlineNodes));
        paragraphs.push(paragraphNode);
      }

      const content = Fragment.from(paragraphs);
      return new Slice(content, 0, 0);
    };

    // Flatten a node's inline content to plain inline nodes, preserving mention nodes
    const flattenInlineFromNode = (node: PMNode, schema: Schema): PMNode[] => {
      const mentionType = schema?.nodes?.mention;
      const hardBreakType = schema?.nodes?.hardBreak;
      const out: PMNode[] = [];

      const content = node.content;
      const count = content?.childCount ?? 0;
      for (let i = 0; i < count; i += 1) {
        const child = content.child(i) as PMNode;
        if (child.type?.name === 'mention' && mentionType) {
          // Preserve mention node with original attributes
          out.push(mentionType.create(child.attrs));
          continue;
        }
        if (child.type?.name === 'hardBreak' && hardBreakType) {
          out.push(hardBreakType.create());
          continue;
        }
        if (child.isText) {
          const value = child.text ?? '';
          if (!value) continue;
          // Split by newline and interleave hardBreaks
          const segments = value.split('\n');
          for (let j = 0; j < segments.length; j += 1) {
            const seg = segments[j] ?? '';
            if (seg) out.push(schema.text(seg));
            if (j < segments.length - 1 && hardBreakType) {
              out.push(hardBreakType.create());
            }
          }
          continue;
        }

        // Recurse into nested content (e.g., links or inline wrappers)
        const hasChildren = (child.content?.childCount ?? 0) > 0;
        if (hasChildren) {
          const nested = flattenInlineFromNode(child as PMNode, schema);
          out.push(...nested);
        }
      }

      return out;
    };

    // Build a Slice from a Fragment by flattening to paragraphs of plain inline nodes
    const buildSliceFromFragment = (fragment: Fragment, schema: Schema): Slice => {
      const paragraphType = schema?.nodes?.paragraph;
      const paragraphs: PMNode[] = [];

      const pushParagraphFromNode = (node: PMNode) => {
        // For block nodes, create a paragraph out of their inline/text content
        const inlineNodes = flattenInlineFromNode(node, schema);
        const paragraphNode = paragraphType.create(null, Fragment.from(inlineNodes));
        paragraphs.push(paragraphNode);
      };

      const traverse = (frag: Fragment) => {
        const childCount = frag.childCount;
        for (let i = 0; i < childCount; i += 1) {
          const pmNode = frag.child(i) as PMNode;
          if (pmNode.isBlock) {
            // If this block has block children, traverse deeper; otherwise, push as paragraph
            const hasNestedBlocks = (() => {
              const content = pmNode.content;
              const cnt = content?.childCount ?? 0;
              for (let k = 0; k < cnt; k += 1) {
                const n = content.child(k) as PMNode;
                if (n.isBlock) return true;
              }
              return false;
            })();

            if (hasNestedBlocks) {
              traverse(pmNode.content);
            } else {
              pushParagraphFromNode(pmNode);
            }
          } else if ((pmNode.content?.childCount ?? 0) > 0) {
            // Non-block wrapper with content
            traverse(pmNode.content);
          } else if (pmNode.isText) {
            // Text at root: wrap into a paragraph
            const paragraphNode = schema.nodes.paragraph.create(
              null,
              Fragment.fromArray([schema.text(pmNode.text ?? '')]),
            );
            paragraphs.push(paragraphNode);
          }
        }
      };

      traverse(fragment);

      // Ensure at least one paragraph
      if (paragraphs.length === 0) {
        paragraphs.push(schema.nodes.paragraph.create());
      }

      const content = Fragment.from(paragraphs);
      return new Slice(content, 0, 0);
    };

    return [
      new Plugin({
        key,
        props: {
          handlePaste(view, event, slice) {
            // Allow image pastes to bubble so external handler can process uploads
            if (clipboardHasImage(event)) {
              return false;
            }

            const schema = view?.state?.schema as Schema;
            const hasMention = fragmentHasMention(slice?.content ?? Fragment.empty);

            let newSlice: Slice;
            if (hasMention) {
              newSlice = buildSliceFromFragment(slice.content, schema);
            } else {
              const text = event?.clipboardData?.getData('text/plain') ?? '';
              newSlice = buildSliceFromPlainText(text, schema);
            }

            event.preventDefault();
            const tr = view.state.tr.replaceSelection(newSlice).scrollIntoView();
            view.dispatch(tr);
            return true;
          },
        },
      }),
    ];
  },
});
