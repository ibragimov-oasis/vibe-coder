# CLAUDE.md — Vibe-Coder Arsenal Master Instructions

> **Combined Configuration for Claude Code**
> This file merges CLAUDE.md content from 8+ repositories into one comprehensive guide.
> Last updated: 2026-04-01

---

## 🎯 Repository Purpose

This repository is the **Vibe-Coder Arsenal** — a comprehensive toolkit containing 31 repositories worth of AI-powered development resources. Your AI assistant (Claude, Copilot, Cursor, Antigravity, Gemini CLI, etc.) becomes smarter, more autonomous, and more powerful when working in this repo.

**Key Capabilities Unlocked:**
- 1,326+ skills from Antigravity Awesome Skills
- 205+ skills from Claude Skills library
- Multi-agent orchestration systems (RuFlo, DeerFlow, GSD, OMC, Superpowers)
- Persistent memory systems (Claude-Mem, Supermemory, OpenViking)
- 3,000+ UI elements from Galaxy/Uiverse
- Production-ready prompts and templates

---

## 📂 Repository Structure

```
vibe-coder/
├── .claude/                 # ← You are here (Claude Code config)
├── .github/                 # GitHub Copilot config
├── .cursor/                 # Cursor AI config
├── .antigravity/            # Antigravity plugin config
├── Agents/                  # Background Agents, Hermes, Shannon
├── Orchestration/           # RuFlo, DeerFlow, GSD, OMC, Superpowers
├── Prompts/                 # prompts.chat, system prompts, templates
├── Reference/               # Awesome Self-Hosted
├── Skills/                  # All skill libraries
├── Tools/                   # GitNexus, Browser, Claude-Mem, etc.
├── UI-UX/                   # Galaxy, shadcn/ui, UI UX Pro Max
└── _combined/               # Combined assets
```

---

<!-- OMC:START -->
<!-- Source: oh-my-claudecode/CLAUDE.md -->

## oh-my-claudecode - Intelligent Multi-Agent Orchestration

You are running with oh-my-claudecode (OMC), a multi-agent orchestration layer for Claude Code.
Coordinate specialized agents, tools, and skills so work is completed accurately and efficiently.

<operating_principles>
- Delegate specialized work to the most appropriate agent.
- Prefer evidence over assumptions: verify outcomes before final claims.
- Choose the lightest-weight path that preserves quality.
- Consult official docs before implementing with SDKs/frameworks/APIs.
</operating_principles>

<delegation_rules>
Delegate for: multi-file changes, refactors, debugging, reviews, planning, research, verification.
Work directly for: trivial ops, small clarifications, single commands.
Route code to `executor` (use `model=opus` for complex work). Uncertain SDK usage → `document-specialist` (repo docs first; Context Hub / `chub` when available, graceful web fallback otherwise).
</delegation_rules>

<model_routing>
`haiku` (quick lookups), `sonnet` (standard), `opus` (architecture, deep analysis).
Direct writes OK for: `~/.claude/**`, `.omc/**`, `.claude/**`, `CLAUDE.md`, `AGENTS.md`.
</model_routing>

<agent_catalog>
Prefix: `oh-my-claudecode:`. See `agents/*.md` for full prompts.

explore (haiku), analyst (opus), planner (opus), architect (opus), debugger (sonnet), executor (sonnet), verifier (sonnet), tracer (sonnet), security-reviewer (sonnet), code-reviewer (opus), test-engineer (sonnet), designer (sonnet), writer (haiku), qa-tester (sonnet), scientist (sonnet), document-specialist (sonnet), git-master (sonnet), code-simplifier (opus), critic (opus)
</agent_catalog>

<tools>
External AI: `/team N:executor "task"`, `omc team N:codex|gemini "..."`, `omc ask <claude|codex|gemini>`, `/ccg`
OMC State: `state_read`, `state_write`, `state_clear`, `state_list_active`, `state_get_status`
Teams: `TeamCreate`, `TeamDelete`, `SendMessage`, `TaskCreate`, `TaskList`, `TaskGet`, `TaskUpdate`
Notepad: `notepad_read`, `notepad_write_priority`, `notepad_write_working`, `notepad_write_manual`
Project Memory: `project_memory_read`, `project_memory_write`, `project_memory_add_note`, `project_memory_add_directive`
Code Intel: LSP (`lsp_hover`, `lsp_goto_definition`, `lsp_find_references`, `lsp_diagnostics`, etc.), AST (`ast_grep_search`, `ast_grep_replace`), `python_repl`
</tools>

<skills>
Invoke via `/oh-my-claudecode:<name>`. Trigger patterns auto-detect keywords.

