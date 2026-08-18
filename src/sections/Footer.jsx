import { Logo } from '../design-system/index.js';
import { CONTACTS, FOOTER, NAV_LINKS } from '../content/site.js';
import { useNav } from '../lib/nav.js';

const LABEL = { font: 'var(--type-body-sm)', color: 'var(--text-muted)' };

export default function Footer({ onNavigate }) {
  const { goPath } = useNav();
  const onOpenPrivacy = () => goPath('/privacy');

  return (
    <footer style={{ borderTop: '1px solid var(--border-strong)', padding: '56px 0 28px' }}>
      <div className="kz-container kz-footer-grid">
        <div style={{ maxWidth: 300 }} data-reveal="">
          <Logo height={26} />
        </div>
        <div className="kz-footer-col" data-reveal="" style={{ '--kz-delay': '90ms' }}>
          <span style={LABEL}>разделы</span>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              className="kz-footer-link"
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(l.href);
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="kz-footer-col" data-reveal="" style={{ '--kz-delay': '180ms' }}>
          <span style={LABEL}>связь</span>
          <a className="kz-footer-link" href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a className="kz-footer-link" href={`mailto:${CONTACTS.email}`}>
            {CONTACTS.email}
          </a>
          <a className="kz-footer-link" href={CONTACTS.phoneHref}>
            {CONTACTS.phone}
          </a>
          <a
            className="kz-footer-link"
            href="/privacy"
            onClick={(e) => {
              e.preventDefault();
              onOpenPrivacy();
            }}
          >
            политика конфиденциальности
          </a>
        </div>
      </div>
      {/* Строчка о студии закрывает страницу: последнее, что читают, это то,
          чем мы занимаемся и за какой срок. */}
      <div className="kz-container kz-footer-bottom" data-reveal="" style={{ '--kz-delay': '240ms' }}>
        <span>{FOOTER.about}</span>
        <span>{FOOTER.copyright}</span>
      </div>
    </footer>
  );
}
