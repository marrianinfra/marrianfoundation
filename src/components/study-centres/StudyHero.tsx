"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import RevealImage from "@/components/animations/RevealImage";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { studyCentres } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function StudyHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      gsap.fromTo(
        el.querySelectorAll("[data-fade]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "marrianOut",
          scrollTrigger: { trigger: el, start: "top 80%" },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section-padding pt-28">
      <div className="container-site">
        <div data-fade>
          <SectionHeading
            eyebrow={studyCentres.hero.eyebrow}
            title={studyCentres.hero.title}
            description={studyCentres.hero.body}
          />
        </div>

        <div data-fade className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {studyCentres.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gold/25 bg-surface-muted px-5 py-4"
            >
              <p className="font-display text-2xl font-bold text-gradient-gold">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div data-fade className="mt-10">
          <RevealImage label={studyCentres.hero.mediaLabel} aspect="wide" direction="left" />
        </div>

        <div data-fade className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-navy/10 bg-navy/5 px-4 py-2 text-sm font-medium text-navy">
            Region: Palakkad, Kerala
          </span>
          <span className="rounded-full border border-orange/20 bg-orange/5 px-4 py-2 text-sm font-medium text-orange">
            13 centres · 11 villages · 224 students
          </span>
          <ButtonLink href={studyCentres.cta.href} variant="orange">
            {studyCentres.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
