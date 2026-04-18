---
"@bradygaster/squad-cli": patch
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

fix(nap): account for separator newlines in decision archival budget

The budget calculation in archiveDecisions() did not account for the newline
separators added during content reassembly. This caused the final recentContent
to exceed DECISION_THRESHOLD even after archival. Fix adds reassemblyOverhead
and per-entry separator bytes to the budget calculation.

Closes #123

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-squad]] — core-squad
- [[MOC - Skills]] — Skills library

