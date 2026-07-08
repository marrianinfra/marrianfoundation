"use client";

import { useReveal } from "@/hooks/useReveal";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { nurture } from "@/lib/content";

export default function SupportSection() {
  const root = useReveal<HTMLElement>("[data-reveal]", { stagger: 0.08 });

  return (
    <section ref={root} className="bg-surface-muted section-padding">
      <div className="container-site">
        <SectionHeading
          eyebrow="Nurture Support"
          title={nurture.support.title}
          description={nurture.support.intro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {nurture.support.features.map((feature) => (
            <article
              key={feature.title}
              data-reveal
              className="rounded-2xl border border-neutral-200/70 bg-surface p-6 transition-colors hover:border-orange/30"
            >
              <h3 className="font-display text-xl text-navy">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-10">
          <ButtonLink href={nurture.support.cta.href} variant="orange">
            {nurture.support.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
