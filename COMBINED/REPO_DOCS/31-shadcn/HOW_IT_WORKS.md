─────────────────────────────────────────────────────────

# shadcn/ui — How It Works

**Original repo:** https://github.com/shadcn-ui/ui
**Stars:** ~85k ⭐
**Category:** UI-UX
**Local path in vibe-coder:** UI-UX/shadcn/
**License:** MIT

---

## What it does (plain language for vibe-coders)

The most popular open-source React component library. Beautifully designed, customizable components that you copy into your project and own. Not a traditional dependency — you get the source code. Built on Radix UI primitives + Tailwind CSS. Includes buttons, cards, dialogs, forms, tables, navigation, and dozens more. "Open Source. Open Code. Use this to build your own component library."

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers the "open code" philosophy — copy, customize, own
Step 2: AI reads documentation at ui.shadcn.com/docs → learns installation, theming, components
Step 3: AI reads `apps/v4/` → explores the v4 documentation site
Step 4: AI reads `CONTRIBUTING.md` → understands contribution guidelines

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Overview, philosophy, links to docs |
| apps/v4/ | directory | v4 documentation site |
| apps/ | directory | Multiple app variants and documentation |
| CONTRIBUTING.md | Documentation | Contribution guidelines |
| LICENSE.md | file | MIT license |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .github/ | VISIBLE_github/ | CI/CD workflows |
| .gitignore | VISIBLE_gitignore | Git ignore rules |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/31-shadcn/ | Documentation |
| Components | COMBINED/ui-design/ui-components-shadcn/ | React component source code |

---

## Key insights for ULTRACAR integration

- **Most popular React component library** — 85k stars
- **"Open Code" philosophy** — not a dependency, you own the code
- **Radix UI + Tailwind CSS** — built on established primitives
- **v4 is latest** — apps/v4/ contains current documentation
- **Copy-paste model** — components are added to your project, not imported from node_modules
- **Complementary to Galaxy (Repo 30)** — shadcn = React, Galaxy = raw HTML/CSS
- **UI-UX Pro Max (Repo 32) references shadcn** — includes shadcn accessibility, components, theming references
- **Theming system** — CSS variables for customization
- **Accessibility** — built on Radix UI which handles ARIA, keyboard navigation

---

## How to restore hidden files (for end users)

```bash
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
