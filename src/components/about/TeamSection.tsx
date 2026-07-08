"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function TeamSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const cards = root.current?.querySelectorAll("[data-team-card]");
      if (!cards?.length) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "marrianOut",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        },
      );

      cards.forEach((card) => {
        const avatar = card.querySelector("[data-avatar]");
        if (!avatar) return;
        card.addEventListener("mouseenter", () => {
          gsap.to(avatar, { scale: 1.08, duration: 0.35, ease: "marrianOut" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(avatar, { scale: 1, duration: 0.35, ease: "marrianOut" });
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site">
        <SectionHeading
          eyebrow="Leadership / Team"
          title="People who keep the promise personal"
          description="Placeholder: Founder/trustee names, photos, and short bios to be added by the Foundation. Annual Report/Souvenir and Press & Media sections will follow."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.team.map((member) => (
            <article
              key={member.name}
              data-team-card
              className="rounded-3xl border border-neutral-200/70 bg-surface p-8 text-center"
            >
              <div data-avatar className="mx-auto w-28">
                <ImagePlaceholder
                  label={`Image Placeholder: [Circular avatar — ${member.name}]`}
                  aspect="circle"
                />
              </div>
              <h3 className="mt-6 font-display text-xl text-navy">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-orange">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
