import { site } from "../data/site";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import { Icon } from "./Icon";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[5.75rem] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition hover:scale-105 sm:bottom-6"
      aria-label={`Escribir a ${site.shortName} por WhatsApp`}
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <a
        href="#reservar"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brick px-3 text-sm font-medium text-cream"
      >
        Consultar fechas
      </a>
    </div>
  );
}
