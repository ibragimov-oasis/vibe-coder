---
tags:
  - domain/skills
  - artifact/doc
  - source/root
---

# REALITY_TEST.md — Execution Trace Validation

> **Verifiable execution traces for 3 real-world scenarios.**
> Use these to confirm the system is working as designed, not just described.
> Last updated: 2026-04-18

---

## Scenario 1: "Build me an admin dashboard page for my website"

### Expected Trace — Claude Code

```
SESSION START (auto, via hooks)
  1. hook: session-restore → load prior context
  2. hook: auto-memory-hook.mjs import → supermemory loaded

USER PROMPT RECEIVED
  3. hook: UserPromptSubmit → route (hook-handler.cjs route)
  4. SELF-ID: "I am Claude Code — Vibe-Coder v3.0"
  5. MEMORY BOOTSTRAP: ls .code-review-graph/graph.db → exists → code-review-graph update
  6. SUPERMEMORY: search "admin dashboard" → [results or none]
  7. PROMPT QUALITY CHECK: "Build me an admin dashboard page" → complex but specific enough
     → Proceed (no refinement needed)
  8. AGENT ROUTING:
     "admin dashboard" → complex, multiple concerns (UI + logic + auth + design)
     → LOAD .claude/agents/mega/mega-orchestrator.md
  9. CODEBASE MAP: mcp gitnexus map → project structure loaded
  10. CONTEXT: mcp openviking read → prior decisions loaded

ORCHESTRATOR DECOMPOSES TASK:
  11. Sub-agent 1 (mega-planner): Define admin requirements, auth model, sections
  12. Sub-agent 2 (mega-researcher): Research admin dashboard best practices, patterns
  13. Sub-agent 3 (mega-designer): 
        - Load Galaxy (3,000+ components)
        - Load shadcn/ui
        - Apply Impeccable anti-slop rules
        - Generate layout using UI/UX Pro Max 161 rules
  14. Sub-agent 4 (mega-coder): Implement HTML/React/[framework] components
        - Karpathy Rule 1: Think before coding — clarify auth requirements
        - Karpathy Rule 3: Surgical — only touch files needed for dashboard

POST-TASK (auto, via TaskCompleted hook):
  15. Shannon security check:
        - Check for XSS in rendered HTML
        - Check for auth bypass in admin routes
        - Check for IDOR in user management
        → PASS (or fix loop if vulnerabilities found)
  16. Hermes self-learning:
        - Extract: "admin dashboard with Galaxy components + Impeccable rules"
        - Create: .claude/skills/design/admin-dashboard-pattern/SKILL.md
        - Save to supermemory: tags [admin, dashboard, design]
  17. OBSIDIAN SAVE:
        bash obsidian-update.sh \
          --title "Build admin dashboard" \
          --content "Created admin dashboard with Galaxy BaseCard + shadcn Table. Auth via role check. IDOR mitigated." \
          --tags "ui,dashboard,admin"
        → Creates: obsidian_vibe-coder/sessions/YYYY-MM-DD-HHMM-Build-admin-dashboard.md
  18. QUALITY REPORT displayed to user:
        ✅ Security: PASS
        ✅ Learned:  New pattern: admin-dashboard-pattern
        ✅ Obsidian: SAVED to sessions/YYYY-MM-DD-Build-admin-dashboard.md
        ✅ Changed:  src/pages/admin/*, src/components/admin/*
        ✅ Tests:    PASS

VERDICT: ✅ WORKS — fully automated via hooks
```

---

### Expected Trace — GitHub Copilot

