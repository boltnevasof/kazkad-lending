import React from 'react';

/** Pill describing a technology or discipline. Optionally selectable. */
export function Tag({ selected = false, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const interactive = typeof onClick === 'function';
  return (
    <span
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', height: 32, padding: '0 14px',
        borderRadius: 'var(--radius-chip)', font: 'var(--type-body-sm)',
        fontWeight: 'var(--weight-medium)', cursor: interactive ? 'pointer' : 'default',
        transition: 'var(--transition-control)',
        background: selected ? 'var(--surface-inverse)' : 'transparent',
        color: selected ? 'var(--text-inverse)' : 'var(--text-body)',
        border: `1px solid ${selected ? 'transparent' : hover && interactive ? 'var(--border-strong)' : 'var(--border-default)'}`,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
