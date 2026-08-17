import React from 'react';

/** Underline tab strip for switching between sibling views (case verticals, stack). */
export function Tabs({ items = [], value, onChange, style, ...rest }) {
  return (
    <div {...rest} style={{ display: 'flex', gap: 28, borderBottom: '1px solid var(--border-hairline)', ...style }}>
      {items.map((it) => {
        const id = typeof it === 'string' ? it : it.value;
        const label = typeof it === 'string' ? it : it.label;
        const active = id === value;
        return (
          <button
            key={id} type="button" onClick={() => onChange && onChange(id)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 14px',
              font: 'var(--type-body)', fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)',
              color: active ? 'var(--text-strong)' : 'var(--text-muted)',
              boxShadow: active ? 'inset 0 -1.5px 0 var(--border-strong)' : 'none',
              transition: 'var(--transition-control)',
            }}
          >{label}</button>
        );
      })}
    </div>
  );
}
