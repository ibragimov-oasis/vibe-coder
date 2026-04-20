import mitt from 'mitt';
import { XYPosition } from '@xyflow/react';
import { CanvasNodeType, EntityType, ModelInfo } from '@refly/openapi-schema';
import { CanvasNodeData, CanvasNodeFilter } from '@refly/canvas-common';
import { IContextItem } from '@refly/common-types';

export type NodeContextMenuSource = 'node' | 'handle';
export type NodeDragCreateInfo = {
  nodeId: string;
  handleType: 'source' | 'target';
  position: XYPosition;
};

export type MediaType = 'image' | 'video' | 'audio';

export type Events = {
  addNode: {
    node: { type: CanvasNodeType; data: CanvasNodeData<any>; position?: XYPosition };
    connectTo?: CanvasNodeFilter[];
    shouldPreview?: boolean;
    needSetCenter?: boolean;
    positionCallback?: (position: XYPosition) => void;
  };
  jumpToDescendantNode: {
    entityId: string;
    descendantNodeType: CanvasNodeType;
    shouldPreview?: boolean;
  };
  closeNodePreviewByEntityId: {
    entityId: string;
  };
  openNodeContextMenu: {
    nodeId: string;
    nodeType: CanvasNodeType;
    x: number;
    y: number;
    source?: 'node' | 'handle';
    dragCreateInfo?: NodeDragCreateInfo;
  };
  generateMedia: {
    providerItemId: string;
    mediaType: MediaType;
    targetType: EntityType;
    targetId: string;
    query: string;
    modelInfo: ModelInfo;
    nodeId: string;
    contextItems?: IContextItem[];
  };
  mediaGenerationComplete: {
    nodeId: string;
    success: boolean;
    error?: string;
  };
};

export const nodeOperationsEmitter = mitt<Events>();
