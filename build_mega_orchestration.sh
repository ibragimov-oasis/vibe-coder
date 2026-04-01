#!/bin/bash
set -e
ROOT="/Users/ibragimov/Desktop/GitHub/vibe-coder"
OUT="$ROOT/COMBINED/MEGA_ORCHESTRATION.md"

cat > "$OUT" << 'HEADER'
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# ⚡ MEGA ORCHESTRATION — Complete Multi-Agent System
# Every workflow, every pipeline, every coordination config
# From ALL repositories — nothing omitted
# Usage: Reference for multi-agent orchestration, CI/CD, and workflows
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HEADER

echo "Building MEGA_ORCHESTRATION.md..."

add_files() {
    local dir_path="$1"
    local label="$2"
    if [ ! -d "$dir_path" ]; then
        echo "  [SKIP] $dir_path not found"
        return
    fi
    find "$dir_path" -type f \( -name "*.md" -o -name "*.txt" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.toml" -o -name "*.ts" -o -name "*.js" -o -name "*.py" -o -name "*.sh" -o -name "*.rs" \) \
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
    local count=$(find "$dir_path" -type f \( -name "*.md" -o -name "*.txt" -o -name "*.json" -o -name "*.yaml" -o -name "*.yml" -o -name "*.toml" -o -name "*.ts" -o -name "*.js" -o -name "*.py" -o -name "*.sh" -o -name "*.rs" \) ! -name "package-lock.json" ! -name "pnpm-lock.yaml" ! -name "bun.lock*" ! -name "Cargo.lock" | wc -l | tr -d ' ')
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

# PART 1: Ruflo Core (29k stars)
add_section 1 "RUFLO CORE (29k stars)" "Orchestration/ruflo/ruflo/"
add_files "$ROOT/Orchestration/ruflo/ruflo" "Ruflo core"

# PART 2: Ruflo v2
add_section 2 "RUFLO V2" "Orchestration/ruflo/v2/"
add_files "$ROOT/Orchestration/ruflo/v2" "Ruflo v2"

# PART 3: Ruflo v3
add_section 3 "RUFLO V3" "Orchestration/ruflo/v3/"
add_files "$ROOT/Orchestration/ruflo/v3" "Ruflo v3"

# PART 4: Ruflo plugin system
add_section 4 "RUFLO PLUGIN SYSTEM" "Orchestration/ruflo/plugin/"
add_files "$ROOT/Orchestration/ruflo/plugin" "Ruflo plugin"

# PART 5: Ruflo scripts
add_section 5 "RUFLO SCRIPTS" "Orchestration/ruflo/scripts/"
add_files "$ROOT/Orchestration/ruflo/scripts" "Ruflo scripts"

# PART 6: Ruflo agents
add_section 6 "RUFLO AGENTS" "Orchestration/ruflo/agents/"
add_files "$ROOT/Orchestration/ruflo/agents" "Ruflo agents"

# PART 7: Ruflo docs
add_section 7 "RUFLO DOCS" "Orchestration/ruflo/docs/"
if [ -d "$ROOT/Orchestration/ruflo/docs" ]; then
    add_files "$ROOT/Orchestration/ruflo/docs" "Ruflo docs"
fi

# PART 8: Ruflo claude-plugin hooks and docs
add_section 8 "RUFLO CLAUDE-PLUGIN HOOKS & DOCS" "Orchestration/ruflo/claude-plugin/"
add_files "$ROOT/Orchestration/ruflo/claude-plugin" "Ruflo claude-plugin"

# PART 9: Ruflo githooks
add_section 9 "RUFLO GITHOOKS" "Orchestration/ruflo/githooks/"
add_files "$ROOT/Orchestration/ruflo/githooks" "Ruflo githooks"

# PART 10: Ruflo tests
add_section 10 "RUFLO TESTS" "Orchestration/ruflo/tests/"
add_files "$ROOT/Orchestration/ruflo/tests" "Ruflo tests"

# PART 11: Ruflo root configs
add_section 11 "RUFLO ROOT CONFIGS" "Orchestration/ruflo/"
for f in "$ROOT/Orchestration/ruflo/"*.md "$ROOT/Orchestration/ruflo/"*.json "$ROOT/Orchestration/ruflo/"*.toml "$ROOT/Orchestration/ruflo/"*.yml; do
    if [ -f "$f" ]; then
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    fi
done
echo "  ✓ Ruflo root configs done"

# PART 12: Superpowers plugin configs
add_section 12 "SUPERPOWERS ORCHESTRATION CONFIGS" "Orchestration/superpowers/"
add_files "$ROOT/Orchestration/superpowers/claude-plugin" "Superpowers claude-plugin"
add_files "$ROOT/Orchestration/superpowers/cursor-plugin" "Superpowers cursor-plugin"
add_files "$ROOT/Orchestration/superpowers/codex" "Superpowers codex"
add_files "$ROOT/Orchestration/superpowers/opencode" "Superpowers opencode"
add_files "$ROOT/Orchestration/superpowers/docs" "Superpowers docs"

# PART 13: Superpowers root configs
add_section 13 "SUPERPOWERS ROOT CONFIGS" "Orchestration/superpowers/"
for f in "$ROOT/Orchestration/superpowers/"*.md "$ROOT/Orchestration/superpowers/"*.json; do
    if [ -f "$f" ]; then
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    fi
done
echo "  ✓ Superpowers root configs done"

# PART 14: Superpowers tests
add_section 14 "SUPERPOWERS TESTS" "Orchestration/superpowers/tests/"
add_files "$ROOT/Orchestration/superpowers/tests" "Superpowers tests"

# PART 15: Get-Shit-Done orchestration
add_section 15 "GET-SHIT-DONE ORCHESTRATION" "Orchestration/get-shit-done/"
add_files "$ROOT/Orchestration/get-shit-done/bin" "GSD bin"
add_files "$ROOT/Orchestration/get-shit-done/scripts" "GSD scripts"
add_files "$ROOT/Orchestration/get-shit-done/sdk" "GSD sdk"
add_files "$ROOT/Orchestration/get-shit-done/tests" "GSD tests"

# PART 16: GSD root configs
add_section 16 "GET-SHIT-DONE ROOT CONFIGS" "Orchestration/get-shit-done/"
for f in "$ROOT/Orchestration/get-shit-done/"*.md "$ROOT/Orchestration/get-shit-done/"*.json "$ROOT/Orchestration/get-shit-done/"*.sh; do
    if [ -f "$f" ]; then
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    fi
done
echo "  ✓ GSD root configs done"

# PART 17: Oh-my-claudecode orchestration
add_section 17 "OH-MY-CLAUDECODE ORCHESTRATION" "Orchestration/oh-my-claudecode/"
add_files "$ROOT/Orchestration/oh-my-claudecode/src" "OMC src"
add_files "$ROOT/Orchestration/oh-my-claudecode/dist" "OMC dist"
add_files "$ROOT/Orchestration/oh-my-claudecode/scripts" "OMC scripts"
add_files "$ROOT/Orchestration/oh-my-claudecode/docs" "OMC docs"
add_files "$ROOT/Orchestration/oh-my-claudecode/tests" "OMC tests"
add_files "$ROOT/Orchestration/oh-my-claudecode/hooks" "OMC hooks"
add_files "$ROOT/Orchestration/oh-my-claudecode/shellmark" "OMC shellmark"
add_files "$ROOT/Orchestration/oh-my-claudecode/benchmark" "OMC benchmark"
add_files "$ROOT/Orchestration/oh-my-claudecode/benchmarks" "OMC benchmarks"

# PART 18: OMC root configs
add_section 18 "OH-MY-CLAUDECODE ROOT CONFIGS" "Orchestration/oh-my-claudecode/"
for f in "$ROOT/Orchestration/oh-my-claudecode/"*.md "$ROOT/Orchestration/oh-my-claudecode/"*.json "$ROOT/Orchestration/oh-my-claudecode/"*.js "$ROOT/Orchestration/oh-my-claudecode/"*.toml "$ROOT/Orchestration/oh-my-claudecode/"*.txt; do
    if [ -f "$f" ]; then
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    fi
done
echo "  ✓ OMC root configs done"

# PART 19: 1code orchestration
add_section 19 "1CODE ORCHESTRATION" "Orchestration/1code/"
add_files "$ROOT/Orchestration/1code/src" "1code src"
add_files "$ROOT/Orchestration/1code/scripts" "1code scripts"
add_files "$ROOT/Orchestration/1code/drizzle" "1code drizzle"
add_files "$ROOT/Orchestration/1code/openspec" "1code openspec"
for f in "$ROOT/Orchestration/1code/"*.md "$ROOT/Orchestration/1code/"*.json "$ROOT/Orchestration/1code/"*.js "$ROOT/Orchestration/1code/"*.yml; do
    if [ -f "$f" ]; then
        # skip lock files
        case "$f" in *.lock|*lock.json|*lock.yaml) continue;; esac
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    fi
done
echo "  ✓ 1code root done"

# PART 20: Vibe-kanban orchestration  
add_section 20 "VIBE-KANBAN ORCHESTRATION" "Orchestration/vibe-kanban/"
add_files "$ROOT/Orchestration/vibe-kanban/crates" "VK crates"
add_files "$ROOT/Orchestration/vibe-kanban/shared" "VK shared"
add_files "$ROOT/Orchestration/vibe-kanban/packages" "VK packages"
add_files "$ROOT/Orchestration/vibe-kanban/npx-cli" "VK npx-cli"
add_files "$ROOT/Orchestration/vibe-kanban/scripts" "VK scripts"
add_files "$ROOT/Orchestration/vibe-kanban/docs" "VK docs"
for f in "$ROOT/Orchestration/vibe-kanban/"*.md "$ROOT/Orchestration/vibe-kanban/"*.json "$ROOT/Orchestration/vibe-kanban/"*.toml "$ROOT/Orchestration/vibe-kanban/"*.sh "$ROOT/Orchestration/vibe-kanban/"*.yml; do
    if [ -f "$f" ]; then
        case "$f" in *.lock|*lock.json|*lock.yaml) continue;; esac
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    fi
done
echo "  ✓ Vibe-kanban root done"

