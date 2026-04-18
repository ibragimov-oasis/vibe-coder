---
title: Skills Overview — COMBINED/skills
tags:
  - domain/skills
  - artifact/index
  - status/active
  - source/combined
source: "../COMBINED/skills/"
created: 2026-04-18
type: mirror
aliases:
  - combined skills
  - skills directory
---

# 📄 Skills Overview — COMBINED/skills

> **Тип:** Domain overview | **Источник:** `../COMBINED/skills/`
> **Краткое описание:** Структура директории COMBINED/skills — 3000+ навыков в 24 категориях.

## Структура директории (24 категории)

```
COMBINED/skills/
├── skills-claude/            — Claude-specific + Karpathy + 69 best practices
│   ├── karpathy/             — 4 принципа Karpathy
│   └── best-practice/        — 69 Claude Code tips
├── skills-ruflo/             — Enterprise orchestration
├── skills-everything-cc/     — Enterprise patterns
├── skills-superpowers/       — TDD, systematic dev
├── skills-development/       — TDD, triage, git-guardrails (Matt Pocock)
├── skills-planning/          — write-a-prd, prd-to-plan, grill-me
├── skills-design/            — UI/UX + Impeccable + Taste-skill + Stitch
├── skills-seo/               — SEO + SEOMachine (10 agents, 26 skills)
├── skills-writing/           — Docs + edit-article + write-a-skill
├── skills-research/          — Deep research
├── skills-devops/            — CI/CD, deployment
├── skills-hermes/            — Self-learning
├── skills-deer-flow/         — Research workflows
├── skills-background/        — Async execution
├── skills-omc/               — Multi-agent coordination
├── skills-business/          — Business & growth
├── skills-data-analysis/     — Data processing
├── skills-awesome-claude/    — Curated community skills
├── skills-copilot/           — GitHub Copilot skills
├── skills-antigravity/       — IDE plugin skills
├── skills-platform/          — Platform & meta
└── platform/obsidian/        — Obsidian skills (obsidian-skills repo)
```

## Формат skill файлов

Каждый навык: папка с `SKILL.md`

```yaml
---
name: skill-name
description: Что делает навык
---
# Skill Name
[контент навыка]
```

## Установка навыков

```bash
# Claude Code
# Добавить в /.claude папку vault

# Codex CLI
# Скопировать в ~/.codex/skills

# npx
npx skills add git@github.com:kepano/obsidian-skills.git
```

## Связан с

- [[MOC - Skills]] — родительский хаб
- [[MOC - Orchestration]] — Hermes создаёт навыки
- [[root-docs/AGENTS]] — агенты используют навыки
