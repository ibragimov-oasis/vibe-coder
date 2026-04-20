import { FC, useEffect, useRef, memo } from 'react';
import { CanvasNodeType } from '@refly/openapi-schema';
import {
  NodeContextMenuSource,
  NodeDragCreateInfo,
} from '@refly-packages/ai-workspace-common/events/nodeOperations';
import { ContextMenu } from '../context-menu';
import { NodeContextMenu } from '../node-context-menu';

interface UnifiedContextMenuProps {
  open: boolean;
  position: { x: number; y: number };
  menuType: 'canvas' | 'node' | 'selection' | 'doubleClick';
  context?: {
    nodeId?: string;
    nodeType?: CanvasNodeType;
    source?: NodeContextMenuSource;
    dragCreateInfo?: NodeDragCreateInfo;
    isSelection?: boolean;
  };
  setOpen: (open: boolean) => void;
}

export const UnifiedContextMenu: FC<UnifiedContextMenuProps> = memo(
  ({ open, position, menuType, context, setOpen }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    // Add data attribute for global click detection
    useEffect(() => {
      if (menuRef.current) {
        menuRef.current.setAttribute('data-unified-menu', 'true');
      }
    }, [open]);

    if (!open) return null;

    // Render different menu types based on menuType
    switch (menuType) {
      case 'canvas':
        return (
          <div ref={menuRef}>
            <ContextMenu
              open={open}
              position={position}
              setOpen={setOpen}
              isSelection={context?.isSelection}
            />
          </div>
        );

      case 'node':
        if (!context?.nodeId || !context?.nodeType) return null;
        return (
          <div ref={menuRef}>
            <NodeContextMenu
              open={open}
              position={position}
              nodeId={context.nodeId}
              nodeType={context.nodeType}
              source={context.source}
              dragCreateInfo={context.dragCreateInfo}
              setOpen={setOpen}
            />
          </div>
        );

      case 'doubleClick':
        // For double click, show the same menu as canvas context menu
        return (
          <div ref={menuRef}>
            <ContextMenu open={open} position={position} setOpen={setOpen} isSelection={false} />
          </div>
        );

      default:
        return null;
    }
  },
);

UnifiedContextMenu.displayName = 'UnifiedContextMenu';
