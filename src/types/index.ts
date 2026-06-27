export type ThemeMode = 'light' | 'dark' | 'system';

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  tagline: string;
  url: string;
}
