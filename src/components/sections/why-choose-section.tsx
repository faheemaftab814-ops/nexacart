'use client';

import { motion } from 'framer-motion';
import { Clock3, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const features = [
  {
    icon: Clock3,
    title: 'Fast Delivery',
    description: 'Priority dispatch and refined delivery partners for seamless, dependable arrivals.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure Shopping',
    description: 'Protected transactions and trusted checkout flows that feel effortless and safe.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Quality',
    description: 'Carefully selected materials and craftsmanship that reflect elevated standards.',
  },
  {
    icon: Sparkles,
    title: '24/7 Support',
    description: 'Concierge-level assistance whenever you need guidance, updates, or reassurance.',
  },
];

export function WhyChooseSection() {
  return (
    <Container className="rounded-[2rem] border border-border/60 bg-gradient-to-br from-background via-background to-slate-100/70 p-8 shadow-soft dark:to-slate-900/40 sm:p-10 lg:p-12">
      <SectionHeading
        eyebrow="Why Choose NexaCart"
        title="A refined shopping journey from first click to final delivery."
        description="Every detail is crafted to feel calm, premium, and thoughtfully designed for modern commerce."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="rounded-[1.25rem] border border-border/60 bg-card/80 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}
