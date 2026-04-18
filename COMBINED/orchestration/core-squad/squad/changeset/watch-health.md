---
"@bradygaster/squad-cli": minor
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

feat(watch): health check — show running watch instance status (#808)

Adds `squad watch --health` to display the status of a running watch
instance: PID, uptime, auth account, capabilities, and auth drift
detection. Writes `.squad/.watch-pid.json` at startup for instance
tracking. Detects and cleans up stale PID files from crashed instances.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-squad]] — core-squad
- [[MOC - Skills]] — Skills library

