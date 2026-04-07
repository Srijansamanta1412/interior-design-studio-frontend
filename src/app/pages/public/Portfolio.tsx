import { lazy, Suspense } from "react";
import { HowItWorksHero } from "./HowItWorks/HowItWorksHero";
import { SectionLoader } from "@/components/shared/SectionLoader";

// Lazy load below-the-fold sections
const HowItWorksTabs = lazy(() => import("./HowItWorks/HowItWorksTabs").then(module => ({ default: module.HowItWorksTabs })));
const HowItWorksProjectDetails = lazy(() => import("./HowItWorks/HowItWorksProjectDetails").then(module => ({ default: module.HowItWorksProjectDetails })));
const HowItWorksGallery = lazy(() => import("./HowItWorks/HowItWorksGallery").then(module => ({ default: module.HowItWorksGallery })));
const CTASection = lazy(() => import("@/components/shared/CTASection").then(module => ({ default: module.CTASection })));

const Portfolio = () => {
  return (
    <>
      <title>Portfolio | Online Interior Design Projects</title>
      <meta name="description" content="Explore our portfolio of stunning interior design transformations. See real client projects designed online by our expert team." />
      
      <div className="flex flex-col w-full">
        {/* Hero is Eager Loaded to preserve LCP */}
        <HowItWorksHero />

        <Suspense fallback={<SectionLoader height="h-[800px]" />}>
          <HowItWorksTabs />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[600px]" />}>
          <HowItWorksProjectDetails 
            title="Black and White Living Room Design"
            designer="Renata P."
            imageSrc="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop"
          />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[800px]" />}>
          <HowItWorksGallery />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[600px]" />}>
          <HowItWorksProjectDetails 
            title="Modern Living Room Dining Room Combo"
            designer="Meric S."
            imageSrc="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
            reversed={true}
          />
        </Suspense>
        
        <Suspense fallback={<SectionLoader height="h-[300px]" />}>
          <CTASection />
        </Suspense>
        
        {/* Future sections: Steps, FAQ, etc. */}
      </div>
    </>
  );
}

export default Portfolio;