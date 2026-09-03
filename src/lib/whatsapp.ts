import { site } from "@/config/site";

/** Builds a WhatsApp link from `site.whatsappLink` with a pre-filled message. */
export function waLink(message?: string) {
  const base = site.whatsappLink;
  if (!message) return base;
  if (base.includes("/qr/")) return base;
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}text=${encodeURIComponent(message)}`;
}

export const waGeneral = () =>
  waLink(
    `Hi ${site.name}! I would like to discuss a custom order. It is for [occasion], I need it by [date], and I have an idea or reference photo to share. Could you help me figure out what would work?`,
  );

export const waService = (service: string) =>
  waLink(
    `Hi ${site.name}! I am interested in ${service}. It is for [occasion] and I need it by [date], if possible. Could you share the starting price and what details you need from me?`,
  );

export const waPiece = (piece: string) =>
  waLink(
    `Hi ${site.name}! I saw ${piece} on your website and would love something similar. I am thinking of it for [occasion] and need it by [date]. Can I send you a reference photo and get an estimate?`,
  );
