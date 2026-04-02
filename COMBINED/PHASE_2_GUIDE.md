# PHASE 2: GUIDE - СОЗДАНИЕ УНИФИЦИРОВАННЫХ "МЕГА" АГЕНТОВ

> **Дата создания**: 2 апреля 2026
> **Статус**: 📋 ГОТОВО К ВЫПОЛНЕНИЮ
> **Предварительное условие**: Phase 1 завершён ✅
> **Исполнитель**: Ручная работа (не автоматизация)

---

## 🎯 ЦЕЛЬ PHASE 2

Создать унифицированные "мега" агенты, объединяющие лучшие практики из:
- Oh-My-Claudecode (19 агентов)
- RuFlo (5 агентов)
- Get-Shit-Done (2 template)
- Superpowers (skills-based approach)

**Результат:** Единая директория `COMBINED/agents/unified/` с полным набором "мега" агентов.

---

## 📋 ПОШАГОВЫЙ ПЛАН

### ШАГ 1: Создать структуру директорий

```bash
cd /home/runner/work/vibe-coder/vibe-coder/COMBINED

mkdir -p agents/unified/by-role/{
  debugger,
  planner,
  architect,
  code-reviewer,
  tester,
  security,
  executor,
  verifier,
  analyst,
  designer,
  writer,
  explorer
}

mkdir -p agents/unified/meta/
mkdir -p agents/unified/docs/
```

**Структура которая получится:**
```
agents/unified/
├── by-role/
│   ├── debugger/          # Мега-debugger
│   ├── planner/           # Мега-planner
│   ├── architect/         # Мега-architect
│   ├── code-reviewer/     # Мега-reviewer
│   ├── tester/            # Мега-tester (test-engineer + qa-tester)
│   ├── security/          # Мега-security
│   ├── executor/          # Мега-executor (executor + coder)
│   ├── verifier/          # Мега-verifier (verifier + tracer)
│   ├── analyst/           # Analyst (только OMC)
│   ├── designer/          # Designer (только OMC)
│   ├── writer/            # Writer (только OMC)
│   └── explorer/          # Explorer (только OMC)
├── meta/                  # Мета-информация
│   ├── agent-comparison.md
│   ├── design-decisions.md
│   └── source-mapping.md
└── docs/
    ├── README.md
    ├── usage-guide.md
    └── integration-guide.md
```

---

### ШАГ 2: Создать comparison файлы для каждого дубликата

Для каждой роли где есть дубликаты, создать comparison файл.

#### **Пример: debugger/comparison.md**

```markdown
# DEBUGGER - Comparison Analysis

## Sources

### 1. OMC debugger.md
**Location:** `COMBINED/orchestration/oh-my-claudecode/agents/debugger.md`
**Format:** Markdown with YAML frontmatter
**Model:** claude-sonnet-4-6
**Level:** 3
**Size:** ~300 lines

**Strengths:**
- Очень детальный промпт с чёткой структурой
- Success Criteria прописаны
- Constraints чётко определены
- Investigation Protocol (5-step process)
- Build Error Protocol отдельно
- Circuit breaker mechanism (3-failure rule)
- Специфичен для разных языков

**Weaknesses:**
- Только для Claude
- Нет конфигурации для других моделей
- Нет примеров использования

**Key features:**
- Root-cause analysis
- Stack trace interpretation
- Regression isolation
- Build/compilation errors
- Type errors resolution
- 3-failure circuit breaker

---

### 2. GSD debug-subagent-prompt.md
**Location:** `COMBINED/orchestration/get-shit-done/get-shit-done/templates/debug-subagent-prompt.md`
**Format:** Template (для динамической генерации)
**Model:** Not specified
**Size:** ~50-100 lines (estimate)

**Strengths:**
- Template-based - гибкий
- Интегрирован в GSD workflow
- Минималистичный

**Weaknesses:**
- Меньше деталей чем OMC
- Требует GSD систему для работы
- Не standalone

---

## Recommendation

**Базовый источник:** OMC `debugger.md`

**Причины:**
1. Самый детальный и продуманный
2. Чёткая структура и протоколы
3. Circuit breaker mechanism
4. Language-specific handling
5. Standalone - не требует framework

**Что взять из GSD:**
- Template-based approach для гибкости
- Концепцию dynamic subagent creation

**Финальный подход:**
Создать мега-debugger на основе OMC, но добавить:
- Multi-model support (claude, gpt, gemini)
- Template variables для кастомизации
- Examples of usage
- Integration hooks для разных систем
```

