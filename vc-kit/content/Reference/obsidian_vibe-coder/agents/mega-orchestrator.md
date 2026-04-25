---
title: mega-orchestrator — Full Pipeline Orchestration
tags:
  - domain/agents
  - artifact/mega-agent
  - agent/mega-orchestrator
  - status/active
source: "../.claude/agents/mega/mega-orchestrator.md"
created: 2026-04-18
type: mirror
aliases:
  - orchestrator
  - mega-orchestrator
---

# 🤖 mega-orchestrator — Full Pipeline Orchestration

> **Мега-агент** для запуска полного пайплайна end-to-end.
> Когда использовать: сложные задачи с несколькими компонентами.

## Когда использовать

```
IF complex (multiple concerns) → mega-orchestrator
IF need full pipeline          → mega-orchestrator
IF multi-agent coordination    → mega-orchestrator
```

## Источники и системы

RuFlo + GSD + OMC + Background Agents + Superpowers + **Archon** + **Ralph** + **Squad** + **Multica** + **PraisonAI** + **Task Master** + **Refly**

## Что умеет

- Запускает полный 4-шаговый pipeline (Step 0–4)
- Координирует несколько мега-агентов параллельно
- Управляет задачами через Task Master (PRD → tasks → dependencies)
- Использует Archon YAML DAG для детерминированных workflows
- Поддерживает remote access через cc-connect (10 chat платформ)
- Real-time мониторинг через Claude HUD

## Workflow

```
Task → Task Master (структуризация) →
Archon (DAG опц.) →
Выбор мега-агента →
Исполнение →
Hermes (self-learning) →
Shannon (security) →
Доставка результата
```

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[MOC - Orchestration]] — все 23 системы
- [[root-docs/PIPELINE]] — пайплайн деталей
- [[root-docs/PIPELINE_TRIGGER]] — routing logic

## Исходник

> 📂 `../.claude/agents/mega/mega-orchestrator.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

