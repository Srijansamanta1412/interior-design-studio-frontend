import { Input } from "@/components/ui/input";
import { Logo } from "@/components/shared/Logo"; // We'll wrap this or style it to be white/light
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, PinIcon } from "lucide-react";

// Hardcoded data based on the screenshot to ensure exact match
const footerData = {
  about: {
    title: "ABOUT US",
    links: [
      { title: "The Team", href: "/team" },
      { title: "Company", href: "/company" },
      { title: "Reviews", href: "/reviews" },
      { title: "Pricing", href: "/pricing" },
      { title: "Design Careers", href: "/careers" },
      { title: "Press", href: "/press" },
    ]
  },
  explore: {
    title: "EXPLORE",
    links: [
      { title: "Style Quiz", href: "/quiz" },
      { title: "Interior Design Blog", href: "/blog" },
      { title: "Sample Projects", href: "/projects" },
      { title: "Designer Portfolios", href: "/portfolios" },
      { title: "Virtual Interior Design", href: "/virtual-design" },
      { title: "FAQ", href: "/faq" },
      { title: "Contact Us", href: "/contact" },
      { title: "Interior Design Gift Cards", href: "/gift-cards" },
    ]
  },
  locations: {
    title: "LOCATIONS",
    links: [
      { title: "New York", href: "/locations/nyc" },
      { title: "Miami", href: "/locations/miami" },
      { title: "Los Angeles", href: "/locations/la" },
      { title: "Austin", href: "/locations/austin" },
      { title: "Charlotte", href: "/locations/charlotte" },
      { title: "Chicago", href: "/locations/chicago" },
      { title: "Seattle", href: "/locations/seattle" },
      { title: "See All Locations", href: "/locations" },
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* 1. About Us */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-6 text-white uppercase">{footerData.about.title}</h4>
            <ul className="space-y-3">
              {footerData.about.links.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Explore */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-6 text-white uppercase">{footerData.explore.title}</h4>
            <ul className="space-y-3">
              {footerData.explore.links.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Locations */}
          <div>
            <h4 className="font-bold text-sm tracking-wider mb-6 text-white uppercase">{footerData.locations.title}</h4>
            <ul className="space-y-3">
              {footerData.locations.links.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter & Socials */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-sm tracking-wider mb-6 text-white uppercase">GET EXCLUSIVE TIPS & OFFERS</h4>
            <div className="mb-10">
              <Input 
                placeholder="Enter email address" 
                className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500 rounded-md h-12 focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37]" 
              />
            </div>

            <h4 className="font-bold text-sm tracking-wider mb-6 text-white uppercase">JOIN OUR COMMUNITY</h4>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><PinIcon className="w-5 h-5" /></a> {/* Lucide doesn't have a perfect Pinterest icon, usually strict-style */}
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 w-full mb-10" />

        {/* Bottom Section: Logo & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo (Forced White/Light for Footer) */}
          <div className="opacity-90 grayscale brightness-200 contrast-200">
             <Logo /> 
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-neutral-400">
            <Link to="/terms" className="hover:text-white transition-colors">Our Terms & Conditions</Link>
            <span className="text-neutral-700">|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-neutral-700">|</span>
            <span>Copyright © 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}