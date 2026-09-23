import { useRef } from 'react';
import { Icon } from '../design-system/index.js';
import ArrowButton from '../components/ArrowButton.jsx';
import CaseArt from '../components/CaseArt.jsx';
import Shot from '../components/Shot.jsx';
import SplitText from '../components/SplitText.jsx';
import { CASES, FEATURED_CASES } from '../content/site.js';
import { useNav } from '../lib/nav.js';

// Кейсы рядами: слева название проекта, что мы сделали и цифры, справа экраны
// этого проекта с подписями. Ряд занимает почти весь экран, поэтому на главной
// их три, а весь список живёт на /cases.

// Адрес проекта показываем без протокола и без www: в ряду важна не ссылка,
// а то, что проект живой и его можно открыть.
function hostOf(url) {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}

const FILLS = {
  tint: 'var(--blue-050)',
  blue: 'var(--surface-accent)',
  grey: 'var(--ink-100)',
  subtle: 'var(--surface-subtle)',
};

// Экраны проекта. В первом стоит наша схема кейса, остальные пока залиты
// цветом: снимки подставим, когда упакуем кейсы.
function Screens({ item, path, onOpen, onEnter, onLeave }) {
  return (
    <div
      className="kz-case-row__screens"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={(e) => {
        // Подпись обещает переход со всей площади, поэтому зазоры между
        // кадрами тоже ведут в кейс. По самим кадрам отрабатывает ссылка.
        if (!e.target.closest('.kz-screen')) onOpen(e);
      }}
    >
      {item.screens.map((screen, si) => (
        <a
          className="kz-screen"
          key={screen.title}
          href={path}
          onClick={onOpen}
          data-reveal=""
          style={{ '--kz-delay': `${120 + si * 90}ms` }}
        >
          <span className="kz-screen__title">{screen.title}</span>{' '}
          {screen.shot ? (
            /* Настоящий снимок в кадре. Кадр квадратный, как и клетка. */
            <span className="kz-screen__frame">
              <Shot preset={screen.preset} src={screen.shot} style={screen.frame} />
            </span>
          ) : (
            <span
              className={`kz-screen__frame${screen.fill === 'blue' ? ' is-dark' : ''}`}
              style={{ background: FILLS[screen.fill] || FILLS.tint }}
            >
              {si === 0 ? <CaseArt slug={item.slug} variant="wide" /> : null}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

// Ряд кейса. Над снимками и над названием проекта родная стрелка прячется,
// вместо неё за мышью едет подпись «смотреть кейс». Она живёт на уровне ряда,
// а не внутри снимков: иначе над названием её было бы не показать. Позицию
// пишем прямо в стиль узла, а не в состояние: перерисовывать дерево на каждое
// движение мыши незачем.
function Row({ item, path, onOpen, delay }) {
  const row = useRef(null);
  const cursor = useRef(null);

  const place = (e, instant) => {
    const box = row.current;
    const label = cursor.current;
    if (!box || !label) return;
    const rect = box.getBoundingClientRect();
    // На входе подпись переносится без анимации: иначе она проезжала через
    // весь ряд с того места, где её оставили в прошлый раз.
    if (instant) label.style.transition = 'none';
    label.style.transform = `translate(${Math.round(e.clientX - rect.left)}px, ${Math.round(e.clientY - rect.top)}px)`;
    if (instant) {
      void label.offsetWidth;
      label.style.transition = '';
    }
  };

  const enter = (e) => {
    place(e, true);
    if (row.current) row.current.classList.add('is-hover');
  };

  const leave = () => {
    if (row.current) row.current.classList.remove('is-hover');
  };

  return (
    <article
      className="kz-case-row"
      ref={row}
      data-reveal=""
      style={{ '--kz-delay': `${delay}ms` }}
      onMouseMove={(e) => place(e, false)}
    >
      <div className="kz-case-row__side">
        <h3 className="kz-case-row__title" onMouseEnter={enter} onMouseLeave={leave}>
          <a href={path} onClick={onOpen}>
            {item.name}
          </a>
        </h3>
        <p className="kz-case-row__text">{item.summary}</p>{' '}
        {item.metrics && item.metrics.length > 0 ? (
          <div className="kz-case-row__stats">
            {item.metrics.slice(0, 2).map((metric) => (
              <span key={metric.caption}>
                <b>{metric.value}</b>{' '}
                <span>{metric.caption}</span>
              </span>
            ))}
          </div>
        ) : null}
        <span className="kz-case-row__actions">
          <ArrowButton variant="secondary" size="sm" href={path} onClick={onOpen}>
            смотреть кейс
          </ArrowButton>{' '}
          {item.url ? (
            <a className="kz-case-row__site" href={item.url} target="_blank" rel="noopener noreferrer">
              {hostOf(item.url)}
              <Icon name="arrow-up-right" size={14} />
            </a>
          ) : null}
        </span>
      </div>

      <Screens item={item} path={path} onOpen={onOpen} onEnter={enter} onLeave={leave} />

      <span className="kz-screens__cursor" ref={cursor} aria-hidden="true">
        смотреть кейс
      </span>
    </article>
  );
}

export default function Cases() {
  const { goPath } = useNav();
  const open = (path) => (e) => {
    e.preventDefault();
    goPath(path);
  };

  return (
    <section id="cases" className="kz-cases">
      <div className="kz-cases__wrap">
        <div className="kz-cases__head">
          <span className="kz-aside kz-from-left" data-reveal="">
            кейсы
          </span>{' '}
          <div className="kz-cases__headline">
            <SplitText as="h2" text={CASES.title} className="kz-title" />{' '}
            <span className="kz-cases__count" data-reveal="" style={{ '--kz-delay': '260ms' }}>
              {FEATURED_CASES.length} из {CASES.items.length} проектов
            </span>
          </div>
        </div>

        {FEATURED_CASES.map((item, i) => {
          const path = `/cases/${item.slug}`;
          return <Row item={item} path={path} onOpen={open(path)} delay={i * 60} key={item.slug} />;
        })}

        <div className="kz-cases__all" data-reveal="">
          <span className="kz-cases__total">
            <b>{CASES.items.length}</b>{' '}
            <span>проектов запущено</span>
          </span>{' '}
          <ArrowButton href="/cases" onClick={open('/cases')}>
            {CASES.allLabel}
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
