"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  triggerOnScroll?: boolean;
  showCursor?: boolean;
  as?: "p" | "span" | "h2" | "h3";
};

export default function TypewriterText({
  text,
  className = "",
  speed = 0.032,
  delay = 0,
  triggerOnScroll = true,
  showCursor = true,
  as: Tag = "p",
}: TypewriterTextProps) {
  const root = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = textRef.current;
      const rootEl = root.current;
      if (!el || !rootEl) return;

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
                trigger: rootEl,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          : {}),
      });

      tl.to({}, { duration: chars.length * speed, onUpdate: type });

      const cursor = rootEl.querySelector("[data-type-cursor]");
      if (cursor) {
        tl.to(cursor, { opacity: 0, duration: 0.25 }, "-=0.05");
      }
    },
    { scope: root, dependencies: [text] },
  );

  return (
    <Tag ref={root as never} className={className}>
      <span ref={textRef} />
      {showCursor && (
        <span
          data-type-cursor
          className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-orange align-middle"
          aria-hidden
        />
      )}
    </Tag>
  );
}
