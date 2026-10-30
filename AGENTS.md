<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wanderlust Booking

A travel/accommodation booking web app built with Next.js 16 (App Router). Currently early-stage: the app shell is set up and a UI component library is installed, but most product pages are yet to be built.

## Commands

- `npm run dev` — start the dev server (Turbopack, default bundler)
- `npm run build` — production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + TypeScript)
- No test framework is configured yet — don't invent test commands without asking.

There is no separate type-check script; use `npx tsc --noEmit` to check types.

## Stack & Configuration (non-negotiables)

- **Next.js 16.4.3 / React 19.3**, App Router with `src/` directory layout (`src/app`). TypeScript `strict: true`.
- **React Compiler is enabled** (`reactCompiler: true` in `next.config.ts`). Do not add manual memoization (`useMemo`, `useCallback`, `React.memo`) unless there is a measured need — the compiler handles reactivity.
- **Cache Components are enabled** (`cacheComponents: true`). Reads of dynamic data must happen inside Suspense/cache boundaries; use `"use cache"` for cacheable async work. `partialPrefetching` is also on.
- **Tailwind CSS v4** — no `tailwind.config` file; all theming lives in `src/app/globals.css` (CSS variables, `@theme`). Base color: neutral.
- **Fonts**: Josefin Sans (body, `--font-sans`) and Playfair Display (display serif, `--font-display`) via `next/font/google`, wired as CSS variables in `src/app/layout.tsx` and mapped to `font-sans`/`font-display` utilities in `src/app/globals.css`. Brand teal is exposed as `--color-brand` (`bg-brand`, `text-brand`, `hover:bg-brand-dark`).

## Project Layout

- `src/app/` — App Router routes; `globals.css` holds the Tailwind v4 theme.
- `src/components/ui/` — ~70 shadcn-style components, generated for the **base-nova** style (`components.json`, registry: base/ui, icons: lucide). These are generated code — don't hand-edit unless making a targeted fix; prefer adding new components via `npx shadcn@latest add`.
- `src/hooks/` and `src/lib/` — hooks (e.g. `use-mobile`) and utilities. `src/lib/utils.ts` re-exports `cn` from the `cn` package.
- `public/` — static assets.

## Conventions

- **Path alias**: `@/*` maps to `src/*` (e.g. `@/components/ui/button`, `@/lib/utils`). Use it in all imports.
- **Import `cn` from `@/lib/utils`**, not from a source package.
- Components used by shadcn primitives come from **Base UI** (`@base-ui/react`), not Radix — check an existing `src/components/ui/*` file for the import pattern before writing a similar component.
- Server Components by default; add `"use client"` only at the leaf that needs interactivity.
- Icons: `lucide-react`. Dates: `date-fns` is available.

## Gotchas

- The eslint config overrides `eslint-config-next`'s default ignores — keep that `globalIgnores` block intact when touching `eslint.config.mjs`.
- Tailwind v4 has no JS config: to add theme tokens (colors, breakpoints, fonts), edit the `@theme` block in `src/app/globals.css`, mirrored by CSS variables.
