"use client";

type Aspect = "video" | "square" | "portrait" | "wide" | "hero" | "thumb" | "circle";

const aspectClass: Record<Aspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
  hero: "aspect-[16/10] min-h-[50vh] md:min-h-[70vh]",
  thumb: "aspect-square w-full max-w-[4.5rem]",
  circle: "aspect-square rounded-full",
};

type ImagePlaceholderProps = {
  label: string;
  aspect?: Aspect;
  className?: string;
  rounded?: string;
};

function ImageIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

export default function ImagePlaceholder({
  label,
  aspect = "video",
  className = "",
  rounded = "rounded-2xl",
}: ImagePlaceholderProps) {
  const isCircle = aspect === "circle";

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden border border-neutral-200/60 bg-neutral-100 grid-placeholder ${aspectClass[aspect]} ${isCircle ? "rounded-full" : rounded} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-surface-muted to-navy/[0.03]" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
        <div
          className={`flex items-center justify-center border border-neutral-200/80 bg-surface text-navy shadow-sm ${
            isCircle ? "h-10 w-10 rounded-full" : "h-12 w-12 rounded-xl"
          }`}
        >
          <ImageIcon className={isCircle ? "h-5 w-5" : "h-6 w-6"} />
        </div>
        {!isCircle && (
          <p className="max-w-[18rem] text-[0.7rem] leading-relaxed text-muted sm:text-xs">
            {label}
          </p>
        )}
      </div>
    </div>
  );
}
