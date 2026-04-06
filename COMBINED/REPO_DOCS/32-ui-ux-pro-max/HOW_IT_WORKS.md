─────────────────────────────────────────────────────────

# UI UX Pro Max — How It Works

**Original repo:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
**Stars:** ~3k ⭐
**Category:** UI-UX
**Local path in vibe-coder:** UI-UX/ui-ux-pro-max/
**License:** MIT

---

## What it does (plain language for vibe-coders)

An AI skill with 161 reasoning rules and 67 UI styles that provides design intelligence for building professional UI/UX. Generates complete design systems for any project — colors, typography, patterns, layout, effects, anti-patterns, and pre-delivery checklists. v2.0 flagship feature: AI-powered Design System Generator. Supports 18+ platforms: Claude Code, Codex, Cursor, Copilot, Gemini, Windsurf, Kiro, Augment, and more. Includes CLI (`uipro-cli` on npm), Python scripts, and CSV data files covering colors, fonts, icons, styles, stacks, and UX guidelines.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers 161 reasoning rules, 67 UI styles, Design System Generator
Step 2: AI reads `CLAUDE.md` → loads Claude Code system instructions
Step 3: AI reads `.claude/skills/ui-ux-pro-max/SKILL.md` → loads the main UI/UX skill
Step 4: AI reads `.claude/skills/ui-styling/SKILL.md` → loads the UI styling skill
Step 5: AI reads `src/ui-ux-pro-max/data/` → loads CSV data (colors, fonts, icons, styles, stacks, typography, UX guidelines)
Step 6: AI reads `src/ui-ux-pro-max/scripts/` → loads Python scripts (core.py, design_system.py, search.py)

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full guide — Design System Generator, 161 rules, 67 styles, CLI |
| CLAUDE.md | config | Claude Code system instructions |
| .claude/skills/ui-ux-pro-max/ | directory | Main UI/UX Pro Max skill |
| .claude/skills/ui-styling/ | directory | UI styling skill with canvas fonts, references |
| .claude/skills/ui-styling/references/ | directory | shadcn-accessibility, shadcn-components, shadcn-theming, tailwind references |
| .claude/skills/ui-styling/canvas-fonts/ | directory | 40+ embedded Google Fonts (TTF files) |
| .claude/skills/ui-styling/scripts/ | directory | Python scripts (shadcn_add.py, tailwind_config_gen.py) |
| src/ui-ux-pro-max/data/ | directory | CSV data files (colors, fonts, icons, styles, stacks, typography, UX guidelines) |
| src/ui-ux-pro-max/data/stacks/ | directory | Stack-specific data (Angular, Astro, Flutter, Next.js, React, Svelte, Vue, SwiftUI, etc.) |
| src/ui-ux-pro-max/scripts/ | directory | Python core (core.py, design_system.py, search.py) |
| src/ui-ux-pro-max/templates/ | directory | Platform templates (18 JSON files for each AI tool) |
| cli/ | directory | npm CLI tool (uipro-cli) — init, update, uninstall, versions |
| skill.json | config | Skill metadata |
| preview/ | directory | Preview HTML files |
| screenshots/ | directory | Website screenshot |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .claude/ | VISIBLE_claude/ | UI/UX skills, styling skills, canvas fonts, references, scripts |
| .github/ | VISIBLE_github/ | CI/CD, Claude code review, Python package workflows |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/32-ui-ux-pro-max/ | Documentation |
| .claude/skills/ui-ux-pro-max/ | COMBINED/skills/by-domain/ui-ux/ | Main UI/UX skill |
| .claude/skills/ui-styling/ | COMBINED/skills/by-domain/ui-styling/ | UI styling skill with fonts/references |
| CLAUDE.md | COMBINED/prompts/system/ | Claude system instructions |
| src/ui-ux-pro-max/data/ | COMBINED/ui-design/ui-rules/ | Design data (colors, fonts, styles) |

---

## Key insights for ULTRACAR integration

- **Design System Generator** — AI-powered: input project description → get complete design system
- **161 reasoning rules + 67 UI styles** — most comprehensive UI design intelligence
- **18 platform templates** — supports Claude, Codex, Cursor, Copilot, Gemini, Windsurf, Kiro, Augment, etc.
- **Embedded fonts** — 40+ Google Fonts as TTF files in .claude/skills/ui-styling/canvas-fonts/
- **shadcn integration** — references for shadcn accessibility, components, theming
- **Tailwind integration** — tailwind customization and responsive references
- **CLI tool** — `npx uipro-cli init` for quick setup
- **Anti-pattern detection** — pre-delivery checklist prevents common UI mistakes
- **Stack-specific data** — CSV files for React, Next.js, Vue, Svelte, Angular, Flutter, SwiftUI, Three.js, etc.
- **Complementary to Galaxy (Repo 30) and shadcn (Repo 31)** — UUPM provides design intelligence, others provide components

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_claude/ .claude/
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
