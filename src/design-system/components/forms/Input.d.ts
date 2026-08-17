import * as React from 'react';

/**
 * Single-line text control — 48px tall, 8px radius, 3px blue focus ring.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Draws the red error border. Pair with Field's `error`. */
  invalid?: boolean;
  /** Leading icon stem from assets/icons. */
  icon?: string;
}
export function Input(props: InputProps): React.JSX.Element;
