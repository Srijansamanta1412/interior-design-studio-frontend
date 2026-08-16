import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take?",
    answer: "Most projects are completed within 2-3 weeks, depending on the scope of the project and how quickly you provide feedback to your designer. We work at your pace to ensure you're completely satisfied."
  },
  {
    question: "Do you offer in-home services?",
    answer: "We are a 100% online interior design service. This allows us to offer top-tier design talent to anyone, anywhere, at a fraction of the cost of traditional in-person design."
  },
  {
    question: "What happens once I select the winning design?",
    answer: "Once you select a winning concept, you'll work 1-on-1 with that designer to refine the space. You'll collaborate on the floor plan, 3D renders, and shopping list until the design is exactly what you envisioned."
  },
  {
    question: "Can I request changes to the design?",
    answer: "Absolutely. We work closely with you throughout the design process to understand your preferences and make adjustments based on your feedback. Our goal is to create a space that reflects your style, needs, and vision."
  },
  {
  question: "Can you design different types of spaces?",
  answer: "Yes, we can design a wide range of spaces, including living rooms, bedrooms, kitchens, dining areas, home offices, and more. We also provide multiple design concepts so you can explore different styles and choose the one that best suits your space and preferences."
  }
];

export function PortfolioFAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground font-light">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border border-border rounded-lg shadow-sm bg-card px-6 data-[state=open]:border-gold/30 transition-all duration-300 hover:shadow-md"
                  >
                    <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline hover:text-gold py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
        </div>

      </div>
    </section>
  );
}
