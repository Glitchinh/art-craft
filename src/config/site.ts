import fabricPainting from "@/assets/service-fabric-painting.jpg";
import canvas from "@/assets/service-canvas.jpg";
import embroidery from "@/assets/service-embroidery.jpg";
import hoops from "@/assets/service-hoops.jpg";
import gifts from "@/assets/service-gifts.jpg";
import gallerySaree from "@/assets/gallery-saree.jpg";
import galleryCushion from "@/assets/gallery-cushion.jpg";
import galleryDecor from "@/assets/gallery-decor.jpg";
import galleryPortrait from "@/assets/gallery-portrait.jpg";
import lippanArt from "@/assets/lippan-art.png";
import decorNameplate from "@/assets/decor-nameplate.png";
import customisedGifts from "@/assets/customised-gifts.png";
import weddingFrame from "@/assets/wedding-frame.png";
import quillingArt from "@/assets/quilling-art.png";
import crochetWallHanging from "@/assets/crochet-wall-hanging.png";
import crochetTote from "@/assets/crochet-tote.png";
import embroideryHoop from "@/assets/embroidery-hoop.png";
import canvasPainting from "@/assets/canvas-painting.png";
import fabricPaintingPhoto from "@/assets/fabric-painting.png";

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
  name: "Stroke & Stitch",
  shortName: "S&S",
  tagline: "Painted, stitched and wrapped one at a time.",

  whatsappLink: "https://wa.me/917396964973",

  /* Left blank on purpose: the WhatsApp buttons carry the contact, so there is
     no placeholder number sitting on the page. Add the real one to print it
     next to the buttons, or leave it empty. */
  whatsappDisplay: "",

  email: "", // TODO: real inbox, e.g. studio@yourdomain.in
  city: "Hyderabad",
  location: "Hyderabad · Ships anywhere in India",
  studioHours: "Mon to Sat, 10am – 8pm IST",

  /* TODO: replace with the real profile URLs. Empty strings hide the icon. */
  instagram: "https://www.instagram.com/stroke.andstitch?igsi=eHNiNmwxMXF1ODly",
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
    title: "Fabric Painting",
    index: "Fabric painting",
    short: "Floral motifs, names and custom artwork painted onto fabric by hand.",
    description:
      "Custom fabric painting for sarees, dupattas, bags, cushions and other pieces that deserve a second life. Share your colours, motif or occasion and we will shape the artwork around the fabric you have.",
    includes: [
      "Sarees, dupattas, bags and cushion covers",
      "Floral motifs, names and monograms",
      "Custom colours and placement",
      "Design discussion before painting begins",
    ],
    turnaround: "7 to 12 days",
    from: "₹1,200",
    care: "Hand wash cold, inside out. Iron on the reverse and avoid harsh detergent.",
    image: fabricPaintingPhoto,
  },
  {
    slug: "canvas-paintings",
    title: "Customised Canvas Paintings",
    index: "Canvas art",
    short: "Portraits, memories and keepsakes painted to match your reference photo.",
    description:
      "A custom painting built around your favourite photograph, family memory or a room you want to hold onto. We work in acrylic for richer colour and watercolour for a softer finish, and we will tell you honestly what will read best at the final size before any paint goes down.",
    includes: [
      "Portraits of people, pets and family moments",
      "Houses, landscapes and couple memories",
      "Sizes from 8×10 in to 24×36 in",
      "Framed or gallery-wrapped finish options",
    ],
    turnaround: "10 to 15 days",
    from: "₹2,500",
    care: "Keep out of direct sun. Dust with a dry cloth only, never a damp one.",
    image: canvasPainting,
  },
  {
    slug: "hoops",
    title: "Embroidery Hoops",
    index: "Hoops",
    short: "Personalised stitched hoops for walls, gifting and meaningful occasions.",
    description:
      "Hand-stitched hoop art made around names, dates, birth flowers and the little details that make an occasion yours. Each hoop is finished neatly at the back and ready to hang.",
    includes: [
      "Names, dates and meaningful phrases",
      "Birth flowers and botanical designs",
      "6, 8 and 10 inch hoop options",
      "Finished and ready to hang",
    ],
    turnaround: "5 to 10 days",
    from: "₹750",
    care: "Dust with a dry cloth and keep away from moisture or humid rooms.",
    image: embroideryHoop,
  },
  {
    slug: "lippan-art",
    title: "Lippan Art",
    index: "Lippan art",
    short: "Traditional mirror-work wall art with texture, depth and a handcrafted finish.",
    description:
      "Lippan art brings a contemporary wall piece to life with mirror detailing, geometric motifs and a hand-finished surface. Best for entrances, pooja walls and statement corners where you want texture without a hard-edged, mass-produced look.",
    includes: [
      "Mirror and clay-inspired wall panels",
      "Custom motifs for entrances and feature walls",
      "Patterns made to suit your colour palette",
      "Ready-to-hang finishing",
    ],
    turnaround: "7 to 12 days",
    from: "₹1,800",
    care: "Keep away from damp corners and direct water splashes. Dust lightly with a dry cloth.",
    image: lippanArt,
  },
  {
    slug: "wedding-wall-frames",
    title: "Wedding Wall Frames",
    index: "Wedding frames",
    short: "Names, dates and memories framed as a keepsake for your home or gifting table.",
    description:
      "A very common ask for wedding gifting and housewarming keepsakes. We turn initials, names, wedding dates, pooja details or a meaningful phrase into a framed piece so it feels personal without becoming generic.",
    includes: [
      "Couple names and wedding date designs",
      "Custom family names and monograms",
      "Framed keepsakes for home décor",
      "Personalised colour palette and size options",
    ],
    turnaround: "6 to 10 days",
    from: "₹1,200",
    care: "Keep out of direct sunlight and avoid humid rooms. Dust with a soft dry cloth.",
    image: weddingFrame,
  },
  {
    slug: "crochet",
    title: "Crochet",
    index: "Crochet",
    short: "Handcrafted crochet pieces for keepsakes, gifting and home styling.",
    description:
      "Soft, tactile crochet pieces made by hand for home styling, gifting and custom pieces. This category is especially loved for decorative details, textured accents and cosy handmade pieces that feel personal and warm.",
    includes: [
      "Wall hangings and decorative accents",
      "Giftable keepsakes and small décor objects",
      "Custom colour combinations",
      "Favourite motifs or size requests",
    ],
    turnaround: "7 to 14 days",
    from: "₹900",
    care: "Hand wash gently with mild detergent and air dry away from direct sunlight.",
    image: crochetWallHanging,
  },
  {
    slug: "tote-bags",
    title: "Tote Bags",
    index: "Tote bags",
    short: "Custom painted or stitched totes that are useful, personal and gift-ready.",
    description:
      "The everyday object that becomes a statement piece. We customise tote bags with initials, florals, quotes or motifs that suit the person, the occasion and the bag itself, so it feels handpicked rather than store-bought.",
    includes: [
      "Customisable initials and names",
      "Painted floral and monogram designs",
      "Simple personalised gifting options",
      "Made to match your chosen palette",
    ],
    turnaround: "5 to 9 days",
    from: "₹1,100",
    care: "Spot clean or hand wash inside out. Avoid abrasive scrubbing and direct heat.",
    image: crochetTote,
  },
  {
    slug: "wall-hangings",
    title: "Wall Hangings",
    index: "Wall hangings",
    short: "Decorative hand-finished wall pieces for homes, gifting and event styling.",
    description:
      "A mix of hand-painted and stitched wall décor designed to soften a room or make a gifting moment feel more personal. These are a popular way to turn a wall into a keepsake without making it look mass-produced.",
    includes: [
      "Home wall décor in different sizes",
      "Soft textures, florals and motifs",
      "Custom themes for gifting and events",
      "Ready-to-hang formats",
    ],
    turnaround: "6 to 11 days",
    from: "₹1,300",
    care: "Keep away from moisture and direct sunlight. Dust lightly when needed.",
    image: decorNameplate,
  },
  {
    slug: "greeting-cards",
    title: "Customised Greeting Cards",
    index: "Greeting cards",
    short: "Personalised cards for birthdays, anniversaries, weddings and thoughtful gifting.",
    description:
      "Handmade cards are one of the easiest ways to make a moment feel considered. We create personalised designs with names, dates, flowers and messages so the piece feels warm, tactile and special from the first glance.",
    includes: [
      "Birthdays, weddings and anniversaries",
      "Name and date personalisation",
      "Botanical, floral and minimal styles",
      "Hand-finished detailing",
    ],
    turnaround: "3 to 6 days",
    from: "₹350",
    care: "Store in a dry place and keep away from damp surfaces to protect the finish.",
    image: customisedGifts,
  },
  {
    slug: "customised-gifts",
    title: "Customised Gifts",
    index: "Gift hampers",
    short: "Thoughtful bundles and keepsakes built around a person, occasion or budget.",
    description:
      "From hampers to keepsake boxes and occasion gifting, this category is built around the exact brief you give us. We help you fit the right pieces into a budget and present them in a way that feels polished, personal and ready to give.",
    includes: [
      "Occasion-based hamper curation",
      "Keepsake boxes and custom add-ons",
      "Budget-conscious styling",
      "Packaging and thoughtful presentation",
    ],
    turnaround: "5 to 12 days",
    from: "₹600",
    care: "Care instructions vary by item and are shared with every order before dispatch.",
    image: customisedGifts,
  },
  {
    slug: "decor-items",
    title: "Decor Items",
    index: "Decor items",
    short: "Hand-finished pieces that bring warmth and personality to your space.",
    description:
      "Custom decorative pieces for home corners, entrances, celebrations and gifting. Tell us the space, style or occasion and we will help shape a piece that belongs there.",
    includes: [
      "Name plates and statement décor",
      "Wall accents and keepsakes",
      "Custom themes and colour palettes",
      "Ready-to-gift presentation",
    ],
    turnaround: "5 to 12 days",
    from: "₹600",
    care: "Keep dry and dust gently with a soft cloth. Care varies by material.",
    image: decorNameplate,
  },
  {
    slug: "wedding-essentials",
    title: "Wedding Essentials",
    index: "Wedding essentials",
    short: "Personalised handmade details for wedding décor, gifting and celebrations.",
    description:
      "Thoughtful handmade details for the wedding moments around the main event, from wall frames and favours to personalised décor and gifting. Share your date and quantity early so we can plan the work properly.",
    includes: [
      "Wedding wall frames and keepsakes",
      "Personalised décor and gifting",
      "Favours and celebration details",
      "Bulk quantities quoted over WhatsApp",
    ],
    turnaround: "10 to 20 days",
    from: "₹900",
    care: "Keep packed items dry and store finished décor away from direct sunlight.",
    image: weddingFrame,
  },
  {
    slug: "quilling-art",
    title: "Quilling Art",
    index: "Quilling art",
    short: "Delicate rolled-paper artwork shaped into personalised gifts and décor.",
    description:
      "Quilling art turns carefully rolled paper into flowers, names, patterns and keepsake designs. It is a beautiful choice for framed gifts, special occasions and small personalised pieces with plenty of detail.",
    includes: [
      "Floral and botanical paper designs",
      "Names, initials and personalised motifs",
      "Framed artwork and keepsake options",
      "Custom colours for your occasion",
    ],
    turnaround: "5 to 10 days",
    from: "₹500",
    care: "Keep flat, dry and away from direct sunlight. Dust gently with a soft brush.",
    image: quillingArt,
  },
];

