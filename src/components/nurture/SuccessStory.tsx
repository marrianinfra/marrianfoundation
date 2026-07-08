"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import RevealImage from "@/components/animations/RevealImage";
import SplitRevealText from "@/components/animations/SplitRevealText";
import TypewriterText from "@/components/animations/TypewriterText";
import { nurture } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function SuccessStory() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      gsap.fromTo(
        el.querySelector("[data-story-content]"),
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "marrianOut",
          scrollTrigger: { trigger: el, start: "top 75%" },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:pr-6">
          <RevealImage
            label={nurture.successStory.mediaLabel}
            aspect="portrait"
            className="max-w-md"
            direction="up"
          />
        </div>
        <div data-story-content>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">
            Success Story
          </p>
          <SplitRevealText
            text={nurture.successStory.title}
            as="h2"
            className="mt-3 font-display text-fluid-2xl font-bold text-navy text-balance"
          />
          <TypewriterText
            text={nurture.successStory.body}
            className="mt-6 text-fluid-base leading-relaxed text-muted"
            speed={0.015}
            triggerOnScroll
          />
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
            <span className="h-px w-8 bg-gold" />
            {nurture.successStory.attribution}
          </p>
        </div>
      </div>
    </section>
  );
}
