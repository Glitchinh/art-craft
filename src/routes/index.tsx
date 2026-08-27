import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-painting.jpg";
import studioImg from "@/assets/about-studio.jpg";
import {
  galleryItems,
  occasions,
  process,
  services,
  site,
  studioFacts,
  testimonials,
} from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { WaButton } from "@/components/site/wa-button";
import { SectionHeading, Marquee } from "@/components/site/section";
import { ServiceIndex } from "@/components/site/service-index";
import { Reveal, MaskedLines } from "@/components/site/reveal";
import { StitchRule } from "@/components/site/monogram";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Handmade Fabric Painting, Canvas & Embroidery` },
      {
        name: "description",
        content:
          "A one-person studio in Hyderabad painting and stitching custom pieces to order: fabric painting, canvas portraits, hand embroidery, hoop art and gift hampers. Ordered over WhatsApp.",
      },
      { property: "og:title", content: `${site.name} — Handmade to order` },
      {
        property: "og:description",
        content:
          "Painted, stitched and wrapped one at a time. Fabric painting, canvas portraits, hand embroidery and hoops, made to order in Hyderabad.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <TickerBand />
      <Facts />
      <ServicesSection />
      <FeaturedWork />
      <Process />
      <OccasionBand />
      <Words />
      <Closing />
    </div>
  );
}

/* ------------------------------------------------------------------- Hero --- */

function Hero() {
  return (
    <section className="paper relative">
      <div className="mx-auto grid max-w-[86rem] items-center gap-8 px-5 pb-12 pt-8 sm:px-8 sm:gap-10 sm:pb-16 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-16">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-accent">
              <span aria-hidden="true" className="h-px w-8 bg-current opacity-55" />
              <span className="label-caps">
                {site.city} · est. {site.foundedYear}
              </span>
            </p>
          </Reveal>

          <MaskedLines
            as="h1"
            className="mt-7 text-3xl text-ink sm:text-4xl lg:display-xl"
            lines={[
              "Made by hand,",
              <>
                kept for <span className="font-editorial text-accent">years.</span>
              </>,
            ]}
          />

          <Reveal delay={260}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Fabric painting, canvas portraits, hand embroidery and hoops. One order at a time, one
              pair of hands, no factory anywhere in the process.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <WaButton href={waGeneral()} size="lg">
                Start an order
              </WaButton>
              <Link
                to="/gallery"
                className="link-draw inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                See what we have made
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <p className="mt-9 flex items-center gap-2.5 text-xs text-muted-foreground">
              <ArrowDown className="size-3.5 animate-bounce text-accent" />
              No cart, no card details. Every order is agreed in a chat first.
            </p>
          </Reveal>
        </div>

        {/* Image cluster */}
        <Reveal delay={180} shift={28} className="relative">
          <div className="relative">
            <img
              src={heroImg}
              alt="Hands painting pink cosmos flowers onto a length of cream linen"
              width={1600}
              height={1200}
              className="w-full rounded-[2rem] object-cover shadow-[0_30px_70px_-30px_rgba(60,35,20,0.4)]"
            />

            {/* small overlapping frame */}
            <div className="drift-slow absolute -left-4 -top-8 hidden w-36 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:block lg:-left-10 lg:w-44">
              <img
                src={studioImg}
                alt="The studio table, mid-project"
                width={600}
                height={600}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>

            {/* caption card */}
            <figure className="absolute -bottom-7 left-4 max-w-[16rem] rounded-2xl border border-border/70 bg-card/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:left-7">
              <p className="font-editorial text-xl leading-snug text-accent">
                No two come out the same
              </p>
              <figcaption className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Which is the point, and also why it takes a fortnight.
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Ticker --- */

function TickerBand() {
  const items = [
    "Customised canvas paintings",
    "Lippan art",
    "Wedding wall frames",
    "Crochet",
    "Tote bags",
    "Wall hangings",
    "Greeting cards",
    "Customised gifts",
    "Personal keepsakes",
  ];

  return (
    <div className="border-y border-border bg-ink text-background/85">
      <Marquee items={items} duration={52} />
    </div>
  );
}

/* ------------------------------------------------------------------ Facts --- */

function Facts() {
  const { ref, shown } = useReveal<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8 lg:py-20">
      <div ref={ref} className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {studioFacts.map((f, i) => (
          <div
            key={f.label}
            className={shown ? "reveal reveal-shown" : "reveal"}
            style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
          >
            <p
              className="display-sm nums-tabular text-accent"
              style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 40' }}
            >
              {f.figure}
            </p>
            <div className="rule-fade my-4 max-w-24" />
            <p className="text-sm leading-relaxed text-muted-foreground">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Services --- */

function ServicesSection() {
  return (
    <section className="mx-auto max-w-[86rem] px-5 pb-20 sm:px-8 lg:pb-28">
      <SectionHeading
        eyebrow="What we make"
        title={
          <>
            Handmade keepsakes, done <span className="font-editorial text-accent">properly</span>
          </>
        }
        subtitle="From wall art and gifting pieces to personal keepsakes, most of the best work begins with a custom brief."
        className="mb-14"
      />
      <ServiceIndex />
    </section>
  );
}

/* ------------------------------------------------------------------- Work --- */

function FeaturedWork() {
  const { ref, shown } = useReveal<HTMLDivElement>({ threshold: 0.08 });
  const featured = galleryItems.slice(0, 7);

  // Varied spans so the grid reads as a wall, not a spreadsheet.
  const spanFor = (size?: string) =>
    size === "tall"
      ? "sm:row-span-2 aspect-4/5 sm:aspect-auto"
      : size === "wide"
        ? "sm:col-span-2 aspect-4/3 sm:aspect-16/9"
        : "aspect-square";

  return (
    <section className="border-y border-border bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Recently finished"
            title="Out of the studio"
            subtitle="A few of the last pieces to leave. Everything here was made for one particular person."
          />
          <Reveal delay={120}>
            <Link
              to="/gallery"
              className="link-draw inline-flex items-center gap-2 pb-2 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              All work
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div
          ref={ref}
          className="mt-14 grid auto-rows-auto grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {featured.map((g, i) => (
            <Link
              key={g.id}
              to="/gallery"
              className={`group relative overflow-hidden rounded-2xl ${spanFor(g.size)} ${
                shown ? "reveal reveal-shown" : "reveal"
              }`}
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                width={1000}
                height={1250}
                className="size-full object-cover transition-[scale] duration-700 [transition-timing-function:var(--ease-out-soft)] group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-[translate,opacity] duration-500 [transition-timing-function:var(--ease-out-soft)] group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block font-display text-base leading-tight text-background">
                  {g.title}
                </span>
                {g.note ? (
                  <span className="mt-1 block text-2xs text-background/75">{g.note}</span>
                ) : null}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Process --- */

function Process() {
  const { ref, shown } = useReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="How ordering works"
        title="Four steps, all of them a conversation"
        subtitle="Nothing is charged and nothing is started until you have seen a layout and a price."
        align="center"
        stitch
        className="mb-16"
      />

      <div ref={ref} className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* connecting thread, desktop */}
        <div
          aria-hidden="true"
          className="absolute inset-x-[12%] top-7 hidden h-px bg-[repeating-linear-gradient(to_right,var(--color-border)_0_6px,transparent_6px_12px)] lg:block"
        />

        {process.map((p, i) => (
          <div
            key={p.step}
            className={`relative ${shown ? "reveal reveal-shown" : "reveal"}`}
            style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
          >
            <span className="relative flex size-14 items-center justify-center rounded-full border border-border bg-background font-display text-lg text-accent nums-tabular">
              {p.step}
            </span>
            <h3 className="mt-6 text-lg text-ink">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Occasions --- */

function OccasionBand() {
  const { ref, shown } = useReveal<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="bg-primary py-12 sm:py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-[86rem] px-5 sm:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="flex items-center gap-3 text-primary-foreground/65">
              <span aria-hidden="true" className="h-px w-8 bg-current" />
              <span className="label-caps">Usually for</span>
            </p>
            <h2 className="mt-5 display-md text-primary-foreground">
              The occasions people come back for
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/75">
              Weddings and baby showers are the bulk of it. The rest is one-offs, which are the ones
              worth talking about.
            </p>
          </Reveal>

          <div ref={ref} className="flex flex-wrap gap-3">
            {occasions.map((o, i) => (
              <span
                key={o}
                className={`rounded-full border border-primary-foreground/25 px-5 py-2.5 text-sm transition-[background-color,border-color] duration-300 hover:border-primary-foreground/60 hover:bg-primary-foreground/10 ${
                  shown ? "reveal reveal-shown" : "reveal"
                }`}
                style={{ "--reveal-delay": `${i * 55}ms` } as React.CSSProperties}
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Words --- */

function Words() {
  const lead = testimonials[0];
  const rest = testimonials.slice(1);
  if (!lead) return null;

  return (
    <section className="mx-auto max-w-[86rem] px-5 py-12 sm:py-16 sm:px-8 lg:py-28">
      <SectionHeading eyebrow="From the chat" title="What people said afterwards" className="mb-14" />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <Reveal>
          <figure className="flex h-full flex-col justify-between rounded-[1.75rem] border border-border bg-card p-6 sm:p-9 lg:p-11">
            <div>
              <span aria-hidden="true" className="font-display text-6xl leading-none text-accent/25">
                &ldquo;
              </span>
              <blockquote className="-mt-4 font-display text-lg sm:text-xl leading-[1.45] text-ink lg:text-2xl">
                {lead.quote}
              </blockquote>
            </div>
            <figcaption className="mt-9">
              <div className="rule-fade mb-5 max-w-28" />
              <p className="text-sm font-medium text-ink">{lead.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{lead.detail}</p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-8">
          {rest.map((t, i) => (
            <Reveal key={t.name} delay={140 + i * 120}>
              <figure className="h-full rounded-[1.5rem] border border-border bg-background p-7">
                <blockquote className="text-sm leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-baseline gap-3">
                  <span className="text-sm font-medium text-ink">{t.name}</span>
                  <span className="text-2xs text-muted-foreground">{t.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Closing --- */

function Closing() {
  const { ref, shown } = useReveal<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="mx-auto max-w-[86rem] px-5 pb-16 sm:pb-24 sm:px-8">
      <div ref={ref} className="paper relative overflow-hidden rounded-[2.5rem] border border-border px-5 py-12 text-center sm:px-12 sm:py-20 lg:py-24">
        <div className="flex justify-center">
          <StitchRule drawn={shown} className="max-w-40" />
        </div>

        <MaskedLines
          as="h2"
          className="mx-auto mt-8 max-w-3xl display-lg text-ink"
          lines={[
            "Tell us the occasion.",
            <>
              We will tell you what is <span className="font-editorial text-accent">possible.</span>
            </>,
          ]}
        />

        <Reveal delay={240}>
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
            Messages get answered the same day, most often within a couple of hours between{" "}
            {site.studioHours.toLowerCase()}.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <WaButton href={waGeneral()} size="lg">
              Message the studio
            </WaButton>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-ink transition-[translate,border-color] duration-300 [transition-timing-function:var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-accent/50"
            >
              Use the enquiry form
            </Link>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <p className="mt-8 text-xs text-muted-foreground">
            {services.length} services · {site.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
