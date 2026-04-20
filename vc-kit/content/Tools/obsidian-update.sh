#!/usr/bin/env bash
# ══════════════════════════════════════════════════════════════════
# ULTRACAR v3.0 — Obsidian Vault Auto-Update Script
# ══════════════════════════════════════════════════════════════════
# Saves AI task outputs as Obsidian-compatible markdown notes.
# Called automatically at the end of every task (post-task pipeline Step D).
#
# Usage:
#   bash obsidian-update.sh --title "Task Name" --content "What was done"
#   bash obsidian-update.sh --title "Task Name" --content "..." --tags "auth,bugfix"
#   bash obsidian-update.sh --title "Task Name" --file /path/to/output.md
#   bash obsidian-update.sh --status     # Show vault status
#   bash obsidian-update.sh --rebuild    # Rebuild MOC index
#
# Compatible with: Claude Code, Cursor, Copilot, Codex, Gemini, Antigravity
# ══════════════════════════════════════════════════════════════════

set -euo pipefail

# ─── Configuration ───────────────────────────────────────────────
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_DIR="${REPO_ROOT}/obsidian_vibe-coder"
SESSIONS_DIR="${VAULT_DIR}/sessions"
MOC_FILE="${VAULT_DIR}/MOC - Sessions.md"
REGISTRY_FILE="${VAULT_DIR}/_audit/SESSION_REGISTRY.md"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

log_info()    { echo -e "${BLUE}📝${NC} $1"; }
log_success() { echo -e "${GREEN}✅${NC} $1"; }
log_warn()    { echo -e "${YELLOW}⚠️${NC} $1"; }
log_error()   { echo -e "${RED}❌${NC} $1"; }
log_header()  { echo -e "\n${CYAN}══ $1 ══${NC}\n"; }

# ─── Ensure Vault Structure Exists ───────────────────────────────

ensure_vault() {
    if [ ! -d "$VAULT_DIR" ]; then
        log_warn "Obsidian vault not found at $VAULT_DIR — creating skeleton..."
        mkdir -p "$VAULT_DIR"/{sessions,_audit,_governance,agents,mcp-servers,skills,memory,orchestration,security,reference,prompts,ui-design,root-docs}
        log_success "Vault skeleton created at $VAULT_DIR"
    fi

    # Ensure sessions folder exists
    mkdir -p "$SESSIONS_DIR"

    # Ensure audit folder exists
    mkdir -p "${VAULT_DIR}/_audit"

    # Create SESSION_REGISTRY if missing
    if [ ! -f "$REGISTRY_FILE" ]; then
        cat > "$REGISTRY_FILE" << 'REGISTRY_HEADER'
---
title: Session Registry
tags:
  - domain/system
  - artifact/audit
  - status/active
created: 2026-01-01
updated: 2026-01-01
type: audit
---

# 📋 Session Registry

> Auto-updated by `obsidian-update.sh` after every AI task.
> Each row is one completed session.

| Date | Title | Domain | Tags | File |
|------|-------|--------|------|------|
REGISTRY_HEADER
        log_info "Created SESSION_REGISTRY.md"
    fi

    # Create MOC - Sessions if missing
    if [ ! -f "$MOC_FILE" ]; then
        cat > "$MOC_FILE" << 'MOC_HEADER'
---
title: MOC - Sessions
tags:
  - domain/system
  - artifact/moc
  - status/active
created: 2026-01-01
updated: 2026-01-01
type: moc
---

# 🗂️ MOC — Sessions

> Map of all AI task sessions saved to this vault.
> Auto-updated by `obsidian-update.sh`.

## Sessions (newest first)

MOC_HEADER
        log_info "Created MOC - Sessions.md"
    fi
}

# ─── Infer Domain from Tags/Title ────────────────────────────────

infer_domain() {
    local title="${1:-}"
    local tags="${2:-}"
    local combined="${title} ${tags}"

    if echo "$combined" | grep -qiE "security|pentest|vulnerability|shannon|audit"; then
        echo "security"
    elif echo "$combined" | grep -qiE "memory|obsidian|supermemory|bootstrap|graph"; then
        echo "memory"
    elif echo "$combined" | grep -qiE "design|ui|ux|component|css|layout"; then
        echo "ui-design"
    elif echo "$combined" | grep -qiE "agent|orchestr|squad|swarm|pipeline"; then
        echo "orchestration"
    elif echo "$combined" | grep -qiE "skill|learn|hermes|pattern"; then
        echo "skills"
    elif echo "$combined" | grep -qiE "bug|fix|debug|error|crash"; then
        echo "debugging"
    elif echo "$combined" | grep -qiE "plan|architect|prd|roadmap"; then
        echo "planning"
    elif echo "$combined" | grep -qiE "test|tdd|coverage|spec"; then
        echo "testing"
    elif echo "$combined" | grep -qiE "doc|readme|write|markdown"; then
        echo "writing"
    elif echo "$combined" | grep -qiE "deploy|ci|cd|git|devops"; then
        echo "devops"
    elif echo "$combined" | grep -qiE "seo|search|meta|sitemap"; then
        echo "seo"
    else
        echo "general"
    fi
}

