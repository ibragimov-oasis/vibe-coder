---
title: "Skill: design-an-interface"
tags:
  - domain/skills
  - domain/ui
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - design-an-interface
  - interface design skill
  - ui design skill
created: 2026-04-18
type: skill
source: "../.claude/skills/skills-planning/design-an-interface/"
---

# 🎨 Skill: design-an-interface

> **Что делает:** Проектирует UI/UX интерфейс по описанию задачи с применением дизайн-иерархии.
> **Автор:** Matt Pocock | **Дизайн-иерархия:** Galaxy → shadcn → Impeccable → Taste-skill → Stitch → UI/UX Pro Max

## Назначение

`design-an-interface` объединяет Karpathy "Think Before Coding" с дизайн-иерархией Vibe-Coder:
- Задаёт уточняющие вопросы об интерфейсе
- Подбирает подходящие компоненты из дизайн-системы
- Создаёт описание UI с псевдокодом или mock-up

## Дизайн-иерархия (обязательный порядок)

```
1. Galaxy     — проверить среди 3000+ компонентов
2. shadcn/ui  — accessible React компоненты
3. Impeccable — anti-slop detection, 18 команд
4. Taste-skill — 3-dial: Density × Expressivity × Professionalism
5. Stitch     — Google Stitch генерация
6. UI/UX Pro Max — 161 правило для финала
7. Custom     — только если 1-6 не подошли
```

## Workflow

```
1. grill-me (UI фокус): целевая аудитория, устройство, стиль
2. Проверить Galaxy — есть ли готовый компонент?
3. Применить shadcn + Impeccable стандарты
4. Описать layout + wireframe
5. Проверить по UI/UX Pro Max правилам
```

## Структура выходного описания

```markdown
## Interface: [Название]

### Layout
- Страница: [Full/Modal/Sidebar/...]
- Компоненты: [список из Galaxy/shadcn]

### Key Elements
- Header: ...
- Main content: ...
- CTA: ...

### States
- Empty state: ...
- Loading: ...
- Error: ...

### Accessibility
- ARIA labels: ...
- Keyboard navigation: ...
```

## Связи

- **Дизайн ресурс:** [[ui-design/galaxy]]
- **Компоненты:** [[ui-design/shadcn]]
- **Правила:** [[ui-design/ui-ux-pro-max]]
- **Агент:** [[agents/mega-designer]]
- **Индекс:** [[skills/skills-planning]]
- **MOC:** [[MOC - UI Design]]

## См. также

- [[skills/matt-pocock/grill-me]] — вопросы перед дизайном
- [[ui-design/impeccable]] — anti-slop detection
- [[ui-design/gallery/ui-patterns]] — паттерны UI

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

