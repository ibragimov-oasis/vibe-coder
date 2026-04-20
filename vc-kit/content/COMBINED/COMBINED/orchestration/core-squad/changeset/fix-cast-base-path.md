---
'@bradygaster/squad-cli': patch
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

Passes repo root to LocalAgentSource instead of .squad/ dir, preventing a double-nested .squad/.squad/agents/ lookup. In remote mode, passes paths.teamDir (team repo root) so agents are discovered from the correct location.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-squad]] — core-squad
- [[MOC - Skills]] — Skills library

