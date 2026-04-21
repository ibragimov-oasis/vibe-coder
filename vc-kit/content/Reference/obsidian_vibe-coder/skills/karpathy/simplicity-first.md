---
title: "Karpathy Principle 2: Simplicity First"
tags:
  - domain/skills
  - artifact/skill
  - status/active
  - source/combined
aliases:
  - simplicity first
  - karpathy principle 2
  - simple code
  - minimum viable code
created: 2026-04-18
type: skill
source: "../COMBINED/skills/skills-claude/karpathy/"
---

# ✨ Simplicity First

> **Принцип #2 из 4** — Andrej Karpathy
> **Встроен во все 15 мега-агентов Vibe-Coder**

## Суть принципа

> "Минимальный код, который решает задачу. Нет gold-plating."

**Решает проблемы:**
- ❌ Переусложнение (over-engineering)
- ❌ Раздутые абстракции
- ❌ "Сделаем гибко на будущее" (YAGNI)
- ❌ Преждевременная оптимизация

## Правила

1. **YAGNI** (You Aren't Gonna Need It) — не делай то, что не нужно сейчас
2. **KISS** (Keep It Simple, Stupid) — простой код > умный код
3. **Читаемость > Производительность** — если нет доказанной необходимости
4. **Flat > Nested** — 3 уровня вложенности = время рефакторить

## Простота vs Качество

```
Плохая "простота":  быстрый хак без тестов
Хорошая простота:   минимальный код + тесты + понятные имена
```

## Признаки сложности (anti-patterns)

```python
# ❌ Слишком сложно
class AbstractFactoryBuilderRegistry:
    def create_builder_for_entity_type(self, entity_type_discriminator):
        ...

# ✅ Просто
def create_user(name: str, email: str) -> User:
    ...
```

## Применение при код-ревью

При ревью задавай:
- "Можно ли это сделать проще?"
- "Нужна ли эта абстракция сейчас?"
- "Понятно ли это без комментариев?"

## Связь с Matt Pocock Skills

→ [[skills/matt-pocock/improve-codebase-architecture]] — упрощение архитектуры
→ [[skills/matt-pocock/ubiquitous-language]] — простые понятные имена

## Связи

- **Karpathy индекс:** [[skills/skills-claude-karpathy]]
- **Принцип #1:** [[skills/karpathy/think-before-coding]]
- **Принцип #3:** [[skills/karpathy/surgical-changes]]
- **MOC:** [[MOC - Skills]]

## См. также

- [[agents/mega-coder]] — coder применяет Simplicity First
- [[agents/mega-architect]] — architect балансирует простоту и расширяемость

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

