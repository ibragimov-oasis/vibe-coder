# 🎯 RESTRUCTURE EXECUTION PLAN: PREFIX-SOURCE MIGRATION

> **7-Phase Plan to Transform COMBINED/ Structure**
> Project: ULTRACAR Restructuring
> Created: April 4, 2026

---

## 📋 Executive Summary

**Objective:** Restructure COMBINED/ directory from nested hierarchy to PREFIX-SOURCE flat structure

**Approach:** In-place incremental restructuring (OPTION 1 - RECOMMENDED)

**Benefits:**
- ✅ Preserves git history
- ✅ Easier rollback (each phase is a commit)
- ✅ Safer (can validate at each step)
- ✅ No duplicate storage needed

**Timeline:** 18-25 hours across 7 phases

**Files Affected:** ~44,750 files in ~8,860 directories

---

## 🎯 PHASE 0: Preparation & Planning ✅

**Status:** COMPLETE
**Duration:** 1-2 hours
**Complexity:** Low
**Files Moved:** 0 (preparation only)

### ✅ Completed Tasks

- [x] Create detailed file mapping: current → new structure
- [x] Generate `RESTRUCTURE_NEW_STRUCTURE.md` with target structure
- [x] Generate `RESTRUCTURE_PLAN.md` (this file) with execution plan
- [x] Create `RESTRUCTURE_MOVEMENTS.json` tracking file
- [x] Take git snapshot (current state committed)
- [x] Verify current branch: `claude/update-combined-file-structure-again`

### 📊 Baseline Statistics

- **Total Files:** 44,748
- **Total Directories:** 8,863
- **Current Branch:** `claude/update-combined-file-structure-again`
- **Last Commit:** Updated README.md (April 4, 2026)

### 📝 Output

1. **RESTRUCTURE_NEW_STRUCTURE.md** - Complete target structure documentation
2. **RESTRUCTURE_PLAN.md** - This execution plan
3. **RESTRUCTURE_MOVEMENTS.json** - File movement tracking
4. **Git Snapshot** - Clean baseline for rollback

---

## 📦 PHASE 1: Restructure Agents Directory

**Status:** PENDING
**Duration:** 3-4 hours
**Complexity:** Medium
**Estimated Files:** ~500

### 🎯 Goals

1. Keep `agents/by-role/` as-is (already correct structure)
2. Flatten `agents/by-interface/` with PREFIX-SOURCE naming
3. Consolidate orchestration system agents into `agents/agents-{source}/`

### 📋 Detailed Steps

#### 1.1 Keep Existing Structures (No Changes)
```bash
agents/by-role/           # ✅ KEEP AS-IS
  ├── architect/
  ├── coder/
  ├── debugger/
  ├── planner/
  ├── reviewer/
  ├── security/
  ├── tester/
  ├── researcher/
  ├── ui-specialist/
  ├── writer/
  ├── manager/
  ├── scientist/
  ├── devops/
  └── business/
```

#### 1.2 Flatten agents/by-interface/
```bash
# CURRENT STRUCTURE
agents/by-interface/
  ├── antigravity/_agents/
  ├── claude/ruflo/
  ├── claude/shannon/
  ├── claude/superpowers/
  ├── claude/claude-skills/
  ├── codex/superpowers-codex/
  ├── copilot/awesome-copilot/
  ├── copilot/cookbook/
  ├── cursor/superpowers-cursor/
  └── opencode/superpowers-opencode/

# NEW STRUCTURE
agents/by-interface/
  ├── agents-claude/        # Merge all Claude sources
  ├── agents-copilot/       # Merge all Copilot sources
  ├── agents-cursor/        # Merge all Cursor sources
  ├── agents-antigravity/   # From antigravity/_agents/
  ├── agents-codex/         # From codex/superpowers-codex/
  └── agents-opencode/      # From opencode/superpowers-opencode/
```

