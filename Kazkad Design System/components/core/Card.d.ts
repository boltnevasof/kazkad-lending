import * as React from 'react';

/** Neutral surface container — 20px radius, hairline border, shadow only when raised. */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements;
  /** default = white + hairline; tint = pale blue; subtle = grey; inverse = ink. */
  tone?: 'default' | 'tint' | 'subtle' | 'inverse';
  /** Inner padding in px. 28 default, 20 in dense grids, 40 for feature cards. */
  padding?: number;
  /** Lifts 2px and deepens the shadow on hover. */
  interactive?: boolean;
  elevated?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): React.JSX.Element;
