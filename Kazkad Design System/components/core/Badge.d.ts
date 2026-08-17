import * as React from 'react';

/** Uppercase mono status marker on a tinted surface. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'accent' | 'neutral' | 'ok' | 'warn' | 'risk';
  /** Optional leading icon stem. */
  icon?: string;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): React.JSX.Element;
