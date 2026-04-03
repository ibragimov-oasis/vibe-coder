# COMBINED/commands - Master Commands Index

> **Complete catalog of all slash commands across repositories**
> Last updated: 2026-04-03

## Overview

This directory contains **63 slash commands** that provide quick access to specialized workflows, agents, and automation. Commands are **executable shortcuts** that expand to full prompts when invoked.

**Total Statistics:**
- **General Commands:** 57 (mostly GSD)
- **Planning Commands:** 3
- **Review Commands:** 2
- **Debug Commands:** 1

---

## Directory Structure

```
commands/
├── general/              # General-purpose commands (57)
│   └── gsd/              # get-shit-done commands (57)
├── plan/                 # Planning commands (3)
│   ├── superpowers-brainstorm.md
│   ├── superpowers-execute-plan.md
│   └── superpowers-write-plan.md
├── review/               # Code review commands (2)
│   ├── shannon-pr.md
│   └── shannon-review.md
└── debug/                # Debugging commands (1)
    └── shannon-debug.md
```

---

## 🚀 General Commands (57)

**Source:** get-shit-done (GSD) meta-prompting system

**Location:** `general/gsd/`

### Project & Workspace Management

**`/gsd:list-workspaces`** - List all project workspaces
- Shows active projects and their status
- Displays workspace metadata

**`/gsd:map-codebase`** - Generate codebase architecture map
- Creates visual representation of project structure
- Identifies key files and dependencies

**`/gsd:stats`** - Show project statistics
- Code metrics, file counts, language breakdown
- Progress tracking data

---

### Phase-Based Development

**`/gsd:add-phase`** - Add new development phase
- Creates structured phase in project plan
- Defines phase objectives and tasks

**`/gsd:discuss-phase`** - Discuss current phase
- Deep dive into phase requirements
- Clarify objectives and approach

**`/gsd:execute-phase`** - Execute current phase
- Runs implementation for active phase
- Coordinates subagents and tasks

**`/gsd:next`** - Move to next phase
- Completes current phase
- Transitions to next phase in plan

---

### Milestone Management

**`/gsd:new-milestone`** - Create project milestone
- Defines milestone goals and deliverables
- Sets timeline and success criteria

**`/gsd:milestone-summary`** - Show milestone progress
- Displays completion status
- Identifies blockers and next steps

**`/gsd:workstreams`** - Manage parallel workstreams
- Coordinate multiple development tracks
- Balance resources across streams

---

### User & Profile Management

**`/gsd:profile-user`** - Analyze user preferences
- Learns coding style and preferences
- Adapts behavior to user patterns

**`/gsd:set-profile`** - Set active profile
- Switch between different working modes
- Apply profile-specific settings

**`/gsd:settings`** - Configure GSD settings
- Customize behavior and preferences
- Manage integrations

---

### Development Workflows

**`/gsd:fast`** - Fast execution mode
- Quick implementation without detailed planning
- Best for simple, well-defined tasks

**`/gsd:quick`** - Quick task execution
- Lightweight task completion
- Minimal overhead

**`/gsd:do`** - Execute task immediately
- Direct task execution
- No planning overhead

**`/gsd:autonomous`** - Fully autonomous mode
- AI takes full control
- Minimal user intervention

---

### Code Quality & Review

**`/gsd:review`** - Comprehensive code review
- Multi-agent review process
- Best practices validation

**`/gsd:verify-work`** - Verify completed work
- Quality checks and validation
- Test execution and verification

**`/gsd:debug`** - Debug mode
- Systematic debugging workflow
- Root cause analysis

---

### Specification & Planning

**`/gsd:spec`** - Extract project specification
- Analyzes codebase to understand requirements
- Creates structured specification document

**`/gsd:plan`** - Generate implementation plan
- Breaks down features into tasks
- Creates execution roadmap

**`/gsd:exec`** - Execute the plan
- Implements planned tasks systematically
- Coordinates agents and workflows

---

### Documentation & Notes

**`/gsd:note`** - Add project note
- Captures important information
- Maintains context across sessions

**`/gsd:join-discord`** - Get Discord community link
- Access to GSD community
- Support and collaboration

---

### Additional GSD Commands

The full catalog includes 57 commands covering:
- **Context Engineering** - Context management and optimization
- **Agent Coordination** - Multi-agent orchestration
- **State Management** - Project state tracking
- **Meta-Prompting** - Advanced prompt techniques
- **Workflow Automation** - Automated development workflows

