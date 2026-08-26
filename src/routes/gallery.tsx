import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { galleryItems, galleryCategories, type GalleryItem } from "@/config/site";
import { waPiece, waGeneral } from "@/lib/whatsapp";
import { WaButton } from "@/components/site/wa-button";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery of Handmade Pieces — Gift With Love" },
      {
        name: "description",
        content:
          "Browse hand-painted fabric, custom canvases, embroidery hoops and gift hampers we have made. Found something you like? Ask for it on WhatsApp.",
      },
      { property: "og:title", content: "Gallery — Gift With Love" },
      {
        property: "og:description",
        content: "A look at our hand-painted, embroidered and handcrafted custom gifts.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const items =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <div>
      <section className="bg-blush/40 px-4 py-14 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Our work</p>
        <h1 className="mt-4 text-4xl text-foreground sm:text-5xl">Handmade Gallery</h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every piece here was made for one person. Yours will be made only for you — tap any piece
          to ask for something similar.
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground/75 hover:border-accent/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g) => (
            <figure key={g.id} className="overflow-hidden rounded-3xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setLightbox(g)}
                className="group block w-full"
                aria-label={`View ${g.title}`}
              >
                <img
                  src={g.image}
                  alt={g.title}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <figcaption className="flex items-center justify-between gap-3 p-4">
                <span>
                  <span className="block text-sm font-medium text-foreground">{g.title}</span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {g.category}
                  </span>
                </span>
                <WaButton href={waPiece(g.title)} size="sm" variant="outline">
                  Ask
                </WaButton>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-cream px-6 py-12 text-center">
          <h2 className="font-script text-4xl text-accent">Have a reference photo?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Send it over on WhatsApp — we will tell you exactly how we would make it, and what it
            would cost.
          </p>
          <div className="mt-7">
            <WaButton href={waGeneral()} size="lg">
              Send your idea
            </WaButton>
          </div>
        </div>
      </div>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-h-full w-full max-w-xl overflow-auto rounded-3xl bg-card p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl text-foreground">{lightbox.title}</h2>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {lightbox.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="flex size-9 items-center justify-center rounded-full border border-border text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="mt-4 w-full rounded-2xl object-cover"
            />
            <div className="mt-4">
              <WaButton href={waPiece(lightbox.title)} className="w-full">
                I&apos;d like something like this
              </WaButton>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
