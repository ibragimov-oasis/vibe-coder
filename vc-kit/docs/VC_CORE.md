---
tags:
  - domain/skills
  - artifact/doc
  - source/root
---

# CORE.md — Vibe-Coder v3.0 Minimal Universal Core

> **Single source of truth for startup sequence, routing, and post-task steps.**
> All interface configs reference this file instead of duplicating its content.
> Last updated: 2026-04-18

---

## 🪪 STEP 0 — SELF-IDENTIFICATION (do this first, always)

Determine your interface by checking which config file loaded you:
- `.claude/CLAUDE.md` → **Claude Code** (hooks auto-run pipeline, full MCP, agent teams)
- `.github/copilot-instructions.md` → **GitHub Copilot** (Squad native, GitHub integration, CLI tools)
- `.cursor/rules/main.mdc` → **Cursor AI** (9 MCP servers, auto-attach rules, composer mode)
- `.codex/AGENTS.md` → **OpenAI Codex** (sandboxed execution, CLI tools)
- `.gemini/GEMINI.md` → **Gemini CLI** (2M context, multimodal, search grounding, CLI tools)
- `.antigravity/AGENTS.md` → **Antigravity** (browser subagent, image gen, URL reader, CLI tools)

Then check `INTERFACE_MATRIX.md` for your exact tool availability.

---

## ⛔ STEP 1 — MEMORY BOOTSTRAP (NON-NEGOTIABLE)

> Skipping this wastes ~87% more tokens. Run this as the very first action.

```bash
# Preferred:
bash memory-bootstrap.sh
# This script auto-initializes Obsidian vault if missing, builds/updates SQL graph,
# and checks Claude-Mem, Supermemory, OpenViking status.

# Manual fallback:
if [ ! -f .code-review-graph/graph.db ]; then
  pip install code-review-graph 2>/dev/null && code-review-graph build
else
  code-review-graph update
fi
# Final fallback (no Python):
npx -y gitnexus@latest map
```

After completion tell the user: **"🧠 Memory loaded — graph ready."**

---

## 🔍 STEP 2 — CHECK PRIOR WORK (before every task)

**Claude Code / Cursor** (MCP):
```
mcp supermemory search "<task keywords>"
```
**All other interfaces** (CLI):
```bash
npx -y supermemory search "<task keywords>"
# If unavailable: skip gracefully, continue
```

---

## 🧭 STEP 3 — AGENT ROUTING (classify task → select mega-agent)

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

IF task is COMPLEX (multiple concerns / full feature / dashboard / admin panel / e-commerce)
  → READ .claude/agents/mega/mega-orchestrator.md
  → Decompose into sub-tasks, spawn sub-agents per concern
  → [Copilot] Use Squad casting (see copilot-instructions.md)
  → [Claude]  Use agent teams (CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1)
  → [Cursor]  Use Composer mode for multi-file coordination

DEFAULT (simple, single-file coding task)
  → READ .claude/agents/mega/mega-coder.md
