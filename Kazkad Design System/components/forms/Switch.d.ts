import * as React from 'react';

/** Binary toggle whose effect is immediate. */
export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
}
export function Switch(props: SwitchProps): React.JSX.Element;
