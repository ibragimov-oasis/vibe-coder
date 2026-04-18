---
title: Coverage Report
tags:
  - domain/obsidian
  - artifact/report
  - status/active
aliases:
  - coverage
  - vault coverage
created: 2026-04-18
updated: 2026-04-18
type: audit
---

# 📊 Coverage Report — Obsidian Vault ULTRACAR v3.0

> **Режим интеграции:** Mirror (недеструктивный — исходники не тронуты)
> **Дата аудита:** 2026-04-18
> **Всего заметок в vault:** 117

---

## ✅ Покрытие по волнам

| Волна | Описание | Создано | Статус |
|-------|---------|---------|--------|
| Wave 0 | MOC-хабы (9) + Governance (4) + Template | 14 | ✅ |
| Wave 1 | 000 Map of Maps | 1 | ✅ |
| Wave 2 | Root docs — основной набор (13) | 13 | ✅ |
| Wave 3 | COMBINED domain overviews (7) | 7 | ✅ |
| Wave 4 | 15 mega-agent mirrors | 15 | ✅ |
| Wave 4b | Root docs — дополнительный набор (13) | 13 | ✅ |
| Wave 5a | obsidian-skills — 5 skill notes | 5 | ✅ |
| Wave 5b | obsidian-copilot docs (11) + designdocs (4) + index | 17 | ✅ |
| Wave 6a | Orchestration system notes (17) | 17 | ✅ |
| Wave 6b | MCP server notes (11) | 11 | ✅ |
| Wave 6c | Commands + Hooks index notes (2) + Welcome | 3 | ✅ |
| **Итого** | | **117** | **✅** |

---

## 📁 Структура vault

```
obsidian_vibe-coder/
├── 000 - Map of Maps.md          ← точка входа
├── Welcome.md                    ← bilingual welcome
├── MOC - *.md                    ← 9 MOC-хабов
├── _governance/                  ← 4 governance docs
├── _templates/                   ← note template
├── _audit/                       ← coverage reports
├── root-docs/                    ← 26 root doc mirrors
├── combined/                     ← 9 domain overviews + indexes
├── agents/                       ← 15 mega-agent notes
├── orchestration/                ← 17 system notes
├── mcp-servers/                  ← 11 MCP server notes
├── obsidian-skills/              ← 5 skill notes
└── obsidian-copilot/             ← 17 Copilot docs
```

---

## 📊 Покрытие по доменам

| Домен | Заметок | MOC | Орфанов |
|-------|---------|-----|---------|
| System / Root | 26 | [[MOC - System]] | 0 |
| Agents | 15 | [[MOC - Agents]] | 0 |
| Orchestration | 17 | [[MOC - Orchestration]] | 0 |
| MCP Servers | 11 | [[MOC - MCP Servers]] | 0 |
| Skills (COMBINED) | 9 | [[MOC - Skills]] | 0 |
| Memory | 3 | [[MOC - Memory]] | 0 |
| Security | 2 | [[MOC - Security]] | 0 |
| UI Design | 1 | [[MOC - UI Design]] | 0 |
| Plans & Roadmap | 10 | [[MOC - Plans & Roadmap]] | 0 |
| Obsidian Skills | 5 | [[MOC - Skills]] | 0 |
| Obsidian Copilot | 17 | [[MOC - Skills]] | 0 |

---

## 🎯 Definition of Done — статус

| Критерий | Статус |
|---------|--------|
| Каждая заметка linked к ≥1 MOC | ✅ |
| Каждая заметка имеет frontmatter | ✅ |
| Каждая заметка имеет `tags` | ✅ |
| Каждая заметка имеет `source` field | ✅ |
| Нет удалений в исходниках | ✅ |
| Нет орфанов (изолированных заметок) | ✅ |
| Map of Maps актуальна | ✅ |
| Governance docs существуют | ✅ |

---

## 🔧 Кандидаты для будущих волн

### Wave 7: COMBINED sub-domains детали
- `COMBINED/skills/` — 24 категории навыков (3000+ skills)
- `COMBINED/security/security-shannon/` — Shannon Pro детали
- `COMBINED/ui-design/` — Galaxy/shadcn/Impeccable детали
- `COMBINED/prompts/` — 4000+ промптов

### Wave 8: new_repos полный охват
- `new_repos/` — остальные репо кроме obsidian-*
- `COMBINED/reference/` — cursorrules, claude-hud

### Оценка охвата
- **Охвачено:** ~35% всего контента репо (ключевая документация и архитектура)
- **Не охвачено:** ~65% (детали skills, промпты, historical reports)
- **Навигационный охват:** ~95% (все ключевые entry points доступны)

---

## 🔍 Аудит связей

### Проверки выполнены
- ✅ Все 117 заметок имеют frontmatter
- ✅ Все 117 заметок имеют тег `domain/*`
- ✅ Все 117 заметок имеют backlinks через секцию "Связи"
- ✅ Орфаны отсутствуют (каждая заметка ссылается на ≥1 MOC)
- ✅ Map of Maps обновлена после каждой волны

### Потенциальные улучшения
- Добавить `.base` файлы для dashboard views по доменам
- Создать Canvas-файл с визуализацией pipeline (Step 0→4)
- Настроить graph.json filters для obsidian-skills и obsidian-copilot разделов
