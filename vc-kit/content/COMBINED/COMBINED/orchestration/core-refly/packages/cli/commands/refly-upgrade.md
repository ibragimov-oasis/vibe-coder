---
name: refly-upgrade
description: Upgrade Refly CLI skill files
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-refly
---

Run:

```bash
refly upgrade
```

This will:
1. Reinstall the latest SKILL.md and reference files
2. Update slash commands (if `~/.claude/commands/` exists)
3. Update skill version in config

Useful when you've updated the CLI package and want to refresh skill files.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration hub
- [[orchestration/refly]] — Refly
- [[000 - Map of Maps]] — Map of Maps

