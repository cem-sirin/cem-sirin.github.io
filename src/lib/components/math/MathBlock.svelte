<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import katex from 'katex';
	import 'katex/dist/katex.min.css';

	interface Props {
		latex: string;
	}

	let { latex }: Props = $props();

	let renderedHtml = $state('');

	onMount(() => {
		if (!browser) return;

		try {
			renderedHtml = katex.renderToString(latex, {
				displayMode: true,
				throwOnError: false,
				strict: false
			});
		} catch (error) {
			console.error('KaTeX rendering error:', error);
			renderedHtml = latex;
		}
	});
</script>

{#if browser}
	<div class="math-block my-4">
		{@html renderedHtml}
	</div>
{:else}
	<div class="math-block my-4 text-center text-muted-foreground">
		<pre>{latex}</pre>
	</div>
{/if}

<style>
	.math-block {
		display: flex;
		justify-content: center;
		overflow-x: auto;
		padding: 1rem 0;
	}

	:global(.math-block .katex) {
		font-size: 1.1em;
	}

	:global(.math-block .katex-display) {
		margin: 0;
	}
</style>
