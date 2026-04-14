import os
from pathlib import Path

def unhide_everything(root_dir):
    for root, dirs, files in os.walk(root_dir, topdown=False):
        # Rename directories
        for name in dirs:
            if name.startswith('.') and name != '.git':
                old_path = Path(root) / name
                new_name = name[1:] # remove dot
                new_path = Path(root) / new_name
                
                # If new_path exists, merge or rename
                if new_path.exists():
                    # For simplicity, we'll append a suffix if there's a collision
                    new_path = Path(root) / f"visible_{new_name}"
                
                print(f"Renaming dir: {old_path} -> {new_path}")
                os.rename(old_path, new_path)
        
        # Rename files
        for name in files:
            if name.startswith('.') and name not in ['.DS_Store', '.git']:
                old_path = Path(root) / name
                new_name = name[1:] # remove dot
                new_path = Path(root) / new_name
                
                if new_path.exists():
                    new_path = Path(root) / f"visible_{new_name}"
                
                print(f"Renaming file: {old_path} -> {new_path}")
                os.rename(old_path, new_path)

if __name__ == "__main__":
    # We apply this specifically to COMBINED as it contains the integrated repos
    unhide_everything("/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED")
    # Also handle new_repos just in case there's something there I missed
    unhide_everything("/Users/ibragimov/Desktop/GitHub/vibe-coder/new_repos")
