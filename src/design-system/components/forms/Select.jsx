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

/** Native select in the brand shell, with a chevron drawn on top. */
export function Select({ invalid = false, options = [], placeholder, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      <select
        disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        {...rest}
        style={{ ...shell(focus, invalid), height: 48, padding: '0 44px 0 16px', appearance: 'none', WebkitAppearance: 'none', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <Icon name="chevron-down" size={18} style={{ position: 'absolute', right: 15, top: 15, color: 'var(--text-muted)', pointerEvents: 'none' }} />
    </span>
  );
}
