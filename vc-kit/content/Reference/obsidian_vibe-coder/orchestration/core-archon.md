---
title: "Orchestration: Archon (YAML Workflows)"
tags:
  - domain/orchestration
  - artifact/system
  - status/active
  - source/combined
aliases:
  - archon
  - yaml workflows
  - dag workflows
created: 2026-04-18
type: system-note
source: "../.claude/orchestration/core-archon/"
---

# Orchestration: Archon (YAML Workflows)

> **Источник:** `../.claude/orchestration/core-archon/`
> **CLI:** `npx archon run <workflow.yaml>`

## Описание

Детерминированный DAG-движок для YAML-воркфлоу. 17 шаблонов воркфлоу. Fire-and-forget выполнение. **Step 0.5** (опционально) в пайплайне Vibe-Coder.

## Ключевые возможности

- **YAML DAG** — декларативные воркфлоу
- **17 шаблонов** — готовые паттерны
- **Детерминированность** — предсказуемое выполнение
- **Fire-and-forget** — запуск и забыть

## Команды

```bash
npx archon run <workflow.yaml>
npx archon list    # доступные шаблоны
npx archon init    # инициализация
```

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Обзор оркестрации:** [[combined/Orchestration Overview]]
- **Pipeline:** [[root-docs/PIPELINE]]
- **Mega-агент:** [[agents/mega-executor]]

## См. также

- [[orchestration/core-taskmaster]] — Task Master: Step 0
- [[orchestration/core-ralph]] — Ralph: PRD-driven loop

## 🔗 Связи

- [[MOC - Orchestration]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

