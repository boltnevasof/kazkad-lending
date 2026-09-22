// Кадр для фотографии проекта. Оправа берётся из пресета, снимок один и тот же.
//
//   <Shot preset="rise" src="/assets/cases/akpack-1.jpg" alt="Каталог АкПак" caption="Каталог упаковки" />
//   <Shot preset="band" src="…" ratio="16 / 9" />
//
// Пресеты описаны в src/styles/shots.css, там же видно, что делает каждый.

const PRESETS = ['field', 'rise', 'band', 'split', 'window', 'corner', 'paper', 'ink', 'grid'];

export default function Shot({
  preset = 'field',
  src,
  alt = '',
  caption,
  ratio,
  className = '',
  style,
  ...rest
}) {
  const kind = PRESETS.includes(preset) ? preset : PRESETS[0];
  const box = { ...(ratio ? { '--kzp-ratio': ratio } : null), ...style };
  // Пустая alt у снимка, когда подпись уже стоит рядом: читалке незачем
  // произносить одно и то же дважды.
  const photo = <img className="kzp__photo" src={src} alt={caption && !alt ? '' : alt} loading="lazy" />;

  return (
    <figure className={`kzp kzp--${kind} ${className}`.trim()} style={box} {...rest}>
      {kind === 'window' ? (
        <span className="kzp__frame">
          <span className="kzp__bar" aria-hidden="true">
            <span className="kzp__dot" />
            <span className="kzp__dot" />
            <span className="kzp__dot" />
            <span className="kzp__line" />
          </span>
          {photo}
        </span>
      ) : (
        photo
      )}
      {caption ? <figcaption className="kzp__cap">{caption}</figcaption> : null}
    </figure>
  );
}
