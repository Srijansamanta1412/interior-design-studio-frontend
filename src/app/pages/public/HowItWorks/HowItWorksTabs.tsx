import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote } from "lucide-react";
import CombinedLivingAndDingRoom from "@/assets/images/dining/combined-dining-room-and-entryway-design.jpg";
import IndianClassicDiningRoom from "@/assets/images/dining/indian-classic-dining.jpg";

// Mock Data
const projectData = {
  title: "Transforming Dining Rooms with Timeless Designs",
  before: [
    {
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      alt: "Dining Room Before 1"
    },
    {
      src: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&w=1200&auto=format&fit=crop",
      alt: "Dining Room Before 2"
    },
    {
      src: IndianClassicDiningRoom,
      alt: "Dining Room Before 3"
    }
  ],
  after: [
    {
      src: CombinedLivingAndDingRoom,
      alt: "Dining Room After 1 (Modern)"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1671269942393-ab3372a09ce9?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Dining Room After 2 (Detail)"
    },
    {
      src: IndianClassicDiningRoom,
      alt: "Dining Room After 3"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1671269943736-3ffe2ac923f6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Dining Room After 3 (Angle)"
    }
  ],
  testimonial: {
    text: "We're delighted with our new dining room. Modern Interior created a space that's elegant, welcoming, and perfect for everyday family meals as well as festive gatherings.",
    author: "Prodeepto"
  }
};

export function HowItWorksTabs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light mb-8">
            {projectData.title}
          </h2>
        </div>

        {/* Outer Tabs: Before vs After */}
        <Tabs defaultValue="after" className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <ImageGallery images={projectData.after} />
        </Tabs>



        {/* Testimonial */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 text-center space-y-4"
        >
            <Quote className="w-8 h-8 mx-auto text-gold mb-4 opacity-50" />
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

// Inner Component for Image Gallery (Nested Tabs Logic)
function ImageGallery({ images }: { images: { src: string, alt: string }[] }) {
    // We can use another Tabs component simply for the thumbnail selection logic
    // Tab Value = index of the image
    return (
        <Tabs defaultValue="0" className="w-full flex flex-col gap-6">
            
            {/* Main Image Display (Tab Content) */}
            <div className="w-full aspect-video md:aspect-16/8 relative rounded-lg overflow-hidden shadow-2xl">
                 {images.map((img, index) => (
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
            <TabsList className="flex flex-wrap justify-center gap-4 bg-transparent h-auto p-0">
                {images.map((img, index) => (
                    <TabsTrigger
                        key={index}
                        value={index.toString()}
                        className="p-0 border-2 border-transparent data-[state=active]:border-gold rounded overflow-hidden w-24 h-16 md:w-32 md:h-20 transition-all opacity-70 data-[state=active]:opacity-100 hover:opacity-100"
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
    )
}
