import Conveyor from '../components/Conveyor.jsx';
import SplitText from '../components/SplitText.jsx';
import { METHOD } from '../content/site.js';

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
          </div>
        </div>
      </div>
    </section>
  );
}
