---
tags:
  - domain/skills
  - artifact/doc
  - source/root
---

# RUNBOOK.md — Vibe-Coder v3.0 Operational Runbook

> **"Как система запускается идеально" — How the system starts perfectly every time.**
> A concise operational guide for all 6 AI interfaces.
> Last updated: 2026-04-18

---

## TL;DR — The 5-Step Universal Boot Sequence

```
1. Memory Bootstrap  →  bash memory-bootstrap.sh  (or code-review-graph update)
2. Supermemory Check →  search "<task>"  (don't repeat prior work)
3. Prompt Assessment →  is the request clear? if not → grill-me → refine
4. Agent Routing     →  classify task → read correct mega-agent file
5. Execute           →  apply Karpathy 4 principles throughout
```

```
After every task:
A. Shannon security check  (IDOR + XSS + injection + auth + SSRF)
B. Hermes self-learning    (extract pattern → create SKILL.md → save to supermemory)
C. Obsidian save           (bash obsidian-update.sh --title ... --content ... --tags ...)
D. Quality report          (✅ Security / Learned / Obsidian / Changed / Tests)
```

---

## Interface-Specific Boot Sequences

### 🟣 Claude Code — Ideal Boot

```
Automatic (hooks fire on session start):
  - hook: session-restore → loads prior session context
  - hook: auto-memory-hook.mjs → supermemory initialized
  - hook: UserPromptSubmit → routes via hook-handler.cjs

Manual (if hooks not firing):
  1. bash memory-bootstrap.sh
  2. mcp supermemory search "<task>"
  3. Assess prompt quality → refine if vague
  4. Route to mega-agent (decision tree in PIPELINE_TRIGGER.md)
  5. mcp gitnexus map → mcp openviking read
  6. Read selected agent file: .claude/agents/mega/<agent>.md
  7. Execute with Karpathy principles

Post-task (auto via TaskCompleted hook, or manual):
  A. Shannon check (mcp lightpanda + code-review-graph blast-radius)
  B. Hermes: mcp supermemory add + create .claude/skills/{domain}/SKILL.md
  C. bash obsidian-update.sh --title "..." --content "..." --tags "..."
  D. Quality report displayed

Unique strengths to use:
  - Agent teams: spawn 15 parallel sub-agents for complex tasks
  - MCP: lightpanda (browser), gitnexus (map), code-review-graph (AST)
  - Hooks: fully automated pipeline, zero manual steps
```

---

### 🔵 GitHub Copilot — Ideal Boot

```
Manual (no hooks — must execute consciously):
  1. Memory bootstrap at top of copilot-instructions.md fires:
     npx -y gitnexus@latest map  (or  code-review-graph update)
  2. npx -y supermemory search "<task>"
  3. PROMPT ASSESSMENT: is the task specific? if not → grill-me skill
  4. Route to mega-agent (decision tree in PIPELINE_TRIGGER.md)

  IF complex task (2+ of: UI, logic, data, security, tests):
    → ACTIVATE SQUAD (see ⚙️ ORCHESTRATOR AUTO-TRIGGER section)
    Cast agents: planner → researcher → designer → coder → tester → security → reviewer
    Source: .claude/orchestration/core-squad/

  IF GitHub-native task (PR review, issue triage, code suggestion):
    → Use native Copilot capabilities + skills-copilot/ (486 skills)

Post-task (manual checklist in copilot-instructions.md):
  A. Shannon checklist: XSS, auth bypass, IDOR, secrets, SSRF, injection
  B. npx -y supermemory add "<what done and why>" --tags "<domain>"
  C. bash obsidian-update.sh --title "..." --content "..." --tags "..."
  D. Quality report:
     ✅ Security: [PASS/FIXED]
     ✅ Learned:  [pattern or NONE]
     ✅ Obsidian: [SAVED to sessions/...]
     ✅ Changed:  [files]
     ✅ Tests:    [status]

Unique strengths to use:
  - Squad: native agent team casting (.claude/orchestration/core-squad/)
  - GitHub: PR creation, issue management, code suggestions
  - skills-copilot/: 486 specialized Copilot skills
```

---

### 🟢 Cursor AI — Ideal Boot

