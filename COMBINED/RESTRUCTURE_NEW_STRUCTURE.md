# 🎯 NEW COMBINED STRUCTURE: HIERARCHICAL + PREFIX-SOURCE

> **The Refined Structure for Vibe-Coder Arsenal**
> Phase 0 Documentation - Created: April 4, 2026

---

## 📋 Structure Overview

This document defines the **new target structure** for the COMBINED directory using a hierarchical approach with PREFIX-SOURCE naming convention.

### **Design Principles**

1. **Top-level categories** - Clear organization by content type (agents, skills, commands, etc.)
2. **PREFIX-SOURCE naming** - Second level identifies source (agents-ruflo, skills-antigravity)
3. **Special cases** - `agents/by-role/` for cross-repo aggregates, `core-*` for unique system components
4. **Maximum 2-level depth** - Easy navigation, no deep nesting
5. **Source transparency** - Immediately know where each component originates

---

## 📂 Complete Directory Structure

```
NEW COMBINED/
│
├── agents/                          # TOP-LEVEL CATEGORY
│   ├── by-role/                     # Cross-repo aggregate (SPECIAL)
│   │   ├── architect/
│   │   ├── coder/
│   │   ├── debugger/
│   │   ├── planner/
│   │   ├── reviewer/
│   │   ├── security/
│   │   ├── tester/
│   │   ├── researcher/
│   │   ├── ui-specialist/
│   │   ├── writer/
│   │   ├── manager/
│   │   ├── scientist/
│   │   ├── devops/
│   │   └── business/
│   │
│   ├── by-interface/                # Organized by AI platform
│   │   ├── agents-claude/           # All Claude agents
│   │   ├── agents-copilot/          # All Copilot agents
│   │   ├── agents-cursor/           # All Cursor agents
│   │   ├── agents-antigravity/      # All Antigravity agents
│   │   ├── agents-codex/            # All Codex agents
│   │   └── agents-opencode/         # All OpenCode agents
│   │
│   ├── agents-ruflo/                # RuFlo agents
│   ├── agents-omc/                  # oh-my-claudecode agents (19 agents)
│   ├── agents-gsd/                  # get-shit-done agents (18 agents)
│   ├── agents-superpowers/          # Superpowers agents
│   ├── agents-claude-skills/        # Claude Skills agents
│   ├── agents-deer-flow/            # DeerFlow agents
│   ├── agents-shannon/              # Shannon pentester
│   ├── agents-hermes/               # Hermes self-learning agent
│   └── agents-background/           # Background agents (Open-Inspect)
│
├── skills/                          # TOP-LEVEL CATEGORY
│   ├── skills-ruflo/                # RuFlo skills (130+)
│   ├── skills-omc/                  # oh-my-claudecode skills
│   ├── skills-gsd/                  # get-shit-done skills
│   ├── skills-superpowers/          # Superpowers skills (14)
│   ├── skills-claude/               # Claude Skills (205)
│   ├── skills-antigravity/          # Antigravity skills (1,340+)
│   ├── skills-deer-flow/            # DeerFlow skills (15)
│   ├── skills-hermes/               # Hermes skills
│   ├── skills-copilot/              # Copilot skills
│   ├── skills-awesome-claude/       # Awesome Claude Code
│   ├── skills-everything-cc/        # Everything Claude Code
│   ├── skills-seo/                  # All SEO skills (Claude SEO + Marketing)
│   ├── skills-research/             # All research skills
│   ├── skills-design/               # All design skills
│   ├── skills-data-analysis/        # Data analysis skills
│   ├── skills-writing/              # Writing/content skills
│   ├── skills-devops/               # DevOps skills
│   ├── skills-platform/             # Platform-specific (Obsidian, etc.)
│   └── skills-business/             # Business/growth skills
│
├── commands/                        # TOP-LEVEL CATEGORY
│   ├── commands-gsd/                # get-shit-done commands (57 commands!)
│   ├── commands-superpowers/        # Superpowers commands (3)
│   ├── commands-shannon/            # Shannon commands (4)
│   ├── commands-omc/                # oh-my-claudecode commands
│   └── commands-general/            # General/shared commands
│
├── hooks/                           # TOP-LEVEL CATEGORY
│   ├── hooks-gsd/                   # get-shit-done hooks (5)
│   ├── hooks-superpowers/           # Superpowers hooks (4)
│   ├── hooks-ruflo/                 # RuFlo hooks (27)
│   ├── hooks-background-agents/     # Background agents hooks
│   └── hooks-omc/                   # oh-my-claudecode hooks
│
├── orchestration/                   # TOP-LEVEL CATEGORY
│   ├── core-ruflo/                  # RuFlo: plugin, v2, v3, versions, docs
│   ├── core-omc/                    # OMC: bridge, src, templates, tests
│   ├── core-gsd/                    # GSD: sdk, bin, tests, docs
│   ├── core-deer-flow/              # DeerFlow: backend, frontend, docker
│   ├── core-hermes/                 # Hermes: cli, gateway, tools
│   ├── core-background-agents/      # Background: control-plane, bots, runtime
│   ├── core-1code/                  # 1code desktop app
│   ├── core-vibe-kanban/            # Vibe-Kanban
│   └── workflows-terraform/         # Terraform IaC workflows
│
├── prompts/                         # TOP-LEVEL CATEGORY
│   ├── prompts-system/              # All system prompts merged
│   │   ├── claude/
│   │   ├── cursor/
│   │   ├── copilot/
│   │   ├── chatgpt/
│   │   ├── devin/
│   │   ├── windsurf/
│   │   ├── lovable/
│   │   ├── replit/
│   │   ├── gemini/
│   │   └── [30+ AI tools]/
│   ├── prompts-templates/           # All prompt templates
│   │   ├── prompts-chat/            # prompts.chat library (143k⭐)
│   │   ├── vibe-coding/
│   │   ├── claude-skills/
│   │   └── optimization/
│   ├── prompts-leaked/              # Leaked system prompts
│   └── prompts-security/            # Shannon security prompts (30+)
│
├── memory/                          # TOP-LEVEL CATEGORY
│   ├── memory-claude-mem/           # Claude-Mem system
│   ├── memory-supermemory/          # Supermemory system (#1 benchmarks)
│   ├── memory-openviking/           # OpenViking system (ByteDance)
│   └── memory-configs/              # All memory configurations
│
├── mcp-servers/                     # TOP-LEVEL CATEGORY
│   ├── mcp-gitnexus/                # GitNexus codebase knowledge graph
│   ├── mcp-lightpanda/              # Lightpanda browser (9x faster)
│   ├── mcp-hermes/                  # Hermes MCP server
│   ├── mcp-nano-banana/             # Nano-Banana Gemini image MCP
│   ├── mcp-openviking/              # OpenViking MCP
│   ├── mcp-pretext/                 # Pretext text layout MCP
│   └── mcp-configs/                 # All MCP plugin configs
│
├── ui-design/                       # TOP-LEVEL CATEGORY
│   ├── ui-components-galaxy/        # Galaxy 3,000+ Uiverse components
│   ├── ui-components-shadcn/        # shadcn/ui React components
│   ├── ui-rules/                    # UI UX Pro Max rules (161 rules + 67 styles)
│   └── ui-cursor-rules/             # All .cursorrules files
│
├── security/                        # TOP-LEVEL CATEGORY
│   ├── security-shannon/            # Shannon AI pentester
│   │   ├── apps/                    # CLI and worker apps
│   │   ├── configs/                 # Shannon configurations
│   │   └── prompts/                 # Pentesting prompts
│   └── security-reports/            # Security audit reports
│
├── reference/                       # TOP-LEVEL CATEGORY
│   └── reference-selfhosted/        # Awesome Self-Hosted catalog
│
└── [Documentation files at root]
    ├── INDEX.md
    ├── README.md
    ├── PHASE_1_SUMMARY.md
    ├── PHASE_2_COMPLETE.md
    ├── PHASE_3_COMPLETE.md
    ├── PHASE_4_PLAN.md
    ├── PHASE_5_PLAN.md
    ├── PHASE_6_PLAN.md
    ├── COMPLETE_STATUS_REPORT.md
    ├── QUICK_START_PHASES_4-6.md
    ├── RESTRUCTURE_NEW_STRUCTURE.md      # This file
    ├── RESTRUCTURE_PLAN.md               # Phase execution plan
    └── RESTRUCTURE_MOVEMENTS.json        # Tracking file
```

