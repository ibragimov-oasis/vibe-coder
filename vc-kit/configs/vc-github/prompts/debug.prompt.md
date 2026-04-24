---
name: debug
description: 'Investigate and fix a bug using the mega-debugger methodology: hypothesis → test → fix → verify with 3-failure circuit breaker.'
agent: agent
# model: removed-for-compatibility
---

Investigate and fix this bug using the Vibe-Coder mega-debugger methodology:

1. **Reproduce**: Get the exact error message, stack trace, or unexpected behavior
2. **Hypothesize**: Form 2-3 hypotheses about the root cause
3. **Test**: Validate each hypothesis with minimal code changes
4. **Fix**: Apply the smallest surgical fix (Karpathy: Surgical Changes)
5. **Verify**: Confirm the fix works AND doesn't break anything else
6. **Circuit breaker**: If 3 fix attempts fail → escalate and explain why

After fixing:
- Run Shannon security checklist on your changes
- Save root cause to memory for future reference

Full methodology: `COMBINED/agents/mega/mega-debugger.md`