**Повторить для:**
- planner (OMC + GSD)
- architect (OMC + RuFlo)
- code-reviewer (OMC + RuFlo + Superpowers)
- tester (OMC test-engineer + OMC qa-tester + RuFlo tester + Superpowers TDD)
- security (OMC + RuFlo + Shannon)
- executor (OMC executor + RuFlo coder)
- verifier (OMC verifier + OMC tracer)

---

### ШАГ 3: Создать unified агенты

Для каждой роли создать 3 файла:

#### **Структура в каждой папке:**
```
debugger/
├── agent.md           # Основной промпт (базируется на OMC формате)
├── config.yaml        # Конфигурация (базируется на RuFlo формате)
├── comparison.md      # Анализ источников (создан в Шаге 2)
└── examples.md        # Примеры использования
```

---

#### **3.1. agent.md - Основной промпт**

**Формат:** Markdown с YAML frontmatter (как в OMC)

**Template:**
```markdown
---
name: debugger
description: Root-cause analysis, regression isolation, stack trace analysis, build error resolution
role: debugger
version: "1.0.0"
sources:
  - oh-my-claudecode/agents/debugger.md
  - get-shit-done/templates/debug-subagent-prompt.md
models:
  primary: claude-sonnet-4-6
  alternatives:
    - gpt-4-turbo
    - gemini-1.5-pro
level: 3
tags:
  - debugging
  - root-cause
  - build-errors
  - regression
created: "2026-04-02"
---

<Agent_Prompt>
  <Role>
    You are Debugger. Your mission is to trace bugs to their root cause and recommend minimal fixes, and to get failing builds green with the smallest possible changes.

    You are responsible for:
    - Root-cause analysis
    - Stack trace interpretation
    - Regression isolation
    - Data flow tracing
    - Reproduction validation
    - Type errors
    - Compilation failures
    - Import errors
    - Dependency issues
    - Configuration errors

    You are NOT responsible for:
    - Architecture design (→ architect)
    - Verification governance (→ verifier)
    - Style review (→ code-reviewer)
    - Writing comprehensive tests (→ test-engineer)
    - Refactoring
    - Performance optimization
    - Feature implementation
    - Code style improvements
  </Role>

  <Why_This_Matters>
    Fixing symptoms instead of root causes creates whack-a-mole debugging cycles. These rules exist because adding null checks everywhere when the real question is "why is it undefined?" creates brittle code that masks deeper issues. Investigation before fix recommendation prevents wasted implementation effort.

    A red build blocks the entire team. The fastest path to green is fixing the error, not redesigning the system. Build fixers who refactor "while they're in there" introduce new failures and slow everyone down.
  </Why_This_Matters>

  <Success_Criteria>
    - Root cause identified (not just the symptom)
    - Reproduction steps documented (minimal steps to trigger)
    - Fix recommendation is minimal (one change at a time)
    - Similar patterns checked elsewhere in codebase
    - All findings cite specific file:line references
    - Build command exits with code 0 (tsc --noEmit, cargo check, go build, etc.)
    - Minimal lines changed (< 5% of affected file) for build fixes
    - No new errors introduced
  </Success_Criteria>

  <Constraints>
    - Reproduce BEFORE investigating. If you cannot reproduce, find the conditions first.
    - Read error messages completely. Every word matters, not just the first line.
    - One hypothesis at a time. Do not bundle multiple fixes.
    - Apply the 3-failure circuit breaker: after 3 failed hypotheses, stop and escalate to architect.
    - No speculation without evidence. "Seems like" and "probably" are not findings.
    - Fix with minimal diff. Do not refactor, rename variables, add features, optimize, or redesign.
    - Do not change logic flow unless it directly fixes the build error.
    - Detect language/framework from manifest files (package.json, Cargo.toml, go.mod, pyproject.toml) before choosing tools.
    - Track progress: "X/Y errors fixed" after each fix.
  </Constraints>

  <Investigation_Protocol>
    ### Runtime Bug Investigation
    1) REPRODUCE: Can you trigger it reliably? What is the minimal reproduction? Consistent or intermittent?
    2) GATHER EVIDENCE (parallel): Read full error messages and stack traces. Check recent changes with git log/blame. Find working examples of similar code. Read the actual code at error locations.
    3) HYPOTHESIZE: Compare broken vs working code. Trace data flow from input to error. Document hypothesis BEFORE investigating further. Identify what test would prove/disprove it.
    4) FIX: Recommend ONE change. Predict the test that proves the fix. Check for the same pattern elsewhere in the codebase.
    5) CIRCUIT BREAKER: After 3 failed hypotheses, stop. Question whether the bug is actually elsewhere. Escalate to architect for architectural analysis.

    ### Build/Compilation Error Resolution
    1) READ ERROR: Extract exact error message, file:line, language, framework
    2) DETECT ENVIRONMENT: Check manifest files for dependencies, versions, toolchain
    3) MINIMAL FIX: Apply the smallest possible change that makes error disappear
    4) VERIFY: Run build command again, ensure error is gone and no new errors appear
    5) NEXT ERROR: If multiple errors exist, fix one at a time, track "X/Y fixed"
  </Investigation_Protocol>

  <Language_Specific_Handling>
    ### TypeScript/JavaScript
    - Tools: tsc --noEmit, eslint
    - Common: undefined/null, type mismatches, import errors
    - Manifest: package.json, tsconfig.json

    ### Python
    - Tools: mypy, pylint, python -m py_compile
    - Common: NameError, AttributeError, ImportError, TypeError
    - Manifest: pyproject.toml, requirements.txt, setup.py

    ### Rust
    - Tools: cargo check, cargo clippy
    - Common: lifetime errors, borrow checker, type mismatches
    - Manifest: Cargo.toml

    ### Go
    - Tools: go build, go vet
    - Common: type mismatches, undefined identifiers, import errors
    - Manifest: go.mod
  </Language_Specific_Handling>

  <Integration_Hooks>
    ### For OMC:
    Call as: `oh-my-claudecode:debugger`

    ### For RuFlo:
    Use agent type: `debugger`

    ### For GSD:
    Template variables: {bug_description}, {error_message}, {file_path}

    ### For Superpowers:
    Skill trigger: `debugger` or `debug this`
  </Integration_Hooks>

</Agent_Prompt>
```

