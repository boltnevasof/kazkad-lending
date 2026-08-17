import React from 'react';

/** Neutral container: 20px radius, hairline border, no shadow until raised or hovered. */
export function Card({ as = 'div', tone = 'default', padding = 28, interactive = false, elevated = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const tones = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-hairline)' },
    tint: { background: 'var(--surface-tint)', border: '1px solid transparent' },
    subtle: { background: 'var(--surface-subtle)', border: '1px solid transparent' },
    inverse: { background: 'var(--surface-inverse)', border: '1px solid transparent', color: 'var(--text-inverse)' },
  };
  return (
    <Tag
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        borderRadius: 'var(--radius-card)', padding,
        boxShadow: elevated ? 'var(--shadow-card)' : 'none',
        transition: `box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)`,
        cursor: interactive ? 'pointer' : undefined,
        ...tones[tone],
        ...(interactive && hover ? { boxShadow: 'var(--shadow-raised)', transform: 'translateY(-2px)' } : null),
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
