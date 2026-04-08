# 📂 COMBINED DIRECTORY STRUCTURE - CURRENT STATE

> **Complete Structure Documentation**  
> **Date**: April 8, 2026 04:07 UTC  
> **Status**: Production Ready ✅  
> **Phase**: All Phases Complete (0-6)

---

## 📊 OVERVIEW

**Total Statistics**:
- **Files**: 52,386
- **Directories**: 13,160
- **Size**: ~976 MB
- **Source Repositories**: 31
- **Organization Method**: Hierarchical with PREFIX-SOURCE naming

---

## 🎯 DESIGN PRINCIPLES

1. **Top-level categories** - Clear organization by content type
2. **PREFIX-SOURCE naming** - Source identification (agents-ruflo, skills-claude)
3. **Special aggregates** - `by-role/` and `by-interface/` for cross-repo organization
4. **Maximum 2-3 level depth** - Easy navigation
5. **Source transparency** - Know the origin of every component
6. **Zero data loss** - All originals preserved

---

## 📁 COMPLETE DIRECTORY TREE

```
COMBINED/
│
├── 📂 REPO_DOCS/                      # Original repository documentation (32 repos)
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
├── 🤖 agents/                         # AI AGENTS (1,128 files, 434 dirs)
│   ├── by-role/                       # ⭐ Cross-repo aggregate (14 roles)
│   │   ├── architect/                 # Architecture & design agents (5 files)
│   │   ├── business/                  # Business & strategy agents (8 files)
│   │   ├── coder/                     # Implementation agents (17 files)
│   │   ├── debugger/                  # Debugging agents (3 files)
│   │   ├── devops/                    # DevOps & operations agents
│   │   ├── manager/                   # Coordination & management agents
│   │   ├── planner/                   # Planning agents (12 files)
│   │   ├── researcher/                # Research & analysis agents
│   │   ├── reviewer/                  # Code review agents (9 files)
│   │   ├── scientist/                 # Scientific analysis agents
│   │   ├── security/                  # Security agents
│   │   ├── tester/                    # Testing & QA agents
│   │   ├── ui-specialist/             # UI/UX design agents
│   │   └── writer/                    # Documentation agents
│   │
│   ├── by-interface/                  # ⭐ Organized by AI platform
│   │   ├── agents-antigravity/        # Antigravity plugin agents
│   │   ├── agents-claude/             # Claude Code agents
│   │   ├── agents-codex/              # OpenAI Codex agents
│   │   ├── agents-copilot/            # GitHub Copilot agents
│   │   ├── agents-cursor/             # Cursor editor agents
│   │   └── agents-opencode/           # OpenCode agents
│   │
│   ├── agents-gsd/                    # ✅ GET SHIT DONE agents (8 files)
│   │   ├── gsd-planner.md
│   │   ├── gsd-executor.md
│   │   ├── gsd-verifier.md
│   │   ├── gsd-project-researcher.md
│   │   ├── gsd-phase-researcher.md
│   │   ├── gsd-plan-checker.md
│   │   ├── gsd-research-synthesizer.md
│   │   └── gsd-roadmapper.md
│   │
│   ├── agents-omc/                    # ✅ oh-my-claudecode agents (19 files)
│   │   ├── analyst.md
│   │   ├── architect.md
│   │   ├── code-reviewer.md
│   │   ├── code-simplifier.md
│   │   ├── critic.md
│   │   ├── debugger.md
│   │   ├── designer.md
│   │   ├── document-specialist.md
│   │   ├── executor.md
│   │   ├── explore.md
│   │   ├── git-master.md
│   │   ├── planner.md
│   │   ├── qa-tester.md
│   │   ├── scientist.md
│   │   ├── security-reviewer.md
│   │   ├── test-engineer.md
│   │   ├── tracer.md
│   │   ├── verifier.md
│   │   └── writer.md
│   │
│   ├── agents-ruflo/                  # ✅ RuFlo agents (5 YAML + skills/)
│   │   ├── architect.yaml
│   │   ├── coder.yaml
│   │   ├── reviewer.yaml
│   │   ├── security-architect.yaml
│   │   ├── tester.yaml
│   │   ├── config.toml
│   │   ├── README.md
│   │   └── skills/                    # ✅ 136+ skill directories
│   │
│   ├── agents-claude-skills/          # Claude Skills agents
│   ├── agents-deer-flow/              # DeerFlow agents
│   ├── agents-superpowers/            # Superpowers workflow agents
│   └── background-agents/             # Open-Inspect background agents
│
├── 💡 skills/                         # AI SKILLS (17,884 files, 8,256 dirs)
│   ├── skills-ruflo/                  # RuFlo skills (136+ directories)
│   ├── skills-omc/                    # oh-my-claudecode skills
│   ├── skills-claude/                 # Claude Skills library (205+ skills)
│   ├── skills-antigravity/            # Antigravity skills (1,340+ skills)
│   ├── skills-superpowers/            # Superpowers workflow skills
│   ├── skills-awesome-claude/         # Awesome Claude Code skills
│   ├── skills-everything-cc/          # Everything Claude Code
│   ├── skills-copilot/                # GitHub Copilot skills
│   ├── skills-deer-flow/              # DeerFlow skills (15)
│   ├── skills-hermes/                 # Hermes self-learning skills
│   ├── skills-background/             # Background agents skills
│   ├── skills-business/               # Business & growth skills
│   ├── skills-seo/                    # SEO & marketing skills
│   ├── skills-research/               # Research skills
│   ├── skills-design/                 # Design skills
│   ├── skills-data-analysis/          # Data analysis skills
│   ├── skills-writing/                # Writing & content skills
│   ├── skills-devops/                 # DevOps skills
│   └── skills-platform/               # Platform-specific (Obsidian, etc.)
│
├── ⚡ commands/                       # SLASH COMMANDS (343 files, 53 dirs)
│   ├── commands-gsd/                  # GET SHIT DONE commands (57 commands)
│   ├── commands-omc/                  # oh-my-claudecode commands
│   ├── commands-ruflo/                # RuFlo commands
│   ├── commands-superpowers/          # Superpowers commands (3)
│   └── commands-shannon/              # Shannon security commands (4)
│
├── 🪝 hooks/                          # LIFECYCLE HOOKS (744 files, 100 dirs)
│   ├── hooks-gsd/                     # GET SHIT DONE hooks (5)
│   ├── hooks-omc/                     # oh-my-claudecode hooks
│   ├── hooks-ruflo/                   # RuFlo hooks (27)
│   ├── hooks-superpowers/             # Superpowers hooks
│   ├── hooks-1code/                   # 1Code hooks
│   └── hooks-background-agents/       # Background agents hooks
│
├── 🔌 mcp-servers/                    # MCP SERVERS (3,965 files, 1,351 dirs)
│   ├── mcp-gitnexus/                  # GitNexus codebase knowledge graph
│   ├── mcp-lightpanda/                # Lightpanda browser (9x faster)
│   ├── mcp-openviking/                # OpenViking context database
│   ├── mcp-nano-banana/               # Nano Banana Gemini image MCP
│   ├── mcp-pretext/                   # Pretext MCP server
│   ├── mcp-hermes/                    # Hermes MCP integration
│   └── mcp-configs/                   # MCP configuration files
│
├── 🧠 memory/                         # MEMORY SYSTEMS (823 files, 206 dirs)
│   ├── memory-claude-mem/             # Claude-Mem compression system
│   └── memory-supermemory/            # Supermemory (#1 on benchmarks)
│
├── 🎼 orchestration/                  # ORCHESTRATION (13,432 files, 1,596 dirs)
│   ├── core-ruflo/                    # RuFlo v3.5 (130+ skills, 27 hooks)
│   ├── core-omc/                      # oh-my-claudecode (19 agents)
│   ├── core-gsd/                      # GET SHIT DONE (meta-prompting)
│   ├── core-deer-flow/                # DeerFlow (full-stack harness)
│   ├── superpowers/                   # Superpowers workflow
│   ├── core-background-agents/        # Background agents system
│   ├── core-hermes/                   # Hermes self-learning
│   ├── core-1code/                    # 1Code system
│   ├── core-vibe-kanban/              # Vibe Kanban workflow
│   └── workflows-terraform/           # Terraform workflows
│
├── 💬 prompts/                        # PROMPTS (2,640 files, 298 dirs)
│   ├── prompts-system/                # System prompts by platform
│   │   ├── claude/
│   │   ├── cursor/
│   │   ├── copilot/
│   │   ├── chatgpt/
│   │   ├── devin/
│   │   ├── windsurf/
│   │   ├── lovable/
│   │   └── replit/
│   ├── prompts-templates/             # Prompt templates
│   ├── prompts-leaked/                # Leaked system prompts
│   └── prompts-security/              # Security-focused prompts
│
├── 🎨 ui-design/                      # UI/UX DESIGN (10,907 files, 561 dirs)
│   ├── ui-components-galaxy/          # Galaxy/Uiverse (3,000+ components)
│   ├── ui-components-shadcn/          # shadcn/ui components
│   ├── ui-rules/                      # UI UX Pro Max (161 rules + 67 styles)
│   └── ui-cursor-rules/               # Cursor-specific UI rules
│
├── 🔒 security/                       # SECURITY TOOLS (42 files, 12 dirs)
│   ├── security-shannon/              # Shannon pentester agent
│   └── security-reports/              # Security scan reports
│
├── 📚 reference/                      # REFERENCE DOCS (1 file, 3 dirs)
│   └── reference-selfhosted/          # Awesome Self-Hosted resources
│
└── ⚙️ workspace-config/               # IDE CONFIGS (231 files, 69 dirs)
    ├── claude/                        # Claude Code configuration
    ├── cursor/                        # Cursor editor configuration
    └── antigravity/                   # Antigravity plugin configuration
```

