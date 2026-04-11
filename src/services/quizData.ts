// ============================================================
// Quiz Data — Static configuration for the 10-step style quiz.
// Each step presents two contrasting interior design styles.
// ============================================================

export interface QuizOption {
  id: string;
  imageUrl: string;
  alt: string;
  styleLabel: string;
}

export interface QuizStep {
  id: number;
  optionA: QuizOption;
  optionB: QuizOption;
}

export type QuizSelection = {
  stepId: number;
  selectedOptionId: string | null;   // null = "Neither"
  selectedImageUrl: string | null;
};

export const quizSteps: QuizStep[] = [
  // Step 1: Modern Minimalist vs Traditional Ornate
  {
    id: 1,
    optionA: {
      id: "1a",
      imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      alt: "Clean modern minimalist living room with neutral tones",
      styleLabel: "Modern Minimalist",
    },
    optionB: {
      id: "1b",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      alt: "Traditional ornate living room with rich details",
      styleLabel: "Traditional",
    },
  },

  // Step 2: Scandinavian Light vs Industrial Dark
  {
    id: 2,
    optionA: {
      id: "2a",
      imageUrl: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200&auto=format&fit=crop",
      alt: "Bright Scandinavian living room with light wood",
      styleLabel: "Scandinavian",
    },
    optionB: {
      id: "2b",
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      alt: "Dark industrial loft with exposed brick and metal",
      styleLabel: "Industrial",
    },
  },

  // Step 3: Coastal Relaxed vs Urban Contemporary
  {
    id: 3,
    optionA: {
      id: "3a",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      alt: "Breezy coastal living room with ocean-inspired palette",
      styleLabel: "Coastal",
    },
    optionB: {
      id: "3b",
      imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      alt: "Sleek urban contemporary apartment",
      styleLabel: "Urban Contemporary",
    },
  },

  // Step 4: Mid-Century Modern vs Rustic Farmhouse
  {
    id: 4,
    optionA: {
      id: "4a",
      imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop",
      alt: "Mid-century modern living room with retro furniture",
      styleLabel: "Mid-Century Modern",
    },
    optionB: {
      id: "4b",
      imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
      alt: "Warm rustic farmhouse with natural wood",
      styleLabel: "Rustic Farmhouse",
    },
  },

  // Step 5: Art Deco Glam vs Japanese Zen
  {
    id: 5,
    optionA: {
      id: "5a",
      imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
      alt: "Glamorous Art Deco interior with gold accents",
      styleLabel: "Art Deco",
    },
    optionB: {
      id: "5b",
      imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18f6b8ae9?q=80&w=1200&auto=format&fit=crop",
      alt: "Serene Japanese-inspired minimalist room",
      styleLabel: "Japanese Zen",
    },
  },

  // Step 6: Bohemian Eclectic vs Transitional Classic
  {
    id: 6,
    optionA: {
      id: "6a",
      imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop",
      alt: "Vibrant bohemian room with layered textiles",
      styleLabel: "Bohemian",
    },
    optionB: {
      id: "6b",
      imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1200&auto=format&fit=crop",
      alt: "Elegant transitional living room blending classic and modern",
      styleLabel: "Transitional",
    },
  },

  // Step 7: Mediterranean vs Contemporary Luxe
  {
    id: 7,
    optionA: {
      id: "7a",
      imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?q=80&w=1200&auto=format&fit=crop",
      alt: "Mediterranean villa interior with terracotta and arches",
      styleLabel: "Mediterranean",
    },
    optionB: {
      id: "7b",
      imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      alt: "Sleek contemporary luxury living room",
      styleLabel: "Contemporary Luxe",
    },
  },

  // Step 8: French Country vs Urban Loft
  {
    id: 8,
    optionA: {
      id: "8a",
      imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop",
      alt: "Charming French country dining room with florals",
      styleLabel: "French Country",
    },
    optionB: {
      id: "8b",
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
      alt: "Open-concept urban loft with industrial elements",
      styleLabel: "Urban Loft",
    },
  },

  // Step 9: Tropical Resort vs Brutalist Modern
  {
    id: 9,
    optionA: {
      id: "9a",
      imageUrl: "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?q=80&w=1200&auto=format&fit=crop",
      alt: "Tropical resort-style room with natural materials",
      styleLabel: "Tropical Resort",
    },
    optionB: {
      id: "9b",
      imageUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
      alt: "Raw concrete and clean lines in a brutalist interior",
      styleLabel: "Brutalist Modern",
    },
  },

  // Step 10: Hollywood Regency vs Organic Modern
  {
    id: 10,
    optionA: {
      id: "10a",
      imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop",
      alt: "Bold Hollywood Regency bedroom with rich textures",
      styleLabel: "Hollywood Regency",
    },
    optionB: {
      id: "10b",
      imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
      alt: "Calming organic modern bedroom with earthy tones",
      styleLabel: "Organic Modern",
    },
  },
];
