import { motion } from "framer-motion";
import { BlurImage } from "@/components/shared/BlurImage";
import DreamSpace from "@/assets/images/how-it-works/Dream Space.jpeg";
import GreenWardrobe from "@/assets/images/how-it-works/Green Wardrobe.jpeg";


export function PortfolioBottomSteps() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 space-y-32">
        
        {/* --- STEP 4: ORDER AND TRACK --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Image (Left) - Laptop Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
             <div className="relative p-4">
                <BlurImage
                    src= {GreenWardrobe}
                    alt="Track Progress"
                    ratio={3/3}
                    containerClassName="rounded-2xl shadow-2xl"
                 />
             </div>
          </motion.div>
          
          {/* Content (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-white font-serif text-2xl font-bold shadow-lg shrink-0">4</span>
              <h3 className="font-serif text-3xl md:text-4xl uppercase tracking-wide">Track thr Progress</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Watch your visual completion percentage update in real time. Disregard or revert unauthorized modifications that doesn't go with your initial requirements.   </p>
          </motion.div>
        </div>

        {/* --- STEP 5: DREAM ROOM (Centered) --- */}
        <div className="space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-6"
          >
             <div className="flex items-center justify-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-white font-serif text-2xl font-bold shadow-lg shrink-0">5</span>
              <h3 className="font-serif text-3xl md:text-4xl uppercase tracking-wide">Enjoy Your Dream Space</h3>
            </div>
          </motion.div>

          {/* Large Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <BlurImage 
                src={DreamSpace}
                alt="Completed dream living room design with high ceilings"
                ratio={16/9}
                containerClassName="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
