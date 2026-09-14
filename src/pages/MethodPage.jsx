import { useEffect } from 'react';
import LinkedText from '../components/LinkedText.jsx';
import SplitText from '../components/SplitText.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../sections/Footer.jsx';
import Stages from '../sections/Stages.jsx';
import { METHOD_PAGE } from '../content/method.js';
import { useNav } from '../lib/nav.js';

// Страница о каскадной разработке. Блоки разложены как в политике: волосяные
// линейки, слева заголовок блока, справа текст. Этапы с диаграммой Ганта
// берутся секцией с главной, чтобы дни нигде не разошлись.

function Block({ block, delay = 0, children }) {
  return (
    <div className="kz-case-row kz-split-grid" data-reveal="" style={{ '--kz-delay': `${delay}ms` }}>
      <h2 className="kz-legal__title">{block.title}</h2>
      <div className="kz-method__body">
        {block.body.map((p) => (
          <p key={p}>
            <LinkedText text={p} link={block.link?.text} to={block.link?.to} />
          </p>
        ))}
        {children}
      </div>
    </div>
  );
}

// Таблица, а не абзац: сравнение по строкам поисковики и ИИ разбирают лучше
// всего, а человеку так проще увидеть разницу за секунду.
function Compare({ table }) {
  return (
    <div className="kz-compare-wrap">
      <table className="kz-compare">
        <caption className="kz-compare__caption">{table.caption}</caption>
        <thead>
          <tr>
            <td />
            {table.columns.map((c) => (
              <th scope="col" key={c}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r) => (
            <tr key={r.label}>
              <th scope="row">{r.label}</th>
              {/* data-label нужен телефону: там шапки таблицы нет, и подпись
                  колонки встаёт над значением. */}
              {r.values.map((v, i) => (
                <td key={v} data-label={table.columns[i]}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MethodPage() {
  const { goSection } = useNav();
  const [what, agile] = METHOD_PAGE.intro;
  const [benefits, notFit] = METHOD_PAGE.outro;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <article>
        <section className="kz-page">
          <div className="kz-container">
            <div className="kz-split-grid">
              <span className="kz-aside kz-from-left" data-reveal="">
                {METHOD_PAGE.aside}
              </span>
              <div className="kz-measure">
                <SplitText as="h1" text={METHOD_PAGE.title} className="kz-title-lg" />
                <p className="kz-lead" data-reveal="" style={{ marginTop: 20, '--kz-delay': '220ms' }}>
                  {METHOD_PAGE.lead}
                </p>
              </div>
            </div>

            <Block block={what} />
            <Block block={agile} delay={60}>
              <Compare table={METHOD_PAGE.compare} />
            </Block>
          </div>
        </section>

        <Stages />

        <section className="kz-section">
          <div className="kz-container">
            <Block block={benefits} />
            <Block block={notFit} delay={60} />
          </div>
        </section>
      </article>

      <Contact />
      <Footer onNavigate={goSection} />
    </>
  );
}
