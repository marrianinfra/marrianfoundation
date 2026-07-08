"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import RevealImage from "@/components/animations/RevealImage";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { nurture } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function ScholarshipSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      const bar = el.querySelector<HTMLElement>("[data-progress-bar]");
      const label = el.querySelector<HTMLElement>("[data-progress-label]");
      const { current, target } = nurture.scholarship.goal;
      const progress = Math.min(current / target, 1);

      gsap.fromTo(
        el.querySelectorAll("[data-reveal]"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "marrianOut",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            onEnter: () => {
              if (bar) {
                gsap.fromTo(
                  bar,
                  { scaleX: 0 },
                  { scaleX: progress, duration: 1.4, ease: "power2.out", transformOrigin: "left center" },
                );
              }
              if (label) {
                const obj = { val: 0 };
                gsap.to(obj, {
                  val: current,
                  duration: 1.4,
                  ease: "power2.out",
                  onUpdate: () => {
                    label.textContent = `${Math.round(obj.val)}+ / ${target}`;
                  },
                });
              }
            },
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="section-padding pt-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div data-reveal>
            <SectionHeading
              eyebrow={nurture.scholarship.eyebrow}
              title={nurture.scholarship.title}
            />
          </div>
          <div className="mt-6 space-y-4">
            {nurture.scholarship.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                data-reveal
                className="text-fluid-base leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div data-reveal className="mt-8 rounded-2xl border border-gold/25 bg-surface-muted p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {nurture.scholarship.goal.yearLabel}
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-navy">
                  {nurture.scholarship.goal.label}
                </p>
              </div>
              <p data-progress-label className="font-display text-xl font-bold text-gradient-gold">
                0+ / {nurture.scholarship.goal.target}
              </p>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-neutral-200">
              <div
                data-progress-bar
                className="h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-gold via-gold-dark to-orange"
              />
            </div>
            <p className="mt-3 text-sm text-muted">
              {nurture.scholarship.goal.progressLabel}: 100+ identified and currently supported.
              Goal: {nurture.scholarship.goal.target} students by the end of 2026.
            </p>
          </div>
        </div>

        <div data-reveal className="space-y-4">
          <RevealImage
            label={nurture.scholarship.mediaLabel}
            aspect="square"
            direction="right"
          />
          <p className="text-sm text-muted">
            Serving students across {nurture.scholarship.regions}.
          </p>
          <ButtonLink href={nurture.scholarship.cta.href} variant="orange">
            {nurture.scholarship.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
