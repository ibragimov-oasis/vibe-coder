---
title: "Reference: Claude HUD"
tags:
  - domain/reference
  - artifact/tool
  - status/active
  - source/combined
aliases:
  - claude hud
  - real-time monitoring
  - claude monitoring
created: 2026-04-18
type: reference-note
source: "../COMBINED/reference/claude-hud/"
---

# Reference: Claude HUD

> **Источник:** `../COMBINED/reference/claude-hud/`

## О чём

Real-time мониторинг плагин для Claude Code. Отображает состояние системы в процессе работы.

## Метрики мониторинга

| Панель | Что показывает |
|--------|---------------|
| **Context** | Текущий размер контекста / лимит |
| **Tools** | Активные MCP инструменты |
| **Agents** | Запущенные агенты и их статус |
| **TODOs** | Список pending задач |
| **Cost** | Текущая стоимость сессии |
| **Git status** | Статус репозитория |

## Установка

```bash
# Из COMBINED/reference/claude-hud/
# Следовать README.md
```

## Связи

- **Родительский MOC:** [[MOC - System]]
- **Mega-агент:** [[agents/mega-orchestrator]]
- **Pipeline:** [[root-docs/PIPELINE]]

## Применение

HUD мониторит весь ULTRACAR Pipeline в реальном времени от Step 0 до Done.

## См. также

- [[root-docs/MEMORY_BOOTSTRAP]] — memory bootstrap
- [[combined/Orchestration Overview]] — pipeline overview