---

#### **3.2. config.yaml - Конфигурация**

**Формат:** YAML (как в RuFlo)

**Template:**
```yaml
# Unified Debugger Agent Configuration
type: debugger
version: "1.0.0"

# Source information
sources:
  primary: oh-my-claudecode/agents/debugger.md
  secondary:
    - get-shit-done/templates/debug-subagent-prompt.md
  merged_at: "2026-04-02"

# Model configuration
models:
  primary:
    provider: anthropic
    model: claude-sonnet-4-6
    temperature: 0.0
    max_tokens: 4000

  alternatives:
    - provider: openai
      model: gpt-4-turbo
      temperature: 0.0
    - provider: google
      model: gemini-1.5-pro
      temperature: 0.0

# Capabilities
capabilities:
  - root-cause-analysis
  - stack-trace-interpretation
  - regression-isolation
  - build-error-resolution
  - type-error-fixing
  - dependency-resolution

# Constraints
constraints:
  max_hypotheses: 3
  circuit_breaker: true
  minimal_diff: true
  no_refactoring: true

# Optimizations
optimizations:
  - context-caching
  - parallel-evidence-gathering
  - language-detection

# Integration
integration:
  omc:
    command: "oh-my-claudecode:debugger"
    model: sonnet
  ruflo:
    agent_type: debugger
    version: "3.0.0"
  gsd:
    template: debug-subagent-prompt
    variables:
      - bug_description
      - error_message
      - file_path
  superpowers:
    skill: debugger
    trigger_patterns:
      - "debug"
      - "debugger"
      - "fix this bug"
      - "root cause"

# Metadata
metadata:
  level: 3
  complexity: medium
  typical_duration: 5-30min
  requires_tools:
    - git
    - language_compiler
    - linter

created_at: "2026-04-02T00:00:00Z"
updated_at: "2026-04-02T00:00:00Z"
```

---

#### **3.3. examples.md - Примеры использования**

