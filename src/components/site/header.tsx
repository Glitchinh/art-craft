import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { useScrolled } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { WaButton } from "./wa-button";
import { Monogram } from "./monogram";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Work" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);

  // Lock the page behind the mobile sheet.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape closes the sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-500",
          "[transition-timing-function:var(--ease-out-soft)]",
          scrolled
            ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[86rem] items-center justify-between gap-3 px-4 transition-all duration-500 sm:gap-6 sm:px-8",
            "[transition-timing-function:var(--ease-out-soft)]",
            scrolled ? "py-3" : "py-4 sm:py-5",
          )}
        >
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label={`${site.name} — home`}>
            <Monogram
              className={cn(
                "shrink-0 text-primary transition-all duration-500",
                scrolled ? "size-8 sm:size-9" : "size-9 sm:size-11",
              )}
            />
            <span className="min-w-0 leading-none">
              <span
                className={cn(
                  "block truncate font-display tracking-[-0.02em] text-ink transition-all duration-500",
                  scrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl",
                )}
                style={{ fontVariationSettings: '"opsz" 24, "SOFT" 30, "WONK" 1' }}
              >
                {site.name}
              </span>
              <span className="mt-1 hidden text-2xs font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:block">
                Handmade studio
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-draw py-1 text-sm text-foreground/75 transition-colors hover:text-accent"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <WaButton href={waGeneral()} size="sm" className="hidden sm:inline-flex">
              Start an order
            </WaButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent sm:size-11 lg:hidden"
            >
              {open ? <X className="size-4 sm:size-5" /> : <Menu className="size-4 sm:size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fade-in absolute inset-0 h-full w-full cursor-default bg-ink/45 backdrop-blur-sm"
          />
          <nav className="pop-in absolute inset-x-3 top-3 max-h-[calc(100vh-1.5rem)] origin-top overflow-y-auto rounded-3xl border border-border bg-card p-3 shadow-2xl">
            <div className="flex items-center justify-between px-3 pb-2 pt-1">
              <span className="label-caps text-muted-foreground">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="reveal reveal-shown flex items-baseline justify-between rounded-2xl px-3 py-3.5 font-display text-2xl text-ink transition-colors hover:bg-muted"
                style={{ "--reveal-delay": `${60 + i * 45}ms` } as React.CSSProperties}
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                <span className="label-caps text-muted-foreground">0{i + 1}</span>
              </Link>
            ))}
            <div className="px-3 pb-2 pt-3">
              <WaButton href={waGeneral()} className="w-full justify-center">
                Start an order
              </WaButton>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
