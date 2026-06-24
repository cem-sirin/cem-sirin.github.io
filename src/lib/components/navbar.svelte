<script lang="ts">
	import {
		NavigationMenuRoot,
		NavigationMenuList,
		NavigationMenuItem,
		NavigationMenuLink
	} from '$lib/components/ui/navigation-menu';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import ExternalProfileLink from '$lib/components/external-profile-link.svelte';

	const navLinks = [
		{ href: '/', text: 'Home' },
		{ href: '/cv', text: 'CV' },
		{ href: '/blog', text: 'Blog' }
	];
</script>

<div
	class="fixed top-0 z-10 flex w-full items-center justify-between gap-4 border-b bg-background/75 px-4 py-4 backdrop-blur-sm md:justify-center md:px-8"
>
	<!-- Left: Name -->
	<a href="/" class="text-base font-semibold whitespace-nowrap md:absolute md:left-8 md:text-xl"
		>./cem/şirin</a
	>

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
	<div class="flex items-center md:absolute md:right-8">
		<ExternalProfileLink
			href="https://www.linkedin.com/in/cem-sirin/"
			label="LinkedIn"
			icon="linkedin"
		/>
		<ExternalProfileLink href="https://github.com/cem-sirin" label="GitHub" icon="github" />
		<ThemeToggle />
	</div>
</div>
