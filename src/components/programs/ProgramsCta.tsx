"use client";

import { useReveal } from "@/hooks/useReveal";
import ButtonLink from "@/components/ui/ButtonLink";
import { programs } from "@/lib/content";

export default function ProgramsCta() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} className="section-padding">
      <div
        data-reveal
        className="container-site rounded-[2rem] bg-navy px-8 py-14 text-center text-white sm:px-12"
      >
        <h2 className="font-display text-fluid-2xl text-balance">{programs.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{programs.cta.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {programs.cta.buttons.map((button, index) => (
            <ButtonLink
              key={button.label}
              href={button.href}
              variant={index === 0 ? "orange" : index % 2 === 0 ? "orange" : "secondary"}
            >
              {button.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
