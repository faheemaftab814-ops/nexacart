import Link from 'next/link';
import { footerLinks } from '@/constants/navigation';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.6fr_0.6fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {siteConfig.name}
          </p>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            A premium commerce foundation designed with clarity, performance, and thoughtful detail.
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
          <h2 className="text-sm font-semibold text-foreground">Support</h2>
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
      </div>
    </footer>
  );
}
