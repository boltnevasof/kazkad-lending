import ArrowButton from '../components/ArrowButton.jsx';
import Conveyor from '../components/Conveyor.jsx';
import SplitText from '../components/SplitText.jsx';
import { METHOD } from '../content/site.js';
import { METHOD_PAGE } from '../content/method.js';
import { useNav } from '../lib/nav.js';

export default function Method() {
  const { goPath } = useNav();

  return (
    <section id="method" className="kz-section">
      <div className="kz-container">
        <div className="kz-split-grid">
          <span className="kz-aside kz-from-left" data-reveal="">
            {METHOD.aside}
          </span>
          <SplitText as="h2" text={METHOD.title} className="kz-title kz-measure" />
        </div>

        <div className="kz-split-grid" style={{ marginTop: 36 }}>
          <Conveyor />
          <div className="kz-measure">
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-body)' }} data-reveal="">
              {METHOD.paragraphs[0]}
            </p>
            <p className="kz-lead" style={{ marginTop: 20, '--kz-delay': '120ms' }} data-reveal="">
              {METHOD.paragraphs[1]}
            </p>
            {/* Строка о названии связывает бренд с методом, и людям, и поисковикам
                становится понятно, почему студию ищут по слову «каскад». Ссылка
                ведёт на страницу, где метод разобран подробно. */}
            <p className="kz-method-note" style={{ '--kz-delay': '200ms' }} data-reveal="">
              {METHOD.nameNote}
            </p>
            <div style={{ marginTop: 20, '--kz-delay': '260ms' }} data-reveal="">
              <ArrowButton
                variant="ghost"
                href={METHOD_PAGE.path}
                onClick={(e) => {
                  e.preventDefault();
                  goPath(METHOD_PAGE.path);
                }}
              >
                {METHOD.more}
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