# ─── Create Session Note ─────────────────────────────────────────

create_session_note() {
    local title="$1"
    local content="$2"
    local extra_tags="${3:-}"
    local domain
    domain=$(infer_domain "$title" "$extra_tags")

    local timestamp
    timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    local date_str
    date_str=$(date -u +"%Y-%m-%d")
    local time_str
    time_str=$(date -u +"%H%M")

    # Sanitize title for filename
    local safe_title
    safe_title=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//')
    local filename="${date_str}-${time_str}-${safe_title}.md"
    local filepath="${SESSIONS_DIR}/${filename}"

    # Build tags list
    local tags_yaml="  - domain/${domain}"
    tags_yaml+=$'\n'"  - artifact/session"
    tags_yaml+=$'\n'"  - status/active"
    if [ -n "$extra_tags" ]; then
        IFS=',' read -ra tag_arr <<< "$extra_tags"
        for tag in "${tag_arr[@]}"; do
            tag=$(echo "$tag" | xargs)
            tags_yaml+=$'\n'"  - ${tag}"
        done
    fi

    # Write the note
    cat > "$filepath" << NOTEEOF
---
title: "${title}"
tags:
${tags_yaml}
created: ${date_str}
updated: ${date_str}
type: session
domain: ${domain}
---

# ${title}

> **Session:** ${timestamp}
> **Domain:** ${domain}

---

${content}

---

## 🔗 Related

- [[MOC - Sessions]]
- [[MOC - ${domain^}]]
- [[root-docs/MEMORY]]
NOTEEOF

    log_success "Session note saved: sessions/${filename}"
    echo "$filepath"
}

# ─── Update MOC - Sessions ────────────────────────────────────────

update_sessions_moc() {
    local title="$1"
    local domain="$2"
    local filename="$3"
    local date_str
    date_str=$(date -u +"%Y-%m-%d")

    # Add entry to MOC after the "## Sessions" heading
    local note_basename
    note_basename=$(basename "$filename" .md)
    local moc_entry="- [[sessions/${note_basename}|${title}]] — ${date_str}"

    # Insert after "## Sessions (newest first)" line
    if grep -q "## Sessions (newest first)" "$MOC_FILE"; then
        # Use awk to insert after the heading
        awk -v entry="$moc_entry" '
            /## Sessions \(newest first\)/ { print; print entry; next }
            { print }
        ' "$MOC_FILE" > "${MOC_FILE}.tmp" && mv "${MOC_FILE}.tmp" "$MOC_FILE"
    else
        echo "$moc_entry" >> "$MOC_FILE"
    fi

    # Update the 'updated' frontmatter field
    local date_str2
    date_str2=$(date -u +"%Y-%m-%d")
    sed -i "s/^updated: .*/updated: ${date_str2}/" "$MOC_FILE"
}

# ─── Update Session Registry ──────────────────────────────────────

update_registry() {
    local title="$1"
    local domain="$2"
    local tags="${3:-}"
    local filename="$4"
    local date_str
    date_str=$(date -u +"%Y-%m-%d")

    local note_basename
    note_basename=$(basename "$filename" .md)
    local registry_entry="| ${date_str} | ${title} | ${domain} | ${tags} | [[sessions/${note_basename}]] |"

    echo "$registry_entry" >> "$REGISTRY_FILE"

    # Update 'updated' frontmatter
    sed -i "s/^updated: .*/updated: ${date_str}/" "$REGISTRY_FILE"
}

# ─── Also save to supermemory (if available) ─────────────────────

save_to_supermemory() {
    local title="$1"
    local content_summary="$2"
    local tags="${3:-}"

    if command -v npx &>/dev/null; then
        local mem_text="[ULTRACAR Session] ${title}: ${content_summary}"
        if [ -n "$tags" ]; then
            npx -y supermemory add "$mem_text" --tags "$tags" 2>/dev/null && \
                log_success "Saved to Supermemory" || \
                log_warn "Supermemory save skipped (not configured)"
        else
            npx -y supermemory add "$mem_text" 2>/dev/null && \
                log_success "Saved to Supermemory" || \
                log_warn "Supermemory save skipped (not configured)"
        fi
    else
        log_warn "npx not available — Supermemory save skipped"
    fi
}

# ─── Rebuild MOC Index ────────────────────────────────────────────

