import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Square 20px checkbox; ink fill when checked, never blue-on-blue. */
export function Checkbox({ checked = false, onChange, label, disabled = false, style, ...rest }) {
  return (
    <label
      {...rest}
      style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, font: 'var(--type-body-sm)', color: 'var(--text-body)', ...style }}
    >
      <input
        type="checkbox" checked={checked} disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked, e)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, flex: 'none', borderRadius: 'var(--radius-xs)', marginTop: 2,
        background: checked ? 'var(--surface-accent)' : 'var(--surface-card)',
        border: `1px solid ${checked ? 'transparent' : 'var(--border-default)'}`,
        color: 'var(--text-inverse)', transition: 'var(--transition-control)',
      }}>
        {checked && <Icon name="check" size={14} />}
      </span>
      {label && <span style={{ lineHeight: 'var(--lh-body)' }}>{label}</span>}
    </label>
  );
}
