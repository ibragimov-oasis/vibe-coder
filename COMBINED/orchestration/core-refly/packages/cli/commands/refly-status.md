---
name: refly-status
description: Check Refly CLI configuration and authentication status
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-refly
---

Run:

```bash
refly status
```

Parse JSON and summarize:
- CLI version
- Current user
- API endpoint
- Auth status + expiry
- Skill installation status

If not authenticated, suggest running `refly login`.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration hub
- [[orchestration/refly]] — Refly
- [[000 - Map of Maps]] — Map of Maps

