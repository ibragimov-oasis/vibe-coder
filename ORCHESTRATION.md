# ORCHESTRATION.md — Master Guide for AI Agent Orchestration

> **Combined Orchestration Documentation**
> This guide explains all orchestration systems in the Vibe-Coder Arsenal and when to use each.
> Last updated: 2026-04-01

---

## Overview

The Vibe-Coder Arsenal includes 5 powerful orchestration systems, each with unique strengths:

| System | Best For | Key Feature |
|--------|----------|-------------|
| **RuFlo** | Enterprise multi-agent swarms | 100+ agents, self-learning |
| **DeerFlow** | Full-stack super agent harness | Sub-agents, memory, sandboxes |
| **Get Shit Done (GSD)** | Spec-driven development | Context rot solution |
| **oh-my-claudecode (OMC)** | Multi-agent orchestration | Zero learning curve |
| **Superpowers** | Software development workflow | Composable skills |

---

## 🌊 RuFlo v3.5 — Enterprise AI Orchestration Platform

**Location:** `Orchestration/ruflo/`

### What It Is

RuFlo (formerly Claude Flow) is a comprehensive AI agent orchestration framework that transforms Claude Code into a powerful multi-agent development platform. Deploy, coordinate, and optimize specialized AI agents working together on complex software engineering tasks.

### Architecture

```
User → RuFlo (CLI/MCP) → Router → Swarm → Agents → Memory → LLM Providers
                       ↑                          ↓
                       └──── Learning Loop ←──────┘
```

### Key Features

- **100+ Specialized Agents** — coder, tester, reviewer, architect, security, and more
- **Self-Learning** — Q-Learning Router with 8 MoE Experts
- **Multiple Topologies** — mesh, hierarchical, ring, star
- **Consensus Mechanisms** — Raft, BFT, Gossip, CRDT
- **130+ Skills, 27 Hooks**
- **Enterprise Security** — AIDefence integration

### When to Use RuFlo

✅ **Use When:**
- You need to coordinate many agents simultaneously
- Building enterprise-grade systems
- Want self-learning/self-optimizing capabilities
- Need fault-tolerant consensus
- Working on large, complex codebases

❌ **Don't Use When:**
- Simple, single-agent tasks
- Quick prototyping
- Learning Claude Code basics

### Getting Started

```bash
# Install
npx @claude-flow install

# Start swarm
npx @claude-flow swarm start --topology hierarchical-mesh

# Use agents
npx @claude-flow agent coder "implement feature X"
```

### Configuration

The main config file is `claude/settings.json`:

```json
{
  "model": "claude-opus-4-6",
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1",
    "CLAUDE_FLOW_V3_ENABLED": "true"
  },
  "claudeFlow": {
    "version": "3.5.2",
    "swarm": {
      "topology": "hierarchical-mesh",
      "maxAgents": 15
    },
    "memory": {
      "backend": "hybrid",
      "enableHNSW": true
    }
  }
}
```

---

## 🦌 DeerFlow 2.0 — Super Agent Harness

**Location:** `Orchestration/deer-flow/`

### What It Is

DeerFlow (**D**eep **E**xploration and **E**fficient **R**esearch **Flow**) is an open-source super agent harness that orchestrates sub-agents, memory, and sandboxes to do almost anything — powered by extensible skills.

### Architecture

- **Backend:** Python 3.12, LangGraph + FastAPI gateway
- **Frontend:** Next.js 16 + React 19 + TypeScript
- **Local dev:** `make dev` → `http://localhost:2026`

### Key Features

- **Sub-Agent System** — Specialized agents for different tasks
- **Sandbox Execution** — Isolated code execution
- **Long-Term Memory** — Persistent context across sessions
- **Skills & Tools** — Extensible capability system
- **MCP Integration** — Model Context Protocol support
- **Claude Code Integration** — Works seamlessly with Claude

### When to Use DeerFlow

✅ **Use When:**
- Building research-heavy applications
- Need sandboxed code execution
- Want a full-stack agent harness
- Integrating with ByteDance models (Doubao)
- Building deep exploration workflows

❌ **Don't Use When:**
- Simple CLI-based workflows
- No need for web UI
- Lightweight tasks

