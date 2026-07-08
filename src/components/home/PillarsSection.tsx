"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { home } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function PillarsSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      const cards = el.querySelectorAll<HTMLElement>("[data-pillar-card]");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "marrianOut",
          scrollTrigger: { trigger: el, start: "top 75%" },
        },
      );

      cards.forEach((card) => {
        const onEnter = () => {
          gsap.to(card, {
            y: -8,
            boxShadow: "0 20px 40px rgba(255, 107, 53, 0.12)",
            borderColor: "rgba(255, 107, 53, 0.6)",
            duration: 0.35,
            ease: "marrianOut",
          });
        };
        const onLeave = () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 1px 3px rgba(10, 25, 47, 0.06)",
            borderColor: "rgba(226, 232, 240, 0.8)",
            duration: 0.35,
            ease: "marrianOut",
          });
        };
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Core Areas"
          title="Five pathways of practical love"
          description="Click through to explore Study Centres, Nurture Scholarship & Support, Lead Academy, Farm Tour & Farm Volunteering, and Social Services."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {home.pillars.map((pillar, index) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              data-pillar-card
              className="group flex flex-col rounded-2xl border border-neutral-200/80 bg-surface p-6 shadow-sm"
            >
              <span className="font-display text-3xl font-bold text-gold">0{index + 1}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-navy transition-colors group-hover:text-orange">
                {pillar.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
              <span className="mt-6 text-sm font-semibold text-orange">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
