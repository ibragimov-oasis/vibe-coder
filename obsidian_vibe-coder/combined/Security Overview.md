---
title: Security Overview — COMBINED/security
tags:
  - domain/security
  - artifact/index
  - status/active
  - source/combined
source: "../COMBINED/security/"
created: 2026-04-18
type: mirror
aliases:
  - combined security
  - shannon directory
---

# 📄 Security Overview — COMBINED/security

> **Тип:** Domain overview | **Источник:** `../COMBINED/security/`
> **Краткое описание:** Shannon Pro пентестер — 5-фазный аудит с 13 агентами + code-review-graph структурный анализ.

## Структура директории

```
COMBINED/security/
└── security-shannon/        — Shannon Pro pentester
    ├── SHANNON-PRO.md        — Полная методология
    ├── agents/               — 13 специализированных агентов
    ├── prompts/              — Security prompts
    └── commands/             — Shannon команды
```

## Shannon Pro — Методология

**Файл**: `COMBINED/security/security-shannon/SHANNON-PRO.md`

### 5 Фаз

| Фаза | Что делает |
|------|-----------|
| 1. Static (SAST) | Анализ исходного кода: injection, XSS, auth |
| 2. SCA | Уязвимые зависимости, устаревшие пакеты |
| 3. Secrets | Hardcoded credentials, API ключи, токены |
| 4. Business Logic | Логические уязвимости, privilege escalation |
| 5. Dynamic | Lightpanda атаки: XSS, SQLi, SSRF, path traversal |

### 13 агентов

- SAST analyzer, SCA scanner, Secrets detector
- Auth bypass tester, Business logic analyzer
- Injection tester, XSS tester, SSRF tester
- Path traversal tester, CSRF tester, RCE tester
- Crypto analyzer, API security tester

## Code Review Graph (безопасность)

Путь: `COMBINED/mcp-servers/mcp-code-review-graph/`

- Blast-radius analysis — какой код затрагивают изменения
- Dead code detection
- 8.2x token reduction
- Risk scoring

## Security команды (`.claude/commands/`)

- `security-scan` — быстрое сканирование
- `security-audit` — полный Shannon аудит

## Связан с

- [[MOC - Security]] — родительский хаб
- [[agents/mega-security]] — мега-агент
- [[MOC - MCP Servers]] — code-review-graph MCP
