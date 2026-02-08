import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="border-t bg-neutral-100 py-12 text-sm text-muted-foreground">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p>Transforming spaces into timeless experiences.</p>
        </div>
        
        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-foreground">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/portfolio" className="hover:text-gold">Portfolio</a></li>
            <li><a href="/how-it-works" className="hover:text-gold">How it Works</a></li>
            <li><a href="/stories" className="hover:text-gold">Stories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-foreground">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-gold">About Us</a></li>
            <li><a href="/contact" className="hover:text-gold">Contact</a></li>
            <li><a href="/careers" className="hover:text-gold">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-foreground">Newsletter</h3>
          <div className="flex gap-2">
            <Input placeholder="Enter your email" className="bg-white" />
            <Button variant="gold">Join</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}