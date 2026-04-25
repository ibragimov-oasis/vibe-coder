---
tags:
  - domain/skills
  - artifact/doc
  - source/root
---

# ⛔ PIPELINE_TRIGGER.md — Universal Pre/Post-Task Pipeline

> **Read by ALL AI interfaces.** This file defines the mandatory steps EVERY agent
> must execute BEFORE and AFTER completing a task. **No exceptions. No skipping. No "later".**
> Last updated: 2026-04-17

---

## 🧭 PRE-TASK PIPELINE (before starting)

### ⛔ Step 0: Memory Bootstrap (MANDATORY — DO NOT SKIP)

> **THIS STEP IS NON-NEGOTIABLE. Execute it BEFORE reading any other file.**
> **If you skip this step, you waste ~87% more tokens than necessary.**
> **That costs the user real money. DO NOT SKIP.**

**Option A — Use the bootstrap script (recommended):**
```bash
bash memory-bootstrap.sh
```

**Option B — Manual (if script unavailable):**
```bash
# Check if code graph exists:
if [ ! -f .code-review-graph/graph.db ]; then
  # First session — auto-install and build:
  pip install code-review-graph 2>/dev/null && code-review-graph build
  # Fallback: npx -y gitnexus@latest map
else
  # Subsequent sessions — incremental update (<2 sec):
  code-review-graph update
fi
```

**After completion**: Tell the user: "🧠 Memory loaded — graph ready."

**Purpose**: After graph exists, query it instead of reading files → 8.2x token savings.

> Full protocol: **Read `MEMORY.md`** for complete 3-layer memory architecture.

### Step 1: Memory Check (Supermemory)

**Claude Code / Cursor** (MCP available):
```
mcp supermemory search "<task keywords>"
```

**Copilot / Codex / Gemini / Antigravity** (CLI workaround):
```bash
npx -y supermemory search "<task keywords>"
# If fails: skip gracefully, proceed without prior context
```

**Purpose**: Don't redo work that was already done. If prior work exists, build on it.

### Step 1.5: Prompt Quality Assessment

> **Before routing and executing, assess whether the user's request is clear enough to act on.**

```
IF prompt is vague (e.g. "make it better", "add a feature", "fix the thing") OR
   prompt lacks specifics (no file path, no error message, no acceptance criteria):

   → Check .claude/prompts/prompts-templates/ for a template matching the task type
   → Apply grill-me skill: .claude/skills/skills-planning/grill-me/
   → Rewrite the prompt using the template structure
   → Confirm refined prompt with user before executing

ELSE (prompt is clear and specific):
   → Proceed to Step 2
```

**Signs of a weak prompt**: No target file/component specified, no expected behavior described, no acceptance criteria, overly broad scope, or contradictory requirements.

**Prompt refinement resources**:
- Templates: `.claude/prompts/prompts-templates/` (PRD, debug, design, audit, security, tdd, doc, review)
- Planning skills: `.claude/skills/skills-planning/grill-me/`, `write-a-prd/`, `design-an-interface/`
- The `grill-me` skill asks 3-5 targeted clarifying questions to tighten scope

### Step 2: Agent Selection

Classify the user's task and select the correct mega-agent:

```
IF task mentions bug/error/crash/fix/broken/не работает
  → READ .claude/agents/mega/mega-debugger.md

IF task mentions UI/design/frontend/component/CSS/layout/страница/дизайн
  → READ .claude/agents/mega/mega-designer.md

IF task mentions plan/architecture/roadmap/PRD/design-doc/план/архитектура
  → READ .claude/agents/mega/mega-planner.md

IF task mentions research/analyze/investigate/compare/исследуй/сравни
  → READ .claude/agents/mega/mega-researcher.md

IF task mentions security/vulnerability/audit/pentest/безопасность
  → READ .claude/agents/mega/mega-security.md

IF task mentions SEO/meta/sitemap/search-ranking/поисковая оптимизация
  → READ .claude/agents/mega/mega-seo.md

IF task mentions review/code-review/PR-review/проверь код
  → READ .claude/agents/mega/mega-reviewer.md

IF task mentions test/TDD/coverage/unit-test/тест
  → READ .claude/agents/mega/mega-tester.md

IF task mentions docs/README/documentation/API-docs/документация
  → READ .claude/agents/mega/mega-writer.md

IF task mentions deploy/CI/CD/git/pipeline/docker/деплой
  → READ .claude/agents/mega/mega-devops.md

IF task mentions infrastructure/swarm/scaling/consensus/инфраструктура
  → READ .claude/agents/mega/mega-infrastructure.md

IF task mentions system-design/ADR/trade-off/системный дизайн
  → READ .claude/agents/mega/mega-architect.md

IF task is complex (multiple concerns, full feature, admin panel, dashboard)
  → READ .claude/agents/mega/mega-orchestrator.md
  → Orchestrator decomposes into sub-tasks and delegates to other agents

DEFAULT (simple coding task)
  → READ .claude/agents/mega/mega-coder.md
```

