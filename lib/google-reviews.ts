export interface GoogleReview {
  id: string;
  author: string;
  initials: string;
  avatarBg: string;
  rating: number;
  timeAgo: string;
  reviewerStats?: string;
  isLocalGuide?: boolean;
  content: string;
  services?: string[];
  stylistMentioned?: string;
}

export const GOOGLE_RATING_SUMMARY = {
  rating: "5.0",
  maxRating: "5.0",
  starsCount: 5,
  totalReviewsLabel: "45+ Verified Google Reviews",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Three+Brothers+Salon+Cuts+304+High+Level+Road+Nugegoda",
  writeReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Three+Brothers+Salon+Cuts+304+High+Level+Road+Nugegoda",
};

export const REAL_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "review-thishari",
    author: "Thishari Hayesha",
    initials: "TH",
    avatarBg: "#6a1b9a",
    rating: 5,
    timeAgo: "4 months ago",
    reviewerStats: "1 review",
    content:
      "Three brothers saloon cuts is excellent. I went there for hairstyling, makeup, a facial, and eyebrow shaping. All of the staff were very friendly and supportive. The customer service was also of a very high standard. Especially, Miss Ganga, who provided my services, is highly experienced and skilled. I was very happy with the final results. I would highly recommend this salon to anyone looking for quality services.",
    services: ["Eyebrow shaping", "Hairstyling", "Makeup", "Facial"],
    stylistMentioned: "Miss Ganga",
  },
  {
    id: "review-chasini",
    author: "chasini imaya",
    initials: "CI",
    avatarBg: "#d84315",
    rating: 5,
    timeAgo: "10 months ago",
    reviewerStats: "5 reviews • 11 photos",
    content:
      "Thank you so much \" Three brothers \"..Specially Nimesha , Ganga & Rithu..The service was exceptional; each of us (my friend & I) received a customized treatment, and the staff was very friendly and skilled. Truly a top-quality experience!",
    services: ["Customized Treatment", "Hair Care"],
    stylistMentioned: "Nimesha, Ganga & Rithu",
  },
  {
    id: "review-ishara",
    author: "Ishara Nilakshana Ekanayake",
    initials: "IN",
    avatarBg: "#2e7d32",
    rating: 5,
    timeAgo: "3 months ago",
    reviewerStats: "5 reviews • 3 photos",
    content:
      "A huge thank you to Rojer and the amazing crew at Three Brothers Salon Cuts for making me feel so beautiful on my special day! Exceptional attention to detail, hospitality, and brilliant styling.",
    services: ["Special Occasion & Bridal", "Event Styling"],
    stylistMentioned: "Rojer & Team",
  },
  {
    id: "review-chathurika",
    author: "Chathurika samarasinghe",
    initials: "CS",
    avatarBg: "#ad1457",
    rating: 5,
    timeAgo: "5 months ago",
    reviewerStats: "3 reviews",
    content:
      "Very good customer service and i really like the work done on me. Thank you so much Three Brothers. The professional lady did my layer cuts and eyebrows done by nimesha. She is kindly girl and very talented. 👌",
    services: ["Layer Cuts", "Eyebrows"],
    stylistMentioned: "Nimesha",
  },
  {
    id: "review-dumindu",
    author: "Dumindu Wijerathne",
    initials: "DW",
    avatarBg: "#1565c0",
    rating: 5,
    timeAgo: "Verified Client",
    reviewerStats: "2 reviews",
    content:
      "Top tier haircut and beard grooming experience. The ambiance, precision cuts, and hospitable service make Three Brothers the best salon around Nugegoda. Highly recommended!",
    services: ["Precision Haircut", "Beard Grooming"],
    stylistMentioned: "Master Barber Team",
  },
];
