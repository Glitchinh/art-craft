import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { StitchRule } from "./monogram";

/**
 * Section heading. `eyebrow` is a letterspaced label, `title` the display line.
 * Left-aligned by default — centring everything is what makes a page look
 * generated rather than laid out.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  stitch = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
  stitch?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const centred = align === "center";

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        shown && "reveal-shown",
        centred ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("flex items-center gap-3 text-accent", centred && "justify-center")}>
          <span aria-hidden="true" className="h-px w-7 bg-current opacity-50" />
          <span className="label-caps">{eyebrow}</span>
        </p>
      ) : null}

      <h2 className="mt-5 display-md text-ink">{title}</h2>

      {stitch ? (
        <div className={cn("mt-5", centred && "flex justify-center")}>
          <StitchRule drawn={shown} />
        </div>
      ) : null}

      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground",
            centred ? "mx-auto max-w-xl" : "max-w-xl",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Continuous horizontal ticker. The item list is rendered twice inside the
 * track; the keyframe shifts by exactly -50% so the seam never shows.
 * Hovering pauses it, and reduced-motion turns it into a plain scroller.
 */
export function Marquee({
  items,
  className,
  duration = 46,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  const group = (
    <ul className="flex shrink-0 items-center" aria-hidden="false">
      {items.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className="label-caps px-7 py-3.5">{item}</span>
          <span aria-hidden="true" className="size-1 rounded-full bg-current opacity-45" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("group/mq overflow-hidden", className)}>
      <div
        className="marquee-track group-hover/mq:marquee-paused"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {group}
        {/* Duplicate for the seamless wrap. Hidden from AT to avoid double reads. */}
        <div aria-hidden="true" className="flex shrink-0 items-center">
          {items.map((item, i) => (
            <div key={i} className="flex items-center whitespace-nowrap">
              <span className="label-caps px-7 py-3.5">{item}</span>
              <span className="size-1 rounded-full bg-current opacity-45" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
