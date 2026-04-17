#!/usr/bin/env bash
# ══════════════════════════════════════════════════════════════════
# ULTRACAR v3.0 — Memory Bootstrap Script
# ══════════════════════════════════════════════════════════════════
# This script MUST be run BEFORE any AI task execution.
# It builds or updates the code-review-graph SQLite database,
# which saves ~87% of tokens by allowing graph queries instead
# of reading entire files.
#
# Usage:
#   bash memory-bootstrap.sh          # Auto-detect and build/update
#   bash memory-bootstrap.sh --force  # Force full rebuild
#   bash memory-bootstrap.sh --status # Just show status
#
# Compatible with: Claude Code, Cursor, Copilot, Codex, Gemini, Antigravity
# ══════════════════════════════════════════════════════════════════

set -euo pipefail

# ─── Configuration ───────────────────────────────────────────────
GRAPH_DIR=".code-review-graph"
GRAPH_DB="${GRAPH_DIR}/graph.db"
STATUS_FILE=".memory-status.json"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Colors (if terminal supports it)
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# ─── Helper Functions ────────────────────────────────────────────

log_info() {
    echo -e "${BLUE}🧠${NC} $1"
}

log_success() {
    echo -e "${GREEN}✅${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}⚠️${NC} $1"
}

log_error() {
    echo -e "${RED}❌${NC} $1"
}

log_header() {
    echo ""
    echo -e "${CYAN}══════════════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}  $1${NC}"
    echo -e "${CYAN}══════════════════════════════════════════════════════════${NC}"
    echo ""
}

# ─── Check Python Installation ───────────────────────────────────

check_python() {
    if command -v python3 &>/dev/null; then
        PYTHON_CMD="python3"
        PY_VERSION=$($PYTHON_CMD --version 2>&1 | grep -oE '[0-9]+\.[0-9]+')
        PY_MAJOR=$(echo "$PY_VERSION" | cut -d. -f1)
        PY_MINOR=$(echo "$PY_VERSION" | cut -d. -f2)
        if [ "$PY_MAJOR" -ge 3 ] && [ "$PY_MINOR" -ge 10 ]; then
            log_success "Python $PY_VERSION found (requires 3.10+)"
            return 0
        else
            log_error "Python $PY_VERSION found but 3.10+ required"
            return 1
        fi
    elif command -v python &>/dev/null; then
        PYTHON_CMD="python"
        PY_VERSION=$($PYTHON_CMD --version 2>&1 | grep -oE '[0-9]+\.[0-9]+')
        PY_MAJOR=$(echo "$PY_VERSION" | cut -d. -f1)
        PY_MINOR=$(echo "$PY_VERSION" | cut -d. -f2)
        if [ "$PY_MAJOR" -ge 3 ] && [ "$PY_MINOR" -ge 10 ]; then
            log_success "Python $PY_VERSION found (requires 3.10+)"
            return 0
        else
            log_error "Python $PY_VERSION found but 3.10+ required"
            return 1
        fi
    else
        log_error "Python not found. Install Python 3.10+ first."
        log_info "  macOS:   brew install python@3.12"
        log_info "  Ubuntu:  sudo apt install python3.12"
        log_info "  Windows: https://www.python.org/downloads/"
        return 1
    fi
}

# ─── Check/Install code-review-graph ─────────────────────────────

check_crg() {
    if command -v code-review-graph &>/dev/null; then
        CRG_VERSION=$(code-review-graph --version 2>&1 || echo "unknown")
        log_success "code-review-graph installed ($CRG_VERSION)"
        return 0
    else
        return 1
    fi
}

install_crg() {
    log_info "Installing code-review-graph..."

    # Try uv first (faster, recommended)
    if command -v uv &>/dev/null; then
        log_info "Using uv for installation (fast)..."
        uv pip install code-review-graph 2>/dev/null && return 0
    fi

    # Try pipx (isolated)
    if command -v pipx &>/dev/null; then
        log_info "Using pipx for installation (isolated)..."
        pipx install code-review-graph 2>/dev/null && return 0
    fi

    # Fall back to pip
    log_info "Using pip for installation..."
    $PYTHON_CMD -m pip install code-review-graph 2>/dev/null && return 0
    pip install code-review-graph 2>/dev/null && return 0
    pip3 install code-review-graph 2>/dev/null && return 0

    log_error "Failed to install code-review-graph"
    return 1
}

