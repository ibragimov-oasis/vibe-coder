---
title: MOC - Skills
tags:
  - domain/skills
  - artifact/moc
  - status/active
aliases:
  - skills map
  - skills library
created: 2026-04-18
type: moc
---

# 🗺️ MOC — Skills

> **Map of Content** для домена `Skills`.
> 3,000+ навыков в 24 категориях. Все в `COMBINED/skills/`.

## 📚 Библиотека навыков по категориям

| Категория | Заметка | Описание |
|-----------|---------|----------|
| `skills-claude/karpathy/` | [[skills/skills-claude-karpathy]] | 4 принципа Karpathy |
| `skills-claude/best-practice/` | [[skills/skills-claude-best-practice]] | 69 Claude Code tips |
| `skills-development/` | [[skills/skills-development]] | TDD, triage, git-guardrails (Matt Pocock 20) |
| `skills-planning/` | [[skills/skills-planning]] | write-a-prd, prd-to-plan, grill-me (Matt Pocock) |
| `skills-ruflo/` | [[skills/skills-ruflo]] | Enterprise orchestration |
| `skills-everything-cc/` | [[skills/skills-everything-cc]] | Enterprise patterns |
| `skills-superpowers/` | [[skills/skills-superpowers]] | TDD, systematic dev |
| `skills-design/` | [[skills/skills-design]] | UI/UX design + Impeccable + Taste-skill + Stitch |
| `skills-seo/` | [[skills/skills-seo]] | SEO + SEOMachine (10 agents, 26 skills) |
| `skills-writing/` | [[skills/skills-writing]] | Documentation + edit-article + write-a-skill |
| `skills-research/` | [[skills/skills-research]] | Deep research skills |
| `skills-devops/` | [[skills/skills-devops]] | CI/CD, deployment |
| `skills-hermes/` | [[skills/skills-hermes]] | Self-learning skills |
| `skills-background/` | [[skills/skills-background]] | Async execution |
| `skills-omc/` | [[skills/skills-omc]] | Multi-agent coordination |
| `skills-business/` | [[skills/skills-business]] | Business & growth |
| `skills-data-analysis/` | [[skills/skills-data-analysis]] | Data processing |
| `skills-awesome-claude/` | [[skills/skills-awesome-claude]] | Curated community skills |
| `skills-copilot/` | [[skills/skills-copilot]] | GitHub Copilot skills |
| `skills-antigravity/` | [[skills/skills-antigravity]] | IDE plugin skills |
| `skills-platform/` | [[skills/skills-platform]] | Platform & meta |
| obsidian skills | [[obsidian-skills/obsidian-markdown]] + [[obsidian-skills/obsidian-bases]] | Obsidian vault skills |
| awesome-obsidian | [[reference/awesome-obsidian]] | 500+ plugins, themes, CSS snippets |

## 🔑 Ключевые навыки (must-know)

### Karpathy 4 Principles
`COMBINED/skills/skills-claude/karpathy/`
1. **Think Before Coding** — чётко формулируй задачу
2. **Simplicity First** — минимальный код
3. **Surgical Changes** — трогай только нужное
4. **Goal-Driven Execution** — тесты первыми, цикл до победы

### Matt Pocock Skills (20 навыков)
`COMBINED/skills/skills-planning/` + `skills-development/`
- `write-a-prd` — написать PRD
- `prd-to-plan` — PRD → execution plan
- `grill-me` — задать уточняющие вопросы
- `tdd` — test-driven development
- `triage-issue` — сортировка issues
- `git-guardrails` — безопасные git операции
- `design-an-interface` — проектировать UI
- `improve-codebase-architecture` — улучшить архитектуру

### Obsidian Skills
`COMBINED/skills/platform/obsidian/` (из new_repos/obsidian-skills)
- `obsidian-markdown` — OFM: wikilinks, embeds, callouts, properties
- `obsidian-bases` — Obsidian Bases (.base) syntax
- `obsidian-cli` — CLI для vault разработки
- `json-canvas` — Canvas файлы
- `defuddle` — Extract markdown из web

## 📦 Как устроен SKILL.md

```yaml
---
name: skill-name
description: Что делает навык
---
# Skill Name
...контент...
```

## Связанные MOC

- [[MOC - Agents]] — Агенты используют навыки
- [[MOC - Orchestration]] — Hermes создаёт навыки
- [[combined/Skills Overview]] — Структура COMBINED/skills
- [[000 - Map of Maps]] — Главная карта
