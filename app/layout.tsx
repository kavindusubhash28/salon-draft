import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Three Brothers Salon Cuts | Master Barber & Precision Hair Artistry",
  description:
    "Colombo's premier artisan salon & barbershop. Founded by three master craftsman brothers, specializing in precision fades, traditional hot towel shaves, balayage, keratin smoothing, and bespoke styling.",
  keywords: [
    "Three Brothers Salon Cuts",
    "Barber Colombo",
    "Hair Salon Sri Lanka",
    "Skin Fade",
    "Balayage Colombo",
    "Men's Grooming",
    "Haircut",
    "Keratin Treatment",
  ],
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#0a0a0c] text-[#ffffff] antialiased selection:bg-white selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