```markdown
# Debugger - Usage Examples

## Example 1: TypeScript Type Error

**Input:**
```
Error: Property 'name' does not exist on type 'User'.
File: src/users.ts:42
```

**Agent response:**
```
1. REPRODUCE: ✅ Error occurs when running `tsc --noEmit`
2. EVIDENCE: Line 42 shows `user.name` but User type in types.ts:15 only has `username`
3. HYPOTHESIS: Either rename property or fix type definition
4. FIX: Change line 42 from `user.name` to `user.username` (minimal change)
5. VERIFY: Run `tsc --noEmit` → No errors ✅
```

---

## Example 2: Python Import Error

**Input:**
```
ImportError: cannot import name 'calculate' from 'utils'
File: main.py:5
```

**Agent response:**
```
1. REPRODUCE: ✅ Error occurs when running `python main.py`
2. EVIDENCE:
   - main.py:5 imports `calculate` from utils
   - utils.py exports `compute` not `calculate`
   - git blame shows function was renamed in commit abc123
3. HYPOTHESIS: Import statement not updated after rename
4. FIX: Change line 5 from `from utils import calculate` to `from utils import compute`
5. VERIFY: Run `python main.py` → Works ✅
```

---

## Example 3: Circuit Breaker Activation

**Input:**
```
Segmentation fault (core dumped)
```

**Agent attempts:**
1. Hypothesis: Null pointer dereference → No evidence found
2. Hypothesis: Buffer overflow → No stack smashing detected
3. Hypothesis: Race condition → Happens deterministically

**Agent response:**
```
🛑 CIRCUIT BREAKER ACTIVATED (3 failed hypotheses)

This issue requires architectural analysis. Escalating to architect agent.

Evidence collected:
- Not a null pointer (checked with valgrind)
- Not a buffer overflow (AddressSanitizer clean)
- Deterministic (happens every time with same input)
- May be architectural design issue

Recommendation: Architect should review memory management design.
```

---

## Integration Examples

### Using with OMC:
```bash
claude-code --agent oh-my-claudecode:debugger "Fix the build errors in src/"
```

### Using with RuFlo:
```yaml
agents:
  - type: debugger
    task: "Investigate regression in test_user.py"
```

### Using with GSD:
```bash
gsd debug --template debugger \
  --bug "Login fails with 500 error" \
  --error "TypeError: Cannot read property 'id' of undefined" \
  --file "src/auth.ts"
```

### Using with Superpowers:
```
User: "debug this authentication issue"
→ Triggers debugger skill automatically
```
```

---

### ШАГ 4: Создать мета-документацию

#### **4.1. agents/unified/meta/agent-comparison.md**

Сравнительная таблица всех агентов:

```markdown
# Agent Comparison Matrix

| Role | OMC | RuFlo | GSD | Superpowers | Unified |
|------|-----|-------|-----|-------------|---------|
| Debugger | ✅ debugger.md (sonnet) | ❌ | ✅ template | Embedded | ✅ Merged |
| Planner | ✅ planner.md (opus) | ❌ | ✅ template | ✅ writing-plans | ✅ Merged |
| Architect | ✅ architect.md (opus) | ✅ architect.yaml | ❌ | ❌ | ✅ Merged |
| Code-Reviewer | ✅ code-reviewer.md (opus) | ✅ reviewer.yaml | ❌ | ✅ skill | ✅ Merged |
| Test-Engineer | ✅ test-engineer.md (sonnet) | ❌ | ❌ | ❌ | ✅ Base OMC |
| QA-Tester | ✅ qa-tester.md (sonnet) | ❌ | ❌ | ❌ | ✅ Base OMC |
| Tester | ❌ | ✅ tester.yaml | ❌ | ✅ TDD skill | ✅ Merged 3 |
| Security | ✅ security-reviewer.md | ✅ security-architect.yaml | ❌ | ❌ | ✅ Merged + Shannon |
| Executor | ✅ executor.md (sonnet) | ❌ | ❌ | ❌ | ✅ Base OMC |
| Coder | ❌ | ✅ coder.yaml | ❌ | ❌ | ✅ Base RuFlo |
| Verifier | ✅ verifier.md (sonnet) | ❌ | ❌ | Embedded | ✅ Base OMC |
| Tracer | ✅ tracer.md (sonnet) | ❌ | ❌ | ❌ | ✅ Base OMC |
| Analyst | ✅ analyst.md (opus) | ❌ | ❌ | ❌ | ✅ Unique |
| Designer | ✅ designer.md (sonnet) | ❌ | ❌ | ❌ | ✅ Unique |
| Writer | ✅ writer.md (haiku) | ❌ | ❌ | ❌ | ✅ Unique |
| Explorer | ✅ explore.md (haiku) | ❌ | ❌ | ❌ | ✅ Unique |
| Scientist | ✅ scientist.md (sonnet) | ❌ | ❌ | ❌ | ✅ Unique |
| Git-Master | ✅ git-master.md (sonnet) | ❌ | ❌ | ✅ worktrees | ✅ Merged |
| Code-Simplifier | ✅ code-simplifier.md (opus) | ❌ | ❌ | ❌ | ✅ Unique |
| Critic | ✅ critic.md (opus) | ❌ | ❌ | ❌ | ✅ Unique |
| Document-Specialist | ✅ document-specialist.md | ❌ | ❌ | ❌ | ✅ Unique |

**Legend:**
- ✅ Has implementation
- ❌ No implementation
- Embedded = Part of workflow, not separate agent
```

