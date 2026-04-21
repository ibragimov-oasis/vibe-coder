#!/usr/bin/env bash
set -euo pipefail

DRY_RUN=0
AUTO_YES=0
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"

usage() {
  cat <<'USAGE'
Usage: bash vc-kit/install.sh [options]

Run from the root of your project after copying vc-kit/ into it.

Options:
  --dry-run    Show what would be changed without modifying files
  --yes        Non-interactive mode, default action = merge
  -h, --help   Show help
USAGE
}

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    --yes) AUTO_YES=1 ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown option: $arg"; usage; exit 1 ;;
  esac
done

KIT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="$(pwd)"
LOG_FILE="$TARGET_DIR/vc-kit-install-$TIMESTAMP.log"

created_count=0
merged_count=0
skipped_count=0
backed_up_count=0

declare -a backups=()

log() {
  echo "$1" | tee -a "$LOG_FILE"
}

run() {
  if [ "$DRY_RUN" -eq 1 ]; then
    log "[dry-run] $*"
  else
    eval "$@"
  fi
}

copy_full() {
  local src="$1"
  local dest="$2"
  if [ -d "$src" ]; then
    run "mkdir -p \"$dest\""
    run "cp -a \"$src\"/. \"$dest\"/"
  else
    run "mkdir -p \"$(dirname "$dest")\""
    run "cp -a \"$src\" \"$dest\""
  fi
}

copy_missing_only() {
  local src="$1"
  local dest="$2"
  if [ -d "$src" ]; then
    run "mkdir -p \"$dest\""
    run "cp -a --update=none \"$src\"/. \"$dest\"/"
  else
    if [ ! -e "$dest" ]; then
      run "mkdir -p \"$(dirname "$dest")\""
      run "cp -a \"$src\" \"$dest\""
    fi
  fi
}

choose_mode() {
  local dest="$1"
  if [ "$AUTO_YES" -eq 1 ]; then
    echo "merge"
    return
  fi

  while true; do
    printf "Conflict at %s: [m]erge / [s]kip / [b]ackup ? " "$dest"
    read -r reply
    case "$reply" in
      m|M|merge|MERGE) echo "merge"; return ;;
      s|S|skip|SKIP) echo "skip"; return ;;
      b|B|backup|BACKUP) echo "backup"; return ;;
      *) echo "Please choose m, s, or b." ;;
    esac
  done
}

install_item() {
  local src_rel="$1"
  local dest_rel="$2"
  local label="$3"

  local src="$KIT_DIR/$src_rel"
  local dest="$TARGET_DIR/$dest_rel"

  if [ ! -e "$src" ]; then
    log "[skip] $label (source missing: $src_rel)"
    skipped_count=$((skipped_count + 1))
    return
  fi

  if [ ! -e "$dest" ]; then
    log "[create] $label -> $dest_rel"
    copy_full "$src" "$dest"
    created_count=$((created_count + 1))
    return
  fi

  local mode
  mode="$(choose_mode "$dest_rel")"

  case "$mode" in
    skip)
      log "[skip] $label"
      skipped_count=$((skipped_count + 1))
      ;;
    merge)
      log "[merge] $label"
      copy_missing_only "$src" "$dest"
      merged_count=$((merged_count + 1))
      ;;
    backup)
      local backup_path="${dest}.backup.${TIMESTAMP}"
      log "[backup] $label -> ${backup_path#$TARGET_DIR/}"
      run "mv \"$dest\" \"$backup_path\""
      copy_full "$src" "$dest"
      backups+=("$backup_path")
      backed_up_count=$((backed_up_count + 1))
      ;;
  esac
}

log "vc-kit installer"
log "Target project: $TARGET_DIR"
log "Kit source: $KIT_DIR"
log "Mode: dry-run=$DRY_RUN, auto-yes=$AUTO_YES"
log ""

install_item "configs/vc-claude" ".claude" "Claude config"
install_item "configs/vc-cursor" ".cursor" "Cursor config"
install_item "configs/vc-github" ".github" "GitHub config"
install_item "configs/vc-antigravity" ".antigravity" "Antigravity config"
install_item "configs/vc-codex" ".codex" "Codex config"
install_item "configs/vc-gemini" ".gemini" "Gemini config"
install_item "rules/vc-cursorrules" ".cursorrules" "Cursor rules"
install_item "rules/vc-obsidianignore" ".obsidianignore" "Obsidian ignore"
install_item "rules/vc-env-example" ".env.example" "Environment template"

log ""
log "Installation summary"
log "  created:  $created_count"
log "  merged:   $merged_count"
log "  backed up:$backed_up_count"
log "  skipped:  $skipped_count"
log "  log file: ${LOG_FILE#$TARGET_DIR/}"

if [ "${#backups[@]}" -gt 0 ]; then
  log ""
  log "Rollback"
  log "  Remove installed target and restore backup directories/files:"
  for b in "${backups[@]}"; do
    log "    - ${b#$TARGET_DIR/}"
  done
fi

log "Done."
