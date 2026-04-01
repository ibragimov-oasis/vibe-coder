#!/bin/bash
set -e
ROOT="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$ROOT/COMBINED/MEGA_UI.md"

cat > "$OUT" << 'HEADER'
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA UI — Complete Design Arsenal
# UI reasoning rules + styles + 3000+ components + cursor rules
# From ALL repositories — nothing omitted
# Usage: Reference for any UI/UX design task
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HEADER

echo "Building MEGA_UI.md..."

add_files() {
    local dir_path="$1"
    local label="$2"
    local extensions="${3:--name *.md -o -name *.txt -o -name *.css -o -name *.html -o -name *.json -o -name *.yaml -o -name *.yml -o -name *.toml}"
    if [ ! -d "$dir_path" ]; then
        echo "  [SKIP] $dir_path not found"
        return
    fi
    find "$dir_path" -type f \( -name "*.md" -o -name "*.txt" -o -name "*.css" -o -name "*.html" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.toml" -o -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" -o -name "*.svg" \) \
        ! -name "package-lock.json" ! -name "pnpm-lock.yaml" ! -name "bun.lock" ! -name ".DS_Store" \
        | sort | while read f; do
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    done
    local count=$(find "$dir_path" -type f \( -name "*.md" -o -name "*.txt" -o -name "*.css" -o -name "*.html" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.toml" -o -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" -o -name "*.svg" \) ! -name "package-lock.json" ! -name "pnpm-lock.yaml" ! -name "bun.lock" | wc -l | tr -d ' ')
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

# PART 1: UI-UX Pro Max Skills (161 rules + 67 styles)
add_section 1 "UI-UX PRO MAX (161 rules + 67 styles)" "UI-UX/ui-ux-pro-max-skill/"
add_files "$ROOT/UI-UX/ui-ux-pro-max-skill" "UI-UX Pro Max"

# PART 2: Combined Design System
add_section 2 "COMBINED DESIGN SYSTEM" "UI-UX/"
if [ -f "$ROOT/UI-UX/COMBINED_DESIGN_SYSTEM.md" ]; then
    echo "" >> "$OUT"
    echo "## ═══ SOURCE: UI-UX/COMBINED_DESIGN_SYSTEM.md ═══" >> "$OUT"
    echo "" >> "$OUT"
    cat "$ROOT/UI-UX/COMBINED_DESIGN_SYSTEM.md" >> "$OUT"
    echo "" >> "$OUT"
    echo "---" >> "$OUT"
    echo "  ✓ Combined Design System: 1 file"
fi

# PART 3: Galaxy UI Components (3000+ elements)
add_section 3 "GALAXY UI COMPONENTS (3000+ elements)" "UI-UX/galaxy/"
add_files "$ROOT/UI-UX/galaxy" "Galaxy Components"

# PART 4: shadcn/ui Component Library
add_section 4 "SHADCN/UI COMPONENT LIBRARY" "UI-UX/ui/"
add_files "$ROOT/UI-UX/ui" "shadcn/ui"

# PART 5: Frontend Design Skills (ByteDance deer-flow)
add_section 5 "DEER-FLOW FRONTEND DESIGN" "Orchestration/deer-flow/skills/public/frontend-design/"
if [ -d "$ROOT/Orchestration/deer-flow/skills/public/frontend-design" ]; then
    add_files "$ROOT/Orchestration/deer-flow/skills/public/frontend-design" "Deer-flow frontend"
fi

# PART 6: Root Cursor Rules
add_section 6 "ROOT CURSOR RULES" ".cursorrules + .cursor/rules/"
if [ -f "$ROOT/.cursorrules" ]; then
    echo "" >> "$OUT"
    echo "## ═══ SOURCE: .cursorrules ═══" >> "$OUT"
    echo "" >> "$OUT"
    cat "$ROOT/.cursorrules" >> "$OUT"
    echo "" >> "$OUT"
    echo "---" >> "$OUT"
    echo "  ✓ Root .cursorrules: 1 file"
fi
add_files "$ROOT/.cursor" "Cursor rules"

# PART 7: Any other cursorrules files in the repo
add_section 7 "ALL OTHER CURSOR RULES FILES" "various"
find "$ROOT" -name "*cursorrules*" -o -name "*.cursorrule" | grep -v ".git/" | grep -v "COMBINED/" | sort | while read f; do
    rel_path="${f#$ROOT/}"
    # Skip if already included above
    if [ "$rel_path" != ".cursorrules" ]; then
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    fi
done
echo "  ✓ Additional cursorrules scanned"

# PART 8: COMBINED/ui folder 
add_section 8 "COMBINED UI CONFIGS" "COMBINED/ui/"
add_files "$ROOT/COMBINED/ui" "COMBINED/ui"

# PART 9: Oh-my-claudecode UI related
add_section 9 "OH-MY-CLAUDECODE UI BRIDGE" "Orchestration/oh-my-claudecode/bridge/"
if [ -d "$ROOT/Orchestration/oh-my-claudecode/bridge" ]; then
    add_files "$ROOT/Orchestration/oh-my-claudecode/bridge" "OMC bridge"
fi

# Count total
TOTAL=$(grep -c "^## ═══ SOURCE:" "$OUT" 2>/dev/null || echo 0)
SIZE=$(du -h "$OUT" | cut -f1)

echo ""
echo "═══════════════════════════════════════"
echo "✅ MEGA_UI.md BUILD COMPLETE"
echo "   Total source sections: $TOTAL"
echo "   File size: $SIZE"
echo "═══════════════════════════════════════"
