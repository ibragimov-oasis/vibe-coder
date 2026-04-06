─────────────────────────────────────────────────────────

# Awesome Claude Code — How It Works

**Original repo:** https://github.com/hesreallyhim/awesome-claude-code
**Stars:** 36.3k ⭐
**Category:** Skills
**Local path in vibe-coder:** Skills/awesome-claude-code/
**License:** CC0 1.0 Universal

---

## What it does (plain language for vibe-coders)

Awesome Claude Code is the definitive curated directory of everything built for Claude Code — skills, agents, plugins, hooks, slash-commands, status lines, CLAUDE.md files, alternative clients, and tooling. It's an "awesome list" where each entry is evaluated for quality. Think of it as the app store catalog for Claude Code extensions.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers the full categorized directory of Claude Code resources organized by type (skills, hooks, commands, tooling, etc.)
Step 2: AI reads `.claude/commands/evaluate-repository.md` → learns the evaluation framework for assessing new repositories (security, quality, trust boundaries)
Step 3: AI reads `acc-config.yaml` → learns the automation configuration for managing submissions, badges, and README generation
Step 4: AI reads `THE_RESOURCES_TABLE.csv` → gets structured data on all listed resources with metadata

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Main curated list — categorized directory of 200+ Claude Code resources |
| .claude/commands/evaluate-repository.md | config/skill | Claude Code slash command for evaluating new repository submissions |
| .github/ISSUE_TEMPLATE/config.yml | config | GitHub issue template configuration |
| .github/ISSUE_TEMPLATE/recommend-resource.yml | config | Template for recommending new resources |
| .github/ISSUE_TEMPLATE/repository-enhancement.yml | config | Template for suggesting enhancements |
| .github/PULL_REQUEST_TEMPLATE.md | config | Pull request template for submissions |
| .github/workflows/README.md | Documentation | Explains the CI/CD workflow system |
| .github/workflows/check-repo-health.yml | config | Checks health of listed repositories |
| .github/workflows/ci.yml | config | Main CI pipeline |
| .github/workflows/close-resource-pr.yml | config | Auto-closes resource PRs |
| .github/workflows/close-resource-prs.yml | config | Batch close resource PRs |
| .github/workflows/handle-resource-submission-commands.yml | config | Handles submission command workflows |
| .github/workflows/notify-on-merge.yml | config | Notification on merge |
| .github/workflows/submission-enforcement-v2.yml | config | Enforces submission standards |
| .github/workflows/update-github-release-data.yml | config | Updates release metadata |
| .github/workflows/update-repo-ticker.yml | config | Updates the repo ticker SVG |
| .github/workflows/validate-links.yml | config | Validates all links in README |
| .github/workflows/validate-new-issue.yml | config | Validates new issue submissions |
| .gitignore | config | Git ignore rules |
| .pre-commit-config.yaml | config | Pre-commit hook configuration |
| .python-version | config | Python version specification |
| LICENSE | Documentation | CC0 1.0 Universal license |
| Makefile | script | Build automation for README generation |
| THE_RESOURCES_TABLE.csv | data | Structured CSV of all resources with metadata |
| acc-config.yaml | config | Main configuration for the awesome list automation |
| README_ALTERNATIVES/ | directory | Alternative views of the list (flat, by category, by date, etc.) |
| assets/ | directory | Badge SVGs, screenshots, social images |

---

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .claude/ | VISIBLE_claude/ | Claude Code commands — contains evaluate-repository.md |
| .github/ | VISIBLE_github/ | GitHub workflows — 12 CI/CD pipelines for managing submissions |
| .gitignore | VISIBLE_gitignore | Git ignore rules |
| .pre-commit-config.yaml | VISIBLE_pre-commit-config.yaml | Pre-commit hook configuration |
| .python-version | VISIBLE_python-version | Python version pinning |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/12-awesome-claude-code/ | Documentation — main resource directory |
| .claude/commands/evaluate-repository.md | COMBINED/commands/evaluation/ | Slash command for repo evaluation |
| THE_RESOURCES_TABLE.csv | COMBINED/REPO_DOCS/12-awesome-claude-code/ | Structured resource data |
| acc-config.yaml | COMBINED/REPO_DOCS/12-awesome-claude-code/ | Configuration reference |
| README_ALTERNATIVES/ | COMBINED/REPO_DOCS/12-awesome-claude-code/alternatives/ | Alternative list views |

---

## Key insights for ULTRACAR integration

- This is a **meta-resource** — it doesn't provide skills itself, but catalogs 200+ resources across skills, hooks, commands, tooling, workflows, CLAUDE.md files, and clients
- The `evaluate-repository.md` command is valuable as a reusable quality gate for evaluating any Claude Code extension
- `THE_RESOURCES_TABLE.csv` provides machine-readable data that could be used for automated resource discovery
- Categories map directly to COMBINED/ structure: skills, hooks, commands, prompts
- No conflicts with other repos — this is purely a reference/catalog

---

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_claude/ .claude/
mv VISIBLE_github/ .github/
mv VISIBLE_gitignore .gitignore
mv VISIBLE_pre-commit-config.yaml .pre-commit-config.yaml
mv VISIBLE_python-version .python-version
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
