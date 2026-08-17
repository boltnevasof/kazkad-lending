import React from 'react';
import { Icon } from '../core/Icon.jsx';

const FILLS = {
  grey: 'var(--ink-500)',
  tint: 'var(--surface-tint)',
  blue: 'var(--surface-accent)',
  subtle: 'var(--surface-subtle)',
};

const SIZES = {
  sm: { inset: 12, title: 15, link: 13, square: 24, arrow: 13 },
  md: { inset: 15, title: 18, link: 14, square: 30, arrow: 15 },
};

/**
 * The concept board's case tile: a square panel with the title set inside the top-left
 * and the link inside the bottom-left. The blue arrow square in the bottom-right repeats
 * the header CTA's 34×34 motif. Flat fill, 1px hairline, no radius, no shadow.
 */
export function CaseCard({ title, image, fill = 'tint', size = 'md', linkLabel = 'посмотреть кейс', href = '#', onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  // Text over a screenshot or photograph is always white on a scrim; flat fills decide by tone.
  const dark = Boolean(image) || fill === 'blue' || fill === 'grey';
  const s = SIZES[size] || SIZES.md;
  return (
    <a
      href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
      style={{
        position: 'relative', display: 'block', aspectRatio: '1 / 1', overflow: 'hidden',
        background: FILLS[fill] || FILLS.tint,
        border: `1px solid ${hover ? 'var(--border-strong)' : 'var(--border-default)'}`,
        color: dark ? 'var(--ink-000)' : 'var(--text-strong)',
        transition: `border-color var(--duration-fast) var(--ease-standard)`,
        ...style,
      }}
    >
      {image && (
        <img
          src={image} alt=""
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center bottom',
            transform: hover ? 'scale(1.04)' : 'scale(1)',
            transition: `transform var(--duration-slow) var(--ease-out)`,
          }}
        />
      )}
      {image && (
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--scrim-image)' }} />
      )}
      <span style={{
        position: 'absolute', left: s.inset, top: s.inset, right: s.inset, zIndex: 1,
        font: `var(--weight-semibold) ${s.title}px/1.28 var(--font-core)`,
        letterSpacing: 'var(--tracking-heading)', textWrap: 'balance',
      }}>{title}</span>
      <span style={{
        position: 'absolute', left: s.inset, bottom: s.inset, zIndex: 1,
        font: `var(--weight-medium) ${s.link}px/1 var(--font-core)`,
      }}>{linkLabel}</span>
      <span style={{
        position: 'absolute', right: s.inset, bottom: s.inset, zIndex: 1,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: s.square, height: s.square,
        background: dark ? 'var(--ink-000)' : (hover ? 'var(--blue-700)' : 'var(--surface-accent)'),
        color: dark ? 'var(--blue-600)' : 'var(--ink-000)',
        transition: `background-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)`,
        transform: hover ? 'translateX(2px)' : 'none',
      }}>
        <Icon name="arrow-right" size={s.arrow} />
      </span>
    </a>
  );
}
