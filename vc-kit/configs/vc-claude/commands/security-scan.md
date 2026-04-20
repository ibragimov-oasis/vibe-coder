---
description: Run Shannon security audit on changed files. Performs SAST, business logic testing, SCA reachability, and dynamic attacks via Lightpanda.
tags:
  - domain/skills
  - artifact/command
  - source/claude-commands
---

# /security — Shannon Security Audit

This command runs **mega-security** (Shannon Pro) on your changed files.

## What happens

```
1. Get changed files:     git diff --name-only
2. Static analysis:       SAST data flow (source→sink), point issues, business logic
3. SCA reachability:      CVE check + verify vulnerable function is actually called
4. Secrets detection:     Regex + LLM analysis + liveness check
5. Dynamic testing:       Via Lightpanda (if web-facing changes detected)
   - XSS injection
   - SQL/NoSQL injection
   - SSRF / path traversal
   - Auth/Authz bypass (IDOR, privilege escalation)
6. Report:                CVSS-rated vulnerabilities with working POC exploits
```

## Core Principle

**POC or it didn't happen.** — Never report a vulnerability without a proof-of-concept.

## Usage

```
/security                     ← audit changed files (default)
/security full                ← audit entire codebase
/security <file1> <file2>     ← audit specific files
```

## Output

| Severity | Action |
|----------|--------|
| CRITICAL | Must fix before merge. Pipeline blocks. |
| HIGH | Should fix before merge. |
| MEDIUM | Consider fixing. |
| LOW / INFO | Optional. |

## Browser

**ALWAYS Lightpanda** for dynamic attacks. Never Chrome.

## References

- `.claude/agents/mega-security.md` — full agent spec (445 lines, Shannon Pro methodology)
- `COMBINED/security/security-shannon/` — Shannon source
- `COMBINED/security/security-shannon/SHANNON-PRO.md` — full pentesting methodology

## 🔗 Связи

- [[MOC - System]] — System commands
- [[MOC - Skills]] — Skills library

