---
title: "Orchestration: GSD (Get-Shit-Done)"
tags:
  - domain/orchestration
  - artifact/system
  - status/active
  - source/combined
aliases:
  - gsd
  - get-shit-done
  - spec-driven development
created: 2026-04-18
type: system-note
source: "../COMBINED/orchestration/core-gsd/"
---

# Orchestration: GSD (Get-Shit-Done)

> **Источник:** `../COMBINED/orchestration/core-gsd/`
> **Stars:** 46k⭐

## Описание

Spec-driven development — лёгкая мета-промптинг система против "context rot" (деградации качества с ростом контекста).

## Ключевые команды

| Команда | Описание |
|---------|----------|
| `gsd:spec` | Извлечь спецификацию проекта |
| `gsd:plan` | Сгенерировать план реализации |
| `gsd:exec` | Выполнить план |

## Проблема, которую решает

**Context rot** — качество снижается по мере заполнения контекстного окна. GSD решает это через свежие контексты на каждом шаге.

## Связи

- **Родительский MOC:** [[MOC - Orchestration]]
- **Обзор оркестрации:** [[combined/Orchestration Overview]]
- **Mega-агент:** [[agents/mega-executor]]

## См. также

- [[orchestration/core-ruflo]] — RuFlo: enterprise оркестрация
- [[orchestration/core-ralph]] — Ralph: PRD-driven loop
