import { lazy, Suspense} from "react";
import { SectionLoader } from "@/components/shared/SectionLoader";
import { PricingHero } from "./Pricing/PricingHero";

const PricingCards = lazy(() =>
  import("./Pricing/PricingCards").then((m) => ({ default: m.PricingCards }))
);

export default function PricingPage() {

  return (
    <>
      <title>Pricing | Interior Design Packages & Plans</title>
      <meta
        name="description"
        content="Explore our transparent interior design pricing. Choose from Essentials, Professional, or Full Home packages — all with dedicated designers and personalized plans."
      />

      <div className="flex flex-col w-full">
        <PricingHero />

  <Suspense fallback={<SectionLoader height="h-[700px]" />}>
    <PricingCards isMonthly={true} />
  </Suspense>
</div>
    </>
  );
}
