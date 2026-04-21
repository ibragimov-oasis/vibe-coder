export interface ToolInputSchema {
  type: string;
  title: string;
  description?: string;
  required?: string[];
  properties: Record<string, object>;
}

export interface ITool {
  id: string;
  name: string;
  description?: string;
  inputSchema?: ToolInputSchema;
}

export const formatITools = (tools: ITool[]) => {
  return tools
    .map(
      (tool) => `- ID: ${tool.id}, Description: ${tool.description ?? 'No description available.'}`,
    )
    .join('\n');
};
