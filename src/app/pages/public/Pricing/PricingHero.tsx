import { Label } from "@/components/ui/label";


export function PricingHero(){

  return (
    <section className="pt-20 pb-8 md:pt-28 md:pb-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 space-y-4 text-center">
          <h1 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the plan that works for you.
            <br className="hidden sm:block" />
            All plans include access to our platform, expert designers, and
            dedicated support.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3">
          <Label
            htmlFor="billing-toggle"
            className="cursor-pointer flex items-center gap-3"
          >
            <span className="text-sm font-semibold text-foreground">
              Annual billing{" "}
              <span className="text-gold font-bold">(Save 20%)</span>
            </span>
          </Label>
        </div>
      </div>
    </section>
  );
}
