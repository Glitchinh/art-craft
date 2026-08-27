import fabricPainting from "@/assets/service-fabric-painting.jpg";
import canvas from "@/assets/service-canvas.jpg";
import embroidery from "@/assets/service-embroidery.jpg";
import hoops from "@/assets/service-hoops.jpg";
import gifts from "@/assets/service-gifts.jpg";
import gallerySaree from "@/assets/gallery-saree.jpg";
import galleryCushion from "@/assets/gallery-cushion.jpg";
import galleryDecor from "@/assets/gallery-decor.jpg";
import galleryPortrait from "@/assets/gallery-portrait.jpg";

/**
 * Brand + contact configuration.
 *
 * ── Before going live, fill in the four fields marked TODO ──
 *
 * `whatsappLink` is the single base every WhatsApp button is built from.
 * It accepts either form:
 *   - a QR / contact-add short link — https://wa.me/qr/XXXXXXXXXXXXX
 *   - a plain number link — https://wa.me/919876543210 (digits only, no + or spaces)
 *
 * Note: pre-filled message text (`?text=`) is only officially supported on the
 * plain-number form. On a /qr/ link WhatsApp may open the chat empty.
 */
export const site = {
  name: "Gift With Love",
  shortName: "GWL",
  tagline: "Painted, stitched and wrapped one at a time.",

  whatsappLink: "https://wa.me/qr/3WZKHTIBCRN5G1",

  /* Left blank on purpose: the WhatsApp buttons carry the contact, so there is
     no placeholder number sitting on the page. Add the real one to print it
     next to the buttons, or leave it empty. */
  whatsappDisplay: "",

  email: "", // TODO: real inbox, e.g. studio@yourdomain.in
  city: "Hyderabad",
  location: "Hyderabad · Ships anywhere in India",
  studioHours: "Mon to Sat, 10am – 8pm IST",

  /* TODO: replace with the real profile URLs. Empty strings hide the icon. */
  instagram: "",
  facebook: "",
  pinterest: "",

  foundedYear: 2023,
} as const;

/** Concrete facts, used in the strip under the hero. No slogans. */
export const studioFacts = [
  { figure: "300+", label: "pieces finished" },
  { figure: "5–15", label: "days, start to doorstep" },
  { figure: "24", label: "states shipped to" },
  { figure: "1", label: "pair of hands per order" },
];

