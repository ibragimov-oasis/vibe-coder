---
title: New Doc Checklist
tags:
  - governance
  - meta
  - artifact/governance
aliases:
  - checklist
  - new doc
created: 2026-04-18
type: governance
status: active
---

# ✅ New Doc Checklist — Чеклист нового документа

> Запускай этот чеклист каждый раз, когда добавляешь заметку в vault.

---

## Обязательные шаги (нельзя пропустить)

### 1️⃣ Frontmatter

- [ ] `title` — заполнен
- [ ] `tags` — минимум 2: один `domain/`, один `artifact/`
- [ ] `status` — указан (`active`, `draft`, или `archived`)
- [ ] `created` — дата добавления в vault
- [ ] `type` — тип заметки
- [ ] `source` — указан путь к оригиналу (только для Mirror-заметок)

### 2️⃣ MOC-связь

- [ ] Заметка ссылается на родительский MOC (`[[MOC - <Domain>]]`)
- [ ] Родительский MOC обновлён — добавлена ссылка на новую заметку
- [ ] Если несколько доменов — добавлены ссылки на все релевантные MOC

### 3️⃣ Wikilinks

- [ ] Добавлены ссылки на не менее 2 смежных заметок
- [ ] Нет битых wikilinks
- [ ] Добавлена ссылка на `[[000 - Map of Maps]]`

### 4️⃣ Содержание (для Mirror-заметок)

- [ ] Краткое описание (1–3 предложения) добавлено
- [ ] Ключевые разделы оригинала перечислены
- [ ] Указан путь к оригинальному файлу

### 5️⃣ Safety checks

- [ ] Ни одна строка исходного файла **не удалена** и **не изменена**
- [ ] Зеркальная заметка создана в vault, НЕ в исходном расположении
- [ ] Файл сохранён в правильной папке vault

---

## Рекомендуемые шаги

- [ ] `aliases` — добавлены псевдонимы (RU и EN)
- [ ] `updated` — дата последнего обновления
- [ ] Раздел "См. также" с 3–5 связанными заметками
- [ ] Callout с ключевой информацией

---

## Периодический граф-аудит (раз в 2 недели)

- [ ] Graph View → Filters → показать orphan nodes
- [ ] Для каждого орфана: добавить связь с релевантным MOC
- [ ] Проверить битые wikilinks (Obsidian показывает их серым)
- [ ] Обновить `[[COVERAGE_REPORT]]`
- [ ] Проверить теги — нет ли дрейфа от [[TAG_TAXONOMY]]

---

## Команды для проверки (bash)

```bash
# Заметки без frontmatter (ищет файлы где первая строка не начинается с ---)
find obsidian_vibe-coder/ -name "*.md" ! -path "*/.obsidian/*" \
  -exec sh -c 'head -1 "$1" | grep -qE "^---$" || echo "$1"' _ {} \;

# Заметки без domain/ тега
grep -rL "domain/" obsidian_vibe-coder/ --include="*.md" | grep -v ".obsidian"

# Заметки без MOC-ссылки
grep -rL "\[\[MOC" obsidian_vibe-coder/ --include="*.md" \
  | grep -v "_governance" | grep -v "_templates" \
  | grep -v "MOC -" | grep -v "000 -"
```

---

## 🔗 Ссылки

- [[VAULT_GOVERNANCE]] — общие правила
- [[TAG_TAXONOMY]] — словарь тегов
- [[NOTE_TEMPLATE]] — шаблоны заметок
- [[COVERAGE_REPORT]] — текущее покрытие
- [[000 - Map of Maps]] — главная карта
