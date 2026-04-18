---
title: "Skill: ubiquitous-language"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - ubiquitous-language
  - domain language
  - DDD language
  - shared vocabulary
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-development/ubiquitous-language/"
---

# 📖 Skill: ubiquitous-language

> **Что делает:** Создаёт единый словарь терминов (Domain Language) для команды и кода.
> **Автор:** Matt Pocock | **Концепция:** Domain-Driven Design (DDD)

## Назначение

`ubiquitous-language` решает проблему "а что ты имеешь в виду под X?":
- Создаёт глоссарий терминов предметной области
- Обеспечивает, что код, документация и разговоры используют одни слова
- Предотвращает рассинхронизацию между командой и кодом

## Workflow

```
1. Выявить ключевые понятия предметной области
2. Договориться об однозначных определениях
3. Зафиксировать в глоссарии
4. Применять в: именах переменных, функций, классов, PR описаниях, документации
```

## Структура глоссария

```markdown
# Domain Glossary: [Проект]

## [Термин]
**Определение:** Точное описание понятия.
**Используется как:** имя класса / переменной / endpoint
**НЕ путать с:** похожим термином X

## [Другой термин]
...
```

## Признаки хорошего ubiquitous language

- ✅ Один термин = одна концепция
- ✅ Код и документация используют одни слова
- ✅ Новый разработчик понимает код без переводчика
- ❌ `user` в коде, `customer` в документации, `client` в разговоре
- ❌ `process`, `handle`, `manage` — расплывчатые глаголы

## Применение в vault

> Для ULTRACAR vault: [[_governance/TAG_TAXONOMY]] является убиквитарным языком для тегов.

## Связи

- **Принцип:** [[skills/karpathy/simplicity-first]]
- **Агент:** [[agents/mega-architect]]
- **Vault таксономия:** [[_governance/TAG_TAXONOMY]]
- **Индекс:** [[skills/skills-development]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[skills/matt-pocock/improve-codebase-architecture]] — архитектура использует ubiquitous language
- [[skills/matt-pocock/write-a-prd]] — PRD строится на ubiquitous language