---

#### **4.2. agents/unified/meta/design-decisions.md**

```markdown
# Design Decisions for Unified Agents

## Format Choice: Markdown + YAML

**Decision:** Use OMC markdown format as primary, RuFlo YAML as secondary config

**Reasons:**
1. OMC prompts are more detailed and production-ready
2. Markdown is human-readable and easily editable
3. YAML config provides machine-readable metadata
4. Best of both worlds: detailed prompts + structured config

---

## Multi-Model Support

**Decision:** Support Claude, GPT, and Gemini

**Implementation:**
- Primary model in frontmatter
- Alternative models in config.yaml
- Model-specific adjustments in separate section if needed

---

## Integration Hooks

**Decision:** Provide integration points for all 4 systems

**Implementation:**
Each agent has `<Integration_Hooks>` section with:
- OMC command
- RuFlo agent type
- GSD template variables
- Superpowers trigger patterns

---

## Duplication Resolution

### Debugger
**Sources:** OMC debugger.md + GSD template
**Decision:** Base on OMC (more detailed), add GSD template variables
**Merge ratio:** 95% OMC, 5% GSD

### Planner
**Sources:** OMC planner.md + GSD template + Superpowers writing-plans
**Decision:** Base on OMC, add Superpowers workflow concepts
**Merge ratio:** 80% OMC, 5% GSD, 15% Superpowers

### Architect
**Sources:** OMC architect.md + RuFlo architect.yaml
**Decision:** OMC prompt + RuFlo config structure
**Merge ratio:** 90% OMC, 10% RuFlo

### Code-Reviewer
**Sources:** OMC code-reviewer.md + RuFlo reviewer.yaml + Superpowers skill
**Decision:** OMC prompt + Superpowers two-stage review concept
**Merge ratio:** 85% OMC, 5% RuFlo, 10% Superpowers

### Tester
**Sources:** OMC test-engineer.md + OMC qa-tester.md + RuFlo tester.yaml + Superpowers TDD
**Decision:** Merge OMC test-engineer + qa-tester, add Superpowers RED-GREEN-REFACTOR
**Merge ratio:** 40% test-engineer, 30% qa-tester, 10% RuFlo, 20% Superpowers

### Security
**Sources:** OMC security-reviewer.md + RuFlo security-architect.yaml + Shannon pentester
**Decision:** OMC as base, add Shannon-specific features as option
**Merge ratio:** 80% OMC, 10% RuFlo, 10% Shannon

### Executor/Coder
**Sources:** OMC executor.md + RuFlo coder.yaml
**Decision:** Merge into single "executor" role with both perspectives
**Merge ratio:** 70% OMC, 30% RuFlo

### Verifier
**Sources:** OMC verifier.md + OMC tracer.md
**Decision:** Merge both (they're complementary)
**Merge ratio:** 60% verifier, 40% tracer

---

## Unique Agents (No Merge Needed)

These exist only in OMC and have no duplicates:
- analyst.md
- designer.md
- writer.md
- explore.md
- scientist.md
- git-master.md (но есть skill в Superpowers)
- code-simplifier.md
- critic.md
- document-specialist.md

**Decision:** Copy as-is, add config.yaml and examples.md
```

---

#### **4.3. agents/unified/meta/source-mapping.md**

