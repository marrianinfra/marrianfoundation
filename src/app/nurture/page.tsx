import type { Metadata } from "next";
import ScholarshipSection from "@/components/nurture/ScholarshipSection";
import SuccessStory from "@/components/nurture/SuccessStory";
import SupportSection from "@/components/nurture/SupportSection";

export const metadata: Metadata = {
  title: "Nurture Programs",
  description:
    "Nurture Scholarship and Support—targeting 180 students by 2026 with counselling and career care.",
};

export default function NurturePage() {
  return (
    <>
      <ScholarshipSection />
      <SupportSection />
      <SuccessStory />
    </>
  );
}
