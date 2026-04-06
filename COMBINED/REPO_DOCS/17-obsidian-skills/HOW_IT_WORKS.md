─────────────────────────────────────────────────────────

# Obsidian Skills — How It Works

**Original repo:** https://github.com/kepano/obsidian-skills
**Stars:** ~3k ⭐
**Category:** Skills
**Local path in vibe-coder:** Skills/obsidian-skills/
**License:** MIT

---

## What it does (plain language for vibe-coders)

Agent skills for Obsidian — 5 specialized skills covering Obsidian Flavored Markdown, Bases, JSON Canvas, CLI, and web content extraction via Defuddle. Follows the Agent Skills specification so they work with Claude Code, Codex CLI, and OpenCode. Installable via plugin marketplace, npx, or manual copy. Created by Steph Ango (Obsidian CEO).

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers 5 skills, installation methods (marketplace, npx, manual)
Step 2: AI reads `skills/obsidian-markdown/SKILL.md` → learns Obsidian Flavored Markdown (wikilinks, embeds, callouts, properties)
Step 3: AI reads `skills/obsidian-bases/SKILL.md` → learns Obsidian Bases syntax (views, filters, formulas, summaries)
Step 4: AI reads `skills/json-canvas/SKILL.md` → learns JSON Canvas format (nodes, edges, groups)
Step 5: AI reads `skills/obsidian-cli/SKILL.md` → learns Obsidian CLI interactions (plugin/theme development)
Step 6: AI reads `skills/defuddle/SKILL.md` → learns web content extraction (clean markdown from web pages)

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Overview, installation, skill descriptions |
| .claude-plugin/plugin.json | config | Claude Code plugin manifest |
| .claude-plugin/marketplace.json | config | Marketplace listing metadata |
| skills/obsidian-markdown/SKILL.md | skill | Obsidian Flavored Markdown |
| skills/obsidian-markdown/references/ | directory | Callouts, embeds, properties reference docs |
| skills/obsidian-bases/SKILL.md | skill | Obsidian Bases syntax |
| skills/obsidian-bases/references/ | directory | Functions reference |
| skills/json-canvas/SKILL.md | skill | JSON Canvas file format |
| skills/json-canvas/references/ | directory | Canvas examples |
| skills/obsidian-cli/SKILL.md | skill | Obsidian CLI commands |
| skills/defuddle/SKILL.md | skill | Web content extraction |
| LICENSE | file | MIT license |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .claude-plugin/ | VISIBLE_claude-plugin/ | Plugin manifest and marketplace config |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/17-obsidian-skills/ | Documentation |
| skills/*/SKILL.md | COMBINED/skills/by-domain/obsidian/ | 5 Obsidian-specific skills |
| .claude-plugin/ | COMBINED/REPO_DOCS/17-obsidian-skills/plugin/ | Plugin configuration |

---

## Key insights for ULTRACAR integration

- **Created by Obsidian CEO** (Steph Ango / @kepano) — authoritative source for Obsidian integration
- **Agent Skills spec compliant** — works across Claude Code, Codex CLI, OpenCode without modification
- **Unique in collection** — only repo focused on Obsidian knowledge management
- **Reference docs included** — CALLOUTS.md, EMBEDS.md, PROPERTIES.md, FUNCTIONS_REFERENCE.md, EXAMPLES.md
- **Defuddle integration** — unique web extraction skill that reduces token usage by removing clutter
- **Lightweight** — 5 focused skills vs. hundreds in other repos

---

## How to restore hidden files (for end users)

```bash
# Run this in the local vibe-coder folder to restore original names:
mv VISIBLE_claude-plugin/ .claude-plugin/
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
