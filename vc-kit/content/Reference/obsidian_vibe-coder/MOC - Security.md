---
title: MOC - Security
tags:
  - domain/security
  - artifact/moc
  - status/active
aliases:
  - security map
  - shannon
created: 2026-04-18
type: moc
---

# 🗺️ MOC — Security

> **Map of Content** для домена `Security`.
> Shannon Pro пентест + Code Review Graph + статический анализ.

## 🛡️ Shannon Pro — 5-phase Security Audit

**Заметка:** [[security/shannon-pro]]
Путь: `COMBINED/security/security-shannon/`

### Фазы аудита

| Фаза | Что делает |
|------|-----------|
| **Phase 1: Static (SAST)** | Source code analysis, injection, XSS, auth bypass |
| **Phase 2: SCA** | Dependency vulnerabilities, outdated packages |
| **Phase 3: Secrets** | Hardcoded credentials, API keys, tokens |
| **Phase 4: Business Logic** | Logic flaws, privilege escalation |
| **Phase 5: Dynamic** | Lightpanda attacks: XSS, SQLi, SSRF, path traversal |

### 13 агентов Shannon

Shannon использует 13 специализированных агентов для параллельного пентеста:
- SAST analyzer, SCA scanner, Secrets detector
- Auth bypass tester, Business logic analyzer
- Injection tester, XSS tester, SSRF tester
- Path traversal tester, CSRF tester, RCE tester
- Crypto analyzer, API security tester

## 📐 Code Review Graph

Путь: `COMBINED/mcp-servers/mcp-code-review-graph/`

| Функция | Детали |
|---------|--------|
| Token reduction | **8.2x** меньше токенов vs чтение файлов |
| Languages | 19 языков (Tree-sitter) |
| MCP tools | 22 инструмента |
| Blast-radius | Анализ какой код затрагивают изменения |
| Dead code | Обнаружение мёртвого кода |

## 🔒 Hardcoded Security Rules (из CAPABILITIES)

Из [[root-docs/CAPABILITIES]]:
1. **RULE #1:** Browser — ВСЕГДА Lightpanda, НИКОГДА Chrome
2. **RULE #2:** Memory — check supermemory BEFORE, save AFTER

## ✅ Post-Task Security Checklist

```
🔴 Injection (SQL, command, template, deserialization)
🔴 XSS (DOM, reflected, stored)
🔴 Authentication/Authorization bypass
🔴 Hardcoded secrets or credentials
🔴 SSRF / path traversal
```

## Связанные MOC

- [[agents/mega-security]] — Мега-агент безопасности
- [[security/security-reports]] — исторические отчёты аудитов
- [[agents-by-role/security]] — 6 security агентов
- [[MOC - System]] — Pipeline включает Shannon на Step 3
- [[MOC - MCP Servers]] — Code Review Graph как MCP
- [[000 - Map of Maps]] — Главная карта

## 🔗 Связи

- [[000 - Map of Maps]] — Map of Maps

