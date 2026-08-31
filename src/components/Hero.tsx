import { buildWhatsAppUrl } from "../lib/whatsapp";
import { Button } from "./Button";
import { Icon } from "./Icon";

const chips = [
  { icon: "users" as const, label: "Varias cabañas" },
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
            srcSet="/images/hero-sm.webp 800w, /images/hero-md.webp 1280w, /images/hero.webp 1536w"
            sizes="100vw"
          />
          <img
            src="/images/hero.jpg"
            alt="Pileta de Cabañas La Esperanza con las sierras de Villa Larca de fondo"
            width={1536}
            height={1024}
            className="h-full w-full object-cover object-[center_38%]"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-night/75 via-night/15 to-night/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/40 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-28 pt-28 sm:px-8 sm:pb-16 lg:justify-center lg:px-10 lg:pb-20">
        <p className="reveal text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sand">
          Villa Larca · San Luis
        </p>
        <h1 className="reveal reveal-delay-1 mt-3 max-w-3xl font-serif text-[2.55rem] leading-[1.05] sm:text-6xl lg:text-[4.4rem]">
          Cabañas La Esperanza,
          <br />
          para descansar en las sierras
        </h1>
        <p className="reveal reveal-delay-2 mt-5 max-w-xl text-base text-cream/88 sm:text-lg">
          Un complejo de cabañas en San Martín 973, para familias y grupos.
          Pileta, parrilla, Wi-Fi y cochera cubierta, al pie de los Comechingones.
        </p>

        <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
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

        <ul className="reveal reveal-delay-3 mt-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {chips.map((chip) => (
            <li
              key={chip.label}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cream/20 bg-night/35 px-3 text-sm backdrop-blur-sm"
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
    { icon: "users" as const, label: "Varias cabañas" },
    { icon: "snowflake" as const, label: "Aire frío / calor" },
    { icon: "car" as const, label: "Cochera cubierta" },
    { icon: "pin" as const, label: "San Martín 973" },
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