```
SESSION START (manual — no hooks)
  1. Copilot reads .github/copilot-instructions.md
  2. Memory bootstrap block at top → AI runs memory bootstrap command
  3. SELF-ID: "I am GitHub Copilot — Vibe-Coder v3.0"

USER PROMPT RECEIVED
  4. SUPERMEMORY: npx -y supermemory search "admin dashboard"
  5. PROMPT QUALITY CHECK: "Build me an admin dashboard page" → scope is broad
     → Apply grill-me: ask "What framework? What data should appear? Auth model?"
     → User clarifies: React + Tailwind, user stats + logs table, JWT role-check
     → Proceed with refined prompt
  6. AGENT ROUTING:
     "admin dashboard" → complex (UI + logic + auth)
     → LOAD .claude/agents/mega/mega-orchestrator.md
     → [COPILOT-SPECIFIC] ACTIVATE SQUAD:
        Cast: mega-planner, mega-designer, mega-coder, mega-security
        Use: .claude/orchestration/core-squad/
  7. CODEBASE MAP: npx -y gitnexus@latest map (CLI)
  8. SQUAD CASTING begins:
       Agent "planner": Define dashboard requirements, pages, auth model
       Agent "researcher": Research admin dashboard best practices (use .github/agents/mega-researcher.agent.md)
       Agent "designer": Load Galaxy → shadcn → Impeccable → Taste-skill → Stitch
       Agent "coder": Implement components with Karpathy principles
       Agent "reviewer": Review output (skills-copilot/code-review-companion)

POST-TASK (manual — follow POST-TASK CHECKLIST):
  9. Shannon security check (manual checklist):
        - Review for XSS, auth bypass, IDOR
  10. Hermes self-learning (manual):
        - npx -y supermemory add "admin dashboard Squad pattern" --tags "copilot,dashboard"
  11. OBSIDIAN SAVE (manual):
        bash obsidian-update.sh \
          --title "Build admin dashboard - Copilot Squad" \
          --content "Used Squad casting: planner+designer+coder. React+Tailwind. JWT role check." \
          --tags "ui,dashboard,admin,copilot,squad"
  12. QUALITY REPORT displayed to user:
        ✅ Security: PASS
        ✅ Learned:  New pattern: Squad casting for dashboard tasks
        ✅ Obsidian: SAVED to sessions/YYYY-MM-DD-Build-admin-dashboard-Copilot-Squad.md
        ✅ Changed:  src/pages/admin/*, src/components/admin/*
        ✅ Tests:    PASS

VERDICT: ✅ WORKS — Squad auto-trigger now explicit + prompt assessment added (post C1/C6 fix)
Previously: ⚠️ PARTIAL — Squad was documented but not auto-triggered; vague prompts ran unrefined
```

---

### Expected Trace — Cursor AI

```
SESSION START (auto-attach rules fire on file open)
  1. main.mdc loads → mandatory startup sequence instructions read
  2. memory.mdc loads → code-review-graph update runs
  3. security.mdc loads → ready for post-task security check
  4. orchestration.mdc loads [NOW alwaysApply: true] → orchestration rules active
  5. pipeline.mdc loads [alwaysApply: true] → post-task pipeline active
  6. SELF-ID: "I am Cursor AI — Vibe-Coder v3.0"

USER PROMPT RECEIVED (in Composer or chat)
  7. SUPERMEMORY: mcp supermemory search "admin dashboard"
  8. PROMPT QUALITY CHECK: "Build me an admin dashboard page" → complex but actionable
     → Proceed (or refine via grill-me if needed)
  9. AGENT ROUTING:
     "admin dashboard" → complex
     → LOAD .claude/agents/mega/mega-orchestrator.md
     → [CURSOR-SPECIFIC] Use Composer mode for multi-file editing
  10. CODEBASE MAP: mcp gitnexus map
  11. CONTEXT: mcp openviking read
  12. Orchestrator decomposes:
        - mega-planner: requirements
        - mega-designer: UI (Galaxy → shadcn → Impeccable)
        - mega-coder: implementation
        - mega-security: security review (auto via security.mdc rule)
  13. Composer: edit multiple files simultaneously

POST-TASK (pipeline.mdc + security.mdc auto-triggers on file save for .ts/.tsx/.js/.jsx):
  14. Shannon check runs automatically (security.mdc glob fires on modified files)
  15. Hermes: mcp supermemory add + mcp openviking write (MCP available)
  16. OBSIDIAN SAVE (instructed by pipeline.mdc):
        bash obsidian-update.sh \
          --title "Build admin dashboard - Cursor Composer" \
          --content "Multi-file edit via Composer. Galaxy cards + shadcn Table. JWT route guard." \
          --tags "ui,dashboard,admin,cursor,composer"
  17. QUALITY REPORT (pipeline.mdc format):
        ✅ Security: PASS
        ✅ Learned:  New pattern: Composer-based admin dashboard
        ✅ Obsidian: SAVED to sessions/YYYY-MM-DD-Build-admin-dashboard-Cursor.md
        ✅ Changed:  src/pages/admin/*, src/components/admin/*
        ✅ Tests:    PASS

VERDICT: ✅ WORKS — orchestration now always-on + prompt assessment + Obsidian step (post C2/C4/C6 fix)
Previously: ⚠️ PARTIAL — orchestration.mdc was alwaysApply: false; no Obsidian; no prompt check
```

