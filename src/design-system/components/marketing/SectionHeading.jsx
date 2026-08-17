import React from 'react';

/**
 * Section opener. Heading first: the brand does not stack a small label above a title.
 * `count` renders the concept's "кейсы 4" pairing, inline and after the heading.
 */
export function SectionHeading({ title, lead, label, count, align = 'left', level = 'h2', style, ...rest }) {
  const H = level;
  return (
    <div
      {...rest}
      style={{
        display: 'flex', flexDirection: 'column', gap: 16,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align === 'center' ? 'center' : 'left',
        maxWidth: align === 'center' ? 760 : 820, ...style,
      }}
    >
      <H style={{ font: 'var(--type-h2)', letterSpacing: 'var(--tracking-heading)', color: 'var(--text-strong)', margin: 0 }}>
        {title}
        {(label || count != null) && (
          <span style={{ font: 'var(--type-body-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-muted)', marginLeft: 14, verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
            {label}{label && count != null ? ' ' : ''}{count}
          </span>
        )}
      </H>
      {lead && <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-muted)', margin: 0, maxWidth: 640 }}>{lead}</p>}
    </div>
  );
}
