---
title: MASTER_PLAN — Single Source of Truth
tags:
  - domain/system
  - artifact/roadmap
  - status/active
  - source/root
source: "../MASTER_PLAN.md"
created: 2026-04-18
type: mirror
aliases:
  - master plan
  - repo organization
---

# 📄 MASTER_PLAN — Single Source of Truth

> **Тип:** Mirror-заметка | **Источник:** `../MASTER_PLAN.md`
> **Краткое описание:** Единый источник правды по организации репозитория. Мастер-план структуры, категоризации и слияния 54 репозиториев.

## О документе

MASTER_PLAN.md определяет как должен быть организован репозиторий. Описывает категории, правила именования, структуру COMBINED/, маппинг репозиториев по категориям.

## Ключевые разделы

- **Repository Structure** — как всё организовано
- **Category Mapping** — какой репо куда идёт
- **Naming Conventions** — правила именования файлов
- **COMBINED Structure** — детали директории COMBINED/
- **Migration Phases** — фазы миграции

## Структура COMBINED/

```
COMBINED/
├── agents/        — Агенты (by-role, by-interface, mega)
├── audit/         — Аудит файлы
├── commands/      — Команды (gsd, omc, ruflo, shannon, superpowers)
├── hooks/         — Хуки для IDE
├── mcp-servers/   — MCP конфигурации
├── memory/        — Системы памяти
├── orchestration/ — 23 системы оркестрации
├── prompts/       — 4000+ промптов
├── reference/     — Справочники (cursorrules, claude-hud)
├── security/      — Shannon Pro
├── skills/        — 3000+ навыков
├── ui-design/     — Дизайн-система
└── REPO_DOCS/     — Документация оригинальных 54 репо
```

## Связан с

- [[MOC - Plans & Roadmap]] — родительский хаб
- [[root-docs/AUDIT]] — 172+ config files маппинг
- [[root-docs/EXECUTION_PLAN]] — план выполнения

## Исходник

> 📂 `../MASTER_PLAN.md` — читать оригинал для полного контента

## 🔗 Связи

- [[000 - Map of Maps]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

