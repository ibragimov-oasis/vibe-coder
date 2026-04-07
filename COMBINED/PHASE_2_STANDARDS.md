# Vibe-Coder Arsenal: Standards & Best Practices Guide
## Version 1.0 - April 7, 2026

---

## Purpose

This document defines standards for all content in the Vibe-Coder Arsenal repository, ensuring consistency, discoverability, and maintainability across 52,000+ files from 31 source repositories.

---

## 1. File Naming Conventions

### 1.1 Agent Files

**Pattern**: `[source-prefix-]role-descriptor.[md|yaml]`

**Rules**:
- Use lowercase only
- Separate words with hyphens
- Include source prefix if source-specific
- Use descriptive role names

**Examples**:
```
✅ Good:
- gsd-planner.md
- debugger.md
- security-reviewer.md
- omc-code-simplifier.md

❌ Bad:
- GSDPlanner.md (uppercase)
- debugger_agent.md (underscore)
- planner (no extension)
- my-agent-1.md (generic number)
```

**Source Prefixes**:
- `gsd-` = Get Shit Done
- `omc-` = oh-my-claudecode
- `ruflo-` = RuFlo v3.5
- `claude-skills-` = Claude Skills library
- `copilot-` = GitHub Copilot
- No prefix = Generic/universal agent

---

### 1.2 Skill Directories

**Pattern**: `skill-name/`

**Rules**:
- Use lowercase only
- Separate words with hyphens
- Name describes the capability
- No source prefixes in skill names

**Examples**:
```
✅ Good:
- tdd-workflow/
- security-review/
- seo-optimization/
- code-quality-analysis/

❌ Bad:
- TDD_Workflow/ (uppercase + underscore)
- skill1/ (generic)
- mySkill/ (camelCase)
```

---

### 1.3 Command Files

**Pattern**: `command-name.md`

**Rules**:
- Use lowercase only
- Separate words with hyphens
- Name matches the command trigger
- Always `.md` extension

**Examples**:
```
✅ Good:
- debug.md (for /debug command)
- code-review.md (for /code-review command)
- plan.md (for /plan command)

❌ Bad:
- /debug.md (don't include /)
- Debug.md (uppercase)
- debug.txt (wrong extension)
```

---

### 1.4 Hook Files

**Pattern**: `hook-type-name.md` or `hook-name.sh`

**Examples**:
```
✅ Good:
- pre-commit-format.md
- post-tool-use-notify.md
- pre-commit.sh

❌ Bad:
- PreCommit.md
- hook_1.md
```

---

## 2. Directory Structure Standards

### 2.1 Agent Directory Organization

```
agents/
├── by-role/                    # Organized by agent function
│   ├── planner/                # All planning agents
│   ├── debugger/               # All debugging agents
│   ├── reviewer/               # All review agents
│   ├── coder/                  # All coding/execution agents
│   ├── security/               # All security agents
│   └── [other roles]/
│
├── by-interface/               # Organized by AI platform
│   ├── agents-claude/          # Claude Code specific
│   ├── agents-copilot/         # GitHub Copilot specific
│   ├── agents-cursor/          # Cursor AI specific
│   └── [other interfaces]/
│
└── mega/                       # Merged "best of all" agents
    ├── README.md
    └── mega-[role].md
```

**Rules**:
- Place agent in `by-role/` if it's generic/reusable
- Place agent in `by-interface/` if it's platform-specific
- Create mega-agents for well-tested merges only
- Keep original source agents for reference

---

### 2.2 Skill Directory Organization

```
skills/
├── skills-[domain]/            # Domain-organized skills
│   ├── [skill-name]/
│   │   ├── SKILL.md            # Required
│   │   ├── scripts/            # Optional
│   │   ├── references/         # Optional
│   │   └── assets/             # Optional
│   └── ...
└── skills-[source]/            # Source-organized skills
    └── ...
```

**Domain Categories**:
- `skills-business/` - Business operations
- `skills-copilot/` - Copilot-specific
- `skills-data-analysis/` - Data science
- `skills-devops/` - DevOps & CI/CD
- `skills-platform/` - Platform/infrastructure
- `skills-research/` - Research methodologies
- `skills-security/` - Security practices
- `skills-seo/` - SEO optimization
- `skills-writing/` - Documentation & writing

**Source Categories**:
- `skills-antigravity/` - Antigravity Awesome Skills (1,326+)
- `skills-claude/` - Claude Skills library (205+)
- `skills-ruflo/` - RuFlo skills (136+)

