# COMBINED/skills - Master Skills Index

> **Complete catalog of all AI agent skills across 31 repositories**
> Last updated: 2026-04-04

## Overview

This directory contains **1,560+ production-ready skills** providing specialized capabilities for AI agents. Skills are **self-contained packages** that bundle:
- Domain expertise and best practices
- Reusable templates and workflows
- Analysis tools and scripts (no LLM calls)
- Reference guides and documentation

**Total Statistics by Source/Domain (files):**
- skills-antigravity: 5,696
- skills-claude: 1,737
- skills-superpowers: 44
- skills-deer-flow: 29
- skills-hermes: 437
- skills-awesome-claude: 302
- skills-everything-cc: 1,696
- skills-seo: 255
- skills-design: 255
- skills-research: 5
- skills-ruflo: 41
- skills-omc: 57
- skills-background: 1
- skills-copilot: 544
- skills-data-analysis: 31
- skills-devops: 2
- skills-platform: 13
- skills-writing: 5
- skills-business: 5
- **Total skills files:** 11,156

**Latest migrations (leftovers moved):**
- Added research `deep-research` under `skills-research/research/`.
- Added SEO `seo-audit` under `skills-seo/seo/`.
- Added platform/meta `skill-creator`.
- Added superpowers workflows `tdd-workflow` and refreshed metadata for `requesting-code-review`, `subagent-driven-development`, `systematic-debugging`, `writing-plans`.

---

## Directory Structure

```
skills/
├── skills-antigravity/      # Antigravity skills (5,696 files)
├── skills-claude/           # Claude skills (1,737 files)
├── skills-superpowers/      # Superpowers workflow skills
├── skills-deer-flow/        # Deer-Flow skills (public + orchestration)
├── skills-hermes/           # Hermes skills
├── skills-awesome-claude/   # Awesome Claude/Copilot skills
├── skills-everything-cc/    # Everything Claude Code skills
├── skills-seo/              # SEO & marketing skills
├── skills-research/         # Research skills
├── skills-design/           # Design skills
├── skills-ruflo/            # RuFlo orchestration skills
├── skills-omc/              # oh-my-claudecode skills (core + dist)
├── skills-background/       # Open-Inspect onboarding
├── skills-copilot/          # GitHub Copilot skills (544 files)
├── skills-data-analysis/
├── skills-devops/
├── skills-platform/
├── skills-business/
├── skills-writing/
└── INDEX.md
```

---

## 🚀 Core Skill Sources (prefix-source layout)

*Note: Paths now use `skills-<source>/...` as shown above.*

### Antigravity Awesome Skills (1,340+ skills)

**Location:** `skills-antigravity/`

**Coverage:** Most comprehensive skill library

**Categories:**
- **AI & Machine Learning** - LLMs, RAG, embeddings, fine-tuning
- **Backend** - APIs, databases, microservices, serverless
- **Frontend** - React, Vue, Angular, Next.js, Svelte
- **DevOps** - Docker, Kubernetes, CI/CD, monitoring
- **Data Science** - Python, pandas, scikit-learn, TensorFlow
- **Mobile** - React Native, Flutter, iOS, Android
- **Testing** - Unit, integration, E2E, performance testing
- **Security** - Authentication, authorization, encryption, OWASP
- **Cloud** - AWS, Azure, GCP, multi-cloud strategies
- **Databases** - SQL, NoSQL, graph databases, time-series

**Skill Package Pattern:**
```
skill-name/
├── SKILL.md              # Master documentation
├── scripts/              # Python CLI tools
├── references/           # Knowledge bases
└── assets/               # Templates
```

---

### Claude Skills (205 production skills)

**Location:** `skills-claude/`

**Repositories:**
- `engineering/` - Core engineering practices (POWERFUL collection)
- `engineering-team/` - Team best practices (fullstack, AI/ML, DevOps)
- `product-team/` - RICE, OKRs, user stories
- `documentation/` - Technical writing
- `standards/` - Coding standards

