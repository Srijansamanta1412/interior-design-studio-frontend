import { PortfolioHero } from "./Portfolio/PortfolioHero";
import { PortfolioSteps } from "./Portfolio/PortfolioSteps";
import { PortfolioDeliverables } from "./Portfolio/PortfolioDeliverables";
import { PortfolioBottomSteps } from "./Portfolio/PortfolioBottomSteps";
import { PortfolioCTA } from "./Portfolio/PortfolioCTA";
import { PortfolioComparison } from "./Portfolio/PortfolioComparison";
import { BenefitsSection } from "@/components/shared/BenefitsSection";
import { PortfolioFAQ } from "./Portfolio/PortfolioFAQ";
import { FeaturedSection } from "@/components/shared/FeaturedSection";

const Portfolio = () => {
  return (
    <>
      <title>Portfolio | Online Interior Design Projects</title>
      <meta name="description" content="Explore our portfolio of stunning interior design transformations. See real client projects designed online by our expert team." />
      
      <div className="flex flex-col w-full">
        <PortfolioHero />
        <PortfolioSteps />
        <PortfolioDeliverables />
        <PortfolioBottomSteps />
        <PortfolioCTA />
        <PortfolioComparison />
        <BenefitsSection />
        <PortfolioFAQ />
        <FeaturedSection />
        {/* Future sections like Gallery/Testimonials will go here */}
      </div>
    </>
  );
}

export default Portfolio;