# ─── Build Graph ─────────────────────────────────────────────────

build_graph() {
    log_info "Building full code graph (first time — may take 10-30 seconds)..."
    local start_time=$(date +%s)

    cd "$REPO_ROOT"
    code-review-graph build 2>&1

    local end_time=$(date +%s)
    local duration=$((end_time - start_time))
    log_success "Graph built in ${duration} seconds"
}

update_graph() {
    log_info "Updating code graph (incremental)..."
    local start_time=$(date +%s)

    cd "$REPO_ROOT"
    code-review-graph update 2>&1

    local end_time=$(date +%s)
    local duration=$((end_time - start_time))
    log_success "Graph updated in ${duration} seconds"
}

# ─── Get Graph Stats ─────────────────────────────────────────────

get_graph_stats() {
    if [ ! -f "$REPO_ROOT/$GRAPH_DB" ]; then
        echo '{"graph_built":false}'
        return
    fi

    # Get stats from code-review-graph if available
    local stats
    stats=$(cd "$REPO_ROOT" && code-review-graph status 2>/dev/null || echo "")

    # Extract numbers from stats output
    local files=$(echo "$stats" | grep -oE '[0-9]+ files?' | head -1 | grep -oE '[0-9]+' || echo "0")
    local nodes=$(echo "$stats" | grep -oE '[0-9]+ nodes?' | head -1 | grep -oE '[0-9]+' || echo "0")
    local edges=$(echo "$stats" | grep -oE '[0-9]+ edges?' | head -1 | grep -oE '[0-9]+' || echo "0")

    # Fallback: get file count from graph.db size
    if [ "$files" = "0" ]; then
        files=$(find "$REPO_ROOT" -name "*.py" -o -name "*.ts" -o -name "*.js" -o -name "*.go" -o -name "*.rs" -o -name "*.java" -o -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
    fi

    echo "{\"files\":$files,\"nodes\":$nodes,\"edges\":$edges}"
}

# ─── Write Memory Status ─────────────────────────────────────────

write_status() {
    local graph_built=$1
    local first_session=$2
    local stats=$3

    local files=$(echo "$stats" | grep -oE '"files":[0-9]+' | grep -oE '[0-9]+' || echo "0")
    local nodes=$(echo "$stats" | grep -oE '"nodes":[0-9]+' | grep -oE '[0-9]+' || echo "0")
    local edges=$(echo "$stats" | grep -oE '"edges":[0-9]+' | grep -oE '[0-9]+' || echo "0")
    local timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

    cat > "$REPO_ROOT/$STATUS_FILE" << EOF
{
  "graph_built": $graph_built,
  "graph_path": "$GRAPH_DB",
  "last_updated": "$timestamp",
  "files_indexed": $files,
  "nodes": $nodes,
  "edges": $edges,
  "token_savings_estimate": "8.2x",
  "first_session": $first_session,
  "memory_layers": {
    "layer_1_graph": {
      "system": "code-review-graph",
      "storage": "$GRAPH_DB",
      "status": "$( [ "$graph_built" = "true" ] && echo "active" || echo "missing" )"
    },
    "layer_2_session": {
      "system": "claude-mem",
      "storage": "~/.claude-mem/claude-mem.db",
      "status": "check_on_session"
    },
    "layer_3_longterm": {
      "system": "supermemory",
      "storage": "https://mcp.supermemory.ai/mcp",
      "status": "check_api_key"
    },
    "layer_4_codebase": {
      "system": "openviking",
      "storage": "virtual filesystem",
      "status": "check_api_key"
    }
  }
}
EOF

    log_success "Memory status written to $STATUS_FILE"
}

# ─── Show Status Report ──────────────────────────────────────────

show_status() {
    log_header "ULTRACAR v3.0 — Memory Status"

    if [ ! -f "$REPO_ROOT/$GRAPH_DB" ]; then
        log_error "Code graph NOT built"
        log_info "Run: bash memory-bootstrap.sh"
        return 1
    fi

    local stats=$(get_graph_stats)
    local files=$(echo "$stats" | grep -oE '"files":[0-9]+' | grep -oE '[0-9]+' || echo "?")
    local nodes=$(echo "$stats" | grep -oE '"nodes":[0-9]+' | grep -oE '[0-9]+' || echo "?")
    local edges=$(echo "$stats" | grep -oE '"edges":[0-9]+' | grep -oE '[0-9]+' || echo "?")
    local db_size=$(du -h "$REPO_ROOT/$GRAPH_DB" 2>/dev/null | cut -f1 || echo "?")
    local last_mod=$(stat -f "%Sm" -t "%Y-%m-%d %H:%M" "$REPO_ROOT/$GRAPH_DB" 2>/dev/null || stat -c "%y" "$REPO_ROOT/$GRAPH_DB" 2>/dev/null | cut -d. -f1 || echo "?")

    echo "  📊 Graph Database: $GRAPH_DB ($db_size)"
    echo "  📁 Files indexed:  $files"
    echo "  🔗 Nodes:          $nodes"
    echo "  🔗 Edges:          $edges"
    echo "  🕐 Last updated:   $last_mod"
    echo "  💰 Token savings:  ~8.2x average"
    echo ""

    # Check other memory layers
    echo "  Memory Layers:"
    echo "  ├── Layer 1 (Graph):      ✅ Active"

    if [ -f "$HOME/.claude-mem/claude-mem.db" ]; then
        echo "  ├── Layer 2 (Claude-Mem): ✅ Connected"
    else
        echo "  ├── Layer 2 (Claude-Mem): ⚠️  Not installed"
    fi

    if [ -f "$REPO_ROOT/.env" ] && grep -q "SUPERMEMORY" "$REPO_ROOT/.env" 2>/dev/null; then
        echo "  ├── Layer 3 (Supermemory):✅ API key found"
    else
        echo "  ├── Layer 3 (Supermemory):⚠️  No API key (set in .env)"
    fi

    if [ -f "$REPO_ROOT/.env" ] && grep -q "OPENVIKING" "$REPO_ROOT/.env" 2>/dev/null; then
        echo "  └── Layer 4 (OpenViking): ✅ API key found"
    else
        echo "  └── Layer 4 (OpenViking): ⚠️  No API key (set in .env)"
    fi

    echo ""
}

# ─── Main ─────────────────────────────────────────────────────────

main() {
    local force=false
    local status_only=false

    # Parse arguments
    for arg in "$@"; do
        case $arg in
            --force) force=true ;;
            --status) status_only=true ;;
            --help|-h)
                echo "Usage: bash memory-bootstrap.sh [--force|--status|--help]"
                echo ""
                echo "  --force   Force full graph rebuild (even if graph exists)"
                echo "  --status  Show memory status without building"
                echo "  --help    Show this help"
                exit 0
                ;;
        esac
    done

    log_header "ULTRACAR v3.0 — Memory Bootstrap"

    # Status only mode
    if $status_only; then
        show_status
        exit $?
    fi

    # Step 1: Check Python
    if ! check_python; then
        log_error "Cannot proceed without Python 3.10+. Install it and try again."
        exit 1
    fi

    # Step 2: Check/install code-review-graph
    if ! check_crg; then
        install_crg || {
            log_error "Failed to install code-review-graph. Install manually:"
            log_info "  pip install code-review-graph"
            exit 1
        }
    fi

    # Step 3: Build or update graph
    local first_session=false

    if [ ! -f "$REPO_ROOT/$GRAPH_DB" ] || $force; then
        first_session=true
        log_info "First session detected — building full code graph..."
        build_graph
    else
        log_info "Graph exists — updating incrementally..."
        update_graph
    fi

    # Step 4: Get stats and write status
    local stats=$(get_graph_stats)
    write_status "true" "$first_session" "$stats"

    # Step 5: Show report
    show_status

    # Step 6: Final message
    if $first_session; then
        log_header "🎉 First-Time Memory Bootstrap Complete!"
        echo "  The code graph has been built. From now on:"
        echo "  • AI agents will query the graph instead of reading files"
        echo "  • Token savings: ~8.2x (87% reduction)"
        echo "  • Incremental updates take <2 seconds"
        echo ""
        echo "  Next steps:"
        echo "  1. Copy .env.example to .env and add your API keys"
        echo "  2. Start your AI coding session"
        echo "  3. The AI will use the graph automatically"
    else
        log_success "Memory updated. Ready for AI task execution."
    fi
}

main "$@"
