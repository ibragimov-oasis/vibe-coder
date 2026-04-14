import { memo } from 'react';
import { CanvasNode } from '@refly/canvas-common';
import MonacoEditor from '@refly-packages/ai-workspace-common/modules/artifacts/code-runner/monaco-editor';
import { CodeArtifactType } from '@refly/openapi-schema';

interface CodeArtifactPreviewProps {
  node: CanvasNode;
}

// Code artifact preview component that directly shows code using MonacoEditor
const CodeArtifactPreview = memo(({ node }: CodeArtifactPreviewProps) => {
  const contentPreview = node.data?.contentPreview || '';
  const language = node.data?.metadata?.language || 'typescript';
  const type =
    (node.data?.metadata?.type as CodeArtifactType) || 'application/refly.artifacts.react';

  return (
    <div className="w-full h-full overflow-hidden">
      <MonacoEditor
        content={contentPreview}
        language={language as string}
        type={type}
        readOnly={true}
        isGenerating={false}
        canvasReadOnly={true}
        onChange={() => {}} // No-op since it's read-only
      />
    </div>
  );
});

CodeArtifactPreview.displayName = 'CodeArtifactPreview';

export default CodeArtifactPreview;
