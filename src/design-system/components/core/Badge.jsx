import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  accent: { color: 'var(--blue-700)', background: 'var(--blue-050)' },
  neutral: { color: 'var(--text-muted)', background: 'var(--surface-subtle)' },
  ok: { color: 'var(--status-ok-text)', background: 'var(--status-ok-surface)' },
  warn: { color: 'var(--status-warn-text)', background: 'var(--status-warn-surface)' },
  risk: { color: 'var(--status-risk-text)', background: 'var(--status-risk-surface)' },
};

/** Small status marker. Mono type, uppercase, tinted surface. */
export function Badge({ tone = 'accent', icon, children, style, ...rest }) {
  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '4px 10px', borderRadius: 'var(--radius-xs)',
        font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-micro)',
        textTransform: 'uppercase', whiteSpace: 'nowrap',
        ...(TONES[tone] || TONES.accent), ...style,
      }}
    >
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  );
}
