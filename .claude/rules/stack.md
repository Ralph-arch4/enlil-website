# Default Stack & Project Template

## Stack (unless I say otherwise)
- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui (when it saves time)
- **Quality**: ESLint + Prettier; basic SEO; accessibility; responsive

## Commands
```bash
pnpm i        # Install dependencies
pnpm dev      # Development server
pnpm lint     # Linting
pnpm build    # Production build (optional)
```

## Project Template Structure
```
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
```
