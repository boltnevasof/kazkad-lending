import React from 'react';

// Absolute by default: the prerendered HTML is built without window, and a relative
// './assets/' would resolve to /cases/assets/ on nested pages such as /cases/moove.
const BASE = () => (typeof window !== 'undefined' && window.KZ_ASSET_BASE) || '/assets/';

/** The Kazkad logo. Bitmap crops of the supplied artwork — never redrawn. */
export function Logo({ variant = 'wordmark', height = 28, style, ...rest }) {
  const src = BASE() + (
    variant === 'mark' ? 'logo-mark.png' :
    variant === 'mark-white' ? 'logo-mark-white.png' :
    variant === 'wordmark-white' ? 'logo-wordmark-white.png' : 'logo-wordmark.png'
  );
  return <img src={src} alt="Kazkad" {...rest} style={{ height, width: 'auto', display: 'block', flex: 'none', alignSelf: 'flex-start', ...style }} />;
}
