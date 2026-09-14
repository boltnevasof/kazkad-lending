// Пререндер: каждая страница сохраняется готовым HTML.
//
// Поисковые и ИИ-краулеры в большинстве своём не выполняют JavaScript и видят
// только исходный HTML. Раньше это был пустой <div id="root">. Теперь при сборке
// каждая страница рендерится заранее и кладётся отдельным файлом со своими
// title, описанием и разметкой schema.org, а в браузере React подхватывает
// готовую разметку, не рисуя её заново.
//
// Запускается после двух сборок vite: клиентской (dist) и серверной (dist-ssr).

import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

// useLayoutEffect на сервере не выполняется, и React 18 пишет об этом на каждой
// странице. Для статической сборки это ожидаемо, шум в логе не нужен.
const consoleError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('useLayoutEffect does nothing on the server')) return;
  consoleError(...args);
};

const { render, seoFor, headHtml, prerenderRoutes } = await import(
  pathToFileURL(resolve(ssrDir, 'entry-server.js')).href
);

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
const HEAD = /<!--kz-head-->[\s\S]*?<!--\/kz-head-->/;
const APP = '<div id="root"><!--kz-app--></div>';

if (!HEAD.test(template) || !template.includes(APP)) {
  throw new Error('В dist/index.html нет меток <!--kz-head--> и <!--kz-app-->, пререндеру некуда вставлять разметку');
}

function writePage(url, file) {
  // data-prerendered говорит клиенту, для какого адреса снята разметка:
  // совпал адрес, значит можно подхватить её без перерисовки.
  const html = template
    .replace(HEAD, headHtml(seoFor(url)))
    .replace(APP, `<div id="root" data-prerendered="${url}">${render(url)}</div>`);

  const out = resolve(dist, file);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`  ${url.padEnd(24)} dist/${file}  ${Math.round(Buffer.byteLength(html) / 1024)} КБ`);
}

console.log('Пререндер страниц');
for (const url of prerenderRoutes()) {
  writePage(url, url === '/' ? 'index.html' : `${url.slice(1)}/index.html`);
}

// Страница для любых адресов без файла. nginx отдаёт её с кодом 404.
writePage('/404', '404.html');

rmSync(ssrDir, { recursive: true, force: true });
