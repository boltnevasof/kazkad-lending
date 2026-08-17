import React from 'react';

const shell = (focus, invalid) => ({
  width: '100%', background: 'var(--surface-card)',
  border: `1px solid ${invalid ? 'var(--status-risk-text)' : focus ? 'var(--border-accent)' : 'var(--border-default)'}`,
  borderRadius: 'var(--radius-control)',
  boxShadow: focus && !invalid ? `0 0 0 3px var(--focus-ring)` : 'none',
  font: 'var(--type-body)', color: 'var(--text-body)',
  transition: 'var(--transition-control), box-shadow var(--duration-fast) var(--ease-standard)',
  outline: 'none',
});

/** Multi-line text control. Same shell as Input; min 3 rows. */
export function Textarea({ invalid = false, rows = 4, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows} disabled={disabled}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      {...rest}
      style={{ ...shell(focus, invalid), padding: '14px 16px', resize: 'vertical', lineHeight: 'var(--lh-body)', opacity: disabled ? 0.5 : 1, ...style }}
    />
  );
}
