const TG = 'https://t.me/kazkad';

function Contact() {
  const { Icon, GlowBackdrop } = window.KZ;
  const [hover, setHover] = React.useState(false);
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: 'var(--section-y) 0' }}>
      <GlowBackdrop size={560} opacity={0.38} style={{ bottom: -250, left: -140, top: 'auto', right: 'auto' }} />
      <div className="kz-container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '34% minmax(0,1fr)', alignItems: 'start' }}>
        <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', paddingTop: 10 }}>контакты</span>
        <div style={{ maxWidth: 760 }}>
          <h2 style={{ font: 'var(--weight-bold) clamp(28px,3vw,44px)/1.1 var(--font-core)', letterSpacing: '-0.025em', margin: 0 }}>
            Напишите в Telegram — назовём срок и стоимость до договора
          </h2>
          <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-muted)', marginTop: 20, maxWidth: 520 }}>
            Отвечаем в течение рабочего дня. Никаких брифов на двадцать полей — достаточно пары фраз о задаче.
          </p>
          <a
            href={TG} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12, height: 64, padding: '0 32px', marginTop: 36,
              background: hover ? 'var(--blue-700)' : 'var(--surface-accent)', color: 'var(--text-inverse)',
              font: 'var(--weight-semibold) 18px/1 var(--font-core)', letterSpacing: '-0.01em',
              transition: 'background-color var(--duration-fast) var(--ease-standard)',
            }}
          >
            написать в Telegram
            <Icon name="arrow-right" size={20} />
          </a>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, marginTop: 36, paddingTop: 24, borderTop: '1px solid var(--border-hairline)', font: 'var(--type-body)' }}>
            <a href="mailto:hello@kazkad.ru">hello@kazkad.ru</a>
            <a href="tel:+70000000000">+7 000 000-00-00</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
