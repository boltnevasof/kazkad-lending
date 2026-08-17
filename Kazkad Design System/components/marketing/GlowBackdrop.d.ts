import * as React from 'react';

/**
 * The brand's blurred blue star, used as a background glow. One per screen, in a corner.
 * Requires a `position: relative; overflow: hidden` parent.
 */
export interface GlowBackdropProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Rendered width in px. 720 on hero, 380 on smaller bands. */
  size?: number;
  position?: 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right' | 'center';
  /** 0.7 on white, 0.35 on dark. */
  opacity?: number;
}
export function GlowBackdrop(props: GlowBackdropProps): React.JSX.Element;
