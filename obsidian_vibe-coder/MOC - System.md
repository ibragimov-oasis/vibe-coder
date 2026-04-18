---
title: MOC - System
tags:
  - domain/system
  - artifact/moc
  - status/active
aliases:
  - system map
  - ultracar overview
created: 2026-04-18
type: moc
---

# 🗺️ MOC — System

> **Map of Content** для домена `System`.
> Охватывает архитектуру ULTRACAR, идентичность системы, capabilities и конфигурацию для разных IDE.

## 🧬 Идентичность и архитектура

- [[root-docs/README]] — История создания, числа, обзор системы
- [[root-docs/CAPABILITIES]] — VIBE-CODER Capabilities Registry: 5 hardcoded rules, Karpathy principles
- [[root-docs/AGENTS]] — Полный каталог агентов (54 репо, 336+ ролей)
- [[root-docs/INTERFACE_MATRIX]] — Что работает в каком IDE (Claude, Copilot, Cursor, Codex, Gemini)

## ⚡ Пайплайн

- [[root-docs/PIPELINE]] — Расширенный пайплайн: Task Master → Archon → Background Agent → Hermes → Shannon → CRG
- [[root-docs/PIPELINE_TRIGGER]] — Routing decision tree, post-task checklist, agent selection logic

## 📋 Планирование и структура

- [[root-docs/MASTER_PLAN]] — Единый источник правды по организации репо
- [[root-docs/EXECUTION_PLAN]] — Фазовый план выполнения
- [[root-docs/AUDIT]] — Маппинг 172+ config files из 31 репо
- [[root-docs/QUICKSTART]] — Быстрый старт для новых пользователей
- [[root-docs/CONTRIBUTING]] — Инструкции для контрибьюторов

## 🧠 Память системы

- [[root-docs/MEMORY]] — 3-уровневая архитектура памяти
- [[MOC - Memory]] → подробнее о системах памяти

## 🔄 Оркестрация

- [[root-docs/ORCHESTRATION]] — 5 систем оркестрации (сравнение)
- [[MOC - Orchestration]] → подробнее

## Связанные MOC

- [[MOC - Agents]] — Детали по агентам
- [[MOC - Orchestration]] — Детали оркестрации
- [[MOC - Memory]] — Системы памяти
- [[MOC - MCP Servers]] — MCP серверы
- [[000 - Map of Maps]] — Главная карта

## 📁 Конфигурация по IDE

| IDE | Config path |
|-----|-------------|
| Claude Code | `.claude/` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| Cursor | `.cursor/rules/` |
| OpenAI Codex | `.codex/AGENTS.md` |
| Gemini CLI | `.gemini/GEMINI.md` |
| Antigravity | `.antigravity/` |
