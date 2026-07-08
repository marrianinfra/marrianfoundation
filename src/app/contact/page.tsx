import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";
import InitiativesSection from "@/components/contact/InitiativesSection";
import LocationSection from "@/components/contact/LocationSection";

export const metadata: Metadata = {
  title: "Social Initiatives & Contact",
  description:
    "Nine rapid-response social initiatives and contact details for Marrian Foundation.",
};

export default function ContactPage() {
  return (
    <>
      <InitiativesSection />
      <Suspense fallback={<div className="section-padding" />}>
        <ContactForm />
      </Suspense>
      <LocationSection />
    </>
  );
}
