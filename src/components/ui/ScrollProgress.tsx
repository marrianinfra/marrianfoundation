"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (!bar.current) return;

      gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.25,
          },
        },
      );
    },
    { scope: bar },
  );

  return (
    <div
      ref={bar}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold via-orange to-gold-dark"
      aria-hidden
    />
  );
}
