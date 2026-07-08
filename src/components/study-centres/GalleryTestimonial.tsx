"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import RevealImage from "@/components/animations/RevealImage";
import TypewriterText from "@/components/animations/TypewriterText";
import { studyCentres } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function GalleryTestimonial() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      gsap.fromTo(
        el.querySelector("[data-quote-card]"),
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
    <section ref={root} className="section-padding">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 sm:grid-cols-3">
          {studyCentres.galleryTestimonial.mediaLabels.map((label, i) => (
            <RevealImage
              key={label}
              label={label}
              aspect="square"
              direction={i === 0 ? "up" : i === 1 ? "left" : "right"}
              delay={i * 0.08}
            />
          ))}
        </div>

        <blockquote
          data-quote-card
          className="rounded-3xl border border-navy/10 bg-navy p-8 text-white shadow-xl shadow-navy/20"
        >
          <TypewriterText
            text={`"${studyCentres.galleryTestimonial.quote}"`}
            as="p"
            className="font-display text-fluid-lg leading-relaxed"
            speed={0.018}
            triggerOnScroll
          />
          <div className="mt-8 flex items-center gap-4">
            <div className="w-14">
              <RevealImage
                label={studyCentres.galleryTestimonial.coordinator.mediaLabel}
                aspect="circle"
                direction="up"
              />
            </div>
            <div>
              <p className="font-medium">{studyCentres.galleryTestimonial.coordinator.name}</p>
              <p className="text-sm text-white/70">
                {studyCentres.galleryTestimonial.coordinator.role}
              </p>
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
