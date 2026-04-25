---
tags:
  - domain/skills
  - artifact/doc
  - source/root
---

# VIBE-CODER AUTONOMOUS PIPELINE v3.0

> **Execution Flow for Task Master → Archon → Background Agent → Hermes → Shannon → Code Review Graph**
> Last updated: 2026-04-14

---

## OVERVIEW

```
╔══════════════════════════════════════════════════════════════════╗
║              Vibe-Coder v3.0 EXTENDED AUTONOMOUS PIPELINE          ║
║  Trigger: User assigns a task and goes offline.                  ║
║  Monitoring: Claude HUD tracks context, tools, agents in real-time║
╚══════════════════════════════════════════════════════════════════╝
```

The pipeline ensures every task is:
1. **Structured** into manageable tasks with dependencies (Task Master)
2. **Orchestrated** via deterministic YAML workflows when applicable (Archon)
3. **Executed** with full context (Background Agent)
4. **Learned from** to improve future performance (Hermes)
5. **Security-audited** before delivery (Shannon)
6. **Structurally verified** for blast-radius and quality (Code Review Graph)

---

## PIPELINE DIAGRAM

```
┌──────────────────────────────────────────────────────────────────┐
│  PRE-STEP: MEMORY BOOTSTRAP (⛔ MANDATORY FIRST)                 │
│  • Check: does .code-review-graph/graph.db exist?                │
│  • NO  → pip install code-review-graph && code-review-graph build│
│  • YES → code-review-graph update  (incremental, <2 sec)        │
│  • Fallback: npx -y gitnexus@latest map                         │
│  • Full protocol: Read MEMORY.md                                 │
│                                                                  │
│  Result: SQLite graph with AST nodes, edges, flows, communities  │
│  Effect: 8.2x token reduction — query graph instead of files     │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 0: TASK MASTER (Task Structuring)                          │
│  ✅ MCP: ACTIVE — npx -y task-master-ai (36 tools)               │
│  • Claude/Cursor: use mcp task-master-ai tools                   │
│  • Other interfaces: npx -y task-master-ai                       │
│                                                                  │
│  1. Parse PRD or user request                                   │
│  2. Decompose into tasks with dependencies                      │
│  3. Analyze complexity (36 MCP tools available)                  │
│  4. Create execution order with priority                        │
│  5. Output structured task list                                 │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 0.5: ARCHON (YAML DAG Workflow) [optional]                 │
│  ⚡ CLI TOOL — npx archon run <workflow.yaml>                    │
│  • 17+ YAML workflow templates in core-archon/                   │
│  • Skip if simple task — proceed directly to Step 1              │
│                                                                  │
│  1. Load workflow definition (17 default or custom YAML)         │
│  2. Build deterministic DAG from task dependencies              │
│  3. Execute planning → implementation → validation → PR          │
│  4. Fire-and-forget mode for autonomous execution               │
│  5. Isolated worktrees for parallel work                        │
│                                                                  │
│  NOTE: Complements Background Agent. Use Archon for             │
│  structured, repeatable workflows. Use Background Agent for     │
│  free-form creative tasks.                                      │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 1: BACKGROUND AGENT (Task Execution)                       │
│                                                                  │
│  1. Read CAPABILITIES.md  ← always first                        │
│  2. Check supermemory     ← was this done before?               │
│  3. Map codebase          ← via GitNexus MCP                    │
│  4. Execute the task      ← using relevant mega-agents          │
│  5. Web verification      ← via Lightpanda (never Chrome)       │
│  6. Write to OpenViking   ← save what was done & why            │
│                                                                  │
│  ENHANCED WITH:                                                  │
│  - Ralph PRD loop (autonomous iteration with fresh context)     │
│  - PraisonAI (route/parallel/loop for multi-agent tasks)        │
│  - Squad (named agent teams, casting, watch mode)               │
│  - Multica (board view, agents as teammates)                    │
│  - Karpathy principles (Think, Simplify, Surgical, Goal-Driven)│
│  - 69 best practices (agent teams, orchestration workflows)     │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 2: HERMES AGENT (Self-Learning Loop)                       │
│                                                                  │
│  1. Analyze Background Agent output                             │
│  2. Extract patterns & lessons                                  │
│  3. Create new skills from experience                           │
│     → .claude/skills/{domain}/                                 │
│  4. Update supermemory with insights                            │
│  5. Update CAPABILITIES.md if new capability discovered         │
│  6. Save to Refly skills registry (if applicable)              │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 3: SHANNON AGENT (Security Audit)                          │
│                                                                  │
│  1. Static analysis of changed source code                      │
│     - Enhanced with code-review-graph structural analysis       │
│     - Blast-radius detection (19 languages)                     │
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
│    Return to          Continue to                               │
│    Step 1             Step 4                                    │
└──────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 4: CODE REVIEW GRAPH (Structural Verification) [optional]  │
│                                                                  │
│  1. Build/update code graph with Tree-sitter (19 languages)     │
│  2. Compute blast-radius for all changed files                  │
│  3. Detect dead code created by changes                         │
│  4. Check community coherence (Leiden algorithm)                │
│  5. Generate architecture overview with coupling warnings       │
│  6. Risk-scored review: map diffs to affected functions/flows   │
│  7. Output: structural quality report                           │
│                                                                  │
│  MCP TOOLS: 22 tools including:                                 │
│  - get_impact_radius_tool (blast-radius)                        │
│  - get_review_context_tool (8.2x token reduction)              │
│  - detect_changes_tool (risk-scored review)                    │
│  - refactor_tool (rename preview, dead code)                   │
│  - get_architecture_overview_tool (coupling warnings)          │
└───────────────────────────────┬──────────────────────────────────┘
                                │
                                ▼
                         ✅ PIPELINE COMPLETE
                         Deliver report to user
                         via cc-connect (Telegram/Slack/Discord)
                         or direct IDE notification

┌──────────────────────────────────────────────────────────────────┐
│  ALWAYS ON: CLAUDE HUD (Real-Time Monitoring)                    │
│                                                                  │
│  Displays at all times:                                         │
│  - Model name and provider                                     │
│  - Project path and git branch                                 │
│  - Context health (green → yellow → red bar)                   │
│  - Usage rate limits                                            │
│  - Tool activity (read, edit, grep)                             │
│  - Agent status (subagents, duration)                           │
│  - Todo progress (task completion)                              │
│  - Session cost (USD)                                           │
│                                                                  │
│  Source: .claude/reference/claude-hud/                          │
└──────────────────────────────────────────────────────────────────┘
```

