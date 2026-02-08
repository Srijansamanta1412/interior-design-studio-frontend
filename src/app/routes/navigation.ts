// Single source of truth for application navigation
// This decouples "Menu Data" from "UI Components"

export interface NavItem {
  title: string;
  href: string;
  description?: string; // Good for mega menus
  items?: NavItem[]; // Recursive children
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export const navbarLinks: NavItem[] = [
  { 
    title: "Portfolio", 
    href: "/portfolio", // Main click goes to full portfolio
    items: [
      { title: "Living Room", href: "/portfolio/living-room", description: "Cozy and modern living spaces." },
      { title: "Kitchen & Dining", href: "/portfolio/kitchen", description: "Functional and stylish culinary hubs." },
      { title: "Bedroom", href: "/portfolio/bedroom", description: "Serene retreats and sleeping quarters." },
      { title: "Home Office", href: "/portfolio/office", description: "Productive workspaces." },
    ]
  },
  { 
    title: "How it Works", 
    href: "/how-it-works",
    items: [
      { title: "The Process", href: "/how-it-works/process", description: "Step-by-step guide to your dream home." },
      { title: "Pricing Packages", href: "/pricing", description: "Affordable flat-rate design packages." },
      { title: "Compare Us", href: "/compare", description: "See how we stack up against traditional designers." },
    ]
  },
  { title: "Stories", href: "/stories" },
  { title: "Pricing", href: "/pricing" },
];

export const footerLinks: Record<string, FooterSection> = {
  explore: {
    title: "Explore",
    links: [
      { title: "Portfolio", href: "/portfolio" },
      { title: "How it Works", href: "/how-it-works" },
      { title: "Stories", href: "/stories" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { title: "About Us", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Careers", href: "/careers" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
};