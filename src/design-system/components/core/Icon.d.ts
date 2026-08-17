import * as React from 'react';

/**
 * Monochrome icon from the bundled Lucide set (assets/icons). The file is fetched and inlined so it inherits currentColor.
 * Set window.KZ_ICON_BASE once per page to point at assets/icons/, or pass `base`.
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** File stem in assets/icons, e.g. "arrow-right". */
  name: string;
  /** Square size in px. 16 inline with body text, 20 in controls, 24 in headings. */
  size?: number;
  /** Override the icon directory URL prefix. */
  base?: string;
}
export function Icon(props: IconProps): React.JSX.Element;
