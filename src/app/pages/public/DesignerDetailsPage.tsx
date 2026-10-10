import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SectionLoader } from "@/components/shared/SectionLoader";
import { portfolioService } from "@/services/portfolioService";
import type { DesignerProfile } from "@/types/portfolio";
import CombinedDesignersImage from "@/assets/images/designers/combined-designers.jpeg";


export default function DesignerDetailsPage() {
  const [designers, setDesigners] = useState<DesignerProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCurrent = true;

    portfolioService.getDesigners().then((profiles) => {
      if (!isCurrent) return;
      setDesigners(profiles);
      setIsLoading(false);
    });

    return () => {
      isCurrent = false;
    };
  }, []);

  if (isLoading) {
    return <SectionLoader height="h-screen" />;
  }

  return (
    <>
      <title>Meet Our Designers | Decorilla</title>
      <meta
        name="description"
        content="Meet the interior designers behind Decorilla's thoughtful, personal home transformations."
      />

      <div className="w-full bg-background">
<section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent">
    <img
      src={CombinedDesignersImage}
      alt="Elegant, thoughtfully designed interior"
      className="h-full w-full object-cover opacity-60 md:opacity-80 object-[40%_38%] align-items-center brightness-[1.0]"
      fetchPriority="high"
    />
    <div className="absolute inset-0 bg-black/20" />
  </div>

  {/* Hero content */}
  <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl space-y-6"
    >
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
        The people behind the spaces
      </p>
      <h1 className="font-serif text-5xl font-light leading-tight drop-shadow-lg md:text-6xl">
        Meet our designers
      </h1>
      <p className="mx-auto max-w-2xl text-base leading-8 text-white/90 md:text-lg">
        Thoughtful experts, distinct points of view, and one shared belief: your
        home should feel like you.
      </p>
    </motion.div>
  </div>
</section>

        <section className="container mx-auto space-y-14 px-4 py-16 md:space-y-20 md:py-24">
          {designers.map((designer, index) => (
            <motion.article
              key={designer.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className={`grid items-center gap-8 border-b border-border/70 pb-14 last:border-0 md:gap-12 md:pb-20 lg:grid-cols-2 lg:gap-16 ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="absolute -bottom-4 -left-4 h-2/3 w-2/3 border border-gold/50" />
                <div className="relative aspect-[4/3.6] overflow-hidden bg-muted shadow-xl">
                  <img
                    src={designer.portrait}
                    alt={designer.name}
                    className="h-full w-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>

              <div className="space-y-6 lg:py-6">
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    Designer {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
                    {designer.name}
                  </h2>
                  <p className="text-lg font-light text-muted-foreground">
                    {designer.role}
                  </p>
                </div>

                <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                  {designer.bio}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold" /> {designer.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-gold" /> {designer.experience} experience
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground">
                    Areas of expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {designer.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="border border-border bg-muted/40 px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <span className="text-sm text-muted-foreground">
                    <span className="font-serif text-2xl text-foreground"> 15+</span>{" "}
                    featured projects
                  </span>
                  <Button
                    asChild
                    className="h-12 bg-gold px-7 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-lg"
                  >
                    <Link to="/style-quiz-start">
                      Start your project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="bg-[#f7f5f0] px-4 py-16 text-center dark:bg-muted/30 md:py-20">
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Your home, your story
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              Let’s create a space you love coming home to.
            </h2>
            <p className="leading-7 text-muted-foreground">
              Tell us a little about your space and we’ll help you find the right design direction.
            </p>
            <Button
              asChild
              className="h-12 bg-gold px-8 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-lg"
            >
              <Link to="/style-quiz-start">
                Start your design journey <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}