---
name: security-scan
description: 'Run a Shannon security scan on changed files. Uses SAST data flow, business logic testing, and SCA reachability analysis.'
---

Run the Shannon security audit on the current changes:

1. Get the list of changed files:
   ```
   git diff --name-only
   ```

2. For each changed file, perform:
   - SAST data flow analysis (source → sink taint tracing)
   - Point issue detection (hardcoded secrets, weak crypto, insecure config)
   - Business logic testing (invariant discovery → fuzzer → violation)
   - SCA with reachability (only flag CVEs where vulnerable function is called)

3. For web-facing changes, also run dynamic pentesting via Lightpanda:
   - XSS, SQLi, SSRF, auth bypass, IDOR

4. Report format: CVSS-rated vulnerabilities with POC exploits

Full methodology: `COMBINED/agents/mega/mega-security.md`