### Getting Started

```bash
# Clone and setup
git clone https://github.com/bytedance/deer-flow.git
cd deer-flow

# Bootstrap
make check
make install

# Run
make dev
# Open http://localhost:2026
```

### Project Layout

```
deer-flow/
├── backend/
│   ├── packages/harness/deerflow/agents/    # Lead agent, middleware
│   ├── app/gateway/                          # FastAPI API
│   └── packages/harness/deerflow/sandbox/    # Sandbox provider
├── frontend/
│   ├── src/app/                              # Next.js routes
│   └── src/components/                       # UI components
└── skills/
    └── public/                               # Built-in skill packs
```

---

## 💪 GET SHIT DONE (GSD) — Context Engineering System

**Location:** `Orchestration/get-shit-done/`

### What It Is

GSD is a lightweight and powerful meta-prompting, context engineering and spec-driven development system. It solves **context rot** — the quality degradation that happens as Claude fills its context window.

### Philosophy

> "The complexity is in the system, not in your workflow."

Behind the scenes: context engineering, XML prompt formatting, subagent orchestration, state management. What you see: a few commands that just work.

### Key Features

- **Context Rot Solution** — Maintains quality as context grows
- **Spec-Driven Development** — Extract specs, generate plans, execute
- **Multi-Platform** — Claude Code, Gemini CLI, Codex, Copilot, Cursor, Windsurf
- **Lightweight** — No enterprise theater

### When to Use GSD

✅ **Use When:**
- Solo developer or small team
- Building MVPs and prototypes
- Want simple, effective workflows
- Experiencing context rot issues
- Need spec-driven development

❌ **Don't Use When:**
- Need complex multi-agent coordination
- Enterprise orchestration requirements
- Building agent swarms

### Getting Started

```bash
# Install
npx get-shit-done-cc@latest

# Choose runtime and location during install

# Verify
/gsd:help
```

### Commands

| Command | Purpose |
|---------|---------|
| `/gsd:help` | Show all available commands |
| `/gsd:spec` | Extract project specification |
| `/gsd:plan` | Generate implementation plan |
| `/gsd:exec` | Execute the plan |

---

## 🎯 oh-my-claudecode (OMC) — Zero Learning Curve Orchestration

**Location:** `Orchestration/oh-my-claudecode/`

### What It Is

OMC is multi-agent orchestration for Claude Code with zero learning curve. Don't learn Claude Code — just use OMC.

### Key Features

- **19 Specialized Agents** — explore, analyst, planner, architect, executor, etc.
- **Team Mode** — Coordinate multiple agents on complex tasks
- **Autopilot** — Autonomous task completion
- **Deep Interview** — Socratic questioning to clarify requirements
- **Ralph/Ultrawork** — Extended autonomous modes

### When to Use OMC

✅ **Use When:**
- New to Claude Code and want quick productivity
- Need multi-agent coordination without complexity
- Want autopilot mode for autonomous work
- Building with team pipelines

❌ **Don't Use When:**
- Need very specific agent configurations
- Enterprise-scale orchestration
- Custom consensus mechanisms

### Getting Started

```bash
# Install via marketplace (recommended)
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
/plugin install oh-my-claudecode

# Setup
/omc-setup

# Use autopilot
autopilot: build a REST API for managing tasks
```

### Agent Catalog

| Agent | Model | Purpose |
|-------|-------|---------|
| `explore` | haiku | Quick exploration |
| `analyst` | opus | Deep analysis |
| `planner` | opus | Planning |
| `architect` | opus | Architecture |
| `debugger` | sonnet | Debugging |
| `executor` | sonnet | Code execution |
| `verifier` | sonnet | Verification |
| `security-reviewer` | sonnet | Security review |
| `code-reviewer` | opus | Code review |

### Team Mode

```bash
# Launch team of 3 executors
/team 3:executor "fix all TypeScript errors"

# Pipeline stages
team-plan → team-prd → team-exec → team-verify → team-fix
```

---

## ⚡ Superpowers — Composable Skills Workflow

**Location:** `Orchestration/superpowers/`

### What It Is

Superpowers is a complete software development workflow built on composable "skills" and initial instructions that make your agent use them automatically.

