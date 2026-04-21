import mitt from 'mitt';
import { IContextItem } from '@refly/common-types';

// Define event types
type ContextEventTypes = {
  addToContext: {
    contextItem: IContextItem;
    duplicated: boolean;
  };
  addToContextCompleted: {
    contextItem: IContextItem;
    success: boolean;
  };
};

// Create the event emitter instance
export const contextEmitter = mitt<ContextEventTypes>();

// Helper function for adding a context item
export const emitAddToContext = ({
  contextItem,
  duplicated,
}: { contextItem: IContextItem; duplicated: boolean }) => {
  contextEmitter.emit('addToContext', { contextItem, duplicated });
};

// Helper function for completing addition of a context item
export const emitAddToContextCompleted = ({
  contextItem,
  success,
}: { contextItem: IContextItem; success: boolean }) => {
  contextEmitter.emit('addToContextCompleted', { contextItem, success });
};

// Helper function to clean up event handlers
export const cleanupContextEvents = () => {
  contextEmitter.all.clear();
};