---

## Scenario 2: "Fix the bug in user authentication — login fails for admin users"

### Expected Trace (all interfaces, abbreviated)

```
CLASSIFY: "fix" + "bug" + "authentication" → mega-debugger
  → LOAD .claude/agents/mega/mega-debugger.md

DEBUGGING PROCESS:
  1. Map codebase: find auth files, user models, login routes
  2. Hypothesis: check admin role check, session handling, bcrypt comparison
  3. Test hypothesis with minimal reproduction
  4. Surgical fix: touch ONLY the failing condition
  5. Verify: run auth tests

POST-TASK:
  Security: check for auth bypass introduced by fix
  → Verify: admin can log in, regular users cannot access admin
  → Shannon: no new vulnerabilities

VERDICT: ✅ All interfaces handle this correctly
  Claude: hooks auto-run security check
  Cursor: security.mdc fires on file save
  Copilot: POST-TASK CHECKLIST guides manual security review
```

---

## Scenario 3: "Security audit of our payment processing code"

### Expected Trace (all interfaces, abbreviated)

```
CLASSIFY: "security" + "audit" + "payment" → mega-security
  → LOAD .claude/agents/mega/mega-security.md
  → LOAD .claude/security/security-shannon/SHANNON-PRO.md

SHANNON PRO PIPELINE:
  Phase 1: SAST — find injection vectors, hardcoded keys, crypto weaknesses
  Phase 2: SCA — check dependencies for known CVEs
  Phase 3: Business logic — check payment flow (double-spending, negative amounts, IDOR)
  Phase 4: Dynamic — Lightpanda/CLI to test web endpoints
  Phase 5: Report — CRITICAL/HIGH/MEDIUM with fix recommendations

Interface differences:
  Claude:     Lightpanda MCP for dynamic; code-review-graph blast-radius
  Cursor:     Same MCP capabilities
  Copilot:    Lightpanda CLI; Shannon methodology via mega-security.agent.md
  Codex:      CLI tools; sandboxed test execution for safe fuzzing
  Gemini:     Search grounding for CVE lookup; multimodal for diagram analysis
  Antigravity: Browser subagent for dynamic testing (replaces Lightpanda)

VERDICT: ✅ All interfaces can execute this
  Variation: Claude/Cursor have deeper tool integration (MCP)
  Copilot/Codex/Gemini/Antigravity: equivalent capability via CLI workarounds
```

---

## Validation Checklist (run after any interface config change)

For each scenario above, verify:
- [ ] AI correctly self-identifies its interface
- [ ] Memory bootstrap runs (or is instructed to run) first
- [ ] Prompt quality is assessed before routing — weak prompts are refined via grill-me
- [ ] Agent routing selects the correct mega-agent
- [ ] For complex tasks: orchestration is triggered (Squad/teams/Composer/ORCHESTRATOR AUTO-TRIGGER)
- [ ] Interface-specific strengths are used (Squad for Copilot, Composer for Cursor, etc.)
- [ ] Shannon security check runs post-task (IDOR included)
- [ ] Hermes self-learning runs post-task
- [ ] Obsidian vault save runs post-task (`bash obsidian-update.sh`)
- [ ] Quality report includes `✅ Obsidian:` line
- [ ] Quality report is shown to user

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

