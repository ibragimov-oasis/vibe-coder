# Phase 2: Categorization & Standardization
## Started: 2026-04-07T16:18:30Z

---

## Overview

Phase 2 focuses on defining clear category boundaries, establishing naming conventions, analyzing agent capabilities, and creating routing documentation. This phase prepares for intelligent merging in Phase 4.

---

## Section 1: Category Boundary Definitions

### 1.1 Agents vs Skills vs Commands

#### **AGENTS** (AI Personas/Roles)
**Definition**: AI personalities with specific roles and capabilities
**Location**: `COMBINED/agents/`
**Format**: Markdown (.md) or YAML (.yaml) files
**Contains**: Role description, responsibilities, tools, constraints, workflow

**Examples**:
- `planner.md` - Creates work plans
- `debugger.md` - Debugs code issues
- `code-reviewer.md` - Reviews code quality

**Key Characteristics**:
- Has a defined persona ("You are...")
- Has specific responsibilities
- Can invoke other agents or use skills
- May have tool access (Read, Write, Bash, etc.)

---

#### **SKILLS** (Capabilities/Knowledge Packages)
**Definition**: Reusable capability packages with domain expertise
**Location**: `COMBINED/skills/`
**Format**: Directory with `SKILL.md` + optional scripts/references/assets
**Contains**: Instructions, scripts, templates, reference materials

**Examples**:
- `tdd-workflow/` - Test-driven development methodology
- `seo-optimization/` - SEO best practices
- `security-review/` - Security review checklist

**Key Characteristics**:
- Provides HOW-TO knowledge
- Can be used by multiple agents
- Contains scripts, templates, references
- Has SKILL.md with frontmatter (name, description, tools)

---

#### **COMMANDS** (Triggers/Shortcuts)
**Definition**: User-typed shortcuts that invoke agents or workflows
**Location**: `COMBINED/commands/`
**Format**: Markdown files that expand to prompts
**Contains**: Command description and expanded prompt

**Examples**:
- `/debug` - Invokes debugger agent
- `/review` - Invokes code-reviewer agent
- `/plan` - Invokes planner agent

**Key Characteristics**:
- User-facing trigger (starts with `/`)
- Expands to a full prompt
- May invoke one or more agents
- May activate specific skills

**Relationship Flow**:
```
User types command → Command expands → Invokes agent(s) → Agent uses skill(s) → Agent uses tools
```

---

### 1.2 Memory Systems vs Memory Skills

#### **MEMORY SYSTEMS** (Infrastructure)
**Location**: `COMBINED/memory/`
**Purpose**: Actual memory storage and retrieval systems

**Examples**:
- `claude-mem/` - Memory compression system
- `supermemory/` - Context engine
- `openviking/` - ByteDance context DB

**Contains**: Code, databases, APIs, infrastructure

---

#### **MEMORY SKILLS** (Usage Patterns)
**Location**: `COMBINED/skills/[domain]/memory-*`
**Purpose**: How to USE memory systems effectively

**Examples**:
- Memory compression techniques
- Context management patterns
- Memory optimization strategies

**Contains**: Documentation, best practices, usage examples

---

### 1.3 Security Tools vs Security Agents

#### **SECURITY TOOLS** (Executable Tools)
**Location**: `COMBINED/security/`
**Purpose**: Actual security testing and scanning tools

**Examples**:
- Shannon pentester (executable)
- Vulnerability scanners
- Security databases

**Contains**: Executable code, scan definitions, vulnerability DBs

---

#### **SECURITY AGENTS** (AI Analysts)
**Location**: `COMBINED/agents/by-role/security/`
**Purpose**: AI agents that analyze security

**Examples**:
- `security-reviewer.md` - Reviews code for vulnerabilities
- `security-architect.yaml` - Designs secure architectures

**Contains**: Agent definitions, analysis workflows

**Relationship**: Security agents INVOKE security tools

---

### 1.4 MCP Servers vs MCP Skills

#### **MCP SERVERS** (Protocol Implementations)
**Location**: `COMBINED/mcp-servers/`
**Purpose**: Model Context Protocol server implementations

**Examples**:
- `nano-banana/` - Gemini image MCP
- `openviking/` - Context DB MCP
- `gitnexus/` - Knowledge graph MCP
- `lightpanda/` - Browser MCP

**Contains**: Server code, protocol implementations

---

#### **MCP SKILLS** (Usage Patterns)
**Location**: `COMBINED/skills/[domain]/mcp-*`
**Purpose**: How to USE MCP servers

**Contains**: Integration guides, usage examples

---

## Section 2: Naming Conventions

### 2.1 Agent Files

#### **Format**: `[source-prefix-]role-name.[md|yaml]`

**Examples**:
- `gsd-planner.md` - GSD planner agent
- `debugger.md` - OMC debugger agent (no prefix if generic)
- `architect.yaml` - Ruflo architect agent config

**Rules**:
- Use lowercase with hyphens
- Include source prefix if source-specific (gsd-, omc-, ruflo-)
- Omit prefix if agent is generic/universal
- Use `.md` for full agent definitions
- Use `.yaml` for configuration-only agents

