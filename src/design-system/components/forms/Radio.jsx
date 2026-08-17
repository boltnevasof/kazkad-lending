import React from 'react';

/** Round single-choice control. Group them with a shared `name`. */
export function Radio({ checked = false, onChange, label, name, value, disabled = false, style, ...rest }) {
  return (
    <label
      {...rest}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, font: 'var(--type-body-sm)', color: 'var(--text-body)', ...style }}
    >
      <input
        type="radio" name={name} value={value} checked={checked} disabled={disabled}
        onChange={(e) => onChange && onChange(value, e)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 20, height: 20, flex: 'none', borderRadius: '50%',
        border: `${checked ? '6px' : '1px'} solid ${checked ? 'var(--surface-accent)' : 'var(--border-default)'}`,
        background: 'var(--surface-card)', transition: 'var(--transition-control)',
      }} />
      {label && <span>{label}</span>}
    </label>
  );
}
