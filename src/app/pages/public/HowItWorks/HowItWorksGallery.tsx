import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ModernLivingRoomInteriors from "@/assets/images/living/modern-living-room-tv-unit-design.jpg";

// Mock Data
const projectData = {
  title: "Discover Elegant Living Room Interiors",
  images: [
    {
      src: ModernLivingRoomInteriors,
      alt: "Luxury Living Room Main View"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      alt: "Luxury Dining Area"
    },
    {
      src: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Living Room Seating"
    },
    {
      src: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Open Concept View"
    }
  ],
  testimonial: {
    text: "Choosing Modern Interior was the best decision for our home. The entire process was smooth, professional, and the final result exceeded our expectations.",
    author: "Dhrupadi Banerjee"
  }
};

export function HowItWorksGallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light mb-8">
            {projectData.title}
          </h2>
        </div>

        {/* Gallery Logic (Reusing Tabs for Thumbnail Selection) */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            
          <Tabs defaultValue="0" className="w-full flex flex-col gap-6">
              
              {/* Main Image Display (Tab Content) */}
              <div className="w-full aspect-video md:aspect-16/8 relative rounded-lg overflow-hidden shadow-2xl bg-muted">
                   {projectData.images.map((img, index) => (
                       <TabsContent key={index} value={index.toString()} className="w-full h-full mt-0 absolute inset-0">
                           <motion.img 
                              initial={{ opacity: 0, scale: 1.05 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              src={img.src} 
                              alt={img.alt}
                              className="w-full h-full object-cover"
                              loading="lazy"
                           />
                       </TabsContent>
                   ))}
              </div>

              {/* Thumbnails (Tab List) */}
              <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent h-auto p-0 mt-4">
                  {projectData.images.map((img, index) => (
                      <TabsTrigger
                          key={index}
                          value={index.toString()}
                          className="p-0 border-2 border-transparent data-[state=active]:border-gold rounded overflow-hidden w-24 h-16 md:w-32 md:h-20 transition-all opacity-70 data-[state=active]:opacity-100 hover:opacity-100 ring-offset-background disabled:pointer-events-none disabled:opacity-50"
                      >
                          <img 
                              src={img.src} 
                              alt={`Thumbnail ${index + 1}`} 
                              className="w-full h-full object-cover"
                              loading="lazy"
                          />
                      </TabsTrigger>
                  ))}
              </TabsList>
          </Tabs>

        </div>

        {/* Testimonial */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 text-center space-y-4"
        >
            <p className="font-serif text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
                "{projectData.testimonial.text}"
            </p>
            <p className="font-bold text-sm tracking-widest uppercase text-gold">
                - {projectData.testimonial.author}
            </p>
        </motion.div>

      </div>
    </section>
  );
}
