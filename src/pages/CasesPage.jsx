import { useEffect, useState } from 'react';
import { Tabs } from '../design-system/index.js';
import CaseTile from '../components/CaseTile.jsx';
import SplitText from '../components/SplitText.jsx';
import Footer from '../sections/Footer.jsx';
import { CASES } from '../content/site.js';
import { useNav } from '../lib/nav.js';
import { revealWithin } from '../lib/reveal.js';

const ALL = CASES.filters[0];

export default function CasesPage() {
  const { goSection, goPath } = useNav();
  const [tab, setTab] = useState(ALL);
  const shown = tab === ALL ? CASES.items : CASES.items.filter((c) => c.group === tab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Смена фильтра монтирует новые плитки, которых наблюдатель не видел.
  // Эффект идёт после отрисовки, поэтому показывает уже готовую разметку.
  useEffect(() => {
    revealWithin(document.querySelector('.kz-cases-grid'));
  }, [tab]);

  return (
    <>
      <section className="kz-page">
        <div className="kz-container">
          <div className="kz-split-grid">
            <span className="kz-aside kz-from-left" data-reveal="">
              кейсы {CASES.items.length}
            </span>
            <div className="kz-measure">
              <SplitText as="h1" text={CASES.pageTitle} className="kz-title-lg" />
              <p className="kz-lead" data-reveal="" style={{ marginTop: 20, '--kz-delay': '220ms' }}>
                {CASES.pageLead}
              </p>
            </div>
          </div>

          <div className="kz-page-filters" data-reveal="" style={{ '--kz-delay': '320ms' }}>
            <Tabs items={CASES.filters} value={tab} onChange={setTab} />
          </div>

          <div className="kz-cases-grid">
            {shown.map((c, i) => (
              <CaseTile
                slug={c.slug}
                delay={i * 60}
                key={c.slug}
                title={c.title}
                image={c.image}
                imagePos={c.imagePos}
                scrim={c.scrim}
                fill={c.fill}
                href={`/cases/${c.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  goPath(`/cases/${c.slug}`);
                }}
              />
            ))}
          </div>

          {shown.length === 0 && (
            <p className="kz-lead" style={{ marginTop: 40 }}>
              В этом направлении пока нет запущенных проектов.
            </p>
          )}
        </div>
      </section>

      <Footer onNavigate={goSection} />
    </>
  );
}
