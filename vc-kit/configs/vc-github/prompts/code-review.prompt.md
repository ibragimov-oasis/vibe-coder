---
name: code-review
description: 'Run a 7-dimension code review on the current changes. Covers correctness, security, performance, maintainability, tests, docs, and style.'
---

Perform a comprehensive code review on the current changes:

1. Get the diff:
   ```
   git diff HEAD~1..HEAD
   ```

2. Review across 7 dimensions:
   - **Correctness**: Logic errors, edge cases, null handling, async, types
   - **Security**: Injection, auth, authz, secrets, CVEs
   - **Performance**: N+1 queries, complexity, memory, caching, bundle
   - **Maintainability**: SRP, naming, DRY, coupling, dead code
   - **Tests**: Coverage, quality, edge cases, flakiness
   - **Documentation**: API docs, README, breaking changes
   - **Style**: Formatting, conventions, imports

3. Output format: Scored by dimension with actionable comments at severity levels (🚨 CRITICAL, ⚠️ HIGH, 💡 MEDIUM, 📝 LOW, 👍 PRAISE)

Full methodology: `COMBINED/agents/mega/mega-reviewer.md`
