import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedSection } from '@/components/sections/featured-section';
import { ProductsSection } from '@/components/sections/products-section';
import { WhyChooseSection } from '@/components/sections/why-choose-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';

export const metadata = {
  title: 'Home',
  description: 'The premium homepage experience for NexaCart.',
};

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <HeroSection />
      <FeaturedSection />
      <ProductsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}
