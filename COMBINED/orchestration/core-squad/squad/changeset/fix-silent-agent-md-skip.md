---
'@bradygaster/squad-cli': patch
'@bradygaster/squad-sdk': patch
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

Warn when squad.agent.md template is missing during upgrade or init instead of silently skipping file creation. Adds `warnings` field to `InitResult` for structured error reporting.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-squad]] — core-squad
- [[MOC - Skills]] — Skills library

