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
  waLink(`Hi ${site.name}! I found your work and would love to discuss a custom handmade piece.`);

export const waService = (service: string) =>
  waLink(`Hi ${site.name}! I am interested in your ${service}. Could you tell me how to get started?`);

export const waPiece = (piece: string) =>
  waLink(`Hi ${site.name}! I loved the ${piece} I saw on your website. Could you make something similar?`);
