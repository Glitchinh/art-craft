# Gift With Love — Custom Handmade Gifting Website

A warm, handcrafted 5-page site for a custom handmade art & gifting business. No payments, no cart — every purchase or booking goes through WhatsApp with a pre-filled message.

## Look & feel

Blush & Sage palette: warm off-white background (#faf6f2), soft blush surfaces (#f0dcdc), terracotta accent (#c4654a), sage green for buttons and headings (#5c7048). Elegant serif display headings paired with a clean body font, soft rounded cards, dashed/hand-drawn dividers, botanical leaf flourishes, and gentle fade-in on scroll. Inspired by the gift-shop reference layout, adapted to the handmade-art poster's warmth.

## Pages

**Home**
- Top strip: "Handmade with love — DM on WhatsApp to order"
- Sticky header: logo + Home / Services / Gallery / About / Contact + WhatsApp button
- Hero: "Unique Artistry, Created For You" with a hand-painting-flowers image and an "Order on WhatsApp" call to action
- Trust row: 100% Handmade · Made With Love · Premium Quality · Perfect For Every Occasion
- Services grid (5 cards, links to Services)
- Featured work strip (6 images, links to Gallery)
- How ordering works: 1 Message us → 2 Share your idea → 3 We craft it → 4 Delivered
- Occasions band: Birthdays, Weddings, Anniversaries, Housewarming, Festivals, Corporate
- Testimonials (3 short quotes)
- Closing banner: "Let's Create Something Special" + WhatsApp
- Footer: brand, quick links, occasions, socials, contact

**Services** — full detail for the 5 offerings from your poster: Customised Fabric Painting, Customised Canvas Paintings, Customised Fabric Hand Embroidery, Customised Embroidery Hoops, Customised Décor & Gifts. Each gets an image, description, what's included, typical turnaround, and an "Enquire on WhatsApp" button that pre-fills that service name.

**Gallery** — filterable grid (All / Fabric Painting / Canvas / Embroidery / Hoops / Décor & Gifts) with lightbox on click and a WhatsApp button on each item ("I'd like something like this").

**About** — the story behind the brand, the handmade process, why custom, and a values row.

**Contact** — WhatsApp as the primary channel (big card with number), plus an enquiry form that does not send email but composes a WhatsApp message from the fields (name, occasion, service, budget, details), response-time note, and an FAQ block (customisation, timelines, shipping, care).

## WhatsApp ordering

A single config file holds the business number and brand details, so you can swap in your real number in one place later. A placeholder sample number is used for now. Every button opens `https://wa.me/<number>?text=<pre-filled message>` including the product/service context.

## Technical notes

- TanStack Start routes: `index.tsx`, `services.tsx`, `gallery.tsx`, `about.tsx`, `contact.tsx`; shared header/footer in `__root.tsx`
- Blush & Sage tokens added to `src/styles.css` as oklch semantic tokens; fonts loaded via `<link>` in the root head
- `src/config/site.ts` — brand name, tagline, WhatsApp number, socials, service list, gallery items
- `src/lib/whatsapp.ts` — helper building wa.me links with pre-filled text
- Per-page `head()` metadata (unique title, description, og tags) for SEO
- Images generated to match the handmade aesthetic (hero, 5 service images, ~9 gallery pieces, about portrait)
- No backend, no payments, no database — fully static and credit-efficient
