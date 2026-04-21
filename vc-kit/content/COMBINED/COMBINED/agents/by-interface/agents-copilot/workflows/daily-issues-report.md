---
name: "Daily Issues Report"
description: "Generates a daily summary of open issues and recent activity as a GitHub issue"
on:
  schedule: daily on weekdays
permissions:
  contents: read
  issues: read
safe-outputs:
  create-issue:
    title-prefix: "[daily-report] "
    labels: [report]
tags:
  - domain/agents
  - artifact/agent
  - source/by-interface/agents-copilot
---

## Daily Issues Report

Create a daily summary of open issues for the team.

## What to Include

- New issues opened in the last 24 hours
- Issues closed or resolved
- Stale issues that need attention

## 🔗 Связи

- [[MOC - Agents]] — Agent catalog
- [[agents/agents-copilot]] — Interface: agents-copilot

