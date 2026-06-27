'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function NewsletterSection() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="rounded-[2rem] border border-border/60 bg-foreground p-8 text-background shadow-soft sm:p-10 lg:p-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-background/70">Stay in the loop</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Join the NexaCart newsletter.</h2>
            <p className="max-w-xl text-base leading-7 text-background/80">
              Receive early access to drops, seasonal offers, and premium product recommendations curated for modern living.
            </p>
          </div>
          <form className="flex flex-col gap-3 rounded-[1.25rem] border border-white/10 bg-background/10 p-4 backdrop-blur">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-full border border-white/10 bg-background/90 px-4 text-sm text-foreground outline-none ring-0"
            />
            <Button variant="secondary" className="h-12 justify-between rounded-full px-5 text-sm">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </motion.div>
    </Container>
  );
}
