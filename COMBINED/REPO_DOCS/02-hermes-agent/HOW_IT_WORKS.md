# Hermes Agent — How It Works

**Original repo:** https://github.com/NousResearch/hermes-agent
**Stars:** 21k ⭐
**Category:** Agents / Orchestration
**Local path in vibe-coder:** COMBINED/orchestration/core-hermes/
**License:** MIT

---

## What it does (plain language for vibe-coders)
Hermes is a self-improving AI agent that learns from experience and remembers across sessions. It's not tied to your laptop — run it on a $5 VPS, talk to it from Telegram while it works on a cloud server. It creates skills from complex tasks, improves them during use, searches its own past conversations, and builds a deepening model of who you are. You can use any LLM provider (200+ models via OpenRouter, Nous Portal, OpenAI, etc.) and switch instantly with no code changes. Talk to it via CLI, Telegram, Discord, Slack, WhatsApp, Signal, or Email.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **README.md** → learns the self-learning architecture (creates skills from experience, improves skills during use, searches past conversations), platform-agnostic deployment (VPS/GPU/serverless), multi-interface support (CLI/Telegram/Discord/Slack/WhatsApp/Signal/Email)
Step 2: AI reads **AGENTS.md** → learns project structure, agent loop architecture, key classes, development setup, code style conventions
Step 3: AI reads **website/docs/getting-started/quickstart.md** → learns installation, setup wizard, first conversation workflow
Step 4: AI reads **website/docs/user-guide/cli.md** → learns CLI commands, keybindings, personalities, sessions
Step 5: AI reads **website/docs/user-guide/features/skills.md** → learns skill system (procedural memory, Skills Hub, skill creation)
Step 6: AI reads **website/docs/user-guide/features/memory.md** → learns persistent memory system, user profiles, Honcho dialectic user modeling
Step 7: AI reads **cli-config.yaml.example** → learns full configuration schema with all options

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Main introduction, features, quick install, migration from OpenClaw |
| AGENTS.md | Agent architecture | Project structure, agent loop, key classes, architecture diagrams |
| RELEASE_v0.X.0.md | Release notes | Changelog for each major version |
| cli-config.yaml.example | Configuration template | Full example config with all available options |
| agent/ | Python package | Core agent loop, conversation manager, message handlers |
| cli/ | Python package | Terminal UI with multiline editing, slash-command autocomplete, conversation history |
| acp_adapter/ | Python package | Adapter for Anthropic Computer Protocol integration |
| acp_registry/ | Python package | Registry for ACP tools and toolsets |
| configs/ | Configuration | Default configs and templates |
| cron/ | Python package | Built-in cron scheduler for scheduled tasks |
| data/ | Data files | Default personalities, prompt templates |
| tests/ | Test suite | Pytest test suite for all components |
| website/ | Documentation | Docusaurus documentation site (hermes-agent.nousresearch.com) |
| environments/ | Python package | Terminal backends (local, Docker, SSH, Daytona, Singularity, Modal) |
| scripts/ | Shell scripts | Install script, update script, migration utilities |
| _github/ | GitHub config | CI workflows, issue templates (renamed from .github/) |
| _env.example | Environment template | Example environment variables (renamed from .env.example) |
| _gitignore | Git ignore | Files to ignore in git (renamed from .gitignore) |
| _dockerignore | Docker ignore | Files to ignore in Docker builds (renamed from .dockerignore) |
| _envrc | direnv config | Directory environment config (renamed from .envrc) |
| _gitmodules | Git submodules | Submodule configuration (renamed from .gitmodules) |
| deploy-site.yml | GitHub Actions | Deploy documentation site workflow |

---

## Hidden config files (CRITICAL)
These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .github/ | _github/ | GitHub workflows, issue templates |
| .env.example | _env.example | Example environment variables |
| .gitignore | _gitignore | Git ignore rules |
| .dockerignore | _dockerignore | Docker build ignore rules |
| .envrc | _envrc | direnv configuration |
| .gitmodules | _gitmodules | Git submodule configuration |
| .DS_Store | .DS_Store | macOS metadata (kept as-is) |

---

## Routing — where each file belongs in COMBINED/
| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md, AGENTS.md | orchestration/core-hermes/ | Core orchestration system documentation |
| RELEASE_*.md | orchestration/core-hermes/ | Version history |
| agent/, cli/, cron/, environments/ | orchestration/core-hermes/ | Core Python packages |
| acp_adapter/, acp_registry/ | orchestration/core-hermes/ | ACP integration |
| configs/, data/ | orchestration/core-hermes/ | Configuration and data files |
| tests/ | orchestration/core-hermes/tests/ | Test suite |
| website/ | orchestration/core-hermes/website/ | Documentation site source |
| scripts/ | orchestration/core-hermes/scripts/ | Installation and utility scripts |
| cli-config.yaml.example | orchestration/core-hermes/ | Configuration template |
| Skills (user-created) | skills/skills-hermes/ | Hermes-specific skills |
| MCP integration | mcp-servers/mcp-hermes/ | MCP server for Hermes integration |

---

## Key insights for ULTRACAR integration
- **Unique capability:** Only agent with closed learning loop — creates skills from experience, improves them during use, autonomously curates memory
- **Self-improving:** Skills self-improve during execution, agent nudges itself to persist knowledge
- **Cross-session recall:** FTS5 session search with LLM summarization, Honcho dialectic user modeling
- **Platform-agnostic deployment:** Runs on $5 VPS, GPU cluster, or serverless (Daytona, Modal) with hibernation/wake-on-demand
- **Multi-interface:** CLI (full TUI), Telegram, Discord, Slack, WhatsApp, Signal, Email — all from single gateway process
- **Model-agnostic:** 200+ models via OpenRouter, Nous Portal, OpenAI, z.ai/GLM, Kimi/Moonshot, MiniMax, or custom endpoints — switch with `hermes model`
- **Six terminal backends:** local, Docker, SSH, Daytona, Singularity, Modal
- **Scheduled automations:** Built-in cron scheduler with delivery to any platform
- **Delegates and parallelizes:** Spawn isolated subagents for parallel workstreams
- **Research-ready:** Batch trajectory generation, Atropos RL environments, trajectory compression
- **agentskills.io compatible:** Skills follow open standard
- **OpenClaw migration:** Auto-imports settings, memories, skills, API keys from OpenClaw
- **Voice support:** Voice memo transcription
- **MCP integration:** Connect any MCP server for extended capabilities
- **Context files:** Project context that shapes every conversation
- **Installation:** One-line curl installer handles Python, Node.js, dependencies
- **Conflicts:** None identified — complementary to other orchestration systems
- **Special setup:** Requires Python 3.11+, Node.js (handled by installer), optional Telegram/Discord/Slack API keys for messaging

---

## How to restore hidden files (for end users)
```bash
# Run this in the local vibe-coder folder to restore original names:
cd COMBINED/orchestration/core-hermes/
mv _github/ .github/
mv _env.example .env.example
mv _gitignore .gitignore
mv _dockerignore .dockerignore
mv _envrc .envrc
mv _gitmodules .gitmodules
```

---

## Status
- [x] README read
- [x] File tree fetched (via local copy)
- [x] Hidden files identified (7 files)
- [x] Routing map complete
- [ ] Added to MASTER_INDEX.md
