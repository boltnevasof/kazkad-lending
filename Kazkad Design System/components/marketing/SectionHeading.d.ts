import * as React from 'react';

/**
 * Section opener — heading first, optional lead below. There is deliberately no eyebrow
 * slot: the brand never stacks a small label above a title.
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  /** One or two sentences under the heading. */
  lead?: React.ReactNode;
  /** Small word set inline after the heading, e.g. "кейсы". */
  label?: React.ReactNode;
  /** Item count shown inline after the heading, as in the concept's "кейсы 4". */
  count?: number | string;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2' | 'h3';
}
export function SectionHeading(props: SectionHeadingProps): React.JSX.Element;
