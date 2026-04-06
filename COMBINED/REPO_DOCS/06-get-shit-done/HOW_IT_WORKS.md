─────────────────────────────────────────────────────────

# get-shit-done — How It Works

Original repo: https://github.com/mizvekov/get-shit-done
Stars: 46k ⭐
Category: Orchestration / Meta-prompting
Local path in vibe-coder: Orchestration/get-shit-done/
License: GPL-3.0

## What it does (plain language for vibe-coders)

Get Shit Done (GSD) is a highly opinionated, meta-prompting framework built over Claude Code / Aider to forcefully drive agents to 'get things done.' Minimal fluff, maximum action.

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → understands the philosophy and strict context bounds.\nStep 2: AI looks at the system prompts in `docs/` to calibrate its tone and output style.\nStep 3: GSD heavily modifies existing AI tools using local wrappers to enforce zero-tolerance for boilerplate code during generation.

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
| README.md | COMBINED/REPO_DOCS/06-get-shit-done/ | Documentation |

## Key insights for ULTRACAR integration

- This isn't a complex orchestrator but a strict policy engine overlay.\n- Very useful for enforcing 'vibe coding' best practices (e.g. no comments like 'I added the code here').\n- Can be injected as a pre-prompt hook into other orchestrators.

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
