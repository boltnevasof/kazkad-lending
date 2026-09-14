import React from 'react';

// Absolute by default, see Logo.jsx: the prerender has no window to read the base from.
const BASE = () => (typeof window !== 'undefined' && window.KZ_ICON_BASE) || '/assets/icons/';
const CACHE = {};

/** Monochrome Lucide glyph. The SVG file is inlined so it inherits currentColor. */
export function Icon({ name, size = 20, base, style, ...rest }) {
  const px = Number.parseFloat(size) || 20;
  const url = `${base || BASE()}${name}.svg`;
  const [raw, setRaw] = React.useState(CACHE[url] || '');
  React.useEffect(() => {
    if (CACHE[url]) { setRaw(CACHE[url]); return undefined; }
    let alive = true;
    fetch(url)
      .then((r) => (r.ok ? r.text() : ''))
      .then((t) => { CACHE[url] = t; if (alive) setRaw(t); })
      .catch(() => {});
    return () => { alive = false; };
  }, [url]);
  // Bake the pixel size into the SVG itself, so the glyph can never fall back to its
  // intrinsic size if the wrapper ends up without a resolved width.
  const markup = raw
    ? raw.replace(/width="[^"]*"/, `width="${px}"`).replace(/height="[^"]*"/, `height="${px}"`)
    : '';
  return (
    <span
      aria-hidden="true"
      {...rest}
      style={{ display: 'inline-block', width: px, height: px, flex: 'none', overflow: 'hidden', lineHeight: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
