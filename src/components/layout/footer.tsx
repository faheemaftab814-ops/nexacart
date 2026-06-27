import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { footerLinks } from '@/constants/navigation';
import { siteConfig } from '@/config/site';

const socialLinks = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'Facebook', href: '#', icon: Facebook },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.6fr_0.6fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {siteConfig.name}
          </p>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            A premium commerce destination designed with clarity, performance, and thoughtful detail for modern shoppers.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {footerLinks.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Customer Service</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {footerLinks.support.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Follow Us</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">© 2026 NexaCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
