// Генерация sitemap.xml и robots.txt перед сборкой.
//
// Список адресов берётся из src/content/seo.js, того же, по которому идёт
// пререндер, поэтому новый кейс попадает и в карту сайта, и в готовый HTML сам.
// Руками эти файлы править не нужно.

import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { SITE_URL, prerenderRoutes } = await import(pathToFileURL(resolve(root, 'src/content/seo.js')).href);

const today = new Date().toISOString().slice(0, 10);

// Дата последнего коммита, который трогал файлы страницы. Дата сборки на всех
// адресах подряд говорила бы поисковику, что меняется всё и всегда, и он
// перестал бы верить полю lastmod. Без git, как в docker-сборке, берём сегодня.
function lastmod(...paths) {
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...paths], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return date || today;
  } catch {
    return today;
  }
}

const casesDate = lastmod('src/content/site.js');

// Приоритеты по смыслу: главная важнее списка кейсов, список важнее
// отдельного кейса, политика нужна только для полноты.
function entry(path) {
  if (path === '/') {
    return { path, priority: '1.0', changefreq: 'monthly', lastmod: lastmod('src/content/site.js', 'src/sections') };
  }
  if (path === '/kaskadnaya-razrabotka') {
    return { path, priority: '0.9', changefreq: 'monthly', lastmod: lastmod('src/content/method.js') };
  }
  if (path === '/cases') return { path, priority: '0.8', changefreq: 'monthly', lastmod: casesDate };
  if (path === '/trackers') {
    return { path, priority: '0.5', changefreq: 'monthly', lastmod: lastmod('src/content/trackers.js') };
  }
  if (path === '/privacy') {
    return { path, priority: '0.2', changefreq: 'yearly', lastmod: lastmod('src/content/legal.js') };
  }
  return { path, priority: '0.6', changefreq: 'yearly', lastmod: casesDate };
}

const pages = prerenderRoutes().map(entry);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

// Боты ИИ-поиска перечислены явно, хотя общее правило их и так пускает:
// явная группа не даст случайно закрыть им доступ будущей правкой общего
// правила. YandexAdditional решает, можно ли брать страницы в нейроответы
// Алисы. Директиву Host Яндекс не читает с 2018 года, главное зеркало
// задаёт редирект 301 в nginx.
const AI_AGENTS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'YandexAdditional',
];

const robots = `User-agent: *
Allow: /

${AI_AGENTS.map((agent) => `User-agent: ${agent}`).join('\n')}
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap);
writeFileSync(resolve(root, 'public/robots.txt'), robots);

console.log(`sitemap.xml — ${pages.length} адресов, домен ${SITE_URL}`);
