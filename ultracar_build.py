#!/usr/bin/env python3
"""ULTRACAR Builder — Copy files from 31 repos into organized COMBINED/ structure.
Based on INDEX.md mappings created after reading every repo."""

import os
import shutil
from pathlib import Path

ROOT = Path("/Users/ibragimov/Desktop/GitHub/vibe-coder")
COMBINED = ROOT / "COMBINED"

# Stats
copied = 0
skipped = 0
errors = []

def ensure_dir(path):
    """Create directory if it doesn't exist."""
    Path(path).mkdir(parents=True, exist_ok=True)

def copy_file(src, dst):
    """Copy a single file, creating parent dirs."""
    global copied, skipped
    src_path = ROOT / src
    dst_path = COMBINED / dst
    if not src_path.exists():
        skipped += 1
        return
    ensure_dir(dst_path.parent)
    try:
        shutil.copy2(src_path, dst_path)
        copied += 1
    except Exception as e:
        errors.append(f"{src} -> {dst}: {e}")

def copy_dir(src, dst, skip_patterns=None):
    """Copy entire directory recursively, skipping patterns."""
    global copied, skipped
    src_path = ROOT / src
    dst_path = COMBINED / dst
    if not src_path.exists():
        skipped += 1
        return
    skip = skip_patterns or ['.DS_Store', 'node_modules', '__pycache__', '.git']
    for item in src_path.rglob('*'):
        if item.is_file():
            rel = item.relative_to(src_path)
            # Skip unwanted files
            if any(p in str(rel) for p in skip):
                skipped += 1
                continue
            # Skip lock files and huge binary files
            if item.suffix in ['.lock'] or item.name in ['package-lock.json', 'pnpm-lock.yaml', 'uv.lock', 'yarn.lock']:
                skipped += 1
                continue
            # Skip binary assets (images, gifs, pngs)
            if item.suffix in ['.png', '.gif', '.jpg', '.jpeg', '.ico', '.svg', '.webp', '.mp4']:
                skipped += 1
                continue
            target = dst_path / rel
            ensure_dir(target.parent)
            try:
                shutil.copy2(item, target)
                copied += 1
            except Exception as e:
                errors.append(f"{item} -> {target}: {e}")

def copy_dir_files_only(src, dst, skip_patterns=None):
    """Copy only direct files from a directory (not recursive)."""
    global copied, skipped
    src_path = ROOT / src
    dst_path = COMBINED / dst
    if not src_path.exists():
        skipped += 1
        return
    ensure_dir(dst_path)
    skip = skip_patterns or ['.DS_Store']
    for item in src_path.iterdir():
        if item.is_file() and item.name not in skip:
            if item.suffix in ['.lock'] or item.name in ['package-lock.json', 'pnpm-lock.yaml']:
                skipped += 1
                continue
            try:
                shutil.copy2(item, dst_path / item.name)
                copied += 1
            except Exception as e:
                errors.append(f"{item} -> {dst_path}: {e}")

def copy_skill_dirs(src, prefix, dst_base="skills/development"):
    """Copy each subdirectory as a separate skill."""
    src_path = ROOT / src
    if not src_path.exists():
        return
    for item in sorted(src_path.iterdir()):
        if item.is_dir() and item.name != '.DS_Store' and item.name != '__pycache__' and item.name != 'node_modules':
            copy_dir(f"{src}/{item.name}", f"{dst_base}/{prefix}{item.name}")

print("═══════════════════════════════════════════════════")
print("  ULTRACAR Builder — Processing 31 Repositories")
print("═══════════════════════════════════════════════════")
print()

# Clean old COMBINED (except INDEX.md)
index_backup = None
index_path = COMBINED / "INDEX.md"
if index_path.exists():
    index_backup = index_path.read_text()

# Remove everything in COMBINED except INDEX.md
if COMBINED.exists():
    for item in COMBINED.iterdir():
        if item.name == "INDEX.md":
            continue
        if item.is_dir():
            shutil.rmtree(item)
        else:
            item.unlink()

# Restore INDEX.md
if index_backup:
    ensure_dir(COMBINED)
    index_path.write_text(index_backup)

# ═══════════════════════════════════════
# REPO 1: Agents/shannon/
# ═══════════════════════════════════════
print("📁 REPO 1: Agents/shannon/")

# Commands
copy_file("Agents/shannon/claude/commands/debug.md", "commands/debug/shannon-debug.md")
copy_file("Agents/shannon/claude/commands/pr.md", "commands/review/shannon-pr.md")
copy_file("Agents/shannon/claude/commands/review.md", "commands/review/shannon-review.md")

