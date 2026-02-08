import { Link } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"; // Import SheetTitle
import { Logo } from "@/components/shared/Logo";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Ensure accessibility

export function Navbar() {
  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Stories", href: "/stories" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        
        {/* 1. Logo */}
        <Logo />

        {/* 2. Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-medium transition-colors hover:text-gold"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <div className="hidden md:flex gap-2">
            <Link to="/auth/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Button variant="gold">Start Project</Button>
          </div>

          {/* 4. Mobile Menu (Sheet) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              {/* Accessibility: Sheet must have a Title */}
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              
              <div className="flex flex-col gap-6 mt-10 px-6">
                <Logo />
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.href}
                      className="text-lg font-serif font-medium hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <hr className="my-2" />
                  <Link to="/auth/login" className="text-lg font-medium hover:text-gold">
                    Log In
                  </Link>
                  <Button variant="gold" className="w-full">Start Project</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}