---

## 🎯 Navigation Examples

### Finding Agents
```bash
cd COMBINED/agents/

# See all agent sources
ls
# by-role/  by-interface/  agents-ruflo/  agents-omc/  agents-gsd/  ...

# Browse by role
cd by-role/debugger/

# Browse by orchestration system
cd ../agents-gsd/

# Browse by AI interface
cd ../by-interface/agents-claude/
```

### Finding Skills
```bash
cd COMBINED/skills/

# See all skill sources
ls
# skills-ruflo/  skills-omc/  skills-antigravity/  skills-claude/  ...

# Browse Antigravity's 1,340+ skills
cd skills-antigravity/

# Browse Claude Skills' 205 skills
cd ../skills-claude/
```

### Finding Commands
```bash
cd COMBINED/commands/

# See all command sources
ls
# commands-gsd/  commands-superpowers/  commands-shannon/  ...

# Browse GSD's 57 commands
cd commands-gsd/
```

---

## ✅ Benefits of This Structure

### 1. **Category Clarity**
- Immediately know if you're looking for agents, skills, commands, hooks, etc.
- Top-level categories map to mental model: "What am I looking for?"

### 2. **Source Transparency**
- Within each category, see all sources at a glance
- Easy to compare: "What does RuFlo have vs GSD vs OMC?"

