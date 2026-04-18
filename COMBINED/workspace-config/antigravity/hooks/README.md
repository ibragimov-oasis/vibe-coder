---
tags:
  - domain/skills
  - artifact/config
  - source/workspace-config
---

# Antigravity Hooks

> Lifecycle hooks for Antigravity plugins.

## Overview

This folder contains hook configurations for Antigravity plugins. Hooks allow you to run custom code at specific points in the agent lifecycle.

## Available Hook Points

| Hook | When It Runs |
|------|--------------|
| `pre-prompt` | Before processing user prompt |
| `post-prompt` | After processing user prompt |
| `pre-tool` | Before tool execution |
| `post-tool` | After tool execution |
| `session-start` | When session begins |
| `session-end` | When session ends |

## Creating Hooks

Hooks are defined as scripts that receive context from the agent.

```javascript
// Example hook
module.exports = async (context) => {
  // Your hook logic here
  return {
    modified: true,
    context: updatedContext
  };
};
```

## Source

Hook patterns are derived from:
- `Orchestration/ruflo/claude/hooks/`
- `Skills/antigravity-awesome-skills/`
- `Orchestration/oh-my-claudecode/hooks/`

See those directories for example implementations.

## 🔗 Связи

- [[MOC - System]] — workspace-config
- [[000 - Map of Maps]] — Map of Maps

