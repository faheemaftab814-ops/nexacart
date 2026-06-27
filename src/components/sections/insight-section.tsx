import { Container } from '@/components/ui/container';

export function InsightSection() {
  return (
    <Container className="rounded-[2rem] border border-border/60 bg-background/80 p-8 sm:p-10 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Architectural intent</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Thoughtful structure from the very first screen.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'App router structure',
            'Reusable UI primitives',
            'Theme and accessibility patterns',
            'SEO and performance ready',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border/60 bg-card p-5 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