### Step 3: Codebase Map (if coding)

**Claude Code / Cursor** (MCP):
```
mcp gitnexus map
```

**Copilot / Codex / Gemini / Antigravity** (CLI):
```bash
npx -y gitnexus@latest map
# If not available: manually inspect project structure with ls/find
```

**Purpose**: Understand the project structure before making changes.

### Step 4: Load Context

**Claude Code / Cursor** (MCP):
```
mcp openviking read
```

**Others** (CLI):
```bash
npx -y @openviking/mcp
# If not available: check recent git log for context
```

**Purpose**: Load prior decisions and context about this codebase.

---

## 🔄 POST-TASK PIPELINE (after completing, MANDATORY)

### Step A: Security Check (Shannon)

For ANY code change, perform a quick security review:

1. **Read** `.claude/security/security-shannon/SHANNON-PRO.md` (first time only — memorize the checklist)
2. **Check your changes** against these categories:
   - 🔴 Injection (SQL, command, template, deserialization)
   - 🔴 XSS (DOM, reflected, stored)
   - 🔴 Authentication/Authorization bypass
   - 🔴 SSRF / path traversal
   - 🔴 Hardcoded secrets or credentials
   - 🔴 Insecure direct object references (IDOR)
3. **If vulnerabilities found** → Fix them immediately, then re-check
4. **If web-facing** → Use Lightpanda for dynamic verification when possible

**Skip conditions**: Documentation-only changes, config changes, comments

### Step B: Self-Learning (Hermes)

After completing the task, evaluate what you learned:

1. **Was this a novel pattern?** (new approach, unusual solution, important tradeoff)
   - YES → Create a skill file: `.claude/skills/{domain}/{pattern-name}/SKILL.md`
   - NO → Continue
2. **Save insights to memory**:

   **Claude Code / Cursor** (MCP):
   ```
   mcp supermemory add "<what was done and why>" tags:[domain, pattern-type]
   ```

   **Others** (CLI):
   ```bash
   npx -y supermemory add "<what was done and why>" --tags "<domain>"
   # If fails: document the learning in a comment in the code instead
   ```

3. **Update codebase context**:

   **Claude Code / Cursor** (MCP):
   ```
   mcp openviking write "<what changed and why>"
   ```

   **Others**: Skip — codebase context will be rebuilt on next gitnexus map.

### Step C: Obsidian Vault Auto-Save (⛔ MANDATORY)

Save the task output as a permanent Obsidian-compatible markdown note:

```bash
bash obsidian-update.sh \
  --title "<task title>" \
  --content "<what was done, what was learned, key decisions>" \
  --tags "<domain>,<type>"
```

**Examples:**
```bash
# After fixing a bug:
bash obsidian-update.sh --title "Fix Redis auth pool leak" --content "Fixed stale connection pool in auth.ts. Root cause: pool never reused connections across requests." --tags "auth,bugfix,redis"

# After security audit:
bash obsidian-update.sh --title "Security audit: API endpoints" --content "Shannon audit passed. No injection found. IDOR risk in /api/user/:id mitigated with ownership check." --tags "security,api"

# After implementing a feature:
bash obsidian-update.sh --title "Add dark mode toggle" --content "Added CSS vars + localStorage persistence. Used Galaxy component BaseToggle." --tags "ui,feature,design"
```

