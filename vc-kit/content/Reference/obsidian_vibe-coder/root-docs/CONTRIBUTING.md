---
title: CONTRIBUTING — How to Contribute
tags:
  - domain/system
  - artifact/governance
  - status/active
  - source/root
  - lang/en
source: "../CONTRIBUTING.md"
created: 2026-04-18
type: mirror
aliases:
  - contributing
  - contribution guide
---

# 📄 CONTRIBUTING — How to Contribute

> **Тип:** Mirror-заметка | **Источник:** `../CONTRIBUTING.md`
> **Краткое описание:** Инструкции для контрибьюторов — git workflow, стандарты коммитов, как добавлять новые репозитории.

## О документе

CONTRIBUTING.md описывает процесс контрибуции. Содержит: Git workflow (feature → dev → main), формат коммитов (conventional commits), правила именования файлов, как добавлять новые репозитории в систему.

## Git Workflow

```
feature → dev → main (PR только)
```

```bash
# 1. Старт от dev
git checkout dev && git pull origin dev
# 2. Feature branch
git checkout -b feature/your-feature-name
# 3. Conventional commits
git commit -m "feat(scope): description"
# 4. PR в dev
git push && gh pr create --base dev
```

## Commit Types

`feat:` `fix:` `docs:` `refactor:` `chore:` `test:`

## Связан с

- [[MOC - System]] — родительский хаб
- [[root-docs/README]] — обзор проекта
- [[root-docs/PIPELINE_TRIGGER]] — agent routing decisions
- [[_governance/VAULT_GOVERNANCE]] — vault contribution rules

## Исходник

> 📂 `../CONTRIBUTING.md` — читать оригинал для полного контента

## 🔗 Связи

- [[MOC - System]] — System overview
- [[root-docs/README]] — Project README
- [[000 - Map of Maps]] — Map of Maps

