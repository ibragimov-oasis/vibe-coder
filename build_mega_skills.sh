#!/bin/bash
set -e
ROOT="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$ROOT/COMBINED/MEGA_SKILLS.md"

# Header
cat > "$OUT" << 'HEADER'
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA SKILLS — Complete Arsenal
# Skills from ALL repositories — 100% combined
# Usage: Copy relevant sections into .claude/skills/ in your project
# Every skill is complete — nothing cut, nothing summarized
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HEADER

echo "Building MEGA_SKILLS.md..."

add_files_from_dir() {
    local dir_path="$1"
    local label="$2"
    if [ ! -d "$dir_path" ]; then
        echo "  [SKIP] $dir_path not found"
        return
    fi
    find "$dir_path" -type f \( -name "*.md" -o -name "*.txt" -o -name "*.yaml" -o -name "*.yml" -o -name "*.json" -o -name "*.toml" -o -name "*.sh" -o -name "*.py" -o -name "*.ts" -o -name "*.js" \) \
        ! -name "*.lock" ! -name "package-lock.json" ! -name "pnpm-lock.yaml" ! -name "bun.lock" ! -name ".DS_Store" \
        | sort | while read f; do
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    done
    local count=$(find "$dir_path" -type f \( -name "*.md" -o -name "*.txt" -o -name "*.yaml" -o -name "*.yml" -o -name "*.json" -o -name "*.toml" -o -name "*.sh" -o -name "*.py" -o -name "*.ts" -o -name "*.js" \) ! -name "*.lock" ! -name "package-lock.json" ! -name "pnpm-lock.yaml" ! -name "bun.lock" | wc -l | tr -d ' ')
    echo "  ✓ $label: $count files"
}

add_section() {
    local part_num="$1"
    local title="$2"
    local source="$3"
    echo "" >> "$OUT"
    echo "# ════════════════════════════════════════════" >> "$OUT"
    echo "# PART $part_num: $title" >> "$OUT"
    echo "# Source: $source" >> "$OUT"
    echo "# ════════════════════════════════════════════" >> "$OUT"
    echo "" >> "$OUT"
}

# PART 1: Superpowers Skills
add_section 1 "SUPERPOWERS SKILLS" "Orchestration/superpowers/skills/"
add_files_from_dir "$ROOT/Orchestration/superpowers/skills" "Superpowers skills"

# PART 2: Deer-flow Skills
add_section 2 "DEER-FLOW SKILLS (ByteDance)" "Orchestration/deer-flow/skills/"
add_files_from_dir "$ROOT/Orchestration/deer-flow/skills" "Deer-flow skills"

# PART 3: Oh-my-claudecode Skills
add_section 3 "OH-MY-CLAUDECODE SKILLS" "Orchestration/oh-my-claudecode/skills/"
add_files_from_dir "$ROOT/Orchestration/oh-my-claudecode/skills" "Oh-my-claudecode skills"

# PART 4: Oh-my-claudecode extras (missions, templates, etc)
add_section 4 "OH-MY-CLAUDECODE MISSIONS & TEMPLATES" "Orchestration/oh-my-claudecode/"
for subdir in missions templates seminar research examples; do
    add_files_from_dir "$ROOT/Orchestration/oh-my-claudecode/$subdir" "OMC/$subdir"
done

# PART 5: Ruflo Skills
add_section 5 "RUFLO SKILLS & CLAUDE CONFIGS" "Orchestration/ruflo/"
add_files_from_dir "$ROOT/Orchestration/ruflo/claude" "Ruflo claude"

# PART 6: Get-Shit-Done workflows
add_section 6 "GET-SHIT-DONE WORKFLOWS" "Orchestration/get-shit-done/get-shit-done/"
add_files_from_dir "$ROOT/Orchestration/get-shit-done/get-shit-done" "GSD workflows"

# PART 7: Get-Shit-Done docs
add_section 7 "GET-SHIT-DONE DOCS" "Orchestration/get-shit-done/docs/"
add_files_from_dir "$ROOT/Orchestration/get-shit-done/docs" "GSD docs"

