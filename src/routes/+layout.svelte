<script lang="ts">
	import '../app.css';
	import '@hackernoon/pixel-icon-library/fonts/iconfont.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<title>Cem Sirin</title>
	<link rel="icon" href={favicon} />
	<meta name="author" content="Cem Sirin" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<ModeWatcher />

<Navbar />

<div class="mx-auto mt-16 max-w-3xl px-5 py-8 md:px-8">
	{@render children()}
</div>
