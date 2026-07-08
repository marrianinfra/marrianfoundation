"use client";

import { useReveal } from "@/hooks/useReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/lib/content";

export default function LocationSection() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} className="section-padding">
      <div className="container-site">
        <SectionHeading eyebrow="Location" title={contact.location.title} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal className="space-y-6">
            <ul className="space-y-4 rounded-3xl border border-neutral-200/80 bg-surface p-6">
              {contact.location.details.map((detail) => (
                <li key={detail.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-navy">{detail.value}</p>
                </li>
              ))}
            </ul>
            <ImagePlaceholder label={contact.location.mediaLabel} aspect="video" />
          </div>

          <div
            data-reveal
            className="flex min-h-[22rem] flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-200/80 bg-neutral-200/40 p-8 text-center grid-placeholder"
          >
            <p className="max-w-sm text-sm text-muted">{contact.location.mapLabel}</p>
            <div className="mt-4 h-px w-24 bg-gold/30" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-navy">
              Google Maps Embed Frame
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
