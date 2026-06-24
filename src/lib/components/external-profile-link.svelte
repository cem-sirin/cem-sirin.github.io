<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Button } from '$lib/components/ui/button';
	import PixelIcon from '$lib/components/pixel-icon.svelte';
	import { ExternalLink } from '@lucide/svelte';

	let { href, label, icon }: { href: string; label: string; icon: string } = $props();
	let open = $state(false);

	function continueToProfile() {
		window.open(href, '_blank', 'noopener,noreferrer');
	}
</script>

<Button
	variant="ghost"
	size="sm"
	aria-label={`Open ${label} profile`}
	onclick={() => (open = true)}
>
	<PixelIcon name={icon} size="16px" />
</Button>

<AlertDialog.Root bind:open>
	<AlertDialog.Content size="sm">
		<AlertDialog.Header>
			<AlertDialog.Media>
				<ExternalLink class="h-5 w-5" />
			</AlertDialog.Media>
			<AlertDialog.Title>Leave this page?</AlertDialog.Title>
			<AlertDialog.Description>
				This opens Cem's {label} profile in a new browser tab.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Stay here</AlertDialog.Cancel>
			<AlertDialog.Action onclick={continueToProfile}>Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
