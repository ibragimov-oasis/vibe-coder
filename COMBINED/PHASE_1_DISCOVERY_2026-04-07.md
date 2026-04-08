# Phase 1: Discovery & Understanding
## Started: 2026-04-07T15:52:00Z

---

## Overview

This document contains the complete Phase 1 discovery analysis of the COMBINED directory structure following the initial movements documented in MOVEMENT_LOG_2026-04-07.md.

---

## Top-Level Directory Structure

### Current Top-Level Directories (13 total):

1. **agents/** - AI agent definitions organized by role and interface
2. **commands/** - Slash commands that invoke agents/workflows
3. **hooks/** - Lifecycle hooks (pre-commit, post-commit, etc.)
4. **mcp-servers/** - Model Context Protocol server integrations
5. **memory/** - Memory systems (claude-mem, supermemory, etc.)
6. **orchestration/** - Multi-agent orchestration systems
7. **prompts/** - System prompts, templates, and leaked prompts
8. **reference/** - Reference documentation
9. **security/** - Security tools and Shannon pentester
10. **skills/** - Reusable skill packages
11. **ui-design/** - UI components, rules, and styles
12. **workspace-config/** - IDE configuration files
13. **REPO_DOCS/** - Documentation from original repositories

---

## Detailed Directory Analysis

### 1. agents/ Directory

**Purpose**: Contains all AI agent definitions

#### Current Structure:
```
agents/
├── agents-claude-skills/       # Claude-specific agents (needs organization)
├── agents-deer-flow/           # DeerFlow orchestration agents
├── agents-gsd/                 # Get Shit Done agents (now empty after moves)
├── agents-omc/                 # OMC agents (now empty after moves)
├── agents-ruflo/               # Ruflo agents (mostly empty, config remains)
├── agents-superpowers/         # Superpowers workflow agents
├── background-agents/          # Background/async agents
├── by-interface/               # Organized by AI platform
│   ├── agents-antigravity/
│   ├── agents-claude/
│   ├── agents-codex/
│   ├── agents-copilot/
│   ├── agents-cursor/
│   └── agents-opencode/
└── by-role/                    # Organized by agent role (NEW - populated)
    ├── architect/              # 2 files (OMC md + Ruflo yaml)
    ├── business/               # Existing structure
    ├── coder/                  # 4 files (GSD, OMC, Ruflo)
    ├── debugger/               # 2 files (OMC)
    ├── devops/                 # 1 file (OMC)
    ├── manager/                # Existing structure
    ├── planner/                # 4 files (GSD + OMC)
    ├── researcher/             # 5 files (GSD + OMC)
    ├── reviewer/               # 5 files (GSD, OMC, Ruflo)
    ├── scientist/              # 1 file (OMC)
    ├── security/               # 2 files (OMC + Ruflo)
    ├── tester/                 # 3 files (OMC + Ruflo)
    ├── ui-specialist/          # 1 file (OMC)
    └── writer/                 # 2 files (OMC)
```

#### Issues Identified:

1. **Empty Source Directories**:
   - `agents-gsd/` is now empty
   - `agents-omc/` is now empty
   - Should these be removed or kept for reference?

2. **Mixed Formats in by-role**:
   - Some roles have .md files (Markdown agent definitions)
   - Some have .yaml files (YAML configuration)
   - Need consistency or clear documentation

3. **Duplication Potential**:
   - Multiple planners from different sources (GSD, OMC)
   - Multiple reviewers from different sources
   - Need to analyze if they're truly different or should be merged

4. **Unclear Organization in Source-Specific Folders**:
   - `agents-claude-skills/` has nested `agents/` subdirectory
   - `agents-deer-flow/` has nested `agents/` subdirectory
   - Should contents be flattened or moved to by-role?

5. **Security Folder Duplication**:
   - `agents/by-role/security/` exists
   - Top-level `security/` directory also exists
   - Question: Should Shannon be in by-role/security or separate?

---

### 2. skills/ Directory

**Purpose**: Reusable skill packages with domain expertise

#### Current Structure:
```
skills/
├── skills-antigravity/         # 1,326+ Antigravity skills
├── skills-claude/              # Claude Skills library (205+ skills)
├── skills-copilot/             # Copilot-specific skills
├── skills-data-analysis/       # Data analysis skills
├── skills-devops/              # DevOps skills
├── skills-platform/            # Platform/infrastructure skills
├── skills-research/            # Research methodologies
├── skills-ruflo/               # 136+ Ruflo skills (NEWLY MOVED)
├── skills-seo/                 # SEO skills
├── skills-writing/             # Writing/documentation skills
└── [other domain categories]
```

#### Issues Identified:

1. **Massive Scale**:
   - skills-antigravity alone has 1,300+ skill directories
   - Need indexing and categorization
   - Search/discovery will be challenging

2. **Overlap Detection Needed**:
   - Multiple sources may have similar skills
   - Example: DevOps skills might exist in antigravity, ruflo, and skills-devops
   - Need automated similarity detection

3. **Format Consistency**:
   - All should have SKILL.md with proper frontmatter
   - Need to validate this across all skills

4. **Skills vs Agents Confusion**:
   - Some items in skills look like agents
   - Need clear distinction: Skills = capabilities, Agents = personas

---

### 3. commands/ Directory

**Purpose**: Slash commands that invoke agents or workflows

#### Questions to Answer:
- How many command files exist?
- What's the naming convention?
- Do commands reference agents by old paths (need updates)?
- Are commands organized by category or flat?

#### Action Items:
- Complete scan of command structure
- Map command → agent relationships
- Identify broken references after movements

---

### 4. hooks/ Directory

**Purpose**: Lifecycle hooks for automated workflows

#### Questions to Answer:
- What types of hooks exist? (pre-commit, post-tool-use, etc.)
- Do any hooks reference moved agents?
- Are hooks properly categorized?

---

### 5. prompts/ Directory

**Purpose**: System prompts for different AI platforms

#### Current Known Structure:
```
prompts/
├── prompts-system/            # System prompts by platform
│   ├── claude/
│   ├── copilot/
│   ├── cursor/
│   ├── chatgpt/
│   ├── devin/
│   ├── windsurf/
│   ├── lovable/
│   ├── replit/
│   └── [others]
├── prompts-templates/         # Reusable prompt templates
├── prompts-leaked/            # Leaked/reverse-engineered prompts
└── prompts-security/          # Security-focused prompts
```

#### Questions:
- Are all prompts properly categorized?
- Any duplicates across categories?
- Do prompts reference old agent paths?

---

### 6. memory/ Directory

**Purpose**: Memory system implementations

#### Known Contents:
- claude-mem/ - Memory compression system
- supermemory/ - State-of-the-art context engine
- openviking/ - ByteDance context database
- configs/ - Memory configuration files

#### Distinction from Agent Memory:
- This directory = Memory SYSTEMS (infrastructure)
- Agent memory skills = Skills for USING memory systems
- Should remain separate but needs clear documentation

---

### 7. mcp-servers/ Directory

**Purpose**: Model Context Protocol server integrations

#### Known Contents:
- nano-banana/ - Gemini image MCP
- openviking/ - ByteDance context DB MCP
- gitnexus/ - Codebase knowledge graph MCP
- lightpanda/ - Fast browser MCP
- configs/ - MCP configuration files

#### Status:
- Appears well-organized
- Need to verify all MCP servers are documented
- Check for integration guides

---

### 8. orchestration/ Directory

**Purpose**: Multi-agent orchestration systems

#### Expected Structure:
```
orchestration/
├── core-ruflo/               # RuFlo v3.5 system
├── core-omc/                 # oh-my-claudecode system
├── core-gsd/                 # Get Shit Done system
├── core-deer-flow/           # DeerFlow system
├── core-background-agents/   # Background agents system
├── core-hermes/              # Hermes agent system
├── core-1code/               # 1Code system
├── core-vibe-kanban/         # Vibe Kanban system
└── workflows-terraform/      # Terraform workflows
```

#### Questions:
- Are all orchestration systems properly isolated?
- Do they reference agents by current paths?
- Any shared configuration that should be consolidated?

---

### 9. security/ Directory

**Purpose**: Security tools and Shannon pentester

#### Question from User:
"There's a separate security folder with Shannon files. Aren't they the same as agents/by-role/security? Should they be combined?"

#### Answer:
**NO - Keep Separate**

**Reasoning:**
- `security/` directory = Security TOOLS and Shannon EXECUTABLE
  - Shannon pentester (actual security testing tool)
  - Security scanning utilities
  - Vulnerability databases

- `agents/by-role/security/` = Security AGENTS (AI personas)
  - security-reviewer.md (OMC agent for code security review)
  - security-architect.yaml (Ruflo agent for security architecture)
  - These are AI agents that USE security tools

**Relationship:**
- Security agents INVOKE security tools
- Security tools are USED BY security agents
- Example flow: security-reviewer agent → uses Shannon tool → reports vulnerabilities

**Recommendation:**
- Keep directories separate
- Create clear integration documentation
- Add README explaining relationship

---

### 10. ui-design/ Directory

**Purpose**: UI components, rules, and design systems

#### Expected Contents:
- rules/ - 161 UI reasoning rules
- styles/ - 67 style guidelines
- components/ - Categorized UI components
  - buttons/, cards/, forms/, inputs/, etc.
- cursor-rules/ - .cursorrules files
- Galaxy components (3,000+ elements from Uiverse.io)
- shadcn/ui components

#### Issues:
- Massive component library needs indexing
- May have duplicates across sources
- Need component catalog/search system

---

### 11. workspace-config/ Directory

**Purpose**: IDE configuration files

#### Expected Contents:
- .claude/ - Claude Code config
- .cursor/ - Cursor AI config
- .antigravity/ - Antigravity plugin config
- Other IDE-specific configs

---

### 12. reference/ Directory

**Purpose**: Reference documentation

#### Contents:
- Awesome Self-Hosted repository content
- Documentation from various sources
- Technical references

---

### 13. REPO_DOCS/ Directory

**Purpose**: Original README and documentation from source repositories

#### Current Contents:
- 01-background-agents/
- 02-hermes-agent/
- [other numbered repos]

#### Purpose:
- Preserves original context
- Source of truth for understanding intent
- Reference for migration decisions

---

## Categorization Analysis

### Clear Distinctions:

1. **Agents vs Skills vs Commands**
   - **Agents** = AI personalities/roles (debugger, planner, tester)
   - **Skills** = Capabilities/knowledge packages (TDD, SEO, security practices)
   - **Commands** = Triggers/shortcuts that INVOKE agents (e.g., `/debug`, `/review`)

2. **Memory Systems vs Memory Skills**
   - **Memory Systems** (`memory/`) = Infrastructure (claude-mem, supermemory)
   - **Memory Skills** (`skills/`) = How to USE memory effectively

3. **Security Tools vs Security Agents**
   - **Security Tools** (`security/`) = Shannon pentester, scanners
   - **Security Agents** (`agents/by-role/security/`) = AI that analyzes security

4. **MCP Servers vs Skills Using MCP**
   - **MCP Servers** (`mcp-servers/`) = Protocol implementations
   - **MCP Skills** (`skills/`) = How to use MCP servers

### Unclear Areas Needing Review:

1. **agents-claude-skills/ vs agents/by-interface/agents-claude/**
   - Are these the same or different?
   - Should be consolidated or clearly differentiated

2. **Orchestration System Agent References**
   - Do orchestration systems have their own agent definitions?
   - Should those be in by-role or stay with orchestration?

3. **Background Agents Location**
   - Currently in `agents/background-agents/`
   - Should they also be categorized by role?
   - Or are they fundamentally different (async vs sync)?

---

## Duplication Analysis

### Confirmed Duplicates by Name (Need Content Comparison):

#### In agents/by-role/:

1. **Architects**:
   - architect.md (OMC)
   - architect.yaml (Ruflo)
   - Need: Determine if content is same or complementary

2. **Planners**:
   - gsd-planner.md (GSD)
   - gsd-plan-checker.md (GSD)
   - gsd-roadmapper.md (GSD)
   - planner.md (OMC)
   - Need: Analyze unique capabilities of each

3. **Reviewers**:
   - gsd-verifier.md (GSD)
   - code-reviewer.md (OMC)
   - critic.md (OMC)
   - verifier.md (OMC)
   - reviewer.yaml (Ruflo)
   - Need: Map capabilities and merge strategy

4. **Coders/Executors**:
   - gsd-executor.md (GSD)
   - code-simplifier.md (OMC)
   - executor.md (OMC)
   - coder.yaml (Ruflo)
   - Need: Determine specializations

5. **Testers**:
   - qa-tester.md (OMC)
   - test-engineer.md (OMC)
   - tester.yaml (Ruflo)
   - Need: Check for overlap vs specialization

6. **Security**:
   - security-reviewer.md (OMC)
   - security-architect.yaml (Ruflo)
   - Need: Different roles or same?

#### Across skills/:
- Multiple skill directories with similar names
- Need automated content similarity check
- Examples: devops skills in multiple sources

---

## Dependency Mapping

### Files That May Have Broken References:

1. **Orchestration Configs**
   - RuFlo, OMC, GSD configs may reference old agent paths
   - Need to scan for path references

2. **Commands**
   - Command files may invoke agents by old paths
   - Example: `/review` command might reference `agents/agents-omc/code-reviewer.md`
   - Should now reference `agents/by-role/reviewer/code-reviewer.md`

3. **Hooks**
   - Pre/post hooks may reference moved agents
   - Need to update all hook scripts

4. **Skills**
   - Skills may reference specific agents
   - Need to check all SKILL.md files

5. **Agent Internal References**
   - Agents may reference other agents
   - Example: "Delegate to planner agent"
   - Need to ensure references work

---

## File Format Analysis

### Formats Found:

1. **Markdown (.md)**
   - Most agent definitions
   - All SKILL.md files
   - Documentation files

2. **YAML (.yaml/.yml)**
   - Ruflo agent configs
   - Some orchestration configs

3. **JSON**
   - Configuration files
   - Index files (INDEX_MOVEMENTS.json, etc.)

4. **TOML**
   - Ruflo config.toml

5. **Python (.py)**
   - Scripts in skills/
   - Tool implementations

6. **TypeScript/JavaScript**
   - Tool implementations
   - MCP server code

### Format Consistency Issues:

1. **Mixed Agent Formats**
   - Same role has both .md and .yaml
   - Need: Documentation explaining when to use each

2. **SKILL.md Frontmatter**
   - Need to validate all skills have proper frontmatter
   - Required fields: name, description, tools (optional)

---

## Size Analysis

### Large Directories (Need Special Handling):

1. **skills/skills-antigravity/** - 1,326+ directories
   - Too large to process manually
   - Need automated indexing
   - Need search/discovery system

2. **ui-design/** - 3,000+ UI components
   - Need component catalog
   - Need categorization system
   - Need preview/demo system

3. **prompts/** - Hundreds of prompt files
   - Need prompt library interface
   - Need categorization/tagging
   - Need version tracking

---

## Cross-Reference Requirements

### Integration Points to Document:

1. **Agent → Skill**
   - Which agents use which skills?
   - Document in agent definitions

2. **Command → Agent**
   - Map every command to target agent(s)
   - Update command documentation

3. **Orchestrator → Agent Pool**
   - Which agents does each orchestrator use?
   - Document routing logic

4. **Agent → MCP Server**
   - Which agents use which MCP servers?
   - Document integration patterns

5. **Hook → Agent**
   - Which hooks invoke which agents?
   - Update hook configurations

6. **Prompt → Agent**
   - Which prompts are for which agents?
   - Cross-reference system

---

## Next Steps for Phase 2

Based on this discovery, Phase 2 should:

1. **Complete Scans**:
   - Scan all subdirectories (not just top 2 levels)
   - Count files in each category
   - Identify all file types

2. **Content Analysis**:
   - Read duplicate agent files to compare content
   - Identify truly redundant vs complementary
   - Plan merge strategy

3. **Reference Analysis**:
   - Grep for old paths in all files
   - Create reference update list
   - Plan systematic update

4. **Create Indexes**:
   - Master file inventory (JSON)
   - Duplication report (JSON)
   - Dependency graph (JSON)
   - Category mismatch report (JSON)

5. **Define Standards**:
   - File naming conventions
   - Directory structure rules
   - Frontmatter requirements
   - Cross-reference format

---

## Questions Answered for User

### Q1: "Security folder with Shannon - aren't they the same? Should we combine?"

**A**: NO - Keep separate.
- `security/` = Tools (Shannon pentester, scanners)
- `agents/by-role/security/` = AI agents that USE those tools
- Relationship: Agents invoke tools
- **Action**: Document integration, keep directories separate

### Q2: "Commands vs agents by-role - aren't they the same?"

**A**: NO - Completely different.
- **Commands** = Triggers/shortcuts (e.g., `/debug`, `/review`)
- **Agents** = The workers (debugger agent, reviewer agent)
- Relationship: Commands INVOKE agents
- **Action**: Document command → agent mapping

### Q3: "What are MCP servers and what do they do?"

**A**: MCP servers are integration points for external tools/services:
- nano-banana: Gemini image processing
- openviking: ByteDance context database
- gitnexus: Codebase knowledge graph
- lightpanda: Fast browser for testing
- **Purpose**: Provide specialized capabilities to agents
- **Action**: Create MCP integration guide

### Q4: "Memory in agents vs memory/ directory - are they different?"

**A**: YES - Different purposes:
- `memory/` = Memory SYSTEMS (infrastructure like claude-mem, supermemory)
- Agent memory references = Skills for USING memory systems
- **Action**: Keep separate, document integration

### Q5: "What's in each prompts folder?"

**A**:
- `prompts-system/` = Core system prompts for different platforms (Claude, Copilot, Cursor, ChatGPT, etc.)
- `prompts-templates/` = Reusable prompt templates for common tasks
- `prompts-leaked/` = Reverse-engineered prompts from commercial tools
- `prompts-security/` = Security-focused prompt engineering
- **Action**: Create prompt catalog with search

---

## Phase 1 Status: IN PROGRESS

**Completed**:
- ✅ Top-level directory scan
- ✅ Agent directory analysis
- ✅ Skills directory analysis
- ✅ Initial categorization analysis
- ✅ Duplication identification
- ✅ User questions answered

**In Progress**:
- ⏳ Complete subdirectory scan (all levels)
- ⏳ File counting and inventory
- ⏳ Dependency mapping

**Pending**:
- ⬜ Content similarity analysis
- ⬜ Reference path validation
- ⬜ Master inventory JSON creation
- ⬜ Comprehensive reports

---

**Next Session**: Complete deep scans and create JSON inventories.
