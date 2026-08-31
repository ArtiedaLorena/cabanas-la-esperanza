import { site } from "../data/site";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import { Icon } from "./Icon";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition hover:scale-105"
      aria-label={`Escribir a ${site.shortName} por WhatsApp`}
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
