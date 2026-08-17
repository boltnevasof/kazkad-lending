import * as React from 'react';

export interface TabItem { value: string; label: string }

/** Underline tab strip. */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (value: string) => void;
}
export function Tabs(props: TabsProps): React.JSX.Element;
