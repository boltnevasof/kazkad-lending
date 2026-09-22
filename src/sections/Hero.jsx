import { GlowBackdrop } from '../design-system/index.js';
import ArrowButton from '../components/ArrowButton.jsx';
import SplitText, { splitDuration } from '../components/SplitText.jsx';
import { HERO } from '../content/site.js';
import { prefersReducedMotion } from '../lib/reveal.js';

// Строки заголовка стартуют одна за другой: следующая ждёт, пока доедет предыдущая.
const LINE_DELAYS = HERO.headline.reduce(
  (acc, line) => [...acc, acc[acc.length - 1] + splitDuration(line) * 0.55],
  [120],
);

export default function Hero({ onEnquiry }) {
  // Кейсы лежат на этой же странице, поэтому шторку не зовём: экран должен
  // именно проехать вниз, а не перелистнуться.
  const toCases = () => {
    const target = document.querySelector('#cases');
    if (!target) return;
    target.scrollIntoView({ block: 'start', behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return (
    <section id="top" className="kz-hero" style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-page)' }}>
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
      </div>

      {/* Подсказка у нижнего края первого экрана: стрелка всё время клонится
          вниз, показывая, что страница продолжается. Нажимать необязательно,
          обычная прокрутка приводит туда же. */}
      <div className="kz-hero-cue" data-reveal="" style={{ '--kz-delay': '900ms' }}>
        <div className="kz-container">
          <button type="button" className="kz-hero-scroll" onClick={toCases}>
            <span className="kz-hero-scroll__label">{HERO.scrollCta}</span>{' '}
            <span className="kz-hero-scroll__mark" aria-hidden="true">
              {/* Стрелка нарисована здесь, а не взята иконкой: иконки
                  подгружаются запросом, и на первом экране это заметно. */}
              <svg
                className="kz-hero-scroll__arrow"
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.5 1.6v13" />
                <path d="M2.1 9.2 7.5 14.6l5.4-5.4" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
