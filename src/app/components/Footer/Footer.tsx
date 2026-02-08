import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/shared/Logo";
import { footerLinks } from "@/app/routes/navigation";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-neutral-100 py-12 text-sm text-muted-foreground">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-4">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <Logo />
          <p>Transforming spaces into timeless experiences.</p>
        </div>
        
        {/* Dynamic Sections */}
        {Object.values(footerLinks).map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="hover:text-gold transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Section */}
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