# Agent definition
copy_file("Agents/shannon/CLAUDE.md", "agents/by-interface/claude/shannon-CLAUDE.md")
copy_file("Agents/shannon/CLAUDE.md", "agents/by-role/security/shannon-agent.md")

# Security files
for f in ["CLAUDE.md", "README.md", "SHANNON-PRO.md", "COVERAGE.md", "Dockerfile",
          "docker-compose.yml", "entrypoint.sh", "package.json", "biome.json",
          "tsconfig.base.json", "tsconfig.json", "turbo.json", "pnpm-workspace.yaml",
          "env.example", "releaserc.json", "dockerignore", "gitignore", "npmrc", "shannon"]:
    copy_file(f"Agents/shannon/{f}", f"security/shannon/{f}")

# Sample reports
copy_dir("Agents/shannon/sample-reports", "security/reports")

# Worker prompts (important security prompts)
copy_dir("Agents/shannon/apps/worker/prompts", "prompts/security")

# Worker configs
copy_dir("Agents/shannon/apps/worker/configs", "security/shannon/configs")

# CLI and Worker source code
copy_dir("Agents/shannon/apps/cli/src", "security/shannon/apps/cli/src")
copy_dir("Agents/shannon/apps/worker/src", "security/shannon/apps/worker/src")
copy_file("Agents/shannon/apps/cli/README.md", "security/shannon/apps/cli/README.md")
copy_file("Agents/shannon/apps/cli/package.json", "security/shannon/apps/cli/package.json")
copy_file("Agents/shannon/apps/cli/tsconfig.json", "security/shannon/apps/cli/tsconfig.json")
copy_file("Agents/shannon/apps/worker/package.json", "security/shannon/apps/worker/package.json")
copy_file("Agents/shannon/apps/worker/tsconfig.json", "security/shannon/apps/worker/tsconfig.json")

# Infra
copy_dir("Agents/shannon/apps/cli/infra", "security/shannon/apps/cli/infra")

# GitHub workflows
copy_dir("Agents/shannon/github", "security/shannon/github")

print(f"  ✅ Shannon: {copied} files copied")
repo1_count = copied

# ═══════════════════════════════════════
# REPO 2: Agents/background-agents/
# ═══════════════════════════════════════
print("📁 REPO 2: Agents/background-agents/")
prev = copied

copy_file("Agents/background-agents/AGENTS.md", "agents/orchestrators/background-agents/AGENTS.md")
copy_file("Agents/background-agents/README.md", "agents/orchestrators/background-agents/README.md")
copy_file("Agents/background-agents/package.json", "agents/orchestrators/background-agents/package.json")
copy_file("Agents/background-agents/eslint.config.js", "agents/orchestrators/background-agents/eslint.config.js")

# Docs
copy_dir("Agents/background-agents/docs", "agents/orchestrators/background-agents/docs")

# Skills
copy_dir("Agents/background-agents/VISIBLE_claude/skills", "skills/development/background-agents-onboarding")

# Packages (all 8)
copy_dir("Agents/background-agents/packages", "agents/orchestrators/background-agents/packages")

# Scripts
copy_dir("Agents/background-agents/scripts", "agents/orchestrators/background-agents/scripts")

# Terraform
copy_dir("Agents/background-agents/terraform", "orchestration/workflows/terraform")

# GitHub workflows
copy_dir("Agents/background-agents/VISIBLE_github", "agents/orchestrators/background-agents/github")

# Husky hooks
copy_dir("Agents/background-agents/VISIBLE_husky", "hooks/pre-commit/background-agents-husky")

# OpenInspect configs
copy_dir("Agents/background-agents/VISIBLE_openinspect", "agents/orchestrators/background-agents/openinspect")

# Visible config files
for f in ["VISIBLE_gitignore", "VISIBLE_prettierrc", "VISIBLE_prettierignore", "VISIBLE_vercelignore"]:
    if (ROOT / f"Agents/background-agents/{f}").exists():
        copy_file(f"Agents/background-agents/{f}", f"agents/orchestrators/background-agents/{f}")