export type Service = {
  slug: string;
  title: string;
  /** Two or three words for the numbered index. */
  index: string;
  short: string;
  description: string;
  includes: string[];
  turnaround: string;
  from: string;
  /** The unglamorous practical bit customers actually ask about. */
  care: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "fabric-painting",
    title: "Customised Fabric Painting",
    index: "Fabric painting",
    short: "Florals, motifs and monograms painted straight onto cloth you already own.",
    description:
      "Send us the saree, the dupatta, the kurta you stopped wearing because it felt plain. We paint onto it directly with fabric pigment, so the cloth keeps its drape instead of going stiff and board-like in the painted areas. Borders and pallus are the most requested. Full-body motifs take longer and cost more, and we will say so before you commit.",
    includes: [
      "Sarees, dupattas, kurtas, stoles, blouse pieces",
      "Cushion covers, table runners, tote bags",
      "Borders, pallus, scattered motifs, monograms",
      "A pencil layout photographed and sent before any colour goes down",
    ],
    turnaround: "7 to 12 days",
    from: "₹1,200",
    care: "Cure 72 hours before the first wash. Hand wash cold, inside out, no wringing. Iron on the reverse.",
    image: fabricPainting,
  },
  {
    slug: "canvas-paintings",
    title: "Customised Canvas Paintings",
    index: "Canvas",
    short: "Acrylic or watercolour on stretched canvas, worked up from your photograph.",
    description:
      "Most of these start as a phone photo. A grandparent, a dog, the house everyone grew up in. We work in acrylic when you want depth and saturation, watercolour when you want air. Faces need a clear, well-lit reference; if the photo will not hold up at size, we will tell you before starting rather than after.",
    includes: [
      "Portraits of people and pets",
      "Houses, landscapes, cityscapes, abstracts",
      "8×10 in through 24×36 in",
      "Gallery-wrapped edges, or framed for an added cost",
    ],
    turnaround: "10 to 15 days",
    from: "₹2,500",
    care: "Keep out of direct sun. Dust with a dry cloth only, never a damp one.",
    image: canvas,
  },
  {
    slug: "fabric-hand-embroidery",
    title: "Customised Fabric Hand Embroidery",
    index: "Hand embroidery",
    short: "Cotton and silk thread worked by hand into clothing, linen and bags.",
    description:
      "No machine anywhere in this. Names, dates, a line of a song, wildflowers creeping up a sleeve. Hand work means the back is finished properly and the stitches sit into the weave rather than on top of it. It also means a dense design takes real time, which is the honest trade.",
    includes: [
      "Names, initials, dates, short quotes",
      "Floral and botanical thread work",
      "Shirts, totes, cushion covers, baby sets",
      "Thread palette agreed with you first",
    ],
    turnaround: "8 to 14 days",
    from: "₹900",
    care: "Turn inside out to wash. Cold water, mild detergent. Never bleach.",
    image: embroidery,
  },
  {
    slug: "embroidery-hoops",
    title: "Customised Embroidery Hoops",
    index: "Hoops",
    short: "Finished hoop art on cotton, backed and ready to hang.",
    description:
      "The one people order in tens, for weddings and baby showers. Birth-flower designs, name hoops, a wedding date stitched small in the corner. The backing is closed with felt so no raw edges show, and it arrives ready to go on a nail. Bulk orders run cheaper per piece, so tell us the count up front.",
    includes: [
      "6, 8 and 10 inch wooden hoops",
      "Birth flowers, name hoops, wedding dates",
      "Nursery and anniversary keepsakes",
      "Felt-closed backing, ready to hang",
    ],
    turnaround: "5 to 10 days",
    from: "₹750",
    care: "Wipe with a dry cloth. Hang away from a bathroom or anywhere humid.",
    image: hoops,
  },
  {
    slug: "decor-and-gifts",
    title: "Customised Décor & Gifts",
    index: "Décor & gifts",
    short: "Name plates, wall hangings and hampers assembled around one occasion.",
    description:
      "This is the catch-all, and it is the one that gets the strangest and best briefs. Hand-painted name plates for a new flat. A hamper built to a budget with a handwritten note tucked in. Keepsake boxes for a wedding party. Give us a number and an occasion and we will tell you honestly what fits inside it.",
    includes: [
      "Hampers built to a stated budget",
      "Name plates, wall hangings, keepsake boxes",
      "Handwritten note and wrapping included",
      "Bulk orders for weddings and corporate gifting",
    ],
    turnaround: "5 to 12 days",
    from: "₹600",
    care: "Varies by piece. Care notes go in the box.",
    image: gifts,
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  /** Drives the masonry span so the grid is not a uniform waffle. */
  size?: "tall" | "wide" | "square";
  note?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Cosmos on cream linen",
    category: "Fabric Painting",
    image: fabricPainting,
    size: "tall",
    note: "Pallu border, painted over four sittings",
  },
  {
    id: "g2",
    title: "Floral saree, painted border",
    category: "Fabric Painting",
    image: gallerySaree,
    size: "square",
    note: "Anniversary gift, Bengaluru",
  },
  {
    id: "g3",
    title: "Lake at dusk",
    category: "Canvas",
    image: canvas,
    size: "wide",
    note: "16×20 in, acrylic",
  },
  {
    id: "g4",
    title: "Couple portrait in pastel",
    category: "Canvas",
    image: galleryPortrait,
    size: "tall",
    note: "Worked from a phone photo",
  },
  {
    id: "g5",
    title: "Wildflower tote",
    category: "Embroidery",
    image: embroidery,
    size: "square",
    note: "Cotton thread on canvas",
  },
  {
    id: "g6",
    title: "Name cushion, chain stitch",
    category: "Embroidery",
    image: galleryCushion,
    size: "square",
    note: "Nursery set of two",
  },
  {
    id: "g7",
    title: "Meadow hoop, 8 inch",
    category: "Hoops",
    image: hoops,
    size: "tall",
    note: "One of thirty wedding favours",
  },
  {
    id: "g8",
    title: "Painted name plate",
    category: "Décor & Gifts",
    image: galleryDecor,
    size: "wide",
    note: "Housewarming, Hyderabad",
  },
  {
    id: "g9",
    title: "Hamper in blush",
    category: "Décor & Gifts",
    image: gifts,
    size: "square",
    note: "Built to a ₹2,000 budget",
  },
];

