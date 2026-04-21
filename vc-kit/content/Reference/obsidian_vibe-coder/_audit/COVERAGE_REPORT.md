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

# 📊 Coverage Report — Obsidian Vault Vibe-Coder v3.0

> **Режим интеграции:** Mirror (недеструктивный — исходники не тронуты)
> **Дата аудита:** 2026-04-18
> **Всего заметок в vault:** ~217

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
| Wave 6c | Commands + Hooks index notes + Welcome | 3 | ✅ |
| Wave 7a | Skills category notes (21) | 21 | ✅ |
| Wave 7b | UI Design notes (8: Galaxy, shadcn, Impeccable...) | 8 | ✅ |
| Wave 7c | Security: Shannon Pro + reports index | 2 | ✅ |
| Wave 7d | Prompts: 5 category notes | 5 | ✅ |
| Wave 7e | Reference: claude-hud, cursorrules, selfhosted, awesome-obsidian | 4 | ✅ |
| Wave 8a | Agents By Role: index + 12 role notes | 13 | ✅ |
| Wave 9a | Matt Pocock 13 individual skill notes + index | 14 | ✅ |
| Wave 9b | Karpathy 4 individual principle notes + index | 5 | ✅ |
| Wave 10 | Agents Deep-Dive: 5 notes (Shannon, RuFlo, DeerFlow, OMC, Superpowers) | 5 | ✅ |
| Wave 11 | UI Gallery: 5 notes (Galaxy, shadcn, Impeccable, UI-Patterns, Tokens) | 5 | ✅ |
| Wave 12 | Governance: VAULT_PERFORMANCE + DOCUMENT_REGISTRY | 2 | ✅ |
| MOC/Map Updates | Links updated: all MOCs + 000 Map of Maps | — | ✅ |
| **Итого** | | **~217** | **✅** |

---

## 📁 Структура vault

```
obsidian_vibe-coder/
├── 000 - Map of Maps.md          ← точка входа
├── Welcome.md                    ← bilingual welcome
├── MOC - *.md                    ← 9 MOC-хабов
├── _governance/                  ← 5 governance docs (+ VAULT_PERFORMANCE)
├── _templates/                   ← note template
├── _audit/                       ← coverage + DOCUMENT_REGISTRY
├── root-docs/                    ← 26 root doc mirrors
├── combined/                     ← 9 domain overviews + indexes
├── agents/                       ← 15 mega-agent notes
├── agents-by-role/               ← 13 role notes (19 roles, 189 agents)
├── agents-deep-dive/             ← 5 deep-dive notes (Wave 10)
├── orchestration/                ← 17 system notes
├── mcp-servers/                  ← 11 MCP server notes
├── skills/                       ← 21 category notes + matt-pocock/ + karpathy/
│   ├── matt-pocock/              ← 14 individual skill notes (Wave 9a)
│   └── karpathy/                 ← 5 principle notes (Wave 9b)
├── ui-design/                    ← 8 UI design notes + gallery/
│   └── gallery/                  ← 5 gallery notes (Wave 11)
├── security/                     ← 2 security notes
├── prompts/                      ← 5 prompts category notes
├── reference/                    ← 4 reference notes
├── obsidian-skills/              ← 5 skill notes
└── obsidian-copilot/             ← 17 Copilot docs
```

---

## 📊 Покрытие по доменам

| Домен | Заметок | MOC | Орфанов |
|-------|---------|-----|---------|
| System / Root | 26 | [[MOC - System]] | 0 |
| Agents (mega) | 15 | [[MOC - Agents]] | 0 |
| Agents (by role) | 13 | [[MOC - Agents]] | 0 |
| Agents (deep-dive) | 5 | [[MOC - Agents]] | 0 |
| Orchestration | 17 | [[MOC - Orchestration]] | 0 |
| MCP Servers | 11 | [[MOC - MCP Servers]] | 0 |
| Skills (COMBINED overviews) | 9 | [[MOC - Skills]] | 0 |
| Skills (category notes) | 21 | [[MOC - Skills]] | 0 |
| Skills (Matt Pocock) | 14 | [[MOC - Skills]] | 0 |
| Skills (Karpathy) | 5 | [[MOC - Skills]] | 0 |
| UI Design (overview) | 8 | [[MOC - UI Design]] | 0 |
| UI Design (gallery) | 5 | [[MOC - UI Design]] | 0 |
| Memory | 3 | [[MOC - Memory]] | 0 |
| Security | 4 | [[MOC - Security]] | 0 |
| Plans & Roadmap | 10 | [[MOC - Plans & Roadmap]] | 0 |
| Prompts | 5 | [[MOC - Plans & Roadmap]] | 0 |
| Reference | 4 | [[MOC - System]] | 0 |
| Obsidian Skills | 5 | [[MOC - Skills]] | 0 |
| Obsidian Copilot | 17 | [[MOC - Skills]] | 0 |
| **Итого** | **~217** | | **0** |

---

## 🎯 Definition of Done — статус

| Критерий | Статус |
|---------|--------|
| Каждая заметка linked к ≥1 MOC | ✅ |
| Каждая заметка имеет frontmatter | ✅ |
| Каждая заметка имеет `tags` | ✅ |
| Каждая заметка имеет `source` field | ✅ |
| Нет удалений в исходниках | ✅ |
| Нет орфанов | ✅ |
| Map of Maps актуальна | ✅ |
| Governance docs существуют | ✅ |
| Document Registry создан | ✅ |
| Vault Performance Guide создан | ✅ |

---

## 📈 Оценка охвата

- **Охвачено:** ~70% всего контента репо (ключевая документация, архитектура, навыки)
- **Не охвачено:** ~30% (промпты, агент файлы по ролям, cursor rules детали)
- **Навигационный охват:** ~99% (все ключевые entry points доступны)

---

## 🔧 Будущие волны (Optional)

### Wave 13: Role Agents individual notes
- Индивидуальные notes для топ-10 агентов из каждой роли

### Wave 14: Prompts Deep-Dive
- Individual prompt file notes (cursor rules по стекам)

### Wave 15: New repos long-tail
- obsidian-copilot полный охват
- SEOMachine детали

---

## 🔍 Аудит связей

### Проверки выполнены
- ✅ Все заметки имеют frontmatter
- ✅ Все заметки имеют тег `domain/*`
- ✅ Все заметки имеют backlinks через секцию "Связи"
- ✅ Орфаны отсутствуют
- ✅ Map of Maps обновлена после каждой волны
- ✅ Все MOC-хабы обновлены с wikilinks на Wave 9-11 notes
- ✅ Document Registry создан (`_audit/DOCUMENT_REGISTRY`)
- ✅ Vault Performance Guide создан (`_governance/VAULT_PERFORMANCE`)

## 🔗 Связи

- [[MOC - System]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

