import * as React from 'react';

/** The supplied Kazkad artwork. Set window.KZ_ASSET_BASE to point at assets/. */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** wordmark = mark + "Kazkad" in ink; wordmark-white / mark-white for dark bands; mark = star + steps only. */
  variant?: 'wordmark' | 'wordmark-white' | 'mark' | 'mark-white';
  /** Rendered height in px. 28 in navigation, 20 in footers, 40+ on hero. */
  height?: number;
}
export function Logo(props: LogoProps): React.JSX.Element;
