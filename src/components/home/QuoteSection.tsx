"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import TypewriterText from "@/components/animations/TypewriterText";
import ButtonLink from "@/components/ui/ButtonLink";
import { home } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function QuoteSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      gsap.fromTo(
        el.querySelector("[data-quote-block]"),
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "marrianOut",
          scrollTrigger: { trigger: el, start: "top 78%" },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section-padding">
      <div className="container-site">
        <div
          data-quote-block
          className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-surface px-8 py-16 text-center sm:px-12 md:py-20"
        >
          <div className="pointer-events-none absolute -left-6 top-6 font-display text-[8rem] leading-none text-gold/15">
            &ldquo;
          </div>
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-orange to-gold-dark" />

          <TypewriterText
            text={home.quote.text}
            as="p"
            className="relative mx-auto max-w-3xl font-display text-fluid-xl font-semibold leading-relaxed text-navy text-balance"
            speed={0.02}
            triggerOnScroll
          />

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            — {home.quote.attribution}
          </p>
          <div className="mt-10">
            <ButtonLink href={home.quote.cta.href} variant="orange">
              {home.quote.cta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