# PART 21: Deer-flow orchestration
add_section 21 "DEER-FLOW ORCHESTRATION (ByteDance)" "Orchestration/deer-flow/"
add_files "$ROOT/Orchestration/deer-flow/backend" "DF backend"
add_files "$ROOT/Orchestration/deer-flow/frontend" "DF frontend"
add_files "$ROOT/Orchestration/deer-flow/docker" "DF docker"
add_files "$ROOT/Orchestration/deer-flow/scripts" "DF scripts"
add_files "$ROOT/Orchestration/deer-flow/docs" "DF docs"
for f in "$ROOT/Orchestration/deer-flow/"*.md "$ROOT/Orchestration/deer-flow/"*.json "$ROOT/Orchestration/deer-flow/"*.yaml "$ROOT/Orchestration/deer-flow/"*.yml; do
    if [ -f "$f" ]; then
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    fi
done
echo "  ✓ Deer-flow root done"

# PART 22: Hermes Agent orchestration
add_section 22 "HERMES AGENT ORCHESTRATION" "Agents/hermes-agent/"
add_files "$ROOT/Agents/hermes-agent/_plans" "Hermes plans"
add_files "$ROOT/Agents/hermes-agent/cron" "Hermes cron"
add_files "$ROOT/Agents/hermes-agent/gateway" "Hermes gateway"
add_files "$ROOT/Agents/hermes-agent/docker" "Hermes docker"
add_files "$ROOT/Agents/hermes-agent/environments" "Hermes envs"
add_files "$ROOT/Agents/hermes-agent/hermes_cli" "Hermes CLI"
add_files "$ROOT/Agents/hermes-agent/honcho_integration" "Hermes honcho"
add_files "$ROOT/Agents/hermes-agent/acp_adapter" "Hermes ACP adapter"
add_files "$ROOT/Agents/hermes-agent/acp_registry" "Hermes ACP registry"