**Featured Skills:**
- **Engineering Fundamentals** - Clean code, SOLID, DRY, KISS
- **AI/ML Engineering** - RAG systems, MCP integration, agent design
- **Full-Stack Development** - Frontend + backend + database
- **DevOps & SRE** - CI/CD, monitoring, incident management
- **Product Management** - RICE prioritization, OKRs, user stories
- **Technical Writing** - API docs, README creation, architecture docs

**Key Differentiators:**
- 268 Python automation tools (NO LLM calls)
- 384 reference guides
- Algorithm over AI approach
- Template-heavy design
- Platform-specific best practices

---

### Superpowers (14 workflow skills)

**Location:** `skills-superpowers/`

**Philosophy:** Test-driven, subagent-driven development with systematic workflows

**Core Skills:**
1. **brainstorming** - Idea refinement through questions
2. **using-git-worktrees** - Isolated workspace creation
3. **writing-plans** - Task breakdown (2-5 min tasks)
4. **subagent-driven-development** - Fresh subagent per task
5. **test-driven-development** - RED-GREEN-REFACTOR enforcement
6. **requesting-code-review** - Plan-based reviews
7. **finishing-a-development-branch** - Final verification
8. **asking-clarifying-questions** - Requirement clarification
9. **managing-context** - Context window management
10. **understanding-requirements** - Spec analysis
11. **creating-subagents** - Agent creation workflow
12. **iterative-refinement** - Continuous improvement
13. **systematic-debugging** - Methodical bug fixing
14. **evidence-based-decisions** - Verification over claims

**Workflow Pattern:**
```
brainstorming → git-worktrees → writing-plans →
subagent-driven-dev → TDD → code-review → finish
```

---

### DeerFlow Skills (15 ByteDance skills)

**Location:** `skills-deer-flow/` (distributed across categories)

**Skills:**
- `bootstrap/` - Project initialization
- `skills-data-analysis/` - Data processing
- `deep-research/` - Research capabilities
- `frontend-design/` - UI design
- `github-research/` - GitHub analysis
- `image-generation/` - AI image creation
- `podcast-generation/` - Audio content
- `ppt-generation/` - Presentation creation
- `vercel-deploy*/` - Deployment automation
- `chart-visualization/` - Data visualization
- `consulting-analysis/` - Business analysis

---

### Hermes Skills

**Location:** `skills-hermes/`

**Structure:**
- `builtin/` - Core self-learning capabilities
- `optional/` - Extended skills

**Focus:** Self-learning agent ecosystem with tool integration

---

### Awesome Claude Code

**Location:** `skills-awesome-claude/`

**Description:** Curated collection of production-ready Claude Code skills

**Categories:**
- Agent development patterns
- Workflow automation
- Context engineering
- Security skills (Trail of Bits)
- Scientific research skills

---

### Everything Claude Code

**Location:** `skills-everything-cc/`

**Description:** Hackathon-winning comprehensive resource collection

**Modules:**
- `commands/` - Database migration, feature dev
- `enterprise/` - Enterprise patterns
- `homunculus/` - Advanced agent patterns
- `research/` - Research methodologies
- `rules/` - Code quality rules
- `team/` - Multi-agent coordination

---

### RuFlo Skills

**Location:** `skills-ruflo/claude/skills/`

**Description:** RuFlo v3.5 enterprise orchestration skills

**Features:**
- 130+ Skills
- Self-learning with Q-Learning Router
- Multiple topologies (mesh, hierarchical, ring, star)
- Fault-tolerant consensus
- Enterprise-grade security (AIDefence)

---

## 💼 GitHub Copilot Skills (486 files)

**Location:** `skills-copilot/`

### Breakdown Skills (Planning)
- `breakdown-epic-arch` - Epic → Architecture
- `breakdown-epic-pm` - Epic → Product requirements
- `breakdown-feature-implementation` - Feature → Code tasks
- `breakdown-feature-prd` - Feature → PRD
- `breakdown-plan` - General task breakdown
- `breakdown-test` - Test planning

### Code Quality Skills
- `code-quality-checker` - Quality validation
- `code-review-companion` - Review assistant
- `code-smell-detector` - Anti-pattern detection

