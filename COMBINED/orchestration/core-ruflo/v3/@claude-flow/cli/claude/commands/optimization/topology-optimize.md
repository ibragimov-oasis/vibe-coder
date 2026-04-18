---
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-ruflo
---

# topology-optimize

Optimize swarm topology for current workload.

## Usage
```bash
npx claude-flow optimization topology-optimize [options]
```

## Options
- `--analyze-first` - Analyze before optimizing
- `--target <metric>` - Optimization target
- `--apply` - Apply optimizations

## Examples
```bash
# Analyze and suggest
npx claude-flow optimization topology-optimize --analyze-first

# Optimize for speed
npx claude-flow optimization topology-optimize --target speed

# Apply changes
npx claude-flow optimization topology-optimize --target efficiency --apply
```

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration hub
- [[orchestration/ruflo]] — RuFlo
- [[000 - Map of Maps]] — Map of Maps

