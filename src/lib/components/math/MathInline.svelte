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
				displayMode: false,
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
	<span class="math-inline">
		{@html renderedHtml}
	</span>
{:else}
	<span class="math-inline text-muted-foreground">
		<pre class="inline">{latex}</pre>
	</span>
{/if}

<style>
	.math-inline {
		display: inline-block;
		vertical-align: middle;
	}

	.math-inline pre.inline {
		display: inline;
		margin: 0;
	}

	:global(.math-inline .katex) {
		font-size: 1em;
	}
</style>
