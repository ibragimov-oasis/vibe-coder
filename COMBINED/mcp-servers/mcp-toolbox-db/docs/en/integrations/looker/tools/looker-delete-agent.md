---
title: "looker-delete-agent Tool"
type: docs
weight: 1
description: >
  "looker-delete-agent" deletes a Looker Conversation Analytics agent.
tags:
  - domain/mcp
  - artifact/mcp-server
  - source/mcp-servers
---

## About

The `looker-delete-agent` tool allows LLMs to delete a Looker Agent using the Looker Go SDK.

```json
{
  "name": "looker-delete-agent",
  "parameters": {
    "agent_id": "123"
  }
}
```

## Compatible Sources

{{< compatible-sources >}}

## Example

To use the `looker-delete-agent` tool, you must define it in your `server.yaml` file.

```yaml
kind: tool
name: delete_agent
type: looker-delete-agent
source: my-looker-instance
description: |
  Delete a Looker agent.
  - `agent_id` (string): The ID of the agent.
```

## Reference

| **field**   | **type** | **required** | **description**                                    |
|-------------|:--------:|:------------:|----------------------------------------------------|
| type        |  string  |     true     | Must be "looker-delete-agent".                     |
| source      |  string  |     true     | Name of the Looker source.                         |
| description |  string  |     true     | Description of the tool that is passed to the LLM. |

## 🔗 Связи

- [[MOC - MCP Servers]] — mcp-servers
- [[000 - Map of Maps]] — Map of Maps

