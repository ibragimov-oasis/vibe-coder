# COMBINED/agents - Master Agent Index

> **Complete catalog of all AI agents across all repositories**
> Last updated: 2026-04-04

## Overview

This directory contains **336+ specialized AI agents** from 31 repositories, organized by:
- **Role** (functional capability)
- **Interface** (AI platform: Claude, Copilot, Cursor, etc.)
- **Orchestrators** (multi-agent platforms)

**Total Statistics (post prefix-source restructure):**
- 155 agents organized by role (by-role/)
- 687 interface-grouped files under by-interface/agents-*
- Source collections now under agents-* folders: ruflo (149 files), omc (19), gsd (8), background (222), hermes (646)

---

## Directory Structure

```
agents/
├── mega/                 # ⭐ MEGA AGENTS — start here (best-of-breed, merged from all sources)
│   ├── mega-orchestrator.md  # Pipeline coordinator
│   ├── mega-debugger.md      # GSD + OMC + RuFlo debugging
│   ├── mega-planner.md       # GSD + OMC + RuFlo planning
│   ├── mega-researcher.md    # Hermes + GSD + DeerFlow research
│   ├── mega-designer.md      # Galaxy + shadcn + UI/UX Pro Max
│   ├── mega-security.md      # Shannon pentester
│   ├── mega-seo.md           # claude-seo + Antigravity SEO
│   └── mega-reviewer.md      # RuFlo + OMC + Superpowers review
│
├── by-role/              # Agents organized by functional role
│   ├── architect/        # Architecture & design agents
│   ├── business/         # Business advisor agents (CEO, CTO)
│   ├── coder/            # Coding & implementation agents
│   ├── debugger/         # Debugging specialists
│   ├── devops/           # DevOps & infrastructure agents
│   ├── manager/          # Project management agents
│   ├── planner/          # Planning & strategy agents
│   ├── researcher/       # Research & analysis agents
│   ├── reviewer/         # Code review agents
│   ├── scientist/        # Data science agents
│   ├── security/         # Security audit agents
│   ├── tester/           # Testing & QA agents
│   ├── ui-specialist/    # UI/UX design agents
│   └── writer/           # Documentation agents
│
├── by-interface/         # Agents organized by AI platform
│   ├── agents-claude/    # Claude Code agents (ruflo, shannon, claude-skills, superpowers)
│   ├── agents-copilot/   # GitHub Copilot collections and plugins
│   ├── agents-cursor/    # Cursor AI agents
│   ├── agents-codex/     # OpenAI Codex agents
│   ├── agents-antigravity/ # Antigravity platform agents
│   └── agents-opencode/  # OpenCode platform agents
│
├── agents-ruflo/         # RuFlo source agents
├── agents-omc/           # oh-my-claudecode agents
├── agents-gsd/           # get-shit-done agents
├── agents-background/    # Background agents (Open-Inspect)
└── agents-hermes/        # Hermes agent system
```

---

## Agents by Role

### 🏗️ Architecture & Design (architect/)

**Purpose:** High-level system design, architecture decisions, technology selection

**Key Agents:**
- `ruflo-architect.yaml` - RuFlo architecture agent
- `gsd-architect.md` - GSD architecture agent
- `omc-architect.md` - OMC architecture agent

**Use Cases:** System design, API design, microservices architecture, technology stack selection

---

### 💼 Business Advisors (business/)

**Purpose:** C-level strategic decision making

**Key Agents:**
- `cs-ceo-advisor.md` - CEO strategic advisor (from claude-skills)
- `cs-cto-advisor.md` - CTO technical advisor

**Use Cases:** Business strategy, technical leadership, product direction, investment decisions

---

### 👨‍💻 Coders & Executors (coder/)

**Purpose:** Code implementation, feature development

