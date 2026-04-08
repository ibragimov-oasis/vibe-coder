# COMPREHENSIVE EXECUTION PLAN
**Session**: 2026-04-08
**Status**: READY TO EXECUTE

---

## ✅ PHASE 0: RESTORATION - COMPLETE

**Status**: ✅ COMPLETED
**Time**: 2026-04-08 03:38-03:39 UTC

All moved files have been successfully restored to their original locations:
- ✅ agents-gsd/ (8 files)
- ✅ agents-omc/ (19 files)
- ✅ agents-ruflo/ (5 YAML files + skills directory)

Files now exist in DUAL locations:
- Original: agents-gsd/, agents-omc/, agents-ruflo/
- Organized: by-role/ subdirectories

**Golden Rule Restored**: No files deleted, originals preserved.

---

## 📋 REMAINING TASKS (From structure-8.md)

### TASK 1: Organize by-role Files into Specific Subdirectories

**Current State**: Files are in general by-role folders (planner/, coder/, etc.)

**Required Action**: Properly sort files within their role directories based on specific responsibilities.

**Example**:
- Currently: `by-role/planner/gsd-planner.md`, `by-role/planner/gsd-plan-checker.md`, `by-role/planner/gsd-roadmapper.md`
- May need: Subdirectories within planner/ if there are specialized planning roles

**Method**:
1. Scan each role directory
2. Identify if files need further categorization
3. Create subdirectories if needed (only folders, no copying/deleting)
4. Use `git mv` to move files within by-role structure

---

## 🎯 PHASE 1: COMPREHENSIVE COMBINED DIRECTORY SCAN

**Goal**: Understand what exists in all COMBINED directories

### Step 1.1: Scan All Top-Level Directories
- [ ] agents/
- [ ] skills/
- [ ] commands/
- [ ] hooks/
- [ ] prompts/
- [ ] memory/
- [ ] ui-design/
- [ ] mcp-servers/
- [ ] orchestration/
- [ ] security/
- [ ] workspace-config/
- [ ] reference/

### Step 1.2: Create Inventory Files
- [ ] Create `PHASE_1_INVENTORY.json` with structure:
  ```json
  {
    "directory": "agents/",
    "subdirectories": [...],
    "files": [...],
    "total_count": N,
    "categories": [...]
  }
  ```

### Step 1.3: Identify File Types and Categories
- [ ] Agent files (.md, .yaml, .agent.md)
- [ ] Skill files (SKILL.md, .skill.md, scripts/)
- [ ] Command files (.md in commands/)
- [ ] Hook files (.md, .sh in hooks/)
- [ ] Prompt files (.md, .txt, .prompt.md)
- [ ] Configuration files (.json, .toml, .yaml)
- [ ] UI components (.html, .css, .jsx, .tsx)
- [ ] Documentation (README.md, guides)

---

## 🔍 PHASE 2: CATEGORIZATION & DUPLICATE ANALYSIS

**Goal**: Understand relationships, identify duplicates, categorize by function

### Step 2.1: Agent Analysis
- [ ] Scan all agents/by-role/ subdirectories
- [ ] Identify agent roles: planner, coder, reviewer, tester, debugger, security, researcher, etc.
- [ ] Check for duplicates (same role, similar content)
- [ ] Identify complementary agents (same role, different approaches)
- [ ] Document: source system (GSD, OMC, Ruflo, Claude-Skills, etc.)

### Step 2.2: Skills Analysis
- [ ] Scan all skills/ subdirectories
- [ ] Categorize by domain (development, design, SEO, security, etc.)
- [ ] Check for duplicate skills
- [ ] Identify unique skills
- [ ] Map skill dependencies

### Step 2.3: Commands Analysis
- [ ] Scan commands/ directory
- [ ] Categorize by function (debug, review, plan, test, etc.)
- [ ] Check for duplicate commands
- [ ] Identify command dependencies

### Step 2.4: Create Analysis Documents
- [ ] `PHASE_2_AGENTS_ANALYSIS.md`
- [ ] `PHASE_2_SKILLS_ANALYSIS.md`
- [ ] `PHASE_2_COMMANDS_ANALYSIS.md`
- [ ] `PHASE_2_DUPLICATES_REPORT.md`

---

## 📦 PHASE 3: LEFTOVER FILES PROCESSING

**Goal**: Process any remaining files not yet categorized

**Note**: According to conversation context, Phase 3 was already completed on April 3, 2026. Need to verify current status.

### Step 3.1: Verify Phase 3 Status
- [ ] Read PHASE_3_COMPLETE.md
- [ ] Check if any new leftover files exist
- [ ] Scan for uncategorized files in COMBINED/

### Step 3.2: Process Any Remaining Leftovers
- [ ] Identify file type and purpose
- [ ] Determine correct category
- [ ] Move to appropriate location
- [ ] Update INDEX.md

---

## 🔗 PHASE 4: INTELLIGENT MERGING (Future)

