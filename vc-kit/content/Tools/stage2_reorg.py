import os
import shutil
from pathlib import Path

base_dir = Path("COMBINED/agents/by-role")
claude_agents_dir = base_dir / "claude-skills-agents"
ruflo_agents_dir = Path("COMBINED/agents/by-interface/claude/ruflo-agents")

def move_claude_agents():
    if not claude_agents_dir.exists():
        return
    for root, dirs, files in os.walk(claude_agents_dir):
        for f in files:
            if f.endswith(".md") and f != "CLAUDE.md" and f != "TEMPLATE.md" and f != "README.md" and f != "unhidden_gitkeep":
                # strip "cs-" and "-" and parse role
                base = f.replace(".md", "").replace("cs-", "")
                # simple mapping if needed
                role = base
                if "-advisor" in base:
                    role = "advisor"
                elif "-manager" in base:
                    role = "manager"
                elif "engineer" in base:
                    role = "engineer"
                elif "researcher" in base:
                    role = "researcher"
                elif "strategist" in base:
                    role = "strategist"
                else: 
                    # create folder based on the parent folder name inside claude-skills-agents
                    parent_name = os.path.basename(root)
                    role = parent_name
                
                target_folder = base_dir / role
                target_folder.mkdir(parents=True, exist_ok=True)
                
                src = Path(root) / f
                dst = target_folder / f
                if not dst.exists():
                    shutil.move(src, dst)
                    print(f"Moved {f} to {target_folder}")

def move_ruflo_agents():
    if not ruflo_agents_dir.exists():
        return
    yaml_files = list(ruflo_agents_dir.glob("*.yaml"))
    for yf in yaml_files:
        role = yf.stem
        target_folder = base_dir / role
        target_folder.mkdir(parents=True, exist_ok=True)
        dst = target_folder / f"ruflo-{yf.name}"
        if not dst.exists():
            shutil.copy2(yf, dst)
            print(f"Moved {yf.name} to {target_folder}")

move_claude_agents()
move_ruflo_agents()
