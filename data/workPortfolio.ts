export interface WorkItem {
  id: string;
  slotNumber: string;
  title: string;
  categories: string[];
  image: string; // Leave empty string "" to display the sleek empty box placeholder
  column: 1 | 2 | 3 | 4 | 5;
  variant?: "tall" | "standard" | "short"; // Col 1 has tall (top) + short (bottom)
}

export const MENS_CATEGORIES = [
  "ALL",
  "FADE",
  "CLASSIC CUT",
  "BEARD",
  "STYLING",
] as const;

export const LADIES_CATEGORIES = [
  "ALL",
  "HAIRCUT",
  "HAIR COLOUR",
  "TREATMENTS",
  "STYLING",
] as const;

export const MENS_WORK_ITEMS: WorkItem[] = [
  // Column 1
  {
    id: "men-01",
    slotNumber: "01",
    title: "Curly High Taper Fade",
    categories: ["FADE", "STYLING"],
    image: "", // Add image path e.g. "/images/work/men-01.jpg"
    column: 1,
    variant: "tall",
  },
  {
    id: "men-06",
    slotNumber: "06",
    title: "Razor Beard Line-up & Shave",
    categories: ["BEARD"],
    image: "",
    column: 1,
    variant: "short",
  },

  // Column 2
  {
    id: "men-02",
    slotNumber: "02",
    title: "Executive Scissor Cut & Beard",
    categories: ["CLASSIC CUT", "BEARD"],
    image: "",
    column: 2,
    variant: "standard",
  },
  {
    id: "men-07",
    slotNumber: "07",
    title: "Low Drop Skin Fade",
    categories: ["FADE"],
    image: "",
    column: 2,
    variant: "standard",
  },

  // Column 3
  {
    id: "men-03",
    slotNumber: "03",
    title: "Textured Crop Fade",
    categories: ["FADE", "STYLING"],
    image: "",
    column: 3,
    variant: "standard",
  },
  {
    id: "men-08",
    slotNumber: "08",
    title: "Mid Taper Clean Finish",
    categories: ["FADE", "CLASSIC CUT"],
    image: "",
    column: 3,
    variant: "standard",
  },

  // Column 4
  {
    id: "men-04",
    slotNumber: "04",
    title: "Artistic Hairline Razor Wave",
    categories: ["FADE", "STYLING"],
    image: "",
    column: 4,
    variant: "standard",
  },
  {
    id: "men-09",
    slotNumber: "09",
    title: "Modern Curly Top Cut",
    categories: ["CLASSIC CUT", "STYLING"],
    image: "",
    column: 4,
    variant: "standard",
  },

  // Column 5
  {
    id: "men-05",
    slotNumber: "05",
    title: "Platinum Textured Quiff",
    categories: ["STYLING", "FADE"],
    image: "",
    column: 5,
    variant: "standard",
  },
  {
    id: "men-10",
    slotNumber: "10",
    title: "Gentleman Side Part & Beard",
    categories: ["CLASSIC CUT", "BEARD"],
    image: "",
    column: 5,
    variant: "standard",
  },
];

export const LADIES_WORK_ITEMS: WorkItem[] = [
  // Column 1
  {
    id: "ladies-01",
    slotNumber: "01",
    title: "Brunette Butterfly Layers",
    categories: ["HAIRCUT", "STYLING"],
    image: "", // Add image path e.g. "/images/work/ladies-01.jpg"
    column: 1,
    variant: "tall",
  },
  {
    id: "ladies-06",
    slotNumber: "06",
    title: "Golden Bronde Soft Waves",
    categories: ["HAIR COLOUR", "STYLING"],
    image: "",
    column: 1,
    variant: "short",
  },

  // Column 2
  {
    id: "ladies-02",
    slotNumber: "02",
    title: "Dimensional Brunette Balayage",
    categories: ["HAIR COLOUR", "STYLING"],
    image: "",
    column: 2,
    variant: "standard",
  },
  {
    id: "ladies-07",
    slotNumber: "07",
    title: "Sun-Kissed Caramel Ribbon Waves",
    categories: ["HAIR COLOUR", "TREATMENTS"],
    image: "",
    column: 2,
    variant: "standard",
  },

  // Column 3
  {
    id: "ladies-03",
    slotNumber: "03",
    title: "Face-Framing Curtain Bangs",
    categories: ["HAIRCUT", "STYLING"],
    image: "",
    column: 3,
    variant: "standard",
  },
  {
    id: "ladies-08",
    slotNumber: "08",
    title: "Velvet Plum Red Blowout",
    categories: ["HAIR COLOUR", "STYLING"],
    image: "",
    column: 3,
    variant: "standard",
  },

  // Column 4
  {
    id: "ladies-04",
    slotNumber: "04",
    title: "Deep Wine Red Gloss Finish",
    categories: ["HAIR COLOUR", "TREATMENTS"],
    image: "",
    column: 4,
    variant: "standard",
  },
  {
    id: "ladies-09",
    slotNumber: "09",
    title: "Silk Press Keratin Treatment",
    categories: ["TREATMENTS", "HAIRCUT"],
    image: "",
    column: 4,
    variant: "standard",
  },

  // Column 5
  {
    id: "ladies-05",
    slotNumber: "05",
    title: "Long Feathered Layers",
    categories: ["HAIRCUT", "STYLING"],
    image: "",
    column: 5,
    variant: "standard",
  },
  {
    id: "ladies-10",
    slotNumber: "10",
    title: "Espresso Gloss & Bounce",
    categories: ["TREATMENTS", "STYLING"],
    image: "",
    column: 5,
    variant: "standard",
  },
];
