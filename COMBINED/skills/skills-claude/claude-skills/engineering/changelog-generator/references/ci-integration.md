---
tags:
  - domain/agents
  - artifact/doc
  - source/skills-claude
---

# CI Integration Examples

## GitHub Actions

```yaml
name: Changelog Check
on: [pull_request]

jobs:
  changelog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: python3 engineering/changelog-generator/scripts/commit_linter.py \
          --from-ref origin/main --to-ref HEAD --strict
```

## GitLab CI

```yaml
changelog_lint:
  image: python:3.12
  stage: test
  script:
    - python3 engineering/changelog-generator/scripts/commit_linter.py --to-ref HEAD --strict
```

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-claude]] — Category: skills-claude

