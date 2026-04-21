---
title: MOC - Orchestration
tags:
  - domain/orchestration
  - artifact/moc
  - status/active
aliases:
  - orchestration map
  - orchestration systems
created: 2026-04-18
type: moc
---

# 🗺️ MOC — Orchestration

> **Map of Content** для домена `Orchestration`.
> 23 системы оркестрации — от лёгких до enterprise swarm.

## 🔄 23 системы оркестрации

### Оригинальные системы (входили в первые 31 репо)

| Система | Заметка | Назначение |
|---------|---------|-----------|
| **RuFlo** | [[orchestration/core-ruflo]] | Enterprise AI orchestration, 100+ agents, Q-Learning Router |
| **GSD** | [[orchestration/core-gsd]] | Spec-driven development, context engineering, solves context rot |
| **OMC** | [[orchestration/core-omc]] | Multi-agent teams, 19 ролей, team pipeline |
| **DeerFlow** | [[orchestration/core-deer-flow]] | Deep research, LangGraph + FastAPI, ByteDance |
| **Hermes** | [[orchestration/core-hermes]] | Self-learning loop, pattern extraction, skill creation |
| **Background Agents** | [[orchestration/core-background-agents]] | Async tasks, sandboxed environments |
| **1Code** | [[orchestration/core-1code]] | Lightweight orchestration |
| **Superpowers** | [[orchestration/superpowers]] | TDD, composable skills, git worktrees |
| **Vibe-Kanban** | [[orchestration/core-vibe-kanban]] | Visual task management |

### Новые системы (23 добавленных репо)

| Система | Заметка | Назначение |
|---------|---------|-----------|
| **Archon** | [[orchestration/core-archon]] | YAML DAG workflows, 17 default, deterministic |
| **Ralph** | [[orchestration/core-ralph]] | PRD-driven loop, progress.txt, fresh context |
| **Squad** | [[orchestration/core-squad]] | AI teams via Copilot, casting, watch mode |
| **Multica** | [[orchestration/core-multica]] | Agent platform, board view, multi-workspace |
| **PraisonAI** | [[orchestration/core-praisonai]] | 100+ LLMs, route/parallel/loop/repeat, MCP |
| **cc-connect** | [[orchestration/core-cc-connect]] | Remote access, 7 agents × 10 chat platforms |
| **Task Master** | [[orchestration/core-taskmaster]] | MCP-based, PRD→tasks, 36 tools |
| **Refly** | [[orchestration/core-refly]] | Skills builder, visual workflow, MCP export |

### Команды и хуки

- [[combined/COMBINED Commands Index]] — GSD, OMC, RuFlo, Shannon, Superpowers команды
- [[combined/COMBINED Hooks Index]] — pre/post хуки всех систем

## 🏗️ Pipeline порядок

```
Step 0:   Task Master     — структурировать задачи из PRD
Step 0.5: Archon          — YAML DAG workflow (опционально)
Step 1:   Background Agent — основной исполнитель
Step 2:   Hermes          — self-learning loop
Step 3:   Shannon         — security audit
Step 4:   Code Review Graph — структурная верификация
Always:   Claude HUD      — мониторинг в реальном времени
```

## 🔍 Ключевые примеры использования

- **Большая задача**: Task Master → Archon → Background Agent
- **Исследование**: DeerFlow + PraisonAI
- **Команда**: Squad (Copilot) или OMC (все IDE)
- **PRD-цикл**: Ralph (прогресс → свежий контекст → итерация)
- **Remote trigger**: cc-connect (Telegram/Slack/Discord)

## Связанные MOC

- [[MOC - System]] — Общий пайплайн
- [[MOC - Agents]] — Агенты используют оркестрацию
- [[MOC - Memory]] — Hermes пишет в memory
- [[combined/Orchestration Overview]] — Детали по COMBINED
- [[000 - Map of Maps]] — Главная карта

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

