import * as React from 'react';

/** Square 20px checkbox with an inline label. */
export interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Inline label — takes the consent sentence in the enquiry form. */
  label?: React.ReactNode;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): React.JSX.Element;