rebuild_moc() {
    log_info "Rebuilding sessions MOC from vault..."
    local count=0

    # Rewrite MOC from scratch based on files in sessions/
    cat > "$MOC_FILE" << 'MOC_RESET'
---
title: MOC - Sessions
tags:
  - domain/system
  - artifact/moc
  - status/active
type: moc
---

# 🗂️ MOC — Sessions

> Map of all AI task sessions saved to this vault.
> Auto-updated by `obsidian-update.sh`.

## Sessions (newest first)

MOC_RESET

    if [ -d "$SESSIONS_DIR" ]; then
        # List all .md files in reverse order (newest first)
        while IFS= read -r f; do
            local basename
            basename=$(basename "$f" .md)
            # Extract title from frontmatter
            local title
            title=$(grep "^title:" "$f" 2>/dev/null | head -1 | sed 's/title: "\(.*\)"/\1/' | sed 's/title: //')
            local date_part
            date_part=$(echo "$basename" | cut -c1-10)
            echo "- [[sessions/${basename}|${title}]] — ${date_part}" >> "$MOC_FILE"
            count=$((count + 1))
        done < <(find "$SESSIONS_DIR" -name "*.md" | sort -r)
    fi

    log_success "MOC rebuilt with ${count} sessions"
}

# ─── Show Status ─────────────────────────────────────────────────

show_status() {
    log_header "Obsidian Vault Status"

    if [ -d "$VAULT_DIR" ]; then
        local session_count=0
        [ -d "$SESSIONS_DIR" ] && session_count=$(find "$SESSIONS_DIR" -name "*.md" 2>/dev/null | wc -l)
        local total_notes
        total_notes=$(find "$VAULT_DIR" -name "*.md" 2>/dev/null | wc -l)

        echo "  Vault:    $VAULT_DIR"
        echo "  Notes:    $total_notes total"
        echo "  Sessions: $session_count saved"
        echo "  MOC:      $([ -f "$MOC_FILE" ] && echo "✅ exists" || echo "⚠️  missing")"
        echo "  Registry: $([ -f "$REGISTRY_FILE" ] && echo "✅ exists" || echo "⚠️  missing")"
    else
        echo "  Vault:    ⚠️  NOT FOUND at $VAULT_DIR"
        echo "  Run: bash obsidian-update.sh --title 'init' --content 'init' to create"
    fi
    echo ""
}

# ─── Main ─────────────────────────────────────────────────────────

main() {
    local title=""
    local content=""
    local tags=""
    local input_file=""
    local status_only=false
    local rebuild=false

    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --title)   title="$2"; shift 2 ;;
            --content) content="$2"; shift 2 ;;
            --tags)    tags="$2"; shift 2 ;;
            --file)    input_file="$2"; shift 2 ;;
            --status)  status_only=true; shift ;;
            --rebuild) rebuild=true; shift ;;
            --help|-h)
                echo "Usage: bash obsidian-update.sh [options]"
                echo ""
                echo "  --title TEXT       Note title (required unless --status/--rebuild)"
                echo "  --content TEXT     Note body content"
                echo "  --file PATH        Read content from a markdown file"
                echo "  --tags TAG1,TAG2   Comma-separated tags"
                echo "  --status           Show vault status"
                echo "  --rebuild          Rebuild MOC index from existing files"
                echo ""
                echo "Examples:"
                echo "  bash obsidian-update.sh --title 'Fix auth bug' --content 'Fixed Redis pool leak' --tags 'auth,bugfix'"
                echo "  bash obsidian-update.sh --title 'Security audit' --file /tmp/audit-output.md"
                echo "  bash obsidian-update.sh --status"
                exit 0
                ;;
            *) log_error "Unknown argument: $1"; exit 1 ;;
        esac
    done

    log_header "ULTRACAR — Obsidian Vault Update"

    # Status mode
    if $status_only; then
        show_status
        exit 0
    fi

    # Rebuild mode
    if $rebuild; then
        ensure_vault
        rebuild_moc
        exit 0
    fi

    # Validate
    if [ -z "$title" ]; then
        log_error "Missing --title. Use --help for usage."
        exit 1
    fi

    # Read content from file if provided
    if [ -n "$input_file" ]; then
        if [ -f "$input_file" ]; then
            content=$(cat "$input_file")
        else
            log_error "File not found: $input_file"
            exit 1
        fi
    fi

    if [ -z "$content" ]; then
        content="*(No content provided — created as placeholder)*"
    fi

    # Ensure vault exists
    ensure_vault

    # Create the note
    local domain
    domain=$(infer_domain "$title" "$tags")
    local note_path
    note_path=$(create_session_note "$title" "$content" "$tags")

    # Update MOC
    update_sessions_moc "$title" "$domain" "$note_path"

    # Update registry
    update_registry "$title" "$domain" "$tags" "$note_path"

    # Save to supermemory
    # Extract first 200 chars of content as summary
    local summary
    summary=$(echo "$content" | head -c 200 | tr '\n' ' ')
    save_to_supermemory "$title" "$summary" "$tags"

    echo ""
    log_success "✅ Obsidian vault updated!"
    echo "  Note:   ${note_path/$REPO_ROOT\//}"
    echo "  MOC:    ${MOC_FILE/$REPO_ROOT\//}"
    echo "  Domain: ${domain}"
    echo ""
}

main "$@"
