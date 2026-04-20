---
'@bradygaster/squad-cli': minor
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

feat(watch): load external WatchCapabilities from .squad/capabilities/

Users can now define custom watch capabilities as .js files in `.squad/capabilities/`.
Each file default-exports a WatchCapability object (name, phase, preflight, execute).
Capabilities are loaded at watch startup and participate in the normal phase-based round cycle.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration systems
- [[orchestration/core-squad]] — core-squad
- [[MOC - Skills]] — Skills library