### Azure Skills
- `azure-architecture-autopilot` - Auto-architecture
- `azure-deployment-preflight` - Pre-deployment checks
- `azure-devops-cli` - Azure DevOps automation
- `azure-pricing` - Cost estimation
- `azure-resource-health-diagnose` - Health checks
- `azure-resource-visualizer` - Resource diagrams
- `azure-role-selector` - RBAC guidance
- `azure-static-web-apps` - SWA deployment

### Testing Skills
- `testing-pyramid-guide` - Test strategy
- `unit-test-generator` - Test creation
- `integration-test-helper` - Integration testing
- `e2e-test-designer` - E2E test planning

### Documentation Skills
- `add-educational-comments` - Code explanations
- `api-documentation-generator` - API docs
- `readme-enhancer` - README improvement

### Specialized Skills
- `ai-prompt-engineering-safety-review` - Prompt security
- `agent-governance` - Agent management
- `agentic-eval` - Agent evaluation
- `architecture-blueprint-generator` - Architecture docs
- `automate-this` - Automation helper
- `autoresearch` - Research automation

**Total:** 150+ unique skill categories with multiple variants

---

## 🎯 SEO & Marketing (154 files)

### Claude SEO

**Location:** `skills-seo/claude-seo/`

**Capabilities:**
- SEO audits
- Keyword research
- Content optimization
- Meta tag generation
- Technical SEO analysis
- Link building strategies
- Local SEO optimization

### Claude Skills Marketing

**Location:** `skills-seo/claude-skills-marketing/`

**Capabilities:**
- Content creation strategies
- Campaign planning
- ASO (App Store Optimization)
- Social media marketing
- Email marketing
- Growth hacking techniques

---

## 🎨 Design Skills (134 files)

### DeerFlow Frontend Design

**Location:** `skills-design/deer-flow-frontend-design/`

**Focus:** Modern frontend UI design patterns

### DeerFlow Image Generation

**Location:** `skills-design/deer-flow-image-generation/`

**Focus:** AI-powered image creation workflows

### UI Design

**Location:** `skills-design/ui-design/`

**Focus:** UI/UX best practices and component design

---

## 📊 Data Analysis Skills (28 files)

### DeerFlow Data Analysis

**Location:** `skills-data-analysis/deer-flow-data-analysis/`

**Capabilities:** Data processing, analysis workflows

### Chart Visualization

**Location:** `skills-data-analysis/chart-visualization/`

**Capabilities:** Data visualization techniques

### Claude Skills Finance

**Location:** `skills-data-analysis/claude-skills-finance/`

**Capabilities:**
- Financial analysis
- DCF modeling
- Budget planning
- Financial reporting

---

## 🔬 Research Skills (4 files)

### DeerFlow Deep Research

**Location:** `skills-research/deer-flow-deep-research/`

**Focus:** Comprehensive research workflows

### DeerFlow GitHub Research

**Location:** `skills-research/deer-flow-github-research/`

**Focus:** GitHub repository analysis

### Consulting Analysis

**Location:** `skills-research/consulting-analysis/`

**Focus:** Business consulting frameworks

---

## ✍️ Writing Skills (3 files)

### DeerFlow Podcast

**Location:** `skills-writing/deer-flow-podcast/`

**Focus:** Podcast script generation

### DeerFlow PPT

**Location:** `skills-writing/deer-flow-ppt/`

**Focus:** Presentation creation

### Documentation

**Location:** `skills-writing/documentation/`

**Focus:** Technical documentation

---

## 💼 Business Skills (3 files)

### C-Level Advisors

**Location:** `skills-business/claude-skills-c-level/`

**Skills:**
- `board-deck-builder` - Board presentation creation
- CEO strategic advisory
- CTO technical leadership

### Growth & Sales

**Location:** `skills-business/claude-skills-growth/`

**Skills:**
- `sales-engineer` - Sales engineering expertise
- Customer success strategies
- Revenue operations

### RA/QM Compliance

**Location:** `skills-business/claude-skills-ra-qm/`

**Skills:**
- `soc2-compliance` - SOC 2 audit preparation
- ISO 13485, MDR, FDA compliance
- GDPR compliance

---

