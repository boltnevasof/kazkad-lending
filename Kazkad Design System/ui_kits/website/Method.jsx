function Method() {
  return (
    <section id="method" style={{ padding: 'var(--section-y) 0' }}>
      <div className="kz-container">
        <div style={{ display: 'grid', gridTemplateColumns: '34% minmax(0,1fr)', alignItems: 'start' }}>
          <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', paddingTop: 6 }}>концепт</span>
          <h2 style={{ font: 'var(--weight-bold) clamp(26px,2.6vw,36px)/1.12 var(--font-core)', letterSpacing: 'var(--tracking-heading)', margin: 0, maxWidth: 640 }}>
            Конвейерная система и продуктовый подход
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '34% minmax(0,1fr)', alignItems: 'start', marginTop: 36 }}>
          {/* Minimal conveyor: cargo growing along a belt, rollers underneath. */}
          <div style={{ paddingRight: 48, paddingTop: 8 }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 30 }}>
              {[[12, 'var(--ink-200)'], [16, 'var(--ink-200)'], [20, 'var(--ink-300)'], [24, 'var(--blue-300)'], [30, 'var(--surface-accent)']].map(([s, bg]) => (
                <span key={s} style={{ width: s, height: s, background: bg }} />
              ))}
            </div>
            <div style={{ height: 2, background: 'var(--border-strong)', marginTop: 6 }} />
            <div style={{ display: 'flex', gap: 22, marginTop: 5 }}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span key={i} style={{ width: 6, height: 6, background: 'var(--ink-300)' }} />
              ))}
            </div>
          </div>
          <div style={{ maxWidth: 640 }}>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-body)' }}>
              Отрезаем всё, что удлиняет разработку и повышает стоимость. Оставляем то, что зарабатывает, экономит время или экономит деньги.
            </p>
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-muted)', marginTop: 20 }}>
              Разработка выстроена как конвейер: одни и те же этапы, роли и инструменты на каждом проекте. Спецификацию и ожидания фиксируем до старта, дальше собираем систему по AI-First подходу и на своём опыте в разработке.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Method = Method;
