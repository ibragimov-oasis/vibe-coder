export function isClaudeModel(model: string): boolean {
  return (
    model === 'sonnet' ||
    model === 'opus' ||
    model === 'haiku' ||
    model === 'inherit' ||
    model.startsWith('claude-')
  );
}

export function isModelCompatible(provider: 'claude' | 'codex', model?: string): boolean {
  if (!model) return true;
  if (provider === 'claude') return isClaudeModel(model);
  // Codex: accept most models, but reject obvious Claude aliases/prefixes
  return !isClaudeModel(model);
}
