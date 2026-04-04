# COMBINED/hooks/ — Lifecycle Hooks Documentation (prefix-source layout)

## Current Structure

```
hooks/
├── hooks-gsd/                 # GSD notification + git hooks (19 files)
│   ├── gsd/                   # Notification (5)
│   └── git/hooks/             # Git hooks from GSD repo (14)
├── hooks-superpowers/         # Superpowers notification hooks (4)
├── hooks-ruflo/               # Ruflo hooks (notification + git) (17)
│   ├── notification/ruflo     # Notification (1)
│   ├── ruflo/pre-commit       # Git pre-commit (1)
│   ├── v2/hooks               # Ruflo v2 hooks (4)
│   ├── plugin/hooks           # Ruflo plugin hook (1)
│   └── v3/@claude-flow/hooks  # Ruflo v3 hooks (6) plus implementation hooks (4)
├── hooks-background-agents/   # Husky pre-commit for background agents (1)
├── hooks-omc/                 # Oh-My-ClaudeCode hooks (688)
│   ├── dist/hooks             # Distributed hooks (649)
│   ├── dist/__tests__/hooks   # Tests (12)
│   ├── templates/hooks        # Templates (10)
│   ├── hooks                  # Source hooks (1)
│   ├── git_internal/hooks     # Internal git hooks (14)
│   └── src/hooks              # Source hooks (2)
└── hooks-1code/               # 1code git hooks (14)
```

## Hook Types from READ.ME.md Specification

According to `/COMBINED/READ.ME.md` (lines 243-259), the expected structure includes:

1. **pre-commit/** ✅ — Git pre-commit hooks (EXISTS via prefix folders above)
2. **post-commit/** ❌ — Git post-commit hooks (NOT FOUND)
3. **pre-tool-use/** ❌ — Hooks before AI tool execution (NOT FOUND)
4. **post-tool-use/** ❌ — Hooks after AI tool execution (NOT FOUND)
5. **notification/** ✅ — Session/notification hooks (EXISTS via prefix folders above)

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
- `hooks-gsd/gsd` — Get-Shit-Done framework (5)
- `hooks-ruflo/notification/ruflo` — RuFlo orchestration system (1)
- `hooks-superpowers/` — Superpowers workflow (4)

**Common use cases:**
- Session start/end notifications
- Context window monitoring
- Prompt guard validation
- Status line updates
- Workflow state tracking

### pre-commit/ Hooks
**Purpose:** Git hooks that run before commit to validate code, run linters, check formatting

**Sources:**
- `hooks-ruflo/ruflo/pre-commit` — RuFlo pre-commit validation (1)
- `hooks-background-agents/background-agents-husky/pre-commit` — Husky-based pre-commit hook (1)
- Git hook bundles: `hooks-gsd/git/hooks` (14), `hooks-1code/git/hooks` (14)

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

✅ **100% of available hooks migrated (prefix-source layout)**
- All notification hooks regrouped under `hooks-gsd/`, `hooks-superpowers/`, `hooks-ruflo/notification/`
- All pre-commit hooks under `hooks-ruflo/`, `hooks-background-agents/`
- Git hook bundles consolidated under `hooks-gsd/git/hooks` and `hooks-1code/git/hooks`
- No hooks found for post-commit, pre-tool-use, post-tool-use types

---

**Last Updated:** 2026-04-04
**Phase:** 3 - Prefix-source restructure completed
