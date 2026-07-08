"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import RevealImage from "@/components/animations/RevealImage";
import SplitRevealText from "@/components/animations/SplitRevealText";
import SectionHeading from "@/components/ui/SectionHeading";
import { home } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function WhoWeAreSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      gsap.fromTo(
        el.querySelectorAll("[data-text]"),
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.12,
          ease: "marrianOut",
          scrollTrigger: { trigger: el, start: "top 75%" },
        },
      );

      el.querySelectorAll<HTMLElement>("[data-parallax]").forEach((img, i) => {
        gsap.to(img, {
          yPercent: i % 2 === 0 ? -14 : 12,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <div data-text>
            <SectionHeading
              eyebrow={home.whoWeAre.eyebrow}
              title={home.whoWeAre.title}
            />
          </div>
          <div className="mt-6 space-y-4">
            {home.whoWeAre.body.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 24)}
                data-text
                className={`text-fluid-base leading-relaxed text-muted ${
                  i === home.whoWeAre.body.length - 1 ? "border-l-2 border-orange/40 pl-4 font-medium text-navy/90" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div data-parallax className="col-span-2">
            <RevealImage
              label={home.whoWeAre.mediaLabels[0]}
              aspect="video"
              direction="left"
            />
          </div>
          <div data-parallax>
            <RevealImage
              label={home.whoWeAre.mediaLabels[1]}
              aspect="square"
              direction="up"
              delay={0.1}
            />
          </div>
          <div data-parallax className="mt-10">
            <RevealImage
              label={home.whoWeAre.mediaLabels[2]}
              aspect="square"
              direction="right"
              delay={0.15}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
