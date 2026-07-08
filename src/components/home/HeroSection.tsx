"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import TypewriterText from "@/components/animations/TypewriterText";
import ButtonLink from "@/components/ui/ButtonLink";
import { home } from "@/lib/content";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const counters = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      const lines = el.querySelectorAll("[data-hero-line]");
      const fade = el.querySelectorAll("[data-hero-fade]");
      const heroImage = el.querySelector("[data-hero-image]");

      const runIntro = () => {
        const tl = gsap.timeline({ defaults: { ease: "marrianOut" } });

        if (heroImage) {
          tl.fromTo(
            heroImage,
            { clipPath: "inset(0 0 100% 0)", scale: 1.06 },
            { clipPath: "inset(0 0 0 0)", scale: 1, duration: 1.4 },
          );
          const overlay = heroImage.querySelector("[data-hero-overlay]");
          if (overlay) {
            tl.fromTo(
              overlay,
              { yPercent: 0 },
              { yPercent: -100, duration: 1.1, ease: "power3.inOut" },
              0,
            );
          }
        }

        tl.fromTo(
          lines,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, stagger: 0.1 },
          heroImage ? "-=0.9" : 0,
        ).fromTo(
          fade,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
          "-=0.5",
        );

        home.hero.metrics.forEach((metric, index) => {
          const target = counters.current[index];
          if (!target) return;
          const obj = { val: 0 };
          tl.to(
            obj,
            {
              val: metric.value,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                target.textContent = `${Math.round(obj.val).toLocaleString()}${metric.suffix}`;
              },
            },
            "-=1",
          );
        });
      };

      if (sessionStorage.getItem("mf-preloader-seen") === "1") {
        runIntro();
        return;
      }

      const onReady = () => runIntro();
      window.addEventListener("mf-preloader-done", onReady, { once: true });
      return () => window.removeEventListener("mf-preloader-done", onReady);
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative min-h-screen overflow-hidden bg-surface pt-20">
      <div className="absolute inset-0">
        <div data-hero-image className="relative h-full min-h-screen overflow-hidden">
          <div
            data-hero-overlay
            className="absolute inset-0 z-20 bg-gradient-to-b from-navy via-navy-light/90 to-orange/80"
          />
          <div className="relative z-10 h-full">
            <ImagePlaceholder
              label={home.hero.mediaLabel}
              aspect="hero"
              className="h-full min-h-screen rounded-none border-0"
              rounded="rounded-none"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/92 to-surface/55" />
        <div className="csr-pattern pointer-events-none absolute inset-0 opacity-40" />
      </div>

      <div className="container-site relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center section-padding">
        <p
          data-hero-fade
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-orange/20 bg-orange/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-orange opacity-0"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange" />
          {home.hero.eyebrow}
        </p>

        <h1 className="max-w-4xl font-display text-fluid-4xl font-bold leading-[1.05] text-navy text-balance">
          {home.hero.title.split(" ").map((word, i) => (
            <span key={`${word}-${i}`} className="reveal-line mr-[0.25em] inline-block">
              <span data-hero-line className="inline-block">
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div data-hero-fade className="mt-6 max-w-xl opacity-0">
          <TypewriterText
            text={home.hero.subtitle}
            className="text-fluid-lg leading-relaxed text-muted"
            speed={0.022}
            triggerOnScroll={false}
            delay={1.4}
          />
        </div>

        <div data-hero-fade className="mt-8 flex flex-wrap gap-3 opacity-0">
          <ButtonLink href={home.hero.ctaPrimary.href} variant="orange">
            {home.hero.ctaPrimary.label}
          </ButtonLink>
          <ButtonLink href={home.hero.ctaSecondary.href} variant="outline">
            {home.hero.ctaSecondary.label}
          </ButtonLink>
        </div>

        <div
          data-hero-fade
          className="mt-14 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-gold/20 bg-surface/80 p-6 opacity-0 shadow-lg shadow-navy/5 backdrop-blur-sm"
        >
          {home.hero.metrics.map((metric, index) => (
            <div key={metric.label} className="text-center sm:text-left">
              <span
                ref={(node) => {
                  counters.current[index] = node;
                }}
                className="font-display text-fluid-2xl font-bold text-gradient-gold"
              >
                0{metric.suffix}
              </span>
              <p className="mt-1 text-xs text-muted sm:text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
