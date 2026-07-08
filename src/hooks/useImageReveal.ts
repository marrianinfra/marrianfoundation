"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";

type ImageRevealOptions = {
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  start?: string;
};

const clipFrom: Record<string, string> = {
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
  up: "inset(100% 0 0 0)",
  down: "inset(0 0 100% 0)",
};

const overlayTo: Record<string, number> = {
  left: 100,
  right: -100,
  up: 100,
  down: -100,
};

export function useImageReveal<T extends HTMLElement>(
  options: ImageRevealOptions = {},
) {
  const scope = useRef<T>(null);
  const {
    direction = "left",
    delay = 0,
    duration = 1.2,
    start = "top 80%",
  } = options;

  useGSAP(
    () => {
      registerGsap();
      const el = scope.current;
      if (!el) return;

      const target = el.querySelector<HTMLElement>("[data-reveal-target]");
      const overlay = el.querySelector<HTMLElement>("[data-reveal-overlay]");
      if (!target) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none reverse",
        },
        delay,
      });

      tl.fromTo(
        target,
        { clipPath: clipFrom[direction], scale: 1.06 },
        { clipPath: "inset(0 0 0 0)", scale: 1, duration, ease: "marrianOut" },
      );

      if (overlay) {
        tl.fromTo(
          overlay,
          { xPercent: 0 },
          { xPercent: overlayTo[direction], duration: duration * 0.85, ease: "power3.inOut" },
          0,
        );
      }
    },
    { scope },
  );

  return scope;
}
