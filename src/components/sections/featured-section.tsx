import { Container } from '@/components/ui/container';

const pillars = [
  {
    title: 'System design',
    description: 'A scalable app-router foundation with clear modules and typed boundaries.',
  },
  {
    title: 'Experience design',
    description: 'Premium interface language grounded in motion, spacing, and clarity.',
  },
  {
    title: 'Engineering readiness',
    description: 'Structured utilities, config, and reusable UI primitives for growth.',
  },
];

export function FeaturedSection() {
  return (
    <Container className="space-y-6">
      <div className="max-w-2xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Foundation pillars</p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Built to support real product ambition.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-[1.5rem] border border-border/60 bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
