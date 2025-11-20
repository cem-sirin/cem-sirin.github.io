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
		{ href: '/', icon: 'file-text', text: 'CV' },
		{ href: '/blog', icon: 'book', text: 'Blog' }
	];
</script>

<div class="fixed top-0 z-10 flex w-full items-center justify-center border-b p-4 backdrop-blur-sm">
	<!-- Left: Name -->
	<div class="absolute left-4 text-xl font-semibold">./cem/şirin</div>

	<!-- Middle: Navigation -->
	<NavigationMenuRoot>
		<NavigationMenuList>
			{#each navLinks as link}
				<NavigationMenuItem>
					<NavigationMenuLink href={link.href}>
						<div class="flex items-center gap-2">
							<PixelIcon name={link.icon} size="16px" />
							{link.text}
						</div>
					</NavigationMenuLink>
				</NavigationMenuItem>
			{/each}
		</NavigationMenuList>
	</NavigationMenuRoot>

	<!-- Right: Social Icons and Theme Toggle -->
	<div class="absolute right-4 flex items-center gap-2">
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
