import { HeroSection } from "./Landing/HeroSection";
import { ProcessSection } from "./Landing/ProcessSection";
import { TestimonialsSection } from "./Landing/TestimonialsSection";
import { ProjectShowcaseSection } from "./Landing/ProjectShowcaseSection";
import { VendorSavingsSection } from "./Landing/VendorSavingsSection";
import { RealSpacesSection } from "./Landing/RealSpacesSection";
import { BenefitsSection } from "./Landing/BenefitsSection";
import { ConsultationCTA } from "./Landing/ConsultationCTA";
import { FeaturedSection } from "./Landing/FeaturedSection";

export default function Landing() {
  return (
    <>
      <title>Online Interior Design Services | Decorilla Clone</title>
      <meta name="description" content="Get professional interior design help online. Affordable, accessible, and personalized design services." />
      
      <div className="flex flex-col w-full">
        <HeroSection />
        <ProcessSection />
        <TestimonialsSection />
        <ProjectShowcaseSection />
        <VendorSavingsSection />
        <RealSpacesSection />
        <BenefitsSection />
        <ConsultationCTA />
        <FeaturedSection />
      </div>
    </>
  );
}