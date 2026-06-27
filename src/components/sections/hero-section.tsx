"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const trustBadges = ['Free Delivery', 'Cash on Delivery', 'Secure Payments'];

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Container className="overflow-hidden rounded-[2.25rem] border border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-0 shadow-soft">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4 text-amber-300" />
            Up to 50% OFF
          </div>

          <div className="mt-6 space-y-4">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Everything You Need, Delivered to Your Door.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Discover quality essentials at affordable prices, backed by fast delivery and a shopping experience that feels effortless.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => scrollToSection('products')} className="bg-white text-slate-950 hover:bg-slate-100">
              Shop Now
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('categories')} className="border-white/20 bg-white/10 text-white hover:bg-white/20">
              Browse Categories
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-200 backdrop-blur">
                <BadgeCheck className="h-4 w-4 text-emerald-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative min-h-[320px] bg-slate-950/40 p-4 sm:min-h-[420px] lg:min-h-[520px] lg:p-6"
        >
          <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70">
            <Image src="/placeholder-product.jpg" alt="Lifestyle shopping showcase" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

            <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
              New Season Picks
            </div>

            <div className="absolute bottom-4 left-4 right-4 space-y-3 rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <Truck className="h-4 w-4 text-amber-300" />
                Fast delivery across your city
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Trusted quality and secure payments
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
