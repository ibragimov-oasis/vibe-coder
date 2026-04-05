# Background Agents (Open-Inspect) — How It Works

**Original repo:** https://github.com/ColeMurray/background-agents
**Stars:** 1.4k ⭐
**Category:** Orchestration / Agents
**Local path in vibe-coder:** COMBINED/orchestration/core-background-agents/
**License:** MIT

---

## What it does (plain language for vibe-coders)
Open-Inspect is a hosted background coding agent that works while you sleep. You send a prompt, close your laptop, and check the PR in the morning. It's like having an AI developer on call 24/7 — you assign tasks via web interface, Slack, or GitHub PR comments, and the agent works in isolated sandboxes with full dev environments. Multiple people can collaborate on the same session in real-time.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **AGENTS.md** → learns the three-tier architecture (Web Client + Control Plane + Data Plane), package dependencies, coding conventions (seconds for Python, milliseconds for TypeScript), and testing structure
Step 2: AI reads **README.md** → learns security model (single-tenant only, shared GitHub App credentials), commit attribution, multi-provider model support (Anthropic Claude + OpenAI Codex)
Step 3: AI reads **docs/HOW_IT_WORKS.md** → learns session lifecycle, background model (fire-and-forget vs interactive), and what happens when you send a prompt
Step 4: AI reads **packages/control-plane/README.md** → learns WebSocket protocol, D1 schema, API reference
Step 5: AI reads **packages/modal-infra/README.md** → learns sandbox internals, Modal deployment, endpoint URLs

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Explains architecture, security model, getting started |
| AGENTS.md | Agent configuration | Defines three-tier architecture, coding conventions, package dependencies |
| docs/HOW_IT_WORKS.md | Architecture docs | Explains background model, session lifecycle, how prompts are processed |
| docs/GETTING_STARTED.md | Setup guide | Deployment instructions for your own instance |
| docs/AUTOMATIONS.md | Recurring tasks | How to set up scheduled tasks |
| docs/SETUP_GUIDE.md | Practical setup | Local + contributor + deployment paths |
| docs/OPENAI_MODELS.md | Model setup | How to use OpenAI models with ChatGPT subscription |
| packages/shared/ | TypeScript package | Shared types, auth utilities, model definitions |
| packages/control-plane/ | Cloudflare Workers | Session management, WebSocket streaming, GitHub integration |
| packages/web/ | Next.js app | User-facing dashboard, OAuth, real-time UI |
| packages/slack-bot/ | Cloudflare Worker | Slack event handler, session creation |
| packages/github-bot/ | Cloudflare Worker | PR review and @mention webhook handler |
| packages/linear-bot/ | Cloudflare Worker | Linear agent webhook handler |
| packages/modal-infra/ | Python/Modal | Sandbox lifecycle, WebSocket bridge to control plane |
| terraform/ | Infrastructure | Terraform configs for deployment |
| scripts/ | Build scripts | Helper scripts for development |
| ci.yml | GitHub Actions | CI/CD workflow for linting, testing, deployment |
| deploy-web.yml | GitHub Actions | Web app deployment workflow |
| terraform.yml | GitHub Actions | Terraform deployment workflow |
| eslint.config.js | Linting | ESLint configuration |
| package.json | npm config | Monorepo workspace configuration |
| package-lock.json | npm lockfile | Exact dependency versions |

---

## Hidden config files (CRITICAL)
These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .git/ | VISIBLE_git/ | Git repository metadata |
| .gitignore | VISIBLE_gitignore | Files to ignore in git |
| .openinspect/ | VISIBLE_openinspect/ | Repository lifecycle scripts (setup.sh, start.sh) |
| .prettierignore | VISIBLE_prettierignore | Files to ignore in Prettier |
| .prettierrc | VISIBLE_prettierrc | Prettier configuration |
| .vercelignore | VISIBLE_vercelignore | Files to ignore in Vercel deployment |

---

## Routing — where each file belongs in COMBINED/
| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| AGENTS.md | orchestration/core-background-agents/ | Core orchestration system documentation |
| README.md | orchestration/core-background-agents/ | Main documentation |
| docs/ | orchestration/core-background-agents/docs/ | Architecture and setup guides |
| packages/shared/ | orchestration/core-background-agents/packages/shared/ | Shared TypeScript types and utilities |
| packages/control-plane/ | orchestration/core-background-agents/packages/control-plane/ | Cloudflare Workers control plane |
| packages/web/ | orchestration/core-background-agents/packages/web/ | Next.js web interface |
| packages/slack-bot/ | orchestration/core-background-agents/packages/slack-bot/ | Slack integration |
| packages/github-bot/ | orchestration/core-background-agents/packages/github-bot/ | GitHub integration |
| packages/linear-bot/ | orchestration/core-background-agents/packages/linear-bot/ | Linear integration |
| packages/modal-infra/ | orchestration/core-background-agents/packages/modal-infra/ | Python Modal sandbox infrastructure |
| terraform/ | orchestration/workflows-terraform/background-agents/ | Infrastructure as code |
| ci.yml, deploy-web.yml, terraform.yml | orchestration/core-background-agents/ | CI/CD workflows |

---

## Key insights for ULTRACAR integration
- **Unique capability:** Only background agent system that runs independently of your connection — true "fire and forget" workflow
- **Three-tier architecture:** Separates web client (Next.js), control plane (Cloudflare Workers + Durable Objects), and data plane (Modal sandboxes)
- **Single-tenant only:** All users share GitHub App credentials — not safe for multi-tenant deployment
- **Multiplayer sessions:** Multiple users can collaborate in real-time on same session
- **Multi-provider models:** Supports both Anthropic Claude and OpenAI Codex (via ChatGPT subscription)
- **Repository lifecycle scripts:** Repos can define .openinspect/setup.sh and .openinspect/start.sh for custom initialization
- **Integration points:** Web interface, Slack bot, GitHub PR comments, Linear webhooks
- **Coding conventions:** Seconds for Python, milliseconds for TypeScript; encode units in variable names; conventional commits
- **Testing:** Vitest for TypeScript, pytest for Python; control-plane has both unit (Node) and integration (workerd) tests
- **Conflicts:** None identified — this is a standalone orchestration system
- **Special setup:** Requires Cloudflare Workers, Modal account, GitHub App installation, optional Vercel or Cloudflare Pages for web app

---

## How to restore hidden files (for end users)
```bash
# Run this in the local vibe-coder folder to restore original names:
cd COMBINED/orchestration/core-background-agents/
mv VISIBLE_git/ .git/
mv VISIBLE_gitignore .gitignore
mv VISIBLE_openinspect/ .openinspect/
mv VISIBLE_prettierignore .prettierignore
mv VISIBLE_prettierrc .prettierrc
mv VISIBLE_vercelignore .vercelignore
```

---

## Status
- [x] README read
- [x] File tree fetched (via local copy)
- [x] Hidden files identified (6 files)
- [x] Routing map complete
- [ ] Added to MASTER_INDEX.md