export const galleryCategories = [
  "All",
  "Fabric Painting",
  "Canvas",
  "Embroidery",
  "Hoops",
  "Décor & Gifts",
];

export const occasions = [
  "Birthdays",
  "Weddings",
  "Anniversaries",
  "Housewarming",
  "Baby showers",
  "Festivals",
  "Corporate gifting",
  "Farewells",
];

/** How an order actually runs, in the words we use on WhatsApp. */
export const process = [
  {
    step: "01",
    title: "Tell us the occasion",
    text: "Open WhatsApp and say what it is for and roughly when you need it. A photo of what you have in mind helps more than a paragraph.",
  },
  {
    step: "02",
    title: "We quote, you decide",
    text: "You get a price, a date and a rough sketch or layout. If your idea will not work at the size or budget you want, this is where we say so.",
  },
  {
    step: "03",
    title: "It gets made",
    text: "One pair of hands, start to finish. Photos as it goes, so nothing about the final piece is a surprise.",
  },
  {
    step: "04",
    title: "Wrapped and sent",
    text: "Packed with care notes and a handwritten card, then couriered. Tracking comes to the same chat.",
  },
];

/*
 * TODO — REPLACE BEFORE LAUNCH.
 * These are stand-ins so the section renders. Swap in real messages with
 * permission from the customers who sent them; invented reviews are the fastest
 * way to lose trust (and they breach consumer-protection rules on testimonials).
 */
export const testimonials = [
  {
    quote:
      "I sent a badly lit photo of my parents from the eighties and asked if anything could be done with it. What came back was better than the original. My mother has it in the hall now.",
    name: "Sneha R.",
    detail: "24×36 in canvas · Chennai",
  },
  {
    quote:
      "Ordered thirty hoops as wedding favours six weeks out. They arrived a week early, every one of them numbered and wrapped separately, which saved me an entire evening.",
    name: "Arun K.",
    detail: "30 embroidery hoops · Pune",
  },
  {
    quote:
      "The painted border on my mother's old saree is the part everyone touched at the reception. It still feels like the same cloth, which is the bit I was worried about.",
    name: "Divya M.",
    detail: "Fabric painting · Hyderabad",
  },
];

export const faqs = [
  {
    q: "How do I actually place an order?",
    a: "Everything runs through WhatsApp. Send the occasion, your idea and any reference photos. You get a layout and a price back, and work starts once you approve it.",
  },
  {
    q: "Do I pay through the website?",
    a: "No. There is no checkout here and no card details are ever taken on this site. Payment is arranged directly on WhatsApp once the design and price are settled.",
  },
  {
    q: "How long does a piece take?",
    a: "Five to fifteen days depending on what it is, plus courier time. Hoops are quickest, large canvases slowest. If you have a hard date, say so first — we will tell you straight away whether it is possible.",
  },
  {
    q: "Can I send my own fabric or garment?",
    a: "Yes, and most fabric painting orders work this way. Courier it to us once the design is agreed. We will flag anything too delicate or too dark to take pigment well.",
  },
  {
    q: "Do you ship outside Hyderabad?",
    a: "Anywhere in India. Shipping is charged at actuals and everything travels insured. International orders are possible but quoted case by case.",
  },
  {
    q: "What if I do not like it?",
    a: "You see progress photos throughout, so this rarely gets that far. Small fixes are on us. Anything that arrives damaged in transit gets remade.",
  },
];
