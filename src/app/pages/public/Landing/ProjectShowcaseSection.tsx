import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    title: "Modern Coastal Living Room and Bedroom Makeover",
    beforeImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1200&auto=format&fit=crop",
    challenge: "We would like a more minimal look with Feng Shui and natural elements that highlight our beautiful green view.",
    result: "We got the relaxing dream home we always wanted. Wanda was fun to work with and paid attention to every single detail.",
    author: "Kris",
    link: "/portfolio/project-1"
  },
  {
    id: 2,
    title: "Urban Industrial Loft Transformation",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    challenge: "Our loft felt cold and empty. We wanted to add warmth and define separate zones without losing the open concept.",
    result: "The design team perfectly balanced industrial elements with cozy textures. It feels like a completely new home.",
    author: "Sarah",
    link: "/portfolio/project-2"
  }
];

export function ProjectShowcaseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <div>
                  {/* Header (Left Aligned as per screenshot) */}
                  <div className="mb-12 animate-fade-in-up">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 uppercase tracking-wide">
                      {project.title}
                    </h2>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* Left Column: Tabs for Before/After */}
                    <div className="w-full">
                         <Tabs defaultValue="after" className="w-full">
                           <TabsList className="flex gap-4 bg-transparent p-0 mb-6">
                             <TabsTrigger 
                               value="before" 
                               className="rounded-none border border-neutral-300 px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white hover:border-[#D4AF37] hover:text-[#D4AF37] bg-transparent shadow-none w-32"
                             >
                               Before
                             </TabsTrigger>
                             <TabsTrigger 
                               value="after" 
                               className="rounded-none border border-neutral-300 px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all data-[state=active]:border-[#D4AF37] data-[state=active]:bg-[#D4AF37] data-[state=active]:text-white hover:border-[#D4AF37] hover:text-[#D4AF37] bg-transparent shadow-none w-32"
                             >
                               After
                             </TabsTrigger>
                           </TabsList>

                           <div className="rounded-xl overflow-hidden border border-neutral-100 bg-neutral-100 touch-pan-y aspect-[4/3] relative">
                             <TabsContent value="before" className="mt-0 w-full h-full">
                                <img
                                  src={project.beforeImage}
                                  alt={`Before - ${project.title}`}
                                  className="w-full h-full object-cover grayscale brightness-90 animate-fade-in"
                                  loading="lazy"
                                />
                             </TabsContent>
                             <TabsContent value="after" className="mt-0 w-full h-full">
                                <img
                                  src={project.afterImage}
                                  alt={`After - ${project.title}`}
                                  className="w-full h-full object-cover animate-fade-in"
                                  loading="lazy"
                                />
                             </TabsContent>
                           </div>
                         </Tabs>
                    </div>

                    {/* Right Column: Project Details */}
                    <div className="flex flex-col justify-center space-y-8 lg:pt-8 text-left">
                      
                      {/* Challenge */}
                      <div>
                        <h3 className="font-bold text-lg text-neutral-900 mb-3">
                          Client's Challenge
                        </h3>
                        <p className="text-neutral-600 leading-relaxed font-light">
                          {project.challenge}
                        </p>
                      </div>

                      {/* Result */}
                      <div>
                        <h3 className="font-bold text-lg text-neutral-900 mb-3">
                          Result
                        </h3>
                        <blockquote className="text-neutral-600 italic mb-4 leading-relaxed">
                          "{project.result}"
                        </blockquote>
                        <p className="text-sm font-medium text-neutral-500 mb-4">
                          - {project.author}
                        </p>
                        
                        {/* Rating */}
                        <div className="flex gap-1 text-[#D4AF37]">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className="w-5 h-5 fill-current" />
                           ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                         <Link 
                            to={project.link} 
                            className="inline-flex items-center text-[#D4AF37] hover:text-[#B59020] font-bold text-sm tracking-[0.15em] uppercase border-b-2 border-[#D4AF37] pb-1 transition-colors"
                         >
                            View More Details
                         </Link>
                      </div>

                    </div>

                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Arrows */}
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 border-neutral-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors" />
            <CarouselNext className="-right-12 border-neutral-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors" />
          </div>
          
           {/* Mobile Navigation (Centered below) */}
           <div className="flex md:hidden justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 border-neutral-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors" />
              <CarouselNext className="static translate-y-0 border-neutral-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors" />
           </div>

        </Carousel>

      </div>
    </section>
  );
}
