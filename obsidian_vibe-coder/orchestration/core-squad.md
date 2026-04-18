---
title: "Orchestration: Squad (Copilot Teams)"
tags:
  - domain/orchestration
  - artifact/system
  - status/active
  - source/combined
aliases:
  - squad
  - copilot teams
  - agent casting
created: 2026-04-18
type: system-note
source: "../COMBINED/orchestration/core-squad/"
---

# Orchestration: Squad (Copilot Teams)

> **Источник:** `../COMBINED/orchestration/core-squad/`
> **Нативно:** GitHub Copilot

## Описание

AI-команды через GitHub Copilot. Именные агенты, casting, watch mode, decisions archive. Создан специально для Copilot.

## Возможности

- **Named casting** — назначение ролей агентам по имени
- **Watch mode** — агенты мониторят изменения и реагируют
- **Decisions archive** — история технических решений
- **Skills compound** — агенты учатся друг у друга

## Когда использовать

```
Multi-file рефакторинг → cast: architect, coder, reviewer
Feature development    → cast: planner, coder, tester
Code review            → cast: reviewer, security-reviewer
```

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Обзор оркестрации:** [[combined/Orchestration Overview]]
- **Mega-агент:** [[agents/mega-infrastructure]]

## См. также

- [[orchestration/core-omc]] — OMC: universal multi-agent
- [[orchestration/core-multica]] — Multica: agent platform
