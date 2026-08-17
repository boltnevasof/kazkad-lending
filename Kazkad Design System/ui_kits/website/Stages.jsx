const RULER = Array.from({ length: 21 }, (_, i) => (
  i < 3 ? 'var(--ink-000)' : i < 17 ? 'var(--blue-300)' : 'var(--surface-accent)'
));

const STAGES = [
  { swatch: 'var(--ink-000)', days: 'дни 1–3', title: 'Скоуп и договор', text: 'Описываем каждый экран и интеграцию, фиксируем дату запуска в договоре.' },
  { swatch: 'var(--blue-300)', days: 'дни 4–17', title: 'Дизайн и разработка', text: 'Интерфейс по дизайн-системе, Python и React параллельно. Каждый день — сборка на стенде.' },
  { swatch: 'var(--surface-accent)', days: 'дни 18–21', title: 'Приёмка и запуск', text: 'Проходим сценарии, проверяем скорость, выкатываем на прод и передаём доступы.' },
];

function Stages() {
  return (
    <section id="stages" style={{ padding: 'var(--section-y) 0', background: 'var(--surface-subtle)' }}>
      <div className="kz-container">
        <div style={{ display: 'grid', gridTemplateColumns: '34% minmax(0,1fr)', alignItems: 'start' }}>
          <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', paddingTop: 6 }}>этапы</span>
          <div style={{ maxWidth: 640 }}>
            <h2 style={{ font: 'var(--weight-bold) clamp(26px,2.6vw,36px)/1.12 var(--font-core)', letterSpacing: 'var(--tracking-heading)', margin: 0 }}>
              Три этапа, 21 день
            </h2>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-muted)', marginTop: 16 }}>
              Каждый этап заканчивается конкретным днём, и все три стоят в договоре.
            </p>
          </div>
        </div>

        {/* One cell per day, coloured by phase — the ruler shows how long each stage really is. */}
        <div style={{ marginTop: 56 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(21, 1fr)', height: 64, border: '1px solid var(--border-default)' }}>
            {RULER.map((bg, i) => (
              <span key={i} style={{ background: bg, borderRight: i === 20 ? 'none' : '1px solid var(--border-hairline)' }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            <span className="kz-eyebrow">день 1</span>
            <span className="kz-eyebrow">день 21</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, marginTop: 48 }}>
          {STAGES.map((s) => (
            <div key={s.title} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 12, height: 12, flex: 'none', background: s.swatch, border: '1px solid var(--border-default)' }} />
                <span className="kz-eyebrow">{s.days}</span>
              </span>
              <h3 style={{ font: 'var(--weight-semibold) 20px/1.25 var(--font-core)', letterSpacing: 'var(--tracking-heading)', margin: 0 }}>{s.title}</h3>
              <p style={{ font: 'var(--weight-regular) 15px/1.5 var(--font-core)', color: 'var(--text-muted)' }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Stages = Stages;
