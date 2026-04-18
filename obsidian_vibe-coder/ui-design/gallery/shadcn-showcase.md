---
title: "UI Gallery: shadcn/ui Showcase"
tags:
  - domain/ui
  - artifact/gallery
  - status/active
  - source/combined
aliases:
  - shadcn showcase
  - shadcn components
  - accessible react components
created: 2026-04-18
type: ui-gallery
source: "../COMBINED/ui-design/ui-components-shadcn/"
---

# 🎨 shadcn/ui — Component Showcase

> **Источник:** `../COMBINED/ui-design/ui-components-shadcn/`
> **Основан на:** Radix UI + Tailwind CSS
> **Преимущество:** Accessibility-first, customizable, no lock-in
> **Использовать:** Второй уровень иерархии (после Galaxy)

---

## Принципы shadcn/ui

1. **Copy-paste, не npm install** — компоненты копируются в проект, не являются зависимостью
2. **Accessibility first** — встроенная поддержка WAI-ARIA
3. **Composable** — компоненты строятся из примитивов Radix
4. **Tailwind-based** — стилизация через utility классы

---

## Ключевые компоненты

### Layout & Structure
| Компонент | Описание | Radix Primitive |
|-----------|----------|----------------|
| `Accordion` | Раскрывающиеся секции | `@radix-ui/react-accordion` |
| `Card` | Контейнер с границей | N/A |
| `Separator` | Разделитель | `@radix-ui/react-separator` |
| `Sheet` | Боковая панель | `@radix-ui/react-dialog` |
| `Tabs` | Вкладки | `@radix-ui/react-tabs` |

### Forms
| Компонент | Описание | Radix Primitive |
|-----------|----------|----------------|
| `Button` | Кнопка с вариантами | N/A |
| `Checkbox` | Чекбокс | `@radix-ui/react-checkbox` |
| `Form` | Форма с react-hook-form | N/A |
| `Input` | Текстовое поле | N/A |
| `Label` | Лейбл | `@radix-ui/react-label` |
| `RadioGroup` | Группа радиокнопок | `@radix-ui/react-radio-group` |
| `Select` | Dropdown | `@radix-ui/react-select` |
| `Slider` | Слайдер | `@radix-ui/react-slider` |
| `Switch` | Переключатель | `@radix-ui/react-switch` |
| `Textarea` | Многострочный текст | N/A |

### Overlay & Feedback
| Компонент | Описание | Radix Primitive |
|-----------|----------|----------------|
| `Alert` | Предупреждение | N/A |
| `AlertDialog` | Подтверждение действия | `@radix-ui/react-alert-dialog` |
| `Dialog` | Модальное окно | `@radix-ui/react-dialog` |
| `Drawer` | Выдвижная панель | `vaul` |
| `Popover` | Всплывающее окно | `@radix-ui/react-popover` |
| `Progress` | Прогресс | `@radix-ui/react-progress` |
| `Skeleton` | Скелетон загрузки | N/A |
| `Toast` | Уведомления | `@radix-ui/react-toast` |
| `Tooltip` | Подсказка | `@radix-ui/react-tooltip` |

### Navigation & Commands
| Компонент | Описание | Radix Primitive |
|-----------|----------|----------------|
| `Breadcrumb` | Хлебные крошки | N/A |
| `Command` | Command palette | `cmdk` |
| `ContextMenu` | Контекстное меню | `@radix-ui/react-context-menu` |
| `DropdownMenu` | Выпадающее меню | `@radix-ui/react-dropdown-menu` |
| `Menubar` | Горизонтальное меню | `@radix-ui/react-menubar` |
| `NavigationMenu` | Навигационное меню | `@radix-ui/react-navigation-menu` |
| `Pagination` | Пагинация | N/A |

---

## Установка

```bash
# Инициализация shadcn в проекте
npx shadcn@latest init

# Добавить компонент
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

---

## Кастомизация через CSS переменные

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... */
}
```

---

## Связи

- **Иерархия:** [[MOC - UI Design]]
- **Обзор:** [[ui-design/shadcn]]
- **Предыдущий:** [[ui-design/gallery/galaxy-components]]
- **Anti-slop check:** [[ui-design/gallery/ui-patterns]]
- **Map:** [[000 - Map of Maps]]

## 🔗 Связи

- [[MOC - UI Design]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

