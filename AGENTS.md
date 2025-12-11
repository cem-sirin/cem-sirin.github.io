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

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

