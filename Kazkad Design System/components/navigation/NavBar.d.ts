import * as React from 'react';

export interface NavLink { href: string; label: string }

/** Site header — logo left, lowercase links left of centre, split CTA right. */
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  links?: NavLink[];
  /** href of the section currently in view; its link goes ink. */
  activeHref?: string;
  /** CTA label, lowercase, e.g. "обсудить задачу". Omitted = no CTA. */
  cta?: string;
  onCtaClick?: () => void;
  /** Called with the clicked href instead of navigating. */
  onNavigate?: (href: string) => void;
  sticky?: boolean;
  /** Frosted background once the page has scrolled. */
  scrolled?: boolean;
  /** Use on dark sections: white wordmark. */
  dark?: boolean;
}
export function NavBar(props: NavBarProps): React.JSX.Element;
