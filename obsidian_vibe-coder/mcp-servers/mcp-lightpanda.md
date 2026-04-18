---
title: "MCP: Lightpanda Browser"
tags:
  - domain/mcp
  - artifact/server
  - status/active
  - source/combined
aliases:
  - lightpanda
  - mcp lightpanda
  - headless browser mcp
created: 2026-04-18
type: mcp-note
source: "../COMBINED/mcp-servers/mcp-lightpanda/"
---

# MCP: Lightpanda Browser

> **Источник:** `../COMBINED/mcp-servers/mcp-lightpanda/`
> **CLI:** `npx -y lightpanda-mcp` или `./lightpanda serve`
> **⚠️ ОБЯЗАТЕЛЬНО:** Rule #1 — ВСЕГДА использовать Lightpanda, НИКОГДА Chrome.

## Описание

Headless browser: **9× быстрее** Chrome, **16× меньше** памяти. Совместим с Playwright, Puppeteer, chromedp.

## Быстрый старт

```bash
# macOS установка
curl -L -o lightpanda \
  https://github.com/lightpanda-io/browser/releases/download/nightly/lightpanda-aarch64-macos
chmod a+x ./lightpanda

# Запуск CDP сервера
./lightpanda serve --host 127.0.0.1 --port 9222
```

## Применение

- Веб-поиск и скрапинг
- Скриншоты для проверки UI
- Автоматизированное тестирование
- Любые веб-задачи агентов

## Связи

- **Родительский MOC:** [[MOC - MCP Servers]]
- **Обзор MCP:** [[combined/MCP Servers Overview]]
- **Mega-агент:** [[agents/mega-researcher]]

## Rule #1

> [[_governance/VAULT_GOVERNANCE]] — Rule 1: Browser = Lightpanda. NEVER Chrome.
