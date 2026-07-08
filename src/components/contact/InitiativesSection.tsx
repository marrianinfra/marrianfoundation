"use client";

import { useReveal } from "@/hooks/useReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import { contact } from "@/lib/content";

export default function InitiativesSection() {
  const root = useReveal<HTMLElement>("[data-reveal]", { stagger: 0.06 });

  return (
    <section ref={root} className="section-padding pt-28">
      <div className="container-site">
        <SectionHeading
          eyebrow={contact.initiatives.eyebrow}
          title={contact.initiatives.title}
          description={contact.initiatives.intro}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contact.initiatives.items.map((item) => (
            <article
              key={item.title}
              data-reveal
              className="flex gap-4 rounded-2xl border border-neutral-200/80 bg-surface p-5 transition-colors hover:border-orange/25"
            >
              <div className="w-16 shrink-0">
                <ImagePlaceholder label={item.mediaLabel} aspect="thumb" rounded="rounded-xl" />
              </div>
              <div>
                <h3 className="font-display text-lg text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-10 flex flex-wrap gap-3">
          {contact.initiatives.ctas.map((cta, index) => (
            <ButtonLink
              key={cta.label}
              href={cta.href}
              variant={index === 0 ? "orange" : "outline"}
            >
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
