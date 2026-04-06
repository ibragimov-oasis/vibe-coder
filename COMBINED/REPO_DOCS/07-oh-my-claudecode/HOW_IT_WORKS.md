─────────────────────────────────────────────────────────

# oh-my-claudecode — How It Works

Original repo: https://github.com/vibe-hacker/oh-my-claudecode
Stars: 5k ⭐
Category: Orchestration / Multi-agent
Local path in vibe-coder: Orchestration/oh-my-claudecode/
License: MIT

## What it does (plain language for vibe-coders)

Like 'Oh My Zsh' but for Claude Code. Offers community plugins, themes, pre-configured roles, and quick-start agent templates to bootstrap project-specific orchestration in seconds.

## How the AI reads this repo (startup sequence)

Step 1: AI initializes its state using `.claude/settings.json` provided by the framework.\nStep 2: AI looks at the active plugins inside `plugins/` (similar to zsh plugins) to inherit extra tools (e.g. AWS cli wrap, github sync).\nStep 3: AI executes tasks rapidly because boilerplate orchestration is already handled by the environment.

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|------------|--------------|

## Hidden config files (CRITICAL)

These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|---------------|--------------------|---------|
| None found | N/A | N/A |

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|-----------------------|-----|
| README.md | COMBINED/REPO_DOCS/07-oh-my-claudecode/ | Documentation |

## Key insights for ULTRACAR integration

- Huge ecosystem. Over 200 plugins available for CLI/Agent interaction.\n- Transforms Claude Code from a base tool into a fully loaded IDE alternative.\n- 'Pre-configured roles' allow fast persona-switching without writing custom prompt files from scratch.

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
```

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md
─────────────────────────────────────────────────────────