**Movement Operations:**
```bash
mv agents/by-interface/antigravity/_agents/* agents/by-interface/agents-antigravity/
mv agents/by-interface/claude/* agents/by-interface/agents-claude/
mv agents/by-interface/copilot/* agents/by-interface/agents-copilot/
mv agents/by-interface/cursor/superpowers-cursor/* agents/by-interface/agents-cursor/
mv agents/by-interface/codex/superpowers-codex/* agents/by-interface/agents-codex/
mv agents/by-interface/opencode/superpowers-opencode/* agents/by-interface/agents-opencode/
```

#### 1.3 Move Orchestration System Agents
```bash
# RuFlo agents
orchestration/ruflo/agents/ → agents/agents-ruflo/

# oh-my-claudecode agents (19 agents)
orchestration/oh-my-claudecode/agents/ → agents/agents-omc/

# get-shit-done agents (18 agents)
orchestration/get-shit-done/agents/ → agents/agents-gsd/

# Superpowers agents
orchestration/superpowers/agents/ → agents/agents-superpowers/

# DeerFlow agents
orchestration/deer-flow/*/agents/ → agents/agents-deer-flow/

# Background agents
orchestration/workflows/background-agents/*/agents/ → agents/agents-background/

# Hermes agents
orchestration/workflows/hermes/*/agents/ → agents/agents-hermes/

# Shannon pentester
# (Already in agents/by-interface/claude/shannon/ - will be in agents-claude)
```

### ✅ Validation Checklist

- [ ] Count files before restructure
- [ ] Execute all move operations
- [ ] Count files after restructure
- [ ] Verify counts match
- [ ] Check no broken symlinks
- [ ] Verify structure matches `RESTRUCTURE_NEW_STRUCTURE.md`
- [ ] Update `RESTRUCTURE_MOVEMENTS.json`
- [ ] Remove empty directories

### 📝 Commit Message
```
Phase 1: Restructure agents directory with PREFIX-SOURCE naming

- Kept agents/by-role/ structure intact (cross-repo aggregate)
- Flattened agents/by-interface/ with PREFIX-SOURCE naming
- Consolidated orchestration agents: agents-ruflo, agents-omc, agents-gsd, etc.
- Moved [X] files across [Y] operations
- No files lost, structure validated

Part of ULTRACAR restructuring project.
```

---

## 🛠️ PHASE 2: Restructure Skills Directory

**Status:** PENDING
**Duration:** 4-5 hours
**Complexity:** High (1,500+ skills)
**Estimated Files:** ~2,000

### 🎯 Goals

1. Flatten `skills/development/` into `skills/skills-{source}/`
2. Consolidate domain skills (seo, research, design, etc.)
3. Extract skills from orchestration systems

### 📋 Detailed Steps

#### 2.1 Flatten Development Skills
```bash
# CURRENT STRUCTURE
skills/development/
  ├── antigravity/           # 1,340+ skills
  ├── claude-skills/         # 205 skills
  ├── superpowers/          # 14 skills
  ├── deer-flow/            # 15 skills
  ├── hermes/
  ├── awesome-*/
  └── everything-*/

# NEW STRUCTURE
skills/
  ├── skills-antigravity/    # 1,340+ skills
  ├── skills-claude/         # 205 skills
  ├── skills-superpowers/    # 14 skills
  ├── skills-deer-flow/      # 15 skills
  ├── skills-hermes/
  ├── skills-awesome-claude/
  └── skills-everything-cc/
```

**Movement Operations:**
```bash
mv skills/development/antigravity skills/skills-antigravity
mv skills/development/claude-skills skills/skills-claude
mv skills/development/superpowers skills/skills-superpowers
mv skills/development/deer-flow skills/skills-deer-flow
mv skills/development/hermes skills/skills-hermes
mv skills/development/awesome-* skills/skills-awesome-claude
mv skills/development/everything-* skills/skills-everything-cc
```

