---
title: "UI Gallery: Design Tokens & Variables"
tags:
  - domain/ui
  - artifact/gallery
  - status/active
  - source/combined
aliases:
  - design tokens
  - design variables
  - css variables
  - design system tokens
created: 2026-04-18
type: ui-gallery
source: "../COMBINED/ui-design/COMBINED_DESIGN_SYSTEM.md"
---

# 🎨 Design Tokens & Variables

> **Источник:** `../COMBINED/ui-design/`
> **Назначение:** Единые переменные для всей дизайн-системы Vibe-Coder
> **Стандарт:** W3C Design Tokens Community Group

---

## Что такое Design Tokens

> Design tokens — это именованные переменные, которые хранят значения дизайн-решений.
> Вместо `color: #3B82F6` → `color: var(--color-primary-500)`.

**Преимущества:**
- Единый источник правды
- Смена темы без правки компонентов
- Консистентность во всём интерфейсе

---

## Категории токенов

### 🎨 Color Tokens

```css
/* Semantic Colors */
:root {
  --color-primary:     #3B82F6;  /* Primary action */
  --color-secondary:   #6B7280;  /* Secondary action */
  --color-success:     #10B981;  /* Success states */
  --color-warning:     #F59E0B;  /* Warning states */
  --color-error:       #EF4444;  /* Error/destructive */
  --color-info:        #3B82F6;  /* Info states */
  
  /* Neutrals */
  --color-gray-50:     #F9FAFB;
  --color-gray-100:    #F3F4F6;
  --color-gray-200:    #E5E7EB;
  --color-gray-900:    #111827;
  
  /* Backgrounds */
  --bg-primary:        #FFFFFF;
  --bg-secondary:      #F9FAFB;
  --bg-elevated:       #FFFFFF;
}

/* Dark Mode */
[data-theme="dark"] {
  --bg-primary:        #0F172A;
  --bg-secondary:      #1E293B;
}
```

### 📐 Spacing Tokens

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;  /* base unit */
  --space-6:   24px;
  --space-8:   32px;
  --space-12:  48px;
  --space-16:  64px;
}
```

### 📝 Typography Tokens

```css
:root {
  /* Font Families */
  --font-sans:  'Inter', system-ui, sans-serif;
  --font-mono:  'JetBrains Mono', monospace;
  
  /* Sizes */
  --text-xs:    12px;
  --text-sm:    14px;
  --text-base:  16px;
  --text-lg:    18px;
  --text-xl:    20px;
  --text-2xl:   24px;
  --text-3xl:   30px;
  --text-4xl:   36px;
  
  /* Weights */
  --font-normal:    400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;
  
  /* Line Heights */
  --leading-tight:   1.25;
  --leading-normal:  1.5;
  --leading-relaxed: 1.75;
}
```

### 🔲 Border Radius Tokens

```css
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-full: 9999px;
}
```

### 💧 Shadow Tokens

```css
:root {
  --shadow-sm:   0 1px 2px rgba(0,0,0,0.05);
  --shadow-md:   0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg:   0 10px 15px rgba(0,0,0,0.10);
  --shadow-xl:   0 20px 25px rgba(0,0,0,0.15);
}
```

### ⚡ Animation Tokens

```css
:root {
  --duration-fast:    150ms;
  --duration-normal:  250ms;
  --duration-slow:    350ms;
  
  --ease-in:     cubic-bezier(0.4, 0, 1, 1);
  --ease-out:    cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Связи

- **Иерархия:** [[MOC - UI Design]]
- **Система:** [[ui-design/combined-design-system]]
- **shadcn токены:** [[ui-design/gallery/shadcn-showcase]]
- **Impeccable:** [[ui-design/gallery/impeccable-commands]]
- **Map:** [[000 - Map of Maps]]

## 🔗 Связи

- [[MOC - UI Design]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

