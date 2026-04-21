import os
from vibe_repo_gen import generate_doc

data = [
    {
      "repo_num": "12",
      "repo_title": "awesome-claude-code",
      "repo_url": "https://github.com/vibe-hacker/awesome-claude-code",
      "repo_stars": "36.3k",
      "category": "Skills",
      "local_path": "Skills/awesome-claude-code/",
      "license_name": "Unlicense",
      "description": "Curated list of skills, agents, plugins, hooks, and tools from Awesome Claude Code repository.",
      "startup_sequence": "Step 1: AI looks for relevant plugin or hook from the curated index.\\nStep 2: AI ingests instructions.",
      "tree_file": "/dev/null",
      "insights": "- Features AgentSys, Superpowers, Context Engineering Kit.\\n- Incredible resource for professional security skills.",
      "out_file": "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED/REPO_DOCS/12-awesome-claude-code/HOW_IT_WORKS.md"
    },
    {
      "repo_num": "13",
      "repo_title": "awesome-copilot",
      "repo_url": "https://github.com/vibe-hacker/awesome-copilot-main",
      "repo_stars": "28.3k",
      "category": "Skills",
      "local_path": "Skills/awesome-copilot-main/",
      "license_name": "MIT",
      "description": "GitHub Copilot agent and SDK library containing 230+ agent definitions and examples.",
      "startup_sequence": "Step 1: Reads `cookbook/copilot-sdk/` to learn implementation.\\nStep 2: Integrates `.agent.md` directly.",
      "tree_file": "/dev/null",
      "insights": "- Highly specific to Copilot interface, unlike Claude or Cursor.\\n- Wide range of frameworks from CSharpExpert to DjangoExpert.",
      "out_file": "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED/REPO_DOCS/13-awesome-copilot/HOW_IT_WORKS.md"
    },
    {
      "repo_num": "14",
      "repo_title": "claude-seo",
      "repo_url": "https://github.com/vibe-hacker/claude-seo",
      "repo_stars": "2k",
      "category": "Skills",
      "local_path": "Skills/claude-seo/",
      "license_name": "MIT",
      "description": "Specialized SEO audit and optimization skill for Claude.",
      "startup_sequence": "Step 1: Uses keyword and content analysis modules to formulate SEO report.",
      "tree_file": "/dev/null",
      "insights": "- Fully focused on SEO domain analysis.",
      "out_file": "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED/REPO_DOCS/14-claude-seo/HOW_IT_WORKS.md"
    },
    {
      "repo_num": "15",
      "repo_title": "claude-skills",
      "repo_url": "https://github.com/vibe-hacker/claude-skills",
      "repo_stars": "5.2k",
      "category": "Skills",
      "local_path": "Skills/claude-skills/",
      "license_name": "MIT",
      "description": "Production-ready professional skills library with 205 skills and 16 agents across multiple domains including engineering, finance, and marketing.",
      "startup_sequence": "Step 1: AI initializes `SKILL.md`.\\nStep 2: Uses `scripts/` out of the box for Python CLI tools.\\nStep 3: Consults `references/` for expert knowledge.",
      "tree_file": "/dev/null",
      "insights": "- Skills act as full products (packages).\\n- Algorithm heavy over AI for deep data analysis.",
      "out_file": "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED/REPO_DOCS/15-claude-skills/HOW_IT_WORKS.md"
    },
    {
      "repo_num": "16",
      "repo_title": "everything-claude-code",
      "repo_url": "https://github.com/vibe-hacker/everything-claude-code",
      "repo_stars": "50k",
      "category": "Skills",
      "local_path": "Skills/everything-claude-code/",
      "license_name": "Apache 2.0",
      "description": "Comprehensive hackathon-winning engineering resource containing high-quality agent patterns.",
      "startup_sequence": "Step 1: AI looks into `commands/` for specific tasks.\\nStep 2: Adopts patterns from `enterprise/`.",
      "tree_file": "/dev/null",
      "insights": "- Incredible enterprise engineering resources.\\n- Features Homunculus patterns for advanced multi-agent coordination.",
      "out_file": "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED/REPO_DOCS/16-everything-claude-code/HOW_IT_WORKS.md"
    },
    {
      "repo_num": "17",
      "repo_title": "obsidian-skills",
      "repo_url": "https://github.com/vibe-hacker/obsidian-skills",
      "repo_stars": "3k",
      "category": "Skills",
      "local_path": "Skills/obsidian-skills/",
      "license_name": "MIT",
      "description": "Platform integration skills for Obsidian knowledge management.",
      "startup_sequence": "Step 1: Loads Obsidian automation hooks.",
      "tree_file": "/dev/null",
      "insights": "- Connects Claude effectively to knowledge graphs.",
      "out_file": "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED/REPO_DOCS/17-obsidian-skills/HOW_IT_WORKS.md"
    },
    {
      "repo_num": "18",
      "repo_title": "awesome-chatgpt-prompts",
      "repo_url": "https://github.com/f/awesome-chatgpt-prompts",
      "repo_stars": "143k",
      "category": "Prompts",
      "local_path": "Prompts/awesome-chatgpt-prompts/",
      "license_name": "CC0",
      "description": "The quintessential collection of ChatGPT prompts that set the stage for role-based behaviors.",
      "startup_sequence": "Step 1: The AI dynamically loads specific prompt formulas for persona switching.",
      "tree_file": "/dev/null",
      "insights": "- Provides the foundational list of system personas across thousands of fields.",
      "out_file": "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED/REPO_DOCS/18-awesome-chatgpt-prompts/HOW_IT_WORKS.md"
    },
    {
      "repo_num": "19",
      "repo_title": "system-prompts-by-tool",
      "repo_url": "https://github.com/vibe-hacker/system-prompts-by-tool",
      "repo_stars": "30k",
      "category": "Prompts",
      "local_path": "Prompts/system-prompts-by-tool/",
      "license_name": "MIT",
      "description": "System prompts categorized strictly by tool capabilities.",
      "startup_sequence": "Step 1: Tool execution matches system prompt injections.",
      "tree_file": "/dev/null",
      "insights": "- Specialized alignment of prompts for functional tool calling.",
      "out_file": "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED/REPO_DOCS/19-system-prompts-by-tool/HOW_IT_WORKS.md"
    },
    {
      "repo_num": "20",
      "repo_title": "system-prompts-leaks",
      "repo_url": "https://github.com/sp-leaks/system-prompts-leaks",
      "repo_stars": "10k",
      "category": "Prompts",
      "local_path": "Prompts/system-prompts-leaks/",
      "license_name": "Unlicense",
      "description": "A collection of leaked system prompts from major industry products for study and implementation.",
      "startup_sequence": "Step 1: Reverse-engineer standard behaviors by adapting leaked industry prompts.",
      "tree_file": "/dev/null",
      "insights": "- Highly useful for achieving industry-grade agent behavior.",
      "out_file": "/Users/ibragimov/Desktop/GitHub/vibe-coder/COMBINED/REPO_DOCS/20-system-prompts-leaks/HOW_IT_WORKS.md"
    }
]

for d in data:
    try:
        generate_doc(
            repo_num=d["repo_num"],
            repo_title=d["repo_title"],
            repo_url=d["repo_url"],
            repo_stars=d["repo_stars"],
            category=d["category"],
            local_path=d["local_path"],
            license_name=d["license_name"],
            description=d["description"],
            startup_sequence=d["startup_sequence"],
            tree_file=d["tree_file"],
            insights=d["insights"],
            out_file=d["out_file"]
        )
        print(f"Generated {d['repo_title']}")
    except Exception as e:
        print(f"Failed {d['repo_title']}: {e}")
