# Get Shit Done (GSD) — How It Works

**Original repo:** https://github.com/gsd-build/get-shit-done
**Stars:** 46k ⭐
**Category:** Orchestration / Meta-prompting
**Local path in vibe-coder:** COMBINED/orchestration/core-gsd/
**License:** MIT

---

## What it does (plain language for vibe-coders)
GSD is a meta-prompting and context engineering system that solves "context rot" — the quality degradation that happens as Claude fills its context window. It's lightweight (no enterprise theater), works with 8+ AI platforms (Claude Code, OpenCode, Gemini, Codex, Copilot, Cursor, Windsurf, Antigravity), and gives Claude everything it needs to build reliably. Behind the scenes: XML prompt formatting, subagent orchestration, state management. What you see: `/gsd:spec`, `/gsd:plan`, `/gsd:exec` — just works.

---

## How the AI reads this repo (startup sequence)
Step 1: AI reads **README.md** → learns GSD solves context rot, supports 8+ platforms, lightweight meta-prompting system
Step 2: AI uses `/gsd:help` → sees available commands (spec, plan, exec, etc.)
Step 3: AI uses `/gsd:spec` → extracts project specification
Step 4: AI uses `/gsd:plan` → generates implementation plan
Step 5: AI uses `/gsd:exec` → executes the plan
Step 6: AI reads **docs/** → detailed guides, user guide, advanced features

---

## All files and what they do
| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Main docs in 5 languages (EN, PT-BR, ZH-CN, JA-JP, KO-KR) |
| CHANGELOG.md | Version history | Detailed changelog with all versions |
| SECURITY.md | Security policy | Security reporting guidelines |
| docs/ | Documentation | User guides, advanced features, platform-specific docs |
| get-shit-done/ | Core package | Main GSD implementation |
| bin/ | Scripts | Installation and utility scripts |
| base64scanignore | Security config | Files to ignore in base64 scanning |

---

## Hidden config files (CRITICAL)
These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------|
| .DS_Store | .DS_Store | macOS metadata (kept as-is) |

---

## Routing — where each file belongs in COMBINED/
| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md, CHANGELOG.md, SECURITY.md | orchestration/core-gsd/ | Core documentation |
| docs/ | orchestration/core-gsd/docs/ | Guides and platform docs |
| get-shit-done/, bin/ | orchestration/core-gsd/ | Core implementation |
| GSD commands | commands/commands-gsd/ | Slash commands |

---

## Key insights for ULTRACAR integration
- **Unique capability:** Solves context rot through meta-prompting and context engineering
- **Platform-agnostic:** Works with 8+ AI platforms (Claude Code, OpenCode, Gemini, Codex, Copilot, Cursor, Windsurf, Antigravity)
- **Lightweight:** No enterprise theater, no sprint ceremonies, just effective prompting
- **Spec-driven:** Extract spec → generate plan → execute reliably
- **XML prompt formatting:** Structured prompts for consistent results
- **Subagent orchestration:** Coordinates subagents behind the scenes
- **State management:** Maintains context across sessions
- **One-line install:** `npx get-shit-done-cc@latest`
- **Global or local:** Install to all projects or current project only
- **SDK available:** `--sdk` flag installs GSD SDK CLI for headless execution
- **Trusted by enterprises:** Amazon, Google, Shopify, Webflow engineers use it
- **$GSD token:** Has associated token on Dexscreener
- **Conflicts:** None identified — complements other orchestration systems
- **Special setup:** Node.js/npm only (npx)

---

## How to restore hidden files (for end users)
```bash
# No hidden files renamed (only .DS_Store which is kept as-is)
```

---

## Status
- [x] README read
- [x] File tree fetched (via local copy)
- [x] Hidden files identified (1 file)
- [x] Routing map complete
- [ ] Added to MASTER_INDEX.md
