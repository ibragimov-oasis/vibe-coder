---
title: mega-devops — Git, CI/CD & Deployment
tags:
  - domain/devops
  - artifact/mega-agent
  - agent/mega-devops
  - status/active
source: "../COMBINED/agents/mega/mega-devops.md"
created: 2026-04-18
type: mirror
aliases:
  - devops
  - mega-devops
---

# 🤖 mega-devops — Git, CI/CD & Deployment

> **Мега-агент** для Git, CI/CD и деплоя.
> Когда использовать: deploy, CI/CD, git, docker задачи.

## Когда использовать

```
IF deploy/CI/CD/git/docker → mega-devops
```

## Источники

OMC + RuFlo DevOps + **Matt Pocock git-guardrails** + **cc-connect (remote access)**

## git-guardrails (Matt Pocock)

Безопасные git операции — предотвращение катастроф:

```bash
# Перед любым деструктивным действием:
# 1. Создать backup branch
# 2. Проверить что в clean state
# 3. Подтвердить операцию
```

## cc-connect — Remote Access (10 платформ)

Триггерить агентов удалённо:
- Telegram, Slack, Discord, WeChat
- + 6 других платформ
- Поддержка: cron jobs, voice, images, 7 AI агентов

## Git Workflow

```bash
# Feature workflow
git checkout dev && git pull origin dev
git checkout -b feature/your-feature
# ... работа ...
git commit -m "feat(scope): description"
git push && gh pr create --base dev
```

## Связан с

- [[MOC - Agents]] — родительский хаб
- [[MOC - Orchestration]] — cc-connect system
- [[skills/skills-devops]] — DevOps skills
- [[skills/skills-development]] — git-guardrails (Matt Pocock)
- [[orchestration/core-cc-connect]] — remote access 10 platforms
- [[orchestration/core-omc]] — OMC multi-agent DevOps

## Исходник

> 📂 `../COMBINED/agents/mega/mega-devops.md`

## 🔗 Связи

- [[MOC - Agents]] — Parent MOC
- [[MOC - Orchestration]] — Orchestration systems
- [[000 - Map of Maps]] — Map of Maps

