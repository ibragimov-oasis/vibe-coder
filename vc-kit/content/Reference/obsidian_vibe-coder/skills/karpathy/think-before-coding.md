---
title: "Karpathy Principle 1: Think Before Coding"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - think before coding
  - karpathy principle 1
  - clarify before code
created: 2026-04-18
type: skill
source: "../.claude/skills/skills-claude/karpathy/"
---

# 🤔 Think Before Coding

> **Принцип #1 из 4** — Andrej Karpathy
> **Встроен во все 15 мега-агентов Vibe-Coder**

## Суть принципа

> "Прекрати и задай уточняющие вопросы прежде чем писать код."

**Решает проблемы:**
- ❌ Неправильные предположения
- ❌ Скрытое непонимание требований
- ❌ Отсутствие анализа компромиссов
- ❌ Реализация не того, что просили

## Как применять

### Перед началом работы
1. **Список предположений** — что ты считаешь правдой?
2. **Список вопросов** — что неясно?
3. **Edge cases** — что может пойти не так?
4. **Scope** — что входит, что нет?

### Шаблон "Thinking Protocol"
```
Задача: [описание]

Предположения:
- Предположение 1
- Предположение 2

Вопросы:
- Вопрос 1
- Вопрос 2

Edge Cases:
- Edge case 1

Approach:
- Планируемый подход
```

## Примеры применения

### ❌ Без принципа
```
User: "Добавь кэширование"
AI:   [немедленно пишет Redis кэш]
User: "Нет, я имел в виду in-memory кэш на 5 минут"
```

### ✅ С принципом
```
User: "Добавь кэширование"
AI:   "Уточним: 
       - Что кэшируем (DB запросы / API вызовы)?
       - Какой TTL?
       - Redis или in-memory?
       - Нужна инвалидация?"
User: "In-memory, 5 минут, автоматическая инвалидация"
AI:   [пишет точное решение]
```

## Связь с Matt Pocock Skills

→ [[skills/matt-pocock/grill-me]] — практический навык для задавания вопросов

## Связи

- **Karpathy индекс:** [[skills/skills-claude-karpathy]]
- **Навык:** [[skills/matt-pocock/grill-me]]
- **Принцип #2:** [[skills/karpathy/simplicity-first]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[skills/matt-pocock/write-a-prd]] — документация предположений
- [[agents/mega-planner]] — планирование перед исполнением

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

