---
description: "Python hooks extending common rules"
globs: ["**/*.py", "**/*.pyi"]
alwaysApply: false
tags:
  - domain/skills
  - artifact/doc
  - source/skills-everything-cc
---
# Python Hooks

> This file extends the common hooks rule with Python specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **black/ruff**: Auto-format `.py` files after edit
- **mypy/pyright**: Run type checking after editing `.py` files

## Warnings

- Warn about `print()` statements in edited files (use `logging` module instead)

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-everything-cc]] — Category: skills-everything-cc

