import SplitText from '../components/SplitText.jsx';
import { FAQ } from '../content/site.js';

// Вопросы перед договором. Пункты раскрываются нативным <details>: ответ лежит
// в HTML целиком и тогда, когда пункт свёрнут, поэтому его читают и поисковики,
// и ИИ, а открывается он без скрипта.
export default function Faq() {
  return (
    <section id="faq" className="kz-section">
      <div className="kz-container">
        <div className="kz-split-grid">
          <span className="kz-aside kz-from-left" data-reveal="">
            {FAQ.aside}
          </span>
          <SplitText as="h2" text={FAQ.title} className="kz-title kz-measure" />
        </div>

        <div className="kz-split-grid">
          <div className="kz-faq">
            {FAQ.items.map((item, i) => (
              <details
                className="kz-faq__item"
                key={item.question}
                data-reveal=""
                style={{ '--kz-delay': `${i * 60}ms` }}
              >
                <summary className="kz-faq__question">
                  <h3 className="kz-faq__title">{item.question}</h3>
                  <span className="kz-faq__icon" aria-hidden="true" />
                </summary>
                <p className="kz-faq__answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
