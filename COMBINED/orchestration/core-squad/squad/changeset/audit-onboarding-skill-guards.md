---
'@bradygaster/squad-cli': patch
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

Add defensive guards from architecture audit: (1) verify roster is populated after team creation before dispatching to coordinator, preventing empty-roster dispatch loops; (2) warn when `squad upgrade` overwrites customized built-in skills

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-squad]] — core-squad
- [[MOC - Skills]] — Skills library

