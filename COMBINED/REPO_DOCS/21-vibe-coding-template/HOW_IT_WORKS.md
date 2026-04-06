─────────────────────────────────────────────────────────

# Vibe-Coding Prompt Template — How It Works

**Original repo:** https://github.com/KhazP/vibe-coding-prompt-template
**Stars:** ~3k ⭐
**Category:** Prompts
**Local path in vibe-coder:** Prompts/vibe-coding-template/
**License:** MIT

---

## What it does (plain language for vibe-coders)

A practical 5-step AI workflow for shipping MVPs — from idea validation through deep research, PRD creation, tech design, agent docs generation, to final build. Works with Claude.ai, ChatGPT, Gemini, Cursor, and VS Code. Includes Claude Code skills for automated workflow execution. Used on shipped projects: vibeworkflow.app, moneyvisualiser.com, caglacabaoglu.com, RealDex app.

---

## How the AI reads this repo (startup sequence)

Step 1: AI reads `README.md` → discovers the 5-step workflow (Research → PRD → Tech Design → Agents → Build)
Step 2: AI reads `part1-deepresearch.md` → loads the deep research prompt template
Step 3: AI reads `part2-prd-mvp.md` → loads the PRD generation prompt
Step 4: AI reads `part3-tech-design-mvp.md` → loads the tech design prompt
Step 5: AI reads `part4-notes-for-agent.md` → loads the agent documentation generator
Step 6: AI reads `.claude/skills/*/SKILL.md` → loads 6 Claude Code skills (vibe-research, vibe-prd, vibe-techdesign, vibe-agents, vibe-build, vibe-workflow)

---

## All files and what they do

| File/Folder | What it is | What it does |
|-------------|-----------|--------------|
| README.md | Documentation | Full workflow guide with 5 steps, prerequisites, troubleshooting |
| part1-deepresearch.md | prompt | Deep research prompt — market analysis, competitor check |
| part2-prd-mvp.md | prompt | PRD generation prompt — scope, features, requirements |
| part3-tech-design-mvp.md | prompt | Tech stack selection and architecture prompt |
| part4-notes-for-agent.md | prompt | Agent docs generator (AGENTS.md, MEMORY.md) |
| .claude/skills/ | directory | 6 Claude Code skills for automated workflow |
| .claude/hooks/hooks.json | config | Claude Code hooks configuration |
| templates/ | directory | AGENTS.md, MEMORY.md, REVIEW-CHECKLIST.md templates |
| templates/agent_docs/ | directory | product_requirements.md, project_brief.md, tech_stack.md, testing.md |
| docs/ | directory | claude-agent-teams.md, cursor-cloud-agents.md |
| CHANGELOG.md | Documentation | Version history |

---

## Hidden config files (CRITICAL)

| Original name | Renamed locally to | Purpose |
|--------------|-------------------|---------| 
| .claude/ | VISIBLE_claude/ | Skills, hooks, settings |
| .github/ | VISIBLE_github/ | Code of conduct, contributing, funding, issue/PR templates, security |

---

## Routing — where each file belongs in COMBINED/

| File/Folder | COMBINED/ destination | Why |
|-------------|----------------------|-----|
| README.md | COMBINED/REPO_DOCS/21-vibe-coding-template/ | Documentation |
| part1-4 prompts | COMBINED/prompts/templates/vibe-coding/ | 4 structured workflow prompts |
| .claude/skills/ | COMBINED/skills/by-domain/vibe-workflow/ | 6 vibe-coding skills |
| templates/ | COMBINED/prompts/templates/vibe-coding/ | Agent doc templates |

---

## Key insights for ULTRACAR integration

- **Complete MVP workflow** — from idea → shipped product in 5 steps
- **Battle-tested** — used on 4+ real shipped projects
- **Claude Code skills** — 6 skills automate the workflow inside Claude Code
- **Templates included** — ready-to-use AGENTS.md, MEMORY.md, REVIEW-CHECKLIST.md
- **Hooks** — Claude Code hooks for workflow automation
- **Can be used as bootstrap** — start any new project with this template
- **Multi-platform** — works with Claude Code, Cursor, ChatGPT, Gemini, VS Code

---

## How to restore hidden files (for end users)

```bash
mv VISIBLE_claude/ .claude/
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
