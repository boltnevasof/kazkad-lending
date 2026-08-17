import React from 'react';

/** Big number + caption. Used in rows of two to four. */
export function StatCounter({ value, suffix, caption, size = 'md', style, ...rest }) {
  const fonts = { sm: 'var(--type-h3)', md: 'var(--type-h2)', lg: 'var(--type-display)' };
  return (
    <div {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      <span style={{ font: fonts[size] || fonts.md, letterSpacing: 'var(--tracking-display)', color: 'var(--text-strong)', display: 'inline-flex', alignItems: 'baseline', gap: 4 }}>
        {value}
        {suffix && <span style={{ font: 'var(--type-h4)', color: 'var(--text-accent)' }}>{suffix}</span>}
      </span>
      {caption && <span style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>{caption}</span>}
    </div>
  );
}
