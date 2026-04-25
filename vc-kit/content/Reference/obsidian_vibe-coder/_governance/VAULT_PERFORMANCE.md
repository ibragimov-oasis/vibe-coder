---
title: Vault Performance Guide
tags:
  - domain/obsidian
  - artifact/guide
  - status/active
aliases:
  - vault performance
  - performance guide
  - vault optimization
created: 2026-04-18
type: governance
---

# ⚡ Vault Performance Guide

> **Назначение:** Управление производительностью vault при масштабировании.
> **Текущий размер:** ~201 заметок (после Wave 9-12)
> **Порог предупреждения:** 1,000+ заметок

---

## 📊 Профили производительности

| Размер vault | Производительность | Рекомендации |
|-------------|-------------------|--------------|
| < 500 notes | Мгновенно | Без ограничений |
| 500–2,000 | Хорошая | Базовые исключения |
| 2,000–10,000 | Нормальная | Excluded files + фильтры графа |
| 10,000–20,000 | Медленная | Несколько vault + AI фильтры |
| 20,000+ | Проблемная | Разбить vault |

---

## 🚫 Excluded Files (Исключить из индекса)

Добавить в Obsidian Settings → Files & Links → Excluded files:

```
# Тяжёлые или ненужные для графа области:
.claude/orchestration/core-refly/
.claude/orchestration/core-ruflo/
new_repos/obsidian-copilot/
new_repos/

# Вложения
attachments/
*.png
*.jpg
*.pdf
```

**Логика:** Исключаем исходные файлы репозитория из поиска Obsidian — они слишком велики и не являются заметками vault. Зеркала в `obsidian_vibe-coder/` остаются индексированными.

---

## 🗺️ Оптимизация Graph View

### Рекомендуемые настройки

```
Settings → Graph View:
  
  Filters:
    ☑ Show attachments: OFF
    ☑ Show orphans: OFF (после полного охвата)
    
  Groups:
    Group 1: path:MOC*          → цвет: Золотой
    Group 2: path:agents/*      → цвет: Синий
    Group 3: path:skills/*      → цвет: Зелёный
    Group 4: path:orchestration/* → цвет: Фиолетовый
    Group 5: path:security/*    → цвет: Красный
    Group 6: path:ui-design/*   → цвет: Розовый
    
  Forces:
    Center force: 0.3
    Repel force: 60
    Link force: 0.3
    Link distance: 30
```

### Локальный граф (Local Graph)
- Depth: 2 (показывает непосредственные связи + связи связей)
- Включать: зеркала, MOC
- Исключать: governance, audit

---

## 💡 Стратегии оптимизации графа

### Принцип "MOC как созвездия"
MOC-хабы создают **плотные кластеры** в графе — это хорошо:
- Каждая тематическая заметка → своему MOC
- MOC → 000 Map of Maps
- Результат: звёздная структура, не хаотичная сеть

### Принцип "Link quality > link quantity"
- 3–5 качественных ссылок > 20 случайных
- Ссылки должны выражать реальную семантику (не просто "упомянуто")
- Разделяй: родитель, смежная тема, инструмент, источник

### Принцип "Atomic notes"
- 1 заметка = 1 концепция
- Избегать заметок-монстров
- Если заметка > 500 строк → рассмотреть разбиение

---

## 🔍 Регулярный аудит (чеклист)

### Еженедельно
- [ ] Проверить orphan nodes в Graph View → Filters → Show orphans

### После каждой волны
- [ ] Обновить [[_audit/COVERAGE_REPORT]]
- [ ] Проверить broken wikilinks (Settings → Files & Links)
- [ ] Проверить drift тегов от [[_governance/TAG_TAXONOMY]]

### Ежемесячно
- [ ] Проверить, нет ли новых файлов в репо, требующих mirror
- [ ] Обновить [[_audit/DOCUMENT_REGISTRY]]
- [ ] Проверить performance: время открытия vault < 5 сек?

---

## 🧩 Plugins для производительности

| Plugin | Назначение | Приоритет |
|--------|-----------|-----------|
| **Dataview** | SQL-подобные запросы по frontmatter | Must-have |
| **Linter** | Автоматическая нормализация frontmatter | Must-have |
| **Templater** | Шаблоны для быстрого создания заметок | Must-have |
| **Graph Analysis** | Расширенный анализ графа | Recommended |
| **Quick Add** | Быстрое добавление заметок | Recommended |

---

## Связи

- [[_governance/VAULT_GOVERNANCE]] — общие правила vault
- [[_governance/TAG_TAXONOMY]] — таксономия тегов
- [[_audit/COVERAGE_REPORT]] — текущее покрытие
- [[000 - Map of Maps]] — главная карта

## 🔗 Связи

- [[MOC - System]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

