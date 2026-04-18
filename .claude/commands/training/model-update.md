---
tags:
  - domain/skills
  - artifact/command
  - source/claude-commands
---

# model-update

Update neural models with new data.

## Usage
```bash
npx claude-flow training model-update [options]
```

## Options
- `--model <name>` - Model to update
- `--incremental` - Incremental update
- `--validate` - Validate after update

## Examples
```bash
# Update all models
npx claude-flow training model-update

# Specific model
npx claude-flow training model-update --model agent-selector

# Incremental with validation
npx claude-flow training model-update --incremental --validate
```

## 🔗 Связи

- [[MOC - System]] — System commands
- [[MOC - Skills]] — Skills library

