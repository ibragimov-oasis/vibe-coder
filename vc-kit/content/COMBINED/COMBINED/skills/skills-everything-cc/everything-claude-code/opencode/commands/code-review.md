---
description: Review code for quality, security, and maintainability
agent: code-reviewer
subtask: true
tags:
  - domain/skills
  - artifact/doc
  - source/skills-everything-cc
---

# Code Review Command

Review code changes for quality, security, and maintainability: $ARGUMENTS

## Your Task

1. **Get changed files**: Run `git diff --name-only HEAD`
2. **Analyze each file** for issues
3. **Generate structured report**
4. **Provide actionable recommendations**

## Check Categories

### Security Issues (CRITICAL)
- [ ] Hardcoded credentials, API keys, tokens
- [ ] SQL injection vulnerabilities
- [ ] XSS vulnerabilities
- [ ] Missing input validation
- [ ] Insecure dependencies
- [ ] Path traversal risks
- [ ] Authentication/authorization flaws

### Code Quality (HIGH)
- [ ] Functions > 50 lines
- [ ] Files > 800 lines
- [ ] Nesting depth > 4 levels
- [ ] Missing error handling
- [ ] console.log statements
- [ ] TODO/FIXME comments
- [ ] Missing JSDoc for public APIs

### Best Practices (MEDIUM)
- [ ] Mutation patterns (use immutable instead)
- [ ] Unnecessary complexity
- [ ] Missing tests for new code
- [ ] Accessibility issues (a11y)
- [ ] Performance concerns

### Style (LOW)
- [ ] Inconsistent naming
- [ ] Missing type annotations
- [ ] Formatting issues

## Report Format

For each issue found:

```
**[SEVERITY]** file.ts:123
Issue: [Description]
Fix: [How to fix]
```

## Decision

- **CRITICAL or HIGH issues**: Block commit, require fixes
- **MEDIUM issues**: Recommend fixes before merge
- **LOW issues**: Optional improvements

---

**IMPORTANT**: Never approve code with security vulnerabilities!

## 🔗 Связи

- [[MOC - Skills]] — Skills library
- [[skills/skills-everything-cc]] — Category: skills-everything-cc

