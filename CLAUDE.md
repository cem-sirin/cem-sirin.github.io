# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website/blog for Cem Şirin built with SvelteKit 2, Svelte 5, and TailwindCSS 4. Deployed to GitHub Pages as a static site.

## Commands

```bash
bun dev              # Start development server
bun run build        # Build for production (static output)
bun run preview      # Preview production build
bun run check        # TypeScript/Svelte type checking
bun run lint         # Run prettier + eslint
bun run format       # Auto-format with prettier
```

## Architecture

- **Static site**: Uses `@sveltejs/adapter-static` with prerendering enabled globally (`src/routes/+layout.js`)
- **Blog posts**: Written in `.svx` files (MDSvex) under `src/routes/blog/(blog)/`. Blog posts use frontmatter for metadata and are wrapped by `blog-layout.svelte`
- **UI components**: shadcn-svelte style components in `src/lib/components/ui/` (button, card, badge, navigation-menu) using `bits-ui` primitives
- **Styling**: TailwindCSS 4 via Vite plugin, utility function `cn()` in `src/lib/utils.ts` for class merging
- **Theming**: Dark/light mode via `mode-watcher` package
- **Icons**: Pixel icon library (`@hackernoon/pixel-icon-library`) + Lucide icons

## Key Patterns

- Svelte 5 runes syntax (`$props()`, `$state()`, etc.)
- Components use `class` prop with `cn()` for composable styling
- Blog route group `(blog)` allows shared layout without affecting URL paths