**Complete List (40+ more):**
- `/gsd:help` - Show all commands
- `/gsd:init` - Initialize GSD in project
- `/gsd:status` - Show current status
- `/gsd:history` - Show command history
- `/gsd:rollback` - Rollback last changes
- `/gsd:checkpoint` - Create save point
- `/gsd:agents` - List active agents
- `/gsd:tools` - Show available tools
- `/gsd:memory` - Memory management
- `/gsd:context` - Context inspection
- ...and many more

---

## 📋 Planning Commands (3)

**Source:** Superpowers workflow system

**Location:** `plan/`

### `/superpowers:brainstorm`

**File:** `superpowers-brainstorm.md`

**Purpose:** Activate brainstorming mode before writing code

**Behavior:**
- Asks clarifying questions
- Refines rough ideas into concrete requirements
- Explores alternatives and edge cases
- Surfaces hidden assumptions

**Use When:**
- Starting new feature
- Requirements are unclear
- Need to explore design space

---

### `/superpowers:write-plan`

**File:** `superpowers-write-plan.md`

**Purpose:** Create detailed implementation plan

**Behavior:**
- Breaks work into bite-sized tasks (2-5 minutes each)
- Sequences tasks logically
- Identifies dependencies
- Creates actionable checklist

**Output:**
- Markdown plan file with tasks
- Each task sized for single subagent
- Clear acceptance criteria

**Use When:**
- After brainstorming
- Before implementation
- For complex features

---

### `/superpowers:execute-plan`

**File:** `superpowers-execute-plan.md`

**Purpose:** Execute the written plan systematically

**Behavior:**
- Reads plan file
- Spawns fresh subagent per task
- Two-stage review process
- Enforces TDD (RED-GREEN-REFACTOR)

**Process:**
1. Subagent implements task
2. First review against plan
3. Second review for quality
4. Move to next task

**Use When:**
- Plan is complete and approved
- Ready for implementation
- Want systematic execution

---

## 👁️ Review Commands (2)

**Source:** Shannon AI pentester

**Location:** `review/`

### `/shannon:pr`

**File:** `shannon-pr.md`

**Purpose:** Comprehensive pull request review

**Capabilities:**
- Security vulnerability detection
- OWASP Top 10 analysis
- Code quality assessment
- Best practices validation

**Output:**
- Detailed review report
- Security findings with severity
- Remediation recommendations

**Use When:**
- Creating pull request
- Before merging to main
- Security-critical changes

---

### `/shannon:review`

**File:** `shannon-review.md`

**Purpose:** General code review with security focus

**Capabilities:**
- Code quality review
- Security analysis
- Performance assessment
- Maintainability evaluation

**Output:**
- Review comments
- Security warnings
- Improvement suggestions

**Use When:**
- Regular code review
- Security audit needed
- Quality assessment

---

## 🐛 Debug Commands (1)

**Source:** Shannon AI pentester

**Location:** `debug/`

### `/shannon:debug`

**File:** `shannon-debug.md`

**Purpose:** Security-focused debugging

**Capabilities:**
- Vulnerability tracing
- Security bug analysis
- Exploit path identification
- Root cause investigation

**Process:**
1. Analyze reported issue
2. Trace execution flow
3. Identify security implications
4. Recommend secure fix

**Use When:**
- Security bug reported
- Suspicious behavior
- Need security context

---

## Quick Reference by Use Case

### "I want to start a new feature"
```bash
/superpowers:brainstorm
/superpowers:write-plan
/superpowers:execute-plan
```

### "I need quick code changes"
```bash
/gsd:fast
/gsd:quick
```

### "I want autonomous development"
```bash
/gsd:autonomous
```

### "I need code review"
```bash
/gsd:review
/shannon:review
```

### "I'm creating a pull request"
```bash
/shannon:pr
```

### "I need to debug an issue"
```bash
/gsd:debug
/shannon:debug
```

### "I need project planning"
```bash
/gsd:spec
/gsd:plan
/gsd:exec
```

### "I want phase-based development"
```bash
/gsd:add-phase
/gsd:execute-phase
/gsd:next
```

---

## Command Execution Flow

### How Commands Work

1. **User types command:** `/gsd:plan`
2. **System expands prompt:** Reads `commands/general/gsd/plan.md`
3. **Full prompt injected:** Content becomes active prompt
4. **Agent executes:** Follows expanded instructions

### Example

**Command:** `/superpowers:write-plan`

**Expands to:**
```markdown
You are in plan-writing mode.

Create a detailed implementation plan that:
- Breaks work into 2-5 minute tasks
- Sequences tasks logically
- Identifies dependencies
- Provides clear acceptance criteria

Write the plan to: .claude/plan.md
...
```

---

## Command Naming Convention

**Format:** `/{source}:{action}`

**Examples:**
- `/gsd:plan` - GSD's planning command
- `/superpowers:brainstorm` - Superpowers' brainstorming
- `/shannon:pr` - Shannon's PR review

