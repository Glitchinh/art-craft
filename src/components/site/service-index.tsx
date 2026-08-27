import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/site";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

/**
 * Editorial index of services. Hovering (or focusing) a row cross-fades the
 * preview panel beside it. All five images are mounted and toggled with opacity
 * so the swap never flashes an unloaded image.
 *
 * Below `lg` the preview panel is hidden and each row shows its own thumbnail,
 * because a hover affordance is meaningless on touch.
 */
export function ServiceIndex() {
  const [active, setActive] = useState(0);
  const { ref, shown } = useReveal<HTMLDivElement>({ threshold: 0.12 });

  // `services` is a non-empty literal, but the index signature is still
  // optional under noUncheckedIndexedAccess — fall back to the first entry.
  const current = services[active] ?? services[0]!;

  return (
    <div ref={ref} className="grid gap-12 lg:grid-cols-[1fr_26rem] lg:items-start lg:gap-16">
      <ol className="border-t border-border">
        {services.map((s, i) => (
          <li
            key={s.slug}
            className={cn("reveal border-b border-border", shown && "reveal-shown")}
            style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
          >
            <Link
              to="/services"
              hash={s.slug}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 sm:gap-7 sm:py-7"
            >
              <span
                className={cn(
                  "label-caps nums-tabular pt-1 transition-colors duration-300",
                  active === i ? "text-accent" : "text-muted-foreground",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span
                  className={cn(
                    "block font-display text-xl leading-tight transition-[color,translate] duration-400",
                    "[transition-timing-function:var(--ease-out-soft)] sm:text-2xl",
                    "group-hover:translate-x-1",
                    active === i ? "text-accent" : "text-ink",
                  )}
                  style={{ fontVariationSettings: '"opsz" 32, "SOFT" 24, "WONK" 0' }}
                >
                  {s.index}
                </span>
                <span className="mt-2 block max-w-md text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </span>

                {/* Touch/narrow fallback for the hover preview. */}
                <span className="mt-4 block overflow-hidden rounded-xl lg:hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={640}
                    className="h-36 w-full object-cover sm:h-44"
                  />
                </span>
              </span>

              <span className="flex items-center gap-4 pt-1">
                <span className="hidden text-xs text-muted-foreground nums-tabular sm:block">
                  from {s.from}
                </span>
                <ArrowUpRight
                  className={cn(
                    "size-5 transition-[translate,color] duration-400",
                    "[transition-timing-function:var(--ease-out-soft)]",
                    "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                    active === i ? "text-accent" : "text-muted-foreground",
                  )}
                />
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {/* Preview panel — desktop only */}
      <div className="sticky top-28 hidden lg:block">
        <div className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] bg-muted">
          {services.map((s, i) => (
            <img
              key={s.slug}
              src={s.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={1200}
              height={1500}
              className={cn(
                "absolute inset-0 size-full object-cover transition-[opacity,scale] duration-700",
                "[transition-timing-function:var(--ease-out-soft)]",
                active === i ? "scale-100 opacity-100" : "scale-105 opacity-0",
              )}
            />
          ))}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent p-6 pt-16">
            <p className="font-display text-lg text-background">{current.title}</p>
            <p className="mt-1.5 text-xs text-background/75">
              {current.turnaround} · from {current.from}
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{current.care}</p>
      </div>
    </div>
  );
}
