function Footer() {
  const { Logo } = window.KZ;
  const label = { font: 'var(--type-body-sm)', color: 'var(--text-muted)' };
  const col = { display: 'flex', flexDirection: 'column', gap: 10, font: 'var(--type-body-sm)' };
  return (
    <footer style={{ borderTop: '1px solid var(--border-strong)', padding: '56px 0 28px' }}>
      <div className="kz-container" style={{ display: 'grid', gridTemplateColumns: '34% 1fr 1fr', gap: 40, alignItems: 'start' }}>
        <div style={{ maxWidth: 300 }}>
          <Logo height={26} />
          <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', marginTop: 16 }}>
            Студия веб-разработки. Python и React. Запуск за три недели.
          </p>
        </div>
        <div style={col}>
          <span style={label}>разделы</span>
          <a href="#method">метод</a><a href="#stages">этапы</a><a href="#cases">кейсы</a><a href="#contact">контакты</a>
        </div>
        <div style={col}>
          <span style={label}>связь</span>
          <a href="https://t.me/kazkad" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="mailto:hello@kazkad.ru">hello@kazkad.ru</a>
          <a href="tel:+70000000000">+7 000 000-00-00</a>
        </div>
      </div>
      <div className="kz-container" style={{ marginTop: 48, paddingTop: 20, borderTop: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>
        <span>© 2026 Kazkad</span>
        <span>Python · React</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