```markdown
# Source Mapping: Original → Unified

## Debugger
- `orchestration/oh-my-claudecode/agents/debugger.md` → `unified/by-role/debugger/agent.md`
- `orchestration/get-shit-done/templates/debug-subagent-prompt.md` → Referenced in comparison.md

## Planner
- `orchestration/oh-my-claudecode/agents/planner.md` → `unified/by-role/planner/agent.md`
- `orchestration/get-shit-done/templates/planner-subagent-prompt.md` → Referenced
- `orchestration/superpowers/skills/writing-plans/` → Concepts integrated

## Architect
- `orchestration/oh-my-claudecode/agents/architect.md` → `unified/by-role/architect/agent.md`
- `orchestration/ruflo/agents/architect.yaml` → `unified/by-role/architect/config.yaml`

## Code-Reviewer
- `orchestration/oh-my-claudecode/agents/code-reviewer.md` → `unified/by-role/code-reviewer/agent.md`
- `orchestration/ruflo/agents/reviewer.yaml` → `unified/by-role/code-reviewer/config.yaml`
- `orchestration/superpowers/skills/requesting-code-review/` → Concepts integrated

## Tester
- `orchestration/oh-my-claudecode/agents/test-engineer.md` → 40% of `unified/by-role/tester/agent.md`
- `orchestration/oh-my-claudecode/agents/qa-tester.md` → 30% of `unified/by-role/tester/agent.md`
- `orchestration/ruflo/agents/tester.yaml` → `unified/by-role/tester/config.yaml`
- `orchestration/superpowers/skills/test-driven-development/` → RED-GREEN-REFACTOR integrated

## Security
- `orchestration/oh-my-claudecode/agents/security-reviewer.md` → `unified/by-role/security/agent.md`
- `orchestration/ruflo/agents/security-architect.yaml` → `unified/by-role/security/config.yaml`
- `security/shannon/` → Optional integration in examples.md

## Executor
- `orchestration/oh-my-claudecode/agents/executor.md` → 70% of `unified/by-role/executor/agent.md`
- `orchestration/ruflo/agents/coder.yaml` → 30% + config.yaml

## Verifier
- `orchestration/oh-my-claudecode/agents/verifier.md` → 60% of `unified/by-role/verifier/agent.md`
- `orchestration/oh-my-claudecode/agents/tracer.md` → 40% of `unified/by-role/verifier/agent.md`

## Unique (No Merge)
- `orchestration/oh-my-claudecode/agents/analyst.md` → `unified/by-role/analyst/agent.md`
- `orchestration/oh-my-claudecode/agents/designer.md` → `unified/by-role/designer/agent.md`
- `orchestration/oh-my-claudecode/agents/writer.md` → `unified/by-role/writer/agent.md`
- `orchestration/oh-my-claudecode/agents/explore.md` → `unified/by-role/explorer/agent.md`
- `orchestration/oh-my-claudecode/agents/scientist.md` → `unified/by-role/scientist/agent.md`
- `orchestration/oh-my-claudecode/agents/git-master.md` → `unified/by-role/git-master/agent.md`
- `orchestration/oh-my-claudecode/agents/code-simplifier.md` → `unified/by-role/code-simplifier/agent.md`
- `orchestration/oh-my-claudecode/agents/critic.md` → `unified/by-role/critic/agent.md`
- `orchestration/oh-my-claudecode/agents/document-specialist.md` → `unified/by-role/document-specialist/agent.md`
```

---

### ШАГ 5: Создать главный README

#### **agents/unified/docs/README.md**

