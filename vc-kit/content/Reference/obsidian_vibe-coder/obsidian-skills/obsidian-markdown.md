---
title: "Skill: Obsidian Flavored Markdown"
tags:
  - domain/skills
  - domain/obsidian
  - artifact/skill
  - status/active
  - source/obsidian-skills
aliases:
  - obsidian markdown
  - OFM
  - obsidian syntax
  - wikilinks syntax
created: 2026-04-18
type: skill-mirror
source: "../new_repos/obsidian-skills/skills/obsidian-markdown/SKILL.md"
---

# Skill: Obsidian Flavored Markdown (OFM)

> **Источник:** `../new_repos/obsidian-skills/skills/obsidian-markdown/SKILL.md`
> **Основа:** CommonMark + GFM + расширения Obsidian

## Назначение

Создание и редактирование заметок с полным набором Obsidian-специфичного синтаксиса: wikilinks, embeds, callouts, properties, comments.

## Ключевой синтаксис

### Properties (Frontmatter)
```yaml
---
title: Note Title
tags:
  - domain/system
aliases:
  - alt name
---
```

### Wikilinks
```markdown
[[Note Name]]              # ссылка
[[Note|Display Text]]      # ссылка с алиасом
![[Note]]                  # embed заметки
![[Note#Heading]]          # embed раздела
```

### Callouts
```markdown
> [!info] Заголовок
> Содержимое callout

> [!warning] Предупреждение
> Критическая информация
```

### Tags
```markdown
#domain/agents    # иерархический тег
#status/active    # тег статуса
```

## Правило выбора ссылок

- `[[wikilink]]` — для внутренних заметок vault (Obsidian отслеживает переименования)
- `[text](url)` — только для внешних URL

## Связи

- **Родительский MOC:** [[MOC - Skills]]
- **Таксономия тегов:** [[_governance/TAG_TAXONOMY]]
- **Шаблон заметки:** [[_governance/NOTE_TEMPLATE]]
- **Шаблон файла:** [[_templates/note-template]]

## См. также

- [[obsidian-skills/json-canvas]] — визуальные карты
- [[obsidian-skills/obsidian-bases]] — database views
- [[obsidian-skills/obsidian-cli]] — CLI инструменты

## 🔗 Связи

- [[MOC - Skills]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

