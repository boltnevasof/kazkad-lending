// CTA со стрелкой, которая на ховере уезжает вправо, а на её место въезжает вторая.
// Обе стрелки живут в одной клетке с overflow:hidden — подмена читается как одно движение.

import { Icon } from '../design-system/index.js';

const ARROW_SIZE = { sm: 14, md: 16, lg: 20 };

export default function ArrowButton({
  variant = 'primary',
  size = 'md',
  icon = 'arrow-right',
  children,
  className = '',
  href,
  ...rest
}) {
  const px = ARROW_SIZE[size] || ARROW_SIZE.md;
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type: 'button' };

  return (
    <Tag className={`kz-btn kz-btn--${variant} kz-btn--${size} ${className}`.trim()} {...tagProps} {...rest}>
      <span className="kz-btn__label">{children}</span>
      <span className="kz-btn__arrow" style={{ width: px, height: px }}>
        <Icon name={icon} size={px} />
        <Icon name={icon} size={px} />
      </span>
    </Tag>
  );
}
