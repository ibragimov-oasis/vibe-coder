import os
import sys
import json
import urllib.request
import re

REPOS = [
    ("01-background-agents", "ColeMurray/background-agents"),
    ("02-hermes-agent", "NousResearch/hermes-agent"),
    ("03-shannon", "KeygraphHQ/shannon"),
    ("04-1code", "21st-dev/1code"),
    ("05-deer-flow", "bytedance/deer-flow")
]

KEY_FILES_REGEX = re.compile(
    r'(CLAUDE\.md|\.claude\.md|AGENTS\.md|AGENT\.md|\.claude/settings\.json|claude/settings\.json|\.cursorrules|cursorrules|_cursorrules|VISIBLE_cursorrules|\.github/copilot-instructions\.md|plugin\.json|marketplace\.json|SKILL\.md)'
)

def fetch_tree(repo):
    url = f"https://api.github.com/repos/{repo}/git/trees/HEAD?recursive=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'vibe-coder'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return [item['path'] for item in data.get('tree', []) if item['type'] == 'blob']
    except Exception as e:
        print(f"Error fetching tree for {repo}: {e}")
        return []

def download_file(repo, file_path, dest_dir):
    url = f"https://raw.githubusercontent.com/{repo}/main/{file_path}"
    # try master if main fails
    
    out_path = os.path.join(dest_dir, file_path)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    
    req = urllib.request.Request(url, headers={'User-Agent': 'vibe-coder'})
    try:
        with urllib.request.urlopen(req) as response:
            with open(out_path, 'wb') as f:
                f.write(response.read())
            print(f"  [+] Downloaded: {file_path}")
            return True
    except urllib.error.HTTPError as e:
        if e.code == 404:
            # Try master
            url_master = f"https://raw.githubusercontent.com/{repo}/master/{file_path}"
            req_master = urllib.request.Request(url_master, headers={'User-Agent': 'vibe-coder'})
            try:
                with urllib.request.urlopen(req_master) as response_master:
                    with open(out_path, 'wb') as f:
                        f.write(response_master.read())
                    print(f"  [+] Downloaded (master): {file_path}")
                    return True
            except Exception:
                pass
        print(f"  [-] Failed to download: {file_path}")
        return False
    except Exception as e:
        print(f"  [-] Error downloading {file_path}: {e}")
        return False

def main():
    base_dir = "COMBINED/REPO_DOCS"
    for dir_name, repo in REPOS:
        print(f"\nProcessing {repo}...")
        dest_dir = os.path.join(base_dir, dir_name)
        if not os.path.exists(dest_dir):
            os.makedirs(dest_dir)
            
        paths = fetch_tree(repo)
        if not paths:
            print(f"  Could not retrieve tree for {repo}")
            continue
            
        matched_files = [p for p in paths if KEY_FILES_REGEX.search(os.path.basename(p)) or KEY_FILES_REGEX.search(p)]
        if not matched_files:
            print("  No key files found.")
            continue
            
        for p in matched_files:
            download_file(repo, p, dest_dir)

if __name__ == '__main__':
    main()
