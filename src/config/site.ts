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
 * Replace `whatsappNumber` with your real WhatsApp Business number
 * (country code, digits only — no +, spaces or dashes).
 */
export const site = {
  name: "Gift With Love",
  tagline: "Unique artistry, created for you.",
  // SAMPLE NUMBER — replace with your WhatsApp Business number.
  whatsappNumber: "919999999999",
  whatsappDisplay: "+91 99999 99999",
  email: "hello@giftwithlove.in",
  location: "Hyderabad, India · Shipping across India",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  pinterest: "https://pinterest.com/",
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  includes: string[];
  turnaround: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "fabric-painting",
    title: "Customised Fabric Painting",
    short: "Hand-painted florals and motifs on sarees, dupattas, kurtas and cushion covers.",
    description:
      "Your fabric becomes the canvas. We hand-paint florals, motifs, monograms or a design of your choosing using fabric-safe pigments that stay soft on the weave and hold their colour wash after wash.",
    includes: [
      "Sarees, dupattas, kurtas, stoles",
      "Cushion covers, table runners, tote bags",
      "Custom motifs, monograms and borders",
      "Design mock-up shared before we begin",
    ],
    turnaround: "7–12 days",
    image: fabricPainting,
  },
  {
    slug: "canvas-paintings",
    title: "Customised Canvas Paintings",
    short: "Acrylic and watercolour canvases made from your photo, place or memory.",
    description:
      "A painting made for one wall and one story. Send a photograph, a place you love or a colour palette, and we translate it onto stretched canvas in acrylic or watercolour, ready to hang or gift.",
    includes: [
      "Couple, family and pet portraits",
      "Landscapes, cityscapes, abstracts",
      "Sizes from 8x10 in to 24x36 in",
      "Framed or gallery-wrapped finish",
    ],
    turnaround: "10–15 days",
    image: canvas,
  },
  {
    slug: "fabric-hand-embroidery",
    title: "Customised Fabric Hand Embroidery",
    short: "Thread work stitched by hand onto clothing, linen and accessories.",
    description:
      "Every stitch placed by hand. We embroider names, dates, wildflowers and delicate detailing onto garments, totes, cushion covers and baby linen using cotton and silk threads.",
    includes: [
      "Names, initials, dates and quotes",
      "Floral and botanical thread work",
      "Totes, shirts, cushion covers, baby sets",
      "Colour palette chosen with you",
    ],
    turnaround: "8–14 days",
    image: embroidery,
  },
  {
    slug: "embroidery-hoops",
    title: "Customised Embroidery Hoops",
    short: "Framed hoop art for nurseries, gifting and wedding keepsakes.",
    description:
      "A finished hoop is a small, forever kind of gift. Wildflower meadows, birth-flower designs, wedding dates or a favourite line — stitched onto cotton and framed in a wooden hoop, ready to hang.",
    includes: [
      "6 in, 8 in and 10 in wooden hoops",
      "Birth flowers, name hoops, wedding dates",
      "Nursery and anniversary keepsakes",
      "Backing neatly finished for hanging",
    ],
    turnaround: "5–10 days",
    image: hoops,
  },
  {
    slug: "decor-and-gifts",
    title: "Customised Décor & Gifts",
    short: "Hampers, name plates, wall art and keepsakes put together by hand.",
    description:
      "Curated and crafted for the occasion. Hand-painted name plates, wall hangings, resin and wood keepsakes, or a full hamper assembled around a theme, wrapped and tagged with a handwritten note.",
    includes: [
      "Gift hampers built to your budget",
      "Name plates, wall hangings, keepsake boxes",
      "Handwritten note and gift wrapping",
      "Bulk orders for weddings and corporates",
    ],
    turnaround: "5–12 days",
    image: gifts,
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Cosmos on cream linen", category: "Fabric Painting", image: fabricPainting },
  { id: "g2", title: "Hand-painted floral saree", category: "Fabric Painting", image: gallerySaree },
  { id: "g3", title: "Sunset lake canvas", category: "Canvas", image: canvas },
  { id: "g4", title: "Pastel couple portrait", category: "Canvas", image: galleryPortrait },
  { id: "g5", title: "Wildflower tote bag", category: "Embroidery", image: embroidery },
  { id: "g6", title: "Personalised name cushion", category: "Embroidery", image: galleryCushion },
  { id: "g7", title: "Wildflower meadow hoop", category: "Hoops", image: hoops },
  { id: "g8", title: "Painted name plate", category: "Décor & Gifts", image: galleryDecor },
  { id: "g9", title: "Blush gift hamper", category: "Décor & Gifts", image: gifts },
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
  "Festivals",
  "Corporate Gifting",
];

export const testimonials = [
  {
    quote:
      "I sent a photo of my parents and got back a canvas that made my mother cry. The detailing was beyond what I imagined.",
    name: "Sneha R.",
    detail: "Anniversary canvas",
  },
  {
    quote:
      "The hand-painted saree was the highlight of our wedding functions. Everyone asked where it was from.",
    name: "Divya M.",
    detail: "Customised saree",
  },
  {
    quote:
      "Ordered 30 embroidery hoops as wedding favours. Delivered on time and every single one was perfect.",
    name: "Arun K.",
    detail: "Bulk wedding favours",
  },
];
