---
title: "Security: Shannon Pro"
tags:
  - domain/security
  - artifact/system
  - status/active
  - source/combined
aliases:
  - shannon pro
  - shannon pentester
  - appsec platform
created: 2026-04-18
type: security-note
source: "../.claude/security/security-shannon/"
---

# Security: Shannon Pro

> **Источник:** `../.claude/security/security-shannon/`
> **Stars:** 35k⭐
> **Step 3** в Vibe-Coder Pipeline: Security Audit.

## О чём

Shannon Pro — комплексная AppSec платформа. Объединяет SAST, SCA, secrets scanning, business logic testing и автономный pentesting.

## Уникальные преимущества

- **Static-dynamic correlation** — статические находки автоматически верифицируются динамически
- **LLM-powered reasoning** — не pattern-matching, а понимание контекста
- **Proof-of-concept exploits** — каждая уязвимость верифицирована рабочим PoC
- **Self-hosted runner** — код и LLM вызовы не покидают инфраструктуру
- **Zero false positives** — корреляция устраняет ложные срабатывания

## Двухфазная архитектура

### Фаза 1: Агентный статический анализ (AppSec)

| Компонент | Описание |
|-----------|----------|
| **CPG SAST** | Data flow анализ на основе Code Property Graph |
| **SCA** | Анализ зависимостей с reachability analysis |
| **Secrets Detection** | Обнаружение секретов и credentials |
| **Business Logic Testing** | Тестирование бизнес-логики |

### Фаза 2: Автономный Pentesting

13 специализированных агентов:

| Агент | Атакует |
|-------|---------|
| Injection Agent | SQL/NoSQL injection, SSTI |
| XSS Agent | DOM, reflected, stored XSS |
| Auth Agent | Auth bypass, token forgery |
| IDOR Agent | Object references |
| SSRF Agent | Server-side request forgery |
| Path Agent | Path traversal |
| Secrets Agent | Exposed credentials |
| API Agent | API abuse patterns |
| Race Agent | Race conditions |
| Logic Agent | Business logic flaws |
| Crypto Agent | Weak cryptography |
| Session Agent | Session management |
| Upload Agent | File upload vulnerabilities |

## Чеклист (POST-TASK)

```
🔴 Injection (SQL, command, template, deserialization)
🔴 XSS (DOM, reflected, stored)
🔴 Auth/Auth bypass
🔴 Hardcoded secrets or credentials
🔴 SSRF / path traversal
```

## CI/CD Интеграция

- GitHub PR scanning
- Service boundary detection
- Self-hosted runner поддержка

## Связи

- **Родительский MOC:** [[MOC - Security]]
- **Обзор безопасности:** [[combined/Security Overview]]
- **Mega-агент:** [[agents/mega-security]]
- **Pipeline Step 3:** [[root-docs/PIPELINE]]

## См. также

- [[mcp-servers/mcp-code-review-graph]] — blast-radius анализ
- [[mcp-servers/mcp-lightpanda]] — динамическое тестирование

## 🔗 Связи

- [[MOC - Security]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

