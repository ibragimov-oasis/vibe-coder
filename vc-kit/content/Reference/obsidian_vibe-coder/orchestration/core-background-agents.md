---
title: "Orchestration: Background Agents"
tags:
  - domain/orchestration
  - artifact/system
  - status/active
  - source/combined
aliases:
  - background agents
  - async agents
  - sandboxed execution
created: 2026-04-18
type: system-note
source: "../.claude/orchestration/core-background-agents/"
---

# Orchestration: Background Agents

> **Источник:** `../.claude/orchestration/core-background-agents/`

## Описание

Async-выполнение задач в изолированных sandbox-средах. **Step 1** в основном пайплайне Vibe-Coder.

## Ключевые возможности

- Sandboxed environments (изоляция выполнения)
- Async tasks (не блокируют основной поток)
- Параллельное выполнение нескольких задач

## Место в пайплайне

```
Step 0: Task Master   → структурирование задачи
Step 1: Background Agent → выполнение задачи ← ЗДЕСЬ
Step 2: Hermes         → self-learning
Step 3: Shannon        → security audit
```

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Обзор оркестрации:** [[combined/Orchestration Overview]]
- **Pipeline:** [[root-docs/PIPELINE]]
- **Mega-агент:** [[agents/mega-executor]]

## См. также

- [[orchestration/core-hermes]] — следующий шаг после выполнения
- [[orchestration/core-taskmaster]] — подготовка задач для выполнения

## 🔗 Связи

- [[MOC - Orchestration]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

