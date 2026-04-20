import Component from './render';
import rehypePlugin, { TOOL_USE_TAG_RENDER } from './rehypePlugin';

// Define a consistent interface for the plugin
type ToolCallElement = {
  Component: typeof Component;
  rehypePlugin: typeof rehypePlugin;
  tag: string;
};

// Create the plugin object
const ToolCallElement: ToolCallElement = {
  Component,
  rehypePlugin,
  tag: TOOL_USE_TAG_RENDER, // We'll use TOOL_USE_TAG_RENDER as our main tag since we'll handle both tool_use and tool_use_result
};

export default ToolCallElement;
