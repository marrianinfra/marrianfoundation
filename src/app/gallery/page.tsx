import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Filterable gallery of Study Centres, Farm Tours, Lead Academy, and Social Initiatives.",
};

export default function GalleryPage() {
  return <GalleryGrid />;
}
