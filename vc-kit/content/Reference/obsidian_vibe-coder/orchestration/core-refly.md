---
title: "Orchestration: Refly (Skills Builder)"
tags:
  - domain/orchestration
  - domain/skills
  - artifact/system
  - status/active
  - source/combined
aliases:
  - refly
  - skills builder
  - visual workflow skills
created: 2026-04-18
type: system-note
source: "../.claude/orchestration/core-refly/"
---

# Orchestration: Refly (Skills Builder)

> **Источник:** `../.claude/orchestration/core-refly/`

## Описание

Visual workflow builder → исполняемый skill. Экспорт в Claude/Cursor/MCP. Создан для превращения воркфлоу в переиспользуемые skills.

## Процесс

```
1. Визуальный дизайн воркфлоу в Refly UI
2. Тестирование воркфлоу
3. Экспорт как:
   - Claude Code skill (SKILL.md)
   - Cursor rule
   - MCP tool
```

## Связь с Hermes

Hermes (Step 2 пайплайна) сохраняет паттерны → Refly визуализирует → skill файлы.

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Обзор навыков:** [[combined/Skills Overview]]
- **Hermes:** [[orchestration/core-hermes]]
- **Mega-агент:** [[agents/mega-orchestrator]]

## См. также

- [[orchestration/core-taskmaster]] — управление задачами
- [[obsidian-skills/obsidian-markdown]] — формат SKILL.md

## 🔗 Связи

- [[MOC - Orchestration]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

