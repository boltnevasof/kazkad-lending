import React from 'react';

/**
 * The three-week promise as a flat typographic band — no icon, no card, no radius.
 * The headline is set large; the condition sits beside it in the same block.
 */
export function GuaranteeCallout({ headline, detail, tone = 'inverse', action, style, ...rest }) {
  const inverse = tone === 'inverse';
  return (
    <div
      {...rest}
      style={{
        display: 'grid', gridTemplateColumns: '1.1fr minmax(0,1fr)', gap: 48, alignItems: 'end',
        padding: '48px 40px',
        background: inverse ? 'var(--surface-inverse)' : 'var(--surface-tint)',
        color: inverse ? 'var(--ink-000)' : 'var(--text-body)',
        ...style,
      }}
    >
      <span style={{
        font: 'var(--weight-bold) clamp(24px,2.5vw,36px)/1.1 var(--font-core)',
        letterSpacing: 'var(--tracking-heading)', color: 'inherit', textWrap: 'balance',
      }}>{headline}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
        {detail && (
          <p style={{ font: 'var(--type-body)', margin: 0, color: inverse ? 'rgba(255,255,255,.66)' : 'var(--text-muted)' }}>{detail}</p>
        )}
        {action}
      </div>
    </div>
  );
}