```

---

## 🔧 STEP 4 — UNDERSTAND CODEBASE (for coding tasks)

**Claude Code / Cursor** (MCP):
```
mcp gitnexus map
mcp openviking read
```
**All other interfaces** (CLI):
```bash
npx -y gitnexus@latest map
# Or: git log --oneline -20 && find . -name "*.md" -maxdepth 2 | head -10
```

---

## ⚡ 5 HARDCODED RULES (apply in every interface)

### Rule 1 — Browser: Lightpanda ONLY, NEVER Chrome
```bash
# MCP (Claude/Cursor):          mcp lightpanda navigate "<url>"
# CLI (all interfaces):         npx -y lightpanda-mcp
# Antigravity:                  use built-in browser subagent
```
Lightpanda docs: `.claude/mcp-servers/mcp-lightpanda/`

### Rule 2 — Memory: Check Before, Save After
Check supermemory before every task. Save learnings after every task.
Tools: `supermemory` (MCP/CLI), `openviking` (MCP/CLI), `code-review-graph` (mandatory graph)

### Rule 3 — UI/Design: Hierarchy (check in order, stop when found)
1. Galaxy: `.claude/ui-design/ui-components-galaxy/` (3,000+ components)
2. shadcn/ui: `.claude/ui-design/ui-components-shadcn/`
3. Impeccable: `.claude/ui-design/ui-impeccable/` (18 cmds, anti-slop)
4. Taste-skill: `.claude/ui-design/ui-taste-skill/` (7 skills, 3-dial)
5. Stitch: `.claude/ui-design/ui-stitch-skills/` (Google Stitch)
6. UI/UX Pro Max: `.claude/ui-design/ui-rules/ui-ux-pro-max/` (161 rules)
7. Custom — only if 1–6 have nothing; document reason

### Rule 4 — Self-Improvement: Hermes After Every Task
```
Extract patterns → create .claude/skills/{domain}/{name}/SKILL.md → save to supermemory
Source: .claude/orchestration/core-hermes/
```

### Rule 5 — Security: Shannon After Every Code Change
```
Static SAST → Dynamic (Lightpanda/CLI) → fix CRITICAL/HIGH → re-audit (max 3 loops)
Agent: .claude/agents/mega/mega-security.md
Method: .claude/security/security-shannon/SHANNON-PRO.md
```

---

## 🔄 POST-TASK PIPELINE (mandatory after every task)

### A — Security Check
Review ALL code changes for:
- 🔴 Injection (SQL, command, template, deserialization)
- 🔴 XSS (DOM, reflected, stored)
- 🔴 Auth/Authorization bypass
- 🔴 Hardcoded secrets / credentials
- 🔴 SSRF / path traversal
- 🔴 Insecure direct object references (IDOR)

If vulnerabilities found → fix → re-check. Max 3 loops. Escalate if still failing.

### B — Self-Learning (Hermes)
Novel pattern discovered?
```
YES → Create: .claude/skills/{domain}/{name}/SKILL.md
      Save:   npx -y supermemory add "<insight>" --tags "<domain>"
NO  → Continue
```

### C — Obsidian Vault Auto-Save (⛔ MANDATORY after every non-trivial task)
```bash
bash obsidian-update.sh \
  --title "<task title>" \
  --content "<what was done, learned, decided>" \
  --tags "<domain>,<type>"
```
Creates: `obsidian_vibe-coder/sessions/YYYY-MM-DD-HHMM-<title>.md`
Updates: `obsidian_vibe-coder/MOC - Sessions.md`
Also saves to: Supermemory (if API key configured in .env)
Script: `obsidian-update.sh` (run `bash obsidian-update.sh --help` for usage)

### D — Quality Report (include at end of every response)
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

## 🎯 Karpathy 4 Principles (all agents, always)

1. **Think Before Coding** — State assumptions; stop when confused; present tradeoffs
2. **Simplicity First** — Minimum code; no speculative features; no single-use abstractions
3. **Surgical Changes** — Touch only what the request requires; mention other issues, don't fix them
4. **Goal-Driven Execution** — Define success criteria; write tests first; loop until verified

---

## 📂 Key Locations

```
PIPELINE_TRIGGER.md     ← Detailed pre/post task sequences
CAPABILITIES.md         ← Full capability registry
INTERFACE_MATRIX.md     ← What tools/MCP work in which interface
AUDIT_MATRIX.md         ← Gap analysis (CRITICAL/MAJOR/MINOR)
REALITY_TEST.md         ← Execution traces for 3 test scenarios
SYNC_CHECK.md           ← Governance drift checklist
AGENTS.md               ← 15 mega-agent catalog
memory-bootstrap.sh     ← Run FIRST: builds SQL graph + initializes Obsidian vault
obsidian-update.sh      ← Run AFTER every task: saves output as Obsidian note
.claude/agents/mega/   ← Mega-agent definition files
.claude/skills/        ← 3,000+ skills (see INDEX.md for portability)
.claude/orchestration/ ← 23 orchestration systems
.claude/ui-design/     ← UI component libraries
.claude/security/      ← Shannon pentesting
.claude/REPO_DOCS/     ← HOW_IT_WORKS.md for all 54 repos
obsidian_vibe-coder/    ← Obsidian vault (MOCs, sessions, governance)
```

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

