"use client";

import { useSplitReveal } from "@/hooks/useSplitReveal";

type SplitRevealTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  immediate?: boolean;
};

export default function SplitRevealText({
  text,
  className = "",
  as: Tag = "h2",
  immediate = false,
}: SplitRevealTextProps) {
  const root = useSplitReveal<HTMLElement>({ start: immediate ? "top 100%" : "top 82%" });

  return (
    <Tag ref={root as never} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="reveal-line mr-[0.28em] inline-block">
          <span data-split-word className="inline-block">
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}
