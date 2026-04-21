---
title: "Neo4j"
type: docs
description: "Details of the Neo4j prebuilt configuration."
tags:
  - domain/mcp
  - artifact/mcp-server
  - source/mcp-servers
---

## Neo4j

*   `--prebuilt` value: `neo4j`
*   **Environment Variables:**
    *   `NEO4J_URI`: The URI of the Neo4j instance (e.g.,
        `bolt://localhost:7687`).
    *   `NEO4J_DATABASE`: The name of the Neo4j database to connect to.
    *   `NEO4J_USERNAME`: The username for the Neo4j instance.
    *   `NEO4J_PASSWORD`: The password for the Neo4j instance.
*   **Permissions:**
    *   **Database-level permissions** are required to execute Cypher queries.
*   **Tools:**
    *   `execute_cypher`: Executes a Cypher query.
    *   `get_schema`: Retrieves the schema of the Neo4j database.

## 🔗 Связи

- [[MOC - MCP Servers]] — mcp-servers
- [[000 - Map of Maps]] — Map of Maps