#### 2.2 Consolidate Domain Skills
```bash
# Current domain skills
skills/seo/          → skills/skills-seo/
skills/research/     → skills/skills-research/
skills/design/       → skills/skills-design/
skills/data-analysis/ → skills/skills-data-analysis/
skills/writing/      → skills/skills-writing/
skills/devops/       → skills/skills-devops/
skills/platform/     → skills/skills-platform/
skills/business/     → skills/skills-business/
skills/copilot/      → skills/skills-copilot/
```

#### 2.3 Extract Orchestration Skills
```bash
# Extract skills from orchestration systems
orchestration/ruflo/skills/ → skills/skills-ruflo/
orchestration/oh-my-claudecode/skills/ → skills/skills-omc/
orchestration/get-shit-done/skills/ → skills/skills-gsd/
```

#### 2.4 Cleanup
```bash
# Remove empty development folder
rmdir skills/development/
```

### ✅ Validation Checklist

- [ ] Count skills before restructure (should be ~1,500+)
- [ ] Execute all move operations
- [ ] Count skills after restructure
- [ ] Verify all SKILL.md files intact
- [ ] Check for duplicate skills
- [ ] Verify structure matches plan
- [ ] Update tracking JSON
- [ ] Remove empty directories

### 📝 Commit Message
```
Phase 2: Restructure skills directory with PREFIX-SOURCE naming

- Flattened skills/development/ → skills/skills-{source}/
- Consolidated domain skills with PREFIX-SOURCE naming
- Extracted skills from orchestration systems
- Moved [X] skills across [Y] operations
- All SKILL.md files validated

Part of ULTRACAR restructuring project.
```

---

## ⚡ PHASE 3: Restructure Commands & Hooks

**Status:** PENDING
**Duration:** 2-3 hours
**Complexity:** Low
**Estimated Files:** ~100

### 🎯 Goals

1. Flatten commands/ with PREFIX-SOURCE naming
2. Flatten hooks/ with PREFIX-SOURCE naming
3. Extract commands/hooks from orchestration systems

### 📋 Detailed Steps - Commands

#### 3.1 Restructure Commands
```bash
# CURRENT STRUCTURE
commands/
  ├── general/gsd/          # 57 commands!
  ├── plan/superpowers-*/
  ├── review/shannon-*/
  └── debug/shannon-*/

# NEW STRUCTURE
commands/
  ├── commands-gsd/         # 57 commands from GSD
  ├── commands-superpowers/ # Superpowers commands
  ├── commands-shannon/     # Shannon commands
  ├── commands-omc/         # OMC commands (if any)
  └── commands-general/     # Shared commands
```

**Movement Operations:**
```bash
mv commands/general/gsd commands/commands-gsd
mv commands/plan/superpowers-* commands/commands-superpowers/
mv commands/review/shannon-* commands/commands-shannon/
mv commands/debug/shannon-* commands/commands-shannon/
# Extract from orchestration systems
mv orchestration/oh-my-claudecode/commands commands/commands-omc
```

### 📋 Detailed Steps - Hooks

#### 3.2 Restructure Hooks
```bash
# CURRENT STRUCTURE
hooks/
  ├── notification/gsd/         # 5 hooks
  ├── notification/superpowers/ # 4 hooks
  ├── notification/background-agents/
  └── pre-commit/
      ├── ruflo/
      └── background-agents-husky/

# NEW STRUCTURE
hooks/
  ├── hooks-gsd/                # 5 GSD hooks
  ├── hooks-superpowers/        # 4 Superpowers hooks
  ├── hooks-ruflo/              # RuFlo hooks
  ├── hooks-background-agents/  # Background agents hooks
  └── hooks-omc/                # OMC hooks (if any)
```

**Movement Operations:**
```bash
mv hooks/notification/gsd hooks/hooks-gsd
mv hooks/notification/superpowers hooks/hooks-superpowers
mv hooks/pre-commit/ruflo hooks/hooks-ruflo
mv hooks/pre-commit/background-agents-husky hooks/hooks-background-agents
mv hooks/notification/background-agents/* hooks/hooks-background-agents/
# Extract from orchestration
mv orchestration/oh-my-claudecode/hooks hooks/hooks-omc
```

