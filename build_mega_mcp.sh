#!/bin/bash
set -e
ROOT="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$ROOT/COMBINED/MEGA_MCP.md"

cat > "$OUT" << 'HEADER'
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA MCP — Complete MCP Server Arsenal
# Model Context Protocol configs from all repos
# Usage: Reference for MCP server setup and configuration
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HEADER

echo "Building MEGA_MCP.md..."

add_files() {
    local dir_path="$1"
    local label="$2"
    if [ ! -d "$dir_path" ]; then
        echo "  [SKIP] $dir_path not found"
        return
    fi
    find "$dir_path" -type f \( -name "*.md" -o -name "*.txt" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.toml" -o -name "*.ts" -o -name "*.js" -o -name "*.py" -o -name "*.rs" -o -name "*.sh" -o -name "*.cfg" -o -name "*.conf" \) \
        ! -name "package-lock.json" ! -name "pnpm-lock.yaml" ! -name "bun.lock*" ! -name ".DS_Store" ! -name "Cargo.lock" \
        | sort | while read f; do
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    done
    local count=$(find "$dir_path" -type f \( -name "*.md" -o -name "*.txt" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.toml" -o -name "*.ts" -o -name "*.js" -o -name "*.py" -o -name "*.rs" -o -name "*.sh" \) ! -name "package-lock.json" ! -name "pnpm-lock.yaml" ! -name "bun.lock*" ! -name "Cargo.lock" | wc -l | tr -d ' ')
    echo "  ✓ $label: $count files"
}

add_section() {
    echo "" >> "$OUT"
    echo "# ════════════════════════════════════════════" >> "$OUT"
    echo "# PART $1: $2" >> "$OUT"
    echo "# Source: $3" >> "$OUT"
    echo "# ════════════════════════════════════════════" >> "$OUT"
    echo "" >> "$OUT"
}

# PART 1: Nano-banana MCP (Gemini Image)
add_section 1 "NANO-BANANA-2 MCP (Gemini Image Generation)" "Tools/nano-banana-2-mcp/"
add_files "$ROOT/Tools/nano-banana-2-mcp" "Nano-banana MCP"

# PART 2: Superpowers claude-plugin
add_section 2 "SUPERPOWERS CLAUDE PLUGIN" "Orchestration/superpowers/claude-plugin/"
add_files "$ROOT/Orchestration/superpowers/claude-plugin" "Superpowers plugin"

# PART 3: Superpowers cursor-plugin
add_section 3 "SUPERPOWERS CURSOR PLUGIN" "Orchestration/superpowers/cursor-plugin/"
add_files "$ROOT/Orchestration/superpowers/cursor-plugin" "Superpowers cursor"

# PART 4: Superpowers codex/opencode
add_section 4 "SUPERPOWERS CODEX & OPENCODE" "Orchestration/superpowers/codex/ + opencode/"
add_files "$ROOT/Orchestration/superpowers/codex" "Superpowers codex"
add_files "$ROOT/Orchestration/superpowers/opencode" "Superpowers opencode"

# PART 5: Ruflo claude-plugin
add_section 5 "RUFLO CLAUDE PLUGIN" "Orchestration/ruflo/claude-plugin/"
add_files "$ROOT/Orchestration/ruflo/claude-plugin" "Ruflo plugin"

# PART 6: Ruflo plugin dir
add_section 6 "RUFLO PLUGIN SYSTEM" "Orchestration/ruflo/plugin/"
add_files "$ROOT/Orchestration/ruflo/plugin" "Ruflo plugin system"

# PART 7: Oh-my-claudecode claude-plugin
add_section 7 "OH-MY-CLAUDECODE CLAUDE PLUGIN" "Orchestration/oh-my-claudecode/claude-plugin_FOLDER_TO_COPY/"
add_files "$ROOT/Orchestration/oh-my-claudecode/claude-plugin_FOLDER_TO_COPY" "OMC plugin"

# PART 8: Oh-my-claudecode MCP config
add_section 8 "OH-MY-CLAUDECODE MCP CONFIG" "Orchestration/oh-my-claudecode/"
if [ -f "$ROOT/Orchestration/oh-my-claudecode/mcp.json" ]; then
    echo "" >> "$OUT"
    echo "## ═══ SOURCE: Orchestration/oh-my-claudecode/mcp.json ═══" >> "$OUT"
    echo "" >> "$OUT"
    cat "$ROOT/Orchestration/oh-my-claudecode/mcp.json" >> "$OUT"
    echo "" >> "$OUT"
    echo "---" >> "$OUT"
    echo "  ✓ OMC mcp.json: 1 file"
fi

# PART 9: OpenViking (ByteDance context DB)
add_section 9 "OPENVIKING (ByteDance Context DB)" "Tools/OpenViking/"
add_files "$ROOT/Tools/OpenViking" "OpenViking"

# PART 10: GitNexus (codebase knowledge graph)
add_section 10 "GITNEXUS (Codebase Knowledge Graph)" "Tools/GitNexus/"
add_files "$ROOT/Tools/GitNexus" "GitNexus"

# PART 11: LightPanda Browser
add_section 11 "LIGHTPANDA (AI Browser)" "Tools/browser/"
add_files "$ROOT/Tools/browser" "LightPanda"

# PART 12: Pretext (text layout)
add_section 12 "PRETEXT (Text Layout Library)" "Tools/pretext/"
add_files "$ROOT/Tools/pretext" "Pretext"

# PART 13: All marketplace.json files
add_section 13 "ALL MARKETPLACE.JSON FILES" "various"
find "$ROOT" -name "marketplace.json" ! -path "*/.git/*" ! -path "*/COMBINED/*" | sort | while read f; do
    rel_path="${f#$ROOT/}"
    echo "" >> "$OUT"
    echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
    echo "" >> "$OUT"
    cat "$f" >> "$OUT"
    echo "" >> "$OUT"
    echo "---" >> "$OUT"
done
echo "  ✓ All marketplace.json found"

# PART 14: All plugin.json files
add_section 14 "ALL PLUGIN.JSON FILES" "various"
find "$ROOT" -name "plugin.json" ! -path "*/.git/*" ! -path "*/COMBINED/*" ! -path "*/node_modules/*" | sort | while read f; do
    rel_path="${f#$ROOT/}"
    echo "" >> "$OUT"
    echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
    echo "" >> "$OUT"
    cat "$f" >> "$OUT"
    echo "" >> "$OUT"
    echo "---" >> "$OUT"
done
echo "  ✓ All plugin.json found"

# PART 15: Gemini extension files
add_section 15 "GEMINI EXTENSION CONFIGS" "various"
find "$ROOT" -name "gemini*" -type f ! -path "*/.git/*" ! -path "*/COMBINED/*" | sort | while read f; do
    rel_path="${f#$ROOT/}"
    echo "" >> "$OUT"
    echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
    echo "" >> "$OUT"
    cat "$f" >> "$OUT"
    echo "" >> "$OUT"
    echo "---" >> "$OUT"
done
echo "  ✓ Gemini configs found"

# PART 16: Supermemory
add_section 16 "SUPERMEMORY (#1 Memory Benchmark)" "Tools/supermemory/"
add_files "$ROOT/Tools/supermemory" "Supermemory"

# PART 17: Claude-mem
add_section 17 "CLAUDE-MEM (Persistent Memory)" "Tools/claude-mem/"
add_files "$ROOT/Tools/claude-mem" "Claude-mem"

# Count total
TOTAL=$(grep -c "^## ═══ SOURCE:" "$OUT" 2>/dev/null || echo 0)
SIZE=$(du -h "$OUT" | cut -f1)

echo ""
echo "═══════════════════════════════════════"
echo "✅ MEGA_MCP.md BUILD COMPLETE"
echo "   Total source sections: $TOTAL"
echo "   File size: $SIZE"
echo "═══════════════════════════════════════"
