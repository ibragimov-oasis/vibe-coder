---
title: "MCP: MarkItDown (File to Markdown)"
tags:
  - domain/mcp
  - artifact/server
  - status/active
  - source/combined
aliases:
  - markitdown
  - mcp markitdown
  - file conversion mcp
created: 2026-04-18
type: mcp-note
source: "../COMBINED/mcp-servers/mcp-markitdown/"
---

# MCP: MarkItDown (File to Markdown)

> **Источник:** `../COMBINED/mcp-servers/mcp-markitdown/`
> **CLI:** `markitdown <filename>`
> **Установка:** `pip install markitdown`

## Описание

Конвертация любого файла в Markdown. Идеально для исследований с не-markdown источниками.

## Поддерживаемые форматы

| Тип | Форматы |
|-----|---------|
| Документы | PDF, DOCX, PPTX, XLSX, ODT |
| Изображения | PNG, JPG (OCR + описание) |
| Аудио | MP3, WAV (транскрипция) |
| Веб | HTML, XML |
| Архивы | ZIP (рекурсивно) |

## Применение

```bash
markitdown report.pdf > report.md
markitdown presentation.pptx > slides.md
markitdown spreadsheet.xlsx > data.md
```

## Связи

- **Родительский MOC:** [[MOC - MCP Servers]]
- **Обзор MCP:** [[combined/MCP Servers Overview]]
- **Mega-агент:** [[agents/mega-researcher]]

## См. также

- [[mcp-servers/mcp-lightpanda]] — веб → markdown (через скрапинг)
- [[obsidian-skills/defuddle]] — URL → clean markdown

## 🔗 Связи

- [[MOC - MCP Servers]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

