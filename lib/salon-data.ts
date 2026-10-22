export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  gender: "male" | "female" | "unisex";
  duration: string;
  price: string;
  description: string;
  popular?: boolean;
}

export interface ServicePackage {
  id: string;
  name: string;
  targetGender: "male" | "female" | "unisex";
  price: string;
  duration: string;
  description: string;
  includes: string[];
  badge?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "mens-cuts" | "fades-beards" | "womens-styling" | "color-treatments";
  gender: "male" | "female";
  image: string;
  technique: string;
  stylist: string;
  timeTaken: string;
  hairType: string;
  description: string;
}

export interface Transformation {
  id: string;
  title: string;
  gender: "male" | "female";
  stylist: string;
  service: string;
  beforeImg: string;
  afterImg: string;
  story: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  service: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SALON_INFO = {
  name: "Three Brothers Salon Cuts",
  tagline: "More Than A Haircut. A Ritual.",
  motto: "Heritage Craft • Modern Precision",
  phone: "077 892 3410",
  altPhone: "011 280 4550",
  whatsapp: "+94778923410",
  email: "hello@threebrothers.lk",
  address: "48 Galle Road, Colombo 03",
  landmark: "Opposite Liberty Arcade",
  facebook: "https://www.facebook.com/ThreeBrothersSalonCuts",
  instagram: "https://instagram.com/threebrotherssaloncuts",
  hours: [
    { days: "Mon – Fri", hours: "9:00 AM – 8:30 PM", status: "Open" },
    { days: "Saturday", hours: "8:30 AM – 9:00 PM", status: "Peak" },
    { days: "Sunday", hours: "9:30 AM – 6:30 PM", status: "Open" },
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "kasun",
    name: "Kasun Perera",
    role: "Master Barber & Founder",
    specialty: "Skin Fades, Razor Line-Ups & Hot Shaves",
    experience: "14+ Years",
    bio: "Surgical razor discipline and seamless skin fade transitions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tharindu",
    name: "Tharindu Perera",
    role: "Creative Director",
    specialty: "Textured Scissor Crops & Unisex Styling",
    experience: "11+ Years",
    bio: "Modern wearable scissor architecture and signature blowouts.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "nuwan",
    name: "Nuwan Perera",
    role: "Senior Color Specialist",
    specialty: "Balayage, Keratin & Organic Color",
    experience: "9+ Years",
    bio: "Italian low-ammonia coloring, root melts, and fiber repair.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
  },
];

export const MALE_SERVICES: ServiceItem[] = [
  {
    id: "m-1",
    name: "Signature Precision Haircut",
    category: "Haircuts",
    gender: "male",
    duration: "45 mins",
    price: "Rs. 2,200",
    description: "Wash, tailored scissor & clipper cut, scalp refresh, and matte styling.",
    popular: true,
  },
  {
    id: "m-2",
    name: "Zero Skin Fade & Taper",
    category: "Fades",
    gender: "male",
    duration: "45 mins",
    price: "Rs. 2,600",
    description: "Seamless foil shaver graduation with straight razor perimeter edging.",
    popular: true,
  },
  {
    id: "m-3",
    name: "Beard Sculpt & Razor Detailing",
    category: "Beard & Shave",
    gender: "male",
    duration: "30 mins",
    price: "Rs. 1,600",
    description: "Length sculpt, hot eucalyptus towel, razor edges, and beard elixir.",
  },
  {
    id: "m-4",
    name: "Traditional Hot Towel Shave",
    category: "Beard & Shave",
    gender: "male",
    duration: "35 mins",
    price: "Rs. 2,000",
    description: "Triple hot towel compression, warm lather, and feather blade glide.",
  },
  {
    id: "m-5",
    name: "Gray Camo & Beard Color",
    category: "Color",
    gender: "male",
    duration: "35 mins",
    price: "Rs. 3,800",
    description: "Subtle silver blending without artificial warm undertones.",
  },
  {
    id: "m-6",
    name: "Scalp Detox & Head Massage",
    category: "Treatments",
    gender: "male",
    duration: "40 mins",
    price: "Rs. 2,800",
    description: "Tea tree exfoliation, hot steam, and neck tension release.",
  },
];

export const FEMALE_SERVICES: ServiceItem[] = [
  {
    id: "f-1",
    name: "Couture Restyle Cut & Blowout",
    category: "Haircuts",
    gender: "female",
    duration: "60 mins",
    price: "Rs. 3,800",
    description: "Face-framing scissor design, hair bath, and bouncy Hollywood blowout.",
    popular: true,
  },
  {
    id: "f-2",
    name: "Sun-Kissed Balayage & Glaze",
    category: "Color",
    gender: "female",
    duration: "180 mins",
    price: "Rs. 16,500+",
    description: "Freehand painterly transitions, root shadow, and anti-brass toner glaze.",
    popular: true,
  },
  {
    id: "f-3",
    name: "Brazilian Keratin Smoothing",
    category: "Treatments",
    gender: "female",
    duration: "150 mins",
    price: "Rs. 18,000+",
    description: "Formaldehyde-free smoothing that eliminates 95% frizz for up to 5 months.",
  },
  {
    id: "f-4",
    name: "Root Touch-Up & High Gloss",
    category: "Color",
    gender: "female",
    duration: "90 mins",
    price: "Rs. 7,200",
    description: "Regrowth coverage with low-ammonia pigment and acidic gloss mirror shine.",
  },
  {
    id: "f-5",
    name: "Deep Hydration Caviar Hair Spa",
    category: "Treatments",
    gender: "female",
    duration: "50 mins",
    price: "Rs. 4,900",
    description: "Micro-mist steam pod therapy and biomimetic peptide moisture infusion.",
  },
  {
    id: "f-6",
    name: "Event Waves & Updo Styling",
    category: "Styling",
    gender: "female",
    duration: "50 mins",
    price: "Rs. 4,200",
    description: "Red carpet thermal waves, pin-curls, and humidity-resistant hold.",
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "pkg-1",
    name: "The Sovereign Gentleman",
    targetGender: "male",
    price: "Rs. 5,400",
    duration: "90 mins",
    badge: "Most Popular",
    description: "Complete head-to-beard reset for the modern gentleman.",
    includes: [
      "Master Precision Cut & Styling",
      "Skin Fade or Taper Detailing",
      "Hot Eucalyptus Towel Razor Shave or Beard Sculpt",
      "Purifying Charcoal Face Mask",
      "Acupressure Neck & Shoulder Release",
      "Espresso or Craft Beverage",
    ],
  },
  {
    id: "pkg-2",
    name: "The Royal Revival (For Her)",
    targetGender: "female",
    price: "Rs. 12,800",
    duration: "120 mins",
    badge: "Signature Luxe",
    description: "Restorative cut, bond reconstruction, and mirror-shine blowout.",
    includes: [
      "Face-Framing Restyle Cut",
      "4-Step Bond Rebuilder Treatment",
      "Steam Pod Scalp Therapy",
      "Acidic Gloss Glaze",
      "Volume Blowout & Finish",
    ],
  },
  {
    id: "pkg-3",
    name: "The Groomsmen Suite",
    targetGender: "male",
    price: "Rs. 24,000",
    duration: "3 Hours",
    badge: "Weddings",
    description: "Private lounge booking for Groom + 3 Groomsmen.",
    includes: [
      "Cuts & Fades for 4 Gentlemen",
      "Beard Styling & Straight Razor Edges",
      "Pre-Wedding Refresh Face Mask",
      "Espresso & Private Studio Time",
    ],
  },
  {
    id: "pkg-4",
    name: "Luxe Color & Smooth Combo",
    targetGender: "female",
    price: "Rs. 22,500",
    duration: "3.5 Hours",
    badge: "Full Reset",
    description: "Dimensional color transformation with intensive smoothing.",
    includes: [
      "Full Balayage or Highlighting",
      "Bond Protection Integration",
      "Toner & Glaze",
      "Split-End Eradication Cut",
      "Runway Finish & Aftercare Pack",
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Mid Taper Fade & Textured Crop",
    category: "fades-beards",
    gender: "male",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=900&auto=format&fit=crop",
    technique: "Zero-gap clipper taper into scissor crop with matte clay",
    stylist: "Kasun Perera",
    timeTaken: "45 mins",
    hairType: "Dense Wavy",
    description: "Clean mid taper with textured fringe for effortless daily styling.",
  },
  {
    id: "gal-2",
    title: "Sculpted Beard & Razor Cheek Line",
    category: "fades-beards",
    gender: "male",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop",
    technique: "Clipper graduation with straight razor line finish",
    stylist: "Kasun Perera",
    timeTaken: "30 mins",
    hairType: "Thick Bristle",
    description: "Sharp jawline contour with dense under-chin volume.",
  },
  {
    id: "gal-3",
    title: "Caramel Ribbon Balayage",
    category: "color-treatments",
    gender: "female",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
    technique: "Hand-painted sweeps with blended root melt",
    stylist: "Nuwan Perera",
    timeTaken: "180 mins",
    hairType: "Medium Brunette",
    description: "Warm golden honey ribbons flowing through a rich base.",
  },
  {
    id: "gal-4",
    title: "Executive Scissor Pompadour",
    category: "mens-cuts",
    gender: "male",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=900&auto=format&fit=crop",
    technique: "Shear over comb with tapered neckline",
    stylist: "Tharindu Perera",
    timeTaken: "45 mins",
    hairType: "Straight Hair",
    description: "Timeless gentleman silhouette with modern natural weight.",
  },
  {
    id: "gal-5",
    title: "Butterfly Layer Cut & Waves",
    category: "womens-styling",
    gender: "female",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
    technique: "Cascading face-framing layers and round brush bounce",
    stylist: "Tharindu Perera",
    timeTaken: "60 mins",
    hairType: "Long Layers",
    description: "Bouncy, weightless movement that highlights facial structure.",
  },
  {
    id: "gal-6",
    title: "Nordic Ash High Skin Fade",
    category: "color-treatments",
    gender: "male",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=900&auto=format&fit=crop",
    technique: "Platinum lift, cold ash toner, drop skin fade",
    stylist: "Nuwan & Kasun",
    timeTaken: "120 mins",
    hairType: "Short Textured",
    description: "High-contrast platinum top paired with natural dark skin fade.",
  },
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans-1",
    title: "Overgrown Hair to Architectural Skin Fade",
    gender: "male",
    stylist: "Kasun Perera",
    service: "The Sovereign Package",
    beforeImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop",
    story: "Disciplined low skin fade with sculpted cheek lines and sharp jaw contour.",
  },
  {
    id: "trans-2",
    title: "Uneven Box Tone to Cool Pearl Balayage",
    gender: "female",
    stylist: "Nuwan Perera",
    service: "Balayage & Bond Repair",
    beforeImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop",
    story: "Color corrected brassy bands into seamless cool pearl ribbons with Olaplex cure.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    author: "Shenal F.",
    role: "Regular Client",
    rating: 5,
    content: "Kasun is easily one of the best barbers in Colombo. The skin fade sharpness and hot towel shave are top tier.",
    service: "Skin Fade & Beard Sculpt",
  },
  {
    id: "t-2",
    author: "Dinithi W.",
    role: "Fashion Stylist",
    rating: 5,
    content: "Nuwan understands hair texture and toner chemistry like no other. Zero brassiness, unbelievable softness.",
    service: "Balayage & Keratin",
  },
  {
    id: "t-3",
    author: "Malik S.",
    role: "Architect",
    rating: 5,
    content: "The ambiance feels like a private club. Dark woods, great espresso, and surgical scissor precision.",
    service: "The Sovereign Package",
  },
  {
    id: "t-4",
    author: "Kamil B.",
    role: "Client from Australia",
    rating: 5,
    content: "I wanted a real skin fade like back in Aussie. Three Brothers delivered on par with international standards.",
    service: "Master Skin Fade",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you accept walk-ins?",
    answer: "Walk-ins are welcomed, but advance booking is recommended to guarantee your preferred brother's chair.",
  },
  {
    question: "Are male and female spaces separated?",
    answer: "Yes, our studio features dedicated separate zones: a heritage barbershop for men and a private studio for women.",
  },
  {
    question: "How do I choose between the brothers?",
    answer: "Kasun specializes in fades and beards, Tharindu in precision scissor cuts, and Nuwan in balayage and treatments.",
  },
  {
    question: "Can I book via WhatsApp directly?",
    answer: "Yes! Text us at 077 892 3410 with your preferred time, service, or inspiration photo for an instant confirmation.",
  },
];