---

## 📊 CATEGORY STATISTICS

| Category | Directories | Files | Size (MB) | Description |
|----------|-------------|-------|-----------|-------------|
| **agents** | 434 | 1,128 | 15.2 | AI agents organized by role, interface, and source |
| **skills** | 8,256 | 17,884 | 311.5 | Skill packages from 19 different sources |
| **commands** | 53 | 343 | 1.9 | Slash commands for quick actions |
| **hooks** | 100 | 744 | 6.2 | Lifecycle event handlers |
| **prompts** | 298 | 2,640 | 145.6 | System prompts for all platforms |
| **memory** | 206 | 823 | 76.2 | Memory & context systems |
| **ui-design** | 561 | 10,907 | 84.2 | UI components and design rules |
| **mcp-servers** | 1,351 | 3,965 | 48.8 | MCP server implementations |
| **orchestration** | 1,596 | 13,432 | 284.4 | Multi-agent orchestration systems |
| **security** | 12 | 42 | 0.5 | Security scanning tools |
| **workspace-config** | 69 | 231 | 1.9 | IDE configuration files |
| **reference** | 3 | 1 | 0.02 | Reference documentation |
| **REPO_DOCS** | varies | varies | varies | Original repository documentation |

**TOTAL**: 13,160 directories, 52,386 files, ~976 MB

