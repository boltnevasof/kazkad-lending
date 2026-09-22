import { GlowBackdrop } from '../design-system/index.js';
import ArrowButton from '../components/ArrowButton.jsx';
import SplitText, { splitDuration } from '../components/SplitText.jsx';
import { HERO } from '../content/site.js';

// Строки заголовка стартуют одна за другой: следующая ждёт, пока доедет предыдущая.
const LINE_DELAYS = HERO.headline.reduce(
  (acc, line) => [...acc, acc[acc.length - 1] + splitDuration(line) * 0.55],
  [120],
);

export default function Hero({ onEnquiry }) {
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
    </section>
  );
}
