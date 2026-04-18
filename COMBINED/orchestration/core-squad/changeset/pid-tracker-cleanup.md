---
'@bradygaster/squad-cli': patch
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

fix(watch): track child process PIDs and cleanup orphans on exit

Prevents MCP server process leaks during long-running watch sessions.
Tracks PIDs of spawned copilot sessions, kills them on exit/crash,
and cleans up stale orphans from previous crashed runs on startup.
