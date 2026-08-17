const CASES = [
  { title: 'Разработка продуктовых страниц для яндекса', image: '../../assets/case-mobile-app.png', fill: 'tint', group: 'сервисы' },
  { title: 'Разработка сайта для строительной компании', image: '../../assets/photo-landscape.jpg', fill: 'grey', group: 'лендинги' },
  { title: 'Личный кабинет для платёжного сервиса', fill: 'blue', group: 'сервисы' },
  { title: 'Портал заявок с интеграцией 1С', fill: 'subtle', group: 'интеграции' },
];

const BLEED = 'max(40px, calc((100vw - 1280px) / 2 + 40px))';

function Cases() {
  const { CaseCard, Tabs, Button } = window.KZ;
  const [tab, setTab] = React.useState('все');
  const shown = tab === 'все' ? CASES : CASES.filter((c) => c.group === tab);
  return (
    <section id="cases" style={{ padding: 'var(--section-y) 0' }}>
      <div className="kz-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40 }}>
          <h2 style={{ font: 'var(--weight-bold) clamp(26px,2.6vw,36px)/1.12 var(--font-core)', letterSpacing: 'var(--tracking-heading)', margin: 0 }}>
            Что мы уже запустили
            <span style={{ font: 'var(--type-body-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-muted)', marginLeft: 14, verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
              кейсы {CASES.length}
            </span>
          </h2>
          <Button variant="ghost" icon="arrow-right">все проекты</Button>
        </div>
        <div style={{ marginTop: 32 }}>
          <Tabs items={['все', 'сервисы', 'лендинги', 'интеграции']} value={tab} onChange={setTab} />
        </div>
      </div>

      {/* Bleeds to the right edge so the last tile is deliberately cut — the scroll affordance. */}
      <div style={{ marginLeft: BLEED, marginTop: 40, overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
        <div style={{ display: 'flex', gap: 12, width: 'max-content', paddingRight: 40 }}>
          {shown.map((c) => (
            <div key={c.title} style={{ flex: 'none', width: 340, scrollSnapAlign: 'start' }}>
              <CaseCard title={c.title} image={c.image} fill={c.fill} onClick={(e) => e.preventDefault()} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Cases = Cases;
