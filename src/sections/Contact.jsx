import { GlowBackdrop } from '../design-system/index.js';
import ArrowButton from '../components/ArrowButton.jsx';
import SplitText from '../components/SplitText.jsx';
import { CONTACT, CONTACTS } from '../content/site.js';

export default function Contact() {
  return (
    <section id="contact" className="kz-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <GlowBackdrop size={560} opacity={0.38} style={{ bottom: -250, left: -140, top: 'auto', right: 'auto' }} />
      <div className="kz-container kz-split-grid" style={{ position: 'relative' }}>
        <span className="kz-aside kz-from-left" data-reveal="" style={{ paddingTop: 10 }}>
          {CONTACT.aside}
        </span>
        <div style={{ maxWidth: 760 }}>
          <SplitText as="h2" text={CONTACT.title} className="kz-title-lg" />
          <p className="kz-lead" style={{ marginTop: 20, maxWidth: 520, '--kz-delay': '420ms' }} data-reveal="">
            {CONTACT.lead}
          </p>
          <div data-reveal="" style={{ '--kz-delay': '520ms', marginTop: 36 }}>
            <ArrowButton size="xl" href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">
              {CONTACTS.telegramLabel}
            </ArrowButton>
          </div>
          <div className="kz-contact-lines" data-reveal="" style={{ '--kz-delay': '600ms' }}>
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
            <a href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
