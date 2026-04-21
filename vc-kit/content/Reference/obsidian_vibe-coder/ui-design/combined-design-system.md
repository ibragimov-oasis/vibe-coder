---
title: "UI Design: Combined Design System"
tags:
  - domain/ui
  - artifact/reference
  - status/active
  - source/combined
aliases:
  - combined design system
  - design system reference
created: 2026-04-18
type: ui-note
source: "../COMBINED/ui-design/COMBINED_DESIGN_SYSTEM.md"
---

# UI Design: Combined Design System

> **Источник:** `../COMBINED/ui-design/COMBINED_DESIGN_SYSTEM.md`
> **Master reference:** единый источник правды для дизайн-системы Vibe-Coder.

## О чём

Главный справочный документ, объединяющий все 6 уровней дизайн-иерархии в единую систему.

## Иерархия дизайна (Rule #3)

```
1. Galaxy          → 3,000+ компонентов          [[ui-design/galaxy]]
2. shadcn/ui       → Accessible React components  [[ui-design/shadcn]]
3. Impeccable      → Anti-slop, 18 commands       [[ui-design/impeccable]]
4. Taste-skill     → 7 premium skills, 3-dial     [[ui-design/taste-skill]]
5. Stitch          → Google Stitch generation     [[ui-design/stitch]]
6. UI/UX Pro Max   → 161 rules, 67 styles         [[ui-design/ui-ux-pro-max]]
```

## Алгоритм выбора компонента

1. ✅ Проверить Galaxy (3000+ → очень вероятно найти)
2. ✅ Если не нашёл → shadcn/ui
3. ✅ Применить Impeccable audit на результат
4. ✅ Настроить через Taste-skill (3-dial)
5. ✅ Если нужна генерация → Stitch
6. ✅ Финальная проверка по UI/UX Pro Max 161 правилам

## Связи

- **Родительский MOC:** [[MOC - UI Design]]
- **Mega-агент:** [[agents/mega-designer]]
- **Skills:** [[skills/skills-design]]

## См. также

- [[root-docs/CAPABILITIES]] — Rule #3 определение

## 🔗 Связи

- [[MOC - UI Design]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

