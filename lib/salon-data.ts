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
  tagline: "Good Hair. Good Confidence.",
  motto: "Precision Cuts • Luxury Grooming • Total Care",
  phone: "+94 117 210 081",
  altPhone: "+94 78 972 7272",
  whatsapp: "+94789727272",
  whatsappUrl: "https://wa.me/94789727272",
  email: "info@threebrothers.lk",
  address: "304 High Level Road, Gamsaba Junction, Nugegoda 10250, Sri Lanka",
  landmark: "Gamsaba Junction, High Level Road",
  facebook: "https://www.facebook.com/ThreeBrothersSalonCuts",
  instagram: "https://www.instagram.com/threebrotherssaloncuts?srtk=azBxZjZlMWlxZDV1",
  hours: [
    { days: "Monday – Sunday", hours: "8:00 AM – 10:00 PM", status: "Open Daily" },
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
    name: "Gents Classic & Scissor Haircut",
    category: "Hair Care & Styling",
    gender: "male",
    duration: "45 mins",
    price: "Rs. 1,800",
    description: "Wash, tailored scissor & clipper cut, scalp refresh, and matte styling.",
    popular: true,
  },
  {
    id: "m-2",
    name: "Classic & Modern Skin Fade / Taper",
    category: "Hair Care & Styling",
    gender: "male",
    duration: "45 mins",
    price: "Rs. 2,200",
    description: "Seamless foil shaver graduation with razor edge detailing.",
    popular: true,
  },
  {
    id: "m-3",
    name: "Beard Styling & Grooming",
    category: "Grooming & Beard",
    gender: "male",
    duration: "30 mins",
    price: "Rs. 1,200",
    description: "Beard sculpting, razor lines, hot towel refresh, and beard oil nourishment.",
    popular: true,
  },
  {
    id: "m-4",
    name: "Traditional Hot Towel Shave",
    category: "Grooming & Beard",
    gender: "male",
    duration: "35 mins",
    price: "Rs. 1,500",
    description: "Hot eucalyptus compression, warm lather glide, and straight razor precision.",
  },
  {
    id: "m-5",
    name: "Hair Coloring & Highlights",
    category: "Hair Care & Styling",
    gender: "male",
    duration: "60 mins",
    price: "Rs. 4,500+",
    description: "Grey coverage blending, natural tones, and dimension highlights.",
  },
  {
    id: "m-6",
    name: "Keratin & Deep Hair Conditioning",
    category: "Treatments",
    gender: "male",
    duration: "60 mins",
    price: "Rs. 5,500+",
    description: "Intense smoothing keratin and deep conditioning for frizz control and scalp strength.",
  },
  {
    id: "m-7",
    name: "Hydrafacial & Carbon Peel",
    category: "Face & Skin Care",
    gender: "male",
    duration: "50 mins",
    price: "Rs. 6,500+",
    description: "Deep pore suction, exfoliating carbon laser peel, and hydrating antioxidant infusion.",
  },
  {
    id: "m-8",
    name: "Executive Manicure & Jelly Pedicure",
    category: "Nails",
    gender: "male",
    duration: "60 mins",
    price: "Rs. 4,000",
    description: "Cuticle care, soothing jelly soak, scrub, nail buff, and tension massage.",
  },
];

export const FEMALE_SERVICES: ServiceItem[] = [
  {
    id: "f-1",
    name: "Ladies Haircut & Restyle",
    category: "Hair Care & Styling",
    gender: "female",
    duration: "60 mins",
    price: "Rs. 3,500",
    description: "Face-framing scissor design, hair cleanse bath, and signature blowout.",
    popular: true,
  },
  {
    id: "f-2",
    name: "Precision Layer Cut & Blowout",
    category: "Hair Care & Styling",
    gender: "female",
    duration: "60 mins",
    price: "Rs. 3,800",
    description: "Feathered or blended layers creating volume, movement, and effortless bounce.",
    popular: true,
  },
  {
    id: "f-3",
    name: "Hair Coloring & Highlights",
    category: "Hair Care & Styling",
    gender: "female",
    duration: "150 mins",
    price: "Rs. 9,500+",
    description: "Full global tint, ombre, or multi-dimensional highlights with gloss glaze.",
    popular: true,
  },
  {
    id: "f-4",
    name: "Hair Setting & Event Styling",
    category: "Hair Care & Styling",
    gender: "female",
    duration: "50 mins",
    price: "Rs. 3,500",
    description: "Thermal curls, red carpet Hollywood waves, or elegant sleek pin-up styling.",
  },
  {
    id: "f-5",
    name: "Keratin Treatment & Deep Conditioning",
    category: "Treatments",
    gender: "female",
    duration: "150 mins",
    price: "Rs. 12,000+",
    description: "Intensive keratin smoothing eliminating frizz, plus oil & peptide conditioning.",
  },
  {
    id: "f-6",
    name: "Hydrafacial, Carbon Peel & Gold Facial",
    category: "Face & Skin Care",
    gender: "female",
    duration: "60 mins",
    price: "Rs. 6,500+",
    description: "Advanced hydradermabrasion, carbon laser brightening, and 24K gold facial radiance.",
  },
  {
    id: "f-7",
    name: "Eyebrow Threading & Shaping",
    category: "Face & Skin Care",
    gender: "female",
    duration: "20 mins",
    price: "Rs. 500",
    description: "Flawless arch definition and clean brow cleanup.",
  },
  {
    id: "f-8",
    name: "Manicure, Gel & Jelly Pedicure",
    category: "Nails",
    gender: "female",
    duration: "75 mins",
    price: "Rs. 4,500+",
    description: "Luxury hand manicure, high-shine gel polish, and deep jelly pedicure spa.",
  },
  {
    id: "f-9",
    name: "Event & Bridal Makeup & Dressing",
    category: "Beauty & Dressing",
    gender: "female",
    duration: "90 mins",
    price: "Rs. 8,500+",
    description: "HD radiant makeup artistry, saree draping, and complete event dressing.",
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
    answer: "Yes! Text us on WhatsApp at +94 78 972 7272 with your preferred time, service, or inspiration photo for an instant confirmation.",
  },
];
