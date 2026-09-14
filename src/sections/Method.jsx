import Conveyor from '../components/Conveyor.jsx';
import LinkedText from '../components/LinkedText.jsx';
import SplitText from '../components/SplitText.jsx';
import { METHOD } from '../content/site.js';
import { METHOD_PAGE } from '../content/method.js';

export default function Method() {
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
            {/* Строка о названии связывает бренд с методом. Ссылка на страницу
                метода встроена в само предложение: отдельная кнопка под абзацем
                выбивалась из колонки текста. */}
            <p className="kz-method-note" style={{ '--kz-delay': '200ms' }} data-reveal="">
              <LinkedText text={METHOD.nameNote} link={METHOD.nameNoteLink} to={METHOD_PAGE.path} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
