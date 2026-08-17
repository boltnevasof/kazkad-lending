import React from 'react';

/** Binary toggle for instant-effect settings. */
export function Switch({ checked = false, onChange, label, disabled = false, style, ...rest }) {
  return (
    <label
      {...rest}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, font: 'var(--type-body-sm)', color: 'var(--text-body)', ...style }}
    >
      <span
        role="switch" aria-checked={checked}
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 44, height: 26, flex: 'none', borderRadius: 'var(--radius-pill)',
          background: checked ? 'var(--surface-accent)' : 'var(--ink-300)',
          padding: 3, display: 'inline-flex', alignItems: 'center',
          transition: `background-color var(--duration-base) var(--ease-standard)`,
        }}
      >
        <span style={{
          width: 20, height: 20, borderRadius: '50%', background: 'var(--ink-000)',
          boxShadow: 'var(--shadow-sm)',
          transform: checked ? 'translateX(18px)' : 'translateX(0)',
          transition: `transform var(--duration-base) var(--ease-out)`,
        }} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
