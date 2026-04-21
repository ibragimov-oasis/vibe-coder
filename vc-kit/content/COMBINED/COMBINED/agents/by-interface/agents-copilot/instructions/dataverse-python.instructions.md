---
applyTo: '**'
tags:
  - domain/agents
  - artifact/agent
  - source/by-interface/agents-copilot
---
# Dataverse SDK for Python — Getting Started

- Install the Dataverse Python SDK and prerequisites.
- Configure environment variables for Dataverse tenant, client ID, secret, and resource URL.
- Use the SDK to authenticate via OAuth and perform CRUD operations.

## Setup
- Python 3.10+
- Recommended: virtual environment

## Install
```bash
pip install dataverse-sdk
```

## Auth Basics
- Use OAuth with Azure AD app registration.
- Store secrets in `.env` and load via `python-dotenv`.

## Common Tasks
- Query tables
- Create/update rows
- Batch operations
- Handle pagination and throttling

## Tips
- Reuse clients; avoid frequent re-auth.
- Add retries for transient failures.
- Log requests for troubleshooting.

## 🔗 Связи

- [[MOC - Agents]] — Agent catalog
- [[agents/agents-copilot]] — Interface: agents-copilot

