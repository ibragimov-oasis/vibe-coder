---
tags:
  - domain/skills
  - artifact/command
  - source/commands
---

# real-time-view

Real-time view of swarm activity.

## Usage
```bash
npx claude-flow monitoring real-time-view [options]
```

## Options
- `--filter <type>` - Filter view
- `--highlight <pattern>` - Highlight pattern
- `--tail <n>` - Show last N events

## Examples
```bash
# Start real-time view
npx claude-flow monitoring real-time-view

# Filter errors
npx claude-flow monitoring real-time-view --filter errors

# Highlight pattern
npx claude-flow monitoring real-time-view --highlight "API"
```

## 🔗 Связи

- [[MOC - System]] — commands
- [[000 - Map of Maps]] — Map of Maps

