─────────────────────────────────────────────────────────

# Claude-Mem — How It Works

**Original repo:** https://github.com/thedotmack/claude-mem
**Stars:** ~3k ⭐
**Category:** Tools
**Local path in vibe-coder:** Tools/claude-mem/
**License:** AGPL-3.0

---

## What it does (plain language for vibe-coders)

Persistent memory compression system built for Claude Code. Your AI remembers across sessions with compressed, structured memory. Version 6.5.0. Available in 30+ languages. Node.js 18+. Features animated installer, anti-pattern detection, test audit reporting. Includes Claude Code plugin, Windsurf rules, Copilot instructions, MCP config. Available via npx distribution.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers installation, features, memory compression architecture
Step 2: AI reads `.claude-plugin/CLAUDE.md` → loads Claude Code plugin-specific instructions
Step 3: AI reads `.claude-plugin/plugin.json` → understands plugin manifest
Step 4: AI reads `.claude/commands/anti-pattern-czar.md` → loads anti-pattern detection command
Step 5: AI reads `.claude/skills/CLAUDE.md` → loads Claude Code skills
Step 6: AI reads `.github/copilot-instructions.md` → loads Copilot integration instructions
Step 7: AI reads `.agent/rules/claude-mem-context.md` → loads agent context rules

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full guide — 30+ language translations |
| .claude-plugin/plugin.json | config | Plugin manifest |
| .claude-plugin/marketplace.json | config | Marketplace listing |
| .claude-plugin/CLAUDE.md | config | Claude-specific instructions |
| .claude/commands/ | directory | Anti-pattern-czar command |
| .claude/plans/ | directory | Animated installer plan |
| .claude/reports/ | directory | Test audit reports |
| .claude/settings.json | config | Claude Code settings |
| .claude/skills/ | directory | Claude Code skills |
| .agent/rules/ | directory | Agent context rules |
| .windsurf/rules/ | directory | Windsurf integration rules |
| .github/copilot-instructions.md | config | GitHub Copilot instructions |
| .mcp.json | config | MCP server configuration |
| .plan/ | directory | npx distribution plan |
| docs/i18n/ | directory | 30+ language README translations |
| docs/public/ | directory | Logo, badges, preview GIF |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .claude/ | VISIBLE_claude/ | Commands, plans, reports, settings, skills |
| .claude-plugin/ | VISIBLE_claude-plugin/ | Plugin manifest, marketplace, CLAUDE.md |
| .agent/ | VISIBLE_agent/ | Agent context rules |
| .windsurf/ | VISIBLE_windsurf/ | Windsurf integration rules |
| .github/ | VISIBLE_github/ | CI/CD, copilot instructions, funding, issue templates |
| .mcp.json | VISIBLE_mcp.json | MCP server configuration |
| .plan/ | VISIBLE_plan/ | Distribution planning |
| .gitignore | VISIBLE_gitignore | Git ignore rules |
| .npmignore | VISIBLE_npmignore | npm publish ignore |
| .markdownlint.json | VISIBLE_markdownlint.json | Markdown lint config |
| .translation-cache.json | VISIBLE_translation-cache.json | Translation cache |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/26-claude-mem/ | Documentation |
| .claude/commands/ | COMBINED/commands/claude-mem/ | Anti-pattern detection command |
| .claude/skills/ | COMBINED/skills/by-domain/memory/ | Memory compression skills |
| .mcp.json | COMBINED/mcp-servers/claude-mem/ | MCP configuration |

---

## Key insights for ULTRACAR integration

- **Memory compression** — unique approach to persistent AI memory via compression
- **Multi-platform** — Claude Code plugin + Windsurf rules + Copilot instructions + MCP
- **30+ translations** — most internationally supported tool in the collection
- **Anti-pattern detection** — built-in anti-pattern-czar command
- **npx distributable** — easy installation via npm/npx
- **Complementary to Supermemory (Repo 29) and OpenViking (Repo 24)** — three different approaches to AI memory
- **Node.js 18+** — JavaScript/TypeScript ecosystem
- **AGPL-3.0** — copyleft license, notable for commercial use restrictions

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_claude/ .claude/
mv VISIBLE_claude-plugin/ .claude-plugin/
mv VISIBLE_agent/ .agent/
mv VISIBLE_windsurf/ .windsurf/
mv VISIBLE_github/ .github/
mv VISIBLE_mcp.json .mcp.json
mv VISIBLE_plan/ .plan/
mv VISIBLE_gitignore .gitignore
mv VISIBLE_npmignore .npmignore
mv VISIBLE_markdownlint.json .markdownlint.json
mv VISIBLE_translation-cache.json .translation-cache.json
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
