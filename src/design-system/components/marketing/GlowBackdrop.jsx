import React from 'react';

const BASE = () => (typeof window !== 'undefined' && window.KZ_ASSET_BASE) || './assets/';

/** The blurred blue star from the concept board, placed behind a section corner. */
export function GlowBackdrop({ size = 720, position = 'top-right', opacity = 0.7, style, ...rest }) {
  const offsets = {
    'top-right': { top: -size * 0.4, right: -size * 0.22 },
    'top-left': { top: -size * 0.4, left: -size * 0.22 },
    'bottom-left': { bottom: -size * 0.45, left: -size * 0.25 },
    'bottom-right': { bottom: -size * 0.45, right: -size * 0.25 },
    center: { top: '50%', left: '50%', transform: 'translate(-50%,-50%)' },
  };
  return (
    <img
      src={BASE() + 'star-glow.png'} alt="" aria-hidden="true"
      {...rest}
      style={{
        position: 'absolute', width: size, height: 'auto', opacity,
        pointerEvents: 'none', userSelect: 'none', zIndex: 0,
        ...offsets[position], ...style,
      }}
    />
  );
}
