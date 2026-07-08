"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";

type SplitRevealOptions = {
  stagger?: number;
  y?: number;
  start?: string;
};

export function useSplitReveal<T extends HTMLElement>(
  options: SplitRevealOptions = {},
) {
  const scope = useRef<T>(null);
  const { stagger = 0.04, y = 28, start = "top 82%" } = options;

  useGSAP(
    () => {
      registerGsap();
      const el = scope.current;
      if (!el) return;

      const words = el.querySelectorAll("[data-split-word]");
      if (!words.length) return;

      gsap.fromTo(
        words,
        { opacity: 0, y, rotateX: -12 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.75,
          stagger,
          ease: "marrianOut",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope },
  );

  return scope;
}
