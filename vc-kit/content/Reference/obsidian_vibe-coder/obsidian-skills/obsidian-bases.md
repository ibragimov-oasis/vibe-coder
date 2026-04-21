---
title: "Skill: Obsidian Bases — Database Views"
tags:
  - domain/skills
  - domain/obsidian
  - artifact/skill
  - status/active
  - source/obsidian-skills
aliases:
  - obsidian bases
  - bases skill
  - database view obsidian
created: 2026-04-18
type: skill-mirror
source: "../new_repos/obsidian-skills/skills/obsidian-bases/SKILL.md"
---

# Skill: Obsidian Bases — Database Views

> **Источник:** `../new_repos/obsidian-skills/skills/obsidian-bases/SKILL.md`
> **Расширение:** `.base`

## Назначение

Создание и редактирование Obsidian Bases (`.base`) — представлений базы данных поверх заметок vault. Поддерживает фильтры, формулы, и разные виды отображения.

## Виды отображения

| Вид | Описание |
|-----|----------|
| `table` | Таблица с колонками-свойствами |
| `cards` | Карточки (Kanban-стиль) |
| `list` | Список |
| `map` | Карта (геолокация) |

## Применение в vault

Bases идеально для:
- 📋 Dashboard агентов с фильтром по `tags: domain/agents`
- 🗂️ Реестр всех заметок с frontmatter
- 📊 Отчёт покрытия по `status/*` тегам

## Рабочий процесс

1. Создать `.base` файл с YAML
2. Добавить `filters` для выборки заметок
3. Настроить `formulas` (опционально)
4. Добавить `views`
5. Проверить в Obsidian

## Связи

- **Родительский MOC:** [[MOC - Skills]]
- **Обзор навыков:** [[combined/Skills Overview]]
- **Аудит vault:** [[_audit/COVERAGE_REPORT]]

## См. также

- [[obsidian-skills/obsidian-markdown]] — синтаксис frontmatter/properties
- [[obsidian-skills/obsidian-cli]] — CLI для работы с vault

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

