'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Minus, Plus, ShoppingBag, Star, Truck } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

const galleryImages = [
  '/placeholder-product.jpg',
  '/placeholder-product.jpg',
  '/placeholder-product.jpg',
  '/placeholder-product.jpg',
];

const colors = ['Midnight', 'Sand', 'Emerald'];
const sizes = ['S', 'M', 'L', 'XL'];

const tabs = ['Description', 'Specifications', 'Reviews', 'Shipping Information'] as const;

type TabKey = (typeof tabs)[number];

const tabContent: Record<TabKey, { title: string; body: string }> = {
  Description: {
    title: 'Elevated everyday comfort',
    body:
      'Designed for modern living, this premium piece blends texture, durability, and effortless style. It is crafted to feel refined from the first touch and dependable through daily use.',
  },
  Specifications: {
    title: 'Material & details',
    body:
      'Soft-touch fabric, reinforced seams, lightweight structure, and machine-wash friendly care instructions for long-lasting use.',
  },
  Reviews: {
    title: 'Loved by customers',
    body:
      'Rated 4.8/5 by over 300 shoppers for comfort, quality, and its premium feel in everyday spaces.',
  },
  'Shipping Information': {
    title: 'Fast and secure delivery',
    body:
      'Free delivery on orders above $75, with 2–4 day dispatch and flexible tracking from checkout through arrival.',
  },
};

const relatedProducts = [
  {
    title: 'Studio Lounge Chair',
    category: 'Furniture',
    price: '$249',
    image: '/placeholder-product.jpg',
  },
  {
    title: 'Soft Knit Throw',
    category: 'Home',
    price: '$86',
    image: '/placeholder-product.jpg',
  },
  {
    title: 'Ceramic Table Lamp',
    category: 'Decor',
    price: '$74',
    image: '/placeholder-product.jpg',
  },
  {
    title: 'Travel Organizer',
    category: 'Accessories',
    price: '$39',
    image: '/placeholder-product.jpg',
  },
];

function ProductCard({ product }: { product: (typeof relatedProducts)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-card shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-foreground">{product.title}</h3>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-base font-semibold text-foreground">{product.price}</p>
          <Button size="sm" className="rounded-full">
            View
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function ProductDetailsSection() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabKey>('Description');

  return (
    <Container className="space-y-10 py-8 sm:py-10 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-card p-3 shadow-soft">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
              <Image src={galleryImages[selectedImage]} alt="Featured product" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {galleryImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`overflow-hidden rounded-[1rem] border p-1 transition ${selectedImage === index ? 'border-primary ring-2 ring-primary/10' : 'border-border/70'}`}
              >
                <div className="relative aspect-square overflow-hidden rounded-[0.8rem]">
                  <Image src={image} alt={`Thumbnail ${index + 1}`} fill sizes="100px" className="object-cover" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Premium Essentials</p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Luxe Comfort Throw Blanket
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>Category: Home</span>
              <span>•</span>
              <span>Brand: North & Nest</span>
              <span>•</span>
              <span>SKU: LN-2048</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium text-foreground">4.8</span>
            </div>
            <p className="text-sm text-muted-foreground">(320 reviews)</p>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600">
              In Stock
            </span>
          </div>

          <div className="flex flex-wrap items-end gap-4">
            <div>
              <p className="text-sm text-muted-foreground line-through">$120</p>
              <p className="text-3xl font-semibold text-foreground">$96</p>
            </div>
            <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Save 20%</div>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            A beautifully layered blanket that pairs warmth, texture, and effortless style for your living room or bedroom retreat.
          </p>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-foreground">Color</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-3 py-2 text-sm transition ${selectedColor === color ? 'border-primary bg-primary/10 text-primary' : 'border-border/60 bg-background text-muted-foreground hover:border-primary/40'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">Size</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border px-3 py-2 text-sm transition ${selectedSize === size ? 'border-primary bg-primary/10 text-primary' : 'border-border/60 bg-background text-muted-foreground hover:border-primary/40'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-border/60 bg-background/80 p-1">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-accent">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-semibold text-foreground">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-accent">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button variant="outline" className="rounded-full">
              <Heart className="mr-2 h-4 w-4" />
              Wishlist
            </Button>
            <Button className="rounded-full">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="secondary" className="rounded-full">
              Buy Now
            </Button>
          </div>

          <div className="flex items-center gap-2 rounded-[1rem] border border-border/60 bg-background/70 p-3 text-sm text-muted-foreground">
            <Truck className="h-4 w-4 text-primary" />
            Free shipping on orders over $75.
          </div>
        </motion.div>
      </div>

      <div className="rounded-[1.75rem] border border-border/60 bg-card p-5 shadow-soft sm:p-6">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeTab === tab ? 'bg-primary text-primary-foreground' : 'bg-background text-muted-foreground hover:bg-accent'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="mt-6 space-y-3"
          >
            <h2 className="text-xl font-semibold text-foreground">{tabContent[activeTab].title}</h2>
            <p className="max-w-3xl text-sm leading-8 text-muted-foreground">{tabContent[activeTab].body}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Related Products</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">Complete the look.</h2>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
}
