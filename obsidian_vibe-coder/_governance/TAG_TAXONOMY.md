---
title: Tag Taxonomy
tags:
  - governance
  - meta
  - taxonomy
aliases:
  - tags
  - taxonomy
created: 2026-04-18
type: governance
status: active
---

# 🏷️ Tag Taxonomy — ULTRACAR v3.0 Vault

> Единый словарь тегов для всего vault.
> **Правило:** Используй только теги из этого словаря. Новые теги — через PR к этому документу.

## Структура тегов

Формат: `<namespace>/<value>`

---

## 🗂️ domain/ — Предметная область

| Тег | Описание | Примеры заметок |
|-----|----------|-----------------|
| `domain/system` | Системная архитектура ULTRACAR | CAPABILITIES, AGENTS |
| `domain/agents` | Агенты и мета-агенты | все mega-agents |
| `domain/orchestration` | Системы оркестрации | RuFlo, GSD, OMC, DeerFlow |
| `domain/skills` | Библиотеки навыков | Skills by category |
| `domain/security` | Безопасность и пентест | Shannon, CodeQL |
| `domain/memory` | Системы памяти | Supermemory, Claude-Mem, OpenViking |
| `domain/ui` | UI/UX дизайн | Galaxy, shadcn, UI/UX Pro Max |
| `domain/mcp` | MCP серверы и инструменты | Lightpanda, GitNexus |
| `domain/pipeline` | CI/CD и пайплайны | PIPELINE, GitHub Actions |
| `domain/prompts` | Промпты и шаблоны | System Prompts, Templates |
| `domain/obsidian` | Obsidian vault и интеграция | Governance docs |
| `domain/devops` | DevOps, Git, деплой | mega-devops |
| `domain/seo` | SEO и контент-маркетинг | mega-seo, SEOMachine |

---

## 📦 artifact/ — Тип артефакта

| Тег | Описание |
|-----|----------|
| `artifact/mega-agent` | Mega-агент (один из 15) |
| `artifact/moc` | Map of Content — хаб |
| `artifact/skill` | Навык (SKILL.md) |
| `artifact/prompt` | Промпт или шаблон промпта |
| `artifact/config` | Конфигурационный файл |
| `artifact/roadmap` | Роадмап или план |
| `artifact/report` | Отчёт или аудит |
| `artifact/governance` | Документ управления |
| `artifact/template` | Шаблон заметки |
| `artifact/reference` | Справочный документ |
| `artifact/workflow` | Рабочий процесс / пайплайн |
| `artifact/index` | Индексный файл / реестр |

---

## ⚡ status/ — Статус документа

| Тег | Описание |
|-----|----------|
| `status/active` | Активный, актуальный |
| `status/draft` | Черновик, в работе |
| `status/archived` | Устаревший, для истории |
| `status/needs-review` | Требует проверки/обновления |

---

## 🔤 lang/ — Язык контента

| Тег | Описание |
|-----|----------|
| `lang/en` | Только английский |
| `lang/ru` | Только русский |
| `lang/bilingual` | Двуязычный (EN + RU) |

---

## 📚 source/ — Репозиторий-источник

| Тег | Описание |
|-----|----------|
| `source/ruflo` | Из репо RuFlo |
| `source/gsd` | Из репо GSD (Get-Shit-Done) |
| `source/omc` | Из репо OMC |
| `source/deerflow` | Из репо DeerFlow |
| `source/hermes` | Из репо Hermes |
| `source/shannon` | Из репо Shannon |
| `source/superpowers` | Из репо Superpowers |
| `source/obsidian-skills` | Из репо obsidian-skills |
| `source/obsidian-copilot` | Из репо obsidian-copilot |
| `source/root` | Корневые файлы репо |
| `source/combined` | Из COMBINED директории |
| `source/new-repos` | Из new_repos директории |

---

## 🤖 agent/ — Мета-агент

| Тег | Описание |
|-----|----------|
| `agent/mega-orchestrator` | Оркестратор |
| `agent/mega-coder` | Кодер |
| `agent/mega-debugger` | Дебаггер |
| `agent/mega-planner` | Планировщик |
| `agent/mega-researcher` | Исследователь |
| `agent/mega-designer` | Дизайнер |
| `agent/mega-security` | Безопасность |
| `agent/mega-seo` | SEO |
| `agent/mega-reviewer` | Ревьюер |
| `agent/mega-tester` | Тестировщик |
| `agent/mega-architect` | Архитектор |
| `agent/mega-executor` | Исполнитель |
| `agent/mega-writer` | Писатель/Документатор |
| `agent/mega-devops` | DevOps |
| `agent/mega-infrastructure` | Инфраструктура |

---

## 📏 Правила применения тегов

1. **Минимум 2 тега** на заметку: один `domain/`, один `artifact/`
2. **Статус обязателен**: всегда добавлять `status/active` (или другой)
3. **Максимум тегов**: не больше 8 на заметку (избегай шума)
4. **Комбинирование domain/ и agent/**: используй оба тега `domain/agents` + `agent/mega-*` только когда заметка сама является мега-агентом. При простом упоминании агентов — только `domain/agents`
5. **Иерархия**: используй самый точный подтег

---

## 🔗 Ссылки

- [[_governance/VAULT_GOVERNANCE]] — Правила vault
- [[_governance/NOTE_TEMPLATE]] — Шаблон с примером тегов
- [[_governance/NEW_DOC_CHECKLIST]] — Чеклист новой заметки
- [[000 - Map of Maps]] — Главная карта
- [[MOC - System]] — System overview
