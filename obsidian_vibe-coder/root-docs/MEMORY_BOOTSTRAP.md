---
title: Memory Bootstrap
tags:
  - domain/memory
  - domain/system
  - artifact/guide
  - status/active
  - source/root
aliases:
  - memory bootstrap
  - bootstrap memory
  - code graph bootstrap
created: 2026-04-18
type: mirror
source: "../MEMORY_BOOTSTRAP.md"
---

# Memory Bootstrap

> **Источник:** `../MEMORY_BOOTSTRAP.md`
> **Тип:** Обязательный скрипт инициализации перед любой задачей.

## О чём этот документ

Описывает обязательную последовательность запуска memory-bootstrap перед началом работы:

1. Проверить наличие `.code-review-graph/graph.db`
2. Собрать граф если не существует (`code-review-graph build`)
3. Обновить граф если существует (`code-review-graph update`, ~2 сек)
4. Сообщить статус (~8.2x экономия токенов)

## Ключевые команды

```bash
# Проверить/собрать граф
if [ ! -f .code-review-graph/graph.db ]; then
  pip install code-review-graph && code-review-graph build
else
  code-review-graph update
fi
```

## Связи

- **Родительский MOC:** [[MOC - Memory]]
- **Настройка памяти:** [[root-docs/MEMORY_SETUP]]
- **Архитектура памяти:** [[root-docs/MEMORY]]
- **Пайплайн:** [[root-docs/PIPELINE]]
- **MCP code-review-graph:** [[combined/MCP Servers Overview]]

## См. также

- [[root-docs/QUICKSTART]] — быстрый старт со всеми обязательными шагами
- [[combined/Memory Overview]] — полный обзор систем памяти
