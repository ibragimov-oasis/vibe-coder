---
title: "Skill: JSON Canvas — Visual Maps & Diagrams"
tags:
  - domain/skills
  - domain/obsidian
  - artifact/skill
  - status/active
  - source/obsidian-skills
aliases:
  - json canvas
  - canvas skill
  - obsidian canvas
created: 2026-04-18
type: skill-mirror
source: "../new_repos/obsidian-skills/skills/json-canvas/SKILL.md"
---

# Skill: JSON Canvas — Visual Maps & Diagrams

> **Источник:** `../new_repos/obsidian-skills/skills/json-canvas/SKILL.md`
> **Spec:** [jsoncanvas.org/spec/1.0](https://jsoncanvas.org/spec/1.0/)

## Назначение

Создание и редактирование файлов `.canvas` — визуальных карт с узлами, рёбрами, группами и соединениями. Идеально для mind maps, flowcharts и диаграмм связей.

## Структура файла `.canvas`

```json
{
  "nodes": [],
  "edges": []
}
```

**Типы узлов:** `text`, `file`, `link`, `group`
**Ключевые поля узла:** `id`, `type`, `x`, `y`, `width`, `height`
**Ключевые поля ребра:** `id`, `fromNode`, `fromSide`, `toNode`, `toSide`

## Применение в vault

Canvas-файлы — мощный инструмент для визуализации графа знаний vault:
- Map of Maps как canvas
- Диаграммы архитектуры агентов
- Связи между доменами

## Связи

- **Родительский MOC:** [[MOC - Skills]]
- **Обзор навыков:** [[combined/Skills Overview]]
- **Карта vault:** [[000 - Map of Maps]]

## См. также

- [[obsidian-skills/obsidian-markdown]] — Obsidian Markdown синтаксис
- [[obsidian-skills/obsidian-bases]] — базы данных в Obsidian