**Goal**: Merge duplicate/complementary content into unified resources

**Approach**:
1. Read MASTER_PLAN.md principles on merging
2. For each category (agents, skills, commands):
   - Identify true duplicates (same content)
   - Identify complementary items (same role, different strengths)
   - Create merged versions preserving unique strengths
3. Example: "senior маркетолог" + "гений маркетолог" → "гений senior маркетолог"

**Method**: CREATE new merged files, PRESERVE originals

---

## ✅ PHASE 5: VALIDATION & AUDIT (Future)

**Goal**: Ensure nothing was lost, everything is in correct location

**Tasks**:
1. Cross-reference original repositories with COMBINED/
2. Verify all files accounted for
3. Check marshutization index completeness
4. Validate INDEX.md accuracy

---

## 🎼 PHASE 6: ORCHESTRATION INTEGRATION (Future)

**Goal**: Wire everything together for autonomous operation

**Vision from MASTER_PLAN.md**:
- Claude Code → COMBINED/workspace-config/claude/ → agents/by-role → skills → execution
- Shannon security checks → automated vulnerability scanning
- Browser integration → fast UI verification
- Memory systems → context persistence
- Full pipeline: request → role → skills → execution → verification → report

---

## 📊 MARSHUTIZATION INDEX

**Purpose**: Track ALL file movements and transformations

**Format**:
```json
{
  "timestamp": "2026-04-08T03:38:00Z",
  "action": "RESTORE",
  "source": "COMBINED/agents/by-role/planner/gsd-planner.md",
  "destination": "COMBINED/agents/agents-gsd/gsd-planner.md",
  "method": "cp",
  "status": "SUCCESS",
  "reason": "Restore original files after improper move"
}
```

**Files**:
- INDEX.md (human-readable)
- INDEX_MOVEMENTS.json (machine-readable)
- MARSHUTIZATION.md (detailed tracking)

---

## 🚀 IMMEDIATE NEXT STEPS

### STEP 1: Organize by-role Files
- Scan by-role/ subdirectories
- Identify if further organization needed
- Create subdirectories where appropriate
- Move files to proper locations using `git mv`

### STEP 2: Execute Phase 1 Analysis
- Scan all COMBINED/ directories
- Create comprehensive inventory
- Document structure
- Identify file types and categories

### STEP 3: Execute Phase 2 Categorization
- Analyze agents by role
- Analyze skills by domain
- Check for duplicates
- Create analysis documents

### STEP 4: Create Movement Log
- Document all file locations
- Track what was copied where
- Update marshutization index

---

## 🎯 SESSION RULES (CRITICAL)

**GOLDEN RULES FOR THIS SESSION**:

1. ❌ **NO DELETE** - Never delete any files
2. ❌ **NO COPY** - Files should be moved within COMBINED/, not copied
3. ❌ **NO RECREATE** - Don't recreate existing files
4. ✅ **CREATE FOLDERS** - Create new directories as needed
5. ✅ **MOVE FILES** - Use `git mv` to move files (within COMBINED/ structure)
6. ✅ **WRITE FILES** - Create new documentation/logs/analysis files

**Clarification on "COPY vs MOVE"**:
- **Restoration from by-role to originals**: COPY (cp) was correct
- **Organization within COMBINED/**: MOVE (git mv) is correct
- **Original repositories**: NEVER touch (read-only reference)
- **Originals within COMBINED/agents-xxx/**: PRESERVE (already restored)

---

## 📍 CURRENT STATUS

**Completed**:
- ✅ Phase 0: Restoration complete
- ✅ Original directories restored (agents-gsd, agents-omc, agents-ruflo)
- ✅ Files preserved in dual locations
- ✅ MASTER_PLAN.md read (lines 1-200)
- ✅ structure-8.md requirements understood

**In Progress**:
- 🔄 Understanding full scope of work
- 🔄 Creating comprehensive execution plan

**Not Started**:
- ⏳ Phase 1: COMBINED directory scan
- ⏳ Phase 2: Categorization & duplicate analysis
- ⏳ Phase 3: Leftover files verification
- ⏳ Organization of by-role files into subdirectories

---

## 📝 DOCUMENTATION TO CREATE

1. **PHASE_1_INVENTORY.json** - Complete directory structure inventory
2. **PHASE_1_SUMMARY.md** - Human-readable summary of what exists
3. **PHASE_2_AGENTS_ANALYSIS.md** - Agent categorization and analysis
4. **PHASE_2_SKILLS_ANALYSIS.md** - Skills categorization and analysis
5. **PHASE_2_DUPLICATES_REPORT.md** - Duplicate identification report
6. **INDEX_MOVEMENTS.json** - Machine-readable movement log
7. **MARSHUTIZATION.md** - Detailed marshutization tracking

---

**Plan Created**: 2026-04-08 03:40 UTC
**Ready for Execution**: YES
**Awaiting**: Proceed with STEP 1 (Organize by-role files)
