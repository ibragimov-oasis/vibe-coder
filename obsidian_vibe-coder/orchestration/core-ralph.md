---
title: "Orchestration: Ralph (PRD Loop)"
tags:
  - domain/orchestration
  - artifact/system
  - status/active
  - source/combined
aliases:
  - ralph
  - prd loop
  - prd-driven loop
created: 2026-04-18
type: system-note
source: "../COMBINED/orchestration/core-ralph/"
---

# Orchestration: Ralph (PRD Loop)

> **Источник:** `../COMBINED/orchestration/core-ralph/`

## Описание

PRD-driven автономный цикл итераций. Ключевые файлы: `progress.txt`, `prd.json`. Свежий контекст на каждой итерации.

## Принцип работы

```
prd.json (требования)
  → Background Agent (итерация)
  → Запись в progress.txt
  → Hermes проверяет прогресс
  → Следующая итерация с чистым контекстом
  → Repeat until done
```

## Ключевые файлы

- `prd.json` — Product Requirements Document
- `progress.txt` — лог прогресса для контекста

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Обзор оркестрации:** [[combined/Orchestration Overview]]
- **Mega-агент:** [[agents/mega-planner]]
- **GSD:** [[orchestration/core-gsd]]

## См. также

- [[orchestration/core-taskmaster]] — Task Master: управление задачами
- [[orchestration/core-archon]] — Archon: YAML workflow
