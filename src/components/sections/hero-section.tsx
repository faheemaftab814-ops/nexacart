"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function HeroSection() {
  return (
    <Container className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-background via-background to-slate-100/70 p-8 shadow-soft dark:to-slate-900/40 sm:p-10 lg:p-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            Architecture preview for the future of commerce
          </div>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Premium commerce, built for calm scale.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              NexaCart is shaped as a refined foundation for ambitious retail brands seeking speed, trust, and elegance.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Explore architecture</Button>
            <Button variant="outline">View principles</Button>
          </div>
        </motion.div>

        <div className="rounded-[1.5rem] border border-border/70 bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Experience framework</p>
              <p className="mt-2 text-xl font-semibold text-foreground">Mobile-first foundation</p>
            </div>
            <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Ready
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Responsive layout', 'Accessible components', 'Theme system', 'SEO ready'].map((item) => (
              <div key={item} className="rounded-2xl border border-border/60 bg-background/70 p-4 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
            <p className="text-sm text-muted-foreground">Built with Next.js, TypeScript, Tailwind, and motion</p>
            <ArrowRight className="h-4 w-4 text-foreground" />
          </div>
        </div>
      </div>
    </Container>
  );
}
