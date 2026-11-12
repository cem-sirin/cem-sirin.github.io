// Built into /sitemap.xml at build time. Blog posts are picked up automatically.
export const prerender = true;

const SITE = 'https://cem-sirin.github.io';

const posts = import.meta.glob<Record<string, any>>('../blog/**/+page.svx', {
	eager: true,
	import: 'metadata'
});

export function GET() {
	const pages = [
		{ path: '/' },
		{ path: '/cv' },
		{ path: '/blog' },
		...Object.entries(posts).map(([file, meta]) => ({
			path: `/blog/${file.split('/').at(-2)}`,
			lastmod: meta?.date ? String(meta.date).slice(0, 10) : undefined
		}))
	];

	const urls = pages
		.map(
			({ path, lastmod }) =>
				`\t<url>\n\t\t<loc>${SITE}${path}</loc>${lastmod ? `\n\t\t<lastmod>${lastmod}</lastmod>` : ''}\n\t</url>`
		)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
}