Workflow: `autopilot`, `ralph`, `ultrawork`, `team`, `ccg`, `ultraqa`, `omc-plan`, `ralplan`, `sciomc`, `external-context`, `deepinit`, `deep-interview`, `ai-slop-cleaner`
Keyword triggers: "autopilot"→autopilot, "ralph"→ralph, "ulw"→ultrawork, "ccg"→ccg, "ralplan"→ralplan, "deep interview"→deep-interview, "deslop"/"anti-slop"/cleanup+slop-smell→ai-slop-cleaner, "deep-analyze"→analysis mode, "tdd"→TDD mode, "deepsearch"→codebase search, "ultrathink"→deep reasoning, "cancelomc"→cancel. Team orchestration is explicit via `/team`.
Utilities: `ask-codex`, `ask-gemini`, `cancel`, `note`, `learner`, `omc-setup`, `mcp-setup`, `hud`, `omc-doctor`, `omc-help`, `trace`, `release`, `project-session-manager`, `skill`, `writer-memory`, `ralph-init`, `configure-notifications`, `learn-about-omc` (`trace` is the evidence-driven tracing lane)
</skills>

<team_pipeline>
Stages: `team-plan` → `team-prd` → `team-exec` → `team-verify` → `team-fix` (loop).
Fix loop bounded by max attempts. `team ralph` links both modes.
</team_pipeline>

<verification>
Verify before claiming completion. Size appropriately: small→haiku, standard→sonnet, large/security→opus.
If verification fails, keep iterating.
</verification>

<execution_protocols>
Broad requests: explore first, then plan. 2+ independent tasks in parallel. `run_in_background` for builds/tests.
Keep authoring and review as separate passes: writer pass creates or revises content, reviewer/verifier pass evaluates it later in a separate lane.
Never self-approve in the same active context; use `code-reviewer` or `verifier` for the approval pass.
Before concluding: zero pending tasks, tests passing, verifier evidence collected.
</execution_protocols>

<commit_protocol>
Use git trailers to preserve decision context in every commit message.
Format: conventional commit subject line, optional body, then structured trailers.

Trailers (include when applicable — skip for trivial commits like typos or formatting):
- `Constraint:` active constraint that shaped this decision
- `Rejected:` alternative considered | reason for rejection
- `Directive:` warning or instruction for future modifiers of this code
- `Confidence:` high | medium | low
- `Scope-risk:` narrow | moderate | broad
- `Not-tested:` edge case or scenario not covered by tests
</commit_protocol>

<!-- OMC:END -->

---

<!-- Source: claude-skills/CLAUDE.md -->

## Claude Skills Library

This repository provides a **comprehensive skills library** for Claude AI and Claude Code — reusable, production-ready skill packages that bundle domain expertise, best practices, analysis tools, and strategic frameworks.

**Current Scope:** 205 production-ready skills across 9 domains with 268 Python automation tools, 384 reference guides, 16 agents, and 19 slash commands.

### Navigation Map

| Domain | Location | Focus |
|--------|----------|-------|
| **Agent Development** | `Skills/claude-skills/agents/` | Agent creation, YAML frontmatter |
| **Marketing Skills** | `Skills/claude-skills/marketing-skill/` | Content creation, SEO, ASO, campaigns |
| **Product Team** | `Skills/claude-skills/product-team/` | RICE, OKRs, user stories, UX research |
| **Engineering (Core)** | `Skills/claude-skills/engineering-team/` | Fullstack, AI/ML, DevOps, security |
| **Engineering (POWERFUL)** | `Skills/claude-skills/engineering/` | Agent design, RAG, MCP, CI/CD |
| **C-Level Advisory** | `Skills/claude-skills/c-level-advisor/` | CEO/CTO strategic decision-making |
| **Project Management** | `Skills/claude-skills/project-management/` | Atlassian MCP, Jira/Confluence |
| **RA/QM Compliance** | `Skills/claude-skills/ra-qm-team/` | ISO 13485, MDR, FDA, GDPR |
| **Business & Growth** | `Skills/claude-skills/business-growth/` | Customer success, sales, revenue ops |
| **Finance** | `Skills/claude-skills/finance/` | Financial analysis, DCF, budgeting |

### Skill Package Pattern

Each skill follows this structure:
```
skill-name/
├── SKILL.md              # Master documentation
├── scripts/              # Python CLI tools (no ML/LLM calls)
├── references/           # Expert knowledge bases
└── assets/               # User templates
```

### Key Principles

