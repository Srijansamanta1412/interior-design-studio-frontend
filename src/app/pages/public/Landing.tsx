import { HeroSection } from "./Landing/HeroSection";
import { ProcessSection } from "./Landing/ProcessSection";
import { TestimonialsSection } from "./Landing/TestimonialsSection";
import { ProjectShowcaseSection } from "./Landing/ProjectShowcaseSection";

export default function Landing() {
  return (
    <>
      {/* <Helmet>
        <title>Online Interior Design Services | Decorilla Clone</title>
        <meta name="description" content="Get professional interior design help online. Affordable, accessible, and personalized design services." />
      </Helmet> */}
      
      <div className="flex flex-col w-full">
        <HeroSection />
        <ProcessSection />
        <TestimonialsSection />
        <ProjectShowcaseSection />
      </div>
    </>
  );
}