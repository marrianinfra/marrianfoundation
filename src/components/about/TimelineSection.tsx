"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import RevealImage from "@/components/animations/RevealImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function TimelineSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      const progress = el.querySelector<HTMLElement>("[data-timeline-progress]");
      const milestones = el.querySelectorAll<HTMLElement>("[data-milestone]");

      if (progress) {
        gsap.fromTo(
          progress,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el.querySelector("[data-timeline-track]"),
              start: "top 55%",
              end: "bottom 35%",
              scrub: 1,
            },
          },
        );
      }

      milestones.forEach((milestone) => {
        gsap.fromTo(
          milestone,
          { opacity: 0.2, filter: "blur(2px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: milestone,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-surface section-padding pt-28">
      <div className="container-site">
        <SectionHeading
          eyebrow={about.timeline.eyebrow}
          title={about.timeline.title}
          description={about.timeline.intro}
        />

        <div data-timeline-track className="relative mt-16 pl-8 md:pl-0">
          <div className="absolute bottom-0 left-[0.7rem] top-0 w-0.5 bg-neutral-200 md:left-1/2 md:-translate-x-1/2">
            <div
              data-timeline-progress
              className="timeline-gradient origin-top h-full w-full"
            />
          </div>

          <div className="space-y-20">
            {about.timeline.milestones.map((milestone, index) => (
              <article
                key={milestone.id}
                data-milestone
                className={`grid items-center gap-8 md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {milestone.year}
                  </p>
                  <h3 className="mt-2 font-display text-fluid-xl font-bold text-navy">
                    {milestone.title}
                  </h3>
                  <p className="mt-4 text-fluid-base leading-relaxed text-muted">
                    {milestone.body}
                  </p>
                </div>
                <div className={`${index % 2 === 1 ? "md:pr-12" : "md:pl-12"}`}>
                  <RevealImage
                    label={milestone.mediaLabel}
                    aspect="video"
                    direction={index % 2 === 0 ? "left" : "right"}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-gold/20 bg-surface-muted px-8 py-10 text-center">
          {about.closingLines.map((line) => (
            <p
              key={line}
              className="font-display text-fluid-lg font-semibold leading-relaxed text-navy"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
