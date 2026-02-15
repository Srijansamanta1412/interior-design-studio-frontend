import { PortfolioHero } from "./Portfolio/PortfolioHero";

const Portfolio = () => {
  return (
    <>
      <title>Portfolio | Online Interior Design Projects</title>
      <meta name="description" content="Explore our portfolio of stunning interior design transformations. See real client projects designed online by our expert team." />
      
      <div className="flex flex-col w-full">
        <PortfolioHero />
        {/* Future sections will go here */}
      </div>
    </>
  );
}

export default Portfolio;