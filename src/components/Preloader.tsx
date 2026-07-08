"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-config";
import { site } from "@/lib/content";

const PRELOADER_KEY = "mf-preloader-seen";

export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(PRELOADER_KEY) === "1") {
      setSkip(true);
      setDone(true);
      window.dispatchEvent(new Event("mf-preloader-done"));
    }
  }, []);

  useGSAP(
    () => {
      if (skip) return;

      registerGsap();
      const root = rootRef.current;
      if (!root) return;

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const logo = root.querySelector<HTMLElement>("[data-preloader-logo]");
      const tagline = root.querySelector<HTMLElement>("[data-preloader-tagline]");
      const mask = root.querySelector<HTMLElement>("[data-preloader-mask]");
      const words = tagline?.querySelectorAll<HTMLElement>("[data-word]");

      const tl = gsap.timeline({
        defaults: { ease: "marrianOut" },
        onComplete: () => {
          document.body.style.overflow = previousOverflow || "";
          sessionStorage.setItem(PRELOADER_KEY, "1");
          window.dispatchEvent(new Event("mf-preloader-done"));
          setDone(true);
        },
      });

      tl.fromTo(
        logo,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1.1 },
      );

      if (mask && words?.length) {
        tl.fromTo(
          mask,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, transformOrigin: "left center" },
          "-=0.3",
        );
        tl.fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.65, stagger: 0.05 },
          "-=0.55",
        );
      }

      tl.to({}, { duration: 0.4 });
      tl.to(root, {
        yPercent: -100,
        duration: 0.95,
        ease: "power4.inOut",
      });

      return () => {
        document.body.style.overflow = previousOverflow || "";
        tl.kill();
      };
    },
    { scope: rootRef, dependencies: [skip] },
  );

  if (done || skip) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
      aria-hidden={done}
    >
      <div data-preloader-logo className="relative h-28 w-28 sm:h-36 sm:w-36">
        <Image
          src="/logo/logo.svg"
          alt={site.name}
          fill
          priority
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="relative mt-8 overflow-hidden px-6">
        <div
          data-preloader-mask
          className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent"
        />
        <p
          data-preloader-tagline
          className="relative flex flex-wrap justify-center gap-x-2 font-display text-lg sm:text-xl"
        >
          {site.tagline.split(" ").map((word) => (
            <span key={word} className="reveal-line inline-block">
              <span data-word className="inline-block text-gradient-gold">
                {word}
              </span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
