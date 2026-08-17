import React from 'react';

/** Label + hint + error wrapper shared by every form control. */
export function Field({ label, hint, error, required = false, htmlFor, children, style, ...rest }) {
  return (
    <div {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      {label && (
        <label htmlFor={htmlFor} style={{ font: 'var(--type-body-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-body)' }}>
          {label}{required && <span style={{ color: 'var(--text-accent)' }}> *</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <span style={{ font: 'var(--type-body-sm)', color: error ? 'var(--status-risk-text)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
