---
title: "Orchestration: Task Master"
tags:
  - domain/orchestration
  - artifact/system
  - status/active
  - source/combined
aliases:
  - taskmaster
  - task-master-ai
  - ai task management
created: 2026-04-18
type: system-note
source: "../COMBINED/orchestration/core-taskmaster/"
---

# Orchestration: Task Master

> **Источник:** `../COMBINED/orchestration/core-taskmaster/`
> **CLI:** `npx -y task-master-ai`
> **Статус:** ✅ ACTIVE

## Описание

MCP-based AI task management: PRD → задачи → зависимости. 36 MCP инструментов. Анализ сложности. Multi-model поддержка. **Step 0** в пайплайне ULTRACAR.

## 36 Инструментов (ключевые)

- `parse_prd` — разобрать PRD на задачи
- `get_tasks` — получить список задач
- `next_task` — следующая задача по приоритету
- `analyze_complexity` — анализ сложности задачи
- `expand_task` — разбить задачу на подзадачи

## Место в пайплайне

```
Step 0: Task Master ← ЗДЕСЬ
Step 0.5: Archon (optional)
Step 1: Background Agent
...
```

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Обзор оркестрации:** [[combined/Orchestration Overview]]
- **Pipeline:** [[root-docs/PIPELINE]]
- **Mega-агент:** [[agents/mega-orchestrator]]

## См. также

- [[orchestration/core-archon]] — Archon: Step 0.5
- [[orchestration/core-ralph]] — Ralph: PRD-loop

## 🔗 Связи

- [[MOC - Orchestration]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

