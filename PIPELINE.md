# VIBE-CODER AUTONOMOUS PIPELINE

> **Execution Flow for Background Agent → Hermes → Shannon**
> Last updated: 2026-04-11

---

## OVERVIEW

```
╔══════════════════════════════════════════════════════════════════╗
║              VIBE-CODER AUTONOMOUS PIPELINE v1.0                 ║
║  Trigger: User assigns a task and goes offline.                  ║
╚══════════════════════════════════════════════════════════════════╝
```

The pipeline ensures every task is:
1. **Executed** with full context (Background Agent)
2. **Learned from** to improve future performance (Hermes)
3. **Security-audited** before delivery (Shannon)

---

## PIPELINE DIAGRAM

```
┌──────────────────────────────────────────────────────────────────┐
│  STEP 1: BACKGROUND AGENT (Task Execution)                       │
│                                                                  │
│  1. Read CAPABILITIES.md  ← always first                        │
│  2. Check supermemory     ← was this done before?               │
│  3. Map codebase          ← via GitNexus MCP                    │
│  4. Execute the task      ← using relevant mega-agents          │
│  5. Web verification      ← via Lightpanda (never Chrome)       │
│  6. Write to OpenViking   ← save what was done & why            │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 2: HERMES AGENT (Self-Learning Loop)                       │
│                                                                  │
│  1. Analyze Background Agent output                             │
│  2. Extract patterns & lessons                                  │
│  3. Create new skills from experience                           │
│     → COMBINED/skills/{domain}/                                 │
│  4. Update supermemory with insights                            │
│  5. Update CAPABILITIES.md if new capability discovered         │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 3: SHANNON AGENT (Security Audit)                          │
│                                                                  │
│  1. Static analysis of changed source code                      │
│  2. Dynamic attacks via Lightpanda browser:                     │
│     - XSS injection                                             │
│     - SQL/NoSQL injection                                       │
│     - Authentication bypass                                     │
│     - SSRF (Server-Side Request Forgery) / path traversal       │
│  3. Generate prioritised vulnerability report                   │
│  4. Decision:                                                   │
│                                                                  │
│          Vulnerabilities found?                                  │
│          ┌────────┴────────┐                                    │
│         YES               NO                                    │
│          │                 │                                     │
│          ▼                 ▼                                     │
│    Return to          ✅ COMPLETE                               │
│    Step 1             Deliver report to user                    │
└──────────────────────────────────────────────────────────────────┘
```

---

## STEP-BY-STEP EXECUTION GUIDE

### Step 1 — Background Agent

```markdown
AGENT: mega-orchestrator (COMBINED/agents/mega/mega-orchestrator.md)

INPUT:  Task description from user
OUTPUT: Working implementation + OpenViking context entry

ACTIONS:
1. `read CAPABILITIES.md`
2. `mcp supermemory search "<task keywords>"` — check prior work
3. `mcp gitnexus map` — understand current codebase
4. Select appropriate mega-agent for task type:
   - coding/bug → mega-debugger
   - design/ui  → mega-designer
   - research   → mega-researcher
   - planning   → mega-planner
   - review     → mega-reviewer
   - seo        → mega-seo
5. Execute with Lightpanda for any web-based verification
6. `mcp openviking write` — persist what was changed and why
```

### Step 2 — Hermes Agent

```markdown
AGENT: hermes (COMBINED/agents/agents-hermes/)

INPUT:  Background Agent completion summary
OUTPUT: New skills + updated supermemory + optionally updated CAPABILITIES.md

ACTIONS:
1. Read completion summary from Step 1
2. Identify: what worked, what failed, what was novel
3. Extract reusable patterns
4. If pattern is new and valuable:
   - Create skill file in COMBINED/skills/{domain}/{skill-name}/SKILL.md
   - Follow skill template: name, description, steps, examples
5. `mcp supermemory add` — save insights with tags
6. If new capability category found: append to CAPABILITIES.md
```

### Step 3 — Shannon Agent

```markdown
AGENT: mega-security (COMBINED/agents/mega/mega-security.md)
       Shannon core: COMBINED/security/security-shannon/

INPUT:  Changed files list from Step 1
OUTPUT: Security report (PASS or VULNERABILITIES_FOUND)

ACTIONS:
1. Static analysis of diff/changed files
2. For each web-facing change:
   a. Start app locally (if possible)
   b. Launch Lightpanda browser attacks
   c. Record any successful exploit as proof-of-concept
3. Compile report with CVSS severity ratings
4. If PASS: pipeline completes, send summary to user
5. If VULNERABILITIES_FOUND:
   - Return to Step 1 with vulnerability details as new task input
   - Continue loop until clean
```

---

## LOOP TERMINATION CONDITIONS

| Condition | Action |
|-----------|--------|
| Shannon reports PASS | ✅ Pipeline complete — notify user |
| 3 consecutive fix attempts fail | ⚠️ Escalate to user with full report |
| Task marked `no-security-check` | Skip Step 3 (use only for docs/config) |
| Timeout (configurable, default 2h) | Pause + notify user of partial progress |

---

## AGENT ↔ TOOL MATRIX

| Agent | Memory | Browser | Code Analysis |
|-------|--------|---------|---------------|
| Background Agent | supermemory + openviking | lightpanda | gitnexus |
| Hermes | supermemory | — | — |
| Shannon | — | lightpanda (attacks) | gitnexus (static) |

---

## REFERENCES

- `CAPABILITIES.md` — capability registry and rules
- `AGENTS.md` — full agent catalog
- `COMBINED/agents/mega/` — all mega-agent definitions
- `COMBINED/security/security-shannon/` — Shannon pentester core
- `COMBINED/agents/agents-hermes/` — Hermes self-learning system
- `COMBINED/orchestration/core-background-agents/` — background agent configs
