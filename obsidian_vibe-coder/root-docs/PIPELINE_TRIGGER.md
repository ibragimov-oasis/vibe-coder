---
title: PIPELINE_TRIGGER — Agent Routing & Post-Task Checklist
tags:
  - domain/agents
  - domain/pipeline
  - artifact/workflow
  - status/active
  - source/root
source: "../PIPELINE_TRIGGER.md"
created: 2026-04-18
type: mirror
aliases:
  - routing
  - pipeline trigger
  - post-task
---

# 📄 PIPELINE_TRIGGER — Agent Routing & Post-Task Checklist

> **Тип:** Mirror-заметка | **Источник:** `../PIPELINE_TRIGGER.md`
> **Краткое описание:** Decision tree для выбора агента + обязательный post-task checklist. Читать до и после каждой задачи.

## О документе

PIPELINE_TRIGGER.md — инструкция по запуску. Содержит:
1. **Agent Routing Decision Tree** — как выбрать правильный мега-агент
2. **Post-Task Checklist** — что делать после каждой задачи (секьюрити, self-learning, memory)

## Agent Routing Decision Tree

```
IF bug/error/crash/fix/broken → mega-debugger
IF UI/design/frontend/component → mega-designer
IF plan/architecture/roadmap/PRD → mega-planner
IF research/analyze/investigate → mega-researcher
IF security/vulnerability/audit → mega-security
IF SEO/meta/sitemap → mega-seo
IF review/code-review/PR-review → mega-reviewer
IF test/TDD/coverage → mega-tester
IF docs/README/documentation → mega-writer
IF deploy/CI/CD/git/docker → mega-devops
IF infrastructure/swarm/scaling → mega-infrastructure
IF system-design/ADR/trade-off → mega-architect
IF complex (multiple concerns) → mega-orchestrator
DEFAULT (simple coding task) → mega-coder
```

## Post-Task Checklist (⛔ ОБЯЗАТЕЛЬНО)

1. **Security check** (Shannon): injection, XSS, auth bypass, hardcoded secrets, SSRF
2. **Self-learning** (Hermes): создать skill если найден новый паттерн
3. **Save to memory**: `npx -y supermemory add "<what was done>" --tags "<domain>"`
4. **Quality report**: Security, Learned, Changed files, Tests

## Связан с

- [[MOC - System]] — родительский хаб
- [[root-docs/PIPELINE]] — детали пайплайна
- [[root-docs/CAPABILITIES]] — capabilities registry
- [[MOC - Agents]] — все мега-агенты

## Исходник

> 📂 `../PIPELINE_TRIGGER.md` — читать оригинал для полного контента

## 🔗 Связи

- [[000 - Map of Maps]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

