import * as React from 'react';

/** Hover explainer on an ink surface. Wraps the trigger element. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
}
export function Tooltip(props: TooltipProps): React.JSX.Element;
