import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock } from "lucide-react";
import { services, occasions } from "@/config/site";
import { waGeneral, waService } from "@/lib/whatsapp";
import { WaButton } from "@/components/site/wa-button";
import { SectionHeading } from "@/components/site/leaf-divider";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Custom Services — Stroke & Stitch" },
      {
        name: "description",
        content:
          "Customised canvas paintings, lippan art, wedding wall frames, crochet, tote bags, wall hangings, greeting cards and custom gifts — with turnaround times and what's included.",
      },
      { property: "og:title", content: "Our Custom Services — Stroke & Stitch" },
      {
        property: "og:description",
        content:
          "Handmade services: customised canvas paintings, lippan art, wedding wall frames, crochet, tote bags, wall hangings, greeting cards and customised gifts.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <section className="bg-blush/40 px-4 py-14 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          What we offer
        </p>
        <h1 className="mt-4 text-4xl text-foreground sm:text-5xl">Our Custom Services</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Everything is made to order. Pick a service, message us on WhatsApp with your idea, and we
          share a design mock-up and price before any work begins.
        </p>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:space-y-16 sm:px-6 sm:py-16 lg:space-y-24 lg:py-20">
        {services.map((s, i) => (
          <article
            key={s.slug}
            id={s.slug}
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
              i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
            }`}
          >
            <figure>
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1200}
                height={900}
                className="w-full rounded-3xl object-cover shadow-lg"
              />
            </figure>
            <div>
              <p className="font-script text-2xl text-accent sm:text-3xl">0{i + 1}</p>
              <h2 className="mt-2 text-2xl text-foreground sm:text-3xl lg:text-4xl">{s.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-6 space-y-2.5">
                {s.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {inc}
                  </li>
                ))}
              </ul>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                <Clock className="size-3.5 text-accent" /> Typical turnaround {s.turnaround}
              </p>
              <div className="mt-6">
                <WaButton href={waService(s.title)}>Enquire on WhatsApp</WaButton>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Also available"
            title="Bulk & Occasion Orders"
            subtitle="Wedding favours, corporate hampers and festival gifting in larger quantities, with pricing that scales down per piece."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {occasions.map((o) => (
              <span
                key={o}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm text-foreground/80"
              >
                {o}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <WaButton href={waGeneral()} size="lg">
              Discuss a bulk order
            </WaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
