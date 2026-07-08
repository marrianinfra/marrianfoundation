"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { home } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function StoriesMarquee() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = track.current;
      if (!el) return;

      const width = el.scrollWidth / 2;

      gsap.to(el, {
        x: -width,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      gsap.fromTo(
        root.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: { trigger: root.current, start: "top 90%" },
        },
      );
    },
    { scope: root },
  );

  const stories = [...home.stories, ...home.stories];

  return (
    <section
      ref={root}
      className="overflow-hidden border-y border-neutral-200/80 bg-surface-muted py-14"
    >
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.24em] text-orange">
        Voices from the community
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-muted to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-muted to-transparent" />
        <div ref={track} className="flex w-max gap-6 px-6">
          {stories.map((story, i) => (
            <blockquote
              key={`${story.role}-${i}`}
              className="w-[min(22rem,80vw)] shrink-0 rounded-2xl border border-neutral-200/80 bg-surface p-6 shadow-sm"
            >
              <p className="font-display text-lg leading-relaxed text-navy">
                &ldquo;{story.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-medium text-orange">{story.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
