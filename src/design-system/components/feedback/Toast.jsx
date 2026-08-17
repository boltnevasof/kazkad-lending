import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const TONES = {
  ok: { icon: 'circle-check', color: 'var(--status-ok-text)' },
  info: { icon: 'info', color: 'var(--text-accent)' },
  risk: { icon: 'circle-alert', color: 'var(--status-risk-text)' },
};

/** Transient confirmation, bottom-right. Ink surface, white text. */
export function Toast({ tone = 'ok', title, description, onClose, style, ...rest }) {
  const t = TONES[tone] || TONES.ok;
  return (
    <div
      role="status"
      {...rest}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 12, minWidth: 300, maxWidth: 420,
        padding: '16px 16px 16px 18px', borderRadius: 'var(--radius-md)',
        background: 'var(--surface-inverse)', color: 'var(--ink-000)',
        boxShadow: 'var(--shadow-raised)', ...style,
      }}
    >
      <Icon name={t.icon} size={20} style={{ color: t.color, marginTop: 1 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
        <span style={{ font: 'var(--type-body-sm)', fontWeight: 'var(--weight-semibold)' }}>{title}</span>
        {description && <span style={{ font: 'var(--type-body-sm)', color: 'rgba(255,255,255,.66)' }}>{description}</span>}
      </div>
      {onClose && <IconButton icon="x" label="Закрыть" variant="ghost" size="sm" onClick={onClose} style={{ color: 'rgba(255,255,255,.66)' }} />}
    </div>
  );
}
