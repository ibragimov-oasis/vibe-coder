---
description: "Go testing extending common rules"
globs: ["**/*.go", "**/go.mod", "**/go.sum"]
alwaysApply: false
tags:
  - domain/skills
  - artifact/doc
  - source/skills-everything-cc
---
# Go Testing

> This file extends the common testing rule with Go specific content.

## Framework

Use the standard `go test` with **table-driven tests**.

## Race Detection

Always run with the `-race` flag:

```bash
go test -race ./...
```

## Coverage

```bash
go test -cover ./...
```

## Reference

See skill: `golang-testing` for detailed Go testing patterns and helpers.

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-everything-cc]] — Category: skills-everything-cc