---

## STEP-BY-STEP EXECUTION GUIDE

### Step 0 — Task Master

```markdown
AGENT: mega-orchestrator (.claude/agents/mega/mega-orchestrator.md)
TOOL:  Task Master MCP (.claude/orchestration/core-taskmaster/)

INPUT:  PRD or user task description
OUTPUT: Structured task list with dependencies and complexity scores

ACTIONS:
1. Parse PRD or user request into structured tasks
2. Analyze complexity of each task (simple/medium/complex)
3. Identify dependencies between tasks
4. Create execution order with priority
5. Output: structured task list ready for execution

NOTE: Task Master EXTENDS Vibe-Kanban. Both systems co-exist:
- Vibe-Kanban: visual kanban board for manual tracking
- Task Master: MCP-based AI task management with auto-decomposition
```

### Step 0.5 — Archon (optional)

```markdown
AGENT: mega-executor (.claude/agents/mega/mega-executor.md)
TOOL:  Archon (.claude/orchestration/core-archon/)

INPUT:  Task list from Step 0
OUTPUT: YAML DAG workflow execution

ACTIONS:
1. Select workflow from 17 defaults or create custom YAML
2. Build deterministic DAG from task dependencies
3. Execute: planning → implementation → validation → PR
4. Use isolated worktrees for parallel work
5. Fire-and-forget mode for autonomous execution

NOTE: Archon COMPLEMENTS Background Agent:
- Archon: deterministic, repeatable YAML workflows (structured tasks)
- Background Agent: free-form creative execution (creative tasks)
- Both can run together, with Archon handling structured parts
```

### Step 1 — Background Agent

```markdown
AGENT: mega-orchestrator (.claude/agents/mega/mega-orchestrator.md)

INPUT:  Task description from user (or from Task Master/Archon)
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
   - database   → mega-coder + mcp-toolbox
   - file conv  → mega-researcher + markitdown
5. Execute with Lightpanda for any web-based verification
6. `mcp openviking write` — persist what was changed and why

ENHANCED PATTERNS:
- Ralph loop: iterate with fresh context until PRD is complete
- PraisonAI: use route/parallel/loop for multi-agent sub-tasks
- Squad: cast named agents for team-based work
- Multica: use board view for complex multi-workspace tasks
- Karpathy: apply 4 principles to all coding decisions
- Best practices: follow 69 Claude Code tips
```

### Step 2 — Hermes Agent

```markdown
AGENT: hermes (.claude/orchestration/core-hermes/)

INPUT:  Background Agent completion summary
OUTPUT: New skills + updated supermemory + optionally updated CAPABILITIES.md

ACTIONS:
1. Read completion summary from Step 1
2. Identify: what worked, what failed, what was novel
3. Extract reusable patterns
4. If pattern is new and valuable:
   - Create skill file in .claude/skills/{domain}/{skill-name}/SKILL.md
   - Follow skill template: name, description, steps, examples
   - Optionally register in Refly skills registry
5. `mcp supermemory add` — save insights with tags
6. If new capability category found: append to CAPABILITIES.md
```

### Step 3 — Shannon Agent

