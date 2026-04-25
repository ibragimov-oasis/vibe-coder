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
source: "../.claude/reference/claude-hud/"
---

# Reference: Claude HUD

> **Источник:** `../.claude/reference/claude-hud/`

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
# Из .claude/reference/claude-hud/
# Следовать README.md
```

## Связи

- **Родительский MOC:** [[MOC - System]]
- **Mega-агент:** [[agents/mega-orchestrator]]
- **Pipeline:** [[root-docs/PIPELINE]]

## Применение

HUD мониторит весь Vibe-Coder Pipeline в реальном времени от Step 0 до Done.

## См. также

- [[root-docs/MEMORY_BOOTSTRAP]] — memory bootstrap
- [[combined/Orchestration Overview]] — pipeline overview

## 🔗 Связи

- [[MOC - System]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