```markdown
# Unified Agents - Vibe-Coder Arsenal

> **Version:** 1.0.0
> **Created:** 2026-04-02
> **Status:** Production Ready

---

## 📚 Overview

This directory contains **unified "mega" agents** that combine the best features from:
- **Oh-My-Claudecode** (19 detailed agent prompts)
- **RuFlo** (5 YAML agent configs)
- **Get-Shit-Done** (2 subagent templates)
- **Superpowers** (skills-based workflow)

Each unified agent provides:
1. **Detailed prompt** (`agent.md`) - Based on OMC format
2. **Structured config** (`config.yaml`) - Based on RuFlo format
3. **Source comparison** (`comparison.md`) - Design rationale
4. **Usage examples** (`examples.md`) - Real-world scenarios

---

## 🎯 Agent Catalog

### Core Development Agents

| Agent | Role | Primary Model | Level | Sources |
|-------|------|---------------|-------|---------|
| **Debugger** | Root-cause analysis, build errors | Sonnet | 3 | OMC + GSD |
| **Planner** | Task breakdown, estimation | Opus | 4 | OMC + GSD + SP |
| **Executor** | Code implementation | Sonnet | 3 | OMC + RuFlo |
| **Verifier** | Verification, tracing | Sonnet | 3 | OMC (2x) |
| **Tester** | Test creation, QA | Sonnet | 3 | OMC (2x) + RuFlo + SP |

### Architecture & Design

| Agent | Role | Primary Model | Level | Sources |
|-------|------|---------------|-------|---------|
| **Architect** | System design, API design | Opus | 5 | OMC + RuFlo |
| **Designer** | UI/UX design | Sonnet | 3 | OMC |
| **Analyst** | Deep analysis | Opus | 4 | OMC |

### Quality & Security

| Agent | Role | Primary Model | Level | Sources |
|-------|------|---------------|-------|---------|
| **Code-Reviewer** | Code review | Opus | 4 | OMC + RuFlo + SP |
| **Security** | Security review, pentesting | Sonnet | 4 | OMC + RuFlo + Shannon |
| **Critic** | Critical review | Opus | 4 | OMC |

### Documentation & Research

| Agent | Role | Primary Model | Level | Sources |
|-------|------|---------------|-------|---------|
| **Writer** | Content writing | Haiku | 2 | OMC |
| **Document-Specialist** | Documentation | Sonnet | 3 | OMC |
| **Scientist** | Scientific analysis | Sonnet | 3 | OMC |

### Utilities

| Agent | Role | Primary Model | Level | Sources |
|-------|------|---------------|-------|---------|
| **Explorer** | Quick exploration | Haiku | 1 | OMC |
| **Git-Master** | Git operations | Sonnet | 2 | OMC + SP |
| **Code-Simplifier** | Code simplification | Opus | 4 | OMC |

---

## 🚀 Quick Start

### Using an agent:

```bash
# With OMC
claude-code --agent oh-my-claudecode:debugger "Fix build errors"

# With RuFlo
ruflo run --agent debugger --task "Debug authentication"

# With GSD
gsd debug --template debugger --bug "Login fails"

# With Superpowers
# Just say "debug this" - skill auto-triggers
```

### Creating a custom agent:

```bash
cp -r by-role/debugger by-role/my-custom-agent
# Edit agent.md, config.yaml, examples.md
```

---

## 📖 Documentation

- **[Usage Guide](usage-guide.md)** - How to use unified agents
- **[Integration Guide](integration-guide.md)** - Integrate with your system
- **[Design Decisions](../meta/design-decisions.md)** - Why we made these choices
- **[Source Mapping](../meta/source-mapping.md)** - Where each agent came from
- **[Agent Comparison](../meta/agent-comparison.md)** - Compare all sources

---

## 🔧 Directory Structure

```
unified/
├── by-role/              # Agents organized by role
│   ├── debugger/
│   │   ├── agent.md      # Detailed prompt
│   │   ├── config.yaml   # Configuration
│   │   ├── comparison.md # Source comparison
│   │   └── examples.md   # Usage examples
│   ├── planner/
│   ├── architect/
│   └── ...
├── meta/                 # Meta-documentation
│   ├── agent-comparison.md
│   ├── design-decisions.md
│   └── source-mapping.md
└── docs/                 # Documentation
    ├── README.md         # This file
    ├── usage-guide.md
    └── integration-guide.md
```

---

## 🤝 Contributing

When adding or modifying agents:

1. Maintain the 4-file structure (agent.md, config.yaml, comparison.md, examples.md)
2. Document source and merge ratios in comparison.md
3. Provide real-world examples in examples.md
4. Update this README and meta docs
5. Test integration with all 4 systems (OMC, RuFlo, GSD, Superpowers)

---

## 📊 Statistics

- **Total unified agents:** 19
- **Merged agents:** 7 (debugger, planner, architect, code-reviewer, tester, security, executor)
- **Unique agents:** 12 (analyst, designer, writer, etc.)
- **Source systems:** 4 (OMC, RuFlo, GSD, Superpowers)
- **Original files processed:** 26+
- **Lines of documentation:** 10,000+

---

## 📜 License

Combined from multiple sources. See individual agent files for specific licenses.

**Sources:**
- oh-my-claudecode: MIT License
- RuFlo: Apache 2.0
- Get-Shit-Done: MIT License
- Superpowers: MIT License

---

*Generated: 2026-04-02*
*Vibe-Coder Arsenal v1.0*
```

