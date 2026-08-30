import { createWhatsappUrl } from "@/lib/whatsapp";

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

const whatsappUrl = createWhatsappUrl("Hi I would like to schedule a consultation.");

export const pricingPlans: PricingPlan[] = [
  {
    name: "SECTION-SPECIFIC PACKAGE",
    price: "99",
    features: [
      "Focused design for one room or section",
      "Layout suggestions for the selected area",
      "Style and colour direction",
      "Material and finish guidance",
      "Practical storage recommendations",
    ],
    description: "Best for changing a kitchen, bedroom, TV unit, or any one specific area.",
    buttonText: "Schedule a Consultation",
    href: whatsappUrl,
    isPopular: false,
  },
  {
    name: "FULL APARTMENT CHANGE",
    price: "",
    features: [
      "Complete apartment transformation",
      "Room-by-room design planning",
      "Detailed floor plans",
      "3D visual direction for all key spaces",
      "Furniture, finishes, and decor planning",
      "Dedicated designer support",
      "Revision rounds for the full home",
    ],
    description: "Ideal for a complete home makeover with one connected design language.",
    buttonText: "Get Started",
    href: "/quiz",
    isPopular: true,
  },
  {
    name: "PLANNING & LAYOUT SUGGESTION",
    price: "599",
    features: [
      "Concept and layout consultation",
      "Space planning suggestions",
      "Furniture placement ideas",
      "Traffic flow and zoning guidance",
      "Room-wise planning recommendations",
      "Ideal for self-execution or partial renovation",
      "Advice before you begin work",
    ],
    description: "Best when you need a smart plan before starting the project yourself.",
    buttonText: "Contact Us",
    href: whatsappUrl,
    isPopular: false,
  },
];