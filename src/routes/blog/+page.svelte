<script lang="ts">
	const modules = import.meta.glob<{ default: any; metadata: Record<string, any> }>('./**/*.svx', {
		eager: true
	});

	const posts = Object.entries(modules)
		.map(([path, module]) => {
			// Extract slug from path like "./(blog)/my-first-post/+page.svx"
			const parts = path.split('/');
			const slug = parts[2]; // "(blog)" is parts[1], slug is parts[2]

			return {
				slug,
				title: module.metadata?.title || slug,
				date: module.metadata?.date || '',
				description: module.metadata?.description || ''
			};
		})
		.filter((post) => post.slug)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<div>
	<div class="space-y-6">
		{#each posts as post}
			<article class="border-b pb-6">
				<h2>
					<a href="/blog/{post.slug}">{post.title}</a>
				</h2>
				<p class="text-sm text-muted-foreground">{post.date}</p>
				<p>{post.description}</p>
			</article>
		{:else}
			<div class="text-center py-12">
				<h2 class="text-2xl font-semibold mb-4">No blog posts yet. Coming soon :)</h2>
			</div>
		{/each}
	</div>
</div>

<style>
	article {
		margin-bottom: 2rem;
	}

	h2 a {
		color: inherit;
		text-decoration: none;
	}

	h2 a:hover {
		text-decoration: underline;
	}
</style>