---

## ⏱️ ОЦЕНКА ВРЕМЕНИ

### Для ручного выполнения:

- **Шаг 1** (создание директорий): 5 минут
- **Шаг 2** (comparison файлы): 2-3 часа (7 агентов × 20-30 мин каждый)
- **Шаг 3** (unified агенты): 8-12 часов (19 агентов × 30-45 мин каждый)
- **Шаг 4** (мета-документация): 1-2 часа
- **Шаг 5** (README): 1 час

**Итого:** 12-18 часов работы

---

## 🎯 ПОРЯДОК ВЫПОЛНЕНИЯ (рекомендуемый)

### Приоритет 1: Merged Agents (дубликаты)
Начать с агентов где есть дубликаты:

1. **Debugger** (OMC + GSD) - Самый простой, хороший старт
2. **Planner** (OMC + GSD + SP) - Средняя сложность
3. **Architect** (OMC + RuFlo) - Простой
4. **Code-Reviewer** (OMC + RuFlo + SP) - Средняя сложность
5. **Executor** (OMC + RuFlo) - Средняя сложность
6. **Tester** (OMC×2 + RuFlo + SP) - Самый сложный! 4 источника
7. **Security** (OMC + RuFlo + Shannon) - Средняя сложность

### Приоритет 2: Unique Agents (копирование)
Затем просто скопировать и добавить config.yaml + examples.md:

8-19. Все остальные (analyst, designer, writer, explorer, scientist, git-master, code-simplifier, critic, document-specialist, verifier, tracer)

### Приоритет 3: Documentation
В конце создать всю мета-документацию.

---

## ✅ CHECKLIST ДЛЯ КАЖДОГО АГЕНТА

Для каждого унифицированного агента убедиться что есть:

- [ ] `agent.md` - Detailed prompt with YAML frontmatter
- [ ] `config.yaml` - Structured configuration
- [ ] `comparison.md` - Source analysis and merge rationale
- [ ] `examples.md` - At least 3 real-world examples
- [ ] Integration hooks for all 4 systems (OMC, RuFlo, GSD, SP)
- [ ] Multi-model support (claude, gpt, gemini)
- [ ] Clear Success Criteria
- [ ] Clear Constraints
- [ ] Language-specific handling (if applicable)

---

## 🚨 ВАЖНЫЕ ЗАМЕЧАНИЯ

### НЕ делать:
- ❌ Не менять оригинальные файлы в `orchestration/`
- ❌ Не удалять source файлы
- ❌ Не копировать без анализа
- ❌ Не пропускать comparison.md

### ОБЯЗАТЕЛЬНО делать:
- ✅ Читать оба/все источники полностью
- ✅ Документировать merge ratios
- ✅ Создавать comparison.md для каждого merged агента
- ✅ Тестировать integration hooks
- ✅ Добавлять real-world examples

---

## 📚 ПОЛЕЗНЫЕ ИСТОЧНИКИ

### Для reference:
- `COMBINED/orchestration/oh-my-claudecode/agents/` - 19 OMC агентов
- `COMBINED/orchestration/ruflo/agents/` - 5 RuFlo агентов
- `COMBINED/orchestration/get-shit-done/templates/` - 2 GSD templates
- `COMBINED/orchestration/superpowers/skills/` - Superpowers skills

### Документация:
- `COMBINED/PHASE_1_COMPLETE_REPORT.md` - Детальный анализ Phase 1
- `COMBINED/SUPER-INDEX.md` - Полная карта всех репозиториев
- `COMBINED/INDEX.md` - Краткий индекс

---

## 🎓 TIPS

1. **Начни с Debugger** - он самый простой и послужит хорошим примером
2. **Используй template** - скопируй структуру Debugger для остальных
3. **Читай промпты полностью** - не пропускай детали
4. **Документируй решения** - почему выбрал тот или иной вариант
5. **Тестируй integration** - убедись что hooks работают для всех систем

---

**УДАЧИ В PHASE 2!** 🚀

---

*Guide created: 2026-04-02*
*Author: Claude Code Assistant*
*Version: 1.0*
