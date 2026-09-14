// Вход для пререндера: страница рендерится в строку на этапе сборки.
// Собирается отдельно (vite build --ssr) и нужен только scripts/prerender.mjs.

import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

export { headHtml, prerenderRoutes, seoFor } from './content/seo.js';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
