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
          <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', marginTop: 16 }}>{FOOTER.about}</p>
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
          {/* Пробелы между строками контактов не видны в колонке-флексе,
              зато парсер HTML не склеивает телефон с адресом. */}
          <span style={LABEL}>связь</span>{' '}
          <a className="kz-footer-link" href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">
            Telegram
          </a>{' '}
          <a className="kz-footer-link" href={`mailto:${CONTACTS.email}`}>
            {CONTACTS.email}
          </a>{' '}
          <a className="kz-footer-link" href={CONTACTS.phoneHref}>
            {CONTACTS.phone}
          </a>{' '}
          <a className="kz-footer-link" href={CONTACTS.addressHref} target="_blank" rel="noopener noreferrer">
            {CONTACTS.address}
          </a>{' '}
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
      <div className="kz-container kz-footer-bottom" data-reveal="" style={{ '--kz-delay': '240ms' }}>
        <span>{FOOTER.copyright}</span>{' '}
        <span>{FOOTER.stack}</span>
      </div>
    </footer>
  );
}
