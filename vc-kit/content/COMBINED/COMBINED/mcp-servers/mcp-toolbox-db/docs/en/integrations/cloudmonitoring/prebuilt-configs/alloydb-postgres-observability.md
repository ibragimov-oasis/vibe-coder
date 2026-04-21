---
title: "AlloyDB Postgres Observability"
type: docs
description: "Details of the AlloyDB Postgres Observability prebuilt configuration."
tags:
  - domain/mcp
  - artifact/mcp-server
  - source/mcp-servers
---

## AlloyDB Postgres Observability

*   `--prebuilt` value: `alloydb-postgres-observability`
*   **Permissions:**
    *   **Monitoring Viewer** (`roles/monitoring.viewer`) is required on the
        project to view monitoring data.
*   **Tools:**
    *   `get_system_metrics`: Fetches system level cloud monitoring data
        (timeseries metrics) for an AlloyDB instance using a PromQL query.
    *   `get_query_metrics`: Fetches query level cloud monitoring data
        (timeseries metrics) for queries running in an AlloyDB instance using a
        PromQL query.

## 🔗 Связи

- [[MOC - MCP Servers]] — mcp-servers
- [[000 - Map of Maps]] — Map of Maps

