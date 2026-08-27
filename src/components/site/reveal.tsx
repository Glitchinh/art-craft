import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  /** Distance travelled, default 18px. */
  shift?: number;
  as?: ElementType;
  style?: CSSProperties;
};

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  shift,
  as: Tag = "div",
  style,
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", shown && "reveal-shown", className)}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}ms`,
          ...(shift ? { "--reveal-shift": `${shift}px` } : {}),
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

/**
 * Reveals each direct child in sequence. Children are wrapped, so pass plain
 * elements rather than fragments.
 */
export function RevealGroup({
  children,
  className,
  step = 90,
  childClassName,
}: {
  children: ReactNode[];
  className?: string;
  step?: number;
  childClassName?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={cn("reveal", shown && "reveal-shown", childClassName)}
          style={{ "--reveal-delay": `${i * step}ms` } as CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/**
 * Wipes each line of a heading up from behind its own baseline.
 * Pass the lines separately so each gets its own mask:
 *   <MaskedLines as="h1" lines={["Made by hand,", "kept for years"]} />
 */
export function MaskedLines({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
  step = 110,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  step?: number;
}) {
  const { ref, shown } = useReveal<HTMLHeadingElement>({ threshold: 0.25 });

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <span
            className={cn("line-mask-inner", shown && "line-mask-shown", lineClassName)}
            style={{ "--reveal-delay": `${i * step}ms` } as CSSProperties}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