print(f"  ✅ background-agents: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 3: Agents/hermes-agent/
# ═══════════════════════════════════════
print("📁 REPO 3: Agents/hermes-agent/")
prev = copied

# Main agent files
for f in ["AGENTS.md", "README.md", "Dockerfile", "run_agent.py", "cli.py", "batch_runner.py",
          "hermes_state.py", "hermes_constants.py", "hermes_time.py", "trajectory_compressor.py",
          "mcp_serve.py", "model_tools.py", "toolsets.py", "toolset_distributions.py",
          "mini_swe_runner.py", "rl_cli.py", "utils.py", "setup-hermes.sh", "hermes",
          "pyproject.toml", "requirements.txt", "package.json", "flake.nix", "flake.lock",
          "cli-config.yaml.example", "_env.example", "_dockerignore", "_gitignore", "_gitmodules", "_envrc"]:
    copy_file(f"Agents/hermes-agent/{f}", f"agents/orchestrators/hermes/{f}")

# Release notes
for f in ["RELEASE_v0.2.0.md", "RELEASE_v0.3.0.md", "RELEASE_v0.4.0.md", "RELEASE_v0.5.0.md"]:
    copy_file(f"Agents/hermes-agent/{f}", f"agents/orchestrators/hermes/releases/{f}")

# Subdirectories
copy_dir("Agents/hermes-agent/agent", "agents/orchestrators/hermes/agent")
copy_dir("Agents/hermes-agent/gateway", "agents/orchestrators/hermes/gateway")
copy_dir("Agents/hermes-agent/hermes_cli", "agents/orchestrators/hermes/cli")
copy_dir("Agents/hermes-agent/honcho_integration", "agents/orchestrators/hermes/integrations")
copy_dir("Agents/hermes-agent/environments", "agents/orchestrators/hermes/environments")
copy_dir("Agents/hermes-agent/cron", "agents/orchestrators/hermes/cron")
copy_dir("Agents/hermes-agent/acp_adapter", "agents/orchestrators/hermes/acp_adapter")
copy_dir("Agents/hermes-agent/acp_registry", "agents/orchestrators/hermes/acp_registry")
copy_dir("Agents/hermes-agent/docs", "agents/orchestrators/hermes/docs")
copy_dir("Agents/hermes-agent/tools", "agents/orchestrators/hermes/tools")
copy_dir("Agents/hermes-agent/datagen-config-examples", "agents/orchestrators/hermes/configs")
copy_dir("Agents/hermes-agent/_plans", "agents/orchestrators/hermes/plans")
copy_dir("Agents/hermes-agent/plans", "agents/orchestrators/hermes/plans-active")
copy_dir("Agents/hermes-agent/docker", "agents/orchestrators/hermes/docker")
copy_dir("Agents/hermes-agent/nix", "agents/orchestrators/hermes/nix")
copy_dir("Agents/hermes-agent/scripts", "agents/orchestrators/hermes/scripts")
copy_dir("Agents/hermes-agent/tests", "agents/orchestrators/hermes/tests")
copy_dir("Agents/hermes-agent/tinker-atropos", "agents/orchestrators/hermes/tinker-atropos")
copy_dir("Agents/hermes-agent/website", "agents/orchestrators/hermes/website")
copy_dir("Agents/hermes-agent/landingpage", "agents/orchestrators/hermes/landingpage")
copy_dir("Agents/hermes-agent/_github", "agents/orchestrators/hermes/github")

# Optional skills
copy_skill_dirs("Agents/hermes-agent/optional-skills", "hermes-")
# Built-in skills
copy_dir("Agents/hermes-agent/skills", "skills/development/hermes-builtin")

# MCP server
copy_file("Agents/hermes-agent/mcp_serve.py", "mcp-servers/hermes/mcp_serve.py")

print(f"  ✅ hermes-agent: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 4: Orchestration/superpowers/
# ═══════════════════════════════════════
print("📁 REPO 4: Orchestration/superpowers/")
prev = copied

# Skills (14 skill folders)
copy_skill_dirs("Orchestration/superpowers/skills", "superpowers-")

# Agent
copy_file("Orchestration/superpowers/agents/code-reviewer.md", "agents/by-role/reviewer/superpowers-code-reviewer.md")

# Commands
copy_file("Orchestration/superpowers/commands/brainstorm.md", "commands/plan/superpowers-brainstorm.md")
copy_file("Orchestration/superpowers/commands/execute-plan.md", "commands/plan/superpowers-execute-plan.md")
copy_file("Orchestration/superpowers/commands/write-plan.md", "commands/plan/superpowers-write-plan.md")

# Hooks
copy_dir("Orchestration/superpowers/hooks", "hooks/notification/superpowers")

# Plugin configs
copy_dir("Orchestration/superpowers/claude-plugin", "mcp-servers/configs/superpowers-claude-plugin")
copy_dir("Orchestration/superpowers/cursor-plugin", "agents/by-interface/cursor/superpowers-cursor-plugin")
copy_dir("Orchestration/superpowers/codex", "agents/by-interface/codex/superpowers-codex")
copy_dir("Orchestration/superpowers/opencode", "agents/by-interface/opencode/superpowers-opencode")

# Docs
copy_dir("Orchestration/superpowers/docs", "agents/orchestrators/superpowers/docs")
copy_dir("Orchestration/superpowers/tests", "agents/orchestrators/superpowers/tests")
copy_dir("Orchestration/superpowers/github", "agents/orchestrators/superpowers/github")

# Root files
copy_file("Orchestration/superpowers/README.md", "agents/orchestrators/superpowers/README.md")
copy_file("Orchestration/superpowers/GEMINI.md", "agents/orchestrators/superpowers/GEMINI.md")
copy_file("Orchestration/superpowers/RELEASE-NOTES.md", "agents/orchestrators/superpowers/RELEASE-NOTES.md")
copy_file("Orchestration/superpowers/gemini-extension.json", "agents/orchestrators/superpowers/gemini-extension.json")
copy_file("Orchestration/superpowers/package.json", "agents/orchestrators/superpowers/package.json")

print(f"  ✅ superpowers: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 5: Orchestration/get-shit-done/
# ═══════════════════════════════════════
print("📁 REPO 5: Orchestration/get-shit-done/")
prev = copied

# 18 Agents by role
agent_role_map = {
    "gsd-debugger.md": "debugger",
    "gsd-executor.md": "executor",
    "gsd-planner.md": "planner",
    "gsd-plan-checker.md": "planner",
    "gsd-roadmapper.md": "roadmapper",
    "gsd-advisor-researcher.md": "advisor",
    "gsd-assumptions-analyzer.md": "analyzer",
    "gsd-codebase-mapper.md": "mapper",
    "gsd-integration-checker.md": "tester",
    "gsd-nyquist-auditor.md": "auditor",
    "gsd-phase-researcher.md": "researcher",
    "gsd-project-researcher.md": "researcher",
    "gsd-research-synthesizer.md": "synthesizer",
    "gsd-ui-auditor.md": "auditor",
    "gsd-ui-checker.md": "tester",
    "gsd-ui-researcher.md": "designer",
    "gsd-user-profiler.md": "profiler",
    "gsd-verifier.md": "tester",
}
for agent_file, role in agent_role_map.items():
    copy_file(f"Orchestration/get-shit-done/agents/{agent_file}",
              f"agents/by-role/{role}/{agent_file}")

# 57 Commands
gsd_cmds = ROOT / "Orchestration/get-shit-done/commands/gsd"
if gsd_cmds.exists():
    for cmd in sorted(gsd_cmds.iterdir()):
        if cmd.is_file() and cmd.name != '.DS_Store':
            copy_file(f"Orchestration/get-shit-done/commands/gsd/{cmd.name}",
                      f"commands/general/gsd-{cmd.name}")

# 5 Hooks
gsd_hooks = ROOT / "Orchestration/get-shit-done/hooks"
if gsd_hooks.exists():
    for hook in sorted(gsd_hooks.iterdir()):
        if hook.is_file() and hook.name != '.DS_Store':
            copy_file(f"Orchestration/get-shit-done/hooks/{hook.name}",
                      f"hooks/notification/gsd-{hook.name}")

# Core GSD system
copy_dir("Orchestration/get-shit-done/get-shit-done", "orchestration/get-shit-done/core")
copy_dir("Orchestration/get-shit-done/bin", "orchestration/get-shit-done/bin")
copy_dir("Orchestration/get-shit-done/sdk", "orchestration/get-shit-done/sdk")
copy_dir("Orchestration/get-shit-done/scripts", "orchestration/get-shit-done/scripts")
copy_dir("Orchestration/get-shit-done/docs", "orchestration/get-shit-done/docs")
copy_dir("Orchestration/get-shit-done/tests", "orchestration/get-shit-done/tests")
copy_dir("Orchestration/get-shit-done/github", "orchestration/get-shit-done/github")
copy_dir("Orchestration/get-shit-done/git", "orchestration/get-shit-done/git")

# Root files
for f in ["README.md", "CHANGELOG.md", "SECURITY.md", "package.json", "tsconfig.json",
          "release-monitor.sh", "gitignore", "base64scanignore", "secretscanignore"]:
    copy_file(f"Orchestration/get-shit-done/{f}", f"orchestration/get-shit-done/{f}")

# Translated READMEs
for f in ["README.ja-JP.md", "README.ko-KR.md", "README.pt-BR.md", "README.zh-CN.md"]:
    copy_file(f"Orchestration/get-shit-done/{f}", f"orchestration/get-shit-done/{f}")

print(f"  ✅ get-shit-done: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 6: Orchestration/ruflo/
# ═══════════════════════════════════════
print("📁 REPO 6: Orchestration/ruflo/")
prev = copied

# Agents
copy_dir("Orchestration/ruflo/agents", "agents/by-interface/claude/ruflo-agents")

# CLAUDE.md, AGENTS.md
copy_file("Orchestration/ruflo/CLAUDE.md", "agents/by-interface/claude/ruflo-CLAUDE.md")
copy_file("Orchestration/ruflo/CLAUDE.local.md", "agents/by-interface/claude/ruflo-CLAUDE.local.md")
copy_file("Orchestration/ruflo/AGENTS.md", "agents/orchestrators/ruflo/AGENTS.md")

# Core
copy_dir("Orchestration/ruflo/ruflo", "orchestration/ruflo/core")
copy_dir("Orchestration/ruflo/plugin", "orchestration/ruflo/plugin")
copy_dir("Orchestration/ruflo/v2", "orchestration/ruflo/versions/v2")
copy_dir("Orchestration/ruflo/v3", "orchestration/ruflo/versions/v3")
copy_dir("Orchestration/ruflo/bin", "orchestration/ruflo/bin")
copy_dir("Orchestration/ruflo/scripts", "orchestration/ruflo/scripts")
copy_dir("Orchestration/ruflo/tests", "orchestration/ruflo/tests")

# Plugin configs
copy_dir("Orchestration/ruflo/claude-plugin", "mcp-servers/configs/ruflo-claude-plugin")
copy_dir("Orchestration/ruflo/claude", "agents/by-interface/claude/ruflo-claude-config")

# Githooks
copy_dir("Orchestration/ruflo/githooks", "hooks/pre-commit/ruflo-githooks")

# GitHub
copy_dir("Orchestration/ruflo/github", "orchestration/ruflo/github")

# Root files
for f in ["README.md", "CHANGELOG.md", "SECURITY.md", "package.json", "tsconfig.json", "gitignore", "npmignore"]:
    copy_file(f"Orchestration/ruflo/{f}", f"orchestration/ruflo/{f}")

print(f"  ✅ ruflo: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 7: Orchestration/deer-flow/
# ═══════════════════════════════════════
print("📁 REPO 7: Orchestration/deer-flow/")
prev = copied

# Skills (15 public skills)
skill_category_map = {
    "bootstrap": "skills/development/deer-flow-bootstrap",
    "chart-visualization": "skills/data-analysis/deer-flow-chart-viz",
    "claude-to-deerflow": "orchestration/deer-flow/claude-integration",
    "consulting-analysis": "skills/research/deer-flow-consulting",
    "data-analysis": "skills/data-analysis/deer-flow-data-analysis",
    "deep-research": "skills/research/deer-flow-deep-research",
    "find-skills": "skills/development/deer-flow-find-skills",
    "frontend-design": "skills/design/deer-flow-frontend-design",
    "github-deep-research": "skills/research/deer-flow-github-research",
    "image-generation": "skills/design/deer-flow-image-gen",
    "podcast-generation": "skills/writing/deer-flow-podcast",
    "ppt-generation": "skills/writing/deer-flow-ppt",
    "skill-creator": "skills/development/deer-flow-skill-creator",
    "surprise-me": "skills/development/deer-flow-surprise",
    "vercel-deploy-claimable": "skills/devops/deer-flow-vercel-deploy",
}
skills_pub = ROOT / "Orchestration/deer-flow/skills/public"
if skills_pub.exists():
    for skill_dir in sorted(skills_pub.iterdir()):
        if skill_dir.is_dir() and skill_dir.name in skill_category_map:
            copy_dir(f"Orchestration/deer-flow/skills/public/{skill_dir.name}",
                     skill_category_map[skill_dir.name])

# Also copy frontend-design to ui-design
copy_dir("Orchestration/deer-flow/skills/public/frontend-design", "ui-design/rules/deer-flow-frontend-design")

# Backend
copy_dir("Orchestration/deer-flow/backend", "orchestration/deer-flow/backend")
# Frontend
copy_dir("Orchestration/deer-flow/frontend", "orchestration/deer-flow/frontend")
# Docker
copy_dir("Orchestration/deer-flow/docker", "orchestration/deer-flow/docker")
# Docs
copy_dir("Orchestration/deer-flow/docs", "orchestration/deer-flow/docs")
# Scripts
copy_dir("Orchestration/deer-flow/scripts", "orchestration/deer-flow/scripts")
# GitHub
copy_dir("Orchestration/deer-flow/_github", "orchestration/deer-flow/github")

# Root files
for f in ["README.md", "README_fr.md", "README_ja.md", "README_ru.md", "README_zh.md",
          "Install.md", "Makefile", "SECURITY.md", "config.example.yaml",
          "deer-flow.code-workspace", "extensions_config.example.json",
          "_env.example", "_dockerignore", "_gitattributes", ".gitignore"]:
    copy_file(f"Orchestration/deer-flow/{f}", f"orchestration/deer-flow/{f}")

print(f"  ✅ deer-flow: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 8-10: oh-my-claudecode, 1code, vibe-kanban
# ═══════════════════════════════════════
print("📁 REPO 8: oh-my-claudecode")
prev = copied
copy_dir("Orchestration/oh-my-claudecode", "orchestration/oh-my-claudecode")
print(f"  ✅ oh-my-claudecode: {copied - prev} files copied")

print("📁 REPO 9: 1code")
prev = copied
copy_dir("Orchestration/1code", "orchestration/1code")
print(f"  ✅ 1code: {copied - prev} files copied")

print("📁 REPO 10: vibe-kanban")
prev = copied
copy_dir("Orchestration/vibe-kanban", "orchestration/vibe-kanban")
print(f"  ✅ vibe-kanban: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 11: Skills/antigravity-awesome-skills/
# ═══════════════════════════════════════
print("📁 REPO 11: Skills/antigravity-awesome-skills/")
prev = copied

# Each skill subfolder
copy_skill_dirs("Skills/antigravity-awesome-skills/skills", "antigravity-", "skills/development")

# Agents
copy_dir("Skills/antigravity-awesome-skills/_agents", "agents/by-interface/antigravity")

# Claude plugin
copy_dir("Skills/antigravity-awesome-skills/_claude-plugin", "mcp-servers/configs/antigravity-claude-plugin")

# Apps, scripts, plugins, tools
copy_dir("Skills/antigravity-awesome-skills/apps", "skills/development/antigravity-apps")
copy_dir("Skills/antigravity-awesome-skills/scripts", "skills/development/antigravity-scripts")
copy_dir("Skills/antigravity-awesome-skills/plugins", "skills/development/antigravity-plugins")
copy_dir("Skills/antigravity-awesome-skills/tools", "skills/development/antigravity-tools")
copy_dir("Skills/antigravity-awesome-skills/data", "skills/development/antigravity-data")
copy_dir("Skills/antigravity-awesome-skills/docs", "skills/development/antigravity-docs")
copy_dir("Skills/antigravity-awesome-skills/docs_zh-CN", "skills/development/antigravity-docs-zh")
copy_dir("Skills/antigravity-awesome-skills/skill_categorization", "skills/development/antigravity-categorization")
copy_dir("Skills/antigravity-awesome-skills/_github", "skills/development/antigravity-github")

# Root files
for f in ["README.md", "CATALOG.md", "CHANGELOG.md", "CODE_OF_CONDUCT.md", "SECURITY.md",
          "walkthrough.md", "skills_index.json", "package.json", "START_APP.bat"]:
    copy_file(f"Skills/antigravity-awesome-skills/{f}", f"skills/development/antigravity-root/{f}")

print(f"  ✅ antigravity-awesome-skills: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 12: Skills/claude-skills/
# ═══════════════════════════════════════
print("📁 REPO 12: Skills/claude-skills/")
prev = copied

# Agent definitions
copy_dir("Skills/claude-skills/agents", "agents/by-role/claude-skills-agents")

# Skill categories
for cat in ["business-growth", "c-level-advisor", "claude-skills", "custom-gpt",
            "documentation", "engineering", "engineering-team", "eval-workspace",
            "finance", "marketing-skill", "orchestration", "product-team",
            "project-management", "ra-qm-team", "standards", "templates"]:
    copy_dir(f"Skills/claude-skills/{cat}", f"skills/development/claude-skills-{cat}")

# Commands
copy_dir("Skills/claude-skills/commands", "commands/general/claude-skills-commands")

# Scripts
copy_dir("Skills/claude-skills/scripts", "skills/development/claude-skills-scripts")

# Docs
copy_dir("Skills/claude-skills/docs", "skills/development/claude-skills-docs")

# Unhidden configs
copy_dir("Skills/claude-skills/unhidden_claude", "agents/by-interface/claude/claude-skills-config")
copy_dir("Skills/claude-skills/unhidden_claude-plugin", "mcp-servers/configs/claude-skills-plugin")
copy_dir("Skills/claude-skills/unhidden_codex", "agents/by-interface/codex/claude-skills-codex")
copy_dir("Skills/claude-skills/unhidden_gemini", "agents/by-interface/antigravity/claude-skills-gemini")
copy_dir("Skills/claude-skills/unhidden_github", "skills/development/claude-skills-github")
copy_dir("Skills/claude-skills/unhidden_autoresearch", "skills/development/claude-skills-autoresearch")

# Root files
for f in ["README.md", "CLAUDE.md", "GEMINI.md", "CHANGELOG.md", "CONVENTIONS.md",
          "INSTALLATION.md", "SECURITY.md", "AUDIT_REPORT.md", "CODE_OF_CONDUCT.md",
          "SKILL-AUTHORING-STANDARD.md", "SKILL_PIPELINE.md", "STORE.md", "mkdocs.yml"]:
    copy_file(f"Skills/claude-skills/{f}", f"skills/development/claude-skills-root/{f}")

print(f"  ✅ claude-skills: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 13-17: Other Skills repos
# ═══════════════════════════════════════
for repo_num, (repo, prefix) in enumerate([
    ("Skills/everything-claude-code", "everything-cc"),
    ("Skills/awesome-copilot-main", "awesome-copilot"),
    ("Skills/awesome-claude-code", "awesome-cc"),
    ("Skills/claude-seo", "claude-seo"),
    ("Skills/obsidian-skills", "obsidian"),
], start=13):
    print(f"📁 REPO {repo_num}: {repo}/")
    prev = copied
    
    if repo == "Skills/awesome-copilot-main":
        copy_dir(repo, "agents/by-interface/copilot")
    elif repo == "Skills/claude-seo":
        copy_dir(repo, f"skills/seo/{prefix}")
    elif repo == "Skills/obsidian-skills":
        copy_dir(repo, "skills/platform/obsidian")
    else:
        copy_dir(repo, f"skills/development/{prefix}")
    
    print(f"  ✅ {Path(repo).name}: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 18-21: Prompts
# ═══════════════════════════════════════
print("📁 REPO 18: Prompts/system-prompts-and-models-of-ai-tools/")
prev = copied
# Each tool gets its own folder
sp_path = ROOT / "Prompts/system-prompts-and-models-of-ai-tools"
if sp_path.exists():
    for tool_dir in sorted(sp_path.iterdir()):
        if tool_dir.is_dir() and tool_dir.name != '.DS_Store':
            safe_name = tool_dir.name.lower().replace(' ', '-')
            copy_dir(f"Prompts/system-prompts-and-models-of-ai-tools/{tool_dir.name}",
                     f"prompts/system-prompts/{safe_name}")
print(f"  ✅ system-prompts-by-tool: {copied - prev} files copied")

print("📁 REPO 18b: Prompts/system-prompts/")
prev = copied
sp_path2 = ROOT / "Prompts/system-prompts"
if sp_path2.exists():
    for tool_dir in sorted(sp_path2.iterdir()):
        if tool_dir.is_dir() and tool_dir.name != '.DS_Store':
            safe_name = tool_dir.name.lower().replace(' ', '-')
            copy_dir(f"Prompts/system-prompts/{tool_dir.name}",
                     f"prompts/system-prompts/{safe_name}")
print(f"  ✅ system-prompts: {copied - prev} files copied")

print("📁 REPO 19: Prompts/system_prompts_leaks/")
prev = copied
copy_dir("Prompts/system_prompts_leaks", "prompts/leaked")
print(f"  ✅ system-prompts-leaks: {copied - prev} files copied")

print("📁 REPO 20: Prompts/prompts.chat/")
prev = copied
copy_dir("Prompts/prompts.chat", "prompts/templates/prompts-chat")
print(f"  ✅ prompts.chat: {copied - prev} files copied")

print("📁 REPO 20b: Prompts/optimization/")
prev = copied
copy_dir("Prompts/optimization", "prompts/templates/optimization")
print(f"  ✅ optimization: {copied - prev} files copied")

print("📁 REPO 20c: Prompts/vibe-coding/")
prev = copied
copy_dir("Prompts/vibe-coding", "prompts/templates/vibe-coding")
print(f"  ✅ vibe-coding: {copied - prev} files copied")

print("📁 REPO 21: Prompts/vibe-coding-prompt-template/")
prev = copied
copy_dir("Prompts/vibe-coding-prompt-template", "prompts/templates/vibe-coding-template")
print(f"  ✅ vibe-coding-prompt-template: {copied - prev} files copied")

# Copy COMBINED_PROMPTS.md from Prompts root
copy_file("Prompts/COMBINED_PROMPTS.md", "prompts/COMBINED_PROMPTS.md")

# ═══════════════════════════════════════
# REPO 22-28: Tools
# ═══════════════════════════════════════
print("📁 REPO 22: Tools/claude-mem/")
prev = copied
copy_dir("Tools/claude-mem", "memory/claude-mem")
print(f"  ✅ claude-mem: {copied - prev} files copied")

print("📁 REPO 23: Tools/supermemory/")
prev = copied
copy_dir("Tools/supermemory", "memory/supermemory")
print(f"  ✅ supermemory: {copied - prev} files copied")

print("📁 REPO 24: Tools/GitNexus/")
prev = copied
copy_dir("Tools/GitNexus", "mcp-servers/gitnexus")
print(f"  ✅ GitNexus: {copied - prev} files copied")

print("📁 REPO 25: Tools/browser/ (lightpanda)")
prev = copied
copy_dir("Tools/browser", "mcp-servers/lightpanda")
print(f"  ✅ browser/lightpanda: {copied - prev} files copied")

print("📁 REPO 26: Tools/OpenViking/")
prev = copied
copy_dir("Tools/OpenViking", "mcp-servers/openviking")
print(f"  ✅ OpenViking: {copied - prev} files copied")

print("📁 REPO 27: Tools/nano-banana-2-mcp/")
prev = copied
copy_dir("Tools/nano-banana-2-mcp", "mcp-servers/nano-banana")
print(f"  ✅ nano-banana: {copied - prev} files copied")

print("📁 REPO 28: Tools/pretext/")
prev = copied
copy_dir("Tools/pretext", "mcp-servers/pretext")
print(f"  ✅ pretext: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 29: Reference/awesome-selfhosted-master/
# ═══════════════════════════════════════
print("📁 REPO 29: Reference/awesome-selfhosted-master/")
prev = copied
copy_dir("Reference/awesome-selfhosted-master", "prompts/templates/selfhosted")
print(f"  ✅ awesome-selfhosted: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 30: UI-UX/ui-ux-pro-max-skill/
# ═══════════════════════════════════════
print("📁 REPO 30: UI-UX/ui-ux-pro-max-skill/")
prev = copied
copy_dir("UI-UX/ui-ux-pro-max-skill", "ui-design/rules/ui-ux-pro-max")
print(f"  ✅ ui-ux-pro-max: {copied - prev} files copied")

# ═══════════════════════════════════════
# REPO 31: UI-UX/galaxy/ + UI-UX/ui/
# ═══════════════════════════════════════
print("📁 REPO 31: UI-UX/galaxy/ + UI-UX/ui/")
prev = copied
copy_dir("UI-UX/galaxy", "ui-design/components/galaxy")
copy_dir("UI-UX/ui", "ui-design/components/shadcn")
# COMBINED_DESIGN_SYSTEM.md
copy_file("UI-UX/COMBINED_DESIGN_SYSTEM.md", "ui-design/COMBINED_DESIGN_SYSTEM.md")
print(f"  ✅ galaxy + shadcn: {copied - prev} files copied")

# ═══════════════════════════════════════
# ROOT CONFIG FILES
# ═══════════════════════════════════════
print("📁 ROOT CONFIG FILES")
prev = copied
copy_file(".cursorrules", "ui-design/cursor-rules/root-cursorrules.md")
copy_dir(".cursor/rules", "ui-design/cursor-rules")
copy_dir(".antigravity", "skills/development/antigravity-root-config")
copy_dir(".claude", "agents/by-interface/claude/root-claude-config")
copy_file("ORCHESTRATION.md", "orchestration/ROOT-ORCHESTRATION.md")
copy_file("MEMORY_SETUP.md", "memory/configs/ROOT-MEMORY_SETUP.md")
copy_file("llms.txt", "agents/llms.txt")
print(f"  ✅ root configs: {copied - prev} files copied")

# ═══════════════════════════════════════
# FINAL REPORT
# ═══════════════════════════════════════
print()
print("═══════════════════════════════════════════════════")
print(f"  🏁 ALL 31 REPOS PROCESSED!")
print(f"  ✅ Total files copied: {copied}")
print(f"  ⏭️  Total files skipped: {skipped}")
print(f"  ❌ Errors: {len(errors)}")
print("═══════════════════════════════════════════════════")

if errors:
    print("\nErrors:")
    for e in errors[:20]:
        print(f"  ⚠️  {e}")

# Count files by top-level category
print("\n📊 Files by category:")
for cat_dir in sorted(COMBINED.iterdir()):
    if cat_dir.is_dir():
        count = sum(1 for _ in cat_dir.rglob('*') if _.is_file())
        print(f"  {cat_dir.name}/: {count} files")

print(f"\n📊 Total files in COMBINED/: {sum(1 for _ in COMBINED.rglob('*') if _.is_file())}")
