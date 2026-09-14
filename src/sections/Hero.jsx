import { GlowBackdrop, Icon } from '../design-system/index.js';
import ArrowButton from '../components/ArrowButton.jsx';
import CaseTile from '../components/CaseTile.jsx';
import SplitText, { splitDuration } from '../components/SplitText.jsx';
import { CASES, HERO, HERO_CASES } from '../content/site.js';
import { useNav } from '../lib/nav.js';

// Строки заголовка стартуют одна за другой: следующая ждёт, пока доедет предыдущая.
const LINE_DELAYS = HERO.headline.reduce(
  (acc, line) => [...acc, acc[acc.length - 1] + splitDuration(line) * 0.55],
  [120],
);

export default function Hero({ onEnquiry }) {
  const { goPath } = useNav();

  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-page)' }}>
      {/* Concept board places the star behind the headline's left edge, not in a corner.
          Обёртка повторяет ширину контейнера: в процентах от вьюпорта звезда
          уезжала влево от заголовка тем сильнее, чем шире монитор. */}
      <span className="kz-hero-glow-anchor" aria-hidden="true">
        {/* Самый крупный элемент первого экрана, поэтому грузится в приоритете. */}
        <GlowBackdrop
          className="kz-hero-glow"
          size={460}
          opacity={0.55}
          fetchpriority="high"
          style={{ top: -40, left: '13%', right: 'auto', bottom: 'auto' }}
        />
      </span>
      <div className="kz-container kz-hero-body">
        <div className="kz-split-grid">
          <span className="kz-aside kz-from-left" data-reveal="">
            {HERO.aside}
          </span>
          <div>
            {/* Пробелы между строками нужны тем, кто читает HTML без стилей.
                Строки блочные, и в браузере пробел не виден, а без него
                поисковик склеивал «продуктза» и «неделипосле». */}
            <h1 className="kz-display">
              <SplitText text={HERO.headline[0]} className="kz-line" delay={LINE_DELAYS[0]} />{' '}
              <SplitText text={HERO.headline[1]} className="kz-display-indent" delay={LINE_DELAYS[1]} />{' '}
              <SplitText text={HERO.headline[2]} className="kz-line" delay={LINE_DELAYS[2]} />
            </h1>
            <div className="kz-hero-lead-row">
              <p className="kz-hero-lead" data-reveal="" style={{ '--kz-delay': '520ms' }}>
                {HERO.lead}
              </p>
              <span data-reveal="" style={{ '--kz-delay': '620ms' }}>
                <ArrowButton onClick={onEnquiry}>{HERO.cta}</ArrowButton>
              </span>
            </div>
          </div>
        </div>

        {/* The concept board sets three square case tiles directly under the hero, left-weighted.
            Справа от плиток пустая треть контейнера — туда и уходит переход
            на весь список, по нижнему краю ряда. */}
        <div className="kz-hero-showcase">
          <div className="kz-hero-cases">
            {HERO_CASES.map((c, i) => (
              <CaseTile
                slug={c.slug}
                delay={i * 90}
                key={c.slug}
                size="sm"
                title={c.title}
                image={c.image}
                fill={c.fill}
                href={`/cases/${c.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  goPath(`/cases/${c.slug}`);
                }}
              />
            ))}
          </div>

          {/* Вертикальный прямоугольник в рост плиток: замыкает ряд, но уже их
              по ширине, поэтому за четвёртый кейс не читается. */}
          <a
            className="kz-hero-all"
            href="/cases"
            data-reveal=""
            style={{ '--kz-delay': '180ms' }}
            onClick={(e) => {
              e.preventDefault();
              goPath('/cases');
            }}
          >
            <Icon name="arrow-up-right" size={20} className="kz-hero-all__arrow" />
            {/* Подпись поставлена вертикально: в узкой полосе она иначе
                не помещается, а строка снизу вверх ведёт взгляд к стрелке. */}
            <span className="kz-hero-all__label">{CASES.allLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