### 3. **No Deep Nesting**
- Maximum 2 levels deep (category → source)
- Special cases: 3 levels for `agents/by-role/debugger/`

### 4. **Easy Comparison**
- All RuFlo content together: agents-ruflo, skills-ruflo, hooks-ruflo, core-ruflo
- All GSD content together: agents-gsd, skills-gsd, commands-gsd, hooks-gsd

### 5. **Intuitive Navigation**
- Follows natural thought process
- "I need a debugger" → `cd agents/by-role/debugger/`
- "I need GSD skills" → `cd skills/skills-gsd/`

### 6. **Flat File Manager View**
- Open `COMBINED/agents/` in file manager → see all agent sources
- No need to drill down through multiple levels

### 7. **Scalable**
- Easy to add new sources with same pattern
- New orchestration system? Add `agents-newsystem/`, `skills-newsystem/`, etc.

---

## 🔍 Special Cases Explained

### `agents/by-role/` - Cross-Repo Aggregate
- Contains agents organized by function (debugger, tester, planner, etc.)
- **Not** prefixed with source because it aggregates from multiple sources
- Each role folder (e.g., `debugger/`) contains agents from all repositories

### `agents/by-interface/` - Platform Organization
- Contains agents organized by AI platform
- **Second-level** has PREFIX-SOURCE naming: `agents-claude/`, `agents-copilot/`
- Allows platform-specific browsing

### `core-*` Prefix in Orchestration
- Used for unique system components that exist only in one repo
- Example: `core-ruflo/` contains RuFlo's plugin system, v2, v3 versions, etc.
- Not agents/skills/commands, but essential system files

### `prompts-system/` Merged Structure
- Merges system prompts from multiple repositories
- Organized by AI tool inside (claude/, cursor/, copilot/, etc.)
- Over 30 AI tools represented

---

## 📊 Statistics

| Category | Sources | Estimated Items |
|----------|---------|-----------------|
| **Agents** | 9 sources + 2 special | 336+ agents |
| **Skills** | 13 sources | 1,500+ skills |
| **Commands** | 4 sources | 67+ commands |
| **Hooks** | 4 sources | 40+ hooks |
| **Orchestration** | 9 core systems | Full platforms |
| **Prompts** | 4 categories | 2,500+ prompts |
| **Memory** | 3 systems + configs | Complete systems |
| **MCP Servers** | 6 servers + configs | 7 integrations |
| **UI Design** | 4 categories | 3,000+ components |
| **Security** | 2 categories | Shannon + reports |
| **Reference** | 1 catalog | Full catalog |

**Total Files:** ~44,750
**Total Directories:** ~8,860
**Structure Depth:** Maximum 3 levels (category → source → content)

---

## 🚀 Next Steps

1. **Phase 0:** Create detailed migration plan ✅ (You are here)
2. **Phase 1:** Restructure agents/ directory
3. **Phase 2:** Restructure skills/ directory
4. **Phase 3:** Restructure commands/ and hooks/
5. **Phase 4:** Restructure orchestration/
6. **Phase 5:** Restructure prompts/, memory/, mcp-servers/
7. **Phase 6:** Restructure ui-design/, security/, reference/
8. **Phase 7:** Update documentation and validate

---

**Document Version:** 1.0
**Status:** Phase 0 - Planning Complete
**Last Updated:** April 4, 2026
**Next:** Execute Phase 1 (Agents Restructuring)
