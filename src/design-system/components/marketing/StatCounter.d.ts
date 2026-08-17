import * as React from 'react';

/** Big figure with a caption, as in the concept's "20 / все проекты". */
export interface StatCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: React.ReactNode;
  /** Small blue unit after the figure, e.g. "недели" or "%". */
  suffix?: React.ReactNode;
  caption?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
export function StatCounter(props: StatCounterProps): React.JSX.Element;
