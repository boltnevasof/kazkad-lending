import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

/** Centred modal on a navy scrim. Used for the enquiry form and case detail. */
export function Dialog({ open = false, title, description, onClose, footer, width = 520, children, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100, display: 'grid', placeItems: 'center',
        padding: 24, background: 'rgba(34,58,92,.44)', backdropFilter: 'blur(4px)',
      }}
    >
      <div
        role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        {...rest}
        style={{
          width: '100%', maxWidth: width, background: 'var(--surface-card)',
          borderRadius: 'var(--radius-card)', padding: 32, boxShadow: 'var(--shadow-raised)',
          display: 'flex', flexDirection: 'column', gap: 20, ...style,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
            {title && <h3 style={{ font: 'var(--type-h3)', letterSpacing: 'var(--tracking-heading)', color: 'var(--text-strong)', margin: 0 }}>{title}</h3>}
            {description && <p style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)', margin: 0 }}>{description}</p>}
          </div>
          {onClose && <IconButton icon="x" label="Закрыть" variant="ghost" size="sm" onClick={onClose} />}
        </div>
        {children}
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>{footer}</div>}
      </div>
    </div>
  );
}
