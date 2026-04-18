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

| Категория | Путь | Описание |
|-----------|------|----------|
| `skills-claude/` | `COMBINED/skills/skills-claude/` | Claude-specific + Karpathy + 69 best practices |
| `skills-claude/karpathy/` | `COMBINED/skills/skills-claude/karpathy/` | 4 принципа Karpathy |
| `skills-claude/best-practice/` | `COMBINED/skills/skills-claude/best-practice/` | 69 Claude Code tips |
| `skills-ruflo/` | `COMBINED/skills/skills-ruflo/` | Enterprise orchestration |
| `skills-everything-cc/` | `COMBINED/skills/skills-everything-cc/` | Enterprise patterns |
| `skills-superpowers/` | `COMBINED/skills/skills-superpowers/` | TDD, systematic dev |
| `skills-development/` | `COMBINED/skills/skills-development/` | TDD, triage, git-guardrails (Matt Pocock) |
| `skills-planning/` | `COMBINED/skills/skills-planning/` | write-a-prd, prd-to-plan, grill-me (Matt Pocock) |
| `skills-design/` | `COMBINED/skills/skills-design/` | UI/UX design + Impeccable + Taste-skill + Stitch |
| `skills-seo/` | `COMBINED/skills/skills-seo/` | SEO + SEOMachine (10 agents, 26 skills) |
| `skills-writing/` | `COMBINED/skills/skills-writing/` | Documentation + edit-article + write-a-skill |
| `skills-research/` | `COMBINED/skills/skills-research/` | Deep research skills |
| `skills-devops/` | `COMBINED/skills/skills-devops/` | CI/CD, deployment |
| `skills-hermes/` | `COMBINED/skills/skills-hermes/` | Self-learning skills |
| `skills-deer-flow/` | `COMBINED/skills/skills-deer-flow/` | Research workflows |
| `skills-background/` | `COMBINED/skills/skills-background/` | Async execution |
| `skills-omc/` | `COMBINED/skills/skills-omc/` | Multi-agent coordination |
| `skills-business/` | `COMBINED/skills/skills-business/` | Business & growth |
| `skills-data-analysis/` | `COMBINED/skills/skills-data-analysis/` | Data processing |
| `skills-awesome-claude/` | `COMBINED/skills/skills-awesome-claude/` | Curated community skills |
| `skills-copilot/` | `COMBINED/skills/skills-copilot/` | GitHub Copilot skills |
| `skills-antigravity/` | `COMBINED/skills/skills-antigravity/` | IDE plugin skills |
| `skills-platform/` | `COMBINED/skills/skills-platform/` | Platform & meta |
| `obsidian/` | `COMBINED/skills/platform/obsidian/` | Obsidian skills |

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