```
Automatic (MDC rules fire on file open):
  - main.mdc (alwaysApply: true) → startup sequence loaded
  - memory.mdc (alwaysApply: true) → code-review-graph update triggers
  - pipeline.mdc (alwaysApply: true) → post-task pipeline ready
  - orchestration.mdc (alwaysApply: true) → orchestration always on
  - security.mdc (glob: code files) → security check ready on save

Manual boot (first session):
  1. mcp code-review-graph build  (or bash memory-bootstrap.sh)
  2. mcp supermemory search "<task>"
  3. Assess prompt quality (grill-me if needed)
  4. Route to mega-agent
  5. mcp gitnexus map → mcp openviking read
  6. If complex → Composer mode (multi-file)

Post-task (pipeline.mdc + security.mdc auto-fire):
  A. Shannon check (security.mdc fires on .js/.ts/.jsx/.tsx save)
  B. Hermes: mcp supermemory add + mcp openviking write
  C. bash obsidian-update.sh --title "..." --content "..." --tags "..."
  D. Quality report (pipeline.mdc format)

Unique strengths to use:
  - 9 MCP servers (lightpanda, gitnexus, supermemory, openviking, code-review-graph...)
  - Composer mode: edit 3+ files simultaneously
  - Auto-attach rules: pipeline enforced on every code file automatically
```

---

### ⚫ OpenAI Codex — Ideal Boot

```
Manual (sandbox environment):
  1. code-review-graph update  (or bash memory-bootstrap.sh)
  2. npx -y supermemory search "<task>"
  3. Assess prompt quality → grill-me if vague
  4. Route to mega-agent (decision tree in PIPELINE_TRIGGER.md)

  IF complex task:
    → ACTIVATE MULTI-AGENT (see ⚙️ ORCHESTRATOR AUTO-TRIGGER section)
    CLI coordination:
      npx -y gitnexus@latest map          # codebase context
      npx -y supermemory search "<task>"  # prior work check

  Codex advantage — run in parallel:
    command1 & command2 & wait   (safe in sandbox)

Post-task:
  A. Shannon checklist: XSS, auth, IDOR, injection, secrets, SSRF
  B. npx -y supermemory add "..." --tags "..."
  C. bash obsidian-update.sh --title "..." --content "..." --tags "..."
  D. Quality report

Unique strengths to use:
  - Sandboxed execution: safe to run tests, linters, security scans in parallel
  - code-review-graph: structural analysis without MCP (CLI-based)
  - Task Master: npx -y task-master-ai (36 tools, PRD → tasks → complexity analysis)
```

---

### 🔴 Gemini CLI — Ideal Boot

```
Manual:
  1. code-review-graph update  (or bash memory-bootstrap.sh)
  2. npx -y supermemory search "<task>"
  3. Assess prompt quality → Use Search Grounding to find examples of well-formed prompts
  4. Route to mega-agent

  IF complex task:
    → ACTIVATE MULTI-AGENT (see ⚙️ ORCHESTRATOR AUTO-TRIGGER section)
    Gemini advantage at research stage: Search Grounding first (vs Lightpanda for visual)

Post-task:
  A. Shannon checklist (Search Grounding → CVE lookup for dependency issues)
  B. npx -y supermemory add "..." --tags "..."
  C. bash obsidian-update.sh --title "..." --content "..." --tags "..."
  D. Quality report

Unique strengths to use:
  - 2M token context window: read ALL mega-agent files in a single pass
  - Search Grounding: real-time research at researcher + security stages
  - Multimodal: analyze UI screenshots, architectural diagrams (use at design stage)
  - markitdown: convert PDF/DOCX/images to markdown for context
```

---

### 🟡 Antigravity — Ideal Boot

```
Manual:
  1. code-review-graph update  (or bash memory-bootstrap.sh)
  2. npx -y supermemory search "<task>"
  3. Assess prompt quality → search_web for examples of the task type
  4. Route to mega-agent

  IF complex task:
    → ACTIVATE MULTI-AGENT (see ⚙️ ORCHESTRATOR AUTO-TRIGGER section)
    Antigravity advantage at design stage: browser_subagent for visual validation

Post-task:
  A. Shannon checklist (search_web → CVE + OWASP reference)
  B. npx -y supermemory add "..." --tags "..."
  C. bash obsidian-update.sh --title "..." --content "..." --tags "..."
  D. Quality report

Unique strengths to use:
  - browser_subagent: visual browser testing (equivalent to Lightpanda MCP)
  - search_web: real-time web search (built-in, no CLI needed)
  - generate_image: quick UI mockups at design stage
  - Browser recording (WebP): capture UI states for design review
```

---

## Decision Table: Which Agent for Which Task?

