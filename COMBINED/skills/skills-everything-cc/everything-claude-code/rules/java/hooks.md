---
paths:
  - "**/*.java"
  - "**/pom.xml"
  - "**/build.gradle"
  - "**/build.gradle.kts"
tags:
  - domain/skills
  - artifact/doc
  - source/skills-everything-cc
---
# Java Hooks

> This file extends [common/hooks.md](../common/hooks.md) with Java-specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **google-java-format**: Auto-format `.java` files after edit
- **checkstyle**: Run style checks after editing Java files
- **./mvnw compile** or **./gradlew compileJava**: Verify compilation after changes

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-everything-cc]] — Category: skills-everything-cc

