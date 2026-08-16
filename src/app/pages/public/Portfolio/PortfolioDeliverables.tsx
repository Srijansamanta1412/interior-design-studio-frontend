import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { BlurImage } from "@/components/shared/BlurImage";
import ModularKitchen from "@/assets/images/how-it-works/Modular Kitchen.jpeg";
import EnsuiteWalkInShowerArea from "@/assets/images/bathroom/ensuite-walk-in-shower-area.jpg";
import GreenWardrobe from "@/assets/images/how-it-works/Green Wardrobe.jpeg";


const deliverables = [
  {
    title: "Concepts From Multiple Designers",
    image: GreenWardrobe,
    alt: "Multiple design concepts on a screen",
    delay: 0.1,
  },
  {
    title: "Constant Communication With Your Chosen Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", 
    alt: "Designer communication",
    delay: 0.2,
  },
  {
    title: "Final Photorealistic 3D Designs",
    image: ModularKitchen, // Reverting to high-quality render
    alt: "Photorealistic 3D render of a living room",
    delay: 0.3,
  },
  {
    title: "Floor Plan And Color Palette",
    image: EnsuiteWalkInShowerArea, // Blueprint/Plan
    alt: "Architectural floor plan and color swatches",
    delay: 0.4,
  },
  {
    title: "Shopping List And White Glove Concierge Service",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop", // Furniture/Decor Context
    alt: "Curated shopping list items",
    delay: 0.5,
  },
];

export function PortfolioDeliverables() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">You'll Receive</h2>
        </motion.div>

        {/* Deliverables Carousel */}
        <div className="relative px-8 md:px-12 lg:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {deliverables.map((item, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, duration: 0.6 }}
                    className="group w-full flex flex-col items-center text-center space-y-6 h-full"
                  >
                    {/* Image Container */}
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                       <BlurImage 
                          src={item.image}
                          alt={item.alt}
                          ratio={1}
                          className="w-full h-full object-cover"
                       />
                    </div>

                    {/* Text */}
                    <h3 className="font-serif text-xl leading-tight text-foreground/90 max-w-[200px] mx-auto">
                      {item.title}
                    </h3>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Arrows - Hidden on Desktop since all items fit */}
            <CarouselPrevious className="flex lg:hidden -left-10 md:-left-14" />
            <CarouselNext className="flex lg:hidden -right-10 md:-right-14" />
          </Carousel>
        </div>

      </div>
    </section>
  );
}
