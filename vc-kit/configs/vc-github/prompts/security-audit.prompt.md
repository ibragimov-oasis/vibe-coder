---
name: security-audit
description: 'Run a full Shannon Pro security audit on the current changes: static analysis → dynamic testing → fix → verify.'
agent: agent
---

Run a comprehensive security audit on the current codebase changes using Shannon Pro methodology:

## Phase 1: Static Analysis
Check all changed files for:
- 🔴 **Injection**: SQL, command, template, deserialization — use parameterized queries
- 🔴 **XSS**: DOM, reflected, stored — never innerHTML with user data, escape all output
- 🔴 **Auth bypass**: Missing auth checks, hardcoded tokens, `alg:none` JWT
- 🔴 **Secrets**: API keys, passwords, tokens in code or git history
- 🔴 **SSRF/Path traversal**: Validate URLs, sanitize file paths
- 🔴 **IDOR**: Insecure direct object references

## Phase 2: Blast Radius Analysis
```bash
uv run code-review-graph serve
```
Identify what code paths are affected by the changes.

## Phase 3: Fix
- Fix all CRITICAL and HIGH severity issues
- Re-check after fixing (max 3 loops)
- If can't fix after 3 attempts → document and escalate

## Phase 4: Report
```
═══════════════════════════════════
✅ Security: [PASS / ISSUES FIXED]
✅ Changed:  [files audited]
═══════════════════════════════════
```

Full methodology: `COMBINED/security/security-shannon/SHANNON-PRO.md`
Full agent: `COMBINED/agents/mega/mega-security.md`
