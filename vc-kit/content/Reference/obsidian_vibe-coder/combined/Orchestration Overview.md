---
title: Orchestration Overview — .claude/orchestration
tags:
  - domain/orchestration
  - artifact/index
  - status/active
  - source/combined
source: "../.claude/orchestration/"
created: 2026-04-18
type: mirror
aliases:
  - combined orchestration
  - orchestration directory
---

# 📄 Orchestration Overview — .claude/orchestration

> **Тип:** Domain overview | **Источник:** `../.claude/orchestration/`
> **Краткое описание:** Структура директории .claude/orchestration — 23 системы оркестрации.

## Структура директории

```
.claude/orchestration/
├── core-ruflo/              — RuFlo v3.5 (100+ агентов, Q-Learning)
├── core-gsd/                — GSD (spec-driven, context engineering)
├── core-omc/                — OMC (19 ролей, team pipeline)
├── core-deer-flow/          — DeerFlow (LangGraph + FastAPI, ByteDance)
├── core-hermes/             — Hermes (self-learning loop)
├── core-background-agents/  — Background Agents (async, sandboxed)
├── core-1code/              — 1Code (lightweight)
├── superpowers/             — Superpowers (TDD, composable skills)
├── core-vibe-kanban/        — Vibe-Kanban (visual tasks)
├── workflows-terraform/     — Terraform (infrastructure-as-code)
├── core-archon/             — Archon (YAML DAG, 17 workflows)
├── core-ralph/              — Ralph (PRD loop, progress.txt)
├── core-squad/              — Squad (AI teams via Copilot)
├── core-multica/            — Multica (agent platform, board view)
├── core-praisonai/          — PraisonAI (100+ LLMs, route/parallel)
├── core-cc-connect/         — cc-connect (remote access, 10 platforms)
├── core-taskmaster/         — Task Master (MCP, 36 tools, PRD→tasks)
└── core-refly/              — Refly (skills builder, visual workflow)
```

## Ключевые системы по типу

### Для исполнения задач
- `core-ruflo/` — enterprise, сложные задачи с 100+ агентами
- `core-gsd/` — spec-driven, когда есть PRD
- `core-background-agents/` — async исполнение в sandbox

### Для планирования
- `core-taskmaster/` — PRD → задачи с зависимостями
- `core-archon/` — YAML DAG для детерминированных workflow
- `core-ralph/` — PRD loop с прогресс-трекингом

### Для команд
- `core-squad/` — AI teams (Copilot native)
- `core-omc/` — universal multi-agent teams

### Для self-learning
- `core-hermes/` — паттерны → skills → memory

## Связан с

- [[MOC - Orchestration]] — родительский хаб
- [[root-docs/ORCHESTRATION]] — сравнение 5 основных
- [[root-docs/PIPELINE]] — pipeline порядок

## 🔗 Связи

- [[000 - Map of Maps]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

