import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedSection } from '@/components/sections/featured-section';
import { InsightSection } from '@/components/sections/insight-section';

export const metadata = {
  title: 'Home',
  description: 'The foundation experience for NexaCart.',
};

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <HeroSection />
      <FeaturedSection />
      <InsightSection />
    </div>
  );
}
