import * as React from 'react';

/**
 * The brand's action control: 8px radius, semibold label, optional trailing arrow.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = blue fill (one per view); secondary = hairline outline; ghost = text only; inverse = white on dark. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  /** sm 36px / md 44px / lg 56px tall. */
  size?: 'sm' | 'md' | 'lg';
  /** Icon stem from assets/icons — usually "arrow-right" or "arrow-up-right". */
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): React.JSX.Element;
