---
title: "Skill: write-a-skill"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - write-a-skill
  - create skill
  - skill authoring
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-writing/write-a-skill/"
---

# 🛠️ Skill: write-a-skill

> **Что делает:** Создаёт новый SKILL.md файл по стандарту ULTRACAR/Claude Skills.
> **Автор:** Matt Pocock | **Агент:** [[agents/mega-writer]]

## Назначение

`write-a-skill` помогает создать переиспользуемый навык (skill) для AI-агентов:
- Структурированный формат SKILL.md
- Правильный frontmatter
- Чёткий workflow
- Интеграция с ULTRACAR системой

## Формат SKILL.md

```yaml
---
name: skill-name
description: Одна строка: что делает навык
---

# Skill Name

> **Назначение:** Одно предложение.

## Когда использовать

Список сценариев.

## Workflow

1. Шаг 1
2. Шаг 2
3. Шаг 3

## Пример

Input: ...
Output: ...

## Ограничения

Что навык НЕ делает.
```

## Правила хорошего skill

| Критерий | Хорошо | Плохо |
|----------|--------|-------|
| Название | `write-a-prd` | `do stuff` |
| Описание | "Создаёт PRD из требований" | "Делает документ" |
| Workflow | Чёткие шаги с input/output | "Просто делай" |
| Scope | Одна ответственность | Всё подряд |

## Процесс создания навыка (Hermes)

```
1. Обнаружить паттерн в работе
2. write-a-skill: формализовать в SKILL.md
3. Сохранить в COMBINED/skills/{domain}/
4. Обновить MOC - Skills
5. Hermes: добавить в память (supermemory)
```

## Связи

- **Hermes:** [[orchestration/core-hermes]] — self-learning через skills
- **Refly:** [[orchestration/core-refly]] — визуальный builder skills
- **Агент:** [[agents/mega-writer]]
- **Индекс:** [[skills/skills-writing]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[_governance/NOTE_TEMPLATE]] — vault template (аналог для заметок)
- [[orchestration/core-hermes]] — когда создавать навыки автоматически
