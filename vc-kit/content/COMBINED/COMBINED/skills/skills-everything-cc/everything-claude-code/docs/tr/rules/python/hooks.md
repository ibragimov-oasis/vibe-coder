---
paths:
  - "**/*.py"
  - "**/*.pyi"
tags:
  - domain/skills
  - artifact/doc
  - source/skills-everything-cc
---
# Python Hooks

> Bu dosya [common/hooks.md](../common/hooks.md) dosyasını Python'a özgü içerikle genişletir.

## PostToolUse Hooks

`~/.claude/settings.json` içinde yapılandır:

- **black/ruff**: Edit'ten sonra `.py` dosyalarını otomatik formatla
- **mypy/pyright**: `.py` dosyalarını düzenledikten sonra tip kontrolü çalıştır

## Uyarılar

- Düzenlenen dosyalarda `print()` ifadeleri hakkında uyar (bunun yerine `logging` modülü kullan)

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-everything-cc]] — Category: skills-everything-cc

