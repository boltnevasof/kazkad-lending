// Генерация sitemap.xml и robots.txt перед сборкой.
//
// Список адресов берётся из тех же данных, что и сам сайт, поэтому новый кейс
// попадает в карту сайта сам. Руками этот файл править не нужно.

import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const site = (process.env.SITE_URL || 'https://kazkad.digital').replace(/\/+$/, '');

const { CASES } = await import(resolve(root, 'src/content/site.js'));

// Приоритеты расставлены по смыслу: главная важнее списка кейсов,
// список важнее отдельного кейса, политика нужна только для полноты.
const pages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/cases', priority: '0.8', changefreq: 'monthly' },
  ...CASES.items.map((c) => ({ path: `/cases/${c.slug}`, priority: '0.6', changefreq: 'yearly' })),
  { path: '/privacy', priority: '0.2', changefreq: 'yearly' },
];

const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${site}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
Host: ${site.replace(/^https?:\/\//, '')}
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap);
writeFileSync(resolve(root, 'public/robots.txt'), robots);

console.log(`sitemap.xml — ${pages.length} адресов, домен ${site}`);
