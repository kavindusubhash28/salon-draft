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
  quote: string;
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
  date: string;
  service: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "booking" | "services" | "general";
}

export const SALON_INFO = {
  name: "Three Brothers Salon Cuts",
  tagline: "Artisan Cuts & Modern Hair Design",
  motto: "Heritage Craftsmanship. Modern Precision. No Compromise.",
  phone: "+94 77 892 3410",
  altPhone: "+94 11 280 4550",
  whatsapp: "+94778923410",
  email: "contact@threebrotherssalon.com",
  address: "No. 48, Galle Road, Colombo 03, Sri Lanka",
  landmark: "Opposite Liberty Arcade, 200m from Kollupitiya Junction",
  facebook: "https://www.facebook.com/ThreeBrothersSalonCuts",
  instagram: "https://instagram.com/threebrotherssaloncuts",
  hours: [
    { days: "Monday – Friday", hours: "9:00 AM – 8:30 PM", status: "Open" },
    { days: "Saturday", hours: "8:30 AM – 9:00 PM", status: "Peak Hours" },
    { days: "Sunday", hours: "9:30 AM – 6:30 PM", status: "Open" },
    { days: "Poya / Public Holidays", hours: "10:00 AM – 5:00 PM", status: "Special Schedule" },
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "kasun",
    name: "Kasun 'The Blade' Perera",
    role: "Co-Founder & Master Barber",
    specialty: "Razor Skin Fades, Traditional Hot Towel Shaves & Beard Sculpting",
    experience: "14+ Years",
    bio: "The eldest of the three brothers, Kasun honed his craft under European traditional barber masters before establishing the brand. Renowned for surgical taper fades and old-school blade discipline.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quote: "A cut is not complete until every single edge tells a story of pure precision.",
  },
  {
    id: "tharindu",
    name: "Tharindu 'Texture' Perera",
    role: "Co-Founder & Creative Director",
    specialty: "Modern Textured Crops, Precision Scissor Layering & Unisex Styles",
    experience: "11+ Years",
    bio: "The middle brother and visionary artist behind the modern salon lookbook. Trained in Tokyo and London academy scissor mechanics, Tharindu brings international runway trends into daily wearable sophistication.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    quote: "We don't cut hair to follow trends; we sculpt hair to balance your facial architecture.",
  },
  {
    id: "nuwan",
    name: "Nuwan 'Color' Perera",
    role: "Co-Founder & Senior Chemical Artist",
    specialty: "Balayage, Keratin Rejuvenation, Men's Ash Silver Tones & Scalp Wellness",
    experience: "9+ Years",
    bio: "The youngest brother and chemical wizard. Nuwan holds advanced master certification in organic ammonia-free hair dyeing and Japanese scalp therapy rituals.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    quote: "Hair color is chemistry elevated to high art. Health and luster must always precede tone.",
  },
];

export const MALE_SERVICES: ServiceItem[] = [
  {
    id: "m-1",
    name: "Signature Brothers Precision Cut",
    category: "Haircuts & Styling",
    gender: "male",
    duration: "45 mins",
    price: "Rs. 2,200",
    description: "Detailed consultation, custom shear & clipper cut tailored to bone structure, wash, scalp massage, and bespoke styling with matte clay.",
    popular: true,
  },
  {
    id: "m-2",
    name: "Master Razor Skin Fade & Taper",
    category: "Haircuts & Styling",
    gender: "male",
    duration: "45 mins",
    price: "Rs. 2,600",
    description: "Ultra-seamless zero to skin graduation utilizing Japanese foil shavers and straight razor perimeter detailing.",
    popular: true,
  },
  {
    id: "m-3",
    name: "Executive Beard Sculpt & Line-Up",
    category: "Beard & Shave",
    gender: "male",
    duration: "35 mins",
    price: "Rs. 1,600",
    description: "Detailed length trimming, jawline shaping, hot eucalyptus towel prep, razor line finishing, and organic cedarwood oil treatment.",
  },
  {
    id: "m-4",
    name: "Traditional Hot Towel Straight Razor Shave",
    category: "Beard & Shave",
    gender: "male",
    duration: "40 mins",
    price: "Rs. 2,000",
    description: "Pre-shave essential oils, 3-layer hot towel compression, badger brush lather, close cut feather razor glide, and ice towel pore seal.",
  },
  {
    id: "m-5",
    name: "Men's Gray Blending & Matte Tint",
    category: "Color & Chemical",
    gender: "male",
    duration: "40 mins",
    price: "Rs. 3,800",
    description: "Subtle, natural camouflage of silver hair without warm brassy tones. Wash-out gradient that looks completely effortless.",
  },
  {
    id: "m-6",
    name: "Botanical Scalp Detox & Deep Head Massage",
    category: "Treatments",
    gender: "male",
    duration: "40 mins",
    price: "Rs. 2,800",
    description: "Tea tree scalp exfoliation, stimulation of acupressure meridians, steam therapy, and anti-dandruff follicle nourishment.",
  },
];

