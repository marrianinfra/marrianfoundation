"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { studyCentres } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function DayAtCentre() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const items = root.current?.querySelectorAll("[data-day-item]");
      if (!items?.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.88 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "marrianOut",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site">
        <SectionHeading
          eyebrow="Daily Rhythm"
          title={studyCentres.dayAtCentre.title}
          description={studyCentres.dayAtCentre.intro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {studyCentres.dayAtCentre.items.map((item, index) => (
            <article
              key={item.title}
              data-day-item
              className="rounded-2xl border border-neutral-200/70 bg-surface p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 font-display text-lg text-navy">
                {index + 1}
              </div>
              <h3 className="mt-4 font-display text-xl text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