This creates/updates:
- `obsidian_vibe-coder/sessions/YYYY-MM-DD-HHMM-<title>.md` — the note
- `obsidian_vibe-coder/MOC - Sessions.md` — index of all sessions
- `obsidian_vibe-coder/_audit/SESSION_REGISTRY.md` — searchable registry
- Supermemory (if configured) — cross-session long-term memory

**Skip conditions**: Only skip for read-only informational responses with no new learnings.

### Step D: Quality Report

Include this at the end of every task response:

```
═══════════════════════════════════
✅ Security: [PASS / ISSUES FIXED (describe)]
✅ Learned:  [NONE / New pattern: (describe)]
✅ Obsidian: [SAVED to sessions/YYYY-MM-DD-title.md / SKIPPED (reason)]
✅ Changed:  [list of files]
✅ Tests:    [PASS / FAIL / N/A]
═══════════════════════════════════
```

---

## ⚡ WHEN TO RUN FULL PIPELINE vs QUICK CHECK

| Task Type | Pre-Task | Post-Task |
|-----------|----------|-----------|
| Simple fix (typo, style) | Skip Steps 2-4 | Quick security glance only; skip C |
| Feature implementation | All 4 steps | Full pipeline (A + B + C + D) |
| UI/Design work | Steps 2-4 | Security A + Obsidian C + Report D |
| Bug fix | All 4 steps | Full pipeline (A + B + C + D) |
| Documentation | Skip Steps 3-4 | Skip A, do B + C + D |
| Architecture/Planning | Steps 1-2 | Skip A, do B + C + D |
| Security audit | Steps 1-3 | B + C + D only |
| Read-only Q&A | Steps 0-1 | Skip A and C, do D |

---

## 🖥️ INTERFACE-SPECIFIC NOTES

### Claude Code (Best Experience)
- ✅ All 4 pre-task steps auto-triggered via hooks in `settings.json`
- ✅ Post-task auto-triggered via `TaskCompleted` hook → `pipeline-trigger.cjs`
- ✅ Agent Teams available for parallel delegation
- **You**: Just focus on the task — the hooks handle the pipeline.

### Cursor (Strong Experience)
- ✅ 8 MCP servers available — use them aggressively
- ⚠️ No hooks — manually follow startup sequence at start of EACH conversation
- ✅ Auto-attach rules trigger security and design checks on matching files
- **You**: Run the startup sequence explicitly, then execute. MCP is your power.

### GitHub Copilot (Good Experience)
- ❌ No MCP — use CLI workarounds from terminal
- ✅ Squad for team coordination (your exclusive advantage)
- ✅ `.github/agents/*.agent.md` for custom agents
- **You**: Run CLI commands for tools. Use Squad for complex multi-concern tasks.

### OpenAI Codex (Sandbox)
- ❌ No MCP — use CLI workarounds in your sandbox
- ✅ Sandboxed execution — run batch operations safely
- **You**: Run CLI commands in sandbox. Leverage parallel execution.

### Gemini CLI (Multimodal)
- ❌ No MCP — use CLI workarounds from terminal
- ✅ nano-banana image generation (your native advantage)
- ✅ Long context window (2M tokens) — read entire mega-agent files
- **You**: Run CLI commands. Leverage multimodal understanding and image generation.

### Antigravity (Hooks + Browser)
- ❌ No MCP natively — use CLI workarounds
- ✅ Browser subagent for visual testing
- ✅ Built-in image generation
- **You**: Use browser subagent for web tasks. Run CLI commands for tools.

---

## 📍 REFERENCES

- `CAPABILITIES.md` — full capability registry
- `AGENTS.md` — all 15 mega-agents and 54 repository catalog
- `PIPELINE.md` — detailed pipeline architecture (for deep understanding)
- `INTERFACE_MATRIX.md` — what tools work in which interface
- `.claude/security/security-shannon/SHANNON-PRO.md` — security methodology
- `.claude/orchestration/core-hermes/` — self-learning system
- `.claude/agents/mega/` — all mega-agent definitions

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

