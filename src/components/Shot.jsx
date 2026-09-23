// Кадр для снимка проекта. Снимок вставляется в корпус устройства или
// обкладывается фигурами, оправа выбирается пресетом. Никаких надписей
// на кадре нет, текст живёт рядом с ним в обычной вёрстке.
//
//   <Shot preset="phone" src="/assets/cases/akpack-app.jpg" alt="Каталог" />
//   <Shot preset="arcs" src="…" style={{ '--kzp-shape': '#e2231a' }} />
//   <Shot preset="browser" src="…" ratio="16 / 9" />
//
// Корпуса лежат в components/devices, фигуры описаны в src/styles/shots.css.

import Iphone17Pro from './devices/Iphone17Pro.jsx';
import Macbook14 from './devices/Macbook14.jsx';

const PRESETS = {
  phone: { device: 'iphone' },
  browser: { bar: true },
  arcs: { shapes: 2, card: true },
  'phone-crop': { device: 'iphone' },
  circle: { shapes: 1, card: true },
  brackets: { shapes: 2, card: true },
  laptop: { device: 'macbook' },
  stripes: { shapes: 1, card: true },
  stage: { shapes: 1, device: 'iphone' },
};

export default function Shot({ preset = 'phone', src, alt = '', ratio, className = '', style, ...rest }) {
  const kind = PRESETS[preset] ? preset : 'phone';
  const cfg = PRESETS[kind];
  const box = { ...(ratio ? { '--kzp-ratio': ratio } : null), ...style };
  const Device = cfg.device === 'iphone' ? Iphone17Pro : cfg.device === 'macbook' ? Macbook14 : null;

  return (
    <span className={`kzp kzp--${kind} ${className}`.trim()} style={box} {...rest}>
      {Array.from({ length: cfg.shapes || 0 }, (_, i) => (
        <span className={`kzp__shape kzp__shape--${i + 1}`} key={i} aria-hidden="true" />
      ))}

      {Device ? (
        <Device className="kzp__device" src={src} alt={alt} />
      ) : (
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
            <img className="kzp__photo" src={src} alt={alt} loading="lazy" />
          </span>
        </span>
      )}
    </span>
  );
}
