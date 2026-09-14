import ArrowButton from '../components/ArrowButton.jsx';
import CaseTile from '../components/CaseTile.jsx';
import SplitText from '../components/SplitText.jsx';
import { CASES, FEATURED_CASES } from '../content/site.js';
import { useNav } from '../lib/nav.js';

// Фильтры по направлениям живут на /cases — на главной ряд идёт одним потоком.

export default function Cases() {
  const { goPath } = useNav();

  return (
    <section id="cases" className="kz-section">
      <div className="kz-container">
        <div className="kz-cases-head">
          <h2 className="kz-title">
            <SplitText text={CASES.title} />
            {/* Пробел внутри счётчика, а не перед ним: так он набран мелким
                кеглем счётчика и не раздвигает строку, а парсер HTML больше
                не склеивает «запустили» с «кейсы». */}
            <span className="kz-cases-count" data-reveal="" style={{ '--kz-delay': '320ms' }}>
              {' '}кейсы {CASES.items.length}
            </span>
          </h2>
          <span data-reveal="" style={{ '--kz-delay': '380ms' }}>
            <ArrowButton
              variant="ghost"
              href="/cases"
              onClick={(e) => {
                e.preventDefault();
                goPath('/cases');
              }}
            >
              {CASES.allLabel}
            </ArrowButton>
          </span>
        </div>
      </div>

      {/* Лента во всю ширину экрана: если сдвинуть её саму, плитки при прокрутке
          обрезаются по левой границе контейнера. Отступ до первой плитки даёт
          распорка внутри ряда, поэтому уезжающая плитка уходит за край экрана.
          data-reset-scroll: при переходе на секцию ряд открывается с начала. */}
      <div className="kz-cases-scroller" data-reset-scroll="">
        <div className="kz-cases-row">
          <span className="kz-cases-lead" aria-hidden="true" />
          {FEATURED_CASES.map((c, i) => (
            <div key={c.slug} className="kz-case-slide">
              <CaseTile
                slug={c.slug}
                delay={i * 90}
                title={c.title}
                image={c.image}
                fill={c.fill}
                href={`/cases/${c.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  goPath(`/cases/${c.slug}`);
                }}
              />
            </div>
          ))}
          <span className="kz-cases-tail" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