---

## 🎯 SPECIAL DIRECTORIES

### 1. agents/by-role/ ⭐
**Purpose**: Cross-repository agent aggregation by functional role  
**Organization**: 14 role categories  
**Total Agents**: 181 files  
**Sources**: All repositories combined

**Roles**:
- **architect** - Architecture & system design
- **business** - Business strategy & executives
- **coder** - Code implementation
- **debugger** - Debugging & troubleshooting
- **devops** - Operations & deployment
- **manager** - Coordination & orchestration
- **planner** - Planning & task breakdown
- **researcher** - Research & analysis
- **reviewer** - Code & plan review
- **scientist** - Scientific analysis
- **security** - Security scanning
- **tester** - Testing & QA
- **ui-specialist** - UI/UX design
- **writer** - Documentation

### 2. agents/by-interface/ ⭐
**Purpose**: Organization by AI coding platform  
**Organization**: 6 interface types  
**Sources**: Platform-specific agents

**Interfaces**:
- **agents-antigravity** - Antigravity plugin
- **agents-claude** - Claude Code
- **agents-codex** - OpenAI Codex
- **agents-copilot** - GitHub Copilot
- **agents-cursor** - Cursor editor
- **agents-opencode** - OpenCode

### 3. agents/agents-{source}/ ✅
**Purpose**: Preserve original agent collections  
**Status**: Restored after Phase 0  
**Key Collections**:
- **agents-gsd** - 8 specialized GSD agents
- **agents-omc** - 19 OMC agents
- **agents-ruflo** - 5 YAML agents + 136+ skills

