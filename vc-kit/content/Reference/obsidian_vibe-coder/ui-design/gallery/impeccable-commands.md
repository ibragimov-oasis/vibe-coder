---
title: "UI Gallery: Impeccable Commands Reference"
tags:
  - domain/ui
  - artifact/gallery
  - status/active
  - source/combined
aliases:
  - impeccable commands
  - impeccable reference
  - anti-slop commands
created: 2026-04-18
type: ui-gallery
source: "../.claude/ui-design/ui-impeccable/"
---

# ✨ Impeccable — 18 Commands Reference

> **Источник:** `../.claude/ui-design/ui-impeccable/`
> **Назначение:** Anti-slop detection + 18 design commands + 7 references
> **Использовать:** Третий уровень иерархии (после Galaxy + shadcn)

---

## 18 Design Commands

### Анализ и аудит (4 команды)

| Команда | Описание |
|---------|----------|
| `/audit` | Полный аудит интерфейса на anti-patterns |
| `/compare` | Сравнение двух вариантов дизайна |
| `/critique` | Критический разбор с предложениями улучшений |
| `/accessibility` | Проверка accessibility (WAI-ARIA, контраст, фокус) |

### Генерация компонентов (5 команд)

| Команда | Описание |
|---------|----------|
| `/component` | Создать компонент по описанию |
| `/variant` | Создать вариации компонента (primary/secondary/ghost) |
| `/responsive` | Адаптировать компонент для mobile/tablet/desktop |
| `/dark-mode` | Добавить поддержку темной темы |
| `/states` | Добавить все состояния (default/hover/active/disabled) |

### Улучшение (5 команд)

| Команда | Описание |
|---------|----------|
| `/refine` | Улучшить существующий компонент |
| `/simplify` | Упростить избыточный интерфейс |
| `/elevate` | Поднять визуальный уровень |
| `/polish` | Добавить финишные детали |
| `/motion` | Добавить анимации и переходы |

### Система и паттерны (4 команды)

| Команда | Описание |
|---------|----------|
| `/tokens` | Создать design tokens |
| `/pattern` | Задокументировать UI паттерн |
| `/system` | Создать элемент дизайн-системы |
| `/export` | Экспорт в нужный формат |

---

## 7 Reference Documents

| Документ | Описание |
|----------|----------|
| `typography.md` | Типографика: шрифты, размеры, line-height |
| `color.md` | Цвета: палитра, оттенки, семантические цвета |
| `spacing.md` | Отступы: шкала, применение |
| `shadows.md` | Тени: уровни глубины |
| `motion.md` | Анимации: duration, easing, типы |
| `icons.md` | Иконки: размеры, стили |
| `accessibility.md` | Доступность: WCAG 2.1 AA стандарты |

---

## Anti-Slop Detection

Impeccable обнаруживает "дешёвые" паттерны:

### ❌ Slop patterns (избегать)
- Generic stock-photo heroes
- "Lorem ipsum" тексты
- Одинаковые серые карточки без иерархии
- Кнопки одного цвета для разных действий
- Стены текста без визуального ритма

### ✅ Quality patterns
- Конкретные иллюстрации / data visualizations
- Реальный контент в дизайне
- Чёткая визуальная иерархия
- Семантические цвета действий
- Белое пространство как инструмент

---

## Связи

- **Иерархия:** [[MOC - UI Design]]
- **Обзор:** [[ui-design/impeccable]]
- **Taste-skill:** [[ui-design/gallery/ui-patterns]]
- **Design tokens:** [[ui-design/gallery/design-tokens]]
- **Map:** [[000 - Map of Maps]]

## 🔗 Связи

- [[MOC - UI Design]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

