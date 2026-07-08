import type { Metadata } from "next";
import ApproachSection from "@/components/about/ApproachSection";
import TeamSection from "@/components/about/TeamSection";
import TimelineSection from "@/components/about/TimelineSection";
import VisionMissionSection from "@/components/about/VisionMissionSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our story from St. Joseph’s and the ₹500 note to Dreams Alive—vision, mission, approach, and team.",
};

export default function AboutPage() {
  return (
    <>
      <TimelineSection />
      <VisionMissionSection />
      <ApproachSection />
      <TeamSection />
    </>
  );
}
