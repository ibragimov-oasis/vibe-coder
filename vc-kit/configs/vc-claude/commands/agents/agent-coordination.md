---
tags:
  - domain/skills
  - artifact/command
  - source/claude-commands
---

# agent-coordination

Coordination patterns for multi-agent collaboration.

## Coordination Patterns

### Hierarchical
Queen-led with worker specialization
```bash
npx claude-flow swarm init --topology hierarchical
```

### Mesh
Peer-to-peer collaboration
```bash
npx claude-flow swarm init --topology mesh
```

### Adaptive
Dynamic topology based on workload
```bash
npx claude-flow swarm init --topology adaptive
```

## Best Practices
- Use hierarchical for complex projects
- Use mesh for research tasks
- Use adaptive for unknown workloads

## 🔗 Связи

- [[MOC - System]] — System commands
- [[MOC - Skills]] — Skills library

