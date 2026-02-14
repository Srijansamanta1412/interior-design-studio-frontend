import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, HandCoins, PackageOpen } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: CalendarCheck,
      title: "Save Time",
      description: "Realistic 3D model & top professional help to take the guesswork out of the designing process."
    },
    {
      icon: HandCoins,
      title: "Save Money",
      description: "Top talent for up to 80% less than traditional interior design & trade discounts of 5% to 45% at the top vendors."
    },
    {
      icon: PackageOpen,
      title: "Convenient & Stress Free",
      description: "A fun and easy white-glove service including everything from design to convenient ordering."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative mt-12 group px-4 md:px-0">
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background px-3 transition-transform duration-500 group-hover:-translate-y-1 z-10">
                <benefit.icon
                  className="w-16 h-16 text-gold-dark"
                  strokeWidth={1}
                />
              </div>

              {/* Card */}
              <Card
                className="border border-border shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 text-center pt-14 pb-10 px-6 h-full flex flex-col items-center justify-start bg-card rounded-[2rem] overflow-visible gap-0"
              >
                <CardHeader className="p-0 mb-4 flex flex-col items-center w-full">
                  <CardTitle className="font-serif text-xl lg:text-2xl font-normal text-card-foreground tracking-wide whitespace-nowrap overflow-hidden text-ellipsis w-full px-2">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base max-w-[280px] mx-auto">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