### ✅ Validation Checklist

- [ ] Count commands before restructure
- [ ] Count hooks before restructure
- [ ] Execute all move operations
- [ ] Count commands after restructure
- [ ] Count hooks after restructure
- [ ] Verify all .md files intact
- [ ] Check for broken links
- [ ] Update tracking JSON
- [ ] Remove empty directories

### 📝 Commit Message
```
Phase 3: Restructure commands and hooks with PREFIX-SOURCE naming

- Flattened commands/ with PREFIX-SOURCE naming
- Flattened hooks/ with PREFIX-SOURCE naming
- Extracted commands/hooks from orchestration systems
- Moved [X] files across [Y] operations

Part of ULTRACAR restructuring project.
```

---

## 🎨 PHASE 4: Restructure Orchestration Core

**Status:** PENDING
**Duration:** 3-4 hours
**Complexity:** Medium
**Estimated Files:** ~1,500

### 🎯 Goals

1. Transform orchestration/ into core-* prefixed structure
2. Keep only unique system components (not agents/skills/commands/hooks)
3. Create workflows-terraform/ for IaC

### 📋 Detailed Steps

#### 4.1 Create core-ruflo/
```bash
# KEEP from orchestration/ruflo/:
# - plugin/
# - v2/
# - v3/
# - bin/
# - scripts/
# - tests/
# - claude/, claude-plugin/, github/
# - ruflo/ (core module)

# ALREADY MOVED in previous phases:
# - agents/ → agents/agents-ruflo/
# - skills/ → skills/skills-ruflo/
# - hooks/ → hooks/hooks-ruflo/

mv orchestration/ruflo orchestration/core-ruflo
# (agents, skills, hooks already moved)
```

#### 4.2 Create core-omc/
```bash
# KEEP from orchestration/oh-my-claudecode/:
# - bridge/
# - src/
# - templates/
# - benchmarks/
# - tests/
# - dist/
# - examples/
# - research/
# - scripts/

mv orchestration/oh-my-claudecode orchestration/core-omc
```

#### 4.3 Create core-gsd/
```bash
# KEEP from orchestration/get-shit-done/:
# - sdk/
# - bin/
# - tests/
# - docs/
# - get-shit-done/ (core module)
# - scripts/

mv orchestration/get-shit-done orchestration/core-gsd
```

#### 4.4 Create core-deer-flow/
```bash
# KEEP from orchestration/deer-flow/:
# - backend/
# - frontend/
# - docker/
# - scripts/
# - docs/
# - claude-integration/

mv orchestration/deer-flow orchestration/core-deer-flow
```

#### 4.5 Create core-hermes/
```bash
# KEEP from orchestration/workflows/hermes/:
# - cli/
# - gateway/
# - tools/
# - agent/ (core agent)

mv orchestration/workflows/hermes orchestration/core-hermes
```

#### 4.6 Create core-background-agents/
```bash
# KEEP from orchestration/workflows/background-agents/:
# - packages/ (control-plane, bots, runtime)
# - docs/
# - scripts/

mv orchestration/workflows/background-agents orchestration/core-background-agents
```

#### 4.7 Create core-1code/
```bash
mv orchestration/1code orchestration/core-1code
```

#### 4.8 Create core-vibe-kanban/
```bash
mv orchestration/vibe-kanban orchestration/core-vibe-kanban
```

#### 4.9 Create workflows-terraform/
```bash
mv orchestration/workflows/terraform orchestration/workflows-terraform
```

#### 4.10 Cleanup
```bash
# Remove empty workflows folder
rmdir orchestration/workflows/
```

### ✅ Validation Checklist

