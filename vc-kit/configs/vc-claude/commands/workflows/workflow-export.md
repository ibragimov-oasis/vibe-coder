---
tags:
  - domain/skills
  - artifact/command
  - source/claude-commands
---

# workflow-export

Export workflows for sharing.

## Usage
```bash
npx claude-flow workflow export [options]
```

## Options
- `--name <name>` - Workflow to export
- `--format <type>` - Export format
- `--include-history` - Include execution history

## Examples
```bash
# Export workflow
npx claude-flow workflow export --name "deploy-api"

# As YAML
npx claude-flow workflow export --name "test-suite" --format yaml

# With history
npx claude-flow workflow export --name "deploy-api" --include-history
```

## 🔗 Связи

- [[MOC - System]] — System commands
- [[MOC - Skills]] — Skills library

