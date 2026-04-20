import os

def generate_markdown_tree(startpath, outfile, max_depth=None):
    with open(outfile, 'w', encoding='utf-8') as f:
        f.write("# 📂 Архитектура папки `COMBINED`\n\n")
        f.write("Этот файл содержит сверхдетализированную структуру директории `COMBINED`, объединившую все репозитории Ультракара.\n\n")
        f.write("```text\n")
        
        startpath = os.path.abspath(startpath)
        base_level = startpath.replace(os.sep, '/').count('/')
        
        for root, dirs, files in os.walk(startpath):
            # Ignore standard hidden repos but keep our tool config ones if they were renamed
            dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules', '__pycache__']]
            dirs.sort()
            files.sort()
            
            level = root.replace(os.sep, '/').count('/') - base_level
            if max_depth is not None and level > max_depth:
                continue
                
            indent = '│   ' * (level - 1) + '├── ' if level > 0 else ''
            folder_name = os.path.basename(root)
            
            if level == 0:
                f.write(f"📁 COMBINED\n")
            else:
                f.write(f"{indent}📁 {folder_name}\n")
                
            sub_indent = '│   ' * level + '├── '
            for num, file in enumerate(files):
                if file in ['.DS_Store']: continue
                # To make the tree visually pleasing, use '└── ' for the last element
                if num == len(files) - 1 and not dirs:
                    last_indent = '│   ' * level + '└── '
                    f.write(f"{last_indent}📄 {file}\n")
                else:
                    f.write(f"{sub_indent}📄 {file}\n")
                    
        f.write("```\n")

if __name__ == '__main__':
    target = "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED"
    output = "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED_FULL_STRUCTURE.md"
    generate_markdown_tree(target, output, max_depth=None)
