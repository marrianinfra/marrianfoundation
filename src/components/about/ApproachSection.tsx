"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function ApproachSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      const cards = el.querySelectorAll<HTMLElement>("[data-approach-card]");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "marrianOut",
          scrollTrigger: { trigger: el, start: "top 75%" },
        },
      );

      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -6,
            borderColor: "rgba(255, 107, 53, 0.45)",
            boxShadow: "0 16px 32px rgba(10, 25, 47, 0.08)",
            duration: 0.3,
            ease: "marrianOut",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            borderColor: "rgba(226, 232, 240, 0.8)",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.3,
            ease: "marrianOut",
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Approach"
          title="Marrian Foundation's work is guided by four principles"
          description="Close oversight, clear outcomes, hands-on delivery, and support that continues well beyond the first intervention."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.approach.map((item, index) => (
            <article
              key={item.title}
              data-approach-card
              className="rounded-2xl border border-neutral-200/80 bg-surface p-6"
            >
              <span className="font-display text-3xl font-bold text-gold">0{index + 1}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
