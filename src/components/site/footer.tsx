import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone, Gift } from "lucide-react";
import { site, occasions, services } from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { WaButton, WaIcon } from "./wa-button";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-blush text-blush-foreground">
              <Gift className="size-4" />
            </span>
            <span className="font-script text-2xl text-primary">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Handmade fabric painting, canvas art, embroidery and custom gifting — made one piece at a
            time, for the people who matter most.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:text-accent"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:text-accent"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={waGeneral()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:text-accent"
            >
              <WaIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            What we make
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="transition-colors hover:text-accent">
                  {s.title.replace("Customised ", "")}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            For {occasions.slice(0, 4).join(", ").toLowerCase()} and more.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              {site.whatsappDisplay}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              {site.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              {site.location}
            </li>
          </ul>
          <div className="mt-5">
            <WaButton href={waGeneral()} size="sm">
              Start an order
            </WaButton>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Handmade with love. No online payments — every
        order is confirmed personally over WhatsApp.
      </div>
    </footer>
  );
}
