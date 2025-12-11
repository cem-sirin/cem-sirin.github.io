<script lang="ts">
	import {
		NavigationMenuRoot,
		NavigationMenuList,
		NavigationMenuItem,
		NavigationMenuLink
	} from '$lib/components/ui/navigation-menu';
	import PixelIcon from '$lib/components/pixel-icon.svelte';
	import { Button } from '$lib/components/ui/button';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';

	const navLinks = [
		{ href: '/', text: 'CV' },
		{ href: '/blog', text: 'Blog' }
	];
</script>

<div
	class="fixed top-0 z-10 flex w-full items-center justify-center border-b py-4 backdrop-blur-sm"
>
	<!-- Left: Name -->
	<div class="absolute left-8 text-xl font-semibold">./cem/şirin</div>

	<!-- Middle: Navigation -->
	<NavigationMenuRoot>
		<NavigationMenuList>
			{#each navLinks as link}
				<NavigationMenuItem>
					<NavigationMenuLink href={link.href}>
						{link.text}
					</NavigationMenuLink>
				</NavigationMenuItem>
			{/each}
		</NavigationMenuList>
	</NavigationMenuRoot>

	<!-- Right: Social Icons and Theme Toggle -->
	<div class="absolute right-8 flex items-center gap-2">
		<a href="https://www.linkedin.com/in/cem-sirin/" target="_blank" rel="noopener noreferrer">
			<Button variant="ghost" size="sm">
				<PixelIcon name="linkedin" size="16px" />
			</Button>
		</a>
		<a href="https://github.com/cem-sirin" target="_blank" rel="noopener noreferrer">
			<Button variant="ghost" size="sm">
				<PixelIcon name="github" size="16px" />
			</Button>
		</a>
		<ThemeToggle />
	</div>
</div>
