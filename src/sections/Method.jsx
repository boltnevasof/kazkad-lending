import { useState } from 'react';
import LinkedText from '../components/LinkedText.jsx';
import SplitText from '../components/SplitText.jsx';
import { METHOD } from '../content/site.js';
import { METHOD_PAGE } from '../content/method.js';

// Каскадная модель: тёмная секция из четырёх принципов. Панель, на которую
// навели, разворачивается и показывает пояснение, соседние сжимаются до номера
// с заголовком. На узком экране панели идут столбиком и раскрыты все сразу,
// поэтому текст читают и с телефона, и поисковики.
export default function Method() {
  const [open, setOpen] = useState(0);

  return (
    <section id="method" className="kz-method kz-dark">
      <div className="kz-container">
        <div className="kz-split-grid">
          <span className="kz-aside kz-from-left" data-reveal="">
            {METHOD.aside}
          </span>{' '}
          <div className="kz-measure">
            <SplitText as="h2" text={METHOD.title} className="kz-title" />{' '}
            <p className="kz-lead" data-reveal="" style={{ marginTop: 12, '--kz-delay': '260ms' }}>
              {METHOD.lead}
            </p>
          </div>
        </div>

        <div className="kz-principles" data-reveal="">
          {METHOD.principles.map((principle, i) => (
            <div
              className={`kz-principle${i === open ? ' is-open' : ''}`}
              key={principle.title}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              onClick={() => setOpen(i)}
              tabIndex={0}
              role="button"
              aria-expanded={i === open}
            >
              <span className="kz-principle__num">{String(i + 1).padStart(2, '0')}</span>{' '}
              <div className="kz-principle__body">
                <h3 className="kz-principle__title">{principle.title}</h3>{' '}
                <p className="kz-principle__text">{principle.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Строка о названии связывает бренд с методом, ссылка ведёт на
            страницу, где он разобран подробно. */}
        <p className="kz-method-note" data-reveal="" style={{ '--kz-delay': '200ms' }}>
          <LinkedText text={METHOD.nameNote} link={METHOD.nameNoteLink} to={METHOD_PAGE.path} />
        </p>
      </div>
    </section>
  );
}
