# Implementation Rules

## Styling
- Tailwind utilities first
- `globals.css` only for fonts, tokens, and base rules

## Components
- Reusable primitives: `Container`, `Section`, `Button`
- Clean boundaries — avoid massive monolithic components

## Content
- Centralize all copy/data in `lib/content.ts`

## Accessibility
- Semantic HTML tags
- Labels for all inputs
- Visible focus states

## Ambiguous Reference
If a detail isn't visible in the reference:
- Choose a reasonable default consistent with the overall design
- Mark it explicitly as an assumption
- Keep it easy to adjust
