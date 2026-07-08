"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitRevealText from "@/components/animations/SplitRevealText";
import TypewriterText from "@/components/animations/TypewriterText";
import { home } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function EmotionalBanner() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      const cards = el.querySelectorAll("[data-emotion-card]");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "marrianOut",
          scrollTrigger: { trigger: el, start: "top 72%" },
        },
      );
    },
    { scope: root },
  );

  const { emotional } = home;

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-navy section-padding"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-site relative">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          {emotional.eyebrow}
        </p>

        <SplitRevealText
          text={emotional.title}
          as="h2"
          className="mt-4 max-w-3xl font-display text-fluid-2xl font-bold leading-tight text-white text-balance"
        />

        <TypewriterText
          text={emotional.body}
          className="mt-6 max-w-2xl text-fluid-base leading-relaxed text-white/75"
          speed={0.018}
          triggerOnScroll
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {emotional.highlights.map((item) => (
            <article
              key={item.label}
              data-emotion-card
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-orange/40 hover:bg-white/10"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-gold to-orange" />
              <h3 className="font-display text-lg font-semibold text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
