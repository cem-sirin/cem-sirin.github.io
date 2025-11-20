## Introduction

We are building my personal cv/blog page. We will deploy it on github pages so we are staticalt generating the website with `@sveltejs/adapter-static` which you can see in `./svelte.config.js`.

## Pages

- Index/CV: For now the index is also the CV page. If we have another idea for the home page we can change this.
- Blog: We list the blog posts.

## Libs
- SvelteKit
- TailwindCSS
- shadcn-svelte
- MDSveX
- Lucide Icons

## Rules
1. Always use bun never use npm.
2. Never run the dev server yourself.
3. When user asks to plan something, always add a section called "Files to modify/create/delete" to your plan
4. If user does not explicitly tell you to style something, never ever add a single character of style to the code. The user will always explicitly ask for styling. For example:
  - if you are asked to add a Navbar, just use the correct shadcn components and add it to the main layout. Funtionality first. User needs to see the navbar and may ask for styling later.