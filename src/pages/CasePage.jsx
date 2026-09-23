import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '../design-system/index.js';
import ArrowButton from '../components/ArrowButton.jsx';
import CaseArt from '../components/CaseArt.jsx';
import Shot from '../components/Shot.jsx';
import SplitText from '../components/SplitText.jsx';
import Footer from '../sections/Footer.jsx';
import { CONTACTS, findCase, neighbourCases } from '../content/site.js';
import { useNav } from '../lib/nav.js';

const FILLS = {
  grey: 'var(--ink-500)',
  tint: 'var(--surface-tint)',
  blue: 'var(--surface-accent)',
  subtle: 'var(--surface-subtle)',
};

// Страница кейса намеренно короткая: три строки о задаче, решении и результате,
// цифры и переход к соседнему проекту. Разделяют блоки волосяные линейки,
// а не карточки — так требует дизайн-система.
const BLOCKS = [
  { key: 'task', label: 'задача' },
  { key: 'solution', label: 'решение' },
  { key: 'result', label: 'результат' },
];

// Строка метаданных собирается из того, что заполнено у кейса.
function metaOf(item) {
  return [
    { label: 'срок запуска', value: item.launch },
    { label: 'направление', value: item.group },
    { label: 'стек', value: item.stack && item.stack.join(' · ') },
  ].filter((m) => m.value);
}

function hostOf(url) {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export default function CasePage() {
  const { slug } = useParams();
  const { goSection, goPath } = useNav();
  const item = findCase(slug);
  const { prev, next } = neighbourCases(slug);
  const meta = item ? metaOf(item) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
      <>
        <section className="kz-page">
          <div className="kz-container kz-measure">
            <h1 className="kz-title">Такого кейса нет</h1>
            <p className="kz-lead" style={{ marginTop: 16 }}>
              Возможно, ссылка устарела. Посмотрите остальные проекты.
            </p>
            <div style={{ marginTop: 32 }}>
              <ArrowButton
                href="/cases"
                onClick={(e) => {
                  e.preventDefault();
                  goPath('/cases');
                }}
              >
                все проекты
              </ArrowButton>
            </div>
          </div>
        </section>
        <Footer onNavigate={goSection} />
      </>
    );
  }

  return (
    <>
      <article className="kz-page">
        <div className="kz-container">
          <a
            className="kz-back"
            href="/cases"
            data-reveal=""
            onClick={(e) => {
              e.preventDefault();
              goPath('/cases');
            }}
          >
            <Icon name="arrow-left" size={16} />
            все проекты
          </a>

          <div className="kz-split-grid" style={{ marginTop: 32 }}>
            <span className="kz-aside kz-from-left" data-reveal="">
              {[item.client, item.year].filter(Boolean).join(' · ')}
            </span>
            <div>
              <SplitText as="h1" text={item.title} className="kz-title-lg" />
              <p className="kz-lead" data-reveal="" style={{ marginTop: 20, maxWidth: 620, '--kz-delay': '260ms' }}>
                {item.summary}
              </p>
            </div>
          </div>

          {item.media ? (
            /* Настоящий снимок проекта в кадре на широком поле. */
            <div className="kz-case-media is-shot" data-reveal="">
              <Shot preset={item.media.preset} src={item.media.src} phone={item.media.phone} style={item.media.frame} />
            </div>
          ) : (
            <div
              className={`kz-case-media${item.fill === 'blue' || item.fill === 'grey' ? ' is-dark' : ''}`}
              data-reveal=""
              style={{ background: FILLS[item.fill] || FILLS.tint }}
            >
              {item.image ? <img src={item.image} alt="" /> : <CaseArt slug={item.slug} variant="wide" />}
            </div>
          )}

          {/* Показываем только заполненные поля: пустой «срок запуска» хуже,
              чем его отсутствие. */}
          {/* Пробелы между подписью и значением во флексе не видны, но без них
              парсер HTML читал «направлениеплатформы» и «+37%вовлечённость».
              Цифры кейсов ИИ цитирует охотнее всего, склеенными их не поймать. */}
          <div className="kz-case-meta" data-reveal="">
            {meta.map((m) => (
              <span key={m.label}>
                <span className="kz-eyebrow">{m.label}</span>{' '}
                <b>{m.value}</b>{' '}
              </span>
            ))}
            {item.url && (
              <span>
                <span className="kz-eyebrow">сайт</span>{' '}
                <a className="kz-case-link" href={item.url} target="_blank" rel="noopener noreferrer">
                  {hostOf(item.url)}
                  <Icon name="arrow-up-right" size={15} />
                </a>
              </span>
            )}
            {!item.url && item.nda && (
              <span>
                <span className="kz-eyebrow">доступ</span>{' '}
                <b>под NDA</b>
              </span>
            )}
          </div>

          {BLOCKS.map((b, i) => (
            <div className="kz-case-row kz-split-grid" key={b.key} data-reveal="" style={{ '--kz-delay': `${i * 80}ms` }}>
              <span className="kz-eyebrow">{b.label}</span>
              <p className="kz-measure" style={{ font: 'var(--type-body-lg)', color: 'var(--text-body)' }}>
                {item[b.key]}
              </p>
            </div>
          ))}

          {item.metrics && item.metrics.length > 0 && (
            <div className="kz-case-metrics">
              {item.metrics.map((m, i) => (
                <div key={m.caption} data-reveal="" style={{ '--kz-delay': `${i * 90}ms` }}>
                  <b>{m.value}</b>{' '}
                  <span>{m.caption}</span>
                </div>
              ))}
            </div>
          )}

          <div className="kz-case-cta" data-reveal="">
            <p className="kz-title kz-measure">Расскажите задачу — назовём срок и стоимость до договора</p>
            <ArrowButton size="lg" href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">
              {CONTACTS.telegramLabel}
            </ArrowButton>
          </div>

          <nav className="kz-case-nav">
            {[
              { item: prev, label: 'предыдущий', icon: 'arrow-left' },
              { item: next, label: 'следующий', icon: 'arrow-right' },
            ].map((n) => (
              <a
                key={n.label}
                className={`kz-case-nav__link is-${n.icon === 'arrow-left' ? 'prev' : 'next'}`}
                href={`/cases/${n.item.slug}`}
                data-reveal=""
                onClick={(e) => {
                  e.preventDefault();
                  goPath(`/cases/${n.item.slug}`);
                }}
              >
                <span className="kz-eyebrow">{n.label}</span>{' '}
                <span className="kz-case-nav__title">{n.item.title}</span>{' '}
              </a>
            ))}
          </nav>
        </div>
      </article>

      <Footer onNavigate={goSection} />
    </>
  );
}
