import type { Metadata } from "next";
import FarmTourSection from "@/components/programs/FarmTourSection";
import LeadAcademySection from "@/components/programs/LeadAcademySection";
import ProgramsCta from "@/components/programs/ProgramsCta";

export const metadata: Metadata = {
  title: "Lead Academy & Farm Tours",
  description:
    "Lead Academy 3rd batch begins 4 July 2026. Farm tours targeting 24 groups and 600+ beneficiaries.",
};

export default function ProgramsPage() {
  return (
    <>
      <LeadAcademySection />
      <FarmTourSection />
      <ProgramsCta />
    </>
  );
}
