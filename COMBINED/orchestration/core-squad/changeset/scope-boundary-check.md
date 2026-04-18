---
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

ci: scope boundary enforcement for repo-health PRs

New CI check that fails repo-health PRs if they modify product source
code under packages/*/src/. Enforces separation between infrastructure
and product changes.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-squad]] — core-squad
- [[MOC - Skills]] — Skills library

