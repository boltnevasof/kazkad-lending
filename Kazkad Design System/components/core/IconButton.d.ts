import * as React from 'react';

/** Single-glyph control for toolbars, card corners and close affordances. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon stem from assets/icons. */
  icon: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Accessible name — required, since there is no visible label. */
  label: string;
  disabled?: boolean;
}
export function IconButton(props: IconButtonProps): React.JSX.Element;
