---
title: PIPELINE — Extended Autonomous Pipeline
tags:
  - domain/pipeline
  - artifact/workflow
  - status/active
  - source/root
  - lang/en
source: "../PIPELINE.md"
created: 2026-04-18
type: mirror
aliases:
  - pipeline
  - extended pipeline
---

# 📄 PIPELINE — Extended Autonomous Pipeline

> **Тип:** Mirror-заметка | **Источник:** `../PIPELINE.md`
> **Краткое описание:** Полный 4-шаговый автономный пайплайн Vibe-Coder с Task Master, Archon, Background Agent, Hermes, Shannon и Code Review Graph.

## О документе

PIPELINE.md описывает расширенный пайплайн Vibe-Coder. Это главный execution flow — каждая задача проходит через него. Включает детали каждого шага, примеры, mermaid-схемы, интеграцию с Claude HUD.

## Pipeline шаги

| Шаг | Система | Назначение |
|-----|---------|-----------|
| **Step 0** | Task Master | PRD → структурированные задачи, анализ сложности, 36 MCP инструментов |
| **Step 0.5** | Archon (опц.) | YAML DAG workflow, 17 встроенных шаблонов, детерминированное выполнение |
| **Step 1** | Background Agent | Главный исполнитель. Читает CAPABILITIES, проверяет Supermemory, выбирает мега-агент |
| **Step 2** | Hermes | Self-learning: анализ, паттерны → skills → Supermemory → Refly |
| **Step 3** | Shannon | Security audit: SAST + SCA + динамические атаки через Lightpanda |
| **Step 4** | Code Review Graph | Структурная верификация: blast-radius, dead code, risk scoring |
| **Always** | Claude HUD | Real-time мониторинг: context, tools, agents, todos, cost, git |

## Retry logic

```
If Shannon находит уязвимости → вернуться к Step 1 (max 3 попытки)
If clean → deliver report (via cc-connect если настроен)
```

## Связан с

- [[MOC - System]] — родительский хаб
- [[root-docs/PIPELINE_TRIGGER]] — routing + agent selection
- [[root-docs/CAPABILITIES]] — hardcoded rules (Rule #4)
- [[MOC - Orchestration]] — детали каждой системы

## Исходник

> 📂 `../PIPELINE.md` — читать оригинал для полного контента

## 🔗 Связи

- [[000 - Map of Maps]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