---

## 3. File Format Standards

### 3.1 Agent File Format (Markdown)

**Required Structure**:

```markdown
---
name: agent-name
description: 'Clear description of agent purpose'
model: [optional: claude-opus-4-6, claude-sonnet-4-5, etc.]
tools: [optional: Read, Write, Bash, Glob, Grep]
level: [optional: 1-5 complexity level]
---

<role>
You are [Agent Name]. Your mission is to [primary purpose].

You are responsible for [list responsibilities].
You are NOT responsible for [list exclusions].
</role>

<why_this_matters>
[Explain the importance and context]
</why_this_matters>

<success_criteria>
- [Measurable success criterion 1]
- [Measurable success criterion 2]
</success_criteria>

<constraints>
- [Constraint 1]
- [Constraint 2]
</constraints>

<workflow>
1. [Step 1]
2. [Step 2]
3. [Step 3]
</workflow>

[Additional sections as needed]
```

**Required Fields**:
- `name`: Agent identifier (lowercase-with-hyphens)
- `description`: Clear purpose (single quotes, 10-500 chars)

**Optional Fields**:
- `model`: Preferred Claude model
- `tools`: List of required tools
- `level`: Complexity (1=basic, 5=expert)

---

### 3.2 Agent File Format (YAML)

**Structure**:

```yaml
---
name: agent-name
description: 'Agent purpose'
model: claude-opus-4-6
tools:
  - Read
  - Write
  - Bash
role: |
  You are [Agent Name].
  [Role description]
workflow:
  - step: Step 1
    action: Action description
  - step: Step 2
    action: Action description
```

**Use YAML when**:
- Configuration-driven (Ruflo, orchestration systems)
- Simple agent definitions
- Programmatic loading required

**Use Markdown when**:
- Complex instructions
- Human-readable primary requirement
- Rich formatting needed

---

### 3.3 Skill File Format (SKILL.md)

**Required Structure**:

```markdown
---
name: 'skill-name'
description: 'Clear skill description (10-1024 chars)'
tools: [optional list]
model: [optional preferred model]
---

# Skill Name

## Purpose
[What this skill provides]

## When to Use
[Scenarios where this skill applies]

## Usage

### Basic Usage
[Simple example]

### Advanced Usage
[Complex example]

## Integration
[How agents use this skill]

## Requirements
- [Requirement 1]
- [Requirement 2]

## Examples
[Concrete examples]

## References
- [Reference 1]
- [Reference 2]
```

**Required Frontmatter**:
- `name`: Skill identifier (lowercase-with-hyphens)
- `description`: Clear purpose (single quotes, 10-1024 chars)

**Optional Frontmatter**:
- `tools`: Required tool access
- `model`: Preferred model

---

### 3.4 Command File Format

**Structure**:

```markdown
---
command: /command-name
description: 'What this command does'
agent: agent-to-invoke
---

# Command: /command-name

## Description
[Detailed description]

## Usage
```
/command-name [optional-args]
```

## What Happens
1. Command expands to prompt
2. Invokes [agent-name]
3. Agent performs [action]

## Examples
[Usage examples]
```

---

## 4. Content Quality Standards

### 4.1 Agent Quality Checklist

- ✅ Clear, specific role definition
- ✅ Measurable success criteria
- ✅ Explicit constraints (what NOT to do)
- ✅ Defined workflow/approach
- ✅ Proper frontmatter
- ✅ Examples where applicable
- ✅ No contradictions
- ✅ No circular dependencies

---

### 4.2 Skill Quality Checklist

- ✅ SKILL.md with proper frontmatter
- ✅ Clear purpose statement
- ✅ Usage instructions
- ✅ Examples
- ✅ Integration guidance
- ✅ Scripts (if applicable) in `scripts/`
- ✅ References (if applicable) in `references/`
- ✅ Templates (if applicable) in `assets/`

---

### 4.3 Documentation Standards

**All documentation should**:
- Use clear, concise language
- Include examples
- Define acronyms on first use
- Use consistent terminology
- Provide context

**Avoid**:
- Vague descriptions ("does stuff")
- Circular references
- Contradictions
- Outdated information

---

## 5. Integration Standards

### 5.1 Command → Agent Integration

**Pattern**:
```
/command → commands/command.md → expands → invokes agents/by-role/[role]/[agent].md
```

