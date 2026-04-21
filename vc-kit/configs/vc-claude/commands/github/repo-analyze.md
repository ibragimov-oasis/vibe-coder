---
tags:
  - domain/skills
  - artifact/command
  - source/claude-commands
---

# repo-analyze

Deep analysis of GitHub repository with AI insights.

## Usage
```bash
npx claude-flow github repo-analyze [options]
```

## Options
- `--repository <owner/repo>` - Repository to analyze
- `--deep` - Enable deep analysis
- `--include <areas>` - Include specific areas (issues, prs, code, commits)

## Examples
```bash
# Basic analysis
npx claude-flow github repo-analyze --repository myorg/myrepo

# Deep analysis
npx claude-flow github repo-analyze --repository myorg/myrepo --deep

# Specific areas
npx claude-flow github repo-analyze --repository myorg/myrepo --include issues,prs
```

## 🔗 Связи

- [[MOC - System]] — System commands
- [[MOC - Skills]] — Skills library

