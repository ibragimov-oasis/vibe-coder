---
title: Vault Governance
tags:
  - governance
  - meta
  - documentation/standards
aliases:
  - governance
  - rules
created: 2026-04-18
type: governance
status: active
---

# 🏛️ Vault Governance — Vibe-Coder v3.0 Obsidian Integration

> **Назначение:** Единый свод правил для поддержания vault в безопасном, консистентном состоянии.
> **Принцип #1:** Ни одна строка исходного кода или документации не должна быть удалена.

## 📐 Модель интеграции

**Выбрана: Mirror-режим** (самый безопасный)

| Аспект | Решение |
|--------|---------|
| Режим | **Mirror** — исходные файлы не трогаются |
| Vault path | `obsidian_vibe-coder/` |
| Source root | `../` (один уровень выше vault) |
| Типы файлов | `.md` (только первая волна) |
| Язык таксономии | EN/RU гибрид (EN для тегов, RU для описаний) |

### Что такое Mirror-режим

В Mirror-режиме:
- Оригинальные `.md` файлы в репозитории **не модифицируются**.
- В vault создаются **зеркальные заметки** с frontmatter, wikilinks и мета-описанием.
- Зеркальные заметки ссылаются на оригиналы через поле `source` и текстовые ссылки.
- Граф строится на основе vault-заметок, а не исходных файлов.

```
Оригинал:  /AGENTS.md           (не трогаем)
Зеркало:   /obsidian_vibe-coder/root-docs/AGENTS.md  (добавляем frontmatter + ссылки)
```

## 🛡️ Инварианты безопасности (Нарушать запрещено)

### Правило 1 — No Delete
```
ЗАПРЕЩЕНО: удалять файлы, строки, блоки в исходниках
РАЗРЕШЕНО: добавлять frontmatter, wikilinks, служебные блоки В VAULT
```

### Правило 2 — Additive Only
Все операции только в режиме добавления:
- Добавить frontmatter YAML в зеркальную заметку
- Добавить wikilinks в зеркальную заметку
- Создать новую MOC-заметку
- Создать новую зеркальную заметку

### Правило 3 — Source Integrity
- Поле `source` в frontmatter указывает на оригинальный файл (относительный путь от vault)
- Зеркальные заметки не дублируют полный контент — только резюме + ссылки

### Правило 4 — Traceability
- Каждая заметка в vault имеет `created` дату
- Изменения в vault логируются в `_audit/COVERAGE_REPORT.md`

## 🌊 Волновой rollout

| Волна | Scope | Статус |
|-------|-------|--------|
| **Wave 0 — Pilot** | Governance + MOCs + Templates | ✅ Выполнено |
| **Wave 1 — Root Docs** | 13 корневых `.md` + README | ✅ Выполнено |
| **Wave 2 — COMBINED Domains** | 7 domain overviews | ✅ Выполнено |
| **Wave 3 — Mega-Agents** | 15 mega-agent зеркала | ✅ Выполнено |
| **Wave 4 — COMBINED Detailed** | Детальные разделы COMBINED | 🔲 Запланировано |
| **Wave 5 — Long Tail** | `new_repos/**` избранные | 🔲 Запланировано |

## 📋 Обязательный минимум каждой заметки

Каждая заметка в vault ДОЛЖНА содержать:

```yaml
---
title: <Название на EN или RU>
tags:
  - <domain>/<subtag>
  - <artifact-type>
source: "<относительный путь к оригиналу>"   # если зеркало
created: YYYY-MM-DD
type: <moc|note|mirror|governance|template|audit>
status: <active|archived|draft>
---
```

## 🔗 Ссылки

- [[000 - Map of Maps]] — Главная точка входа
- [[TAG_TAXONOMY]] — Полный словарь тегов
- [[NOTE_TEMPLATE]] — Шаблон заметки
- [[NEW_DOC_CHECKLIST]] — Чеклист для новых документов
- [[COVERAGE_REPORT]] — Отчёт покрытия
