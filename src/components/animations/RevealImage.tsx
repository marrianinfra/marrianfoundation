"use client";

import { useImageReveal } from "@/hooks/useImageReveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type Aspect = "video" | "square" | "portrait" | "wide" | "hero" | "thumb" | "circle";

type RevealImageProps = {
  label: string;
  aspect?: Aspect;
  className?: string;
  rounded?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
};

export default function RevealImage({
  label,
  aspect = "video",
  className = "",
  rounded = "rounded-2xl",
  direction = "left",
  delay = 0,
}: RevealImageProps) {
  const root = useImageReveal<HTMLDivElement>({ direction, delay });

  return (
    <div ref={root} className={`relative overflow-hidden ${rounded} ${className}`}>
      <div
        data-reveal-overlay
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-navy via-navy-light to-orange opacity-90"
      />
      <div data-reveal-target className="relative z-10">
        <ImagePlaceholder label={label} aspect={aspect} rounded={rounded} />
      </div>
    </div>
  );
}
