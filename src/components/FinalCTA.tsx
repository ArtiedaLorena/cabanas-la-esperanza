import { site } from "../data/site";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Photo } from "./Photo";
import { Section } from "./Section";

export function FinalCTA() {
  return (
    <Section className="pb-16 sm:pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-night text-cream">
        <Photo
          slug="complejo-pileta"
          alt="Predio de Cabañas La Esperanza con pileta en Villa Larca"
          className="absolute inset-0 block h-full w-full opacity-40"
          imgClassName="h-full object-cover"
          sizes="100vw"
        />
        <div className="relative px-6 py-14 text-center sm:px-12 sm:py-20">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-sand">
            ¿Listo para reservar?
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            Las cabañas de Villa Larca te están esperando
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/85">
            Consultá fechas ahora. Te respondemos por WhatsApp y coordinamos la
            estadía de forma directa.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="#reservar">Consultar disponibilidad</Button>
            <Button href={buildWhatsAppUrl()} variant="whatsapp" external>
              <Icon name="whatsapp" className="h-4 w-4" />
              Escribir ahora
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-night pb-[calc(7rem+env(safe-area-inset-bottom))] text-cream sm:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <a
            href="#inicio"
            className="inline-flex min-h-11 items-center gap-2.5"
            aria-label="Cabañas La Esperanza, Villa Larca"
          >
            <span className="flex h-11 w-14 shrink-0 items-center justify-center rounded-xl bg-cream/95 px-1">
              <Logo variant="mark" className="h-8 w-auto" />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg text-cream sm:text-xl">
                La Esperanza
              </span>
              <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-cream/75">
                Villa Larca
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-cream/75">
            Cabañas de alquiler en Villa Larca, San Luis. Reserva directa por
            WhatsApp, teléfono o mail.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sand">
            Contacto
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <a href={`tel:${site.contact.phoneTel}`}>{site.contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                Instagram @{site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sand">
            Dirección
          </p>
          <p className="mt-3 text-sm text-cream/80">{site.address.full}</p>
          <a className="mt-3 inline-block text-sm underline" href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">
            Ver en el mapa
          </a>
        </div>
      </div>
      <p className="border-t border-cream/10 px-5 py-2.5 text-center text-xs text-cream/55">
        © {new Date().getFullYear()} {site.name}. Villa Larca, San Luis.
      </p>
    </footer>
  );
}
