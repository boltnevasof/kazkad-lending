import React from 'react';

/** Hover explainer on an ink surface. Wraps its trigger. */
export function Tooltip({ label, placement = 'top', children, style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
    bottom: { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' },
    left: { right: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
    right: { left: 'calc(100% + 8px)', top: '50%', transform: 'translateY(-50%)' },
  }[placement];
  return (
    <span
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      {...rest}
      style={{ position: 'relative', display: 'inline-flex', ...style }}
    >
      {children}
      <span
        style={{
          position: 'absolute', ...pos, zIndex: 60, pointerEvents: 'none',
          padding: '6px 10px', borderRadius: 'var(--radius-xs)', whiteSpace: 'nowrap',
          background: 'var(--surface-inverse)', color: 'var(--ink-000)',
          font: 'var(--type-body-sm)',
          opacity: show ? 1 : 0,
          transition: `opacity var(--duration-fast) var(--ease-standard)`,
        }}
      >{label}</span>
    </span>
  );
}
