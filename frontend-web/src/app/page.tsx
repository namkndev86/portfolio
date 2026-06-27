import { HeroSection } from '@/features/portfolio/HeroSection';
import { FeaturedProjectsSection } from '@/features/portfolio/FeaturedProjectsSection';
import { ExperienceSummarySection } from '@/features/portfolio/ExperienceSummarySection';
import { ContactCTASection } from '@/features/portfolio/ContactCTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedProjectsSection />
      <ExperienceSummarySection />
      <ContactCTASection />
    </div>
  );
}
