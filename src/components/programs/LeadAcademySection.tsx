"use client";

import { useReveal } from "@/hooks/useReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { programs } from "@/lib/content";

export default function LeadAcademySection() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} className="section-padding pt-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div data-reveal>
            <SectionHeading
              eyebrow={programs.leadAcademy.eyebrow}
              title={programs.leadAcademy.title}
            />
          </div>
          <div className="mt-6 space-y-4">
            {programs.leadAcademy.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                data-reveal
                className="text-fluid-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div data-reveal className="mt-8 grid gap-4 sm:grid-cols-3">
            {programs.leadAcademy.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-gold/25 bg-surface p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange">
                  {metric.label}
                </p>
                <p
                  className={`mt-2 font-display font-bold ${
                    metric.label === "3rd batch begins"
                      ? "text-gradient-gold text-lg"
                      : "text-lg text-navy"
                  }`}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal>
          <ImagePlaceholder label={programs.leadAcademy.mediaLabel} aspect="video" />
        </div>
      </div>
    </section>
  );
}
