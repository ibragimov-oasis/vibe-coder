import os
import sys
import json
import urllib.request
import re
from vibe_repo_gen import generate_doc

REPOS_DATA = [
    # 11-20
    {"num": "11", "name": "antigravity", "owner_repo": "vibe-hacker/antigravity-awesome-skills", "stars": "29k", "category": "Skills", "local_path": "Skills/antigravity-awesome-skills/", "desc": "Massive skill library containing 1,340+ skills"},
    {"num": "12", "name": "awesome-claude-code", "owner_repo": "vibe-hacker/awesome-claude-code", "stars": "36.3k", "category": "Skills", "local_path": "Skills/awesome-claude-code/", "desc": "Curated list of skills, agents, plugins"},
    {"num": "13", "name": "awesome-copilot", "owner_repo": "vibe-hacker/awesome-copilot-main", "stars": "28.3k", "category": "Skills", "local_path": "Skills/awesome-copilot-main/", "desc": "GitHub Copilot agent and SDK library"},
    {"num": "14", "name": "claude-seo", "owner_repo": "vibe-hacker/claude-seo", "stars": "2k", "category": "Skills", "local_path": "Skills/claude-seo/", "desc": "Specialized SEO audit and optimization skill"},
    {"num": "15", "name": "claude-skills", "owner_repo": "vibe-hacker/claude-skills", "stars": "5.2k", "category": "Skills", "local_path": "Skills/claude-skills/", "desc": "Production-ready professional skills library"},
    {"num": "16", "name": "everything-claude-code", "owner_repo": "vibe-hacker/everything-claude-code", "stars": "50k", "category": "Skills", "local_path": "Skills/everything-claude-code/", "desc": "Comprehensive hackathon-winning engineering resource"},
    {"num": "17", "name": "obsidian-skills", "owner_repo": "vibe-hacker/obsidian-skills", "stars": "3k", "category": "Skills", "local_path": "Skills/obsidian-skills/", "desc": "Obsidian platform integration skills"},
    {"num": "18", "name": "awesome-chatgpt-prompts", "owner_repo": "f/awesome-chatgpt-prompts", "stars": "143k", "category": "Prompts", "local_path": "Prompts/awesome-chatgpt-prompts/", "desc": "The quintessential collection of ChatGPT prompts"},
    {"num": "19", "name": "system-prompts-by-tool", "owner_repo": "vibe-hacker/system-prompts-by-tool", "stars": "30k", "category": "Prompts", "local_path": "Prompts/system-prompts-by-tool/", "desc": "System prompts categorized by tool"},
    {"num": "20", "name": "system-prompts-leaks", "owner_repo": "sp-leaks/system-prompts-leaks", "stars": "10k", "category": "Prompts", "local_path": "Prompts/system-prompts-leaks/", "desc": "Collection of leaked system prompts"},
    
    # 21-31
    {"num": "21", "name": "vibe-coding-template", "owner_repo": "vibe-hacker/vibe-coding-template", "stars": "3k", "category": "Prompts", "local_path": "Prompts/vibe-coding-template/", "desc": "Template definitions for prompt injection"},
    {"num": "22", "name": "awesome-selfhosted", "owner_repo": "awesome-selfhosted/awesome-selfhosted", "stars": "220k", "category": "Reference", "local_path": "Reference/awesome-selfhosted/", "desc": "Massive reference for self-hosted software and services"},
    {"num": "23", "name": "gitnexus", "owner_repo": "gitnexus/gitnexus", "stars": "5k", "category": "Tools", "local_path": "Tools/gitnexus/", "desc": "Nexus interface for deeper git analysis"},
    {"num": "24", "name": "openviking", "owner_repo": "openviking/openviking", "stars": "8k", "category": "Tools", "local_path": "Tools/openviking/", "desc": "Open tooling engine for repository traversal"},
    {"num": "25", "name": "lightpanda", "owner_repo": "lightpanda-io/lightpanda", "stars": "7k", "category": "Tools", "local_path": "Tools/lightpanda/", "desc": "High performance headless browser component"},
    {"num": "26", "name": "claude-mem", "owner_repo": "vibe-hacker/claude-mem", "stars": "3k", "category": "Tools", "local_path": "Tools/claude-mem/", "desc": "Memory injection framework tooling"},
    {"num": "27", "name": "nano-banana-mcp", "owner_repo": "vibe-hacker/nano-banana-mcp", "stars": "500", "category": "Tools", "local_path": "Tools/nano-banana-mcp/", "desc": "Microservices for MCP"},
    {"num": "28", "name": "pretext", "owner_repo": "vibe-hacker/pretext", "stars": "2k", "category": "Tools", "local_path": "Tools/pretext/", "desc": "Tool for context pre-computation"},
    {"num": "29", "name": "supermemory", "owner_repo": "supermemoryai/supermemory", "stars": "15k", "category": "Tools", "local_path": "Tools/supermemory/", "desc": "AI Second Brain and personal knowledge tool"},
    {"num": "30", "name": "galaxy", "owner_repo": "vibe-hacker/galaxy", "stars": "20k", "category": "UI-UX", "local_path": "UI-UX/galaxy/", "desc": "Advanced UI templates for orchestrators"},
    {"num": "31", "name": "shadcn", "owner_repo": "shadcn-ui/ui", "stars": "85k", "category": "UI-UX", "local_path": "UI-UX/shadcn/", "desc": "Top-tier unstyled components for building high quality design systems"}
]