## 🔧 Platform-Specific Skills (11 files)

### Obsidian Skills

**Location:** `skills-platform/obsidian/`

**Focus:** Obsidian note-taking app integration and workflows

---

## 🚀 DevOps Skills (1 file)

### DeerFlow Vercel Deploy

**Location:** `skills-devops/deer-flow-vercel-deploy/`

**Focus:** Vercel deployment automation

---

## Quick Reference by Use Case

### "I need to build a web application"
→ `skills-antigravity/frontend/` + `skills-antigravity/backend/`

### "I need to implement AI features"
→ `skills-claude/engineering/` (AI/ML section)

### "I need to optimize for SEO"
→ `skills-seo/claude-seo/`

### "I need to create marketing content"
→ `skills-seo/claude-skills-marketing/`

### "I need systematic development workflow"
→ `skills-superpowers/` (14 workflow skills)

### "I need to analyze data"
→ `skills-data-analysis/` (all skills)

### "I need UI/UX design"
→ `skills-design/` (all skills)

### "I need business strategy"
→ `skills-business/claude-skills-c-level/`

### "I need financial analysis"
→ `skills-data-analysis/claude-skills-finance/`

### "I need research capabilities"
→ `skills-research/` (all skills)

### "I need GitHub Copilot integration"
→ `skills-copilot/` (486 specialized skills)

---

## Skill Package Standards

All skills follow this pattern:

### Required Files
- `SKILL.md` - Master documentation with frontmatter
- `name` field - lowercase-with-hyphens
- `description` field - 10-1024 characters

### Optional Components
- `scripts/` - Python CLI tools (NO LLM calls)
- `references/` - Expert knowledge bases
- `assets/` - User templates
- `examples/` - Usage examples

### Quality Standards
1. **Algorithm over AI** - Use deterministic analysis, not LLM calls
2. **Template-heavy** - Provide ready-to-use templates
3. **Platform-specific** - Specific best practices, not generic advice
4. **Self-contained** - No dependencies between skills
5. **Documentation-driven** - Clear, actionable docs

---

## Integration with Agents

Skills augment agent capabilities:

```bash
# Agent without skill
/omc:executor "implement authentication"

# Agent with skill
/omc:executor "implement authentication using jwt-best-practices skill"
```

**Skill Loading:**
- Skills are loaded by agents at runtime
- Skills provide domain expertise + tools
- Skills don't replace agents, they enhance them

---

## Related Resources

- **Agents:** See `COMBINED/agents/INDEX.md` for agent catalog
- **Commands:** See `COMBINED/commands/INDEX.md` for slash commands
- **Orchestration:** See `COMBINED/orchestration/` for workflow systems
- **UI Components:** See `COMBINED/ui-design/` for UI resources

---

## Contributing New Skills

When adding skills:

1. **Choose category** - Place in appropriate top-level folder
2. **Follow package pattern** - SKILL.md + scripts/ + references/ + assets/
3. **Write clear docs** - Success depends on documentation quality
4. **No LLM calls** - Use deterministic algorithms only
5. **Include templates** - Provide ready-to-use examples
6. **Update this index** - Add to appropriate category

---

## Top Skills by Popularity

### Most Comprehensive
1. **Antigravity** (1,340+ skills across all technologies)
2. **Copilot** (486 specialized GitHub Copilot skills)
3. **Claude Skills** (205 production-ready skills with tools)

### Best for Workflows
1. **Superpowers** (14 systematic development skills)
2. **RuFlo** (130+ enterprise orchestration skills)
3. **DeerFlow** (15 ByteDance production skills)

### Best for Specialization
1. **Claude SEO** (SEO & marketing)
2. **Claude Skills Finance** (Financial analysis)
3. **Claude Skills RA/QM** (Regulatory compliance)

---

## Version History

- **2026-04-03:** Initial comprehensive index created (1,560+ skills cataloged)
- **Phase 2:** Structure reorganization completed
- **Phase 1:** Initial migration of 31 repositories

---

*For agent capabilities, see `COMBINED/agents/INDEX.md`*
*For workflow automation, see `COMBINED/commands/INDEX.md`*
