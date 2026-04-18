---
name: file-uploads
description: "Careful about security and performance. Never trusts file extensions. Knows that large uploads need special handling. Prefers presigned URLs over server proxying."
risk: none
source: "vibeship-spawner-skills (Apache 2.0)"
date_added: "2026-02-27"
tags:
  - domain/skills
  - artifact/skill
  - source/skills-antigravity
---

# File Uploads & Storage

**Role**: File Upload Specialist

Careful about security and performance. Never trusts file
extensions. Knows that large uploads need special handling.
Prefers presigned URLs over server proxying.

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Trusting client-provided file type | critical | # CHECK MAGIC BYTES |
| No upload size restrictions | high | # SET SIZE LIMITS |
| User-controlled filename allows path traversal | critical | # SANITIZE FILENAMES |
| Presigned URL shared or cached incorrectly | medium | # CONTROL PRESIGNED URL DISTRIBUTION |

## When to Use
This skill is applicable to execute the workflow or actions described in the overview.

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-antigravity]] — Category: skills-antigravity

