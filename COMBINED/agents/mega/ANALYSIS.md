# Mega-Agent Analysis & Movement Log

Working inventory of duplicate-role sources plus a running log of any additions, cross-references, or renames performed while building mega-agents. Originals remain in place; this file tracks provenance so every merge is auditable.

## Role Source Inventory

### Debugger
- GSD: `COMBINED/agents/by-role/debugger/gsd-debugger.md` (scientific method, persistent debug sessions)
- OMC: `COMBINED/agents/agents-omc/debugger.md` (minimal diffs, build-first focus, circuit breaker)
- Copilot (Awesome Copilot): `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/debug.agent.md` (phase-driven reproduction → investigation → resolution)
- Copilot instructions (contextual): `COMBINED/agents/by-interface/agents-copilot/instructions/dataverse-python-testing-debugging.instructions.md`
- Expected but not present in COMBINED: Superpowers debugger, Ruflo debugger, Claude-Skills debugger (not located in current tree)

### Planner
- GSD: `COMBINED/agents/agents-gsd/gsd-planner.md`, `COMBINED/agents/by-role/planner/gsd-planner.md`
- OMC: `COMBINED/agents/agents-omc/planner.md`
- Ruflo: `COMBINED/agents/by-role/planner/ruflo-core-planner.md`, `ruflo-goal-code-goal-planner.md`, `ruflo-goal-goal-planner.md`, `ruflo-reasoning-goal-planner.md`
- Copilot: several planners under `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/` (gem-planner, planner, task-planner, polyglot-test-planner, one-shot-feature-issue-planner)
- Expected but not found: Superpowers planner, Deer-Flow planner variant

### Reviewer
- Ruflo: `COMBINED/agents/by-role/reviewer/ruflo-core-reviewer.md`, `COMBINED/agents/agents-ruflo/reviewer.yaml`
- OMC: `COMBINED/agents/agents-omc/code-reviewer.md`, `security-reviewer.md`
- Superpowers: `COMBINED/agents/by-role/reviewer/superpowers-code-reviewer.md`
- Copilot: multiple reviewers in `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/` (agent-governance-reviewer, gem-reviewer, terraform-iac-reviewer, se-security-reviewer, se-system-architecture-reviewer)
- GSD verifier (related for QA depth): `COMBINED/agents/agents-gsd/gsd-verifier.md`

### Executor / Coder
- GSD: `COMBINED/agents/agents-gsd/gsd-executor.md`, `COMBINED/agents/by-role/coder/gsd-executor.md`
- OMC: `COMBINED/agents/agents-omc/executor.md`
- Ruflo: `COMBINED/agents/agents-ruflo/coder.yaml`, `COMBINED/agents/by-role/coder/ruflo-core-coder.md`, `ruflo-templates-implementer-sparc-coder.md`
- Expected but not found: Claude-Skills executor/coder in COMBINED tree

### Tester
- Ruflo: `COMBINED/agents/agents-ruflo/tester.yaml`, `COMBINED/agents/by-role/tester/ruflo-core-tester.md`
- OMC: `COMBINED/agents/agents-omc/qa-tester.md`
- Copilot: tester agents in `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/` (gem-browser-tester, playwright-tester, polyglot-test-tester)
- Ruflo test architect (related): `COMBINED/agents/by-role/tester/ruflo-v3-test-architect.md`

### Security
- Ruflo: `COMBINED/agents/by-role/security/ruflo-consensus-security-manager.md`, `ruflo-security-auditor.md`, `ruflo-v3-v3-security-architect.md`, `COMBINED/agents/agents-ruflo/security-architect.yaml`
- OMC: `COMBINED/agents/agents-omc/security-reviewer.md`
- Copilot: security reviewer/onboarding content under `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/` (se-security-reviewer, stackhawk-security-onboarding) plus security instruction files
- Expected but not found: Shannon/Nyquist security agents referenced in Phase 4 plan

### Researcher
- GSD: `COMBINED/agents/agents-gsd/gsd-phase-researcher.md`, `gsd-project-researcher.md`, `gsd-research-synthesizer.md`
- Ruflo: `COMBINED/agents/by-role/researcher/ruflo-core-researcher.md`
- Copilot: research agents in `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/` (gem-researcher, task-researcher, scientific-paper-research, research-technical-spike, polyglot-test-researcher)
- UI research crossover: `COMBINED/agents/by-role/ui-specialist/gsd-ui-researcher.md`
- Expected but not found: Deer-Flow or Hermes research agents

### UI / Design
- OMC: `COMBINED/agents/agents-omc/designer.md`
- GSD: `COMBINED/agents/by-role/ui-specialist/gsd-ui-auditor.md`, `gsd-ui-researcher.md`
- Copilot: `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/se-ux-ui-designer.agent.md`
- Expected but not found: GSD UI designer variants referenced in plan

### Writer
- OMC: `COMBINED/agents/agents-omc/writer.md`
- Copilot: documentation/technical writers in `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/` (gem-documentation-writer, se-technical-writer, taxcore-technical-writer)
- Expected but not found: Claude-Skills writer in current tree

### Architect
- Ruflo: `COMBINED/agents/agents-ruflo/architect.yaml`, `COMBINED/agents/by-role/architect/ruflo-github-repo-architect.md`, `ruflo-sparc-architecture.md`, `ruflo-v3-v3-integration-architect.md`
- OMC: `COMBINED/agents/agents-omc/architect.md`
- Copilot: architecture agents in `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/` (api-architect, azure-principal-architect, azure-saas-architect, context-architect, declarative-agents-architect, dotnet-self-learning-architect, repo-architect)
- Related: `COMBINED/agents/by-role/tester/ruflo-v3-test-architect.md` and `by-role/security/ruflo-v3-v3-security-architect.md`
- Expected but not found: GSD architect referenced in INDEX.md

## Movement & Rename Log
- 2026-04-05: Created `COMBINED/agents/mega/` directory and documentation files (README, ANALYSIS, MERGE_DECISIONS, SOURCE_ATTRIBUTION).
- 2026-04-05: Added `COMBINED/agents/mega/mega-debugger.md` (sources: gsd-debugger, omc debugger, Copilot debug agent).
- 2026-04-05: Added merged-agent notices to:
  - `COMBINED/agents/by-role/debugger/gsd-debugger.md`
  - `COMBINED/agents/agents-omc/debugger.md`
  - `COMBINED/agents/by-interface/agents-copilot/awesome-copilot/debug.agent.md`
- No original files were moved or renamed; all changes are additive with cross-references.
