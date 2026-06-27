"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';
import { navigationItems } from '@/constants/navigation';
import { cn } from '@/lib/utils';

interface IconActionProps {
  icon: React.ElementType;
  label: string;
  badge?: string | number;
  onClick?: () => void;
  href?: string;
}

function IconAction({ icon: Icon, label, badge, onClick, href }: IconActionProps) {
  const content = (
    <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent">
      <Icon className="h-4 w-4" />
      {badge ? (
        <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-semibold text-primary-foreground">
          {badge}
        </span>
      ) : null}
    </span>
  );

  if (href) {
    return (
      <a href={href} aria-label={label} className="inline-flex">
        {content}
      </a>
    );
  }

  return (
    <button type="button" aria-label={label} onClick={onClick} className="inline-flex">
      {content}
    </button>
  );
}

function SearchBar() {
  return (
    <label className="flex w-full items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2.5 text-sm shadow-sm backdrop-blur transition focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10">
      <Search className="h-4 w-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search products"
        className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        aria-label="Search products"
      />
    </label>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background shadow-soft">
            N
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">{siteConfig.name}</p>
            <p className="text-sm font-medium text-foreground">{siteConfig.tagline}</p>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-6 xl:gap-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium transition duration-200 hover:text-foreground',
                    isActive ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  <span className="relative after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition after:duration-300 hover:after:scale-x-100">
                    {item.label}
                  </span>
                  {isActive ? <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary" /> : null}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden flex-1 justify-end xl:flex">
          <div className="w-full max-w-sm">
            <SearchBar />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <IconAction icon={Heart} label="Wishlist" badge="2" />
            <IconAction icon={ShoppingBag} label="Cart" badge="3" />
            <IconAction icon={UserRound} label="Account" href="/contact" />
          </div>

          <button
            type="button"
            aria-label="Open navigation"
            onClick={() => setMobileOpen((state) => !state)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground shadow-sm transition hover:border-primary/40 hover:bg-accent lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border/60 bg-background/95 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'rounded-2xl px-4 py-3 text-sm font-medium transition',
                        isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex flex-wrap items-center gap-2">
                <div className="w-full sm:w-auto">
                  <SearchBar />
                </div>
                <IconAction icon={Heart} label="Wishlist" badge="2" />
                <IconAction icon={ShoppingBag} label="Cart" badge="3" />
                <IconAction icon={UserRound} label="Account" href="/contact" />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
