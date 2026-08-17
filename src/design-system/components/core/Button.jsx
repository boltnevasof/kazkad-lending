import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 36, padding: '0 14px', font: 'var(--type-body-sm)', gap: 6 },
  md: { height: 44, padding: '0 20px', font: 'var(--type-body-sm)', gap: 8 },
  lg: { height: 56, padding: '0 28px', font: 'var(--type-body)', gap: 10 },
};

const VARIANTS = {
  primary: { background: 'var(--surface-accent)', color: 'var(--text-inverse)', border: '1px solid transparent' },
  secondary: { background: 'transparent', color: 'var(--text-body)', border: '1px solid var(--border-default)' },
  ghost: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
  inverse: { background: 'var(--ink-000)', color: 'var(--ink-800)', border: '1px solid transparent' },
};

const HOVER = {
  primary: { background: 'var(--blue-700)' },
  secondary: { borderColor: 'var(--border-strong)' },
  ghost: { background: 'var(--state-hover-tint)', color: 'var(--text-accent)' },
  inverse: { background: 'var(--blue-050)' },
};

/** Primary call to action. One primary per view; secondary/ghost for everything else. */
export function Button({
  variant = 'primary', size = 'md', icon, iconPosition = 'right',
  fullWidth = false, disabled = false, children, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, height: s.height, padding: s.padding,
        font: s.font, fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-body)',
        borderRadius: 'var(--radius-control)', cursor: disabled ? 'not-allowed' : 'pointer',
        width: fullWidth ? '100%' : undefined,
        transition: 'var(--transition-control)',
        transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
        opacity: disabled ? 0.4 : 1,
        ...v,
        ...(hover && !disabled ? HOVER[variant] : null),
        ...style,
      }}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} size={size === 'lg' ? 20 : 16} />}
      <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} size={size === 'lg' ? 20 : 16} />}
    </button>
  );
}
