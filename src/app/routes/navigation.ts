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
  { title: "Style Quiz", href: "/quiz" },
  { title: "Blogs", href: "/blog" },
  { title: "Pricing", href: "/pricing" },
];

// Updated to match the new Dark Theme Footer design
export const footerLinks: Record<string, FooterSection> = {
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