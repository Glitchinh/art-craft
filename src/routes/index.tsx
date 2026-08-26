import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, Sparkles, Leaf, Gift, MessageCircle, Palette, Package, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-painting.jpg";
import { services, galleryItems, occasions, testimonials, site } from "@/config/site";
import { waGeneral, waService } from "@/lib/whatsapp";
import { WaButton } from "@/components/site/wa-button";
import { SectionHeading, LeafDivider } from "@/components/site/leaf-divider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gift With Love — Custom Handmade Art & Personalised Gifts" },
      {
        name: "description",
        content:
          "Hand-painted fabric, custom canvas paintings, hand embroidery, hoop art and personalised gift hampers. Made to order and booked over WhatsApp.",
      },
      { property: "og:title", content: "Gift With Love — Custom Handmade Art & Gifts" },
      {
        property: "og:description",
        content:
          "Unique artistry, created for you. Custom handmade gifting for birthdays, weddings and every occasion.",
      },
    ],
  }),
  component: Home,
});

const trust = [
  { icon: HandHeart, title: "100% Handmade", text: "Every piece made by hand" },
  { icon: Sparkles, title: "Made With Love", text: "Designed around your story" },
  { icon: Leaf, title: "Premium Quality", text: "Artist-grade materials" },
  { icon: Gift, title: "Every Occasion", text: "Gifting for all moments" },
];

const steps = [
  { icon: MessageCircle, title: "Message us", text: "Say hello on WhatsApp and tell us the occasion." },
  { icon: Palette, title: "Share your idea", text: "Photos, colours, names — we send a mock-up." },
  { icon: HandHeart, title: "We craft it", text: "Hand-painted or stitched with regular updates." },
  { icon: Package, title: "Wrapped & delivered", text: "Gift-wrapped with a handwritten note." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blush/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Custom Handmade Art
            </p>
            <h1 className="mt-5 text-4xl leading-[1.1] text-foreground sm:text-6xl">
              Unique artistry,
              <span className="block font-script text-5xl text-accent sm:text-6xl">
                created for you.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Hand-painted fabric, canvas paintings, hand embroidery, hoop art and gift hampers —
              made one at a time for the people who matter most.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WaButton href={waGeneral()} size="lg">
                Order on WhatsApp
              </WaButton>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
              >
                See our work <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Hands painting pink cosmos flowers onto cream linen fabric"
              width={1600}
              height={1200}
              className="w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-card px-5 py-3 shadow-md sm:left-8">
              <p className="font-script text-xl text-accent">Made just for you</p>
              <p className="text-xs text-muted-foreground">No two pieces are ever the same</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <t.icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  {t.title}
                </p>
                <p className="text-xs text-muted-foreground">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          eyebrow="What we make"
          title="Our Custom Services"
          subtitle="Five ways to turn an idea, a photograph or a memory into something handmade."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <div className="mt-5 flex items-center justify-between">
                  <WaButton href={waService(s.title)} size="sm" variant="outline">
                    Enquire
                  </WaButton>
                  <Link
                    to="/services"
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-accent"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-center gap-4 rounded-3xl bg-blush/60 p-8 text-center">
            <h3 className="font-script text-3xl text-accent">Something else in mind?</h3>
            <p className="text-sm text-muted-foreground">
              If it can be painted, stitched or wrapped, we will try to make it. Tell us your idea.
            </p>
            <WaButton href={waGeneral()} size="sm" className="mx-auto">
              Ask us
            </WaButton>
          </article>
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Recent pieces" title="Handmade & Delivered" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {galleryItems.slice(0, 6).map((g) => (
              <Link
                key={g.id}
                to="/gallery"
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-3 text-xs font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {g.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
            >
              View full gallery <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          eyebrow="How ordering works"
          title="Four Simple Steps"
          subtitle="No carts, no card details. Just a conversation that ends in something handmade."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="dashed-card relative rounded-3xl p-6">
              <span className="font-script text-4xl text-accent/40">0{i + 1}</span>
              <s.icon className="mt-2 size-6 text-primary" />
              <h3 className="mt-4 text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
            Perfect for
          </p>
          <h2 className="mt-4 text-3xl text-primary-foreground sm:text-4xl">Every Occasion</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {occasions.map((o) => (
              <span
                key={o}
                className="rounded-full border border-primary-foreground/30 px-5 py-2 text-sm"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading eyebrow="Kind words" title="From Our Customers" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-7">
              <span className="font-script text-4xl leading-none text-accent">“</span>
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {t.name} · {t.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Closing banner */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-[2rem] bg-blush/60 px-6 py-14 text-center">
          <LeafDivider label="Let's begin" />
          <h2 className="mt-6 text-3xl text-foreground sm:text-5xl">
            Let&apos;s Create
            <span className="block font-script text-4xl text-accent sm:text-6xl">
              Something Special
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm text-muted-foreground">
            Send us a message on WhatsApp with the occasion and your idea. We usually reply the same
            day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WaButton href={waGeneral()} size="lg" />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 text-base font-medium text-primary shadow-sm"
            >
              Send an enquiry
            </Link>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">{site.whatsappDisplay}</p>
        </div>
      </section>
    </div>
  );
}
