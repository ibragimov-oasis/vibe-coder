# GitHub Copilot Instructions — Vibe-Coder Arsenal

> **Combined Copilot Configuration**
> This file merges copilot-instructions.md content from multiple repositories.
> Last updated: 2026-04-01

---

## Repository Overview

This is the **Vibe-Coder Arsenal** — a comprehensive toolkit containing 31 repositories worth of AI-powered development resources. When working in this repository, you have access to:

- **1,326+ skills** from Antigravity Awesome Skills
- **205+ skills** from Claude Skills library
- **Multi-agent orchestration** systems (RuFlo, DeerFlow, GSD, OMC, Superpowers)
- **Persistent memory** systems (Claude-Mem, Supermemory, OpenViking)
- **3,000+ UI elements** from Galaxy/Uiverse
- **Production-ready prompts** and templates

---

<!-- Source: awesome-copilot-main/_github/copilot-instructions.md -->

## Code Review Guidelines

The following instructions apply when performing a code review.

### README Updates

- [ ] The new file should be added to the `docs/README.<type>.md`.

### Prompt File Guide

**Only apply to files that end in `.prompt.md`**

- [ ] The prompt has markdown front matter.
- [ ] The prompt has an `agent` field specified of either `agent`, `ask`, or `Plan`.
- [ ] The prompt has a `description` field.
- [ ] The `description` field is not empty.
- [ ] The file name is lower case, with words separated by hyphens.
- [ ] Encourage the use of `tools`, but it's not required.
- [ ] Strongly encourage the use of `model` to specify the model that the prompt is optimised for.
- [ ] Strongly encourage the use of `name` to set the name for the prompt.

### Instruction File Guide

**Only apply to files that end in `.instructions.md`**

- [ ] The instruction has markdown front matter.
- [ ] The instruction has a `description` field.
- [ ] The `description` field is not empty.
- [ ] The file name is lower case, with words separated by hyphens.
- [ ] The instruction has an `applyTo` field that specifies the file or files to which the instructions apply. If they wish to specify multiple file paths they should formatted like `'**.js, **.ts'`.

### Agent File Guide

**Only apply to files that end in `.agent.md`**

- [ ] The agent has markdown front matter.
- [ ] The agent has a `description` field.
- [ ] The `description` field is not empty.
- [ ] The file name is lower case, with words separated by hyphens.
- [ ] Encourage the use of `tools`, but it's not required.
- [ ] Strongly encourage the use of `model` to specify the model that the agent is optimised for.
- [ ] Strongly encourage the use of `name` to set the name for the agent.

### Agent Skills Guide

**Only apply to folders in the `skills/` directory**

- [ ] The skill folder contains a `SKILL.md` file.
- [ ] The SKILL.md has markdown front matter.
- [ ] The SKILL.md has a `name` field.
- [ ] The `name` field value is lowercase with words separated by hyphens.
- [ ] The `name` field matches the folder name.
- [ ] The SKILL.md has a `description` field.
- [ ] The `description` field is not empty, at least 10 characters, and maximum 1024 characters.
- [ ] The `description` field value is wrapped in single quotes.
- [ ] The folder name is lower case, with words separated by hyphens.
- [ ] Any bundled assets (scripts, templates, data files) are referenced in the SKILL.md instructions.
- [ ] Bundled assets are reasonably sized (under 5MB per file).

### Plugin Guide

**Only apply to directories in the `plugins/` directory**

- [ ] The plugin directory contains a `.github/plugin/plugin.json` file.
- [ ] The plugin directory contains a `README.md` file.
- [ ] The plugin.json has a `name` field matching the directory name.
- [ ] The plugin.json has a `description` field.
- [ ] The `description` field is not empty.
- [ ] The directory name is lower case, with words separated by hyphens.
- [ ] If `tags` is present, it is an array of lowercase hyphenated strings.
- [ ] If `items` is present, each item has `path` and `kind` fields.
- [ ] The `kind` field value is one of: `prompt`, `agent`, `instruction`, `skill`, or `hook`.
- [ ] The plugin does not reference non-existent files.

---

<!-- Source: deer-flow/_github/copilot-instructions.md -->

## DeerFlow Integration

Use this section when working with DeerFlow components.

### Repository Summary

