# Self Screenshot Loop

Repeat this cycle until the build matches the reference.

## A — Capture
- Reference site screenshots: Desktop 1440×900, Mobile 390×844
- Our build screenshots at the same sizes
- Same scroll position / section for both

## B — Compare & Diff List
Make a short prioritized list:
- **P0**: wrong structure/layout, broken responsive, missing sections
- **P1**: noticeable visual mismatch (fonts, spacing, colors, card/button style)
- **P2**: polish (micro spacing, subtle shadows, transitions)

## C — Fix in Small Batches
- Fix P0 first → P1 → P2
- Keep changes incremental; no giant refactors
- Report: what changed + which files touched + assumptions made

## D — Re-Screenshot & Re-Compare
Repeat until:
- All P0 and P1 are resolved
- P2 is either resolved or explicitly accepted

## Default Screenshot Order
1. Desktop Hero
2. Desktop mid-page (cards/features)
3. Desktop footer
4. Mobile hero
5. Mobile nav open state
6. Mobile mid-page + footer
