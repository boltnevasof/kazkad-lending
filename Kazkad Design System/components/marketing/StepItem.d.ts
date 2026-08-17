import * as React from 'react';

/** One stage of the process timeline: numbered marker, title, duration, description. */
export interface StepItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 1-based stage number, shown in the marker when no icon is given. */
  index?: number | string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Mono duration label, e.g. "дни 1–3". */
  duration?: React.ReactNode;
  /** Icon stem replacing the number. */
  icon?: string;
  /** Blue-filled marker for the stage in progress. */
  active?: boolean;
  /** Drops the connector line on the final step. */
  last?: boolean;
}
export function StepItem(props: StepItemProps): React.JSX.Element;
