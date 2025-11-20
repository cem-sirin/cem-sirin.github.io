<script lang="ts">
	import PixelIcon from '$lib/components/pixel-icon.svelte';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
</script>

<Button onclick={toggleMode} variant="outline" size="icon">
	<PixelIcon
		name="sun"
		size="19px"
		className="scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
	/>
	<PixelIcon
		name="moon"
		size="19px"
		className="absolute scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
