import ArrowButton from '../components/ArrowButton.jsx';
import CaseArt from '../components/CaseArt.jsx';
import SplitText from '../components/SplitText.jsx';
import { CASES, FEATURED_CASES } from '../content/site.js';
import { useNav } from '../lib/nav.js';

// Кейсы рядами: слева название проекта, что мы сделали и цифры, справа экраны
// этого проекта с подписями. Ряд занимает почти весь экран, поэтому на главной
// их три, а весь список живёт на /cases.

const FILLS = {
  tint: 'var(--blue-050)',
  blue: 'var(--surface-accent)',
  grey: 'var(--ink-100)',
  subtle: 'var(--surface-subtle)',
};

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
          return (
            <article className="kz-case-row" key={item.slug} data-reveal="" style={{ '--kz-delay': `${i * 60}ms` }}>
              <div className="kz-case-row__side">
                <h3 className="kz-case-row__title">
                  <a href={path} onClick={open(path)}>
                    {item.title}
                  </a>
                </h3>
                <p className="kz-case-row__text">{item.summary}</p>
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
              </div>

              {/* Экраны проекта. В первом стоит наша схема кейса, остальные пока
                  залиты цветом: снимки подставим, когда упакуем кейсы. */}
              <div className="kz-case-row__screens">
                {item.screens.map((screen, si) => (
                  <a className="kz-screen" key={screen.title} href={path} onClick={open(path)}>
                    <span className="kz-screen__title">{screen.title}</span>{' '}
                    <span
                      className={`kz-screen__frame${screen.fill === 'blue' ? ' is-dark' : ''}`}
                      style={{ background: FILLS[screen.fill] || FILLS.tint }}
                    >
                      {si === 0 ? <CaseArt slug={item.slug} variant="wide" /> : null}
                    </span>
                  </a>
                ))}
              </div>
            </article>
          );
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
