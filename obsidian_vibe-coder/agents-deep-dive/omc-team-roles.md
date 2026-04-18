---
title: "Agents Deep-Dive: OMC Team Roles"
tags:
  - domain/agents
  - artifact/index
  - status/active
  - source/combined
aliases:
  - omc team roles
  - omc agents deep-dive
  - multi-agent team
created: 2026-04-18
type: agents-deepdive
source: "../COMBINED/orchestration/core-omc/"
---

# 👥 OMC Team Roles — Agents Deep-Dive

> **Источник:** `../COMBINED/orchestration/core-omc/`
> **OMC = Oh My Claude** — Multi-agent coordination methodology
> **Агентов:** 19 специализированных ролей
> **Работает:** в ЛЮБОМ AI интерфейсе (Claude, Copilot, Cursor)

---

## 19 Специализированных ролей

### 🔍 Analysis & Research
| Роль | Описание |
|------|----------|
| `explore` | Исследование кодовой базы |
| `analyst` | Анализ и оценка |
| `researcher` | Deep research с синтезом |
| `synthesizer` | Объединение результатов |
| `scientist` | Научное исследование |

### 🏗️ Planning & Architecture
| Роль | Описание |
|------|----------|
| `planner` | Создание execution plans |
| `architect` | Системная архитектура |
| `plan-checker` | Верификация планов |

### 💻 Implementation
| Роль | Описание |
|------|----------|
| `executor` | Выполнение планов |
| `coder` | Написание кода |
| `code-simplifier` | Упрощение кода |

### ✅ Quality & Verification
| Роль | Описание |
|------|----------|
| `verifier` | Верификация результатов |
| `code-reviewer` | Ревью кода |
| `security-reviewer` | Security ревью |
| `test-engineer` | Тестирование |
| `qa-tester` | QA тестирование |
| `critic` | Критический разбор |

### 📝 Documentation & Operations
| Роль | Описание |
|------|----------|
| `document-specialist` | Документация |
| `writer` | Технический текст |
| `git-master` | Git операции |
| `tracer` | Трассировка кода |
| `debugger` | Отладка |
| `designer` | UI/UX дизайн |

---

## Team Pipeline

```
team-plan → team-prd → team-exec → team-verify → team-fix
   ↑                                                 |
   └─────────────────────────────────────────────────┘
                      (loop if issues)
```

## Принцип делегирования

> "Делегируй специализированную работу наиболее подходящему агенту. Предпочитай доказательства предположениям."

---

## Команды OMC

```bash
# Начать командную работу
/team-plan "задача"

# Проверить план
/team-verify

# Исправить проблемы
/team-fix "описание проблемы"
```

---

## Связи

- **MOC:** [[MOC - Agents]]
- **MOC:** [[MOC - Orchestration]]
- **Система:** [[orchestration/core-omc]]
- **Agents by role:** [[agents-by-role/index]]
- **Мета-агент:** [[agents/mega-orchestrator]]
- **Map:** [[000 - Map of Maps]]

## См. также

- [[agents-by-role/index]] — полная таблица 19 ролей
- [[agents-deep-dive/ruflo-roles]] — RuFlo роли (80+ агентов)
