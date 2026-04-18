---
title: Note Template
tags:
  - governance
  - meta
  - artifact/template
aliases:
  - template
  - note-template
created: 2026-04-18
type: template
status: active
---

# 📝 Note Template — Стандартный шаблон заметки

> Скопируй этот шаблон при создании новой заметки в vault.
> Все поля frontmatter обязательны.

---

## Полный шаблон

```markdown
---
title: <Название заметки>
tags:
  - domain/<subdomain>
  - artifact/<type>
  - status/active
source: "<../relative/path/to/original.md>"   # убери если не зеркало
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: <moc|note|mirror|governance|template|audit>
status: active
aliases:
  - <alias1>
  - <alias2>
---

# 🎯 <Название заметки>

> **Краткое описание:** одно предложение о назначении документа.

## Описание

<2–3 абзаца о содержании. Не копируй исходник — давай суть.>

## Ключевые разделы

- **Раздел 1** — краткое описание
- **Раздел 2** — краткое описание

## Связанные концепции

- [[MOC - <Domain>]] — родительский хаб

## Использование

`Использовать когда: ...`

## Исходник

> 📂 Оригинальный файл: `<путь к исходнику в репо>`
> Режим: Mirror (оригинал не изменён)

## См. также

- [[<Связанная заметка 1>]]
- [[<Связанная заметка 2>]]
```

---

## Минимальный шаблон (быстрое создание)

```markdown
---
title: <Название>
tags:
  - domain/<x>
  - artifact/<y>
  - status/draft
created: YYYY-MM-DD
type: note
---

# <Название>

> <Одна строка описания>

[[MOC - <Domain>]] | [[000 - Map of Maps]]
```

---

## Шаблон для Mirror-заметки

```markdown
---
title: <Название документа>
tags:
  - domain/<x>
  - artifact/reference
  - status/active
  - source/root
source: "<../FILENAME.md>"
created: 2026-04-18
type: mirror
aliases:
  - <alias>
---

# 📄 <Название документа>

> **Тип:** Mirror-заметка | **Источник:** `../<FILENAME.md>`

## О документе

<3–5 предложений>

## Ключевые темы

- <Тема 1>
- <Тема 2>

## Связан с

- [[MOC - <Domain>]] — родительский хаб

## Исходник

> 📂 `../<FILENAME.md>` — читать оригинал для полного контента
```

---

## Шаблон MOC

```markdown
---
title: MOC - <Domain>
tags:
  - domain/<x>
  - artifact/moc
  - status/active
created: 2026-04-18
type: moc
aliases:
  - <domain> map
---

# 🗺️ MOC — <Domain>

> **Map of Content** для домена `<Domain>`.

## Подзаметки

- [[<Заметка 1>]] — описание
- [[<Заметка 2>]] — описание

## Связанные MOC

- [[MOC - <Смежный домен>]]
- [[000 - Map of Maps]]
```

---

## 🔗 Ссылки

- [[VAULT_GOVERNANCE]] — правила vault
- [[TAG_TAXONOMY]] — словарь тегов
- [[NEW_DOC_CHECKLIST]] — чеклист нового документа
