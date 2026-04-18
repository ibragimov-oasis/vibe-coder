---
title: "cloud-logging-admin-list-resource-types"
type: docs
description: >
  A "cloud-logging-admin-list-resource-types" tool lists the monitored resource types.
tags:
  - domain/mcp
  - artifact/mcp-server
  - source/mcp-servers
---

## About

The `cloud-logging-admin-list-resource-types` tool lists the monitored resource types available in Google Cloud Logging.

## Compatible Sources

{{< compatible-sources >}}

## Example

```yaml
kind: tool
name: list_resource_types
type: cloud-logging-admin-list-resource-types
source: my-cloud-logging
description: Lists monitored resource types.
```

## Reference

| **field**   | **type** | **required** | **description**                                    |
|-------------|:--------:|:------------:|----------------------------------------------------|
| type        |  string  |     true     | Must be "cloud-logging-admin-list-resource-types".|
| source      |  string  |     true     | Name of the cloud-logging-admin source.            |
| description |  string  |     true     | Description of the tool that is passed to the LLM. |

## 🔗 Связи

- [[MOC - MCP Servers]] — mcp-servers
- [[000 - Map of Maps]] — Map of Maps

