import * as React from 'react';

/**
 * Square case tile copied from the concept board — title inside the top-left,
 * "посмотреть кейс" inside the bottom-left, and a blue arrow square in the bottom-right
 * repeating the header CTA motif. Flat fill, sharp corners, no shadow.
 */
export interface CaseCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title?: React.ReactNode;
  /** Screenshot or photograph filling the tile. Omit to show the flat fill alone. */
  image?: string;
  /** Flat panel colour when there is no image. The concept uses all four. */
  fill?: 'tint' | 'blue' | 'grey' | 'subtle';
  /** md for a full case grid; sm for the compact row under the hero (210px tiles). */
  size?: 'sm' | 'md';
  linkLabel?: string;
}
export function CaseCard(props: CaseCardProps): React.JSX.Element;
