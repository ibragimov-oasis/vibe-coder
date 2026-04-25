---
title: "UI Gallery: UI Patterns (Anti-Slop)"
tags:
  - domain/ui
  - artifact/gallery
  - status/active
  - source/combined
aliases:
  - ui patterns
  - anti-slop patterns
  - design patterns gallery
created: 2026-04-18
type: ui-gallery
source: ".claude/ui-design/ui-rules/ui-ux-pro-max/"
---

# 🎭 UI Patterns — Anti-Slop Reference

> **Источник:** `../.claude/ui-design/ui-rules/ui-ux-pro-max/`
> **Основан на:** UI/UX Pro Max (161 правило) + Taste-skill + Impeccable
> **Назначение:** Проверять UI против известных плохих паттернов

---

## Принципы хорошего UI

### 1. Ясная иерархия (Visual Hierarchy)
```
Primary Action     → Самый заметный элемент
Secondary Action   → Заметный, но не конкурирует
Tertiary/Ghost     → Доступен, не отвлекает
Destructive        → Красный, требует подтверждения
```

### 2. Правило "Закона Хика"
> Чем больше выборов → тем дольше принятие решения

**Применение:**
- Не более 7 пунктов в навигации
- Не более 3 основных действий на экране
- Прогрессивное раскрытие (progressive disclosure)

### 3. Affordance (Очевидность действий)
- Кнопка должна выглядеть как кнопка (нажимаемая)
- Ссылка должна выглядеть как ссылка (подчёркнутая)
- Поле ввода должно выглядеть как поле (рамка/фон)

---

## Антипаттерны и Решения

| Антипаттерн | Проблема | Решение |
|-------------|----------|---------|
| **God Screen** | Всё на одном экране | Разбить на шаги / tabs |
| **Modal Overload** | Слишком много модальных | Toast для кратких сообщений |
| **Naked Buttons** | Кнопки без контекста | Иконка + текст + tooltip |
| **Color Chaos** | Разные цвета без системы | Design tokens |
| **Text Walls** | Абзацы без структуры | Заголовки + bullets + whitespace |
| **Tiny Targets** | Мелкие кликаемые области | Min 44×44px touch target |
| **Hidden Actions** | Действия не найти | Видимые + hover reveal |

---

## Taste-skill: 3-Dial Parameterization

```
Density           [━━━○━━━] (compact ↔ spacious)
Expressivity      [━━━━━○━] (minimal ↔ expressive)
Professionalism   [━━━━○━━] (playful ↔ corporate)
```

### Пресеты

| Тип приложения | Density | Expressivity | Professionalism |
|---------------|---------|--------------|----------------|
| Dashboard / Analytics | compact | minimal | corporate |
| Landing Page | spacious | expressive | mixed |
| SaaS Tool | medium | medium | professional |
| Consumer App | spacious | expressive | playful |

---

## Empty States (Пустые состояния)

Каждая страница с данными должна иметь Empty State:

```
🎨 Иллюстрация (контекстная)
📝 Заголовок: "Пока нет данных"
📄 Описание: "Создайте первый X, чтобы начать"
🔘 CTA Button: "Создать X"
```

---

## Loading States

```
Skeleton > Spinner > Text-only

Skeleton: для контента с известной структурой
Spinner:  для операций < 3 секунд
Progress: для операций с известным прогрессом
```

---

## Связи

- **Иерархия:** [[MOC - UI Design]]
- **Правила:** [[ui-design/ui-ux-pro-max]]
- **Taste-skill:** [[ui-design/taste-skill]]
- **Impeccable:** [[ui-design/gallery/impeccable-commands]]
- **Map:** [[000 - Map of Maps]]

## 🔗 Связи

- [[MOC - UI Design]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

