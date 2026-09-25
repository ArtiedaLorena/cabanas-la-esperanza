import { buildWhatsAppUrl } from "../lib/whatsapp";
import { Button } from "./Button";
import { Icon } from "./Icon";

const chips = [
  { icon: "users" as const, label: "2 cabañas" },
  { icon: "pool" as const, label: "Pileta" },
  { icon: "grill" as const, label: "Parrilla" },
  { icon: "wifi" as const, label: "Wi-Fi" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-night text-cream">
      <div className="absolute inset-0">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            type="image/webp"
            srcSet="/images/hero-sm.webp 768w, /images/hero-md.webp 1280w, /images/hero.webp 1920w"
            sizes="100vw"
          />
          <img
            src="/images/hero.jpg"
            alt="Atardecer en Cabañas San Martín, con pileta y las sierras de Villa Larca"
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-[center_42%] brightness-110 contrast-[1.05]"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-night/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/10 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-24">
        <div className="relative max-w-3xl">
          <div
            className="pointer-events-none absolute -inset-x-8 -inset-y-6 rounded-[2rem] bg-night/35 blur-2xl sm:-inset-x-12"
            aria-hidden
          />
          <p className="hero-copy reveal relative text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-sand">
            Villa Larca · San Luis
          </p>
          <h1 className="hero-copy reveal reveal-delay-1 relative mt-4 font-serif leading-[0.98]">
            <span className="block text-[2.7rem] font-medium tracking-[-0.03em] sm:text-6xl lg:text-[4.55rem]">
              Cabañas San Martín
            </span>
            <span className="mt-3 block max-w-2xl text-[1.55rem] font-normal tracking-[-0.02em] text-cream/95 sm:text-[2.15rem] lg:text-[2.55rem]">
              para descansar en las sierras
            </span>
          </h1>
          <p className="hero-copy reveal reveal-delay-2 relative mt-6 max-w-xl text-base leading-relaxed text-cream/92 sm:text-lg">
            Dos cabañas independientes en Los Álamos 248: El Tala y Los Molles.
            Pileta, parrilla, Wi-Fi y cochera cubierta, al pie de los Comechingones.
          </p>
        </div>

        <div className="reveal reveal-delay-3 relative mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#reservar" className="min-h-12 w-full sm:w-auto">
            Consultar disponibilidad
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
          <Button
            href={buildWhatsAppUrl()}
            variant="whatsapp"
            external
            className="w-full sm:w-auto"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Reservar por WhatsApp
          </Button>
        </div>

        <ul className="reveal reveal-delay-3 relative mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {chips.map((chip) => (
            <li
              key={chip.label}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cream/25 bg-night/55 px-3 text-sm backdrop-blur-sm"
            >
              <Icon name={chip.icon} className="h-4 w-4 text-sand" />
              {chip.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: "users" as const, label: "2 cabañas" },
    { icon: "snowflake" as const, label: "Aire frío / calor" },
    { icon: "car" as const, label: "Cochera cubierta" },
    { icon: "pin" as const, label: "Los Álamos 248" },
  ];

  return (
    <section
      aria-label="Datos clave del alojamiento"
      className="border-y border-ink/10 bg-linen"
    >
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-ink/10 sm:grid-cols-4">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex min-h-20 items-center gap-3 bg-linen px-5 py-4"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-brick">
              <Icon name={item.icon} />
            </span>
            <span className="text-sm font-medium text-ink">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
