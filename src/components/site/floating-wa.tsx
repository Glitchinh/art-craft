import { waGeneral } from "@/lib/whatsapp";
import { WaIcon } from "./wa-button";

export function FloatingWa() {
  return (
    <a
      href={waGeneral()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
    >
      <WaIcon className="size-5" />
      <span className="hidden sm:inline">Chat to order</span>
    </a>
  );
}