**Special Cases:**
- `/gsd:spec` - Specification extraction
- `/gsd:exec` - Execute (not "execute" to save typing)

---

## Creating Custom Commands

### Command File Structure

```markdown
---
name: my-command
description: What this command does
agent: claude
---

# Command Instructions

This is what the agent should do when this command is invoked.

## Steps
1. First step
2. Second step
3. Third step

## Output
Expected output format
```

### Best Practices

1. **Clear purpose** - Single, well-defined task
2. **Concise name** - Easy to remember and type
3. **Good description** - Helps with discovery
4. **Step-by-step** - Explicit instructions
5. **Expected output** - Define deliverables

### Adding to Repository

1. Choose category: `general/`, `plan/`, `review/`, `debug/`
2. Create `.md` file with frontmatter
3. Document in this INDEX
4. Test command execution

---

## Command vs Agent vs Skill

### Command
- **What:** Executable shortcut to prompt
- **When:** Quick access to workflow
- **Example:** `/gsd:plan`

### Agent
- **What:** AI persona with role and expertise
- **When:** Need specialized capability
- **Example:** `omc-planner` agent

### Skill
- **What:** Domain knowledge + tools package
- **When:** Agent needs expertise
- **Example:** `jwt-auth-best-practices` skill

### Combined Usage
```bash
# Command invokes agent with skill
/gsd:plan
# → Triggers planner agent
# → Loads planning skills
# → Creates implementation plan
```

---

## Integration Patterns

### Command → Agent
```bash
/superpowers:write-plan
# Activates planning mode
# Uses planner agent
```

### Command → Workflow
```bash
/gsd:execute-phase
# Runs multi-step workflow
# Coordinates multiple agents
```

### Command → Tool
```bash
/gsd:map-codebase
# Executes analysis tool
# Generates architecture diagram
```

---

## System-Specific Commands

### GSD (get-shit-done) - 57 commands

**Philosophy:** Context engineering + meta-prompting + spec-driven development

**Key Features:**
- Solves context rot
- XML prompt formatting
- Subagent orchestration
- State management

**Installation:**
```bash
npx get-shit-done-cc@latest
```

**Main Commands:**
- `/gsd:help` - All commands
- `/gsd:spec` - Extract spec
- `/gsd:plan` - Create plan
- `/gsd:exec` - Execute plan

---

### Superpowers - 3 commands

**Philosophy:** Test-driven, subagent-driven, systematic workflow

**Key Features:**
- RED-GREEN-REFACTOR enforcement
- Fresh subagent per task
- Two-stage review
- Evidence over claims

**Workflow:**
```
brainstorm → write-plan → execute-plan
```

---

### Shannon - 3 commands

**Philosophy:** Security-first development and review

**Key Features:**
- OWASP Top 10 analysis
- Vulnerability detection
- Security-focused debugging
- Penetration testing

**Use Cases:**
- Security audits
- PR reviews
- Bug investigation

---

## Related Resources

- **Agents:** See `COMBINED/agents/INDEX.md` for agent capabilities
- **Skills:** See `COMBINED/skills/INDEX.md` for skill packages
- **Hooks:** See `COMBINED/hooks/README.md` for automation
- **Orchestration:** See `COMBINED/orchestration/` for systems

---

## Future Expansion

Expected command categories:

- **Deploy commands** - Deployment workflows
- **Test commands** - Test execution
- **Refactor commands** - Code refactoring
- **Security commands** - Security scans
- **Performance commands** - Performance analysis
- **Documentation commands** - Doc generation

---

## Contributing New Commands

When adding commands:

1. **Choose category** - general, plan, review, debug (or propose new)
2. **Create markdown file** - With proper frontmatter
3. **Document clearly** - Purpose, usage, expected output
4. **Test thoroughly** - Verify command expansion works
5. **Update this index** - Add to appropriate section

---

## Command Statistics

**By System:**
- GSD: 57 commands (90%)
- Superpowers: 3 commands (5%)
- Shannon: 3 commands (5%)

**By Category:**
- General: 57 commands (90%)
- Planning: 3 commands (5%)
- Review: 2 commands (3%)
- Debug: 1 command (2%)

**Total:** 63 production-ready slash commands

---

## Version History

- **2026-04-03:** Initial comprehensive index created (63 commands cataloged)
- **Phase 2:** Structure reorganization completed
- **Phase 1:** Initial migration from 31 repositories

---

*For agent capabilities, see `COMBINED/agents/INDEX.md`*
*For skill packages, see `COMBINED/skills/INDEX.md`*
*For automation hooks, see `COMBINED/hooks/README.md`*