- [ ] Count files in each core-* before/after
- [ ] Execute all move operations
- [ ] Verify no agents/skills/commands/hooks remain (already moved)
- [ ] Check all core systems have essential files
- [ ] Verify structure matches plan
- [ ] Update tracking JSON
- [ ] Remove empty directories

### 📝 Commit Message
```
Phase 4: Restructure orchestration with core-* prefixes

- Created core-ruflo, core-omc, core-gsd, core-deer-flow
- Created core-hermes, core-background-agents
- Created core-1code, core-vibe-kanban
- Created workflows-terraform for IaC
- Moved [X] files across [Y] operations
- Removed empty orchestration/workflows/

Part of ULTRACAR restructuring project.
```

---

## 💬 PHASE 5: Restructure Prompts, Memory, MCP

**Status:** PENDING
**Duration:** 2-3 hours
**Complexity:** Medium
**Estimated Files:** ~3,000

### 🎯 Goals

1. Flatten prompts/ with prompts-* prefixes
2. Add memory-* prefixes to memory/
3. Add mcp-* prefixes to mcp-servers/

### 📋 Detailed Steps - Prompts

#### 5.1 Restructure Prompts
```bash
# CURRENT STRUCTURE
prompts/
  ├── system-prompts/    # 30+ AI tools
  ├── templates/
  ├── leaked/
  └── security/security-shannon/

# NEW STRUCTURE
prompts/
  ├── prompts-system/     # Merged system prompts
  │   ├── claude/
  │   ├── cursor/
  │   ├── copilot/
  │   └── [30+ tools]/
  ├── prompts-templates/  # All templates
  ├── prompts-leaked/     # Leaked prompts
  └── prompts-security/   # Shannon security prompts
```

**Movement Operations:**
```bash
mv prompts/system-prompts prompts/prompts-system
mv prompts/templates prompts/prompts-templates
mv prompts/leaked prompts/prompts-leaked
mv prompts/security/shannon prompts/prompts-security
rmdir prompts/security
```

### 📋 Detailed Steps - Memory

#### 5.2 Restructure Memory
```bash
# CURRENT STRUCTURE
memory/
  ├── claude-mem/
  ├── supermemory/
  └── (openviking in mcp-servers)

# NEW STRUCTURE
memory/
  ├── memory-claude-mem/
  ├── memory-supermemory/
  ├── memory-openviking/    # if exists
  └── memory-configs/       # new folder for configs
```

**Movement Operations:**
```bash
mv memory/claude-mem memory/memory-claude-mem
mv memory/supermemory memory/memory-supermemory
# If openviking exists in mcp-servers, copy to memory
mkdir memory/memory-configs
```

### 📋 Detailed Steps - MCP Servers

#### 5.3 Restructure MCP Servers
```bash
# CURRENT STRUCTURE
mcp-servers/
  ├── gitnexus/
  ├── lightpanda/
  ├── nano-banana/
  └── openviking/

# NEW STRUCTURE
mcp-servers/
  ├── mcp-gitnexus/
  ├── mcp-lightpanda/
  ├── mcp-hermes/
  ├── mcp-nano-banana/
  ├── mcp-openviking/
  ├── mcp-pretext/
  └── mcp-configs/          # new folder for configs
```

**Movement Operations:**
```bash
mv mcp-servers/gitnexus mcp-servers/mcp-gitnexus
mv mcp-servers/lightpanda mcp-servers/mcp-lightpanda
mv mcp-servers/nano-banana mcp-servers/mcp-nano-banana
mv mcp-servers/openviking mcp-servers/mcp-openviking
# Extract from orchestration if needed
mkdir mcp-servers/mcp-configs
```

### ✅ Validation Checklist

- [ ] Count prompts before/after
- [ ] Count memory systems before/after
- [ ] Count MCP servers before/after
- [ ] Execute all move operations
- [ ] Verify all files intact
- [ ] Check for broken links
- [ ] Update tracking JSON
- [ ] Remove empty directories

