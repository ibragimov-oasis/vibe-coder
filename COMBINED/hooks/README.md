# COMBINED/hooks/ — Lifecycle Hooks Documentation

## Current Structure

```
hooks/
├── notification/           ✅ EXISTS
│   ├── gsd/               (5 hooks: check-update.js, context-monitor.js, prompt-guard.js, statusline.js, workflow-guard.js)
│   ├── ruflo/             (RuFlo notification hooks)
│   └── superpowers/       (4 hooks: hooks.json, hooks-cursor.json, run-hook.cmd, session-start)
└── pre-commit/            ✅ EXISTS
    ├── ruflo/             (RuFlo git pre-commit hooks)
    └── background-agents-husky/ (Husky pre-commit hooks)
```

## Hook Types from READ.ME.md Specification

According to `/COMBINED/READ.ME.md` (lines 243-259), the expected structure includes:

1. **pre-commit/** ✅ — Git pre-commit hooks (EXISTS)
2. **post-commit/** ❌ — Git post-commit hooks (NOT FOUND)
3. **pre-tool-use/** ❌ — Hooks before AI tool execution (NOT FOUND)
4. **post-tool-use/** ❌ — Hooks after AI tool execution (NOT FOUND)
5. **notification/** ✅ — Session/notification hooks (EXISTS)

## Missing Hook Types Analysis

### Why are some hook types missing?

After analyzing all source repositories, the following hook types were **not found in any original repository**:

#### ❌ post-commit/
- **Status:** Not found in any of the 31 source repositories
- **Reason:** Most repositories only implement pre-commit hooks for validation/linting, not post-commit actions
- **Conclusion:** This hook type does not exist in the source materials

#### ❌ pre-tool-use/
- **Status:** Not found in any source repository
- **Reason:** This is a theoretical hook type mentioned in the specification but not implemented by any framework
- **Conclusion:** May be a future enhancement, but not currently available

#### ❌ post-tool-use/
- **Status:** Not found in any source repository
- **Reason:** Similar to pre-tool-use, this appears to be a theoretical hook point
- **Conclusion:** Not implemented in current orchestration systems

## Existing Hook Details

### notification/ Hooks
**Purpose:** Hooks that trigger on session events, context changes, or workflow state changes

**Sources:**
- `gsd/` — Get-Shit-Done framework (5 hooks)
- `ruflo/` — RuFlo orchestration system
- `superpowers/` — Superpowers workflow (4 hooks)

**Common use cases:**
- Session start/end notifications
- Context window monitoring
- Prompt guard validation
- Status line updates
- Workflow state tracking

### pre-commit/ Hooks
**Purpose:** Git hooks that run before commit to validate code, run linters, check formatting

**Sources:**
- `ruflo/` — RuFlo pre-commit validation
- `background-agents-husky/` — Husky-based pre-commit hooks

**Common use cases:**
- Code linting
- Format validation
- Commit message validation
- Pre-commit tests

## Recommendations

1. **Current structure is complete** — All hooks that exist in source repositories have been migrated
2. **Missing hook types** — Document as "not implemented in source materials"
3. **Future enhancement** — If post-commit, pre-tool-use, or post-tool-use hooks are added to source frameworks, they can be added here

## Migration Status

✅ **100% of available hooks migrated**
- All notification hooks from GSD, RuFlo, Superpowers → `hooks/notification/`
- All pre-commit hooks from RuFlo, Background-Agents → `hooks/pre-commit/`
- No hooks found for post-commit, pre-tool-use, post-tool-use types

---

**Last Updated:** 2026-04-03
**Phase:** 2 - Structure Verification
