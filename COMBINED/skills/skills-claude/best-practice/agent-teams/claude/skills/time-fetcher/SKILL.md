---
name: time-fetcher
description: Instructions for fetching current Dubai time via bash command
user-invocable: false
tags:
  - domain/agents
  - artifact/skill
  - source/skills-claude
---

## Dubai Time Fetcher

### Command

```bash
TZ='Asia/Dubai' date '+%Y-%m-%d %H:%M:%S %Z'
```

### Expected Output Format

`YYYY-MM-DD HH:MM:SS +04` (Gulf Standard Time)

### Timezone Details

- Timezone: Asia/Dubai
- Offset: UTC+4
- Abbreviation: GST (Gulf Standard Time)
- Dubai does not observe daylight saving time

### Return Format

Provide the following fields:
- `time`: Just the time portion (HH:MM:SS)
- `timezone`: "GST (UTC+4)"
- `formatted`: The full output string from the command

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-claude]] — Category: skills-claude
- [[MOC - Agents]] — Claude agents

