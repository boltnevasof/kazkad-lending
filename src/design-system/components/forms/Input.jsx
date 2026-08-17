import React from 'react';
import { Icon } from '../core/Icon.jsx';

const shell = (focus, invalid) => ({
  width: '100%', background: 'var(--surface-card)',
  border: `1px solid ${invalid ? 'var(--status-risk-text)' : focus ? 'var(--border-accent)' : 'var(--border-default)'}`,
  borderRadius: 'var(--radius-control)',
  boxShadow: focus && !invalid ? `0 0 0 3px var(--focus-ring)` : 'none',
  font: 'var(--type-body)', color: 'var(--text-body)',
  transition: 'var(--transition-control), box-shadow var(--duration-fast) var(--ease-standard)',
  outline: 'none',
});

/** Single-line text control. 48px tall, 8px radius, blue focus ring. */
export function Input({ invalid = false, icon, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const input = (
    <input
      disabled={disabled}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      {...rest}
      style={{
        ...shell(focus, invalid), height: 48,
        padding: icon ? '0 16px 0 44px' : '0 16px',
        opacity: disabled ? 0.5 : 1, ...style,
      }}
    />
  );
  if (!icon) return input;
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <Icon name={icon} size={18} style={{ position: 'absolute', left: 15, top: 15, color: 'var(--text-faint)' }} />
      {input}
    </span>
  );
}
