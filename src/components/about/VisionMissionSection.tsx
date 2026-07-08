"use client";

import { useReveal } from "@/hooks/useReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/lib/content";

export default function VisionMissionSection() {
  const root = useReveal<HTMLElement>("[data-reveal]", { stagger: 0.15 });
  const { vision, mission } = about.visionMission;

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site">
        <SectionHeading
          eyebrow="Vision & Mission"
          title="To extend a helping hand with love, humaneness, and structured action"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div
            data-reveal
            className="rounded-3xl border border-neutral-200/70 bg-surface p-8"
          >
            <h3 className="font-display text-2xl font-bold text-navy">{vision.title}</h3>
            <div className="mt-6 space-y-4">
              {vision.items.map((item) => (
                <p key={item.slice(0, 32)} className="leading-relaxed text-muted">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div
            data-reveal
            className="rounded-3xl border border-neutral-200/70 bg-surface p-8"
          >
            <h3 className="font-display text-2xl font-bold text-navy">{mission.title}</h3>
            <p className="mt-3 text-sm text-muted">
              To extend a helping hand with love, humaneness, and structured action by:
            </p>
            <ul className="mt-6 space-y-4">
              {mission.items.map((item) => (
                <li key={item.slice(0, 32)} className="flex gap-3 text-muted">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-l-2 border-gold/50 pl-4 text-sm font-medium leading-relaxed text-navy/90">
              {mission.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
