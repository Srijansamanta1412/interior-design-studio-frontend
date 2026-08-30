import ThreeDBedroom from "@/assets/images/3d-design/3d-bedroom.jpeg";
import ThreeDDiningSpace from "@/assets/images/3d-design/3D-dining-space.jpeg";
import ThreeDFoodTable from "@/assets/images/3d-design/3d-food-table.jpeg";
import ThreeDHall from "@/assets/images/3d-design/3d-hall.jpeg";
import ThreeDSofaCumHall from "@/assets/images/3d-design/3d-sofa-cum-hall.jpeg";
import ThreeDTvUnit from "@/assets/images/3d-design/3d-tv-unit.jpeg";
import FinishedHallSpace from "@/assets/images/3d-design/Finished_Hall_Space.jpeg";
import IndianClassicDining from "@/assets/images/dining/indian-classic-dining.jpg";
import BrightOpenDining from "@/assets/images/dining/bright-open-space-dining-room.jpg";
import CombinedDiningEntry from "@/assets/images/dining/combined-dining-room-and-entryway-design.jpg";
import ModernFamilyDining from "@/assets/images/dining/modern-family-size-dining-area.jpg";
import VibrantDiningHall from "@/assets/images/dining/vibrant-brightly-coloured-dining-hall.jpg";
import ModernLivingTvUnit from "@/assets/images/living/modern-living-room-tv-unit-design.jpg";
import DreamSpace from "@/assets/images/how-it-works/Dream Space.jpeg";
import GreenWardrobe from "@/assets/images/how-it-works/Green Wardrobe.jpeg";
import Kitchen from "@/assets/images/how-it-works/Kitchen.jpeg";
import ModularKitchen from "@/assets/images/how-it-works/Modular Kitchen.jpeg";
import KitchenCabinet from "@/assets/images/how-it-works/Kitchen Cabinet.jpeg";

export interface QuizOption {
  id: string;
  imageUrl: string;
  alt: string;
  styleLabel: string;
}

export interface QuizStep {
  id: number;
  question: string;
  optionA: QuizOption;
  optionB: QuizOption;
}

export type QuizSelection = {
  stepId: number;
  selectedOptionId: string | null;
  selectedImageUrl: string | null;
};

export const quizSteps: QuizStep[] = [
  {
    id: 1,
    question: "Which living room feels more like home for you?",
    optionA: {
      id: "1a",
      imageUrl: FinishedHallSpace,
      alt: "Contemporary Indian living room with warm finishes and family seating",
      styleLabel: "Contemporary Indian Living",
    },
    optionB: {
      id: "1b",
      imageUrl: IndianClassicDining,
      alt: "Classic Indian interior with rich wood and traditional detailing",
      styleLabel: "Classic Indian Elegance",
    },
  },
  {
    id: 2,
    question: "What kind of TV unit would you prefer?",
    optionA: {
      id: "2a",
      imageUrl: ModernLivingTvUnit,
      alt: "Sleek wall-mounted TV unit with storage for an Indian apartment",
      styleLabel: "Sleek TV Wall Unit",
    },
    optionB: {
      id: "2b",
      imageUrl: ThreeDTvUnit,
      alt: "Warm wood TV unit with display shelves and concealed storage",
      styleLabel: "Warm Wood TV Unit",
    },
  },
  {
    id: 3,
    question: "Which dining setup suits your family better?",
    optionA: {
      id: "3a",
      imageUrl: ModernFamilyDining,
      alt: "Modern family dining area with practical seating and clean finishes",
      styleLabel: "Family Dining",
    },
    optionB: {
      id: "3b",
      imageUrl: VibrantDiningHall,
      alt: "Bright colourful dining hall with expressive Indian styling",
      styleLabel: "Vibrant Dining",
    },
  },
  {
    id: 4,
    question: "How should your kitchen feel?",
    optionA: {
      id: "4a",
      imageUrl: ModularKitchen,
      alt: "Compact modular kitchen with efficient storage and clean shutters",
      styleLabel: "Compact Modular Kitchen",
    },
    optionB: {
      id: "4b",
      imageUrl: Kitchen,
      alt: "Warm Indian kitchen with practical counters and everyday cooking space",
      styleLabel: "Warm Everyday Kitchen",
    },
  },
  {
    id: 5,
    question: "What bedroom mood would you choose?",
    optionA: {
      id: "5a",
      imageUrl: ThreeDBedroom,
      alt: "Calm modern bedroom with soft neutral tones and storage planning",
      styleLabel: "Calm Neutral Bedroom",
    },
    optionB: {
      id: "5b",
      imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop",
      alt: "Luxury bedroom with rich textures, warm lighting, and statement decor",
      styleLabel: "Luxury Statement Bedroom",
    },
  },
  {
    id: 6,
    question: "Which colour palette feels right for your home?",
    optionA: {
      id: "6a",
      imageUrl: BrightOpenDining,
      alt: "Bright open Indian dining space with light colours",
      styleLabel: "Light And Airy",
    },
    optionB: {
      id: "6b",
      imageUrl: ThreeDHall,
      alt: "Warm interior with deeper tones and a cosy evening ambience",
      styleLabel: "Warm And Cosy",
    },
  },
  {
    id: 7,
    question: "What kind of wardrobe and storage style do you like?",
    optionA: {
      id: "7a",
      imageUrl: GreenWardrobe,
      alt: "Colourful Indian wardrobe design with a fresh modern finish",
      styleLabel: "Coloured Wardrobes",
    },
    optionB: {
      id: "7b",
      imageUrl: KitchenCabinet,
      alt: "Elegant neutral storage design with seamless shutters",
      styleLabel: "Seamless Neutral Storage",
    },
  },
  {
    id: 8,
    question: "How would you treat your foyer or entrance?",
    optionA: {
      id: "8a",
      imageUrl: CombinedDiningEntry,
      alt: "Combined dining and entrance design with storage and a welcoming layout",
      styleLabel: "Practical Foyer Storage",
    },
    optionB: {
      id: "8b",
      imageUrl: ThreeDDiningSpace,
      alt: "Decorative Indian entrance connected to dining with display details",
      styleLabel: "Decorative Welcome Area",
    },
  },
  {
    id: 9,
    question: "Which open living layout do you prefer?",
    optionA: {
      id: "9a",
      imageUrl: ThreeDSofaCumHall,
      alt: "Open sofa and hall layout for a compact Indian home",
      styleLabel: "Compact Open Living",
    },
    optionB: {
      id: "9b",
      imageUrl: DreamSpace,
      alt: "Finished dream home space with more detailed decor and a premium feel",
      styleLabel: "Premium Finished Look",
    },
  },
  {
    id: 10,
    question: "Which overall direction should your designer explore?",
    optionA: {
      id: "10a",
      imageUrl: ThreeDFoodTable,
      alt: "Simple functional Indian home design focused on daily family use",
      styleLabel: "Simple And Functional",
    },
    optionB: {
      id: "10b",
      imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
      alt: "Premium interior with rich textures, statement lighting, and luxury finishes",
      styleLabel: "Premium And Decorative",
    },
  },
];
