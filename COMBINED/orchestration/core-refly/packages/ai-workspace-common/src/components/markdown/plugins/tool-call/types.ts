// Tool call status for UI rendering
export enum ToolCallStatus {
  EXECUTING = 'executing',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export const parseToolCallStatus = (val?: string): ToolCallStatus => {
  switch (val) {
    case ToolCallStatus.COMPLETED:
      return ToolCallStatus.COMPLETED;
    case ToolCallStatus.FAILED:
      return ToolCallStatus.FAILED;
    default:
      return ToolCallStatus.EXECUTING;
  }
};
