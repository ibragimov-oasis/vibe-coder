---
'@bradygaster/squad-sdk': minor
'@bradygaster/squad-cli': minor
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

Enable persistent Ralph — heartbeat cron + healthCheck timer

- Enable cron schedule in squad-heartbeat.yml (all 5 sync locations)
- Enable RalphMonitor healthCheck timer (previously commented out pre-migration)
- Add platform detection tests for getRalphScanCommands (GitHub/ADO/Planner)
- Add healthCheck timer tests with fake timers (start/stop/interval/stale detection)

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-squad]] — core-squad
- [[MOC - Skills]] — Skills library