DeerFlow is a full-stack "super agent harness":
- **Backend**: Python 3.12, LangGraph + FastAPI gateway, sandbox/tool system, memory, MCP integration
- **Frontend**: Next.js 16 + React 19 + TypeScript + pnpm
- **Local dev entrypoint**: root `Makefile` starts backend + frontend + nginx on `http://localhost:2026`

### Runtime Requirements

- Node.js `>=22`
- pnpm (version 10)
- Python `>=3.12`
- `uv` package manager
- `nginx` (for `make dev`)

### Build/Test/Lint Commands

```bash
# Bootstrap and install
make check
make install

# Backend validation
cd backend && make lint && make test

# Frontend validation
cd frontend && pnpm lint && pnpm typecheck
BETTER_AUTH_SECRET=local-dev-secret pnpm build

# Run locally (all services)
make dev
# Unified endpoint: http://localhost:2026
```

### Project Layout

**Backend core:**
- `backend/packages/harness/deerflow/agents/` - lead agent, middleware chain, memory
- `backend/app/gateway/` - FastAPI gateway API
- `backend/packages/harness/deerflow/sandbox/` - sandbox provider + tool wrappers
- `backend/packages/harness/deerflow/subagents/` - subagent registry/execution

**Frontend core:**
- `frontend/src/app/` - Next.js routes/pages
- `frontend/src/components/` - UI components
- `frontend/src/core/` - app logic (threads, tools, API, models)

---

<!-- Source: oh-my-claudecode/github_FOLDER_TO_COPY/CLAUDE.md concepts -->

## oh-my-claudecode Integration

When working with OMC-enabled projects:

### Agent Catalog

Available agents (prefix with `oh-my-claudecode:`):
- `explore` (haiku) - Quick exploration
- `analyst` (opus) - Deep analysis
- `planner` (opus) - Planning
- `architect` (opus) - Architecture decisions
- `debugger` (sonnet) - Debugging
- `executor` (sonnet) - Code execution
- `verifier` (sonnet) - Verification
- `security-reviewer` (sonnet) - Security review
- `code-reviewer` (opus) - Code review
- `test-engineer` (sonnet) - Test creation

### Team Mode

```bash
/team 3:executor "fix all TypeScript errors"
```

Team pipeline stages: `team-plan` → `team-prd` → `team-exec` → `team-verify` → `team-fix`

---

## 🌐 Lightpanda Browser

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

See: `COMBINED/mcp-servers/mcp-lightpanda/README.md` for full documentation.

---

## Repository Structure

```
vibe-coder/
├── .claude/                 # Claude Code config
├── .github/                 # ← You are here (GitHub Copilot config)
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

## Key Resources

| Resource | Location | Description |
|----------|----------|-------------|
| Master Plan | `MASTER_PLAN.md` | Single source of truth for repo organization |
| Audit Report | `AUDIT.md` | Complete mapping of all config files |
| Orchestration Guide | `ORCHESTRATION.md` | Master guide for all orchestration systems |
| Memory Setup | `MEMORY_SETUP.md` | Memory system configuration |
| Combined Prompts | `Prompts/COMBINED_PROMPTS.md` | All prompts in one file |
| Design System | `UI-UX/COMBINED_DESIGN_SYSTEM.md` | Master UI/UX reference |

---

## Coding Standards

### Git Workflow

- **Branch Strategy:** feature → dev → main (PR only)
- **Commit Format:** Conventional commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`)

### File Naming

- Use lowercase with hyphens for file names
- Skill folders match their `name` field
- Commands end with `.md`

### Documentation

- Every skill has a `SKILL.md`
- Reference guides go in `references/` subdirectories
- Templates go in `assets/` subdirectories

---

## Anti-Patterns to Avoid

1. **Don't delete original files** — Only create new combined versions
2. **Don't summarize or shorten** — Only add and expand
3. **Don't create dependencies between skills** — Keep each self-contained
4. **Don't add complex build systems** — Maintain simplicity
5. **Don't use generic advice** — Focus on specific, actionable frameworks
6. **Don't call LLMs in scripts** — Defeats portability and speed

---

*Combined from: awesome-copilot-main, deer-flow, oh-my-claudecode, get-shit-done, superpowers, vibe-coding-prompt-template*

**Last Updated:** 2026-04-01
