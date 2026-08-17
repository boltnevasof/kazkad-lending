import * as React from 'react';

/** Flat band stating the three-week guarantee. Two columns: promise left, condition right. */
export interface GuaranteeCalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  headline?: React.ReactNode;
  /** The condition in full: what happens if the date slips. */
  detail?: React.ReactNode;
  /** inverse = ink band (default); tint = pale blue. */
  tone?: 'inverse' | 'tint';
  /** Optional Button under the condition. */
  action?: React.ReactNode;
}
export function GuaranteeCallout(props: GuaranteeCalloutProps): React.JSX.Element;
