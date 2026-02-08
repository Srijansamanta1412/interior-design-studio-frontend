// Single source of truth for application navigation
// This decouples "Menu Data" from "UI Components"

export interface NavItem {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavItem[];
}

export const navbarLinks: NavItem[] = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "How it Works", href: "/how-it-works" },
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