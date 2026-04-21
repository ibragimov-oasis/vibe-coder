---
tags:
  - domain/skills
  - artifact/command
  - source/commands
---

# memory-persist

Persist memory across sessions.

## Usage
```bash
npx claude-flow memory persist [options]
```

## Options
- `--export <file>` - Export to file
- `--import <file>` - Import from file
- `--compress` - Compress memory data

## Examples
```bash
# Export memory
npx claude-flow memory persist --export memory-backup.json

# Import memory
npx claude-flow memory persist --import memory-backup.json

# Compressed export
npx claude-flow memory persist --export memory.gz --compress
```

## 🔗 Связи

- [[MOC - System]] — commands
- [[000 - Map of Maps]] — Map of Maps

