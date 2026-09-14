// Заголовки, описания и разметка schema.org для каждой страницы.
//
// Один источник на сборку и на браузер. Пререндер вшивает это в HTML каждой
// страницы, а при переходах внутри сайта App подменяет title и описание из
// тех же функций, поэтому поисковик и посетитель видят одно и то же.

import { CASES, CONTACTS, findCase } from './site.js';

export const SITE_URL = 'https://kazkad.digital';

const OG_IMAGE = `${SITE_URL}/og/kazkad.png`;
const LOGO = `${SITE_URL}/og/logo.png`;
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

// Название читается как «каскад» и происходит от каскадной модели, по которой
// идут проекты. Поэтому варианты написания перечислены прямо в разметке: так
// поисковики и ИИ связывают запросы «каскад» и «kaskad» именно с этой студией.
const ALTERNATE_NAMES = ['Казкад', 'Kaskad', 'Каскад'];

const TELEPHONE = CONTACTS.phoneHref.replace('tel:', '');

const ORGANIZATION = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'Kazkad',
  alternateName: ALTERNATE_NAMES,
  description:
    'Студия веб-разработки из Казани. Запускает сайты, веб-платформы, личные кабинеты и Telegram-ботов за 3 недели после подписания договора по каскадной модели.',
  url: `${SITE_URL}/`,
  logo: LOGO,
  image: OG_IMAGE,
  email: CONTACTS.email,
  telephone: TELEPHONE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACTS.street,
    addressLocality: CONTACTS.city,
    addressRegion: 'Республика Татарстан',
    addressCountry: 'RU',
  },
  areaServed: { '@type': 'Country', name: 'Россия' },
  knowsAbout: [
    'каскадная модель разработки',
    'разработка сайтов',
    'веб-платформы',
    'личные кабинеты',
    'Telegram-боты',
    'Python',
    'React',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: TELEPHONE,
    email: CONTACTS.email,
    availableLanguage: 'ru',
  },
};

// У сайта альтернативных имён меньше, чем у компании: Google может показать
// одно из них вместо названия в выдаче, а «Каскад» там путал бы.
const WEBSITE = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: `${SITE_URL}/`,
  name: 'Kazkad',
  alternateName: ['Казкад', 'Kaskad'],
  inLanguage: 'ru-RU',
  publisher: { '@id': ORG_ID },
};

const absolute = (path) => `${SITE_URL}${path}`;

function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absolute(it.path),
    })),
  };
}

function build({ path, title, description, type = 'WebPage', mainEntity, graph = [], preload = [] }) {
  const canonical = absolute(path);
  const webpage = {
    '@type': type,
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: 'ru-RU',
    isPartOf: { '@id': SITE_ID },
    ...(mainEntity ? { mainEntity: { '@id': mainEntity } } : { about: { '@id': ORG_ID } }),
  };

  return {
    title,
    description,
    canonical,
    noindex: false,
    preload,
    jsonLd: { '@context': 'https://schema.org', '@graph': [ORGANIZATION, WEBSITE, webpage, ...graph] },
  };
}

const HOME = {
  path: '/',
  title: 'Kazkad | Каскадная разработка сайтов и веб-сервисов за 3 недели',
  description:
    'Студия Kazkad из Казани запускает сайты, веб-платформы и Telegram-ботов за 3 недели после подписания договора. Работаем по каскадной модели, а если не успели по нашей вине, возвращаем половину суммы.',
  // Звезда за заголовком героя — самый крупный элемент первого экрана.
  // Подгружаем её вместе с HTML, не дожидаясь скриптов.
  preload: ['/assets/star-glow.webp'],
};

const CASES_PAGE = {
  path: '/cases',
  type: 'CollectionPage',
  title: 'Кейсы Kazkad | Сайты, платформы и Telegram-боты',
  description:
    'Сайты, веб-платформы, личные кабинеты и Telegram-боты, которые запустила студия Kazkad. По каждому проекту видно задачу, решение и результат.',
};

const PRIVACY_PAGE = {
  path: '/privacy',
  title: 'Политика конфиденциальности | Kazkad',
  description: 'Какие данные получает студия Kazkad, когда вы пишете нам, зачем они нужны и сколько мы их храним.',
};

const NOT_FOUND = {
  title: 'Страница не найдена | Kazkad',
  description: 'Такой страницы на сайте студии Kazkad нет.',
  canonical: null,
  noindex: true,
  preload: [],
  jsonLd: null,
};

function casesPage() {
  return build({
    ...CASES_PAGE,
    graph: [
      breadcrumbs([
        { name: 'Главная', path: '/' },
        { name: 'Кейсы', path: '/cases' },
      ]),
      {
        '@type': 'ItemList',
        itemListElement: CASES.items.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.title,
          url: absolute(`/cases/${c.slug}`),
        })),
      },
    ],
  });
}

function casePage(item) {
  const path = `/cases/${item.slug}`;
  const workId = `${absolute(path)}#case`;
  const work = {
    '@type': 'CreativeWork',
    '@id': workId,
    name: item.title,
    headline: item.title,
    description: item.summary,
    abstract: item.result,
    genre: item.group,
    inLanguage: 'ru-RU',
    url: absolute(path),
    creator: { '@id': ORG_ID },
    ...(item.client
      ? { about: { '@type': 'Organization', name: item.client, ...(item.url ? { url: item.url } : {}) } }
      : {}),
  };

  return build({
    path,
    title: `${item.title} | Кейс Kazkad`,
    description: `${item.summary} Кейс студии Kazkad с задачей, решением и результатом.`,
    mainEntity: workId,
    graph: [
      work,
      breadcrumbs([
        { name: 'Главная', path: '/' },
        { name: 'Кейсы', path: '/cases' },
        { name: item.client || item.title, path },
      ]),
    ],
  });
}

export function seoFor(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (path === '/') return build(HOME);
  if (path === '/cases') return casesPage();
  if (path === '/privacy') return build(PRIVACY_PAGE);

  const match = path.match(/^\/cases\/([^/]+)$/);
  const item = match ? findCase(match[1]) : null;
  if (item) return casePage(item);

  return NOT_FOUND;
}

// Адреса, которые собираются в готовый HTML и попадают в карту сайта.
export function prerenderRoutes() {
  return ['/', '/cases', ...CASES.items.map((c) => `/cases/${c.slug}`), '/privacy'];
}

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Теги head одной строкой для пререндера. В браузерную сборку не попадает:
// клиент зовёт только seoFor.
export function headHtml(seo) {
  const tags = [
    `<title>${escapeAttr(seo.title)}</title>`,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`,
    seo.noindex ? '<meta name="robots" content="noindex" />' : null,
    seo.canonical ? `<link rel="canonical" href="${escapeAttr(seo.canonical)}" />` : null,
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="ru_RU" />',
    '<meta property="og:site_name" content="Kazkad" />',
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`,
    seo.canonical ? `<meta property="og:url" content="${escapeAttr(seo.canonical)}" />` : null,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    ...seo.preload.map(
      (href) => `<link rel="preload" as="image" type="image/webp" href="${escapeAttr(href)}" fetchpriority="high" />`,
    ),
    // < внутри JSON экранируется: строка «</script>» в тексте кейса закрыла бы тег.
    seo.jsonLd
      ? `<script type="application/ld+json">${JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')}</script>`
      : null,
  ];
  return tags.filter(Boolean).join('\n    ');
}
