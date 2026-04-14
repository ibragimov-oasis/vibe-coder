---
title: Global Workflows
description: Define user-level workflows that apply to every project on your machine.
category: guides
area: workflows
audience: [user]
status: current
sidebar:
  order: 8
---

Workflows placed in `~/.archon/.archon/workflows/` are loaded globally -- they appear in
every project's `workflow list` and can be invoked from any repository.

## Path

```
~/.archon/.archon/workflows/
```

Or, if you have set `ARCHON_HOME`:

```
$ARCHON_HOME/.archon/workflows/
```

Create the directory if it does not exist:

```bash
mkdir -p ~/.archon/.archon/workflows
```

## Load Priority

1. **Bundled defaults** (lowest priority)
2. **Global workflows** -- `~/.archon/.archon/workflows/` (override bundled by filename)
3. **Repo-specific workflows** -- `.archon/workflows/` (override global by filename)

If a global workflow has the same filename as a bundled default, the global version wins. If a repo-specific workflow has the same filename as a global one, the repo-specific version wins.

## Practical Examples

Global workflows are useful for personal standards that you want enforced everywhere, regardless of the project.

### Personal Code Review

A workflow that runs your preferred review checklist on every project:

```yaml
# ~/.archon/.archon/workflows/my-review.yaml
name: my-review
description: Personal code review with my standards
model: sonnet

nodes:
  - id: review
    prompt: |
      Review the changes on this branch against main.
      Check for: error handling, test coverage, naming conventions,
      and unnecessary complexity. Be direct and specific.
```

### Custom Linting or Formatting Check

A workflow that runs project-agnostic checks:

```yaml
# ~/.archon/.archon/workflows/lint-check.yaml
name: lint-check
description: Check for common code quality issues across any project

nodes:
  - id: check
    prompt: |
      Scan this codebase for:
      1. Functions longer than 50 lines
      2. Deeply nested conditionals (>3 levels)
      3. TODO/FIXME comments without issue references
      Report findings as a prioritized list.
```

### Quick Explain

A simple workflow for understanding unfamiliar codebases:

```yaml
# ~/.archon/.archon/workflows/explain.yaml
name: explain
description: Quick explanation of a codebase or module
model: haiku

nodes:
  - id: explain
    prompt: |
      Give a concise explanation of this codebase.
      Focus on: what it does, key entry points, and how the main
      pieces connect. Keep it under 500 words.
      Topic: $ARGUMENTS
```

## Syncing with Dotfiles

If you manage your configuration with a dotfiles repository, you can include your global workflows:

```bash
# In your dotfiles repo
dotfiles/
└── archon/
    └── .archon/
        └── workflows/
            ├── my-review.yaml
            └── explain.yaml
```

Then symlink during dotfiles setup:

```bash
ln -sf ~/dotfiles/archon/.archon/workflows ~/.archon/.archon/workflows
```

Or copy them as part of your dotfiles install script:

```bash
mkdir -p ~/.archon/.archon/workflows
cp ~/dotfiles/archon/.archon/workflows/*.yaml ~/.archon/.archon/workflows/
```

This way your personal workflows travel with you across machines.

## CLI Support

Both the CLI and the server discover global workflows automatically:

```bash
# Lists bundled + global + repo-specific workflows
archon workflow list

# Run a global workflow from any repo
archon workflow run my-review
```

## Troubleshooting

### Workflow Not Appearing in List

1. **Check the path** -- The directory must be exactly `~/.archon/.archon/workflows/` (note the double `.archon`). The first `.archon` is the Archon home directory, the second is the standard config directory structure within it.

   ```bash
   ls ~/.archon/.archon/workflows/
   ```

2. **Check file extension** -- Workflow files must end in `.yaml` or `.yml`.

3. **Check YAML validity** -- A syntax error in the YAML will cause the workflow to appear in the errors list rather than the workflow list. Run:

   ```bash
   archon validate workflows my-workflow
   ```

4. **Check for name conflicts** -- If a repo-specific workflow has the same filename, it overrides the global one. The global version will not appear when you are in that repo.

5. **Check ARCHON_HOME** -- If you have set `ARCHON_HOME` to a custom path, global workflows must be at `$ARCHON_HOME/.archon/workflows/`, not `~/.archon/.archon/workflows/`.
