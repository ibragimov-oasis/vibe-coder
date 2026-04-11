<!-- Last updated: 2026-04-11 -->
# 🗺️ MASTER PLAN — Vibe-Coder Arsenal

> **Single source of truth** for the vibe-coder repository.
> Repository: https://github.com/ibragimov-oasis/vibe-coder

---

## 📌 Project Overview

**Vibe-Coder Arsenal** is a unified AI development toolkit built by combining 31 best-in-class repositories into one structured, navigable system. Everything lives in `COMBINED/` — organized by type, role, and platform.

| Metric | Value |
|--------|-------|
| Source repositories | 31 |
| Total files | ~44,800+ |
| Agents | 336+ |
| Skills | 1,500+ |
| Prompts | 2,500+ |
| UI Components | 3,000+ |
| Orchestration systems | 7 |
| MCP Servers | 7 |
| Memory systems | 3 |

---

## ✅ What's Done

### Phase 0 — Setup
- Repository created, 31 source repos downloaded
- Directory scaffolding for `COMBINED/` designed and approved
- Golden rules established (no monolithic files, keep original formats, copy don't move)

### Phase 1 — File Migration (Complete)
- All 31 repos scanned, READMEs read
- All files copied to `COMBINED/` with correct structure
- `INDEX.md` and `MIGRATION_MAP.json` maintained throughout
- Leftovers categorized and processed

### Phase 2 — Organization & Standards (Complete)
- Prefix-source naming convention applied (`skills-*`, `agents-*`, `hooks-*`, etc.)
- Duplicate detection across repos
- Categorization by role, interface, and domain

### Phase 3 — Restructure (Complete ✅)
- Final PREFIX-SOURCE structure validated
- All agents organized into `by-role/` and `by-interface/` layouts
- Skills organized by source/domain
- Orchestration split into `core-*` folders per system
- `workspace-config/` added for Claude/Cursor/Antigravity IDE configs
- `REPO_DOCS/` added with documentation for all 32 source repos
- Mega-agents folder scaffolded in `agents/mega/`
- Validation report: `COMBINED/RESTRUCTURE_VALIDATION_REPORT.md`

---

## 📁 Current Repository Structure

### Root Level
```
vibe-coder/
├── COMBINED/                ← The unified toolkit (all 31 repos merged here)
├── MASTER_PLAN.md           ← This file
├── README.md                ← Project overview
├── AUDIT.md                 ← Audit findings
├── ORCHESTRATION.md         ← Orchestration systems guide
├── MEMORY_SETUP.md          ← Memory systems setup guide
├── QUICKSTART.md            ← Quick start guide
├── CONTRIBUTING.md          ← Contribution guidelines
├── EXECUTION_PLAN.md        ← Detailed execution plan
├── PHASED_MIGRATION_PLAN.md ← Migration phases reference
├── llms.txt                 ← LLM-friendly index
└── [build scripts]          ← Python/bash scripts used during migration
```

### COMBINED/ Structure (Current)
```
COMBINED/
│
├── agents/                  # 336+ AI agents
│   ├── by-role/             # Organized by function
│   │   ├── analyst/
│   │   ├── architect/
│   │   ├── business/
│   │   ├── coder/
│   │   ├── debugger/
│   │   ├── devops/
│   │   ├── executor/
│   │   ├── manager/
│   │   ├── plan-checker/
│   │   ├── planner/
│   │   ├── researcher/
│   │   ├── reviewer/
│   │   ├── scientist/
│   │   ├── security/
│   │   ├── synthesizer/
│   │   ├── tester/
│   │   ├── ui-specialist/
│   │   ├── verifier/
│   │   └── writer/
│   ├── by-interface/        # Organized by platform
│   │   ├── agents-antigravity/
│   │   ├── agents-claude/
│   │   ├── agents-codex/
│   │   ├── agents-copilot/
│   │   ├── agents-cursor/
│   │   └── agents-opencode/
│   ├── agents-claude-skills/
│   ├── agents-deer-flow/
│   ├── agents-ruflo/
│   ├── agents-superpowers/
│   ├── background-agents/
│   └── mega/                # 🔄 Phase 4: unified mega-agents (in progress)
│
├── skills/                  # 1,500+ skill packages
│   ├── skills-antigravity/
│   ├── skills-awesome-claude/
│   ├── skills-background/
│   ├── skills-business/
│   ├── skills-claude/
│   ├── skills-copilot/
│   ├── skills-data-analysis/
│   ├── skills-deer-flow/
│   ├── skills-design/
│   ├── skills-devops/
│   ├── skills-everything-cc/
│   ├── skills-hermes/
│   ├── skills-omc/
│   ├── skills-platform/
│   ├── skills-research/
│   ├── skills-ruflo/
│   ├── skills-seo/
│   ├── skills-superpowers/
│   └── skills-writing/
│
├── commands/                # 67+ slash commands
│   ├── commands-gsd/
│   ├── commands-omc/
│   ├── commands-ruflo/
│   ├── commands-shannon/
│   └── commands-superpowers/
│
├── hooks/                   # Automation hooks
│   ├── hooks-1code/
│   ├── hooks-background-agents/
│   ├── hooks-gsd/
│   ├── hooks-omc/
│   ├── hooks-ruflo/
│   └── hooks-superpowers/
│
├── prompts/                 # 2,500+ prompts
│   ├── prompts-leaked/
│   ├── prompts-security/
│   ├── prompts-system/
│   └── prompts-templates/
│
├── orchestration/           # 7 orchestration systems
│   ├── core-1code/
│   ├── core-background-agents/
│   ├── core-deer-flow/
│   ├── core-gsd/
│   ├── core-hermes/
│   ├── core-omc/
│   ├── core-ruflo/
│   ├── core-vibe-kanban/
│   ├── superpowers/
│   └── workflows-terraform/
│
├── memory/                  # Persistent memory systems
│   ├── memory-claude-mem/
│   └── memory-supermemory/
│
├── mcp-servers/             # MCP integrations
│   ├── mcp-configs/
│   ├── mcp-gitnexus/
│   ├── mcp-hermes/
│   ├── mcp-lightpanda/
│   ├── mcp-nano-banana/
│   ├── mcp-openviking/
│   └── mcp-pretext/
│
├── ui-design/               # 3,000+ UI components
│   ├── ui-components-galaxy/
│   ├── ui-components-shadcn/
│   ├── ui-cursor-rules/
│   └── ui-rules/
│
├── security/                # Security tools
│   ├── security-shannon/    ← AI pentester (Shannon)
│   └── security-reports/    ← Sample pentest reports
│
├── reference/               # Reference documentation
│   └── reference-selfhosted/
│
├── workspace-config/        # IDE-specific configurations
│   ├── claude/              ← Claude Code (commands + skills)
│   ├── cursor/              ← Cursor AI (rules)
│   └── antigravity/         ← Antigravity (hooks, plugins, skills)
│
├── REPO_DOCS/               # Documentation for all 32 source repos
│   ├── 01-background-agents/
│   ├── 02-hermes-agent/
│   ├── 03-shannon/
│   ├── 04-1code/
│   ├── 05-deer-flow/
│   ├── 06-get-shit-done/
│   ├── 07-oh-my-claudecode/
│   ├── 08-ruflo/
│   ├── 09-superpowers/
│   ├── 10-vibe-kanban/
│   ├── 11-antigravity/
│   ├── 12-awesome-claude-code/
│   ├── 13-awesome-copilot/
│   ├── 14-claude-seo/
│   ├── 15-claude-skills/
│   ├── 16-everything-claude-code/
│   ├── 17-obsidian-skills/
│   ├── 18-awesome-chatgpt-prompts/
│   ├── 19-system-prompts-by-tool/
│   ├── 20-system-prompts-leaks/
│   ├── 21-vibe-coding-template/
│   ├── 22-awesome-selfhosted/
│   ├── 23-gitnexus/
│   ├── 24-openviking/
│   ├── 25-lightpanda/
│   ├── 26-claude-mem/
│   ├── 27-nano-banana-mcp/
│   ├── 28-pretext/
│   ├── 29-supermemory/
│   ├── 30-galaxy/
│   ├── 31-shadcn/
│   └── 32-ui-ux-pro-max/
│
└── INDEX.md                 # Full index of all files and movements
```

---

## 🔮 What's Next

### Phase 4 — Mega-Agents (Planned)
Merge duplicate agents from different repos into single unified "mega" agents.

**Goal:** One best-in-class agent per role, combining the best from all sources.

**Example:**
- `by-role/debugger/` has debuggers from RuFlo, OMC, GSD, Superpowers → merge into `mega/mega-debugger.md`
- `by-role/tester/` → `mega/mega-tester.md`
- `by-role/security/` + Shannon → `mega/mega-security.md`

**Rules:**
- Keep interface-specific versions separate (Claude vs Cursor vs Copilot)
- Merge only same-role agents
- Preserve best instructions from each source
- Document sources inside the merged file

**Reference:** `COMBINED/PHASE_4_PLAN.md`, `COMBINED/PHASE_4_MERGE_RECOMMENDATIONS.md`

---

### Phase 5 — Full Audit (Planned)
Verify nothing was missed. Check every source repo against `COMBINED/`.

**Deliverable:** `COMBINED/audit/PHASE_5_AUDIT_REPORT.md`

**Reference:** `COMBINED/PHASE_5_PLAN.md`, `COMBINED/PHASE_5_VALIDATION_AUDIT.md`

---

### Phase 6 — Orchestration Integration (Planned)
Wire everything together into a working, auto-routing system.

**Vision:**
```
User Request
    ↓
Orchestrator (RuFlo / DeerFlow / GSD / OMC)
    ↓
Route to correct agent role → load skills → load prompts
    ↓
Execute → Shannon security check → Lightpanda browser test
    ↓
Memory save → Report to user
```

**Key integrations:**
- Claude Code → `workspace-config/claude/`
- Cursor → `workspace-config/cursor/`
- Copilot → `workspace-config/antigravity/` + `agents/by-interface/agents-copilot/`
- Shannon auto-pentest after deploy
- Lightpanda browser for fast UI verification
- Claude-Mem + Supermemory for persistent context

**Reference:** `COMBINED/PHASE_6_PLAN.md`, `COMBINED/PHASE_6_ORCHESTRATION_INTEGRATION.md`

---

## ⚡ Iron Rules

These apply to all work in this repository:

| Rule | Description |
|------|-------------|
| ✅ Read README first | Before touching any repo, read its README |
| ✅ Keep original formats | `.py` stays `.py`, `.yaml` stays `.yaml`, never convert to `.md` |
| ✅ Use subdirectories | Never dump everything in one folder |
| ✅ Keep originals intact | Copy, never move source files |
| ✅ Update INDEX.md | Log every file: source → destination → action |
| ❌ No monolithic files | No "everything in one .md" dumps |
| ❌ No role mixing | Debugger ≠ Tester ≠ Designer — keep roles separate |
| ❌ No deletions | Never delete original source files |

---

## 🗝️ Key Documents

| Document | Purpose |
|----------|---------|
| `COMBINED/README.md` | Main toolkit overview and quick-start |
| `COMBINED/INDEX.md` | Full file movement log |
| `COMBINED/agents/INDEX.md` | Agent catalog |
| `COMBINED/skills/INDEX.md` | Skills catalog |
| `ORCHESTRATION.md` | Guide to all 7 orchestration systems |
| `MEMORY_SETUP.md` | Memory systems setup |
| `QUICKSTART.md` | How to get started fast |
| `AUDIT.md` | Audit findings |
| `COMBINED/PHASE_4_PLAN.md` | Phase 4 detailed plan |
| `COMBINED/PHASE_5_PLAN.md` | Phase 5 detailed plan |
| `COMBINED/PHASE_6_PLAN.md` | Phase 6 detailed plan |

---

## 📦 Source Repositories (31 total)

| # | Repo | Category | Status |
|---|------|----------|--------|
| 1 | background-agents | Orchestration | ✅ Migrated |
| 2 | hermes-agent | Orchestration / MCP | ✅ Migrated |
| 3 | shannon | Security | ✅ Migrated |
| 4 | 1code | Orchestration | ✅ Migrated |
| 5 | deer-flow | Orchestration | ✅ Migrated |
| 6 | get-shit-done (GSD) | Orchestration | ✅ Migrated |
| 7 | oh-my-claudecode (OMC) | Orchestration | ✅ Migrated |
| 8 | ruflo | Orchestration | ✅ Migrated |
| 9 | superpowers | Skills / Agents | ✅ Migrated |
| 10 | vibe-kanban | Orchestration | ✅ Migrated |
| 11 | antigravity | Agents / Skills | ✅ Migrated |
| 12 | awesome-claude-code | Agents / Skills | ✅ Migrated |
| 13 | awesome-copilot | Agents / Prompts | ✅ Migrated |
| 14 | claude-seo | Skills (SEO) | ✅ Migrated |
| 15 | claude-skills | Skills | ✅ Migrated |
| 16 | everything-claude-code | Skills / Commands | ✅ Migrated |
| 17 | obsidian-skills | Skills | ✅ Migrated |
| 18 | awesome-chatgpt-prompts | Prompts | ✅ Migrated |
| 19 | system-prompts-by-tool | Prompts | ✅ Migrated |
| 20 | system-prompts-leaks | Prompts | ✅ Migrated |
| 21 | vibe-coding-template | Prompts / Templates | ✅ Migrated |
| 22 | awesome-selfhosted | Reference | ✅ Migrated |
| 23 | gitnexus | MCP Server | ✅ Migrated |
| 24 | openviking | MCP Server / Memory | ✅ Migrated |
| 25 | lightpanda | Browser / MCP | ✅ Migrated |
| 26 | claude-mem | Memory | ✅ Migrated |
| 27 | nano-banana-mcp | MCP Server | ✅ Migrated |
| 28 | pretext | MCP Server | ✅ Migrated |
| 29 | supermemory | Memory | ✅ Migrated |
| 30 | galaxy (uiverse) | UI Components | ✅ Migrated |
| 31 | shadcn/ui | UI Components | ✅ Migrated |
| 32 | ui-ux-pro-max | UI Rules | ✅ Migrated |

---

*Last updated: 2026-04-11*