---

## 🔍 NAMING CONVENTIONS

### PREFIX-SOURCE Pattern:
All second-level directories follow the pattern: `{category}-{source}`

**Examples**:
- `agents-ruflo` - RuFlo agents
- `skills-claude` - Claude Skills
- `commands-gsd` - GET SHIT DONE commands
- `hooks-omc` - oh-my-claudecode hooks
- `prompts-system` - System prompts
- `ui-components-galaxy` - Galaxy UI components

### Special Prefixes:
- **core-** - Unique orchestration systems (core-ruflo, core-omc)
- **by-** - Cross-repo aggregates (by-role, by-interface)
- **reference-** - Reference documentation
- **security-** - Security components
- **memory-** - Memory systems
- **mcp-** - MCP servers
- **workspace-** - Configuration files

---

## 📈 MIGRATION HISTORY

### Phase 0: Restoration (April 8, 2026)
- Restored agents-gsd/ (8 files)
- Restored agents-omc/ (19 files)
- Restored agents-ruflo/ (5 YAML + skills/)
- **Result**: Dual-location system (originals + organized)

### Phase 1: Initial Migration (April 3, 2026)
- Migrated 39,122 files from 31 repositories
- Created 10 top-level categories
- **Result**: Base structure established

### Phase 2: Categorization (April 8, 2026)
- Analyzed 181 agents by role
- Identified zero true duplicates
- **Result**: All agents complementary

### Phase 3: Leftover Processing (April 3, 2026)
- Processed 9,213 leftover files
- Moved 2,522 important files
- Skipped 6,691 build artifacts
- **Result**: All source directories clean

### Phase 4: Merge Analysis (April 8, 2026)
- Decision: No merging recommended
- **Result**: Preserve specialized capabilities

### Phase 5: Validation (April 8, 2026)
- Validated 52,386 files
- Confirmed zero data loss
- **Result**: 100% validation passed

### Phase 6: Integration (April 8, 2026)
- Documented 7-layer architecture
- Created usage guides
- **Result**: System operational

---

## 🎯 KEY FEATURES

### ✅ Data Integrity
- **Zero files lost** during migration
- **Original directories preserved**
- **Dual-location system** for agents
- **Source transparency** throughout

### ✅ Organization Quality
- **14 role categories** for agents
- **6 interface types** for platform-specific agents
- **19 skill domains** organized by source
- **5 orchestration systems** fully integrated

### ✅ Discovery & Navigation
- **Clear hierarchy** - Max 2-3 levels deep
- **Consistent naming** - PREFIX-SOURCE pattern
- **Source identification** - Know the origin
- **Comprehensive indexes** - Multiple navigation aids

### ✅ Scalability
- **Modular structure** - Add new sources easily
- **Consistent patterns** - Predictable organization
- **Documentation** - Every change tracked
- **Validation** - Automated checks available

---

## 📝 DOCUMENTATION FILES

### Phase Reports:
- `PHASE_1_SUMMARY.md` - Inventory summary
- `PHASE_1_INVENTORY.json` - Machine-readable inventory
- `PHASE_2_ANALYSIS.md` - Agent categorization
- `PHASE_3_VERIFICATION.md` - Leftover verification
- `PHASE_4_MERGE_RECOMMENDATIONS.md` - Merge decisions
- `PHASE_5_VALIDATION_AUDIT.md` - Validation results
- `PHASE_6_ORCHESTRATION_INTEGRATION.md` - Integration guide

