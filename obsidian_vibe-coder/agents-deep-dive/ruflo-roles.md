---
title: "Agents Deep-Dive: RuFlo Core Roles"
tags:
  - domain/agents
  - artifact/index
  - status/active
  - source/combined
aliases:
  - ruflo roles
  - ruflo agents deep-dive
  - enterprise orchestration agents
created: 2026-04-18
type: agents-deepdive
source: "../COMBINED/orchestration/core-ruflo/"
---

# 🏭 RuFlo Core Roles — Agents Deep-Dive

> **Источник:** `../COMBINED/orchestration/core-ruflo/`
> **Репозиторий:** RuFlo (29k⭐) — Enterprise agent orchestration
> **Агентов:** 80+ (самая большая категория)
> **Мета-агент:** [[agents/mega-infrastructure]]

---

## Архитектура RuFlo

RuFlo использует **Q-Learning Router** для динамической маршрутизации задач между агентами.

```
Задача
  ↓
Q-Learning Router
  ↓
Выбор агента(ов)
  ↓
Parallel/Sequential execution
  ↓
Consensus / Aggregation
  ↓
Результат
```

---

## Ключевые категории ролей

### 🏗️ Planning & Architecture (13 агентов)
| Агент | Описание |
|-------|----------|
| `ruflo-core-planner` | Основной планировщик задач |
| `ruflo-github-repo-architect` | Архитектор GitHub репозиториев |
| `ruflo-agentdb-architect` | Архитектор AgentDB систем |
| `ruflo-spec-writer` | Написание спецификаций |
| `ruflo-task-decomposer` | Декомпозиция задач |

### 💻 Development (17 агентов)
| Агент | Описание |
|-------|----------|
| `ruflo-core-coder` | Основной кодер (JavaScript/TypeScript) |
| `ruflo-python-coder` | Python специалист |
| `ruflo-go-coder` | Go специалист |
| `ruflo-code-simplifier` | Упрощение кода |
| `ruflo-code-reviewer` | Ревью кода |

### 🔒 Security (6 агентов)
| Агент | Описание |
|-------|----------|
| `ruflo-security-auditor` | Полный security аудит |
| `ruflo-prompt-injection-detector` | Обнаружение prompt injection |
| `ruflo-secret-scanner` | Сканирование секретов |

### 🏭 Infrastructure & Consensus (80+ агентов)
| Агент | Описание |
|-------|----------|
| `ruflo-consensus-manager` | Управление консенсусом |
| `ruflo-swarm-coordinator` | Координация роя агентов |
| `ruflo-resource-optimizer` | Оптимизация ресурсов |
| `ruflo-quality-manager` | QA менеджер |
| `ruflo-risk-manager` | Управление рисками |

---

## Q-Learning Routing (уникальная фича)

```python
# Псевдокод Q-Learning Router
state = analyze_task(task)
action = q_table[state].argmax()  # выбрать лучшего агента
reward = execute_and_evaluate(action, task)
q_table[state][action] += learning_rate * reward
```

Агент **учится** на опыте: задачи типа X → агент Y (с течением времени маршрутизация улучшается)

---

## Связи

- **MOC:** [[MOC - Agents]]
- **Система:** [[orchestration/core-ruflo]]
- **Role index:** [[agents-by-role/manager]]
- **Мета-агент:** [[agents/mega-infrastructure]]
- **Map:** [[000 - Map of Maps]]

## См. также

- [[agents-deep-dive/omc-team-roles]] — OMC команда
- [[agents-by-role/coder]] — кодеры из разных систем

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[000 - Map of Maps]] — Map of Maps

