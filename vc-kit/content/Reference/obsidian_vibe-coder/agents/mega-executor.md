---
title: mega-executor — Plan Execution
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-executor
  - status/active
source: "../.claude/agents/mega/mega-executor.md"
created: 2026-04-18
type: mirror
aliases:
  - executor
  - mega-executor
---

# 🤖 mega-executor — Plan Execution

> **Мега-агент** для точного исполнения утверждённых планов.
> Когда использовать: есть готовый план, нужно исполнить.

## Когда использовать

```
IF approved plan exists → mega-executor
IF PRD → code translation → mega-executor
```

## Источники

OMC + GSD + **Ralph PRD loop** + **Archon YAML workflows** + **Task Master MCP**

## Ключевые системы

### Ralph PRD Loop
```
PRD → progress.txt → свежий контекст → итерация →
проверка → обновление progress.txt → следующая итерация
```

### Archon YAML DAG
```yaml
workflow:
  - name: step-1
    agent: mega-coder
    inputs: [plan.md]
    outputs: [code/]
  - name: step-2
    agent: mega-tester
    depends_on: [step-1]
```

### Task Master (36 MCP tools)
- `initialize_project` — из PRD создать задачи
- `get_next_task` — следующая задача по зависимостям
- `set_task_status` — обновить прогресс

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[agents/mega-planner]] — получает планы от планировщика
- [[MOC - Orchestration]] — Ralph, Archon, Task Master

## Исходник

> 📂 `../.claude/agents/mega/mega-executor.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