### Tracking Files:
- `INDEX.md` - Repository inventory
- `INDEX_MOVEMENTS.json` - Movement tracking
- `MARSHUTIZATION.md` - Detailed movement log
- `RESTORATION_COMPLETE.md` - Restoration status

### Structure Documentation:
- `CURRENT_STRUCTURE_2026-04-08.md` - This document
- `RESTRUCTURE_NEW_STRUCTURE.md` - Previous structure doc
- `structure-8.md` - Historical structure

### Master Guides:
- `ALL_PHASES_COMPLETE.md` - Complete summary
- `EXECUTION_PLAN.md` - Execution strategy
- `MASTER_PLAN.md` - Original vision (Russian)

---

## 🚀 HOW TO USE

### Finding Agents:
1. **By Role**: Browse `agents/by-role/{role}/`
2. **By Platform**: Browse `agents/by-interface/agents-{platform}/`
3. **By Source**: Browse `agents/agents-{source}/`

### Finding Skills:
1. **By Source**: Browse `skills/skills-{source}/`
2. **By Domain**: Look for domain-specific collections (skills-seo, skills-design, etc.)

### Finding Prompts:
1. **System Prompts**: Browse `prompts/prompts-system/{platform}/`
2. **Templates**: Browse `prompts/prompts-templates/`
3. **Leaked Prompts**: Browse `prompts/prompts-leaked/`

### Finding UI Components:
1. **Galaxy Components**: Browse `ui-design/ui-components-galaxy/`
2. **shadcn Components**: Browse `ui-design/ui-components-shadcn/`
3. **Design Rules**: Browse `ui-design/ui-rules/`

### Configuring Your IDE:
1. **Claude Code**: Use `workspace-config/claude/`
2. **Cursor**: Use `workspace-config/cursor/`
3. **Antigravity**: Use `workspace-config/antigravity/`

---

## 📊 COMPARISON WITH PREVIOUS STRUCTURES

### vs. structure-8.md (April 7, 2026):
- ✅ Added: agents-gsd/, agents-omc/, agents-ruflo/ restoration
- ✅ Completed: All 6 phases documented
- ✅ Validated: 100% completeness verified
- ✅ Improved: Comprehensive statistics added

### vs. RESTRUCTURE_NEW_STRUCTURE.md (April 4, 2026):
- ✅ Updated: Current actual structure (not planned)
- ✅ Added: Detailed statistics and counts
- ✅ Enhanced: Complete category breakdown
- ✅ Verified: All directories confirmed present

---

## ✅ VALIDATION STATUS

**Last Validated**: April 8, 2026 03:57 UTC  
**Validation Method**: Phase 5 comprehensive audit  
**Status**: ✅ **ALL CHECKS PASSED**

**Confirmed**:
- ✅ All 31 repositories accounted for
- ✅ 52,386 files properly organized
- ✅ Zero data loss
- ✅ All categories present
- ✅ Marshutization complete
- ✅ Documentation comprehensive

---

## 🎉 PRODUCTION STATUS

**Status**: ✅ **PRODUCTION READY**

**Capabilities**:
- 1,000+ agents available
- 1,500+ skills ready
- 67+ commands operational
- 40+ hooks active
- 2,500+ prompts accessible
- 3,000+ UI components available
- 7+ MCP servers integrated
- 5 orchestration systems working
- 3 memory systems operational

**Ready for**:
- Individual development
- Team collaboration
- Enterprise deployment
- Contribution and expansion

---

**Document Created**: April 8, 2026 04:07 UTC  
**Document Type**: Current Structure Snapshot  
**Status**: Active - Reflects Production State  
**Next Update**: As needed after structural changes

---

*For detailed usage guides, see `PHASE_6_ORCHESTRATION_INTEGRATION.md`*  
*For complete phase history, see `ALL_PHASES_COMPLETE.md`*  
*For validation details, see `PHASE_5_VALIDATION_AUDIT.md`*
