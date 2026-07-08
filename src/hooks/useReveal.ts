"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";

type RevealOptions = {
  y?: number;
  stagger?: number;
  start?: string;
};

export function useReveal<T extends HTMLElement>(
  selector = "[data-reveal]",
  options: RevealOptions = {},
) {
  const scope = useRef<T>(null);
  const { y = 40, stagger = 0.1, start = "top 82%" } = options;

  useGSAP(
    () => {
      registerGsap();
      const el = scope.current;
      if (!el) return;

      const targets = el.querySelectorAll(selector);
      if (!targets.length) return;

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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