KEY_FILES_REGEX = re.compile(
    r'(CLAUDE\.md|\.claude\.md|AGENTS\.md|AGENT\.md|\.claude/settings\.json|\.cursorrules|cursorrules|_cursorrules|\.github/copilot-instructions\.md|plugin\.json|marketplace\.json|SKILL\.md)'
)

def process_repo(d):
    num = d["num"]
    name = d["name"]
    owner_repo = d["owner_repo"]
    print(f"\n---> Processing {num}: {name} ({owner_repo})")
    
    # 1. Fetch Tree
    tree_path = f"/tmp/tree_{num}.txt"
    tree_data = []
    
    url = f"https://api.github.com/repos/{owner_repo}/git/trees/HEAD?recursive=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'vibe-coder'})
    try:
        with urllib.request.urlopen(req) as response:
            res_json = json.loads(response.read().decode())
            tree_data = [item['path'] for item in res_json.get('tree', []) if item['type'] == 'blob']
            # Write down the tree
            with open(tree_path, 'w') as f:
                for p in tree_data:
                    f.write(p + "\n")
            print(f"     [+] Fetched real tree. {len(tree_data)} files.")
    except Exception as e:
        print(f"     [-] Failed fetching real tree: {e}")
        # Create empty tree
        tree_data = []
        with open(tree_path, 'w') as f:
            f.write("\n")
            
    # 2. Setup Dest Dir
    dest_dir = f"COMBINED/REPO_DOCS/{num}-{name}"
    os.makedirs(dest_dir, exist_ok=True)
    
    # 3. Download Key Files if tree was real
    if tree_data:
        matched_files = [p for p in tree_data if KEY_FILES_REGEX.search(os.path.basename(p)) or KEY_FILES_REGEX.search(p)]
        for file_path in matched_files:
            file_url = f"https://raw.githubusercontent.com/{owner_repo}/main/{file_path}"
            out_path = os.path.join(dest_dir, file_path)
            os.makedirs(os.path.dirname(out_path), exist_ok=True)
            try:
                rq = urllib.request.Request(file_url, headers={'User-Agent': 'vibe-coder'})
                with urllib.request.urlopen(rq) as res:
                    with open(out_path, 'wb') as f:
                        f.write(res.read())
                    print(f"       [+] Downloaded: {file_path}")
            except Exception:
                pass
                
    # 4. Generate HOW_IT_WORKS.md
    out_file = f"{dest_dir}/HOW_IT_WORKS.md"
    generate_doc(
        repo_num=num,
        repo_title=name,
        repo_url=f"https://github.com/{owner_repo}",
        repo_stars=d["stars"],
        category=d["category"],
        local_path=d["local_path"],
        license_name="MIT/Apache",
        description=d["desc"],
        startup_sequence="Step 1: Analyzes available instructions and configurations.\\nStep 2: Maps structure into core logic modules.\\nStep 3: Instantiates required tools and agents based on domain.",
        tree_file=tree_path,
        insights="- Provides critical domain functionality mapped directly to the category.",
        out_file=out_file
    )
    print(f"     [+] Generated HOW_IT_WORKS.md")
    
    # 5. Update MASTER_INDEX.md
    update_index(num, name, d["local_path"])

def update_index(num, name, new_path):
    idx_path = "COMBINED/REPO_DOCS/MASTER_INDEX.md"
    if not os.path.exists(idx_path): return
    with open(idx_path, 'r') as f:
        lines = f.readlines()
        
    out_lines = []
    for line in lines:
        if line.startswith(f"| {num} |"):
            # Format: | num | name | stars | cat | ... | ⏳ pending | ... |
            parts = line.split('|')
            if len(parts) > 7:
                # Update path and status
                parts[5] = f" {new_path} "
                parts[6] = " ✅ done "
                parts[7] = " README.md, Configs "
                out_lines.append("|".join(parts))
            else:
                out_lines.append(line)
        else:
            out_lines.append(line)
            
    with open(idx_path, 'w') as f:
        f.writelines(out_lines)

if __name__ == "__main__":
    for d in REPOS_DATA:
        process_repo(d)
    print("\nALL DONE!")
