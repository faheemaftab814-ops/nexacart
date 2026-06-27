'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const testimonials = [
  {
    quote: 'The experience feels so polished. Every detail makes shopping feel effortless and luxurious.',
    name: 'Mina Alvarez',
    role: 'Design Director',
  },
  {
    quote: 'Fast delivery, beautiful products and a perfect mobile experience. It feels premium in every way.',
    name: 'Jordan Park',
    role: 'Creative Strategist',
  },
  {
    quote: 'NexaCart helped us discover products we now use every day. The interface is calm and inspiring.',
    name: 'Leo Chen',
    role: 'Product Lead',
  },
];

export function TestimonialsSection() {
  return (
    <Container className="space-y-8">
      <SectionHeading
        eyebrow="Customer Testimonials"
        title="Loved by shoppers who expect more from every purchase."
        description="Premium support, thoughtful curation, and beautiful delivery experiences keep customers returning."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            className="rounded-[1.5rem] border border-border/60 bg-card p-6 shadow-soft"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Quote className="h-5 w-5" />
            </div>
            <p className="mt-5 text-base leading-8 text-muted-foreground">“{item.quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-foreground">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  );
}
