---
title: MOC - UI Design
tags:
  - domain/ui
  - artifact/moc
  - status/active
aliases:
  - ui map
  - design system
  - ui design
created: 2026-04-18
type: moc
---

# 🗺️ MOC — UI Design

> **Map of Content** для домена `UI Design`.
> Galaxy → shadcn → Impeccable → Taste-skill → Stitch → UI/UX Pro Max.
> Иерархия дизайна: следуй этому порядку.

## 🎨 Иерархия дизайна (обязательный порядок)

```
1. Galaxy         — 3,000+ компонентов, проверь первым
2. shadcn/ui      — accessible React компоненты
3. Impeccable     — 18 команд, anti-slop detection
4. Taste-skill    — 7 premium skills, 3-dial parameterization
5. Stitch         — Google Stitch, React компоненты
6. UI/UX Pro Max  — 161 правило, применяй к финальному
7. Custom         — только если 1-6 не подошли (документируй почему)
```

## 📦 Ресурсы

### Galaxy (3,000+ компонентов)
- Путь: `COMBINED/ui-design/ui-components-galaxy/`
- Кнопки, карточки, лоадеры, формы, и многое другое
- Использование: проверять ПЕРВЫМ

### shadcn/ui
- Путь: `COMBINED/ui-design/ui-components-shadcn/`
- Accessible React компоненты (Radix + Tailwind)
- Настраиваемые, без lock-in

### Impeccable (18 команд)
- Путь: `COMBINED/ui-design/ui-impeccable/`
- 18 дизайн-команд, 7 референсных документов
- Anti-slop detection — обнаруживает дешёвые паттерны
- Команды: `audit`, `design`, `layout`, `color`, `typography`, и др.

### Taste-skill (7 навыков)
- Путь: `COMBINED/ui-design/ui-taste-skill/`
- 7 premium навыков
- 3-dial parameterization: Density × Expressivity × Professionalism
- Для premium-качества интерфейсов

### Stitch (Google Stitch)
- Путь: `COMBINED/ui-design/ui-stitch-skills/`
- Google Stitch design generation
- Генерация React компонентов из DESIGN.md
- CSS/Tailwind вывод

### UI/UX Pro Max (161 правило)
- Путь: `COMBINED/ui-design/ui-rules/ui-ux-pro-max/`
- 161 reasoning rule + 67 design styles
- Применять к ФИНАЛЬНОМУ выводу
- Мастер-референс: `COMBINED/ui-design/COMBINED_DESIGN_SYSTEM.md`

## 🤖 Агент для дизайна

→ [[agents/mega-designer]] — объединяет все 6 дизайн-ресурсов

## Связанные MOC

- [[MOC - Skills]] — Дизайн навыки в skills-design/
- [[MOC - Agents]] — mega-designer
- [[combined/UI Design Overview]] — COMBINED/ui-design структура
- [[000 - Map of Maps]] — Главная карта
