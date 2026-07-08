"use client";

import { useMemo, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionHeading from "@/components/ui/SectionHeading";
import { gallery } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

type Filter = (typeof gallery.filters)[number];

export default function GalleryGrid() {
  const root = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("All");

  const items = useMemo(() => {
    if (filter === "All") return gallery.items;
    return gallery.items.filter((item) => item.category === filter);
  }, [filter]);

  useGSAP(
    () => {
      registerGsap();
      const cards = gridRef.current?.querySelectorAll("[data-gallery-item]");
      if (!cards?.length) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 24, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "marrianOut",
        },
      );
    },
    { dependencies: [filter], scope: root },
  );

  function handleFilter(next: Filter) {
    const cards = gridRef.current?.querySelectorAll("[data-gallery-item]");
    if (!cards?.length) {
      setFilter(next);
      return;
    }

    gsap.to(cards, {
      opacity: 0,
      y: -12,
      duration: 0.25,
      stagger: 0.02,
      ease: "power2.in",
      onComplete: () => setFilter(next),
    });
  }

  return (
    <section ref={root} className="section-padding pt-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Gallery"
          title={gallery.title}
          description={gallery.intro}
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {gallery.filters.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleFilter(item)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active
                    ? "bg-orange text-white shadow-md shadow-orange/20"
                    : "border border-neutral-200/80 text-muted hover:border-orange/40 hover:text-navy"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div
          ref={gridRef}
          className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {items.map((item, index) => (
            <div
              key={`${item.id}-${filter}`}
              data-gallery-item
              className={`mb-4 break-inside-avoid ${
                index % 5 === 0 ? "[&>div]:aspect-[4/5]" : index % 3 === 0 ? "[&>div]:aspect-square" : ""
              }`}
            >
              <ImagePlaceholder
                label={item.label}
                aspect={index % 5 === 0 ? "portrait" : index % 3 === 0 ? "square" : "video"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
