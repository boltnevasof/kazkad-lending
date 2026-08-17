import * as React from 'react';

/** Round single-choice control; thick blue ring when selected. */
export interface RadioProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked?: boolean;
  onChange?: (value: string | undefined, event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
}
export function Radio(props: RadioProps): React.JSX.Element;
