---
title: "Orchestration: OMC (Oh My Claude)"
tags:
  - domain/orchestration
  - artifact/system
  - status/active
  - source/combined
aliases:
  - omc
  - oh my claude
  - multi-agent coordination
created: 2026-04-18
type: system-note
source: "../.claude/orchestration/core-omc/"
---

# Orchestration: OMC (Oh My Claude)

> **Источник:** `../.claude/orchestration/core-omc/`

## Описание

Multi-agent coordination с 19 специализированными ролями. Методология работает в любом интерфейсе.

## 19 Ролей

`explore`, `analyst`, `planner`, `architect`, `debugger`, `executor`, `verifier`, `tracer`, `security-reviewer`, `code-reviewer`, `test-engineer`, `designer`, `writer`, `qa-tester`, `scientist`, `document-specialist`, `git-master`, `code-simplifier`, `critic`

## Team Pipeline

```
team-plan → team-prd → team-exec → team-verify → team-fix (loop)
```

## Принцип делегирования

Делегируй специализированную работу наиболее подходящему агенту. Предпочитай доказательства предположениям.

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Обзор оркестрации:** [[combined/Orchestration Overview]]
- **Mega-агент:** [[agents/mega-orchestrator]]

## См. также

- [[orchestration/core-ruflo]] — RuFlo: 80+ агентов
- [[orchestration/core-squad]] — Squad: команды в Copilot

## 🔗 Связи

- [[MOC - Orchestration]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