### 📝 Commit Message
```
Phase 5: Restructure prompts, memory, and mcp-servers

- Flattened prompts/ with prompts-* prefixes
- Added memory-* prefixes to memory systems
- Added mcp-* prefixes to MCP servers
- Created config folders for memory and MCP
- Moved [X] files across [Y] operations

Part of ULTRACAR restructuring project.
```

---

## 🎨 PHASE 6: Restructure UI & Security

**Status:** PENDING
**Duration:** 1-2 hours
**Complexity:** Low
**Estimated Files:** ~3,500

### 🎯 Goals

1. Flatten ui-design/ with ui-* prefixes
2. Add security-* prefixes to security/
3. Add reference-* prefix to reference/

### 📋 Detailed Steps - UI Design

#### 6.1 Restructure UI Design
```bash
# CURRENT STRUCTURE
ui-design/
  ├── components/
  │   ├── galaxy/      # 3,000+ components
  │   └── shadcn/
  ├── rules/
  └── cursor-rules/

# NEW STRUCTURE
ui-design/
  ├── ui-components-galaxy/   # 3,000+ components
  ├── ui-components-shadcn/
  ├── ui-rules/
  └── ui-cursor-rules/
```

**Movement Operations:**
```bash
mv ui-design/components/galaxy ui-design/ui-components-galaxy
mv ui-design/components/shadcn ui-design/ui-components-shadcn
mv ui-design/rules ui-design/ui-rules
mv ui-design/cursor-rules ui-design/ui-cursor-rules
rmdir ui-design/components
```

### 📋 Detailed Steps - Security

#### 6.2 Restructure Security
```bash
# CURRENT STRUCTURE
security/
  ├── shannon/
  └── reports/

# NEW STRUCTURE
security/
  ├── security-shannon/
  └── security-reports/
```

**Movement Operations:**
```bash
mv security/shannon security/security-shannon
mv security/reports security/security-reports
```

### 📋 Detailed Steps - Reference

#### 6.3 Restructure Reference
```bash
# CURRENT STRUCTURE
reference/
  └── awesome-selfhosted/

# NEW STRUCTURE
reference/
  └── reference-selfhosted/
```

**Movement Operations:**
```bash
mv reference/awesome-selfhosted reference/reference-selfhosted
```

### ✅ Validation Checklist

- [ ] Count UI components before/after (should be 3,000+)
- [ ] Count security files before/after
- [ ] Count reference files before/after
- [ ] Execute all move operations
- [ ] Verify all files intact
- [ ] Update tracking JSON
- [ ] Remove empty directories

### 📝 Commit Message
```
Phase 6: Restructure ui-design, security, and reference

- Flattened ui-design/ with ui-* prefixes
- Added security-* prefixes to security/
- Added reference-* prefix to reference/
- Moved [X] files across [Y] operations

Part of ULTRACAR restructuring project.
```

---

## 📝 PHASE 7: Update Documentation & Validation

**Status:** PENDING
**Duration:** 2 hours
**Complexity:** Low
**Estimated Files:** ~50

### 🎯 Goals

1. Update all documentation files
2. Validate complete restructure
3. Create completion report
4. Update path references

### 📋 Detailed Steps

#### 7.1 Update Documentation Files
```bash
# Files to update:
- COMBINED/README.md            # Update structure section
- COMBINED/INDEX.md             # Update all paths
- COMBINED/agents/INDEX.md      # Update agent paths
- COMBINED/skills/INDEX.md      # Update skill paths
- COMBINED/commands/INDEX.md    # Update command paths (if exists)
```

#### 7.2 Create Completion Report
```bash
# Create RESTRUCTURE_COMPLETE.md with:
- Summary of all 7 phases
- Before/after statistics
- File count validation
- Directory count validation
- Any issues encountered
- Next steps
```