```markdown
AGENT: mega-security (.claude/agents/mega/mega-security.md)
       Shannon core: .claude/security/security-shannon/

INPUT:  Changed files list from Step 1
OUTPUT: Security report (PASS or VULNERABILITIES_FOUND)

ACTIONS:
1. Static analysis of diff/changed files
   - Enhanced: use code-review-graph for structural blast-radius
   - Detect affected functions, callers, dependents, tests
2. For each web-facing change:
   a. Start app locally (if possible)
   b. Launch Lightpanda browser attacks
   c. Record any successful exploit as proof-of-concept
3. Compile report with CVSS severity ratings
4. If PASS: pipeline continues to Step 4
5. If VULNERABILITIES_FOUND:
   - Return to Step 1 with vulnerability details as new task input
   - Continue loop until clean
```

### Step 4 — Code Review Graph (optional)

```markdown
AGENT: mega-reviewer (.claude/agents/mega/mega-reviewer.md)
TOOL:  code-review-graph MCP (.claude/mcp-servers/mcp-code-review-graph/)

INPUT:  Completed and secured codebase from Step 3
OUTPUT: Structural quality report

ACTIONS:
1. Build/update code graph: `mcp code-review-graph build_or_update_graph_tool`
2. Compute blast-radius: `mcp code-review-graph get_impact_radius_tool`
3. Risk-scored review: `mcp code-review-graph detect_changes_tool`
4. Check architecture: `mcp code-review-graph get_architecture_overview_tool`
5. Detect dead code: `mcp code-review-graph refactor_tool`
6. Generate final structural report
7. Pipeline COMPLETE — deliver to user
```

---

## LOOP TERMINATION CONDITIONS

| Condition | Action |
|-----------|--------|
| Shannon reports PASS | ✅ Continue to Code Review Graph → Pipeline complete |
| 3 consecutive fix attempts fail | ⚠️ Escalate to user with full report |
| Task marked `no-security-check` | Skip Step 3 (use only for docs/config) |
| Timeout (configurable, default 2h) | Pause + notify user of partial progress |
| All tasks in Task Master completed | ✅ Pipeline complete — PRD fulfilled |

---

## AGENT ↔ TOOL MATRIX

| Agent | Memory | Browser | Code Analysis | Database | File Conversion | Task Mgmt | Monitoring |
|-------|--------|---------|---------------|----------|-----------------|-----------|------------|
| Task Master | supermemory | — | — | — | — | taskmaster MCP | claude-hud |
| Archon | — | — | gitnexus | — | — | archon YAML | claude-hud |
| Background Agent | supermemory + openviking | lightpanda | gitnexus + code-review-graph | mcp-toolbox | markitdown | — | claude-hud |
| Hermes | supermemory | — | — | — | — | refly | claude-hud |
| Shannon | — | lightpanda (attacks) | gitnexus + code-review-graph (static) | — | — | — | claude-hud |
| Code Review Graph | — | — | code-review-graph (22 tools) | — | — | — | claude-hud |

---

## REMOTE ACCESS (cc-connect)

When the pipeline completes, results can be delivered via cc-connect to:
- Telegram, Slack, Discord, WeChat Work, LINE, QQ, QQ Bot, Feishu/Lark, DingTalk, Weixin (personal)

Supports: text, markdown, images, files, voice messages, scheduled tasks (cron)
Source: `.claude/orchestration/core-cc-connect/`

---

## REFERENCES

- `CAPABILITIES.md` — capability registry and rules
- `AGENTS.md` — full agent catalog (54 repositories)
- `.claude/agents/mega/` — all mega-agent definitions
- `.claude/security/security-shannon/` — Shannon pentester core
- `.claude/orchestration/core-hermes/` — Hermes self-learning system
- `.claude/orchestration/core-background-agents/` — background agent configs
- `.claude/orchestration/core-archon/` — Archon YAML workflow engine
- `.claude/orchestration/core-ralph/` — Ralph PRD autonomous loop
- `.claude/orchestration/core-squad/` — Squad AI team management
- `.claude/orchestration/core-multica/` — Multica agent platform
- `.claude/orchestration/core-praisonai/` — PraisonAI multi-agent framework
- `.claude/orchestration/core-cc-connect/` — cc-connect remote access
- `.claude/orchestration/core-taskmaster/` — Task Master MCP tasks
- `.claude/orchestration/core-refly/` — Refly skills builder
- `.claude/mcp-servers/mcp-code-review-graph/` — Code Review Graph MCP
- `.claude/mcp-servers/mcp-toolbox/` — MCP Toolbox databases
- `.claude/mcp-servers/mcp-markitdown/` — Markitdown file conversion
- `.claude/reference/claude-hud/` — Claude HUD monitoring
- `.claude/skills/skills-claude/karpathy/` — Karpathy 4 principles
- `.claude/skills/skills-claude/best-practice/` — 69 Claude Code best practices
- `.claude/skills/skills-development/` — Matt Pocock 20 skills
- `.claude/skills/skills-seo/seomachine/` — SEOMachine 10 agents, 26 skills
- `.claude/ui-design/ui-impeccable/` — Impeccable design (18 commands)
- `.claude/ui-design/ui-taste-skill/` — Taste-skill (7 design skills)
- `.claude/ui-design/ui-stitch-skills/` — Stitch Skills (Google design generation)

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

