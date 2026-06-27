"use client";

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" onClick={() => onOpenChange?.(false)}>
      <div className="ml-auto flex h-full w-[85vw] max-w-sm flex-col bg-background p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function SheetHeader({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-6 flex items-center justify-between', className)}>{children}</div>;
}

export function SheetTitle({ children, className }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn('text-lg font-semibold text-foreground', className)}>{children}</h2>;
}

export function SheetClose({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className="rounded-full border border-border p-2" {...props}>
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  );
}
