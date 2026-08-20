import { Button } from "@/components/ui/button";
import { BlurImage } from "@/components/shared/BlurImage";
import ModernTVUnit from "@/assets/images/dining/Modern TV Unit.jpeg";

export function ConsultationCTA() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto md:min-h-[600px] relative bg-muted/50">
        <BlurImage
          src={ModernTVUnit}
          alt="Modern TV Unit"
          className="h-full w-full object-cover"
          containerClassName="h-full rounded-none"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 bg-muted flex flex-col justify-center items-center text-center px-8 py-16 md:p-24">
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-10 leading-tight max-w-xl">
          Think you can't afford beautiful interior design? <br className="hidden md:block" />
          Think again.
        </h2>
        
        <Button 
          variant="gold"
          size="lg"
          className="px-10 py-7 text-sm rounded-none uppercase tracking-[0.15em]" // Keeping rounded-none as it fits this specific section design better, but using theme colors
        >
            <a
    href="https://wa.me/8697663161?text=Hi%20I%20would%20like%20to%20schedule%20a%20consultation."
    target="_blank"
    rel="noopener noreferrer"
  >

          Schedule a Consultation
          </a>
        </Button>
      </div>
    </section>
  );
}
