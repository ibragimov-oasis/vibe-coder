─────────────────────────────────────────────────────────

# Awesome ChatGPT Prompts (prompts.chat) — How It Works

**Original repo:** https://github.com/f/awesome-chatgpt-prompts
**Stars:** ~143k ⭐
**Category:** Prompts
**Local path in vibe-coder:** Prompts/awesome-chatgpt-prompts/
**License:** CC0 1.0

---

## What it does (plain language for vibe-coders)

The world's largest open-source prompt library for AI. 143k+ stars, featured in Forbes, referenced by Harvard and Columbia, most liked dataset on Hugging Face. Works with ChatGPT, Claude, Gemini, Llama, Mistral, and more. Now rebranded as prompts.chat with a full self-hostable Next.js web app, CLI, Claude Code plugin, MCP server, i18n support (30+ languages), and interactive "Prompting for Kids" feature. Created December 2022 — the first prompt library.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers the prompt library, self-hosting, CLI, Claude plugin, MCP server
Step 2: AI reads `PROMPTS.md` → loads the full curated prompt collection
Step 3: AI reads `CLAUDE.md` → loads Claude-specific system instructions
Step 4: AI reads `AGENTS.md` → loads agent orchestration instructions
Step 5: AI reads `.claude/settings.json` → loads Claude Code settings
Step 6: AI reads `prompts.csv` → accesses structured prompt data for programmatic use

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full guide — self-hosting, CLI, MCP, plugin, i18n |
| PROMPTS.md | prompts | The complete curated prompt collection |
| CLAUDE.md | config | Claude Code system instructions |
| AGENTS.md | config | Agent orchestration instructions |
| CLAUDE-PLUGIN.md | Documentation | Claude Code plugin documentation |
| prompts.csv | data | Structured prompt data (CSV) |
| .claude/settings.json | config | Claude Code settings |
| .claude-plugin/ | directory | Claude Code plugin manifest |
| .windsurf/skills/ | directory | Windsurf skills (book-translation, widget-generator) |
| messages/ | directory | 30+ i18n locale files (ar, de, el, en, es, etc.) |
| compose.yml | config | Docker Compose for self-hosting |
| docker/ | directory | Dockerfile and entrypoint for containerized deployment |
| SELF-HOSTING.md | Documentation | Self-hosting guide |
| DOCKER.md | Documentation | Docker deployment guide |
| SECURITY.md | Documentation | Security policy |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .claude/ | VISIBLE_claude/ | Claude Code settings |
| .claude-plugin/ | VISIBLE_claude-plugin/ | Plugin manifest and marketplace |
| .windsurf/ | VISIBLE_windsurf/ | Windsurf skills |
| .github/ | VISIBLE_github/ | CI/CD, issue templates, funding |
| .gitignore | VISIBLE_gitignore | Git ignore rules |
| .commandcode/ | VISIBLE_commandcode/ | CommandCode taste config |
| .entire/ | VISIBLE_entire/ | Entire settings |
| .env.example | VISIBLE_env.example | Environment variable template |
| .vercelignore | VISIBLE_vercelignore | Vercel deploy ignore |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/18-awesome-chatgpt-prompts/ | Documentation |
| PROMPTS.md | COMBINED/prompts/templates/awesome-chatgpt/ | The full prompt library |
| CLAUDE.md | COMBINED/prompts/system/ | Claude system instructions |
| AGENTS.md | COMBINED/agents/by-role/ | Agent definitions |
| prompts.csv | COMBINED/prompts/templates/awesome-chatgpt/ | Structured prompt data |

---

## Key insights for ULTRACAR integration

- **Highest-starred prompt repo** — 143k stars, the OG prompt library from Dec 2022
- **Now a full web app** — self-hostable Next.js with Docker, MCP server, CLI, Claude plugin
- **30+ languages** — most internationally accessible prompt resource
- **MCP server** — can be used as a remote or local MCP server for any AI tool
- **Claude Code plugin** — installable via marketplace
- **Hugging Face dataset** — available as structured dataset for training
- **Academic citations** — 40+ academic papers reference this repo
- **Windsurf skills** — includes book-translation and widget-generator skills

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_claude/ .claude/
mv VISIBLE_claude-plugin/ .claude-plugin/
mv VISIBLE_windsurf/ .windsurf/
mv VISIBLE_github/ .github/
mv VISIBLE_gitignore .gitignore
mv VISIBLE_commandcode/ .commandcode/
mv VISIBLE_entire/ .entire/
mv VISIBLE_env.example .env.example
mv VISIBLE_vercelignore .vercelignore
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
