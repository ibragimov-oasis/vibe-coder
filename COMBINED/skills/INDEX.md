# COMBINED/skills - Master Skills Index

> **Complete catalog of all AI agent skills across 31 repositories**
> Last updated: 2026-04-03

## Overview

This directory contains **1,560+ production-ready skills** providing specialized capabilities for AI agents. Skills are **self-contained packages** that bundle:
- Domain expertise and best practices
- Reusable templates and workflows
- Analysis tools and scripts (no LLM calls)
- Reference guides and documentation

**Total Statistics by Category:**
- **Development:** 5,486 files (largest category)
- **Copilot:** 486 specialized skills
- **SEO/Marketing:** 154 files
- **Design:** 134 files
- **Data Analysis:** 28 files
- **Platform-Specific:** 11 files (Obsidian, etc.)
- **Research:** 4 files
- **Business/Growth:** 3 files
- **Writing:** 3 files
- **DevOps:** 1 file

---

## Directory Structure

```
skills/
├── development/          # Software development (5,486 files)
│   ├── antigravity/      # 1,340+ skills by technology
│   ├── claude-skills/    # 205 production skills
│   ├── superpowers/      # 14 workflow skills
│   ├── deer-flow/        # ByteDance skills
│   ├── hermes/           # Self-learning agent skills
│   ├── awesome-copilot/  # Copilot ecosystem
│   ├── awesome-claude-code/
│   ├── everything-claude-code/
│   └── ruflo/            # RuFlo enterprise skills
│
├── copilot/              # GitHub Copilot skills (486 files)
│   ├── add-educational-comments/
│   ├── agent-governance/
│   ├── azure-architecture-autopilot/
│   ├── breakdown-* (epic, feature, test)/
│   ├── code-quality-*/
│   └── ...460+ more
│
├── seo/                  # SEO & Marketing (154 files)
│   ├── claude-seo/       # SEO audit & optimization
│   └── claude-skills-marketing/
│
├── design/               # UI/UX Design (134 files)
│   ├── deer-flow-frontend-design/
│   ├── deer-flow-image-generation/
│   └── ui-design/
│
├── data-analysis/        # Data Science (28 files)
│   ├── deer-flow-data-analysis/
│   ├── chart-visualization/
│   └── claude-skills-finance/
│
├── research/             # Research Skills (4 files)
│   ├── deer-flow-deep-research/
│   ├── deer-flow-github-research/
│   └── consulting-analysis/
│
├── writing/              # Content Creation (3 files)
│   ├── deer-flow-podcast/
│   ├── deer-flow-ppt/
│   └── documentation/
│
├── business/             # Business Advisory (3 files)
│   ├── claude-skills-c-level/
│   ├── claude-skills-growth/
│   └── claude-skills-ra-qm/
│
├── platform/             # Platform-Specific (11 files)
│   └── obsidian/         # Obsidian skills
│
└── devops/               # DevOps Skills (1 file)
    └── deer-flow-vercel-deploy/
```

---

## 🚀 Development Skills (5,486 files)

### Antigravity Awesome Skills (1,340+ skills)

**Location:** `development/antigravity/`

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

**Location:** `development/claude-skills/`

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

**Location:** `development/superpowers/`

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

**Location:** `development/deer-flow/` (distributed across categories)

**Skills:**
- `bootstrap/` - Project initialization
- `data-analysis/` - Data processing
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

**Location:** `development/hermes/`

**Structure:**
- `builtin/` - Core self-learning capabilities
- `optional/` - Extended skills

**Focus:** Self-learning agent ecosystem with tool integration

---

### Awesome Claude Code

**Location:** `development/awesome-claude-code/`

**Description:** Curated collection of production-ready Claude Code skills

**Categories:**
- Agent development patterns
- Workflow automation
- Context engineering
- Security skills (Trail of Bits)
- Scientific research skills

---

### Everything Claude Code

**Location:** `development/everything-claude-code/`

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

**Location:** `development/ruflo/`

**Description:** RuFlo v3.5 enterprise orchestration skills

