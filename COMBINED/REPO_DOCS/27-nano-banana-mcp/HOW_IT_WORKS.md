─────────────────────────────────────────────────────────

# Nano Banana 2 MCP — How It Works

**Original repo:** https://github.com/daveremy/nano-banana-2-mcp
**Stars:** ~500 ⭐
**Category:** Tools
**Local path in vibe-coder:** Tools/nano-banana-mcp/
**License:** MIT

---

## What it does (plain language for vibe-coders)

MCP server for Google Gemini image generation. Upgraded for Nano Banana 2 (gemini-3.1-flash-image-preview). Features: resolution control (1K–4K), aspect ratio support, thinking modes (minimal/high), multiple image variations (1-4 per call), file-path-only mode (no base64 overflow), security hardening. Three tools: generate_image, edit_image, continue_editing. Installable as Claude Code plugin or via npx.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers tools (generate_image, edit_image, continue_editing), installation
Step 2: AI reads `.claude-plugin/plugin.json` → understands Claude Code plugin manifest
Step 3: AI reads `skills/generate-image/SKILL.md` → loads the image generation skill
Step 4: AI reads `src/index.ts` → understands the MCP server implementation
Step 5: AI reads `CHANGELOG.md` → tracks version history and feature additions

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full guide — tools, parameters, installation |
| .claude-plugin/plugin.json | config | Claude Code plugin manifest |
| .claude-plugin/marketplace.json | config | Marketplace listing |
| skills/generate-image/SKILL.md | skill | Image generation skill definition |
| src/index.ts | source | MCP server implementation (TypeScript) |
| src/version.ts | source | Version management |
| package.json | config | npm package configuration |
| tsconfig.json | config | TypeScript configuration |
| scripts/release.sh | script | Release automation |
| test/smoke.test.ts | test | Smoke tests |
| CHANGELOG.md | Documentation | Version history |
| CONTRIBUTING.md | Documentation | Contribution guidelines |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .claude-plugin/ | VISIBLE_claude-plugin/ | Plugin manifest and marketplace |
| .github/ | VISIBLE_github/ | CI workflow |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/27-nano-banana-mcp/ | Documentation |
| skills/ | COMBINED/skills/by-domain/image-gen/ | Image generation skill |
| src/ | COMBINED/mcp-servers/nano-banana/ | MCP server source |

---

## Key insights for ULTRACAR integration

- **Gemini image generation** — brings Google's image AI to any MCP-compatible tool
- **Resolution control** — 1K, 2K, 4K output resolution
- **File-path-only mode** — prevents context window overflow from base64 images
- **Claude Code plugin** — installable via `claude plugin add nano-banana-2-mcp`
- **Lightweight** — minimal TypeScript codebase, focused single purpose
- **Skill included** — SKILL.md for image generation guidance
- **Complementary to UI-UX repos (30-32)** — generates images that UI repos can use

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_claude-plugin/ .claude-plugin/
mv VISIBLE_github/ .github/
mv VISIBLE_gitignore .gitignore
```

---

## Status

- [x] README read
- [x] File tree fetched
- [x] Hidden files identified
- [x] Routing map complete
- [x] Added to MASTER_INDEX.md

─────────────────────────────────────────────────────────
