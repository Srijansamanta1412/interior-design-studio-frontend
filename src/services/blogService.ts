import type { BlogPost, PaginatedBlogResponse } from "@/types/blog";

// --- MOCK DATA ---
const MOCK_AUTHOR = {
  id: "a1",
  name: "Elena Rodriguez",
  avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  role: "Senior Lead Designer"
};

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "2026-interior-design-trends",
    title: "The Defining Interior Design Trends of 2026",
    description: "Discover the colors, textures, and layouts that are dominating high-end interiors this year. From biophilic design to 'quiet luxury'.",
    featuredImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    content: "<p>Full content will go here...</p>",
    author: MOCK_AUTHOR,
    publishDate: "2026-02-15T09:00:00Z",
    category: { id: "c1", name: "Design Trends", slug: "trends" },
    tags: ["2026 Trends", "Luxury", "Colors"],
    readingTime: 6,
  },
  {
    id: "2",
    slug: "maximizing-small-spaces",
    title: "Maximizing Space: Big Style in Small Apartments",
    description: "Living in a studio or 1-bedroom doesn't mean sacrificing luxury. Learn how our designers create multi-functional, elegant small spaces.",
    featuredImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
    content: "<p>Full content will go here...</p>",
    author: { ...MOCK_AUTHOR, name: "Michael Ross", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    publishDate: "2026-02-10T14:30:00Z",
    category: { id: "c2", name: "Tips & Guides", slug: "guides" },
    tags: ["Apartment", "Small Spaces", "Organization"],
    readingTime: 4,
  }
];

// --- SERVICE METHODS ---
export const blogService = {
  
  // Fetch all posts (Simulating pagination)
  getPosts: async (page = 1, limit = 10): Promise<PaginatedBlogResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: MOCK_POSTS,
          total: MOCK_POSTS.length,
          page,
          limit,
          totalPages: 1,
        });
      }, 600); // Simulate network latency
    });
  },

  // Fetch a single post by its slug
  getPostBySlug: async (slug: string): Promise<BlogPost | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const post = MOCK_POSTS.find((p) => p.slug === slug);
        resolve(post || null);
      }, 400);
    });
  }
};