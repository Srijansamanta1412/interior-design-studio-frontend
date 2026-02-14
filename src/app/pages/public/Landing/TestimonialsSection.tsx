import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Living Room Redesign",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    quote: "I never thought I could afford an interior designer. Decorilla made it possible and the results are stunning!",
  },
  {
    name: "Michael Ross",
    role: "Home Office",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    quote: "The 3D renderings were a game changer. I could see exactly how the furniture would fit before buying anything.",
  },
  {
    name: "Elena Rodriguez",
    role: "Full Home Renovation",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    quote: "Professional, timely, and incredibly talented designers. Highly recommend to anyone looking to refresh their home.",
  },
  {
    name: "David Chen",
    role: "Modern Apartment",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024e",
    quote: "Every detail was considered. They transformed my blank canvas apartment into a warm, inviting home.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-gold-dark text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground">
            Client Stories
          </h2>
        </div>

        <div className="max-w-5xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="md:basis-full lg:basis-full">
                  <div className="flex flex-col items-center text-center py-8 px-4">

                    {/* Stars */}
                    <div className="flex gap-1 mb-6 text-gold-dark">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-2xl md:text-4xl italic leading-relaxed text-foreground mb-10 max-w-3xl">
                      "{t.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-gold p-1">
                        <AvatarImage 
                          src={t.image} 
                          alt={t.name}
                          width={64}
                          height={64}
                          className="rounded-full object-cover" 
                        />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>

                      <div className="text-center">
                        <cite className="not-italic text-sm font-bold uppercase tracking-widest text-foreground block mb-1">
                          {t.name}
                        </cite>
                        <span className="text-xs text-gold-dark font-medium uppercase tracking-wider">
                          {t.role}
                        </span>
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <div className="block">
              <CarouselPrevious aria-label="Previous testimonial" className="absolute left-0 top-1/2 -translate-y-1/2 border-border hover:border-gold hover:text-gold transition-colors translate-x-[-30px] md:translate-x-0" />
              <CarouselNext aria-label="Next testimonial" className="absolute right-0 top-1/2 -translate-y-1/2 border-border hover:border-gold hover:text-gold transition-colors translate-x-[30px] md:translate-x-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}