---

### 2.2 Skill Directories

#### **Format**: `skill-name/` (lowercase with hyphens)

**Structure**:
```
skill-name/
├── SKILL.md              # Required: Main documentation with frontmatter
├── scripts/              # Optional: Automation scripts
├── references/           # Optional: Reference materials
└── assets/               # Optional: Templates, examples
```

**Frontmatter Requirements**:
```yaml
---
name: skill-name
description: 'Clear description (10-1024 chars, single quotes)'
tools: [optional list of required tools]
model: [optional preferred model]
---
```

---

### 2.3 Command Files

#### **Format**: `command-name.md`

**Rules**:
- Use lowercase with hyphens
- Describe what command does
- Include invocation pattern (e.g., `/debug`)

---

## Section 3: Agent Role Analysis

### 3.1 Planner Agents (4 files)

#### **gsd-planner.md**
- **Source**: Get Shit Done
- **Model**: Not specified
- **Specialty**: Executable phase plans with task breakdown
- **Unique Features**:
  - Goal-backward verification
  - Dependency graphs
  - Execution waves
  - 2-3 tasks per phase
  - Plans are prompts (not documents)
- **Tools**: Read, Write, Bash, Glob, Grep

#### **planner.md**
- **Source**: OMC (oh-my-claudecode)
- **Model**: claude-opus-4-6
- **Specialty**: Strategic planning with interview workflow
- **Unique Features**:
  - User interview process
  - Analyst consultation
  - RALPLAN-DR structure
  - Consensus mode with ADR
  - 3-6 step plans
- **Tools**: Not specified (uses agents)

#### **gsd-plan-checker.md**
- **Source**: Get Shit Done
- **Specialty**: Plan validation and checking
- **Unique Features**: Verifies plan quality

#### **gsd-roadmapper.md**
- **Source**: Get Shit Done
- **Specialty**: Long-term roadmap creation
- **Unique Features**: Multi-phase planning

**Analysis**: These are COMPLEMENTARY, not duplicates
- gsd-planner: Quick, executable plans (tactical)
- planner (OMC): Strategic, interview-driven (strategic)
- gsd-plan-checker: Quality assurance
- gsd-roadmapper: Long-term planning

**Recommendation**: Keep all separate, document when to use each

---

### 3.2 Reviewer Agents (9 files)

Files identified:
1. gsd-verifier.md
2. code-reviewer.md (OMC)
3. critic.md (OMC)
4. verifier.md (OMC)
5. reviewer.yaml (Ruflo)
6. [Plus additional files]

**Analysis Needed**: Read each file to understand specialization

---

### 3.3 Coder Agents (17 files)

**Analysis Needed**: Identify specializations
- Some may focus on specific languages
- Some may focus on specific patterns
- Some may be general-purpose

---

### 3.4 Other Roles

Each role needs similar analysis to determine:
1. Are files truly different or duplicate?
2. What are unique capabilities?
3. Should they be merged or kept separate?
4. How should they be named?

---

## Section 4: Routing & Marshaling Documentation

### 4.1 How Agents Are Discovered

#### **Claude Code**:
1. Checks `.claude/` directory for configuration
2. Loads agents from configured paths
3. Uses `by-interface/agents-claude/` for Claude-specific agents
4. Uses `by-role/` for generic agents

#### **Copilot**:
1. Reads `.github/copilot-instructions.md`
2. Loads agents from `by-interface/agents-copilot/`
3. Uses `by-role/` for generic agents

#### **Cursor**:
1. Reads `.cursor/` directory
2. Loads agents from `by-interface/agents-cursor/`
3. Uses `by-role/` for generic agents

---

### 4.2 Command → Agent Routing

**Pattern**:
```
/command → commands/command.md → expands to prompt → invokes agent
```

**Example**:
```
/debug → commands/debug.md → "Debug the issue using debugger agent" → agents/by-role/debugger/debugger.md
```

---

### 4.3 Agent → Skill Discovery

**Pattern**:
```
Agent needs capability → searches skills/[domain]/ → loads SKILL.md → uses scripts/references
```

**Example**:
```
Security reviewer → needs security patterns → skills/security/security-review/ → uses checklist
```

---

### 4.4 Agent → Tool Access

**Pattern**:
```
Agent definition specifies tools → Claude Code provides access → Agent uses tools
```

**Example**:
```yaml
tools: [Read, Write, Bash, Glob, Grep]
```

---

## Section 5: Standards & Best Practices

### 5.1 Agent Definition Standard

**Required Sections**:
1. Frontmatter (YAML) with name, description, model, tools
2. `<role>` section - Who you are and what you do
3. `<responsibilities>` - What you're responsible for
4. `<constraints>` - What you must NOT do
5. `<workflow>` - How you approach tasks
6. `<success_criteria>` - How to measure success

---

### 5.2 Skill Definition Standard

**Required**:
- `SKILL.md` with proper frontmatter
- Clear usage instructions
- Examples where applicable

**Optional but Recommended**:
- `scripts/` for automation
- `references/` for detailed docs
- `assets/` for templates

