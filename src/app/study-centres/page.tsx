import type { Metadata } from "next";
import DayAtCentre from "@/components/study-centres/DayAtCentre";
import GalleryTestimonial from "@/components/study-centres/GalleryTestimonial";
import StudyHero from "@/components/study-centres/StudyHero";

export const metadata: Metadata = {
  title: "Study Centres",
  description:
    "Palakkad study centres offering after-school learning, mentorship, and belonging.",
};

export default function StudyCentresPage() {
  return (
    <>
      <StudyHero />
      <DayAtCentre />
      <GalleryTestimonial />
    </>
  );
}
