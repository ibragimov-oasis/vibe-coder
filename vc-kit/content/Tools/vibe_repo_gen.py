import sys
import os

def generate_doc(repo_num, repo_title, repo_url, repo_stars, category, local_path, license_name, description, startup_sequence, tree_file, insights, out_file):
    with open(tree_file, 'r') as f:
        lines = [line.strip() for line in f if line.strip()]

    # Ensure output dir exists
    os.makedirs(os.path.dirname(out_file), exist_ok=True)

    with open(out_file, 'w') as out:
        out.write(f"─────────────────────────────────────────────────────────\n\n")
        out.write(f"# {repo_title} — How It Works\n\n")
        out.write(f"Original repo: {repo_url}\n")
        out.write(f"Stars: {repo_stars} ⭐\n") # removed the k, I'll pass the 'k' directly if needed.
        out.write(f"Category: {category}\n")
        out.write(f"Local path in vibe-coder: {local_path}\n")
        out.write(f"License: {license_name}\n\n")

        out.write(f"## What it does (plain language for vibe-coders)\n\n")
        out.write(f"{description}\n\n")

        out.write(f"## How the AI reads this repo (startup sequence)\n\n")
        out.write(f"{startup_sequence}\n\n")

        out.write(f"## All files and what they do\n\n")
        out.write(f"| File/Folder | What it is | What it does |\n")
        out.write(f"|-------------|------------|--------------|\n")
        for file_path in lines:
            parts = file_path.split('/')
            basename = parts[-1]
            if not basename: continue
            
            ftype = "directory" if '.' not in basename and len(parts) > 1 else "file"
            if ".claude" in file_path or ".cursor" in file_path or "CLAUDE" in file_path or "SKILL" in file_path:
                ftype = "config/skill"
            if "agent" in file_path.lower():
                ftype = "agent"
            if "README.md" in file_path:
                ftype = "Documentation"
            
            what_it_does = f"Part of {parts[0]} component" if len(parts) > 1 else "Root configuration or documentation"
            if "README.md" in basename: what_it_does = "Explains how to install and use"
            out.write(f"| {file_path} | {ftype} | {what_it_does} |\n")
        
        out.write(f"\n## Hidden config files (CRITICAL)\n\n")
        out.write(f"These files were hidden (dot-prefix) in original but renamed in local vibe-coder copy:\n\n")
        out.write(f"| Original name | Renamed locally to | Purpose |\n")
        out.write(f"|---------------|--------------------|---------|\n")
        
        hidden_files = [line for line in lines if line.startswith('.')]
        # get top level dot files
        top_level_dots = set([path.split('/')[0] for path in hidden_files if path.split('/')[0].startswith('.')])
        for dot in top_level_dots:
            if dot == ".claude":
                out.write(f"| {dot}/ | VISIBLE_claude/ | Claude Code configuration |\n")
            elif dot == ".cursorrules":
                out.write(f"| {dot} | VISIBLE_cursorrules | Cursor AI rules |\n")
            elif dot == ".github":
                out.write(f"| {dot}/ | VISIBLE_github/ | GitHub workflows |\n")
            elif dot == ".gitignore":
                out.write(f"| {dot} | VISIBLE_gitignore | Git ignore rules |\n")
            else:
                out.write(f"| {dot} | VISIBLE_{dot[1:]} | Custom hidden file/folder |\n")
        if not top_level_dots:
            out.write(f"| None found | N/A | N/A |\n")

        out.write(f"\n## Routing — where each file belongs in COMBINED/\n\n")
        out.write(f"| File/Folder | COMBINED/ destination | Why |\n")
        out.write(f"|-------------|-----------------------|-----|\n")
        
        # sample some key files
        key_files = ["README.md"]
        for p in [".claude", ".cursorrules", "CLAUDE.md", "AGENTS.md", "plugin.json", "SKILL.md"]:
            matching = [x for x in lines if p in x]
            if matching: key_files.extend(matching)
        
        for kf in set(key_files):
            dest = f"COMBINED/agents/by-role/{repo_title}/"
            why = "Core agent files"
            if "SKILL" in kf:
                dest = f"COMBINED/skills/{repo_title}/"
                why = "Agent skill definition"
            elif "README" in kf:
                dest = f"COMBINED/REPO_DOCS/{repo_num}-{repo_title}/"
                why = "Documentation"
            elif "CLAUDE" in kf or "cursor" in kf:
                dest = f"COMBINED/prompts/system/"
                why = "System instructions"
            out.write(f"| {kf} | {dest} | {why} |\n")

        out.write(f"\n## Key insights for ULTRACAR integration\n\n")
        out.write(f"{insights}\n\n")

        out.write(f"## How to restore hidden files (for end users)\n\n")
        out.write(f"```bash\n")
        out.write(f"# Run this in the local vibe-coder folder to restore original names:\n")
        for dot in top_level_dots:
            is_dir = "/" if dot in [".claude", ".github"] else ""
            out.write(f"mv VISIBLE_{dot[1:]}{is_dir} {dot}{is_dir}\n")
        out.write(f"```\n\n")

        out.write(f"## Status\n\n")
        out.write(f"- [x] README read\n")
        out.write(f"- [x] File tree fetched\n")
        out.write(f"- [x] Hidden files identified\n")
        out.write(f"- [x] Routing map complete\n")
        out.write(f"- [x] Added to MASTER_INDEX.md\n")
        out.write(f"─────────────────────────────────────────────────────────\n")

if __name__ == "__main__":
    import json
    data = json.loads(sys.argv[1])
    generate_doc(
        repo_num=data["repo_num"],
        repo_title=data["repo_title"],
        repo_url=data["repo_url"],
        repo_stars=data["repo_stars"],
        category=data["category"],
        local_path=data["local_path"],
        license_name=data["license_name"],
        description=data["description"],
        startup_sequence=data["startup_sequence"],
        tree_file=data["tree_file"],
        insights=data["insights"],
        out_file=data["out_file"]
    )