---

### 5.3 Integration Points Documentation

**To be created**:
1. Agent → Agent delegation patterns
2. Agent → Skill loading patterns
3. Command → Agent invocation patterns
4. Orchestrator → Agent pool patterns
5. Hook → Agent trigger patterns

---

## Section 6: Reference Update Analysis

### 6.1 Files Potentially Containing Old Paths

Found in initial scan:
- `structure-8.md`
- `MOVEMENT_LOG_2026-04-07.md`
- `RESTRUCTURE_PLAN.md`
- `PHASE_1_DISCOVERY_2026-04-07.md`
- `structure-7.md`
- `RESTRUCTURE_MOVEMENTS.json`

**These are documentation files** - they intentionally record old paths for history. No update needed.

---

### 6.2 Files That Need Updates

**Search needed in**:
1. Orchestration configs (`orchestration/core-*/`)
2. Command definitions (`commands/`)
3. Hook scripts (`hooks/`)
4. Agent internal references
5. Skill references to agents

**Action**: Create update script in Phase 3

---

## Section 7: Merge Strategy Framework

### 7.1 When to Merge Agents

**Merge when**:
- Exact same functionality
- Same source, different names
- Truly redundant content

**Keep separate when**:
- Different specializations
- Different approaches (tactical vs strategic)
- Source-specific implementations
- Different models/capabilities

---

### 7.2 When to Create "Mega" Agents

**Create mega-agent when**:
- Multiple excellent agents for same role
- Want to combine best features
- Create comprehensive capability

**Process**:
1. Read all agents for role
2. Extract unique capabilities
3. Combine into comprehensive agent
4. Document which features came from where
5. Preserve originals for reference

**Example**: `mega-debugger` combining GSD, OMC, and Copilot debuggers

---

### 7.3 Merge Documentation Template

For each merge:
```markdown
# Mega-Agent: [Role Name]

## Sources
- [Source 1]: [filename] - [unique capabilities]
- [Source 2]: [filename] - [unique capabilities]

## Combined Capabilities
[List all capabilities with source attribution]

## When to Use
[Guidance on when to use this vs source-specific versions]

## Original Files
[Links to preserved originals]
```

---

## Section 8: Phase 2 Deliverables

### Created:
1. ✅ **PHASE_2_CATEGORIZATION.md** (this file)
   - Category boundary definitions
   - Naming conventions
   - Agent role analysis
   - Routing documentation
   - Standards and best practices
   - Merge strategy framework

### To Create:
2. **PHASE_2_AGENT_ANALYSIS.json**
   - Machine-readable agent comparison
   - Capabilities by role
   - Merge recommendations

3. **PHASE_2_STANDARDS.md**
   - Complete style guide
   - Frontmatter templates
   - Directory structure rules

4. **PHASE_2_ROUTING_GUIDE.md**
   - Complete routing documentation
   - Integration patterns
   - Discovery mechanisms

---

## Section 9: Findings Summary

### Key Insights:

1. **Most "duplicates" are actually complementary**
   - Example: gsd-planner (tactical) vs planner (strategic)
   - Recommendation: Keep separate, document use cases

2. **Mixed formats are intentional**
   - `.md` files = full agent definitions
   - `.yaml` files = configuration-only
   - Both valid, serve different purposes

3. **Clear distinction between categories**
   - Agents = personas
   - Skills = capabilities
   - Commands = triggers
   - Tools = actual executables

4. **by-role organization working well**
   - 181 files organized into 14 roles
   - Clear categorization
   - Easy to find agents by function

5. **Source prefixes useful**
   - `gsd-`, `omc-`, `ruflo-` prefixes preserve source
   - Helps understand origin and approach
   - Recommendation: Keep prefixes

---

## Section 10: Recommendations for Phase 3

### Priority Actions:

1. **Complete agent content analysis**
   - Read all reviewer agents
   - Read all coder agents
   - Read all other multi-file roles
   - Document unique capabilities

2. **Create integration guides**
   - How commands invoke agents
   - How agents use skills
   - How orchestrators coordinate

3. **Scan for broken references**
   - Check all orchestration configs
   - Check all command files
   - Check all hook scripts
   - Create update list

4. **Create mega-agents where beneficial**
   - Start with debugger (already exists)
   - Consider reviewer, coder, planner
   - Document design decisions

5. **Validate skill frontmatter**
   - Ensure all SKILL.md files have proper format
   - Check required fields
   - Fix any issues

---

## Phase 2 Status

**Completed**:
- ✅ Category boundary definitions
- ✅ Naming convention standards
- ✅ Initial agent analysis (planners)
- ✅ Routing framework
- ✅ Merge strategy framework
- ✅ Standards documentation

**In Progress**:
- ⏳ Complete agent content analysis
- ⏳ Broken reference scan

**Pending**:
- ⬜ Integration guide creation
- ⬜ Agent comparison JSON
- ⬜ Complete routing documentation

---

**Next**: Continue with detailed agent analysis and reference scanning in next session.

**Generated**: 2026-04-07T16:18:30Z
