---
tags:
  - domain/skills
  - artifact/command
  - source/claude-commands
---

# swarm-spawn

Spawn agents in the swarm.

## Usage
```bash
npx claude-flow swarm spawn [options]
```

## Options
- `--type <type>` - Agent type
- `--count <n>` - Number to spawn
- `--capabilities <list>` - Agent capabilities

## Examples
```bash
npx claude-flow swarm spawn --type coder --count 3
npx claude-flow swarm spawn --type researcher --capabilities "web-search,analysis"
```

## 🔗 Связи

- [[MOC - System]] — System commands
- [[MOC - Skills]] — Skills library

