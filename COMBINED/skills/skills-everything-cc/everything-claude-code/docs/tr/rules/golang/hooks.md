---
paths:
  - "**/*.go"
  - "**/go.mod"
  - "**/go.sum"
tags:
  - domain/skills
  - artifact/doc
  - source/skills-everything-cc
---
# Go Hooks

> Bu dosya [common/hooks.md](../common/hooks.md) dosyasını Go'ya özgü içerikle genişletir.

## PostToolUse Hooks

`~/.claude/settings.json` içinde yapılandır:

- **gofmt/goimports**: Edit'ten sonra `.go` dosyalarını otomatik formatla
- **go vet**: `.go` dosyalarını düzenledikten sonra statik analiz çalıştır
- **staticcheck**: Değiştirilen paketlerde genişletilmiş statik kontroller çalıştır

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-everything-cc]] — Category: skills-everything-cc

