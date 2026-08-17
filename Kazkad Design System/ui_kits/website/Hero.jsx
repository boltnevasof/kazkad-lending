const HERO_CASES = [
  { title: 'Разработка продуктовых страниц для яндекса', image: '../../assets/case-mobile-app.png', fill: 'tint' },
  { title: 'Разработка сайта для строительной компании', image: '../../assets/photo-landscape.jpg', fill: 'grey' },
  { title: 'Личный кабинет для платёжного сервиса', fill: 'blue' },
];

function Hero({ onEnquiry, onNavigate, activeHref, scrolled }) {
  const { NavBar, Button, CaseCard, GlowBackdrop } = window.KZ;
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-page)' }}>
      {/* Concept board places the star behind the headline's left edge, not in a corner. */}
      <GlowBackdrop size={460} opacity={0.55} style={{ top: -40, left: '17%', right: 'auto', bottom: 'auto' }} />
      <NavBar
        links={[{ href: '#method', label: 'метод' }, { href: '#stages', label: 'этапы' }, { href: '#cases', label: 'кейсы' }, { href: '#contact', label: 'контакты' }]}
        activeHref={activeHref} cta="обсудить задачу" onCtaClick={onEnquiry} onNavigate={onNavigate} scrolled={scrolled}
      />

      <div className="kz-container" style={{ position: 'relative', paddingTop: 110, paddingBottom: 88 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '34% minmax(0,1fr)', alignItems: 'start' }}>
          <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', paddingTop: 6 }}>студия веб-разработки</span>
          <div>
            <h1 style={{ font: 'var(--weight-bold) clamp(34px,3.55vw,52px)/1.06 var(--font-core)', letterSpacing: 'var(--tracking-display)', margin: 0 }}>
              <span style={{ display: 'block' }}>Запускаем продукт</span>
              <span style={{ display: 'block', marginLeft: '38%', color: 'var(--text-accent)' }}>за 3 недели</span>
              <span style={{ display: 'block' }}>после подписания договора</span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 48, marginTop: 40 }}>
              <p style={{ flex: '0 1 420px', minWidth: 0, font: 'var(--weight-regular) 20px/1.4 var(--font-core)', color: 'var(--text-muted)' }}>
                Не успели по нашей вине — вернём половину суммы.
              </p>
              <Button icon="arrow-right" onClick={onEnquiry} style={{ flex: 'none' }}>обсудить задачу</Button>
            </div>
          </div>
        </div>

        {/* The concept board sets three square case tiles directly under the hero, left-weighted. */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,210px))', gap: 12, marginTop: 56 }}>
          {HERO_CASES.map((c) => (
            <CaseCard key={c.title} size="sm" title={c.title} image={c.image} fill={c.fill} onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('#cases'); }} />
          ))}
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
