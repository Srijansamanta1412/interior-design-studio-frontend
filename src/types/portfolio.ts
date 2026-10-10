// ============================================================
// Portfolio Types — Data models for portfolio categories and projects.
// Mirrors the blog.ts pattern for consistency.
// ============================================================

export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface PortfolioDesigner {
  name: string;
  avatar: string;
  role: string;
}

export interface DesignerPortfolioProject extends PortfolioProject {
  categoryName: string;
  categorySlug: string;
}

export interface DesignerProfile extends PortfolioDesigner {
  slug: string;
  portrait: string;
  location: string;
  experience: string;
  bio: string;
  specialties: string[];
  projects: DesignerPortfolioProject[];
}

export interface PortfolioTestimonial {
  text: string;
  author: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  designer: PortfolioDesigner;
  beforeImages: PortfolioImage[];
  afterImages: PortfolioImage[];
  testimonial: PortfolioTestimonial;
  tags: string[];
}

export interface PortfolioCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  heroSubtitle: string;
  projects: PortfolioProject[];
}
