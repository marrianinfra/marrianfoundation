"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { home } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function ImpactSection() {
  const root = useRef<HTMLElement>(null);
  const values = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      const cards = el.querySelectorAll<HTMLElement>("[data-metric-card]");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.09,
          ease: "marrianOut",
          scrollTrigger: {
            trigger: el,
            start: "top 68%",
            onEnter: () => {
              home.impactMetrics.forEach((metric, index) => {
                const target = values.current[index];
                if (!target) return;
                const obj = { val: 0 };
                gsap.to(obj, {
                  val: metric.value,
                  duration: 1.6,
                  ease: "power2.out",
                  delay: index * 0.06,
                  onUpdate: () => {
                    const prefix = "prefix" in metric && metric.prefix ? metric.prefix : "";
                    target.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${metric.suffix}`;
                  },
                });
              });
            },
          },
        },
      );

      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            boxShadow: "0 24px 48px rgba(212, 175, 55, 0.15)",
            borderColor: "rgba(255, 107, 53, 0.35)",
            duration: 0.35,
            ease: "marrianOut",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 1px 3px rgba(10, 25, 47, 0.06)",
            borderColor: "rgba(226, 232, 240, 0.8)",
            duration: 0.35,
            ease: "marrianOut",
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-surface section-padding">
      <div className="container-site">
        <SectionHeading
          eyebrow="Impact at a Glance"
          title="Numbers that carry names and stories"
          description="A living snapshot of Marrian Foundation's reach across Study Centres, scholarships, leadership training, and Farm Tours."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.impactMetrics.map((metric, index) => (
            <article
              key={metric.label}
              data-metric-card
              className="group cursor-default rounded-2xl border border-neutral-200/80 bg-surface p-6 shadow-sm"
            >
              <span
                ref={(node) => {
                  values.current[index] = node;
                }}
                className="font-display text-fluid-2xl font-bold text-gradient-gold"
              >
                {"prefix" in metric && metric.prefix ? metric.prefix : ""}0{metric.suffix}
              </span>
              <h3 className="mt-2 font-semibold text-navy transition-colors group-hover:text-orange">
                {metric.label}
              </h3>
              <p className="mt-1 text-sm text-muted">{metric.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
