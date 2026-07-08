"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";

type TypewriterOptions = {
  speed?: number;
  delay?: number;
  start?: string;
  triggerOnScroll?: boolean;
};

export function useTypewriter<T extends HTMLElement>(
  text: string,
  options: TypewriterOptions = {},
) {
  const scope = useRef<T>(null);
  const {
    speed = 0.035,
    delay = 0,
    start = "top 85%",
    triggerOnScroll = true,
  } = options;

  useGSAP(
    () => {
      registerGsap();
      const el = scope.current;
      if (!el) return;

      const cursor = el.querySelector<HTMLElement>("[data-type-cursor]");
      el.textContent = "";

      const chars = text.split("");
      let index = 0;

      const type = () => {
        if (index < chars.length) {
          el.textContent += chars[index];
          index += 1;
        }
      };

      const tl = gsap.timeline({
        delay,
        ...(triggerOnScroll
          ? {
              scrollTrigger: {
                trigger: el,
                start,
                toggleActions: "play none none none",
              },
            }
          : {}),
      });

      tl.to({}, { duration: chars.length * speed, onUpdate: type });

      if (cursor) {
        tl.to(cursor, { opacity: 0, duration: 0.3 }, "-=0.1");
      }
    },
    { scope, dependencies: [text] },
  );

  return scope;
}
