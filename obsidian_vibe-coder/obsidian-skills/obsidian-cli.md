---
title: "Skill: Obsidian CLI — Vault Command Line"
tags:
  - domain/skills
  - domain/obsidian
  - artifact/skill
  - status/active
  - source/obsidian-skills
aliases:
  - obsidian cli
  - obsidian command line
  - vault cli
created: 2026-04-18
type: skill-mirror
source: "../new_repos/obsidian-skills/skills/obsidian-cli/SKILL.md"
---

# Skill: Obsidian CLI — Vault Command Line

> **Источник:** `../new_repos/obsidian-skills/skills/obsidian-cli/SKILL.md`
> **Требование:** Obsidian должен быть открыт.
> **Справка:** `obsidian help` или https://help.obsidian.md/cli

## Назначение

Взаимодействие с vault через командную строку: чтение, создание, поиск заметок, управление свойствами. Также поддерживает разработку и отладку плагинов.

## Основные команды

```bash
# Создать заметку
obsidian create name="My Note" content="Hello"

# Поиск
obsidian search query="tag:#domain/agents"

# Прочитать заметку
obsidian read name="Note Name"

# Список задач
obsidian tasks
```

## Применение в vault

- Массовое обновление frontmatter
- Поиск орфанов (заметок без связей)
- Автоматизация аудита vault

## Связи

- **Родительский MOC:** [[MOC - Skills]]
- **Обзор навыков:** [[combined/Skills Overview]]
- **Аудит vault:** [[_audit/COVERAGE_REPORT]]
- **Governance:** [[_governance/VAULT_GOVERNANCE]]

## См. также

- [[obsidian-skills/obsidian-bases]] — базы данных vault
- [[obsidian-skills/obsidian-markdown]] — синтаксис markdown
- [[_governance/NEW_DOC_CHECKLIST]] — чеклист (использует CLI команды)