### Key Features

- **Automatic Skill Activation** — Skills trigger based on context
- **TDD Enforcement** — Red → Green → Refactor
- **Git Worktrees** — Parallel development branches
- **Subagent-Driven Development** — Fresh subagent per task
- **Two-Stage Review** — Spec compliance, then code quality

### When to Use Superpowers

✅ **Use When:**
- Want systematic software development
- Value TDD and code quality
- Need structured planning and execution
- Building production-grade software

❌ **Don't Use When:**
- Quick hacks and experiments
- Don't need strict process
- Lightweight tasks

### Getting Started

```bash
# Claude Code Marketplace
/plugin install superpowers@claude-plugins-official

# Or via repo marketplace
/plugin marketplace add obra/superpowers-marketplace
/plugin install superpowers@superpowers-marketplace
```

### The Basic Workflow

1. **brainstorming** — Refines rough ideas through questions
2. **using-git-worktrees** — Creates isolated workspace on new branch
3. **writing-plans** — Breaks work into bite-sized tasks (2-5 min each)
4. **subagent-driven-development** — Dispatches fresh subagent per task
5. **test-driven-development** — Enforces RED-GREEN-REFACTOR
6. **requesting-code-review** — Reviews against plan
7. **finishing-a-development-branch** — Verifies and merges

### Philosophy

- **Test-Driven Development** — Write tests first, always
- **Systematic over ad-hoc** — Process over guessing
- **Complexity reduction** — Simplicity as primary goal
- **Evidence over claims** — Verify before declaring success

---

## Decision Matrix: Which System to Use?

### By Task Type

| Task | Recommended System |
|------|-------------------|
| Enterprise multi-agent | **RuFlo** |
| Research & exploration | **DeerFlow** |
| Solo spec-driven dev | **GSD** |
| Quick productivity boost | **OMC** |
| Systematic TDD workflow | **Superpowers** |

### By Team Size

| Team Size | Recommended System |
|-----------|-------------------|
| Solo developer | GSD, OMC |
| Small team (2-5) | Superpowers, OMC |
| Medium team (5-20) | DeerFlow, RuFlo |
| Enterprise (20+) | RuFlo |

### By Complexity

| Complexity | Recommended System |
|------------|-------------------|
| Simple tasks | OMC, GSD |
| Moderate complexity | Superpowers, DeerFlow |
| High complexity | RuFlo, DeerFlow |
| Research-heavy | DeerFlow |

---

## Combining Systems

These systems can work together:

### GSD + Superpowers
Use GSD for spec extraction and Superpowers for execution:
1. `/gsd:spec` to extract requirements
2. Superpowers `brainstorming` to refine
3. Superpowers `writing-plans` for implementation plan
4. Execute with TDD workflow

### OMC + RuFlo
Use OMC for quick tasks and RuFlo for complex coordination:
1. OMC `autopilot` for straightforward features
2. RuFlo swarms for cross-cutting concerns
3. OMC `verifier` to validate results

### DeerFlow + Any
DeerFlow's sandbox is useful with any system:
1. Use any system for planning
2. Execute risky code in DeerFlow sandbox
3. Integrate results back

---

## Installation Summary

```bash
# RuFlo
npx @claude-flow install

# DeerFlow
git clone https://github.com/bytedance/deer-flow.git && cd deer-flow && make install

# GSD
npx get-shit-done-cc@latest

# OMC
/plugin marketplace add https://github.com/Yeachan-Heo/oh-my-claudecode
/plugin install oh-my-claudecode

# Superpowers
/plugin install superpowers@claude-plugins-official
```

---

## Additional Resources

| System | Documentation |
|--------|---------------|
| RuFlo | `Orchestration/ruflo/README.md` |
| DeerFlow | `Orchestration/deer-flow/README.md` |
| GSD | `Orchestration/get-shit-done/docs/USER-GUIDE.md` |
| OMC | `Orchestration/oh-my-claudecode/docs/` |
| Superpowers | `Orchestration/superpowers/skills/` |

---

*Combined from: ruflo, deer-flow, get-shit-done, oh-my-claudecode, superpowers*

**Last Updated:** 2026-04-01
