import { createFileRoute } from "@tanstack/react-router";
import { HandHeart, Leaf, Sparkles, Recycle } from "lucide-react";
import studio from "@/assets/about-studio.jpg";
import { site } from "@/config/site";
import { waGeneral } from "@/lib/whatsapp";
import { WaButton } from "@/components/site/wa-button";
import { SectionHeading } from "@/components/site/leaf-divider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Gift With Love — Handmade, One Piece at a Time" },
      {
        name: "description",
        content:
          "The story behind Gift With Love: a small handmade studio painting fabric, stitching hoops and building custom gifts for every occasion.",
      },
      { property: "og:title", content: "About Gift With Love" },
      {
        property: "og:description",
        content: "A small handmade studio making custom fabric painting, canvas art and embroidery.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: HandHeart, title: "Made by hand", text: "No printing, no mass production. Brush and needle only." },
  { icon: Sparkles, title: "One of a kind", text: "Your design is drawn for you and never repeated." },
  { icon: Leaf, title: "Good materials", text: "Artist-grade paints, cotton and silk threads, real wood hoops." },
  { icon: Recycle, title: "Honest pricing", text: "You see the price and mock-up before any work starts." },
];

const process = [
  { step: "Conversation", text: "We start with the occasion, the person and your budget." },
  { step: "Design", text: "A hand-drawn mock-up or sketch is shared for your approval." },
  { step: "Making", text: "Painting or stitching begins, with progress photos along the way." },
  { step: "Finishing", text: "Sealed, pressed, wrapped and tagged with a handwritten note." },
];

function AboutPage() {
  return (
    <div>
      <section className="bg-blush/40 px-4 py-14 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our story</p>
        <h1 className="mt-4 text-4xl text-foreground sm:text-5xl">
          Handmade,
          <span className="font-script text-accent"> with love</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <img
          src={studio}
          alt="Craft studio table with embroidery hoops, threads and dried flowers"
          loading="lazy"
          width={1200}
          height={1000}
          className="w-full rounded-3xl object-cover shadow-lg"
        />
        <div>
          <h2 className="text-3xl text-foreground sm:text-4xl">Why we started</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              {site.name} began the way most handmade things do — with one gift, made for someone
              who mattered. A hand-painted dupatta for a mother, then a hoop for a friend&apos;s
              nursery, then a canvas for a wedding anniversary.
            </p>
            <p>
              What we noticed was simple: people remember the gift that someone made far longer than
              the one they bought. So we turned it into a small studio dedicated to exactly that —
              fabric painting, canvas art, hand embroidery, hoop art and custom gifting, all made to
              order.
            </p>
            <p>
              We are deliberately small. We take a limited number of orders at a time so every piece
              gets the hours it deserves, and so you always talk directly to the person making it.
            </p>
          </div>
          <div className="mt-8">
            <WaButton href={waGeneral()}>Say hello on WhatsApp</WaButton>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="How we work" title="From Idea to Doorstep" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="rounded-3xl border border-border bg-card p-6">
                <span className="font-script text-4xl text-accent/50">0{i + 1}</span>
                <h3 className="mt-3 text-lg text-foreground">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="What we stand for" title="Our Promises" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="dashed-card rounded-3xl p-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