# PART 23: Background Agents
add_section 23 "BACKGROUND AGENTS ORCHESTRATION" "Agents/background-agents/"
add_files "$ROOT/Agents/background-agents" "Background agents"

# PART 24: Shannon (AI Pentester)
add_section 24 "SHANNON ORCHESTRATION" "Agents/shannon/"
add_files "$ROOT/Agents/shannon/apps" "Shannon apps"
add_files "$ROOT/Agents/shannon/repos" "Shannon repos"
add_files "$ROOT/Agents/shannon/workspaces" "Shannon workspaces"
add_files "$ROOT/Agents/shannon/assets" "Shannon assets"

# PART 25: Root orchestration files
add_section 25 "ROOT ORCHESTRATION FILES" "/"
for f in "$ROOT/ORCHESTRATION.md" "$ROOT/MEMORY_SETUP.md" "$ROOT/MERGE_PLAN.md" "$ROOT/HOW_TO_COMBINE.md"; do
    if [ -f "$f" ]; then
        rel_path="${f#$ROOT/}"
        echo "" >> "$OUT"
        echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
        echo "" >> "$OUT"
        cat "$f" >> "$OUT"
        echo "" >> "$OUT"
        echo "---" >> "$OUT"
    fi
done
echo "  ✓ Root orchestration files done"

# PART 26: All GitHub workflow files
add_section 26 "GITHUB WORKFLOWS (CI/CD)" "various"
find "$ROOT" -path "*github*" -name "*.yml" -o -path "*github*" -name "*.yaml" | grep -v "/.git/" | sort | while read f; do
    rel_path="${f#$ROOT/}"
    echo "" >> "$OUT"
    echo "## ═══ SOURCE: $rel_path ═══" >> "$OUT"
    echo "" >> "$OUT"
    cat "$f" >> "$OUT"
    echo "" >> "$OUT"
    echo "---" >> "$OUT"
done
echo "  ✓ GitHub workflows done"

# Count total
TOTAL=$(grep -c "^## ═══ SOURCE:" "$OUT" 2>/dev/null || echo 0)
SIZE=$(du -h "$OUT" | cut -f1)

echo ""
echo "═══════════════════════════════════════"
echo "✅ MEGA_ORCHESTRATION.md BUILD COMPLETE"
echo "   Total source sections: $TOTAL"
echo "   File size: $SIZE"
echo "═══════════════════════════════════════"
