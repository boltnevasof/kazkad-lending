// Кадр для снимка проекта. Снимок вставляется в устройство или обкладывается
// фигурами, оправа выбирается пресетом.
//
//   <Shot preset="phone" src="/assets/cases/akpack-1.jpg" caption="Каталог" />
//   <Shot preset="arcs" src="…" style={{ '--kzp-shape': '#e2231a' }} />
//   <Shot preset="browser" src="…" ratio="16 / 9" />
//
// Что рисует каждый пресет, видно в src/styles/shots.css.

const PRESETS = {
  phone: { notch: true },
  browser: { bar: true },
  arcs: { shapes: 2, card: true },
  'phone-crop': { notch: true },
  circle: { shapes: 1, card: true },
  brackets: { shapes: 2, card: true },
  laptop: { base: true, notch: true },
  stripes: { shapes: 1, card: true },
  stage: { shapes: 1, notch: true },
};

export default function Shot({
  preset = 'phone',
  src,
  alt = '',
  caption,
  ratio,
  className = '',
  style,
  ...rest
}) {
  const kind = PRESETS[preset] ? preset : 'phone';
  const cfg = PRESETS[kind];
  const box = { ...(ratio ? { '--kzp-ratio': ratio } : null), ...style };

  return (
    <figure className={`kzp kzp--${kind} ${className}`.trim()} style={box} {...rest}>
      {Array.from({ length: cfg.shapes || 0 }, (_, i) => (
        <span className={`kzp__shape kzp__shape--${i + 1}`} key={i} aria-hidden="true" />
      ))}

      <span className={`kzp__device${cfg.card ? ' kzp__device--card' : ''}`}>
        {cfg.bar ? (
          <span className="kzp__bar" aria-hidden="true">
            <span className="kzp__dot" />
            <span className="kzp__dot" />
            <span className="kzp__dot" />
            <span className="kzp__line" />
          </span>
        ) : null}
        <span className="kzp__screen">
          {/* Пустая alt, когда подпись уже стоит в кадре: читалке незачем
              произносить одно и то же дважды. */}
          <img className="kzp__photo" src={src} alt={caption && !alt ? '' : alt} loading="lazy" />
          {cfg.notch ? <span className="kzp__notch" aria-hidden="true" /> : null}
        </span>
        {cfg.base ? <span className="kzp__base" aria-hidden="true" /> : null}
      </span>

      {caption ? <figcaption className="kzp__cap">{caption}</figcaption> : null}
    </figure>
  );
}