**Key Agents:**
- `ruflo-coder.yaml` - RuFlo coding agent
- `gsd-executor.md` - GSD code executor
- `omc-executor.md` - OMC executor (Sonnet-powered)
- `cs-fullstack-engineer.md` - Fullstack engineering specialist

**Use Cases:** Feature implementation, bug fixes, code generation, refactoring

---

### 🐛 Debuggers (debugger/)

**Purpose:** Bug investigation, root cause analysis, issue resolution

**Key Agents:**
- `gsd-debugger.md` - **42.7KB** comprehensive debugging agent
- `omc-debugger.md` - OMC debugging specialist
- `cs-debugging-specialist.md` - Claude Skills debugger

**Use Cases:** Bug hunting, stack trace analysis, performance debugging, error investigation

---

### 🚀 DevOps Engineers (devops/)

**Purpose:** Infrastructure, CI/CD, deployment automation

**Key Agents:**
- `cs-devops-engineer.md` - Full DevOps specialist

**Use Cases:** Docker, Kubernetes, AWS/Azure/GCP, CI/CD pipelines, infrastructure as code

---

### 📋 Project Managers (manager/)

**Purpose:** Project planning, roadmapping, team coordination

**Key Agents:**
- `gsd-roadmapper.md` - Roadmap planning specialist
- `cs-product-manager.md` - Product management expert

**Use Cases:** Sprint planning, roadmap creation, stakeholder management, resource allocation

---

### 📐 Planners (planner/)

**Purpose:** Task breakdown, implementation planning, work estimation

**Key Agents:**
- `gsd-planner.md` - **45KB** comprehensive planning agent
- `omc-planner.md` - OMC planning specialist (Opus-powered)
- `superpowers-planner.md` - Superpowers planning agent

**Use Cases:** Breaking down features, creating implementation plans, task sequencing

---

### 🔬 Researchers & Analysts (researcher/)

**Purpose:** Codebase analysis, research, information gathering

**Key Agents:**
- `gsd-phase-researcher.md` - Phase-based research
- `gsd-project-researcher.md` - Project research specialist
- `omc-analyst.md` - OMC deep analysis agent (Opus-powered)
- `deer-flow-deep-research.md` - ByteDance deep research

**Use Cases:** Codebase exploration, dependency analysis, technology research, competitive analysis

---

### 👁️ Reviewers (reviewer/)

**Purpose:** Code review, quality assurance, security review

**Key Agents:**
- `ruflo-reviewer.yaml` - RuFlo code reviewer
- `omc-code-reviewer.md` - OMC code review (Opus-powered)
- `superpowers-code-reviewer.md` - Superpowers reviewer
- `gsd-verifier.md` - GSD verification agent

**Use Cases:** Pull request reviews, code quality checks, security audits, best practices validation

---

### 🔬 Scientists (scientist/)

**Purpose:** Data analysis, machine learning, statistical modeling

**Key Agents:**
- `omc-scientist.md` - OMC data science agent (Sonnet-powered)

**Use Cases:** Data analysis, ML model development, statistical analysis, data visualization

---

### 🔒 Security Specialists (security/)

**Purpose:** Security audits, vulnerability detection, penetration testing

**Key Agents:**
- `ruflo-security-architect.yaml` - Security architecture
- `omc-security-reviewer.md` - Security review agent
- `shannon-pentester.md` - Shannon penetration testing

**Use Cases:** Security audits, vulnerability scanning, threat modeling, compliance validation

---

### 🧪 Testers & QA (tester/)

**Purpose:** Test creation, quality assurance, test automation

**Key Agents:**
- `ruflo-tester.yaml` - RuFlo testing agent
- `omc-test-engineer.md` - OMC test engineering
- `cs-qa-specialist.md` - QA specialist

**Use Cases:** Unit testing, integration testing, E2E testing, test plan creation

---

### 🎨 UI/UX Specialists (ui-specialist/)

**Purpose:** User interface design, UX research, design systems

