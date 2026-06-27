'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

const products = [
  {
    title: 'Aurora Headphones',
    category: 'Audio',
    originalPrice: '$239',
    discountedPrice: '$189',
    discount: '-20%',
    rating: '4.9',
    reviews: '128',
    stock: 'In Stock',
  },
  {
    title: 'Lumen Smart Watch',
    category: 'Wearables',
    originalPrice: '$299',
    discountedPrice: '$249',
    discount: '-17%',
    rating: '4.8',
    reviews: '94',
    stock: 'Limited Stock',
  },
  {
    title: 'Studio Speaker',
    category: 'Audio',
    originalPrice: '$179',
    discountedPrice: '$149',
    discount: '-17%',
    rating: '4.7',
    reviews: '76',
    stock: 'In Stock',
  },
  {
    title: 'Velora Tote',
    category: 'Fashion',
    originalPrice: '$160',
    discountedPrice: '$128',
    discount: '-20%',
    rating: '4.9',
    reviews: '112',
    stock: 'In Stock',
  },
  {
    title: 'North Desk Lamp',
    category: 'Home',
    originalPrice: '$120',
    discountedPrice: '$96',
    discount: '-20%',
    rating: '4.6',
    reviews: '58',
    stock: 'Limited Stock',
  },
  {
    title: 'Crest Sneakers',
    category: 'Footwear',
    originalPrice: '$140',
    discountedPrice: '$112',
    discount: '-20%',
    rating: '4.8',
    reviews: '83',
    stock: 'In Stock',
  },
  {
    title: 'Nova Backpack',
    category: 'Travel',
    originalPrice: '$105',
    discountedPrice: '$84',
    discount: '-20%',
    rating: '4.7',
    reviews: '69',
    stock: 'In Stock',
  },
  {
    title: 'Halo Bottle',
    category: 'Lifestyle',
    originalPrice: '$68',
    discountedPrice: '$54',
    discount: '-21%',
    rating: '4.9',
    reviews: '101',
    stock: 'In Stock',
  },
];

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.32, delay: index * 0.04 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-card shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src="/placeholder-product.jpg"
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {product.discount}
        </div>
        <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-background/80 p-2 text-foreground backdrop-blur transition hover:bg-background">
          <Heart className="h-4 w-4" />
        </div>
        <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {product.stock}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{product.category}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{product.title}</h3>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground line-through">{product.originalPrice}</p>
              <p className="text-base font-semibold text-foreground">{product.discountedPrice}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-medium text-foreground">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button size="sm" variant="outline" className="flex-1 rounded-full">
            <Eye className="mr-2 h-4 w-4" />
            Quick View
          </Button>
          <Button size="sm" className="flex-1 rounded-full">
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function ProductsSection() {
  return (
    <Container className="space-y-8">
      <SectionHeading
        eyebrow="Featured Products"
        title="Curated picks designed to elevate daily rituals."
        description="From statement essentials to refined everyday staples, every item is chosen for quality and lasting appeal."
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.title} product={product} index={index} />
        ))}
      </div>
    </Container>
  );
}
