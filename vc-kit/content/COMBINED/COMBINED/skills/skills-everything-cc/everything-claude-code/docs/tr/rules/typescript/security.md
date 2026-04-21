---
paths:
  - "**/*.ts"
  - "**/*.tsx"
  - "**/*.js"
  - "**/*.jsx"
tags:
  - domain/skills
  - artifact/doc
  - source/skills-everything-cc
---
# TypeScript/JavaScript Güvenlik

> Bu dosya [common/security.md](../common/security.md) dosyasını TypeScript/JavaScript'e özgü içerikle genişletir.

## Secret Yönetimi

```typescript
// ASLA: Hardcoded secret'lar
const apiKey = "sk-proj-xxxxx"

// DAIMA: Environment variable'lar
const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  throw new Error('OPENAI_API_KEY not configured')
}
```

## Agent Desteği

- Kapsamlı güvenlik denetimleri için **security-reviewer** skill kullan

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-everything-cc]] — Category: skills-everything-cc

