---
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

### 2026-03-26: Copilot git safety rules
**By:** RETRO (Security)
**What:** Added mandatory Git Safety section to copilot-instructions.md: prohibits `git add .`, requires feature branches and PRs, adds pre-push checklist, defines red-flag stop conditions.
**Why:** Incident #631 — @copilot used destructive staging on an incomplete working tree, deleting 361 files.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration hub
- [[orchestration/squad]] — Squad
- [[000 - Map of Maps]] — Map of Maps

