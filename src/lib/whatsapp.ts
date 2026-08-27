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
  waLink(`Hi ${site.name}! I'd like to order a custom handmade gift. Can you help me?`);

export const waService = (service: string) =>
  waLink(`Hi ${site.name}! I'm interested in "${service}". Could you share details and pricing?`);

export const waPiece = (piece: string) =>
  waLink(`Hi ${site.name}! I saw "${piece}" on your website and would love something similar.`);
