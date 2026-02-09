import { Camera, PencilRuler, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Share Your Space",
    description: "Upload photos of your room and tell us about your style, budget, and needs.",
  },
  {
    icon: PencilRuler,
    title: "Get Custom Designs",
    description: "Receive multiple design concepts from expert interior designers. Choose your favorite.",
  },
  {
    icon: ShoppingBag,
    title: "Shop the Look",
    description: "Access a curated shopping list with exclusive discounts on furniture and decor.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white text-neutral-900">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-neutral-800">
            How It Works
          </h2>
          <p className="text-lg text-neutral-500 font-light max-w-xl mx-auto leading-relaxed">
            Our streamlined process makes professional design accessible, affordable, and fun.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-[1px] bg-neutral-200 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              
              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-8 shadow-sm transition-all duration-500 group-hover:border-[#D4AF37] group-hover:shadow-lg group-hover:scale-105">
                <step.icon className="w-8 h-8 text-neutral-400 group-hover:text-[#D4AF37] transition-colors duration-500" strokeWidth={1.5} />
              </div>

              {/* Step Label */}
              <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                Step 0{index + 1}
              </span>

              {/* Title */}
              <h3 className="font-serif text-2xl mb-4 text-neutral-800">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-neutral-500 leading-relaxed max-w-xs text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}