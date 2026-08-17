import * as React from 'react';

/** Centred modal over a navy scrim. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
  /** Right-aligned action row. */
  footer?: React.ReactNode;
  /** Max width in px. 520 default, 720 for case detail. */
  width?: number;
  children?: React.ReactNode;
}
export function Dialog(props: DialogProps): React.JSX.Element;
