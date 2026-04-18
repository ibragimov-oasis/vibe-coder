---
"@bradygaster/squad-sdk": minor
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-squad
---

feat: Cooperative rate limiting with predictive circuit breaker

Added cooperative rate limiting patterns for multi-agent deployments:
- Traffic Light, Predictive Circuit Breaker, Priority Retry Windows
- Cooperative Token Pool for shared quota management

Closes #515