**Key Agents:**
- `gsd-ui-auditor.md` - UI audit specialist
- `gsd-ui-researcher.md` - UX research agent
- `gsd-ui-checker.md` - UI quality checker
- `omc-designer.md` - OMC design agent

**Use Cases:** UI design, UX research, accessibility audits, design system creation

---

### 📝 Writers & Documentarians (writer/)

**Purpose:** Documentation creation, technical writing, API docs

**Key Agents:**
- `omc-writer.md` - OMC technical writer (Haiku-powered for speed)
- `cs-technical-writer.md` - Claude Skills technical writer

**Use Cases:** README creation, API documentation, user guides, inline code comments

---

## Agents by Interface

### Claude Code Agents

**Location:** `by-interface/agents-claude/`

**Repositories:**
- **shannon/** - Security-focused Claude agents
- **ruflo/** - RuFlo v3.5 enterprise agents
- **claude-skills/** - 205 production-ready skills
- **superpowers/** - Workflow-driven development

**Total:** 50+ Claude-specific agent configurations

---

### GitHub Copilot Agents

**Location:** `by-interface/agents-copilot/`

**Main Collection:** `awesome-copilot/` (181 agents)

**Categories:**
- **Language Experts:** C#, Python, Java, Go, Rust, TypeScript, etc.
- **Framework Specialists:** Django, Spring Boot, React, Angular, .NET
- **Platform Experts:** Azure, AWS, Power Platform, Kubernetes
- **Domain Specialists:** MCP development, API design, database migration
- **Workflow Agents:** Architecture, testing, security, DevOps

**Notable Agents:**
- `4.1-Beast.agent.md` - Ultra-powerful reasoning mode
- `Thinking-Beast-Mode.agent.md` - Deep reasoning
- `CSharpExpert.agent.md` - C#/.NET specialist
- `DjangoExpert.agent.md` - Django framework expert
- `arch.agent.md` - Architecture specialist

**Additional Resources:**
- `cookbook/` - SDK examples (Python, .NET, Go, Node.js)
- `instructions/` - Copilot instruction sets
- `plugins/` - 60+ production plugins
- `hooks/` - Automation hooks

---

### Cursor AI Agents

**Location:** `by-interface/agents-cursor/`

**Repository:** `superpowers-cursor/`

**Focus:** Cursor-specific workflow integration

---

### Codex Agents

**Location:** `by-interface/agents-codex/`

**Repository:** `superpowers-codex/`

**Focus:** OpenAI Codex integration

---

### Antigravity Agents

**Location:** `by-interface/agents-antigravity/`

**Focus:** Antigravity platform agents (1,340+ skills ecosystem)

---

### OpenCode Agents

**Location:** `by-interface/agents-opencode/`

**Repository:** `superpowers-opencode/`

**Focus:** OpenCode platform integration

---

## Source Collections (agents-*)

### RuFlo Agents

**Location:** `agents-ruflo/`

**Contents:** Claude-facing YAML agents plus supporting skills/configuration from the RuFlo orchestration stack.

---

### OMC Agents

**Location:** `agents-omc/`

**Contents:** 19 Markdown agent definitions spanning planning, execution, review, debugging, design, and security.

---

### Get-Shit-Done Agents

**Location:** `agents-gsd/`

**Contents:** Core GSD agent prompt files (planner, executor, verifier, researchers, roadmapper) from the SDK prompts bundle.

---

### Background Agents (Open-Inspect)

**Location:** `agents-background/`

**Architecture:** WebSocket-based sandboxed agent platform

**Components:**
- `packages/control-plane/` - Session lifecycle management
- `packages/web/` - Next.js frontend
- `packages/github-bot/` - GitHub PR review bot
- `packages/linear-bot/` - Linear integration
- `packages/modal-infra/` - Modal sandbox infrastructure

**Use Cases:** Automated PR reviews, GitHub comment-triggered sessions, Linear task automation

**Documentation:** See `agents-background/README.md`

---

### Hermes Agent

**Location:** `agents-hermes/`

**Description:** Self-learning agentic system with MCP server

**Components:**
- `agent/` - Core self-learning agent
- `cli/` - Command-line interface
- `gateway/` - API gateway
- `tools/` - Built-in tools
- `skills/builtin/` - Core skills
- `skills/optional/` - Extended capabilities

**Features:**
- Self-learning capabilities
- MCP server integration
- Tool ecosystem
- CLI interface

**Documentation:** See `agents-hermes/README.md`

---

## Quick Reference by Use Case

### "I need to implement a new feature"
→ Use `coder/` agents (executor, fullstack-engineer)

### "I have a bug to fix"
→ Use `debugger/` agents (gsd-debugger, omc-debugger)

### "I need to plan a large project"
→ Use `planner/` agents (gsd-planner, omc-planner)

### "I need code reviewed"
→ Use `reviewer/` agents (code-reviewer, verifier)

### "I need to write tests"
→ Use `tester/` agents (test-engineer, qa-specialist)

### "I need security audit"
→ Use `security/` agents (security-reviewer, shannon-pentester)

### "I need UI/UX work"
→ Use `ui-specialist/` agents (ui-auditor, designer)

### "I need documentation"
→ Use `writer/` agents (technical-writer, omc-writer)

### "I need architecture decisions"
→ Use `architect/` agents

### "I need codebase research"
→ Use `researcher/` agents (analyst, project-researcher)

---

## Model Routing Guide

### Quick Operations (Haiku)
- `omc-explore` - Fast codebase exploration
- `omc-writer` - Quick documentation

### Standard Operations (Sonnet)
- `omc-executor` - Code implementation
- `omc-debugger` - Bug investigation
- `omc-test-engineer` - Test creation
- `omc-verifier` - Code verification

### Complex Operations (Opus)
- `omc-architect` - Architecture design
- `omc-planner` - Strategic planning
- `omc-analyst` - Deep analysis
- `omc-code-reviewer` - Comprehensive review
- `omc-critic` - Critical evaluation

---

## Integration Patterns

### Single-Agent Pattern
```bash
# Use one specialized agent for focused task
/omc:executor "implement user authentication"
```

### Multi-Agent Pattern
```bash
# Coordinate multiple agents for complex workflow
/team 3:executor "implement feature X"
# Automatically uses: planner → executor → verifier
```

### Orchestrator Pattern
```bash
# Use agents-background/ for automated workflows
# GitHub PR comment: @open-inspect review this PR
```

---

## Related Resources

- **Source Agent Collections:** See `agents-ruflo/`, `agents-omc/`, `agents-gsd/`, `agents-background/`, `agents-hermes/`
- **Orchestration Systems:** Core platforms remain in `COMBINED/orchestration/` (RuFlo, OMC, GSD, Superpowers)
- **Skills:** See `COMBINED/skills/INDEX.md` for agent capabilities
- **Commands:** See `COMBINED/commands/INDEX.md` for slash commands
- **Hooks:** See `COMBINED/hooks/README.md` for automation

---

## Contributing New Agents

When adding new agents:

1. **Determine primary role** - Place in appropriate `by-role/` category
2. **Track interface** - Also link in `by-interface/` if platform-specific
3. **Follow naming convention** - `source-role.extension` (e.g., `omc-executor.md`)
4. **Include metadata** - Model recommendation, description, use cases
5. **Update this index** - Add to appropriate categories

---

## Version History

- **2026-04-04:** Prefix-source restructure for agents (flattened by-interface, added agents-* source collections)
- **2026-04-03:** Initial comprehensive index created
- **Phase 2:** Structure reorganization completed
- **Phase 1:** Initial migration of 31 repositories

---

*For detailed orchestration capabilities, see `COMBINED/orchestration/README.md`*
*For skill-specific capabilities, see `COMBINED/skills/INDEX.md`*
