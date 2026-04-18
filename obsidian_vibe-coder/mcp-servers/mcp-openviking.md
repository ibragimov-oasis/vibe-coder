---
title: "MCP: OpenViking (Codebase Context)"
tags:
  - domain/mcp
  - domain/memory
  - artifact/server
  - status/active
  - source/combined
aliases:
  - openviking
  - mcp openviking
  - codebase context memory
created: 2026-04-18
type: mcp-note
source: "../COMBINED/mcp-servers/mcp-openviking/"
---

# MCP: OpenViking (Codebase Context)

> **Источник:** `../COMBINED/mcp-servers/mcp-openviking/`
> **CLI:** `npx -y @openviking/mcp`
> **Разработчик:** ByteDance

## Описание

Контекстная память кодовой базы с tiered loading (L0/L1/L2). Оптимизирован для больших репозиториев.

## Уровни загрузки

| Уровень | Описание |
|---------|----------|
| L0 | Высокоуровневая структура (быстро) |
| L1 | Модули и зависимости |
| L2 | Детали реализации (глубоко) |

## Применение

- Понять большую кодовую базу без чтения всех файлов
- Контекст для агентов при рефакторинге
- Навигация по зависимостям

## Связи

- **Родительский MOC:** [[MOC - Memory]]
- **Обзор памяти:** [[combined/Memory Overview]]
- **GitNexus:** [[mcp-servers/mcp-gitnexus]]

## См. также

- [[root-docs/MEMORY_SETUP]] — настройка памяти
- [[mcp-servers/mcp-supermemory]] — долгосрочная память
