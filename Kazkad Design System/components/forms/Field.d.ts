import * as React from 'react';

/** Label, hint and error scaffolding for a single form control. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  /** Helper text below the control; replaced by `error` when set. */
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
}
export function Field(props: FieldProps): React.JSX.Element;