**Standard Reference Format**:
```markdown
This command invokes: `agents/by-role/debugger/debugger.md`
```

---

### 5.2 Agent → Skill Integration

**Pattern**:
```
Agent needs capability → references skills/[domain]/[skill]/ → uses SKILL.md
```

**Standard Reference Format**:
```markdown
Uses skill: `skills/security/security-review/`
```

---

### 5.3 Agent → Agent Delegation

**Standard Pattern**:
```markdown
<delegation>
For [specific task], delegate to [agent-name] agent.
Location: `agents/by-role/[role]/[agent].md`
</delegation>
```

---

## 6. Metadata Standards

### 6.1 Source Attribution

**Always preserve source information**:

```markdown
<!-- Source: [repository-name] -->
<!-- Original path: [original/path/to/file] -->
<!-- Migrated: [date] -->
<!-- Movement: [movement-description] -->
```

---

### 6.2 Modification Tracking

**Track all modifications**:

```markdown
<!-- Modified: [date] - [description] -->
<!-- Merged from: [source1], [source2] -->
<!-- Created: [date] - Mega-agent combining [sources] -->
```

---

## 7. Anti-Patterns to Avoid

### 7.1 File Organization Anti-Patterns

❌ **Don't**: Mix formats without reason
❌ **Don't**: Use generic names (agent1.md, skill2.md)
❌ **Don't**: Nest excessively (more than 4 levels)
❌ **Don't**: Duplicate content across files
❌ **Don't**: Create circular references

---

### 7.2 Content Anti-Patterns

❌ **Don't**: Write vague agent roles
❌ **Don't**: Omit success criteria
❌ **Don't**: Skip frontmatter
❌ **Don't**: Mix responsibilities (one agent doing everything)
❌ **Don't**: Hardcode paths (use relative references)

---

### 7.3 Naming Anti-Patterns

❌ **Don't**: Use uppercase (MyAgent.md)
❌ **Don't**: Use underscores (my_agent.md)
❌ **Don't**: Use spaces (my agent.md)
❌ **Don't**: Use numbers only (agent1.md)
❌ **Don't**: Use special chars (agent!.md)

---

## 8. Validation Tools

### 8.1 Frontmatter Validator

**Check**:
- All required fields present
- Description within length limits
- Name matches filename
- No invalid characters

---

### 8.2 Reference Validator

**Check**:
- All agent references point to existing files
- All skill references point to existing directories
- No broken links
- No circular dependencies

---

### 8.3 Structure Validator

**Check**:
- Proper directory organization
- Required files present (SKILL.md in skills)
- Naming conventions followed
- No duplicate names

---

## 9. Migration Guidelines

### 9.1 When Adding New Content

**Process**:
1. Determine category (agent/skill/command/hook)
2. Choose appropriate location
3. Follow naming conventions
4. Use standard format
5. Add proper frontmatter
6. Include source attribution
7. Update relevant indexes

---

### 9.2 When Modifying Content

**Process**:
1. Read existing content
2. Understand current structure
3. Make minimal changes
4. Preserve source attribution
5. Add modification tracking
6. Update documentation
7. Test references

---

### 9.3 When Merging Content

**Process**:
1. Read all sources
2. Identify unique capabilities
3. Create new mega-file
4. Preserve originals
5. Document merge decisions
6. Update all references
7. Test integration

---

## 10. Quick Reference

### File Type Decision Tree

```
Is it a person/role? → Agent (agents/by-role/)
Is it a capability? → Skill (skills/[domain]/)
Is it a trigger? → Command (commands/)
Is it an event handler? → Hook (hooks/)
Is it infrastructure? → Tool/MCP/Memory/etc.
```

### Naming Quick Check

```
✅ lowercase-with-hyphens.md
❌ UpperCase.md
❌ under_scores.md
❌ spaces in name.md
❌ no-extension
```

### Frontmatter Quick Template

```yaml
---
name: 'item-name'
description: 'Clear description in single quotes'
---
```

---

## Appendix: Complete Examples

### Example Agent (Markdown)

See: `agents/by-role/debugger/debugger.md`

### Example Agent (YAML)

See: `agents/by-role/architect/architect.yaml`

### Example Skill

See: `skills/development/tdd-workflow/SKILL.md`

### Example Command

See: `commands/debug.md`

---

**Version**: 1.0
**Last Updated**: 2026-04-07
**Status**: Active
