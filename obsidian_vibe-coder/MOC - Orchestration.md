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

| Система | Назначение | Путь |
|---------|-----------|------|
| **RuFlo** | Enterprise AI orchestration, 100+ agents, Q-Learning Router | `COMBINED/orchestration/core-ruflo/` |
| **GSD** | Spec-driven development, context engineering, solves context rot | `COMBINED/orchestration/core-gsd/` |
| **OMC** | Multi-agent teams, 19 роль, team pipeline | `COMBINED/orchestration/core-omc/` |
| **DeerFlow** | Deep research, LangGraph + FastAPI, ByteDance | `COMBINED/orchestration/core-deer-flow/` |
| **Hermes** | Self-learning loop, pattern extraction, skill creation | `COMBINED/orchestration/core-hermes/` |
| **Background Agents** | Async tasks, sandboxed environments | `COMBINED/orchestration/core-background-agents/` |
| **1Code** | Lightweight orchestration | `COMBINED/orchestration/core-1code/` |
| **Superpowers** | TDD, composable skills, git worktrees | `COMBINED/orchestration/superpowers/` |
| **Vibe-Kanban** | Visual task management | `COMBINED/orchestration/core-vibe-kanban/` |
| **Terraform** | Infrastructure-as-code workflows | `COMBINED/orchestration/workflows-terraform/` |

### Новые системы (23 добавленных репо)

| Система | Назначение | Путь |
|---------|-----------|------|
| **Archon** | YAML DAG workflows, 17 default, deterministic | `COMBINED/orchestration/core-archon/` |
| **Ralph** | PRD-driven loop, progress.txt, fresh context | `COMBINED/orchestration/core-ralph/` |
| **Squad** | AI teams via Copilot, casting, watch mode | `COMBINED/orchestration/core-squad/` |
| **Multica** | Agent platform, board view, multi-workspace | `COMBINED/orchestration/core-multica/` |
| **PraisonAI** | 100+ LLMs, route/parallel/loop/repeat, MCP | `COMBINED/orchestration/core-praisonai/` |
| **cc-connect** | Remote access, 7 agents × 10 chat platforms | `COMBINED/orchestration/core-cc-connect/` |
| **Task Master** | MCP-based, PRD→tasks, 36 tools | `COMBINED/orchestration/core-taskmaster/` |
| **Refly** | Skills builder, visual workflow, MCP export | `COMBINED/orchestration/core-refly/` |

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
