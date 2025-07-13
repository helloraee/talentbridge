import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { FeaturedJobsSection } from "@/components/sections/featured-jobs-section";
import { FeaturedCompaniesSection } from "@/components/sections/featured-companies-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturedJobsSection />
      <FeaturedCompaniesSection />
      <CTASection />
    </div>
  );
}
