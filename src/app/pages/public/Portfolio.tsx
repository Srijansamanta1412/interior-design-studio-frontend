import { lazy, Suspense } from "react";
import { HowItWorksHero } from "./HowItWorks/HowItWorksHero";
import { SectionLoader } from "@/components/shared/SectionLoader";
import ModernBathroomFullView from "@/assets/images/bathroom/modern-full-bathroom-view.jpg";

// Lazy load below-the-fold sections
const HowItWorksTabs = lazy(() => import("./HowItWorks/HowItWorksTabs").then(module => ({ default: module.HowItWorksTabs })));
const HowItWorksProjectDetails = lazy(() => import("./HowItWorks/HowItWorksProjectDetails").then(module => ({ default: module.HowItWorksProjectDetails })));
const HowItWorksGallery = lazy(() => import("./HowItWorks/HowItWorksGallery").then(module => ({ default: module.HowItWorksGallery })));
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
            title="Premium Living Room Interior"
            designer="Priyanka Sarkar"
            imageSrc="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200"
          />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[800px]" />}>
          <HowItWorksGallery />
        </Suspense>

        <Suspense fallback={<SectionLoader height="h-[600px]" />}>
          <HowItWorksProjectDetails 
            title="Elegant Bathroom Design"
            designer="Angela Mayur"
            imageSrc={ModernBathroomFullView}
            reversed={true}
          />
        </Suspense>

        {/* CTA is provided by parent PortfolioLayout */}
      </div>
    </>
  );
}

export default Portfolio;