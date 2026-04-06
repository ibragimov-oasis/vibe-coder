─────────────────────────────────────────────────────────

# System Prompts & Models of AI Tools — How It Works

**Original repo:** https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools
**Stars:** ~30k ⭐
**Category:** Prompts
**Local path in vibe-coder:** Prompts/system-prompts-by-tool/
**License:** Not specified

---

## What it does (plain language for vibe-coders)

The most comprehensive collection of leaked/extracted system prompts from major AI tools — organized by company. Covers Anthropic (Claude Code 2.0, Opus 4.6, Sonnet 4.6), OpenAI (GPT-5, o3, o4-mini, Codex CLI), Google (Gemini 3.1 Pro, Gemini CLI, Antigravity), Cursor, Augment Code, Kiro, Devin AI, Junie, and many more. Includes both prompts and tool definitions (JSON). Continuously updated.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers the full index organized by AI company/tool
Step 2: AI reads `Anthropic/` → finds Claude Code, Opus 4.6, Sonnet 4.6, Claude in Chrome prompts + tools
Step 3: AI reads `OpenAI/` → finds GPT-5, o3, o4-mini, Codex CLI prompts + tools
Step 4: AI reads `Google/` → finds Gemini 3.1 Pro, Gemini CLI, Antigravity, Jules prompts
Step 5: AI reads `Cursor Prompts/` → finds Agent CLI, Agent 2.0, Chat prompts + tools
Step 6: AI reads other company dirs → Augment Code, Kiro, Devin AI, Junie, etc.

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full index of all system prompts by company |
| Anthropic/ | directory | Claude Code 2.0, Opus 4.6, Sonnet 4.6 prompts + tools |
| OpenAI/ | directory | GPT-5, o3, o4-mini, Codex CLI prompts + tools |
| Google/ | directory | Gemini 3.1 Pro, CLI, Antigravity, Jules prompts |
| Cursor Prompts/ | directory | Agent CLI, Agent 2.0, Chat prompts + tools |
| Augment Code/ | directory | Claude 4 Sonnet and GPT-5 agent prompts + tools |
| Kiro/ | directory | Mode classifier, Spec, Vibe prompts |
| Devin AI/ | directory | DeepWiki and main prompts |
| Amp/ | directory | Claude 4 Sonnet and GPT-5 configs |
| Junie/ | directory | JetBrains Junie prompt |
| Emergent/ | directory | Emergent prompts + tools |
| CodeBuddy Prompts/ | directory | Chat and Craft prompts |
| Comet Assistant/ | directory | System prompt + tools |
| Cluely/ | directory | Default and Enterprise prompts |
| LICENSE.md | file | License |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .github/ | VISIBLE_github/ | Funding config |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/19-system-prompts-by-tool/ | Documentation |
| Anthropic/ | COMBINED/prompts/leaked/anthropic/ | Claude system prompts |
| OpenAI/ | COMBINED/prompts/leaked/openai/ | GPT system prompts |
| Google/ | COMBINED/prompts/leaked/google/ | Gemini system prompts |
| Cursor Prompts/ | COMBINED/prompts/leaked/cursor/ | Cursor system prompts |

---

## Key insights for ULTRACAR integration

- **Most comprehensive prompt leak collection** — covers every major AI tool
- **Tool definitions included** — JSON tool schemas for Claude, GPT, Cursor, etc.
- **Continuously updated** — latest: 08/03/2026
- **Google/Antigravity prompts** — includes fast prompt and planning-mode system prompts
- **Historical versions** — tracks prompt evolution across model versions
- **Overlaps with Repo 20 (system_prompts_leaks)** but more tool-focused with JSON schemas
- **Useful for understanding AI patterns** — how major tools structure their system prompts

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_github/ .github/
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
