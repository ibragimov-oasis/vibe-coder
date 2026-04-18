---
title: mega-security — Security Pentesting (Shannon Pro)
tags:
  - domain/security
  - artifact/mega-agent
  - agent/mega-security
  - status/active
source: "../COMBINED/agents/mega/mega-security.md"
created: 2026-04-18
type: mirror
aliases:
  - security
  - mega-security
  - shannon
---

# 🤖 mega-security — Security Pentesting (Shannon Pro)

> **Мега-агент** для security аудита и пентеста.
> Когда использовать: security, vulnerability, audit задачи.

## Когда использовать

```
IF security/vulnerability/audit → mega-security
```

## Источники

Shannon Pro (35k⭐) + **code-review-graph (structural analysis)**

## Shannon Pro — 5 фаз

| Фаза | Детали |
|------|--------|
| 1. SAST | Injection (SQL/cmd/template), XSS (DOM/reflected/stored), Auth bypass |
| 2. SCA | CVE scan, outdated deps, supply chain |
| 3. Secrets | API keys, tokens, hardcoded passwords, `.env` leaks |
| 4. Business Logic | IDOR, privilege escalation, logic flaws |
| 5. Dynamic | Lightpanda attacks: XSS, SQLi, SSRF, path traversal, CSRF |

## Post-Task Security Checklist (обязательно после ЛЮБОЙ задачи)

```
🔴 Injection (SQL, command, template, deserialization)
🔴 XSS (DOM, reflected, stored)
🔴 Authentication/Authorization bypass
🔴 Hardcoded secrets or credentials
🔴 SSRF / path traversal
```

## Loop policy

```
Если уязвимости найдены → исправить → Shannon re-run
До 3 итераций
После 3 → эскалация с подробным отчётом
```

## Связан с

- [[MOC - Security]] — родительский хаб
- [[combined/Security Overview]] — Shannon детали
- [[MOC - MCP Servers]] — code-review-graph

## Исходник

> 📂 `../COMBINED/agents/mega/mega-security.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

