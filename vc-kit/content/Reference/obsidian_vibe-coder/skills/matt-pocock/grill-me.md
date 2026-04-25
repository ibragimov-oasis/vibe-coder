---
title: "Skill: grill-me"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - grill-me
  - clarifying questions
  - requirements grilling
created: 2026-04-18
type: skill
source: "../.claude/skills/skills-planning/grill-me/"
---

# 🔥 Skill: grill-me

> **Что делает:** Задаёт серию уточняющих вопросов для прояснения задачи перед реализацией.
> **Автор:** Matt Pocock | **Karpathy принцип:** [[skills/karpathy/think-before-coding]]

## Назначение

`grill-me` — первый навык в любом workflow. Предотвращает:
- Реализацию не того, что нужно
- Скрытые предположения
- Недооценённую сложность
- Неверно понятый scope

## Workflow

```
1. Пользователь: описывает задачу/идею
2. grill-me: задаёт 5-10 структурированных вопросов
3. Пользователь: отвечает
4. Результат: чёткое понимание задачи
5. Следующий шаг: write-a-prd ИЛИ напрямую к реализации
```

## Категории вопросов

### 🎯 Цели и проблемы
- Какую проблему это решает?
- Кто пользователь? Какой его сценарий?
- Что значит "успех"?

### 📏 Scope
- Что входит? Что НЕ входит?
- Это MVP или полная реализация?
- Есть ли зависимости?

### ⚙️ Технические ограничения
- Есть ли существующий код/API, который нужно учесть?
- Какие технологии предпочтительны?
- Есть ли performance требования?

### 🧪 Тестируемость
- Как будем проверять что готово?
- Есть ли edge cases?
- Нужны ли тесты (unit/integration/e2e)?

## Пример применения

```
User: "Сделай авторизацию"
grill-me: 
  1. Email+password или OAuth (Google/GitHub)?
  2. JWT или sessions?
  3. Нужен ли refresh token?
  4. Как обрабатываем "забыл пароль"?
  5. Какой UI: форма на отдельной странице или модальное окно?
  ...
```

## Связи

- **Следующий навык:** [[skills/matt-pocock/write-a-prd]]
- **Принцип:** [[skills/karpathy/think-before-coding]]
- **Индекс:** [[skills/skills-planning]]
- **Мета-агент:** [[agents/mega-planner]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[skills/matt-pocock/design-an-interface]] — вопросы для UI задач
- [[skills/matt-pocock/request-refactor-plan]] — вопросы для рефакторинга

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

