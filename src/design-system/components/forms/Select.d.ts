import * as React from 'react';

export interface SelectOption { value: string; label: string }

/** Native select in the brand shell. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Strings, or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  /** Empty first option. */
  placeholder?: string;
  invalid?: boolean;
}
export function Select(props: SelectProps): React.JSX.Element;