**Features:**
- 130+ Skills
- Self-learning with Q-Learning Router
- Multiple topologies (mesh, hierarchical, ring, star)
- Fault-tolerant consensus
- Enterprise-grade security (AIDefence)

---

## 💼 GitHub Copilot Skills (486 files)

**Location:** `copilot/`

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

**Location:** `seo/claude-seo/`

**Capabilities:**
- SEO audits
- Keyword research
- Content optimization
- Meta tag generation
- Technical SEO analysis
- Link building strategies
- Local SEO optimization

### Claude Skills Marketing

**Location:** `seo/claude-skills-marketing/`

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

**Location:** `design/deer-flow-frontend-design/`

**Focus:** Modern frontend UI design patterns

### DeerFlow Image Generation

**Location:** `design/deer-flow-image-generation/`

**Focus:** AI-powered image creation workflows

### UI Design

**Location:** `design/ui-design/`

**Focus:** UI/UX best practices and component design

---

## 📊 Data Analysis Skills (28 files)

### DeerFlow Data Analysis

**Location:** `data-analysis/deer-flow-data-analysis/`

**Capabilities:** Data processing, analysis workflows

### Chart Visualization

**Location:** `data-analysis/chart-visualization/`

**Capabilities:** Data visualization techniques

### Claude Skills Finance

**Location:** `data-analysis/claude-skills-finance/`

**Capabilities:**
- Financial analysis
- DCF modeling
- Budget planning
- Financial reporting

---

## 🔬 Research Skills (4 files)

### DeerFlow Deep Research

**Location:** `research/deer-flow-deep-research/`

**Focus:** Comprehensive research workflows

### DeerFlow GitHub Research

**Location:** `research/deer-flow-github-research/`

**Focus:** GitHub repository analysis

### Consulting Analysis

**Location:** `research/consulting-analysis/`

**Focus:** Business consulting frameworks

---

## ✍️ Writing Skills (3 files)

### DeerFlow Podcast

**Location:** `writing/deer-flow-podcast/`

**Focus:** Podcast script generation

### DeerFlow PPT

**Location:** `writing/deer-flow-ppt/`

**Focus:** Presentation creation

### Documentation

**Location:** `writing/documentation/`

**Focus:** Technical documentation

---

## 💼 Business Skills (3 files)

### C-Level Advisors

**Location:** `business/claude-skills-c-level/`

**Skills:**
- `board-deck-builder` - Board presentation creation
- CEO strategic advisory
- CTO technical leadership

### Growth & Sales

**Location:** `business/claude-skills-growth/`

**Skills:**
- `sales-engineer` - Sales engineering expertise
- Customer success strategies
- Revenue operations

### RA/QM Compliance

**Location:** `business/claude-skills-ra-qm/`

**Skills:**
- `soc2-compliance` - SOC 2 audit preparation
- ISO 13485, MDR, FDA compliance
- GDPR compliance

---

## 🔧 Platform-Specific Skills (11 files)

### Obsidian Skills

**Location:** `platform/obsidian/`

**Focus:** Obsidian note-taking app integration and workflows

---

## 🚀 DevOps Skills (1 file)

### DeerFlow Vercel Deploy

**Location:** `devops/deer-flow-vercel-deploy/`

**Focus:** Vercel deployment automation

---

## Quick Reference by Use Case

### "I need to build a web application"
→ `development/antigravity/frontend/` + `development/antigravity/backend/`

### "I need to implement AI features"
→ `development/claude-skills/engineering/` (AI/ML section)

### "I need to optimize for SEO"
→ `seo/claude-seo/`

### "I need to create marketing content"
→ `seo/claude-skills-marketing/`

### "I need systematic development workflow"
→ `development/superpowers/` (14 workflow skills)

### "I need to analyze data"
→ `data-analysis/` (all skills)

### "I need UI/UX design"
→ `design/` (all skills)

### "I need business strategy"
→ `business/claude-skills-c-level/`

### "I need financial analysis"
→ `data-analysis/claude-skills-finance/`

### "I need research capabilities"
→ `research/` (all skills)

### "I need GitHub Copilot integration"
→ `copilot/` (486 specialized skills)

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
