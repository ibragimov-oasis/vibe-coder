import os
import shutil
from pathlib import Path

ROOT = Path("/Users/ibragimov/Desktop/GitHub/vibe-coder")
COMB = ROOT / "COMBINED"
REPO_DIR = ROOT / "Agents/background-agents"
INDEX_FILE = COMB / "INDEX.md"

if not INDEX_FILE.exists():
    COMB.mkdir(parents=True, exist_ok=True)
    with open(INDEX_FILE, "w") as f:
        f.write("# ULTRACAR — Индекс файлов\n\n")
        f.write("| Исходный путь | Тип | Куда скопировано | Действие | Статус |\n")
        f.write("|--------------|-----|-------------------|----------|--------|\n")

def log_index(src, item_type, dst, action, status="✅"):
    src_rel = str(src.relative_to(ROOT)) if src.is_relative_to(ROOT) else str(src)
    dst_rel = str(dst.relative_to(ROOT)) if dst.is_relative_to(ROOT) else str(dst)
    with open(INDEX_FILE, "a") as f:
        f.write(f"| {src_rel} | {item_type} | {dst_rel} | {action} | {status} |\n")

def copy_file(src_rel_path, dest_rel_path, item_type):
    src = REPO_DIR / src_rel_path
    dst = COMB / dest_rel_path
    if src.exists() and src.is_file():
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        log_index(src, item_type, dst, "copied")
    else:
        print(f"Skipping {src_rel_path} - not found or not a file")

def copy_dir_contents(src_rel_dir, dest_rel_dir, item_type, ext_filter=None):
    src_dir = REPO_DIR / src_rel_dir
    dst_dir = COMB / dest_rel_dir
    if src_dir.exists() and src_dir.is_dir():
        dst_dir.mkdir(parents=True, exist_ok=True)
        for item in src_dir.iterdir():
            if item.is_file() and (not ext_filter or item.suffix in ext_filter):
                dst = dst_dir / item.name
                shutil.copy2(item, dst)
                log_index(item, item_type, dst, "copied")
            elif item.is_dir() and not ext_filter: # copy subdirs if no ext filter
                copy_dir_contents(src_rel_dir + "/" + item.name, dest_rel_dir + "/" + item.name, item_type)
    else:
        print(f"Skipping {src_rel_dir} - not found")

# 1. Agents
copy_file("AGENTS.md", "agents/by-role/background-agent/background-agents--AGENTS.md", "agent")
copy_file("README.md", "agents/by-role/background-agent/background-agents--README.md", "agent-docs")
copy_file("CLAUDE.md", "agents/by-interface/claude/background-agents/CLAUDE.md", "agent-interface")

# 2. Skills
copy_file("VISIBLE_claude/skills/onboarding/SKILL.md", "skills/development/onboarding/background-agents--SKILL.md", "skill")

# 3. Hooks
copy_file("VISIBLE_husky/pre-commit", "hooks/pre-commit/background-agents--pre-commit", "hook")

# 4. Docs
copy_dir_contents("docs", "agents/by-role/background-agent/docs", "docs", ext_filter=[".md", ".txt", ".json"])
copy_dir_contents("docs/adr", "agents/by-role/background-agent/docs/adr", "docs")

# 5. Orchestration / configs
copy_dir_contents("scripts", "orchestration/workflows/background-agents/scripts", "script")
copy_file("VISIBLE_openinspect/setup.sh", "orchestration/workflows/background-agents/openinspect/setup.sh", "script")
copy_dir_contents("VISIBLE_github/workflows", "orchestration/workflows/background-agents/github", "workflow")

# Configs
for cfg in ["VISIBLE_gitignore", "VISIBLE_prettierrc", "VISIBLE_prettierignore", "VISIBLE_vercelignore", "eslint.config.js", "package.json"]:
    copy_file(cfg, f"orchestration/workflows/background-agents/configs/{cfg.replace('VISIBLE_', '')}", "config")

print("Repo 1 processing completed successfully via Python.")
