import * as React from 'react';

/** Transient confirmation on an ink surface. Place bottom-right, 24px from the edges. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'ok' | 'info' | 'risk';
  title?: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
}
export function Toast(props: ToastProps): React.JSX.Element;
