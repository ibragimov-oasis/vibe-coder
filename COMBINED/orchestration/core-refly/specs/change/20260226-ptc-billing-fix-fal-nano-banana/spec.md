---
id: 20260226-ptc-billing-fix-fal-nano-banana
name: Ptc Billing Fix Fal Nano Banana
status: implemented
created: '2026-02-26'
tags:
  - domain/orchestration
  - artifact/workflow
  - source/core-refly
---

## Overview

PTC billing is broken for image generation toolsets (`fal_image`, `nano_banana_pro`). Both tools execute successfully but are charged 0 credits, and their `credit_usages` foreign key references are broken.

## Research

Findings from PTC all-tests workflow run (`c-l731o55yep9gsknfz5qw2vhb`) on 2026-02-26, verified via `ptc_verify.py`:

| Node | Tool | Credits | Issue |
|------|------|---------|-------|
| fal ptc | `flux_text_to_image` | 0 ⚠️ | Unbilled + broken `credit_usage` ref |
| nano banana ptc | `text-to-image` (×2) | 0 ⚠️ | Unbilled + broken `credit_usage` refs |
| alpha vantage ptc | `ALPHA_VANTAGE_SYMBOL_SEARCH` | 3 ✓ | — |
| notion ptc | `NOTION_SEARCH_NOTION_PAGE` | 3 ✓ | — |
| perplexity ptc | `chat_completions` | 1 ✓ | — |
| linear ptc | 6 Linear calls | 18 ✓ | — |

**Root cause (confirmed):** Two distinct issues, both causing the same symptom.

**Issue 1 — `toolCallId` not propagated (affects all config-based PTC tools)**

PR #2240 (`alchemistklk`) refactored the post-handler by deleting `handler-post.ts` and introducing `DynamicPostHandlerService`. The old file passed `toolCallId: request.metadata?.toolCallId` to `billingService.processBilling()` — the new file omitted it.

Without `toolCallId`, `credit_usages.tool_call_id = ''`, breaking the FK join to `tool_call_results`. The billing trace view (LEFT JOIN from `tool_call_results`) shows 0 credits even though credits are deducted from the user's account.

**Issue 2 — `nano_banana_pro` billing key mismatch (affects credit amount)**

`toolset_inventory.credit_billing = '{"generate-image": 16}'` but actual method names are `text-to-image` and `image-to-image`. No per-method billing config is found, so billing falls back to `defaultCreditsPerCall = 1` instead of the intended 16.

## Design

- Fix `DynamicPostHandlerService.processBilling()` to pass `toolCallId` from `request.metadata`
- Update `nano_banana_pro` `credit_billing` keys to match actual method names

## Plan

- [x] Investigate `fal_image` and `nano_banana_pro` toolset configs — check `isGlobal` flag
- [x] Add/fix billing configuration for both toolsets
- [x] Re-run PTC all-tests workflow to confirm fix
- [x] Verify with `ptc_verify.py` — no unbilled calls, no broken refs

## Implementation

**Fix 1** — `apps/api/src/modules/tool/handlers/post/dynamic-post.service.ts`

Added `toolCallId: request.metadata?.toolCallId as string | undefined` to the `processBilling()` call. Restores the behavior that was present in the deleted `handler-post.ts`.

**Fix 2** — DB: `refly.toolset_inventory` for `nano_banana_pro`

Updated `credit_billing` from `{"generate-image": 16}` to `{"text-to-image": 16, "image-to-image": 16}` to match actual method names.

**Verification result** (workflow `c-tdtgj6ipbvf7akof5zota0pj`, run 2026-02-26):

| Node | Credits | Linkage |
|------|---------|---------|
| fal ptc | 💰 3 credits | ✓ 1/1 matched |
| nano banana ptc | 💰 16 credits × 2 | ✓ 2/2 matched |

## Notes

### Verification

Run the PTC all-tests workflow and verify each PTC node:

```bash
# Step 1: Run the workflow (minimal test case including fal and nano banana)
refly workflow run c-tdtgj6ipbvf7akof5zota0pj

# Step 2: Watch until all nodes complete
refly workflow status <runId> --watch

# Step 3: Verify each PTC node by title
python specs/current/ptc/scripts/ptc_verify.py c-tdtgj6ipbvf7akof5zota0pj "fal ptc"
python specs/current/ptc/scripts/ptc_verify.py c-tdtgj6ipbvf7akof5zota0pj "nano banana ptc"
```
Expected: all nodes show ✓ billing linkage, 0 unbilled calls (ignoring temp API key warning).
