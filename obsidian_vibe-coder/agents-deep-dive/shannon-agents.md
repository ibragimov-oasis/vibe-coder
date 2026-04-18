---
title: "Agents Deep-Dive: Shannon Pro Security Agents"
tags:
  - domain/agents
  - domain/security
  - artifact/index
  - status/active
  - source/combined
aliases:
  - shannon agents
  - security agents deep-dive
  - pentesting agents
created: 2026-04-18
type: agents-deepdive
source: "../COMBINED/security/security-shannon/"
---

# 🔐 Shannon Pro — Security Agents Deep-Dive

> **Источник:** `../COMBINED/security/security-shannon/`
> **Репозиторий:** Shannon (35k⭐) — white-box security pentesting
> **Мета-агент:** [[agents/mega-security]]

---

## Архитектура (13 агентов, 5 фаз)

### Phase 1: Static Analysis (SAST)
| Агент | Специализация |
|-------|--------------|
| `sast-injector` | SQL/Command/Template injection |
| `sast-xss-hunter` | XSS (DOM, reflected, stored) |
| `sast-secrets-detector` | Hardcoded credentials, API keys |
| `sast-auth-analyzer` | Authentication/Authorization bypass |

### Phase 2: Dependency & Supply Chain (SCA)
| Агент | Специализация |
|-------|--------------|
| `sca-reachability` | CVE с reachability analysis |
| `sca-supply-chain` | Supply chain атаки |

### Phase 3: Business Logic
| Агент | Специализация |
|-------|--------------|
| `biz-logic-tester` | Race conditions, IDOR, privilege escalation |

### Phase 4: Dynamic Testing (via Lightpanda)
| Агент | Специализация |
|-------|--------------|
| `dynamic-sqli` | SQL injection (runtime) |
| `dynamic-xss` | XSS (runtime) |
| `dynamic-ssrf` | SSRF/Path traversal |
| `dynamic-auth` | Auth bypass (runtime) |
| `dynamic-csrf` | CSRF токены |

### Phase 5: Reporting
| Агент | Специализация |
|-------|--------------|
| `report-generator` | Финальный отчёт с severity + fix suggestions |

---

## Vulnerability Checklist (Shannon Pro)

```
🔴 CRITICAL
- [ ] SQL Injection
- [ ] Command Injection
- [ ] Authentication bypass
- [ ] Hardcoded secrets

🟠 HIGH
- [ ] XSS (stored)
- [ ] SSRF
- [ ] Path traversal
- [ ] Broken authorization (IDOR)

🟡 MEDIUM
- [ ] XSS (reflected/DOM)
- [ ] CSRF
- [ ] Race condition
- [ ] Missing security headers
```

---

## Интеграция с ULTRACAR Pipeline

```
Step 3 (после кода):  Shannon → Security Audit
Loop:  если уязвимости → fix → перейти к Step 1
Done:  если чисто → deliver
```

Браузер для динамического тестирования: [[mcp-servers/mcp-lightpanda]] (9x быстрее Chrome)

---

## Связи

- **MOC:** [[MOC - Security]]
- **Мета-агент:** [[agents/mega-security]]
- **Shannon overview:** [[security/shannon-pro]]
- **Pipeline:** [[root-docs/PIPELINE]]
- **Map:** [[000 - Map of Maps]]

## См. также

- [[agents-deep-dive/ruflo-roles]] — RuFlo security roles
- [[mcp-servers/mcp-code-review-graph]] — structural security analysis
