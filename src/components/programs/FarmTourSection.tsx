"use client";

import { useReveal } from "@/hooks/useReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { programs } from "@/lib/content";

export default function FarmTourSection() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site">
        <SectionHeading
          eyebrow={programs.farmTours.eyebrow}
          title={programs.farmTours.title}
          description={programs.farmTours.body}
        />

        <div data-reveal className="mt-8 flex flex-wrap gap-4">
          {programs.farmTours.targets.map((target) => (
            <div
              key={target.label}
              className="rounded-2xl border border-gold/30 bg-navy px-6 py-4 text-white"
            >
              <p className="font-display text-3xl font-bold text-gradient-gold">{target.value}</p>
              <p className="text-sm text-white/75">{target.label}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-10 grid gap-4 sm:grid-cols-3">
          {programs.farmTours.mediaLabels.map((label) => (
            <ImagePlaceholder key={label} label={label} aspect="square" />
          ))}
        </div>
      </div>
    </section>
  );
}
