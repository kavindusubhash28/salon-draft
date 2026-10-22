import type { Metadata } from "next";
import WorkHero from "@/components/work/WorkHero";
import WorkGallery from "@/components/work/WorkGallery";
import WorkTransformations from "@/components/work/WorkTransformations";
import WorkFeaturedStyle from "@/components/work/WorkFeaturedStyle";
import WorkCTA from "@/components/work/WorkCTA";

export const metadata: Metadata = {
  title: "Our Work & Styles Lookbook | Three Brothers Salon Cuts",
  description:
    "Real People. Real Styles. Explore our collection of modern fades, textured crops, classic cuts, creative razor designs, beard grooming, and client transformations created at Three Brothers Salon Cuts.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkGallery />
      <WorkTransformations />
      <WorkFeaturedStyle />
      <WorkCTA />
    </>
  );
}
