import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioService } from "@/services/portfolioService";
import type { PortfolioCategory } from "@/types/portfolio";
import { PortfolioCategoryHero } from "./PortfolioCategory/PortfolioCategoryHero";
import { PortfolioProjectShowcase } from "./PortfolioCategory/PortfolioProjectShowcase";
import { SectionLoader } from "@/components/shared/SectionLoader";

/**
 * PortfolioCategoryPage — Reads :categorySlug from the URL,
 * fetches the matching category data, and renders:
 *   1. Dynamic hero section
 *   2. Multiple Before/After project showcases
 *   (CTA is handled by parent PortfolioLayout)
 */
export default function PortfolioCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();

  const [category, setCategory] = useState<PortfolioCategory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categorySlug) return;

    setLoading(true);
    portfolioService
      .getCategoryBySlug(categorySlug)
      .then((data) => {
        if (!data) {
          // Category not found — redirect to main portfolio
          navigate("/portfolio", { replace: true });
          return;
        }
        setCategory(data);
      })
      .finally(() => setLoading(false));
  }, [categorySlug, navigate]);

  if (loading) {
    return <SectionLoader height="h-screen" />;
  }

  if (!category) {
    return null; // Will have navigated away
  }

  return (
    <>
      <title>{category.name} Interior Design Portfolio | Decorilla</title>
      <meta
        name="description"
        content={`Explore our ${category.name.toLowerCase()} interior design portfolio. See real before & after transformations by our expert designers.`}
      />

      <div className="flex flex-col w-full">
        {/* Hero — eager loaded for LCP */}
        <PortfolioCategoryHero
          name={category.name}
          heroImage={category.heroImage}
          heroSubtitle={category.heroSubtitle}
        />

        {/* Project Showcases */}
        {category.projects.map((project, index) => (
          <PortfolioProjectShowcase
            key={project.id}
            project={project}
            index={index}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
}
