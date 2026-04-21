---
title: "firestore-list-collections"
type: docs
weight: 1
description: >
  A "firestore-list-collections" tool lists collections in Firestore, either at the root level or as subcollections of a document.
tags:
  - domain/mcp
  - artifact/mcp-server
  - source/mcp-servers
---

## About

A `firestore-list-collections` tool lists
[collections](https://firebase.google.com/docs/firestore/data-model#collections)
in Firestore, either at the root level or as
[subcollections](https://firebase.google.com/docs/firestore/data-model#subcollections)
of a specific document.

`firestore-list-collections` takes an optional `parentPath` parameter to specify
a document path. If provided, it lists all subcollections of that document. If
not provided, it lists all root-level collections in the database.

## Compatible Sources

{{< compatible-sources >}}

## Example

```yaml
kind: tool
name: list_firestore_collections
type: firestore-list-collections
source: my-firestore-source
description: Use this tool to list collections in Firestore.
```

## Reference

| **field**   |      **type**    | **required** | **description**                                        |
|-------------|:----------------:|:------------:|--------------------------------------------------------|
| type        |      string      |     true     | Must be "firestore-list-collections".                  |
| source      |      string      |     true     | Name of the Firestore source to list collections from. |
| description |      string      |     true     | Description of the tool that is passed to the LLM.     |

## 🔗 Связи

- [[MOC - MCP Servers]] — mcp-servers
- [[000 - Map of Maps]] — Map of Maps

