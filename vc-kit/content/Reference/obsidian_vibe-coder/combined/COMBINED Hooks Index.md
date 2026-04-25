---
title: "COMBINED Hooks Index"
tags:
  - domain/orchestration
  - domain/system
  - artifact/index
  - status/active
  - source/combined
aliases:
  - hooks index
  - combined hooks
created: 2026-04-18
type: index
source: "../.claude/hooks/"
---

# COMBINED Hooks Index

> **Источник:** `../.claude/hooks/`

## Описание

Pre/post хуки для всех основных систем оркестрации. Автоматически запускаются при событиях (начало/конец задачи, git операции, и т.д.).

## Наборы хуков

| Набор | Система | Описание |
|-------|---------|----------|
| `hooks-1code/` | [[orchestration/core-1code\|1Code]] | лёгкие хуки |
| `hooks-background-agents/` | [[orchestration/core-background-agents\|Background Agents]] | async хуки |
| `hooks-gsd/` | [[orchestration/core-gsd|GSD]] | pre/post task хуки |
| `hooks-omc/` | [[orchestration/core-omc|OMC]] | team coordination хуки |
| `hooks-ruflo/` | [[orchestration/core-ruflo|RuFlo]] | enterprise хуки |
| `hooks-superpowers/` | [[orchestration/superpowers|Superpowers]] | TDD/review хуки |

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Commands:** [[combined/COMBINED Commands Index]]
- **Обзор оркестрации:** [[combined/Orchestration Overview]]

## См. также

- [[root-docs/PIPELINE]] — как хуки встраиваются в пайплайн
- [[orchestration/core-hermes]] — Hermes как post-task hook

## 🔗 Связи

- [[MOC - Orchestration]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

