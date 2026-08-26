import { site } from "@/config/site";

/** Builds a wa.me link with a pre-filled message. */
export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const waGeneral = () =>
  waLink(`Hi ${site.name}! I'd like to order a custom handmade gift. Can you help me?`);

export const waService = (service: string) =>
  waLink(`Hi ${site.name}! I'm interested in "${service}". Could you share details and pricing?`);

export const waPiece = (piece: string) =>
  waLink(`Hi ${site.name}! I saw "${piece}" on your website and would love something similar.`);
