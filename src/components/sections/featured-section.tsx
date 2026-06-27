"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bath, BedDouble, Boxes, Baby, Home, Package2, Sparkles, TentTree } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const categories = [
  { title: 'Baby Products', count: '120+ items', icon: Baby, image: '/placeholder-product.jpg' },
  { title: 'Home & Kitchen', count: '340+ items', icon: Home, image: '/placeholder-product.jpg' },
  { title: 'Cotton Pillows', count: '80+ items', icon: Package2, image: '/placeholder-product.jpg' },
  { title: 'Bedsheets', count: '65+ items', icon: BedDouble, image: '/placeholder-product.jpg' },
  { title: 'Blankets', count: '90+ items', icon: Home, image: '/placeholder-product.jpg' },
  { title: 'Bathroom Essentials', count: '110+ items', icon: Bath, image: '/placeholder-product.jpg' },
  { title: 'Storage & Organization', count: '145+ items', icon: Boxes, image: '/placeholder-product.jpg' },
  { title: 'Travel Accessories', count: '70+ items', icon: TentTree, image: '/placeholder-product.jpg' },
];

const deals = [
  { title: 'Weekend Essentials', discount: 'Up to 40% Off', badge: 'Limited Time', cta: 'Shop Deals' },
  { title: 'Cozy Home Edit', discount: 'Save 30%', badge: 'Ends Soon', cta: 'Explore Offer' },
  { title: 'Baby & Family', discount: 'Buy 2 Save 25%', badge: 'Trending', cta: 'View Picks' },
  { title: 'Travel Ready', discount: 'Free Shipping + 15% Off', badge: 'New Drop', cta: 'See Offers' },
];

function CategoryCard({ category, index }: { category: (typeof categories)[number]; index: number }) {
  const Icon = category.icon;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group overflow-hidden rounded-[1.5rem] border border-border/60 bg-card text-left shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={category.image} alt={category.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-background/85 text-foreground shadow-sm backdrop-blur">
          <Icon className="h-5 w-5" />
        </div>
        <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
          {category.count}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">Premium essentials curated for everyday comfort.</p>
      </div>
    </motion.button>
  );
}

function DealCard({ deal, index }: { deal: (typeof deals)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="rounded-[1.5rem] border border-border/60 bg-gradient-to-br from-background to-slate-100/70 p-6 shadow-soft dark:to-slate-900/40"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{deal.discount}</span>
        <span className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          {deal.badge}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{deal.title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">Fresh picks with limited-time pricing and premium quality.</p>
      <Button size="sm" className="mt-5 rounded-full">
        {deal.cta}
      </Button>
    </motion.div>
  );
}

export function FeaturedSection() {
  return (
    <Container id="categories" className="space-y-8">
      <SectionHeading
        eyebrow="Featured Categories"
        title="Explore curated collections with premium polish."
        description="From everyday essentials to cozy home upgrades, each category is designed to feel practical and elevated."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryCard key={category.title} category={category} index={index} />
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Today's Deals" title="Limited-time offers worth exploring." className="max-w-xl" />
          <div className="hidden items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-sm text-muted-foreground sm:flex">
            <Sparkles className="h-4 w-4 text-primary" />
            Fresh picks daily
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {deals.map((deal, index) => (
            <DealCard key={deal.title} deal={deal} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}
