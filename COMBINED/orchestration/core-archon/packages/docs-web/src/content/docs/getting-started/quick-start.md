---
title: Quick Start
description: Run your first Archon workflow in minutes.
category: getting-started
audience: [user]
sidebar:
  order: 2
---

## Prerequisites

1. [Install Archon](/getting-started/installation/)
2. Authenticate with Claude: run `claude /login` (uses your existing Claude Pro/Max subscription)
3. Navigate to any git repository

## Run Your First Workflow

```bash
# List available workflows
archon workflow list

# Ask Archon to assist with your codebase
archon workflow run assist "What does this codebase do?"

# Run a code review
archon workflow run smart-pr-review
```

## What's Next?

For the full getting started guide -- installation, authentication, Web UI setup, CLI setup, and troubleshooting -- see the [Overview](/getting-started/overview/).

- [Overview](/getting-started/overview/) — Complete onboarding guide
- [Core Concepts](/getting-started/concepts/) — Understand workflows, nodes, commands, and isolation
- [Configuration](/getting-started/configuration/) — Customize Archon for your project
- [Authoring Workflows](/guides/authoring-workflows/) — Create your own workflows
- [GitHub Repository](https://github.com/coleam00/Archon) — Source code, issues, and discussions
