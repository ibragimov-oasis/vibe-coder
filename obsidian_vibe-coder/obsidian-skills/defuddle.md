---
title: "Skill: Defuddle — Web Content Extraction"
tags:
  - domain/skills
  - domain/mcp
  - artifact/skill
  - status/active
  - source/obsidian-skills
aliases:
  - defuddle
  - web extraction skill
  - defuddle skill
created: 2026-04-18
type: skill-mirror
source: "../new_repos/obsidian-skills/skills/defuddle/SKILL.md"
---

# Skill: Defuddle — Web Content Extraction

> **Источник:** `../new_repos/obsidian-skills/skills/defuddle/SKILL.md`
> **Пакет:** `npm install -g defuddle`

## Назначение

Извлекает чистый Markdown-контент из веб-страниц, удаляя навигацию, рекламу и мусор. Экономит токены по сравнению с WebFetch.

**Когда использовать:** любой URL для чтения/анализа (документация, статьи, блог-посты).
**Когда НЕ использовать:** URL заканчивается на `.md` — тогда лучше WebFetch напрямую.

## Основная команда

```bash
defuddle parse <url> --md
```

**Сохранить в файл:**
```bash
defuddle parse <url> --md > output.md
```

## Интеграция с vault

Этот скилл идеально подходит для исследований: результат Defuddle → сразу в заметку vault.

## Связи

- **Родительский MOC:** [[MOC - Skills]]
- **Обзор навыков:** [[combined/Skills Overview]]
- **Ресёрч агент:** [[agents/mega-researcher]]

## См. также

- [[obsidian-skills/obsidian-markdown]] — работа с markdown в vault
- [[obsidian-skills/obsidian-cli]] — CLI-инструменты для vault
