<script lang="ts">
	import { ExternalLink, FileText, Newspaper } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';

	const siteUrl = 'https://cem-sirin.github.io';
	const publicationUrl = 'https://icml.cc/virtual/2026/poster/65182';
	const publicationAuthors = [
		'Riccardo Colini Baldeschi',
		'Simone Di Gregorio',
		'Simone Fioravanti',
		'Federico Fusco',
		'Ido Guy',
		'Daniel Haimovich',
		'Stefano Leonardi',
		'Fridolin Linder',
		'Lorenzo Perini',
		'Matteo Russo',
		'Cem Sirin',
		'Niek Tax'
	];
	const publicationAuthorsBeforeMe = publicationAuthors.slice(0, -2).join(', ');
	const publicationAuthorsAfterMe = publicationAuthors.at(-1);
	const avatarSrc = '/images/cem-avatar.jpg';
	const avatarUrl = `${siteUrl}${avatarSrc}`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Cem Sirin',
		alternateName: 'Cem Şirin',
		url: siteUrl,
		image: avatarUrl,
		jobTitle: 'PhD student in Data Science',
		affiliation: {
			'@type': 'CollegeOrUniversity',
			name: 'Sapienza University of Rome'
		},
		advisor: {
			'@type': 'Person',
			name: 'Stefano Leonardi',
			url: 'https://sites.google.com/a/uniroma1.it/stefanoleonardi-eng/home'
		},
		sameAs: ['https://github.com/cem-sirin', 'https://www.linkedin.com/in/cem-sirin/'],
		knowsAbout: [
			'Algorithmic Game Theory',
			'Machine Learning',
			'Algorithmic Decision Making',
			'Econometrics',
			'Matching'
		],
		subjectOf: [
			{
				'@type': 'ScholarlyArticle',
				name: 'Multicalibration Yields Better Matchings',
				url: publicationUrl,
				author: publicationAuthors.map((name) => ({
					'@type': 'Person',
					name
				})),
				isPartOf: {
					'@type': 'PublicationVolume',
					name: 'ICML 2026'
				}
			}
		]
	};
</script>

<svelte:head>
	<title>Cem Sirin | PhD Student in Data Science</title>
	<meta
		name="description"
		content="Cem Sirin is a PhD student at Sapienza University of Rome advised by Stefano Leonardi, working around algorithmic game theory, machine learning, matching, and econometrics."
	/>
	<link rel="canonical" href={siteUrl} />
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="Cem Sirin | PhD Student in Data Science" />
	<meta
		property="og:description"
		content="Personal website of Cem Sirin, PhD student at Sapienza University of Rome advised by Stefano Leonardi."
	/>
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={avatarUrl} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:image" content={avatarUrl} />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`}
</svelte:head>

<main class="flex flex-col gap-12 py-10 md:py-16">
	<section class="space-y-6">
		<div class="flex items-center gap-3">
			<img
				src={avatarSrc}
				alt="Cem Şirin"
				class="size-11 rounded-full border bg-muted object-cover"
				width="44"
				height="44"
			/>
			<div>
				<p class="text-sm font-semibold">cem</p>
				<p class="text-xs text-muted-foreground">posted from roma</p>
			</div>
		</div>

		<div class="space-y-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
			<p>
				I am a PhD student at Sapienza University of Rome, advised by
				<a
					href="https://sites.google.com/a/uniroma1.it/stefanoleonardi-eng/home"
					target="_blank"
					rel="noopener noreferrer"
					class="text-foreground underline underline-offset-4">Stefano Leonardi</a
				>.
			</p>
			<p>
				My research interests sit around algorithmic game theory, machine learning, matching,
				econometrics, and the design of decision systems that behave sensibly when incentives and
				uncertainty get tangled together.
			</p>
		</div>

		<div class="flex flex-wrap gap-3 pt-1">
			<Button href="/cv" variant="default">
				<FileText class="h-4 w-4" />
				CV
			</Button>
			<Button href="/blog" variant="outline">
				<Newspaper class="h-4 w-4" />
				Blog
			</Button>
		</div>
	</section>

	<section class="space-y-4 border-t pt-8">
		<h2 class="text-sm font-semibold tracking-[0.16em] text-muted-foreground uppercase">
			Publication
		</h2>
		<article class="space-y-2">
			<p class="text-xs text-muted-foreground">ICML 2026</p>
			<h3 class="text-lg leading-snug font-semibold">Multicalibration Yields Better Matchings</h3>
			<p class="text-sm leading-6 text-muted-foreground">
				{publicationAuthorsBeforeMe}{', '}<span class="text-foreground">Cem Sirin</span
				>{', and '}{publicationAuthorsAfterMe}
			</p>
			<a
				href={publicationUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-300"
			>
				ICML poster page
				<ExternalLink class="h-4 w-4" />
			</a>
		</article>
	</section>
</main>