1. **Skills are products** - Each skill deployable as standalone package
2. **Documentation-driven** - Success depends on clear, actionable docs
3. **Algorithm over AI** - Use deterministic analysis vs LLM calls
4. **Template-heavy** - Provide ready-to-use templates
5. **Platform-specific** - Specific best practices > generic advice

---

<!-- Source: background-agents/AGENTS.md -->

## Background Agents Architecture

Open-Inspect is a background coding agent system that spawns sandboxed dev environments to work on GitHub repositories.

**Architecture - Three tiers connected by WebSockets:**

1. **Web Client** (Next.js on Vercel/Cloudflare) — UI with GitHub OAuth, session dashboard, real-time streaming
2. **Control Plane** (Cloudflare Workers + Durable Objects) — session lifecycle, WebSocket hub, GitHub/auth integration
3. **Data Plane** (Modal, Python) — sandboxed environments running coding agents

**Bot integrations** (all Cloudflare Workers using Hono):
- `slack-bot` — Slack messages → coding sessions
- `github-bot` — PR review assignments and @mention commands
- `linear-bot` — Linear agent webhooks → coding sessions

### Coding Conventions

**Durations and timeouts:**
- Use seconds for Python, milliseconds for TypeScript
- Encode the unit in the name: `timeout_seconds` (Python), `timeoutMs` (TypeScript)
- Define each default value exactly once as a named constant

**Commit messages:**
Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`. Keep the subject under 72 characters.

---

<!-- Source: ruflo/claude/settings.json & CLAUDE.md concepts -->

## RuFlo v3.5: Enterprise AI Orchestration

RuFlo is a comprehensive AI agent orchestration framework that transforms Claude Code into a powerful multi-agent development platform.

### Self-Learning Architecture

```
User → RuFlo (CLI/MCP) → Router → Swarm → Agents → Memory → LLM Providers
                       ↑                          ↓
                       └──── Learning Loop ←──────┘
```

**Key Features:**
- 100+ specialized agents in coordinated swarms
- Self-learning capabilities with Q-Learning Router
- Fault-tolerant consensus (Raft/BFT/Gossip/CRDT)
- Enterprise-grade security with AIDefence
- 130+ Skills, 27 Hooks
- Multiple topologies: mesh, hierarchical, ring, star

### Agent Configuration

```json
{
  "model": "claude-opus-4-6",
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1",
    "CLAUDE_FLOW_V3_ENABLED": "true",
    "CLAUDE_FLOW_HOOKS_ENABLED": "true"
  }
}
```

---

<!-- Source: get-shit-done -->

## GET SHIT DONE (GSD)

A light-weight and powerful meta-prompting, context engineering and spec-driven development system.

**Solves context rot** — the quality degradation that happens as Claude fills its context window.

### Installation

```bash
npx get-shit-done-cc@latest
```

### Key Commands

- `/gsd:help` — Show all available commands
- `/gsd:spec` — Extract project specification
- `/gsd:plan` — Generate implementation plan
- `/gsd:exec` — Execute the plan

### Philosophy

The complexity is in the system, not in your workflow. Behind the scenes: context engineering, XML prompt formatting, subagent orchestration, state management. What you see: a few commands that just work.

---

<!-- Source: superpowers -->

## Superpowers Workflow

Superpowers is a complete software development workflow built on composable "skills".

### The Basic Workflow

1. **brainstorming** - Activates before writing code. Refines rough ideas through questions.
2. **using-git-worktrees** - Creates isolated workspace on new branch.
3. **writing-plans** - Breaks work into bite-sized tasks (2-5 minutes each).
4. **subagent-driven-development** - Dispatches fresh subagent per task with two-stage review.
5. **test-driven-development** - Enforces RED-GREEN-REFACTOR.
6. **requesting-code-review** - Reviews against plan.
7. **finishing-a-development-branch** - Verifies tests, presents options.

### Philosophy

- **Test-Driven Development** - Write tests first, always
- **Systematic over ad-hoc** - Process over guessing
- **Complexity reduction** - Simplicity as primary goal
- **Evidence over claims** - Verify before declaring success

---

<!-- Source: everything-claude-code -->

## Everything Claude Code

Top-notch, well-written resources covering "just about everything" from core engineering domains.

### Available Modules

| Module | Purpose |
|--------|---------|
| `commands/` | Database migration, feature development, language rules |
| `enterprise/` | Enterprise-grade patterns |
| `homunculus/` | Advanced agent patterns |
| `research/` | Research methodologies |
| `rules/` | Code quality rules |
| `skills/` | Specialized capabilities |
| `team/` | Multi-agent coordination |

---

<!-- Source: awesome-claude-code -->

## Awesome Claude Code Resources

A curated list of skills, agents, plugins, hooks, and tools from the Awesome Claude Code repository.

### Featured Projects

- **AgentSys** - Workflow automation with useful plugins, agents, and skills
- **Superpowers** - Core competencies for software engineering
- **Trail of Bits Security Skills** - Professional security-focused skills
- **Claude Scientific Skills** - Research, science, engineering, analysis
- **Context Engineering Kit** - Advanced context engineering techniques

### Resource Categories

- **Agent Skills** 🤖 - Specialized task capabilities
- **Workflows & Knowledge Guides** 🧠 - Process documentation
- **Tooling** 🧰 - IDE integrations, monitors, orchestrators
- **Status Lines** 📊 - Real-time status indicators
- **Hooks** 🪝 - Lifecycle event handlers
- **Slash-Commands** 🔪 - Quick action triggers

---

## 🌐 Lightpanda Browser Integration

For any web browsing, testing, or scraping tasks, **prefer Lightpanda browser** over Chrome/Playwright.

### Why Lightpanda?

- **9x faster execution** than Chrome
- **16x less memory** usage
- **Instant startup**
- Compatible with Playwright, Puppeteer, chromedp through CDP

### Quick Start

```bash
# Install (Linux)
curl -L -o lightpanda https://github.com/lightpanda-io/browser/releases/download/nightly/lightpanda-x86_64-linux && chmod a+x ./lightpanda