| Task description | Mega-agent | Key tools |
|-----------------|:----------:|-----------|
| Bug / error / crash | mega-debugger | code-review-graph blast-radius |
| UI / design / frontend | mega-designer | Galaxy → shadcn → Impeccable → Taste-skill |
| Plan / roadmap / PRD | mega-planner | Matt Pocock skills, Task Master |
| Research / investigate | mega-researcher | Supermemory, DeerFlow, markitdown |
| Security audit | mega-security | Shannon PRO, code-review-graph |
| SEO / content | mega-seo | SEOMachine, Search Grounding |
| Code review | mega-reviewer | code-review-graph (7 dimensions) |
| Testing / TDD | mega-tester | RED-GREEN-REFACTOR cycle |
| System design / ADR | mega-architect | code-review-graph community detection |
| Code implementation | mega-coder | Karpathy + 69 best practices |
| Plan execution | mega-executor | Ralph PRD loop, Archon YAML, Task Master |
| Documentation | mega-writer | markitdown, Matt Pocock edit-article |
| Git / CI/CD | mega-devops | git-guardrails, cc-connect |
| Infrastructure / swarm | mega-infrastructure | Squad, Multica |
| **Complex / multi-concern** | **mega-orchestrator** | All agents + Squad/teams/Composer |

---

## Memory Persistence: What Is Automated vs Declarative

| Memory type | Claude Code | Cursor | Copilot | Codex | Gemini | Antigravity |
|-------------|:-----------:|:------:|:-------:|:-----:|:------:|:-----------:|
| **Code graph** (session) | ✅ hooks auto-update | ✅ memory.mdc | ⚡ manual CLI | ⚡ manual CLI | ⚡ manual CLI | ⚡ manual CLI |
| **Supermemory** (cross-session) | ✅ hooks save | ✅ mcp save | ⚡ manual CLI | ⚡ manual CLI | ⚡ manual CLI | ⚡ manual CLI |
| **OpenViking** (codebase context) | ✅ mcp auto | ✅ mcp auto | ⚡ manual CLI | ⚡ manual CLI | ⚡ manual CLI | ⚡ manual CLI |
| **Obsidian vault** (markdown notes) | ✅ hooks auto | ✅ pipeline.mdc | ⚡ manual bash | ⚡ manual bash | ⚡ manual bash | ⚡ manual bash |
| **Skill extraction** (Hermes) | ✅ hooks auto | ✅ pipeline.mdc | ⚡ manual | ⚡ manual | ⚡ manual | ⚡ manual |

**Legend**: ✅ = automated | ⚡ = works correctly but requires manual execution

> **Key insight**: Claude Code is the only interface where the full pipeline is 100% automated.
> All other interfaces are "correctly instructed" but rely on the AI following the instructions.
> The gap is between declarative instructions and guaranteed execution.

---

## Common Failure Modes & Fixes

| Failure | Symptom | Fix |
|---------|---------|-----|
| Memory bootstrap skipped | Excessive file reading, token waste | Run `bash memory-bootstrap.sh` manually |
| Vague prompt unrefined | AI guesses wrong requirements | Apply `grill-me` skill before coding |
| Wrong mega-agent selected | Coder used for design task | Re-read routing table above |
| Complex task not orchestrated | Single agent for multi-concern task | Explicitly invoke ORCHESTRATOR AUTO-TRIGGER |
| Obsidian save skipped | Session lost, no record | Run `bash obsidian-update.sh --help` for usage |
| Security check omitted | Vulnerabilities shipped | Manually run Shannon checklist from PIPELINE_TRIGGER.md |
| Quality report missing Obsidian line | Inconsistent reporting | Use canonical format from PIPELINE_TRIGGER.md Step D |

---

## Key Files Quick Reference

| File | Purpose | Read when |
|------|---------|-----------|
| `PIPELINE_TRIGGER.md` | Canonical pre/post-task pipeline | Every session start |
| `CAPABILITIES.md` | 6 hardcoded rules + agent catalog | Start of any new task type |
| `AGENTS.md` | Complete agent catalog (54 repos) | Choosing agents |
| `AUDIT_MATRIX.md` | Gap tracking (before/after scores) | After any config change |
| `SYNC_CHECK.md` | Governance checklist | When canonical files change |
| `REALITY_TEST.md` | Execution trace validation | After config changes |
| `INTERFACE_MATRIX.md` | What works in which interface | Cross-interface work |
| `MEMORY.md` | 3-layer memory architecture | Memory debugging |
| `.claude/prompts/prompts-templates/audit-and-reconstruct.md` | Full audit prompt template | When auditing configs |

---

*Vibe-Coder v3.0 — Operational Runbook | Last updated: 2026-04-18*

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

