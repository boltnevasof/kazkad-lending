import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** One numbered stage in the process timeline. */
export function StepItem({ index, title, description, duration, icon, active = false, last = false, style, ...rest }) {
  return (
    <div {...rest} style={{ display: 'flex', gap: 20, ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 40, height: 40, borderRadius: 'var(--radius-sm)',
          background: active ? 'var(--surface-accent)' : 'var(--surface-tint)',
          color: active ? 'var(--text-inverse)' : 'var(--text-accent)',
          font: 'var(--type-eyebrow)', letterSpacing: 0,
        }}>
          {icon ? <Icon name={icon} size={18} /> : index}
        </span>
        {!last && <span style={{ flex: 1, width: 1, background: 'var(--border-hairline)', marginTop: 8, minHeight: 24 }} />}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingBottom: last ? 0 : 32 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <h4 style={{ font: 'var(--type-h4)', letterSpacing: 'var(--tracking-heading)', color: 'var(--text-strong)', margin: 0 }}>{title}</h4>
          {duration && <span style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-micro)', color: 'var(--text-muted)' }}>{duration}</span>}
        </div>
        {description && <p style={{ font: 'var(--type-body)', color: 'var(--text-muted)', margin: 0, maxWidth: 560 }}>{description}</p>}
      </div>
    </div>
  );
}
