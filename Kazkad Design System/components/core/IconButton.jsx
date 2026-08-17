import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: 32, md: 40, lg: 48 };

/** Square-ish control holding a single glyph. Always give it an aria-label. */
export function IconButton({ icon, size = 'md', variant = 'secondary', disabled = false, label, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const box = SIZES[size] || SIZES.md;
  const base = variant === 'primary'
    ? { background: 'var(--surface-accent)', color: 'var(--text-inverse)', border: '1px solid transparent' }
    : variant === 'ghost'
      ? { background: 'transparent', color: 'var(--text-muted)', border: '1px solid transparent' }
      : { background: 'transparent', color: 'var(--text-body)', border: '1px solid var(--border-default)' };
  const hovered = variant === 'primary'
    ? { background: 'var(--blue-700)' }
    : variant === 'ghost'
      ? { background: 'var(--surface-subtle)', color: 'var(--text-body)' }
      : { borderColor: 'var(--border-strong)' };
  return (
    <button
      type="button" aria-label={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: box, height: box, borderRadius: 'var(--radius-control)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        transition: 'var(--transition-control)', ...base, ...(hover && !disabled ? hovered : null), ...style,
      }}
    >
      <Icon name={icon} size={box <= 32 ? 16 : 20} />
    </button>
  );
}
