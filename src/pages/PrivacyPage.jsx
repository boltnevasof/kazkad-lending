import { useEffect } from 'react';
import SplitText from '../components/SplitText.jsx';
import Footer from '../sections/Footer.jsx';
import { LEGAL_ENTITY, PRIVACY } from '../content/legal.js';
import { useNav } from '../lib/nav.js';

export default function PrivacyPage() {
  const { goSection } = useNav();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="kz-page">
        <div className="kz-container">
          <div className="kz-split-grid">
            <span className="kz-aside kz-from-left" data-reveal="">
              обновлено {PRIVACY.updated}
            </span>
            <div className="kz-measure">
              <SplitText as="h1" text={PRIVACY.title} className="kz-title-lg" />
              <p className="kz-lead" data-reveal="" style={{ marginTop: 20, '--kz-delay': '220ms' }}>
                {PRIVACY.lead}
              </p>
            </div>
          </div>

          {/* Разделы разделены волосяными линейками, как блоки страницы кейса. */}
          {PRIVACY.sections.map((s, i) => (
            <div className="kz-case-row kz-split-grid" key={s.title} data-reveal="" style={{ '--kz-delay': `${i * 60}ms` }}>
              <h2 className="kz-legal__title">{s.title}</h2>
              <div className="kz-measure kz-legal__body">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          {LEGAL_ENTITY && (
            <div className="kz-case-row kz-split-grid" data-reveal="">
              <h2 className="kz-legal__title">Реквизиты</h2>
              <div className="kz-measure kz-legal__body">
                <p>{LEGAL_ENTITY.name}</p>
                <p>
                  ИНН {LEGAL_ENTITY.inn}, ОГРН {LEGAL_ENTITY.ogrn}
                </p>
                <p>{LEGAL_ENTITY.address}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer onNavigate={goSection} />
    </>
  );
}
