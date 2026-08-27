import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const WaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.966 1.164-.198.199-.396.223-.693.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.019-.458.13-.606.13-.13.298-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.371-.05-.52-.099-.148-.669-1.612-.916-2.207-.242-.579-.487-.487-.669-.497-.173-.008-.371-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.55 0-3.07-.42-4.4-1.2l-.32-.19-3.11.82.83-3.04-.2-.33a8.2 8.2 0 01-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24 4.55 0 8.25 3.7 8.25 8.24 0 4.55-3.7 8.25-8.25 8.25z" />
  </svg>
);

type Props = {
  href: string;
  children?: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "cream" | "ink";
  size?: "sm" | "md" | "lg";
};

/**
 * Primary call to action. The sheen sweep is a pseudo-element on the anchor, so
 * it costs nothing but a transform and is suppressed under reduced motion by the
 * global rule in styles.css.
 */
export function WaButton({
  href,
  children = "Order on WhatsApp",
  className,
  variant = "solid",
  size = "md",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/wa relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-medium",
        "transition-[translate,box-shadow,background-color,border-color] duration-300",
        "[transition-timing-function:var(--ease-out-soft)] hover:-translate-y-0.5",
        size === "sm" && "px-4.5 py-2.5 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "solid" &&
          "bg-primary text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.10)] hover:shadow-[0_10px_28px_-10px_var(--color-primary)]",
        variant === "ink" &&
          "bg-ink text-background shadow-[0_1px_2px_rgba(0,0,0,0.14)] hover:shadow-[0_10px_28px_-10px_var(--color-ink)]",
        variant === "outline" &&
          "border border-primary/35 bg-transparent text-primary hover:border-primary/70 hover:bg-primary/5",
        variant === "cream" && "bg-card text-primary shadow-sm hover:shadow-md",
        className,
      )}
    >
      {/* sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/22 to-transparent transition-transform duration-700 [transition-timing-function:var(--ease-out-soft)] group-hover/wa:translate-x-full"
      />
      <WaIcon className="relative size-4 shrink-0 transition-transform duration-300 group-hover/wa:scale-110" />
      <span className="relative">{children}</span>
    </a>
  );
}

export { WaIcon };