export const FEMALE_SERVICES: ServiceItem[] = [
  {
    id: "f-1",
    name: "Couture Restyle Cut & Signature Blowout",
    category: "Haircuts & Styling",
    gender: "female",
    duration: "60 mins",
    price: "Rs. 3,800",
    description: "Holistic face-framing scissor architecture, texture mapping, deep cleansing wash, conditioning mask, and Hollywood blowout.",
    popular: true,
  },
  {
    id: "f-2",
    name: "Sun-Kissed Dimensional Balayage",
    category: "Color & Highlighting",
    gender: "female",
    duration: "180 mins",
    price: "Rs. 16,500+",
    description: "Freehand painterly transitions, custom root melt, toner glaze, and bond-building Olaplex infusion for zero brassiness.",
    popular: true,
  },
  {
    id: "f-3",
    name: "Organic Brazilian Keratin Smoothing",
    category: "Treatments",
    gender: "female",
    duration: "150 mins",
    price: "Rs. 18,000+",
    description: "Formaldehyde-free micro-protein smoothing that removes 95% frizz and cuts daily styling time in half for 4-6 months.",
  },
  {
    id: "f-4",
    name: "Full Global Root Touch-Up & Shine Glaze",
    category: "Color & Highlighting",
    gender: "female",
    duration: "90 mins",
    price: "Rs. 7,200",
    description: "Precision regrowth coverage using Italian low-ammonia pigment, paired with an acidic gloss treatment for mirror shine.",
  },
  {
    id: "f-5",
    name: "Caviar Deep Hydration Intensive Hair Spa",
    category: "Treatments",
    gender: "female",
    duration: "60 mins",
    price: "Rs. 4,900",
    description: "Micro-mist steam pod therapy, biomimetic peptide infusion, restorative lipid barrier repair, and neck/shoulder stress relief.",
  },
  {
    id: "f-6",
    name: "Glamour Red Carpet Waves & Event Styling",
    category: "Haircuts & Styling",
    gender: "female",
    duration: "50 mins",
    price: "Rs. 4,200",
    description: "Thermal curling, architectural pinning, volume boosting textures, and long-lasting humidity-resistant finish.",
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "pkg-1",
    name: "The Three Brothers Sovereign",
    targetGender: "male",
    price: "Rs. 5,400",
    duration: "90 mins",
    badge: "Most Requested",
    description: "Our signature flagship grooming ritual. Crafted for the modern gentleman who refuses to cut corners.",
    includes: [
      "Master Haircut & Tailored Consultation",
      "Skin Fade Detailing or Shear Precision",
      "Full Hot Eucalyptus Towel Razor Shave or Beard Sculpt",
      "Purifying Charcoal Face Mask & Hot Steam",
      "15-Minute Acupressure Shoulder & Neck Massage",
      "Craft Beverage & Matte Styling Finish",
    ],
  },
  {
    id: "pkg-2",
    name: "The Royal Revival (For Her)",
    targetGender: "female",
    price: "Rs. 12,800",
    duration: "120 mins",
    badge: "Luxury Favorite",
    description: "Complete transformative reset for tired hair. Leaves tresses silky, radiant, and perfectly balanced.",
    includes: [
      "Bespoke Consultation with Senior Stylist",
      "Precision Signature Layer Cut & Face Framing",
      "Intensive 4-Step Bond Rebuilder Treatment",
      "Deep Scalp Exfoliation & Steam Bath",
      "Velvet Hydration Seal & Acidic Gloss Glaze",
      "Signature Bouncy Volume Blowout & Heat Defense",
    ],
  },
  {
    id: "pkg-3",
    name: "The Groomsmen Suite (Private Booking)",
    targetGender: "male",
    price: "Rs. 24,000",
    duration: "3 Hours",
    badge: "Wedding Special",
    description: "Exclusive lounge booking for the Groom and 3 Best Men before the big day. Sharpened, relaxed, and camera-ready.",
    includes: [
      "Full Haircuts & Line-ups for Groom + 3 Groomsmen",
      "Beard Grooming & Straight Razor Edge Detailing",
      "Pre-Wedding Revitalizing Face Sheet Treatment",
      "Signature Hair Styling & Strong Hold Finishes",
      "Private Studio Access with Espresso & Refreshments",
    ],
  },
  {
    id: "pkg-4",
    name: "Color & Silk Luxe Combo",
    targetGender: "female",
    price: "Rs. 22,500",
    duration: "3.5 Hours",
    badge: "All-Inclusive",
    description: "Complete dimensional color transformation combined with intense restorative smoothing.",
    includes: [
      "Full Balayage, Foilayage, or Multi-Tonal Color",
      "Bond Protection Integration throughout Chemical Work",
      "Harmonizing Toner, Glaze & Root Shadow",
      "Split-End Eradication Cut",
      "Deep Protein Infusion Mask",
      "Runway Finish & Aftercare Consultation",
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Mid-Skin Taper Fade with Textured Top",
    category: "fades-beards",
    gender: "male",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=900&auto=format&fit=crop",
    technique: "Zero-gap clipper taper into scissor-cut crop with matte clay separation",
    stylist: "Kasun Perera",
    timeTaken: "45 mins",
    hairType: "Dense, Coarse Wavy",
    description: "A razor-clean mid taper paired with textured fringe. Built for easy everyday maintenance with low shine finish.",
  },
  {
    id: "gal-2",
    title: "Sculpted Viking Beard with Sharp Cheek Line",
    category: "fades-beards",
    gender: "male",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop",
    technique: "Freehand clipper graduation, hot lather razor edge, cold mist lock",
    stylist: "Kasun Perera",
    timeTaken: "35 mins",
    hairType: "Thick Beard Bristle",
    description: "Structured architectural beard contour that accentuates the jawline while maintaining dense volume below the chin.",
  },
  {
    id: "gal-3",
    title: "Seamless Caramel Ribbon Balayage",
    category: "color-treatments",
    gender: "female",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
    technique: "Hand-painted diagonal sweeps with blended shadow root and neutral gloss",
    stylist: "Nuwan Perera",
    timeTaken: "180 mins",
    hairType: "Fine to Medium Brunette",
    description: "Natural golden honey ribbons flowing through an espresso base for radiant dimension under sunlight.",
  },
  {
    id: "gal-4",
    title: "Classic Executive Scissor Pompadour",
    category: "mens-cuts",
    gender: "male",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=900&auto=format&fit=crop",
    technique: "100% shear graduation over comb with tapered neckline and high volume sweep",
    stylist: "Tharindu Perera",
    timeTaken: "50 mins",
    hairType: "Straight, High Density",
    description: "Timeless gentleman cut inspired by golden age barbershop classics with modern weight removal.",
  },
  {
    id: "gal-5",
    title: "Butterfly Layer Cut & 90s Bombshell Blowout",
    category: "womens-styling",
    gender: "female",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
    technique: "Internal weight dispersion, cascading framing layers, ceramic round brush bounce",
    stylist: "Tharindu Perera",
    timeTaken: "65 mins",
    hairType: "Long Wavy Hair",
    description: "Dramatic cascading motion that preserves overall length while creating ultra-light bouncy wings.",
  },
  {
    id: "gal-6",
    title: "Smoky Ash Blonde High Contrast Fade",
    category: "color-treatments",
    gender: "male",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=900&auto=format&fit=crop",
    technique: "Double-process platinum lift, anti-yellow toner, high skin drop fade",
    stylist: "Nuwan & Kasun Perera",
    timeTaken: "120 mins",
    hairType: "Short Medium Texture",
    description: "A head-turning modern combination: cold Nordic ash on top contrasted with natural dark stubble fade.",
  },
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "trans-1",
    title: "Overgrown Lock to Architectural Skin Fade & Beard Trim",
    gender: "male",
    stylist: "Kasun Perera",
    service: "The Sovereign Package",
    beforeImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=700&auto=format&fit=crop",
    story: "Client came in with 6 months of unattended hair growth. We sculpted a disciplined low drop fade, structured his cheekbones, and revived facial definition.",
  },
  {
    id: "trans-2",
    title: "Dull Brass to Luminous Cool Pearl Balayage",
    gender: "female",
    stylist: "Nuwan Perera",
    service: "Dimensional Balayage & Olaplex Cure",
    beforeImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=700&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop",
    story: "Corrected uneven box dye bands with selective foil babylights, bonded keratin replenishment, and a pearlescent root melt for seamless regrowth.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    author: "Shenal Fernando",
    role: "Regular Gentleman Client (3+ Years)",
    rating: 5,
    content: "There's barbershops, and then there's Three Brothers. You sit in Kasun's chair and you immediately sense the razor mastery. The hot towel routine and the taper fade are in a league of their own in Colombo.",
    date: "October 2026",
    service: "Master Razor Skin Fade & Beard Sculpt",
  },
  {
    id: "t-2",
    author: "Dinithi Wijesinghe",
    role: "Fashion Consultant",
    rating: 5,
    content: "Finding a salon that understands both modern European balayage and Asian hair textures is so rare. Nuwan did magic on my hair—no brassiness, unbelievable softness even months after. Highly recommended!",
    date: "September 2026",
    service: "Balayage & Keratin Infusion",
  },
  {
    id: "t-3",
    author: "Malik Senanayake",
    role: "Architect",
    rating: 5,
    content: "What strikes me is the consistency. Three Brothers has an atmosphere that feels like an upscale London private club—dark woods, vintage leather, authentic banter, and pinpoint scissor work.",
    date: "August 2026",
    service: "The Three Brothers Sovereign Package",
  },
  {
    id: "t-4",
    author: "Roshana Jayatilleke",
    role: "Creative Director",
    rating: 5,
    content: "I booked the salon for our wedding party grooming. Tharindu and the crew took care of 5 of us with incredible timing, espresso on hand, and everyone looked razor sharp for photos.",
    date: "July 2026",
    service: "The Groomsmen Suite",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you accept walk-ins or are appointments strictly required?",
    answer: "While we always do our best to accommodate walk-ins when a chair is open, we strongly recommend booking in advance—especially on Friday afternoons and weekends—to ensure your preferred brother or master stylist is dedicated to you.",
    category: "booking",
  },
  {
    question: "Are male and female services conducted in separate or private sections?",
    answer: "Yes! Our salon is thoughtfully architected with designated zones: our vintage heritage barbershop lounge for men's cuts, shaves, and grooming, and our tranquil aesthetic hair studio for women's coloring, treatments, and styling.",
    category: "services",
  },
  {
    question: "How do I choose between the three brothers for my service?",
    answer: "Each brother specializes in specific disciplines: Kasun for razor skin fades and beard mastery, Tharindu for modern scissor architecture and unisex styling, and Nuwan for color chemistry and intensive hair repair. You can select your preferred stylist during online booking or WhatsApp consultation.",
    category: "services",
  },
  {
    question: "What hair color and treatment products do you utilize?",
    answer: "We strictly use professional-grade, cruelty-free, low-ammonia formulas from Italy and Germany, enriched with argan oils, amino acids, and bond rebuilders to safeguard hair fiber integrity.",
    category: "general",
  },
  {
    question: "What is your appointment cancellation or rescheduling policy?",
    answer: "We kindly ask for at least 3 hours' notice if you need to reschedule or cancel your appointment so we can offer that reserved slot to a client on our waiting list.",
    category: "booking",
  },
  {
    question: "Can I book via WhatsApp directly?",
    answer: "Absolutely! Our team is active on WhatsApp at +94 77 892 3410. You can instantly message us your preferred time, service, and even reference photos for a quick quote and instant confirmation.",
    category: "booking",
  },
];