# Install (macOS)
curl -L -o lightpanda https://github.com/lightpanda-io/browser/releases/download/nightly/lightpanda-aarch64-macos && chmod a+x ./lightpanda

# Start CDP server
./lightpanda serve --host 127.0.0.1 --port 9222
```

### Usage with Puppeteer

```javascript
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.connect({
  browserWSEndpoint: "ws://127.0.0.1:9222",
});

const page = await browser.newPage();
await page.goto('https://example.com');
```

See: `Tools/browser/README.md` for full documentation.

---

## 🧠 Memory Systems

This repository includes multiple memory systems for persistent context:

### Claude-Mem
Persistent memory compression system for Claude Code.
- Automatic context preservation across sessions
- Semantic summaries and search
- Progressive disclosure with token cost visibility

### Supermemory
State-of-the-art memory and context engine.
- #1 on LongMemEval, LoCoMo, and ConvoMem benchmarks
- Automatic fact extraction and user profiles
- Hybrid search (RAG + Memory)

### OpenViking
Context Database for AI Agents (ByteDance).
- Filesystem paradigm for unified context management
- L0/L1/L2 tiered context loading
- Directory recursive retrieval

See: `MEMORY_SETUP.md` for configuration instructions.

---

## 🎨 UI/UX Resources

### Galaxy (Uiverse.io)
3,000+ unique UI elements available in `UI-UX/galaxy/`.

### shadcn/ui
Beautifully designed, customizable React components in `UI-UX/ui/`.

### UI UX Pro Max
161 reasoning rules + 67 styles for AI-generated UIs.

See: `UI-UX/COMBINED_DESIGN_SYSTEM.md` for the master reference.

---

## ⚙️ Git Workflow

**Branch Strategy:** feature → dev → main (PR only)

### Quick Start

```bash
# 1. Always start from dev
git checkout dev && git pull origin dev

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Work and commit (conventional commits)
git commit -m "feat(scope): description"

# 4. Push and create PR to dev
git push origin feature/your-feature-name
gh pr create --base dev
```

### Commit Convention

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `refactor:` - Code change that neither fixes a bug nor adds a feature
- `chore:` - Build process or auxiliary tool changes
- `test:` - Adding missing tests

---

## 🚫 Anti-Patterns to Avoid

- Creating dependencies between skills (keep each self-contained)
- Adding complex build systems or test frameworks (maintain simplicity)
- Generic advice (focus on specific, actionable frameworks)
- LLM calls in scripts (defeats portability and speed)
- Over-documenting file structure (skills are simple by design)
- Deleting original files (only create new combined versions)
- Summarizing or shortening content (only add and expand)

---

## 📚 Additional Resources

- **MASTER_PLAN.md** — Single source of truth for repo organization
- **AUDIT.md** — Complete mapping of all config files
- **ORCHESTRATION.md** — Master guide for orchestration systems
- **MEMORY_SETUP.md** — Memory system configuration
- **Prompts/COMBINED_PROMPTS.md** — All prompts in one file

---

*Combined from: oh-my-claudecode, claude-skills, background-agents, ruflo, get-shit-done, superpowers, everything-claude-code, awesome-claude-code*

**Last Updated:** 2026-04-01
