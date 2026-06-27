'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const cartItems = [
  {
    id: 1,
    name: 'Luxe Comfort Throw',
    price: 96,
    quantity: 1,
    stock: 'In Stock',
    image: '/placeholder-product.jpg',
  },
  {
    id: 2,
    name: 'Aurora Headphones',
    price: 189,
    quantity: 2,
    stock: 'Limited Stock',
    image: '/placeholder-product.jpg',
  },
];

function CartItemRow({ item }: { item: (typeof cartItems)[number] }) {
  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col gap-4 rounded-[1.25rem] border border-border/60 bg-card p-4 shadow-sm sm:flex-row sm:items-center"
    >
      <div className="relative h-24 w-full overflow-hidden rounded-[1rem] sm:w-28">
        <Image src={item.image} alt={item.name} fill sizes="112px" className="object-cover" />
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.stock}</p>
          </div>
          <p className="text-lg font-semibold text-foreground">${item.price * quantity}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center rounded-full border border-border/60 bg-background/80 p-1">
            <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-accent">
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-8 text-center text-sm font-semibold text-foreground">{quantity}</span>
            <button type="button" onClick={() => setQuantity((value) => value + 1)} className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-accent">
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function EmptyCartState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[1.75rem] border border-border/60 bg-card p-8 text-center shadow-soft"
    >
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
        <ShoppingBag className="h-10 w-10" />
      </div>
      <h2 className="mt-6 text-2xl font-semibold text-foreground">Your cart is empty</h2>
      <p className="mx-auto mt-3 max-w-md text-base leading-8 text-muted-foreground">
        Discover curated essentials and add a few favorites to your cart to begin your premium shopping experience.
      </p>
      <Button className="mt-6 rounded-full">Continue Shopping</Button>
    </motion.div>
  );
}

export function CartSection() {
  const cartCount = cartItems.length;
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 150 ? 0 : 12;
  const discount = 10;
  const total = subtotal + shipping - discount;

  return (
    <Container className="space-y-8 py-8 sm:py-10 lg:py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Shopping Cart</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Your selected essentials</h1>
        </div>
        <p className="text-sm text-muted-foreground">{cartCount} item{cartCount === 1 ? '' : 's'} in your cart</p>
      </div>

      {cartCount === 0 ? (
        <EmptyCartState />
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {cartItems.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-soft"
          >
            <h2 className="text-xl font-semibold text-foreground">Order Summary</h2>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-foreground">${subtotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Shipping</span>
                <span className="font-medium text-foreground">${shipping}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Discount</span>
                <span className="font-medium text-foreground">-${discount}</span>
              </div>
              <div className="flex items-center justify-between border-t border-border/60 pt-4 text-base font-semibold text-foreground">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Button className="w-full rounded-full">Proceed to Checkout</Button>
              <Button variant="outline" className="w-full rounded-full">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.aside>
        </div>
      )}
    </Container>
  );
}
