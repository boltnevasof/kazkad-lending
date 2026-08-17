// Плитка кейса. Та же геометрия, что у CaseCard из дизайн-системы — квадрат,
// заголовок в левом верхнем углу, ссылка в левом нижнем, синий квадрат со стрелкой
// справа внизу, — но состояния наведения описаны классами, а не inline-стилями.
//
// Плитка появляется со сдвигом по горизонтали, а не снизу: у ленты кейсов
// включён overflow-y: hidden (иначе она получала лишнюю вертикальную
// прокрутку), и подъём снизу там бы обрезало на полпути.

import { Icon } from '../design-system/index.js';
import CaseArt from './CaseArt.jsx';

const FILLS = {
  grey: 'var(--ink-500)',
  tint: 'var(--surface-tint)',
  blue: 'var(--surface-accent)',
  subtle: 'var(--surface-subtle)',
};

export default function CaseTile({
  slug,
  title,
  image,
  fill = 'tint',
  size = 'md',
  linkLabel = 'посмотреть кейс',
  href = '#',
  onClick,
  delay = 0,
  className = '',
  ...rest
}) {
  // Белый текст ставим на скриншот, на синюю и на серую заливку; светлые — с ink.
  const dark = Boolean(image) || fill === 'blue' || fill === 'grey';

  return (
    <a
      className={`kz-tile kz-tile--${size}${dark ? ' is-dark' : ''} ${className}`.trim()}
      href={href}
      onClick={onClick}
      data-reveal=""
      style={{ background: FILLS[fill] || FILLS.tint, '--kz-delay': `${delay}ms` }}
      {...rest}
    >
      {image ? (
        <span className="kz-tile__media">
          <img src={image} alt="" />
        </span>
      ) : (
        <CaseArt slug={slug} variant="tile" />
      )}
      <span className="kz-tile__title">{title}</span>
      <span className="kz-tile__link">{linkLabel}</span>
      <span className="kz-tile__arrow">
        <Icon name="arrow-right" size={size === 'sm' ? 13 : 15} />
        <Icon name="arrow-right" size={size === 'sm' ? 13 : 15} />
      </span>
    </a>
  );
}
