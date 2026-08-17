import SplitText from '../components/SplitText.jsx';
import { STAGES } from '../content/site.js';

// Этапы показаны диаграммой Ганта в привычном виде: слева колонка задач,
// справа сплошное поле со сквозной недельной сеткой и отрезками. Описания
// вынесены под диаграмму, иначе строки разрастаются и таблица перестаёт
// читаться как таблица.

const total = STAGES.totalDays;
const WEEKS = Math.ceil(total / 7);
const percent = (days) => `${((days / total) * 100).toFixed(4)}%`;

export default function Stages() {
  return (
    <section id="stages" className="kz-section" style={{ background: 'var(--surface-subtle)' }}>
      <div className="kz-container">
        <div className="kz-split-grid">
          <span className="kz-aside kz-from-left" data-reveal="">
            {STAGES.aside}
          </span>
          <div className="kz-measure">
            <SplitText as="h2" text={STAGES.title} className="kz-title" />
            <p className="kz-lead" style={{ marginTop: 16, '--kz-delay': '260ms' }} data-reveal="">
              {STAGES.lead}
            </p>
          </div>
        </div>

        <div className="kz-gantt" data-reveal="">
          <div className="kz-gantt__head">
            <span className="kz-gantt__label" />
            <div className="kz-gantt__weeks">
              {Array.from({ length: WEEKS }, (_, i) => (
                <span className="kz-eyebrow" key={i}>
                  неделя {i + 1}
                </span>
              ))}
            </div>
          </div>

          {STAGES.items.map((s, i) => (
            <div className="kz-gantt__row" key={s.title} style={{ '--kz-i': i }}>
              <div className="kz-gantt__label">
                <span className="kz-gantt__days">{s.days}</span>
                <span className="kz-gantt__task">{s.title}</span>
              </div>

              <div className="kz-gantt__track">
                <span className="kz-gantt__weekgrid" aria-hidden="true">
                  {Array.from({ length: WEEKS }, (_, w) => (
                    <span key={w} />
                  ))}
                </span>
                <span
                  className="kz-gantt__bar"
                  style={{
                    background: s.swatch,
                    left: percent(s.from - 1),
                    width: percent(s.to - s.from + 1),
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="kz-gantt-notes">
          {STAGES.items.map((s, i) => (
            <div key={s.title} data-reveal="" style={{ '--kz-delay': `${i * 90}ms` }}>
              <span className="kz-gantt__days">{s.days}</span>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
