import { useEffect, useRef, useState } from 'react';
import SplitText from '../components/SplitText.jsx';
import { STAGES } from '../content/site.js';

// Этапы: диаграмма Ганта, которой управляет прокрутка.
//
// Секция высотой в экран на каждый этап, внутри неё липкий кадр. Пока страница
// идёт через секцию, подсвечивается очередной отрезок, карточка этапа уходит
// в размытие, и на её месте проявляется следующая. Карточки всех этапов лежат
// в разметке всегда, поэтому их читают поисковики и те, у кого нет скриптов.
//
// interactive=false отдаёт спокойный вариант без липкого кадра: карточки стоят
// рядом под диаграммой. Он идёт на странице метода, внутри статьи.

const TOTAL = STAGES.totalDays;
const DAYS = Array.from({ length: TOTAL }, (_, i) => i + 1);
const KEY_DAYS = new Set([1, ...STAGES.items.map((item) => item.to)]);

const percent = (days) => `${((days / TOTAL) * 100).toFixed(4)}%`;
const pad = (n) => String(n).padStart(2, '0');

// Где показывается карточка и к какому дню она привязана. Первая и третья
// встают над диаграммой, вторая под ней, поэтому диаграмма оказывается ровно
// посередине кадра. По горизонтали первая опирается на начало своего отрезка,
// вторая на середину, третья на конец, и стрелка всегда указывает в отрезок.
const PLACEMENT = [
  { side: 'above', align: 'start' },
  { side: 'below', align: 'center' },
  { side: 'above', align: 'end' },
];

function anchor(item, align) {
  if (align === 'start') return percent(item.from - 1);
  if (align === 'end') return percent(item.to);
  return percent((item.from - 1 + item.to) / 2);
}

export default function Stages({ interactive = true }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  // Номер этапа считается из положения секции: сколько её высоты уже прошло
  // мимо экрана, столько и пройдено этапов. Состояние меняем только когда
  // номер действительно другой, иначе дерево перерисовывалось бы на каждый
  // кадр прокрутки.
  useEffect(() => {
    if (!interactive) return undefined;

    let frame = 0;

    const read = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;

      const { top, height } = el.getBoundingClientRect();
      const travel = height - window.innerHeight;
      if (travel <= 0) return;

      const progress = Math.min(1, Math.max(0, -top / travel));
      const next = Math.min(STAGES.items.length - 1, Math.floor(progress * STAGES.items.length));
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [interactive]);

  const header = (
    <div className="kz-split-grid">
      <div className="kz-stages__aside">
        <span className="kz-aside kz-from-left" data-reveal="">
          {STAGES.aside}
        </span>
        {interactive ? (
          <span className="kz-stages__hint" data-reveal="" style={{ '--kz-delay': '120ms' }}>
            {STAGES.hint}
          </span>
        ) : null}
      </div>
      <div className="kz-measure">
        <SplitText as="h2" text={STAGES.title} className="kz-title" />
        <p className="kz-lead" style={{ marginTop: 16, '--kz-delay': '260ms' }} data-reveal="">
          {STAGES.lead}
        </p>
      </div>
    </div>
  );

  const chart = (
    <div className="kz-gantt" data-reveal="" style={{ '--kz-days': TOTAL }}>
      <div className="kz-gantt__scale">
        <span className="kz-gantt__scale-label">день</span>{' '}
        <div className="kz-gantt__ruler" aria-hidden="true">
          {DAYS.map((day) => (
            <span className={`kz-gantt__day${KEY_DAYS.has(day) ? ' is-key' : ''}`} key={day}>
              {day}
            </span>
          ))}
        </div>
      </div>

      {STAGES.items.map((item, i) => (
        <div
          className={`kz-gantt__row${i === active ? ' is-active' : ''}`}
          key={item.title}
          style={{ '--kz-i': i }}
        >
          <span className="kz-gantt__task">{item.title}</span>{' '}
          <div className="kz-gantt__track">
            <span className="kz-gantt__grid" aria-hidden="true">
              {DAYS.map((day) => (
                <span key={day} />
              ))}
            </span>
            <span
              className="kz-gantt__bar"
              style={{ left: percent(item.from - 1), width: percent(item.to - item.from + 1) }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const cards = STAGES.items.map((item, i) => {
    const place = PLACEMENT[i] || PLACEMENT[0];
    return (
      <article
        key={item.title}
        className={`kz-stage-card is-${place.side} is-${place.align}${i === active ? ' is-active' : ''}`}
        style={{ '--kz-x': anchor(item, place.align), '--kz-i': i }}
        aria-hidden={interactive && i !== active ? 'true' : undefined}
      >
        <span className="kz-stage-card__leader" aria-hidden="true" />
        <div className="kz-stage-card__top">
          <span className="kz-stage-card__days">{item.days}</span>{' '}
          <span className="kz-stage-card__count">
            {pad(i + 1)} / {pad(STAGES.items.length)}
          </span>
        </div>
        <h3 className="kz-stage-card__title">{item.title}</h3>
        <p className="kz-stage-card__text">{item.text}</p>
        <span className="kz-stage-card__milestone">{item.milestone}</span>
      </article>
    );
  });

  const body = (
    <div className="kz-container">
      {header}
      <div className="kz-stages__stage">
        {chart}
        <div className="kz-stages__cards" style={{ '--kz-rows': STAGES.items.length }}>
          {cards}
        </div>
      </div>
    </div>
  );

  if (!interactive) {
    return (
      <section id="stages" className="kz-section kz-stages kz-stages--static">
        {body}
      </section>
    );
  }

  return (
    <section
      id="stages"
      className="kz-stages kz-stages--scroll"
      ref={sectionRef}
      style={{ '--kz-steps': STAGES.items.length }}
    >
      <div className="kz-stages__sticky">{body}</div>
    </section>
  );
}
