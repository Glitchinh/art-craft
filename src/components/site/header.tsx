import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Gift } from "lucide-react";
import { site } from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { WaButton } from "./wa-button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-primary px-4 py-2 text-center text-xs tracking-wide text-primary-foreground">
        Handmade to order · Message us on WhatsApp to start your custom piece
      </div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-blush text-blush-foreground">
              <Gift className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-script text-2xl text-primary">{site.name}</span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Custom handmade art
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-foreground/80 transition-colors hover:text-accent"
                activeProps={{ className: "text-accent font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <WaButton href={waGeneral()} size="sm" className="hidden sm:inline-flex">
              Order now
            </WaButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav className="border-t border-border bg-card px-4 py-3 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 hover:bg-muted"
                activeProps={{ className: "text-accent font-medium" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 pt-3">
              <WaButton href={waGeneral()} size="sm" className="w-full" />
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}
