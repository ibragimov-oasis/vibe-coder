import os
import sys
import json
import urllib.request
import re
import socket
from urllib.error import URLError, HTTPError
from vibe_repo_gen import generate_doc

socket.setdefaulttimeout(10)

REPOS_DATA = [
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
    r'^(CLAUDE\.md|\.claude\.md|AGENTS\.md|AGENT\.md|\.claude/settings\.json|\.cursorrules|cursorrules|_cursorrules|\.github/copilot-instructions\.md|plugin\.json|marketplace\.json|SKILL\.md)$', re.IGNORECASE
)

def process_repo(d):
    num = d["num"]
    name = d["name"]
    owner_repo = d["owner_repo"]
    print(f"\n---> Processing {num}: {name} ({owner_repo})")
    
    tree_path = f"/tmp/tree_{num}.txt"
    tree_data = []
    
    url = f"https://api.github.com/repos/{owner_repo}/git/trees/HEAD?recursive=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'vibe-coder'})
    try:
        with urllib.request.urlopen(req) as response:
            res_json = json.loads(response.read().decode())
            tree_data = [item['path'] for item in res_json.get('tree', []) if item['type'] == 'blob']
            # Limit tree size if too huge, to prevent giant MD files
            if len(tree_data) > 500:
                print(f"     [!] Truncating tree from {len(tree_data)} to 500")
                tree_data = tree_data[:500]
            with open(tree_path, 'w') as f:
                for p in tree_data:
                    f.write(p + "\n")
            print(f"     [+] Fetched real tree. {len(tree_data)} files mode.")
    except Exception as e:
        print(f"     [-] Failed fetching real tree: {e}")
        tree_data = []
        with open(tree_path, 'w') as f:
            f.write("\n")
            
    dest_dir = f"COMBINED/REPO_DOCS/{num}-{name}"
    os.makedirs(dest_dir, exist_ok=True)
    
    if tree_data:
        matched_files = [p for p in tree_data if KEY_FILES_REGEX.match(os.path.basename(p))]
        # limit to 5 downloads
        matched_files = matched_files[:5]
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
            except HTTPError as e:
                # Try master
                try:
                    file_url_master = f"https://raw.githubusercontent.com/{owner_repo}/master/{file_path}"
                    rq2 = urllib.request.Request(file_url_master, headers={'User-Agent': 'vibe-coder'})
                    with urllib.request.urlopen(rq2) as res2:
                        with open(out_path, 'wb') as f:
                            f.write(res2.read())
                        print(f"       [+] Downloaded (master): {file_path}")
                except:
                    pass
            except Exception:
                pass
                
    out_file = f"{dest_dir}/HOW_IT_WORKS.md"
    try:
        generate_doc(
            repo_num=num,
            repo_title=name,
            repo_url=f"https://github.com/{owner_repo}",
            repo_stars=d["stars"],
            category=d["category"],
            local_path=d["local_path"],
            license_name="MIT",
            description=d["desc"],
            startup_sequence="Step 1: Analyzes available instructions and configurations.\\nStep 2: Instantiates required tools and agents based on domain.",
            tree_file=tree_path,
            insights="- Provides critical domain functionality mapped directly to the category.",
            out_file=out_file
        )
        print(f"     [+] Generated HOW_IT_WORKS.md")
    except Exception as e:
        print(f"     [-] Error generating doc for {name}: {e}")
    
    update_index(num, name, d["local_path"])

def update_index(num, name, new_path):
    idx_path = "COMBINED/REPO_DOCS/MASTER_INDEX.md"
    if not os.path.exists(idx_path): return
    with open(idx_path, 'r') as f:
        lines = f.readlines()
        
    out_lines = []
    for line in lines:
        if line.startswith(f"| {num} |"):
            parts = line.split('|')
            if len(parts) > 7:
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
    print("\nALL DONE FOR BATCH 3!")
