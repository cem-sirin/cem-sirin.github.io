<script lang="ts">
	import { cvData } from '$lib/data/cv';
</script>

<svelte:head>
	<title>CV | Cem Sirin</title>
	<meta
		name="description"
		content="Curriculum vitae for Cem Sirin, PhD student in Data Science at Sapienza University of Rome."
	/>
	<link rel="canonical" href="https://cem-sirin.github.io/cv" />
</svelte:head>

<div>
	<section>
		<h1>Education</h1>
		<ul>
			{#each cvData.education as edu}
				<li>
					<h2>{edu.institution}</h2>
					<div class="education-items">
						{#each edu.items as item}
							<div class="education-item">
								<div class="education-copy">
									<p>
										{item.degree}{#if item.details}, {item.details}{/if}
									</p>
								</div>
								<p class="education-date">{item.startDate} - {item.endDate}</p>
							</div>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h1>Publications</h1>
		<ul>
			{#each cvData.publications as publication}
				<li class="dated-item">
					<div>
						<h2>{publication.title}</h2>
						<p>{publication.venue}</p>
						{#if publication.link}
							<a href={publication.link.url} target="_blank" rel="noopener noreferrer">
								{publication.link.text}
							</a>
						{/if}
					</div>
					<p class="item-date">{publication.date}</p>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h1>Research & Teaching</h1>
		<ul>
			{#each cvData.experience as exp}
				<li class="dated-item">
					<div>
						<h2>{exp.title}</h2>
						<p>{exp.description}</p>
						{#if exp.link}
							<a href={exp.link.url} target="_blank" rel="noopener noreferrer">{exp.link.text}</a>
						{/if}
					</div>
					<div class="item-date">
						<p>from {exp.startDate}</p>
						<p>to {exp.endDate}</p>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h1>Selected Projects</h1>
		<ul>
			{#each cvData.projects as project}
				<li class="dated-item">
					<div>
						<h2>{project.name}</h2>
						<p>{project.description}</p>
						{#if project.link}
							<a href={project.link.url} target="_blank" rel="noopener noreferrer"
								>{project.link.text}</a
							>
						{/if}
					</div>
					<p class="item-date">{project.date}</p>
				</li>
			{/each}
		</ul>
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

	.education-items {
		display: grid;
		gap: 0.15rem;
	}

	.education-item {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 1rem;
	}

	.education-copy {
		min-width: 0;
	}

	.education-date {
		white-space: nowrap;
		text-align: right;
	}

	.dated-item {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 1rem;
	}

	.item-date {
		color: var(--color-muted-foreground);
		font-size: var(--text-sm);
		text-align: right;
		white-space: nowrap;
	}

	a {
		font-size: var(--text-sm);
		color: var(--color-blue-600);
	}

	:global(.dark) a {
		color: var(--color-blue-300);
	}

	li {
		margin-bottom: 1rem;
	}

	@media (max-width: 520px) {
		.education-item,
		.dated-item {
			grid-template-columns: 1fr;
			gap: 0.1rem;
		}

		.education-date,
		.item-date {
			text-align: left;
		}
	}
</style>
