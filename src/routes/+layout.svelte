<script lang="ts">
	import '../app.css';
	import '@hackernoon/pixel-icon-library/fonts/iconfont.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/navbar.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<title>Cem Şirin - Personal Page</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<Navbar />

<div class="mt-16 p-4">
	{@render children()}
</div>
