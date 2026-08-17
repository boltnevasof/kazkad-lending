import * as React from 'react';

/** Pill for a technology, discipline or filter value. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Selected tags invert to ink fill. */
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): React.JSX.Element;
