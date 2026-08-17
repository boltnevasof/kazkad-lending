import * as React from 'react';

/** Multi-line text control sharing Input's shell. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  rows?: number;
}
export function Textarea(props: TextareaProps): React.JSX.Element;
