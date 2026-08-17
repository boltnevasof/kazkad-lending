import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Icon } from '../core/Icon.jsx';

/**
 * Site header, copied from the concept board: logo hard left, lowercase links set
 * left of centre, then a light rectangle and a 34×34 blue square holding the arrow.
 */
export function NavBar({ links = [], activeHref, cta, onCtaClick, onNavigate, sticky = true, scrolled = false, dark = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <header
      {...rest}
      style={{
        position: sticky ? 'sticky' : 'relative', top: 0, zIndex: 50,
        height: 'var(--nav-height)',
        background: scrolled ? (dark ? 'var(--glass-fill-dark)' : 'var(--glass-fill)') : 'transparent',
        backdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
        transition: `background-color var(--duration-base) var(--ease-standard)`,
        ...style,
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-gutter)', height: '100%', display: 'flex', alignItems: 'center' }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('#top'); }} style={{ display: 'flex', flex: 'none' }}>
          <Logo variant={dark ? 'wordmark-white' : 'wordmark'} height={24} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 30, marginLeft: 'min(300px, 16vw)' }}>
          {links.map((l) => (
            <a
              key={l.href} href={l.href}
              onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l.href); }}
              style={{
                font: 'var(--type-nav)',
                color: activeHref === l.href ? 'var(--text-strong)' : 'var(--text-muted)',
              }}
            >{l.label}</a>
          ))}
        </nav>
        {cta && (
          <div
            onClick={onCtaClick}
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            style={{ display: 'flex', alignItems: 'stretch', gap: 4, marginLeft: 'auto', height: 34, cursor: 'pointer' }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', padding: '0 18px', flex: 'none',
              background: hover ? (dark ? 'rgba(255,255,255,.14)' : 'var(--ink-200)') : (dark ? 'rgba(255,255,255,.08)' : 'var(--ink-100)'),
              color: 'var(--text-body)', font: 'var(--type-body-sm)', fontWeight: 'var(--weight-medium)',
              transition: `background-color var(--duration-fast) var(--ease-standard)`,
              whiteSpace: 'nowrap',
            }}>{cta}</span>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 34, flex: 'none', background: hover ? 'var(--blue-700)' : 'var(--surface-accent)',
              color: 'var(--ink-000)',
              transition: `background-color var(--duration-fast) var(--ease-standard)`,
            }}>
              <Icon name="arrow-right" size={16} />
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
