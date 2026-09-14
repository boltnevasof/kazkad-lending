// Сообщить поисковикам об изменениях на сайте через IndexNow.
//
// Запрос уходит в Яндекс и в общий узел IndexNow, откуда его забирают Bing,
// Seznam и Naver. Bing важен отдельно: на его индексе в том числе работают
// ответы ChatGPT и Copilot.
//
// Запускать после выкладки, когда адреса уже открываются: поисковик сверяет
// ключ с файлом на живом сайте. Ключ лежит в public/<ключ>.txt.
//
//   npm run indexnow

import { SITE_URL, prerenderRoutes } from '../src/content/seo.js';

const KEY = 'a393dfa0d38f85d40fa3dcd2483ac940';
const ENDPOINTS = ['https://yandex.com/indexnow', 'https://api.indexnow.org/indexnow'];

const body = JSON.stringify({
  host: new URL(SITE_URL).host,
  key: KEY,
  keyLocation: `${SITE_URL}/${KEY}.txt`,
  urlList: prerenderRoutes().map((path) => `${SITE_URL}${path}`),
});

let failed = false;
for (const endpoint of ENDPOINTS) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
    // 200 и 202 — принято. 403 — ключ не совпал с файлом, 422 — адрес не с этого домена.
    const ok = res.status === 200 || res.status === 202;
    failed ||= !ok;
    console.log(`${ok ? 'принято' : 'ошибка '} ${res.status}  ${endpoint}`);
  } catch (err) {
    failed = true;
    console.log(`ошибка сети  ${endpoint}  ${err.message}`);
  }
}

process.exitCode = failed ? 1 : 0;
