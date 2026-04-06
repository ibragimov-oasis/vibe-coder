─────────────────────────────────────────────────────────

# System Prompts Leaks — How It Works

**Original repo:** https://github.com/asgeirtj/system_prompts_leaks
**Stars:** ~10k ⭐
**Category:** Prompts
**Local path in vibe-coder:** Prompts/system-prompts-leaks/
**License:** Not specified

---

## What it does (plain language for vibe-coders)

A curated collection of extracted system prompts, system messages, and developer instructions from popular AI chatbots and coding assistants — ChatGPT (GPT-5.4, 5.3, Codex), Claude (Opus 4.6, Sonnet 4.6, Claude Code), Gemini (3.1 Pro, 3 Flash, CLI), Grok, Perplexity, and more. Organized by company with version history for tracking prompt evolution. Updated regularly with PRs welcome.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `readme.md` → discovers the full index organized by AI company with linked prompts
Step 2: AI reads `Anthropic/` → finds Claude Opus 4.6, Sonnet 4.6, Claude Code, Cowork, Chrome prompts
Step 3: AI reads `OpenAI/` → finds GPT-5.4, 5.3, 5.2, Codex CLI, o3, o4-mini, tools, policies
Step 4: AI reads `Google/` → finds Gemini 3.1 Pro, 3 Flash, CLI, Jules, Diffusion prompts
Step 5: AI reads `Misc/` → finds Notion AI, Warp 2.0, Le-Chat, Kagi, Perplexity prompts
Step 6: AI reads `CONTRIBUTING.md` → understands how to submit new prompt extractions

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| readme.md | Documentation | Full index organized by company with versioned links |
| Anthropic/ | directory | Claude Opus 4.6, Sonnet 4.6, Code, Cowork, Chrome, Excel, styles |
| Anthropic/old/ | directory | Historical Claude prompts (3.7, 4.1, 4.5) |
| Anthropic/raw/ | directory | Raw unformatted prompt extractions |
| OpenAI/ | directory | GPT-5.x, o3, o4-mini, ChatGPT Atlas, tools, policies |
| OpenAI/API/ | directory | API-specific variants (reasoning effort levels) |
| Google/ | directory | Gemini 3.1/3 Pro/Flash, CLI, Jules, Diffusion, Workspace |
| Misc/ | directory | Notion AI, Warp 2.0, Le-Chat, Kagi, Hermes, Qwen, etc. |
| CONTRIBUTING.md | Documentation | Submission guidelines |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .github/ | VISIBLE_github/ | Funding config |
| .gitignore | VISIBLE_gitignore | Git ignore rules |
| .nojekyll | VISIBLE_nojekyll | Disable GitHub Pages Jekyll processing |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| readme.md | COMBINED/REPO_DOCS/20-system-prompts-leaks/ | Documentation |
| Anthropic/ | COMBINED/prompts/leaked/anthropic/ | Claude system prompts (versioned) |
| OpenAI/ | COMBINED/prompts/leaked/openai/ | GPT system prompts (versioned) |
| Google/ | COMBINED/prompts/leaked/google/ | Gemini system prompts |
| Misc/ | COMBINED/prompts/leaked/misc/ | Other AI tool prompts |

---

## Key insights for ULTRACAR integration

- **Version-tracked prompts** — shows evolution from Claude 3.7 → 4.6 and GPT-4o → 5.4
- **Raw extraction included** — Anthropic/raw/ has unformatted prompt data
- **Historical depth** — older versions preserved in /old/ directories
- **Overlaps with Repo 19** but focuses more on clean markdown formatting vs. JSON tool schemas
- **Google Gemini CLI** — useful reference for Gemini CLI integration
- **Misc section unique** — covers Notion AI, Warp 2.0, Hermes, Qwen 3.6+ that Repo 19 doesn't
- **Visualize.md** — Anthropic/visualize.md provides prompt visualization

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_github/ .github/
mv VISIBLE_gitignore .gitignore
mv VISIBLE_nojekyll .nojekyll
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