export const homepageBestSellerSlugs = [
  "fabric-painting",
  "hoops",
  "canvas-paintings",
  "decor-items",
  "wedding-essentials",
] as const;

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
    image: fabricPaintingPhoto,
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
    image: canvasPainting,
    size: "wide",
    note: "16×20 in, acrylic",
  },
  {
    id: "g4",
    title: "Couple portrait in pastel",
    category: "Canvas",
    image: weddingFrame,
    size: "tall",
    note: "Worked from a phone photo",
  },
  {
    id: "g5",
    title: "Wildflower tote",
    category: "Embroidery",
    image: crochetTote,
    size: "square",
    note: "Cotton thread on canvas",
  },
  {
    id: "g6",
    title: "Name cushion, chain stitch",
    category: "Embroidery",
    image: crochetWallHanging,
    size: "square",
    note: "Nursery set of two",
  },
  {
    id: "g7",
    title: "Meadow hoop, 8 inch",
    category: "Hoops",
    image: embroideryHoop,
    size: "tall",
    note: "One of thirty wedding favours",
  },
  {
    id: "g8",
    title: "Painted name plate",
    category: "Décor & Gifts",
    image: decorNameplate,
    size: "wide",
    note: "Housewarming, Hyderabad",
  },
  {
    id: "g9",
    title: "Hamper in blush",
    category: "Décor & Gifts",
    image: customisedGifts,
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
