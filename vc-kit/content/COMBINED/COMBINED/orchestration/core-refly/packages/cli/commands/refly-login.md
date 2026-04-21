---
name: refly-login
description: Authenticate with Refly
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-refly
---

Run:

```bash
refly login
```

This will:
1. Prompt for API key (or use REFLY_API_KEY env var)
2. Verify authentication with Refly API
3. Store credentials securely in `~/.refly/config.json`

After successful login, you can use all workflow commands.

## 🔗 Связи

- [[MOC - Orchestration]] — Orchestration hub
- [[orchestration/refly]] — Refly
- [[000 - Map of Maps]] — Map of Maps