#### 7.3 Validation Tasks
- [ ] Count total files (should be ~44,750)
- [ ] Count total directories (should be ~8,860 or less due to flattening)
- [ ] Verify no files lost
- [ ] Check for broken symlinks
- [ ] Validate structure matches `RESTRUCTURE_NEW_STRUCTURE.md`
- [ ] Test sample workflows (find agents, skills, commands)
- [ ] Verify git history intact

#### 7.4 Path Reference Updates
```bash
# Update any internal path references in:
- .claude/CLAUDE.md
- .github/copilot-instructions.md
- README.md (root)
- MASTER_PLAN.md
- Any scripts that reference paths
```

### ✅ Validation Checklist

- [ ] All documentation updated
- [ ] RESTRUCTURE_COMPLETE.md created
- [ ] File count matches baseline
- [ ] Directory structure validated
- [ ] Sample workflows tested
- [ ] Git history intact
- [ ] No broken links or references

### 📝 Commit Message
```
Phase 7: Update documentation for new PREFIX-SOURCE structure

- Updated COMBINED/README.md with new structure
- Updated COMBINED/INDEX.md with new paths
- Created RESTRUCTURE_COMPLETE.md report
- Updated all internal path references
- Validated complete restructure
- [X] files in final structure

ULTRACAR restructuring complete! 🎉
```

---

## 📊 Summary Table

| Phase | Duration | Complexity | Files | Status |
|-------|----------|------------|-------|--------|
| **0. Planning** | 1-2h | Low | 0 | ✅ COMPLETE |
| **1. Agents** | 3-4h | Medium | ~500 | ⏳ PENDING |
| **2. Skills** | 4-5h | High | ~2,000 | ⏳ PENDING |
| **3. Commands/Hooks** | 2-3h | Low | ~100 | ⏳ PENDING |
| **4. Orchestration** | 3-4h | Medium | ~1,500 | ⏳ PENDING |
| **5. Prompts/Memory/MCP** | 2-3h | Medium | ~3,000 | ⏳ PENDING |
| **6. UI/Security** | 1-2h | Low | ~3,500 | ⏳ PENDING |
| **7. Documentation** | 2h | Low | ~50 | ⏳ PENDING |
| **TOTAL** | **18-25h** | **Medium** | **~10,650** | **7% Complete** |

---

## 🚀 Execution Strategy

### Sequential Execution (Recommended)
Execute one phase at a time, with validation and commit after each:

1. **Phase 0** ✅ Complete
2. **Phase 1** → Validate → Commit → Proceed
3. **Phase 2** → Validate → Commit → Proceed
4. **Phase 3** → Validate → Commit → Proceed
5. **Phase 4** → Validate → Commit → Proceed
6. **Phase 5** → Validate → Commit → Proceed
7. **Phase 6** → Validate → Commit → Proceed
8. **Phase 7** → Validate → Commit → DONE

### Rollback Strategy
Each phase has its own commit. If issues arise:
```bash
# Rollback to previous phase
git log --oneline | grep "Phase"
git reset --hard <commit-hash>
```

### Parallel Execution (Not Recommended)
Phases have dependencies - must be sequential.

---

## ✅ Success Criteria

- [ ] All 44,750 files accounted for
- [ ] Structure matches `RESTRUCTURE_NEW_STRUCTURE.md` exactly
- [ ] No files lost or duplicated
- [ ] All documentation updated
- [ ] Git history preserved
- [ ] All 7 phases committed
- [ ] Validation tests pass
- [ ] Sample workflows work

---

## 📞 Support & Next Steps

**After Phase 0 (Planning):**
- User approval to proceed with Phase 1
- Create new branch if needed
- Begin Phase 1 execution

**Questions Before Starting:**
1. Should we create a new branch `restructure-prefix-source`?
2. Any modifications to the plan needed?
3. Ready to proceed with Phase 1?

---

**Project:** ULTRACAR Restructuring
**Plan Version:** 1.0
**Status:** Phase 0 Complete, Ready for Phase 1
**Last Updated:** April 4, 2026
**Next Action:** Await user approval, then execute Phase 1
