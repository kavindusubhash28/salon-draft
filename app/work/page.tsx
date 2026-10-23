import type { Metadata } from "next";
import WorkHero from "@/components/work/WorkHero";
import WorkSection from "@/components/work/WorkSection";
import WorkCTA from "@/components/work/WorkCTA";
import {
  MENS_CATEGORIES,
  MENS_WORK_ITEMS,
  LADIES_CATEGORIES,
  LADIES_WORK_ITEMS,
} from "@/data/workPortfolio";

export const metadata: Metadata = {
  title: "Our Work & Styles Lookbook | Three Brothers Salon Cuts",
  description:
    "Real People. Real Styles. Explore our collection of recent work, showcasing the skill and creativity of our master barbers and stylists at Three Brothers Salon Cuts.",
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkSection
        sectionNumber="01"
        sectionName="MEN'S"
        sectionSuffix="WORK"
        theme="light"
        categories={MENS_CATEGORIES}
        items={MENS_WORK_ITEMS}
      />
      <WorkSection
        sectionNumber="02"
        sectionName="LADIES'"
        sectionSuffix="WORK"
        theme="dark"
        categories={LADIES_CATEGORIES}
        items={LADIES_WORK_ITEMS}
      />
      <WorkCTA />
    </>
  );
}
