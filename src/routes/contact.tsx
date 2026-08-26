import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Instagram } from "lucide-react";
import { site, services, occasions } from "@/config/site";
import { waGeneral, waLink } from "@/lib/whatsapp";
import { WaButton, WaIcon } from "@/components/site/wa-button";
import { SectionHeading } from "@/components/site/leaf-divider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking — Gift With Love" },
      {
        name: "description",
        content:
          "Book a custom handmade gift over WhatsApp. Share the occasion, service and your idea — we reply the same day. No online payments required.",
      },
      { property: "og:title", content: "Contact & Booking — Gift With Love" },
      {
        property: "og:description",
        content: "Message us on WhatsApp to book your custom handmade gift.",
      },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "How do I place an order?",
    a: "Everything happens over WhatsApp. Send us the occasion, your idea and any reference photos. We share a mock-up and price, and once you approve, we begin.",
  },
  {
    q: "Do I pay on the website?",
    a: "No. There are no online payments here. Payment details are shared directly on WhatsApp after your design and price are confirmed.",
  },
  {
    q: "How long does a custom piece take?",
    a: "Between 5 and 15 days depending on the service and detailing. Tell us your deadline and we will confirm before starting.",
  },
  {
    q: "Do you ship outside the city?",
    a: "Yes, we ship across India with tracked courier. Shipping is charged at actuals and shared with your quote.",
  },
  {
    q: "How should I care for a hand-painted piece?",
    a: "Gentle cold hand wash, no harsh detergent or bleach, dry in shade, and iron on the reverse. Care instructions come with every order.",
  },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    occasion: occasions[0] ?? "",
    service: services[0]?.title ?? "",
    budget: "",
    details: "",
  });

  const message = [
    `Hi ${site.name}!`,
    form.name && `My name is ${form.name}.`,
    form.service && `I'm interested in: ${form.service}.`,
    form.occasion && `Occasion: ${form.occasion}.`,
    form.budget && `Budget: ${form.budget}.`,
    form.details && `Details: ${form.details}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <section className="bg-blush/40 px-4 py-14 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Get in touch</p>
        <h1 className="mt-4 text-4xl text-foreground sm:text-5xl">
          Let&apos;s plan your
          <span className="font-script text-accent"> gift</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          WhatsApp is the fastest way to reach us. Fill in the form below and it opens a chat with
          your details already written out.
        </p>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        {/* WhatsApp card + details */}
        <div className="space-y-6">
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
            <WaIcon className="size-8" />
            <h2 className="mt-4 text-2xl text-primary-foreground">Book on WhatsApp</h2>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
              Orders, quotes and progress updates all happen in one chat with the person making your
              piece.
            </p>
            <p className="mt-5 text-xl font-medium tracking-wide">{site.whatsappDisplay}</p>
            <div className="mt-6">
              <WaButton href={waGeneral()} variant="cream">
                Open WhatsApp chat
              </WaButton>
            </div>
          </div>

          <ul className="space-y-4 rounded-3xl border border-border bg-card p-7 text-sm">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                <span className="block font-medium text-foreground">Reply time</span>
                <span className="text-muted-foreground">Usually within a few hours, 10am–8pm IST</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                <span className="block font-medium text-foreground">Email</span>
                <span className="text-muted-foreground">{site.email}</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                <span className="block font-medium text-foreground">Studio</span>
                <span className="text-muted-foreground">{site.location}</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                <span className="block font-medium text-foreground">Instagram</span>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline decoration-accent/40 underline-offset-4"
                >
                  Follow our latest work
                </a>
              </span>
            </li>
          </ul>
        </div>

        {/* Enquiry form */}
        <form
          className="rounded-3xl border border-border bg-card p-7 sm:p-9"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-2xl text-foreground">Tell us about your idea</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Nothing is sent from this page — the button below opens WhatsApp with your answers
            filled in.
          </p>

          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Your name
              </span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Ananya"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  Occasion
                </span>
                <select
                  value={form.occasion}
                  onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                >
                  {occasions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                  <option value="Just because">Just because</option>
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  Service
                </span>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                >
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title.replace("Customised ", "")}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Budget (optional)
              </span>
              <input
                type="text"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                placeholder="e.g. ₹1500–2500"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Your idea
              </span>
              <textarea
                rows={4}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                placeholder="Colours, names, size, delivery date, reference you liked..."
                className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              />
            </label>
          </div>

          <div className="mt-7">
            <WaButton href={waLink(message)} size="lg" className="w-full">
              Send on WhatsApp
            </WaButton>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            You can attach reference photos once the chat opens.
          </p>
        </form>
      </div>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="Good to know" title="Frequently Asked" />
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-card px-6 py-5"
              >
                <summary className="cursor-pointer list-none text-sm font-medium text-foreground marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
