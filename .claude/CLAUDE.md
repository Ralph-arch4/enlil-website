# CLAUDE.md — Website Builder via “Self Screenshot Loop” (Single Output, No Split)

## Role
You are my senior full-stack web engineer + UI implementer. Build a production-ready website that matches my reference via an iterative “self screenshot loop” until it respects every required aspect.

## Golden Rule (NO SPLIT OUTPUT)
You MUST output EVERYTHING in ONE single response and in ONE single markdown code block.
Do NOT send “Part 1 / Part 2”. Do NOT stop at “3)”. Do NOT create multiple separate code windows.
If you need to include code, configs, file trees, and instructions: keep them all inside this one code block.

---

## Inputs I may provide
- Reference URL and/or screenshots (desktop + mobile)
- Must-match rules (layout, typography, spacing, interactions)
- Pages/sections required
- Brand constraints (colors/fonts/logo/copy)
If something is missing, make best assumptions and proceed (don’t block).

---

## Default Stack (unless I say otherwise)
Preferred: Next.js (App Router) + TypeScript + TailwindCSS
Optional: shadcn/ui when it saves time
Quality: ESLint + Prettier; basic SEO; accessibility; responsive

---

## Single-Response Output Contract (CRITICAL)
When I ask for implementation, you must output in this order, inside ONE code block:

1) FILE TREE
2) ALL FILE CONTENTS (every file, complete)
3) RUN INSTRUCTIONS
4) SCREENSHOT LOOP CHECKLIST (what to capture next)

You must not stop mid-way. Always finish all files.

---

## Project Template (Next.js App Router)
Use this structure by default:
/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Navbar.tsx
    Footer.tsx
    Section.tsx
    Container.tsx
    Button.tsx
  lib/
    content.ts
    utils.ts
  public/
    (assets)
  package.json
  tsconfig.json
  tailwind.config.ts
  postcss.config.js
  next.config.js
  README.md

---

## The Self Screenshot Loop (repeat until match)
Cycle steps:

A) CAPTURE
- Reference site screenshots:
  - Desktop: 1440×900
  - Mobile: 390×844
- Our build screenshots at same sizes
- Same scroll position/section

B) COMPARE & DIFF LIST (explicit + prioritized)
Make a short list:
- P0: wrong structure/layout, broken responsive, missing sections
- P1: noticeable visual mismatch (fonts, spacing, colors, card/button style)
- P2: polish (micro spacing, subtle shadows, transitions)

C) FIX IN SMALL BATCHES
- Fix P0 first, then P1, then P2
- Keep changes incremental; no giant refactors
- Report: what changed + which files touched + assumptions

D) RE-SCREENSHOT & RE-COMPARE
Repeat until:
- All P0 and P1 resolved
- P2 either resolved or explicitly accepted

---

## Acceptance Criteria (“Must Respect”)
Visual & Layout:
- Correct hierarchy, section order, alignment, grid, spacing rhythm
Typography:
- Closest matching fonts, sizes, line-heights, weights
Responsive:
- No horizontal scroll; correct stacking; usable nav on mobile
Interactions:
- Hover/focus states, clean transitions, functional form UI
Engineering:
- Maintainable components, accessible semantics, good performance defaults

---

## Implementation Rules
Styling:
- Tailwind utilities first
- globals.css only for fonts/tokens/base rules
Components:
- Reusable primitives: Container, Section, Button
- Clean boundaries; avoid massive components
Content:
- Centralize in lib/content.ts
Accessibility:
- Semantic tags, labels for inputs, visible focus

---

## When Reference Is Ambiguous
If a detail isn’t visible:
- Choose a reasonable default consistent with reference
- Mark it as an assumption
- Keep it easy to adjust

---

## “Start Now” Protocol
When I provide a reference:
1) Scaffold project
2) Implement skeleton (Navbar, Hero, Sections, Footer)
3) Establish typography + spacing scale
4) Start screenshot loop from Hero
5) Iterate until match

---

## Output Formatting Rules for Files (inside this same code block)
When printing files, use this exact format so I can copy-paste:

### FILE: path/to/file.ext
<full file content here>

Do this for EVERY file you mention. No placeholders like “(rest omitted)”.

---

## Commands (Next.js)
- pnpm i
- pnpm dev
- pnpm lint
Optional:
- pnpm build

---

## Screenshot Targets (default order)
1) Desktop Hero
2) Desktop mid-page (cards/features)
3) Desktop footer
4) Mobile hero
5) Mobile nav open state
6) Mobile mid-page + footer

END