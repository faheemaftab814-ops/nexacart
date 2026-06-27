'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, CreditCard, MapPin, ShieldCheck, Tag, Truck } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const steps = ['Cart', 'Checkout', 'Confirmation'];

const deliveryOptions = [
  {
    id: 'cod',
    title: 'Cash on Delivery',
    description: 'Pay when your order arrives at your doorstep.',
    price: 'Free',
    default: true,
  },
  {
    id: 'express',
    title: 'Express Delivery',
    description: 'Priority shipping with tracking updates.',
    price: '$12',
    default: false,
  },
  {
    id: 'pickup',
    title: 'Store Pickup',
    description: 'Collect your order from the nearest store.',
    price: 'Free',
    default: false,
  },
];

const summaryItems = [
  { label: 'Luxe Comfort Throw', price: '$96' },
  { label: 'Aurora Headphones', price: '$378' },
  { label: 'Shipping', price: '$0' },
];

function FormField({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-full border border-border/60 bg-background/80 px-4 text-sm outline-none"
      />
    </label>
  );
}

function SectionCard({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[1.5rem] border border-border/60 bg-card/80 p-4 shadow-soft sm:p-6"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm text-muted-foreground">
      <span>{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

export function CheckoutSection() {
  const [selectedDelivery, setSelectedDelivery] = useState('cod');

  return (
    <Container className="space-y-6 py-8 sm:py-10 lg:py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Checkout</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Complete your order</h1>
        </div>
        <div className="rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-muted-foreground">
          Secure and encrypted checkout
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-[1.25rem] border border-border/60 bg-card/70 p-3 sm:p-4">
        {steps.map((step, index) => {
          const isActive = index === 1;
          const isComplete = index < 1;

          return (
            <div key={step} className="flex items-center gap-2">
              <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${isActive ? 'bg-primary text-primary-foreground' : isComplete ? 'bg-emerald-500/10 text-emerald-600' : 'bg-background/90 text-muted-foreground'}`}>
                {isComplete ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
              </div>
              <span className={`text-sm font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{step}</span>
              {index < steps.length - 1 ? <div className="ml-1 h-px w-4 bg-border/70 sm:w-6" /> : null}
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <SectionCard title="Shipping Address" icon={MapPin}>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Full name" placeholder="Alex Morgan" />
              <FormField label="Phone" placeholder="+1 555 123 4567" />
              <FormField label="Email" placeholder="alex@example.com" type="email" />
              <FormField label="Postal code" placeholder="10001" />
              <div className="sm:col-span-2">
                <FormField label="Street address" placeholder="123 Marble Avenue" />
              </div>
              <div className="sm:col-span-2">
                <FormField label="Apartment, suite, etc." placeholder="Floor 8, Suite 90" />
              </div>
              <FormField label="City" placeholder="New York" />
              <FormField label="Country" placeholder="United States" />
            </div>
          </SectionCard>

          <SectionCard title="Billing Information" icon={CreditCard}>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Cardholder name" placeholder="Alex Morgan" />
              <FormField label="Card number" placeholder="4242 4242 4242 4242" />
              <FormField label="Expiry date" placeholder="MM/YY" />
              <FormField label="CVV" placeholder="123" />
            </div>
          </SectionCard>

          <SectionCard title="Delivery Method" icon={Truck}>
            <div className="space-y-3">
              {deliveryOptions.map((option) => {
                const selected = selectedDelivery === option.id;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedDelivery(option.id)}
                    className={`w-full rounded-[1.15rem] border p-4 text-left transition ${selected ? 'border-primary bg-primary/5 shadow-sm' : 'border-border/60 bg-background/70 hover:bg-accent/40'}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-foreground">{option.title}</span>
                          {option.id === 'cod' ? <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-semibold text-emerald-600">Recommended</span> : null}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
                      </div>
                      <span className="text-sm font-semibold text-foreground">{option.price}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[1.75rem] border border-border/60 bg-card p-5 shadow-soft sm:p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Order Summary</h2>
              <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">3 items</div>
            </div>

            <div className="mt-6 space-y-4">
              {summaryItems.map((item) => (
                <SummaryRow key={item.label} label={item.label} value={item.price} />
              ))}
            </div>

            <div className="mt-5 rounded-[1.15rem] border border-dashed border-border/60 bg-background/70 p-4">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Tag className="h-4 w-4 text-primary" />
                Coupon code
              </label>
              <div className="mt-3 flex gap-2">
                <input placeholder="WELCOME10" className="h-11 flex-1 rounded-full border border-border/60 bg-background px-4 text-sm outline-none" />
                <Button size="sm" className="rounded-full">Apply</Button>
              </div>
            </div>

            <div className="mt-6 space-y-3 border-t border-border/60 pt-5">
              <SummaryRow label="Subtotal" value="$474" />
              <SummaryRow label="Tax" value="$18" />
              <SummaryRow label="Discount" value="-$10" />
              <div className="flex items-center justify-between border-t border-border/60 pt-4 text-base font-semibold text-foreground">
                <span>Total</span>
                <span>$482</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button className="w-full rounded-full gap-2">
                Place Order
                <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 rounded-[1rem] border border-border/60 bg-background/70 px-3 py-3 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Your data is protected with secure checkout.
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </Container>
  );
}
