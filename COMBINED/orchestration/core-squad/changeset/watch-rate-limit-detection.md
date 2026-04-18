---
'@bradygaster/squad-cli': patch
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

Fix watch reporting "Board is clear" when GitHub API rate limit is hit. Detects rate-limit and other scan errors, shows appropriate warning instead of the misleading idle message, skips subsequent phases on failed scans, and prevents rate-limited rounds from counting as circuit-breaker successes.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-squad]] — core-squad
- [[MOC - Skills]] — Skills library