# PART 8: 1code Skills
add_section 8 "1CODE SKILLS" "Orchestration/1code/"
add_files_from_dir "$ROOT/Orchestration/1code" "1code"

# PART 9: Vibe-kanban
add_section 9 "VIBE-KANBAN" "Orchestration/vibe-kanban/"
add_files_from_dir "$ROOT/Orchestration/vibe-kanban" "Vibe-kanban"

# PART 10: Antigravity Awesome Skills
add_section 10 "ANTIGRAVITY AWESOME SKILLS" "Skills/antigravity-awesome-skills/"
add_files_from_dir "$ROOT/Skills/antigravity-awesome-skills" "Antigravity skills"

# PART 11: Claude Skills
add_section 11 "CLAUDE-SKILLS (205 skills + 16 agents + 268 scripts)" "Skills/claude-skills/"
add_files_from_dir "$ROOT/Skills/claude-skills" "Claude-skills"

# PART 12: Everything Claude Code
add_section 12 "EVERYTHING CLAUDE CODE" "Skills/everything-claude-code/"
add_files_from_dir "$ROOT/Skills/everything-claude-code" "Everything-claude-code"

# PART 13: Awesome Copilot
add_section 13 "AWESOME COPILOT" "Skills/awesome-copilot-main/"
add_files_from_dir "$ROOT/Skills/awesome-copilot-main" "Awesome-copilot"

# PART 14: Awesome Claude Code
add_section 14 "AWESOME CLAUDE CODE" "Skills/awesome-claude-code/"
add_files_from_dir "$ROOT/Skills/awesome-claude-code" "Awesome-claude-code"

# PART 15: Claude SEO
add_section 15 "CLAUDE SEO" "Skills/claude-seo/"
add_files_from_dir "$ROOT/Skills/claude-seo" "Claude-seo"

# PART 16: Obsidian Skills
add_section 16 "OBSIDIAN SKILLS" "Skills/obsidian-skills/"
add_files_from_dir "$ROOT/Skills/obsidian-skills" "Obsidian-skills"

# PART 17: UI-UX Pro Max Skills
add_section 17 "UI-UX PRO MAX SKILLS" "UI-UX/ui-ux-pro-max-skill/"
add_files_from_dir "$ROOT/UI-UX/ui-ux-pro-max-skill" "UI-UX-pro-max"

# PART 18: Hermes Agent Skills
add_section 18 "HERMES AGENT" "Agents/hermes-agent/"
for subdir in optional-skills agent docs; do
    add_files_from_dir "$ROOT/Agents/hermes-agent/$subdir" "Hermes/$subdir"
done

# PART 19: Previously Combined Skills
add_section 19 "PREVIOUSLY COMBINED SKILLS" "_combined/skills/"
add_files_from_dir "$ROOT/_combined/skills" "Combined skills"

# PART 20: Root configs
add_section 20 "ROOT ANTIGRAVITY CONFIGS" ".antigravity/"
add_files_from_dir "$ROOT/.antigravity" "Root antigravity"

# PART 21: Nano-banana skills
add_section 21 "NANO-BANANA MCP" "Tools/nano-banana-2-mcp/"
add_files_from_dir "$ROOT/Tools/nano-banana-2-mcp" "Nano-banana"

# Count total
TOTAL=$(grep -c "^## ═══ SOURCE:" "$OUT" 2>/dev/null || echo 0)
SIZE=$(du -h "$OUT" | cut -f1)

# Update header with count
sed -i '' "s/Skills from ALL repositories/Total skill sources: $TOTAL from ALL repositories/" "$OUT"

echo ""
echo "═══════════════════════════════════════"
echo "✅ MEGA_SKILLS.md BUILD COMPLETE"
echo "   Total source sections: $TOTAL"
echo "   File size: $SIZE"
echo "═══════════════════════════════════════"

