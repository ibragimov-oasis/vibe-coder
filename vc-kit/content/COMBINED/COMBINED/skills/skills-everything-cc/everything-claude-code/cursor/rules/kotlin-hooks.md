---
description: "Kotlin hooks extending common rules"
globs: ["**/*.kt", "**/*.kts", "**/build.gradle.kts"]
alwaysApply: false
tags:
  - domain/skills
  - artifact/doc
  - source/skills-everything-cc
---
# Kotlin Hooks

> This file extends the common hooks rule with Kotlin-specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **ktfmt/ktlint**: Auto-format `.kt` and `.kts` files after edit
- **detekt**: Run static analysis after editing Kotlin files
- **./gradlew build**: Verify compilation after changes

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-everything-cc]] — Category: skills-everything-cc

