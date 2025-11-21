interface BlogPostMetadata {
	title: string;
	description: string;
	date: string;
}

declare module '*.svx' {
	import type { SvelteComponent } from 'svelte';

	export default class Comp extends SvelteComponent {}

	export const metadata: BlogPostMetadata;
}
