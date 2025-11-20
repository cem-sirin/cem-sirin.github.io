<script lang="ts">
	import { cvData } from '$lib/data/cv';
	import Badge from '$lib/components/ui/badge/badge.svelte';
</script>

<div>
	<section>
		<h1>Education</h1>
		<ul>
			{#each cvData.education as edu}
				<li class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div class="md:col-span-2">
						<h2>{edu.institution}</h2>
						<p>{edu.degree}</p>
						{#if edu.details}
							<p>{edu.details}</p>
						{/if}
					</div>
					<div class="text-right">
						<p>from {edu.startDate}</p>
						<p>to {edu.endDate}</p>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h1>Experience</h1>
		<ul>
			{#each cvData.experience as exp}
				<li class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div class="md:col-span-2">
						<div class="flex flex-wrap items-center gap-2">
							<h2>{exp.title}</h2>
							{#each exp.technologies as tech}
								<Badge variant="secondary">
									<img src={`/icons/${tech}.svg`} alt={tech} class="h-3 w-3" />
								</Badge>
							{/each}
						</div>

						<p>{exp.description}</p>
						{#if exp.link}
							<a href={exp.link.url} target="_blank" rel="noopener noreferrer">{exp.link.text}</a>
						{/if}
					</div>
					<div class="text-right">
						<p>from {exp.startDate}</p>
						<p>to {exp.endDate}</p>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h1>Projects</h1>
		<ul>
			{#each cvData.projects as project}
				<li class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div class="md:col-span-2">
						<div class="flex flex-wrap items-center gap-2">
							<h2>{project.name}</h2>
							{#each project.technologies as tech}
								<Badge variant="secondary">
									<img src={`/icons/${tech}.svg`} alt={tech} class="h-3 w-3" />
								</Badge>
							{/each}
						</div>
						<p>{project.description}</p>
						{#if project.link}
							<a href={project.link.url} target="_blank" rel="noopener noreferrer"
								>{project.link.text}</a
							>
						{/if}
					</div>
					<div class="text-right">
						<p>{project.date}</p>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h1>Tools & Skills</h1>
		<div class="grid grid-rows-3 gap-2">
			{#each [{ label: 'Tools', value: cvData.toolsSection.tools, type: 'tools' }, { label: 'Skills', value: cvData.toolsSection.skills, type: 'text' }, { label: 'Languages', value: cvData.toolsSection.languages, type: 'text' }] as item}
				<div class="grid grid-cols-1 gap-2 md:grid-cols-5">
					<div class="md:col-span-1 md:text-right">
						<h2>{item.label}:</h2>
					</div>
					<div class="md:col-span-4">
						{#if item.type === 'tools'}
							<div class="flex flex-wrap gap-1">
								{#each item.value as tool}
									<Badge variant="outline">
										<img src={`/icons/${tool.toLowerCase()}.svg`} alt={tool} class="h-3 w-3" />
										<p>{tool}</p>
									</Badge>
								{/each}
							</div>
						{:else if item.type === 'text' && Array.isArray(item.value)}
							<p>{item.value.join(', ')}</p>
						{:else}
							<p>{item.value}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	section {
		margin-bottom: 2rem;
	}
	h1 {
		font-size: var(--text-lg);
		margin-bottom: 1rem;
	}

	h2 {
		font-weight: bold;
		font-size: var(--text-sm);
	}

	p {
		font-size: var(--text-sm);
		color: var(--color-muted-foreground);
	}
	a {
		font-size: var(--text-sm);
		color: var(--color-blue-300);
	}

	li {
		margin-bottom: 1rem;
	}
</style>
