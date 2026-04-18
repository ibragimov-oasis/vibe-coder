---
title: UI Design Overview — COMBINED/ui-design
tags:
  - domain/ui
  - artifact/index
  - status/active
  - source/combined
source: "../COMBINED/ui-design/"
created: 2026-04-18
type: mirror
aliases:
  - combined ui
  - design system directory
---

# 📄 UI Design Overview — COMBINED/ui-design

> **Тип:** Domain overview | **Источник:** `../COMBINED/ui-design/`
> **Краткое описание:** Структура директории COMBINED/ui-design — 6 дизайн-ресурсов + master reference.

## Структура директории

```
COMBINED/ui-design/
├── ui-components-galaxy/    — Galaxy: 3,000+ UI компонентов
│   ├── elements/            — buttons, cards, loaders, forms
│   └── README.md
├── ui-components-shadcn/    — shadcn/ui: accessible React компоненты
│   ├── components/          — переиспользуемые компоненты
│   └── README.md
├── ui-impeccable/           — Impeccable: 18 команд, anti-slop
│   ├── commands/            — 18 дизайн-команд
│   ├── references/          — 7 референсов
│   └── IMPECCABLE.md
├── ui-taste-skill/          — Taste-skill: 7 навыков, 3-dial
│   └── skills/
├── ui-stitch-skills/        — Stitch: Google Stitch generation
│   └── DESIGN.md
├── ui-rules/
│   └── ui-ux-pro-max/       — UI/UX Pro Max: 161 правило + 67 стилей
│       └── UI_UX_PRO_MAX.md
└── COMBINED_DESIGN_SYSTEM.md  ← MASTER REFERENCE (читать первым)
```

## Иерархия использования

```
Задача: создать UI компонент

1. Проверить Galaxy (3000+ компонентов) — подходит что-то?
2. Проверить shadcn/ui — есть accessible вариант?
3. Запустить Impeccable — anti-slop проверка
4. Применить Taste-skill — параметризация качества
5. Если нужна генерация — Stitch + DESIGN.md
6. Финальная проверка — UI/UX Pro Max 161 правило
```

## Impeccable — ключевые команды

| Команда | Назначение |
|---------|-----------|
| `audit` | Аудит существующего UI |
| `design` | Создать компонент |
| `layout` | Оптимизация разметки |
| `color` | Цветовая схема |
| `typography` | Типографика |
| `motion` | Анимация |

## 3-Dial parameterization (Taste-skill)

```
Density:       Sparse ←————————→ Dense
Expressivity:  Minimal ←———————→ Bold
Professionalism: Casual ←———→ Corporate
```

## Связан с

- [[MOC - UI Design]] — родительский хаб
- [[agents/mega-designer]] — мега-агент дизайна
- [[MOC - Skills]] — skills-design категория
