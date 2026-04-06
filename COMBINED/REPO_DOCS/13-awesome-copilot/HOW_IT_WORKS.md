─────────────────────────────────────────────────────────

# Awesome Copilot — How It Works

**Original repo:** https://github.com/github/awesome-copilot
**Stars:** 28.3k ⭐
**Category:** Skills
**Local path in vibe-coder:** Skills/awesome-copilot-main/
**License:** MIT

---

## What it does (plain language for vibe-coders)

GitHub's official curated collection of agents, instructions, skills, plugins, hooks, workflows, and tools for GitHub Copilot. It includes a full learning hub website with beginner-to-advanced tutorials on Copilot CLI, agents, skills, hooks, MCP servers, and agentic workflows. This is the authoritative Copilot ecosystem reference.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers the full categorized directory of Copilot resources (agents, skills, plugins, hooks, instructions, workflows, tools)
Step 2: AI reads `website/src/content/docs/learning-hub/` → learns comprehensive tutorials on agents, skills, hooks, MCP servers, custom instructions, and agentic workflows
Step 3: AI reads `copilot-instructions.md` → learns the project's own Copilot configuration and coding standards
Step 4: AI reads `workflows/` → discovers operational workflows like relevance-check, daily-issues-report, and OSPO compliance

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Main curated list of Copilot resources |
| .github/copilot-instructions.md | config | Copilot custom instructions for the project |
| .github/workflows/ | config | CI/CD pipelines (build, test, deploy website) |
| .github/ISSUE_TEMPLATE/ | config | Issue templates for submissions |
| .gitignore | config | Git ignore rules |
| .prettierrc | config | Prettier formatting configuration |
| CONTRIBUTING.md | Documentation | Contribution guidelines |
| LICENSE | Documentation | MIT license |
| data/agents.json | data | Structured data of all Copilot agents |
| data/hooks.json | data | Structured data of all Copilot hooks |
| data/instructions.json | data | Structured data of all instruction sets |
| data/plugins.json | data | Structured data of all plugins |
| data/skills.json | data | Structured data of all skills |
| data/tools.json | data | Structured data of all tools |
| data/workflows.json | data | Structured data of all workflows |
| website/ | directory | Full Astro-based learning hub website |
| website/src/content/docs/learning-hub/ | directory | 15+ tutorial documents on Copilot features |
| website/src/content/docs/learning-hub/cli-for-beginners/ | directory | 8-chapter beginner course on Copilot CLI |
| website/src/pages/ | directory | Website pages (agents, hooks, skills, plugins, tools, workflows) |
| workflows/daily-issues-report.md | agent workflow | Daily issues reporting workflow |
| workflows/ospo-contributors-report.md | agent workflow | OSPO contributors report |
| workflows/ospo-org-health.md | agent workflow | OSPO organization health check |
| workflows/ospo-release-compliance-checker.md | agent workflow | Release compliance verification |
| workflows/ospo-stale-repos.md | agent workflow | Stale repository detection |
| workflows/relevance-check.md | agent workflow | Relevance checking for submissions |
| workflows/relevance-summary.md | agent workflow | Relevance summary generation |

---

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .github/ | VISIBLE_github/ | Copilot instructions, CI/CD workflows, issue templates |
| .github/copilot-instructions.md | VISIBLE_github/copilot-instructions.md | Custom Copilot instructions for the project |
| .gitignore | VISIBLE_gitignore | Git ignore rules |
| .prettierrc | VISIBLE_prettierrc | Code formatting configuration |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/13-awesome-copilot/ | Documentation |
| .github/copilot-instructions.md | COMBINED/prompts/system/ | System instructions for Copilot |
| data/*.json | COMBINED/REPO_DOCS/13-awesome-copilot/data/ | Structured resource catalogs |
| workflows/*.md | COMBINED/agents/by-role/copilot-workflows/ | Operational agent workflows |
| website/src/content/docs/learning-hub/ | COMBINED/REPO_DOCS/13-awesome-copilot/learning-hub/ | Tutorial content |

---

## Key insights for ULTRACAR integration

- **Official GitHub repo** — highest authority source for Copilot ecosystem resources
- Contains structured JSON data files for agents, hooks, instructions, plugins, skills, tools, and workflows — machine-readable catalogs
- The learning hub tutorials are excellent reference material for understanding agents, skills, hooks, and MCP servers regardless of which AI tool you use
- `workflows/` folder contains reusable agent workflow definitions (daily reports, compliance checks, etc.)
- Complements awesome-claude-code (Repo 12) — together they cover both major AI coding ecosystems

---

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_github/ .github/
mv VISIBLE_gitignore .gitignore
mv VISIBLE_prettierrc .prettierrc
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
