import { site } from "../data/site";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Eyebrow, Section, SectionTitle } from "./Section";

export function Location() {
  return (
    <Section id="ubicacion" className="py-16 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Eyebrow>Ubicación</Eyebrow>
          <SectionTitle>San Martín 973, Villa Larca</SectionTitle>
          <p className="mt-4 text-ink-soft">
            En el corazón del pueblo, al pie de las Sierras de los Comechingones,
            departamento Chacabuco, San Luis.
          </p>

          <address className="mt-6 not-italic">
            <p className="font-medium text-ink">{site.name}</p>
            <p className="text-ink-soft">{site.address.full}</p>
          </address>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-4 w-4 text-brick" />
              <a href={`tel:${site.contact.phoneTel}`}>{site.contact.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4 text-brick" />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="instagram" className="h-4 w-4 text-brick" />
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                @{site.instagram.handle}
              </a>
            </li>
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={site.address.mapsUrl} external>
              Abrir en Google Maps
            </Button>
            <Button href={buildWhatsAppUrl()} variant="secondary" external>
              Pedir indicaciones por WhatsApp
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.8rem] border border-ink/10 bg-linen shadow-[var(--shadow-card)]">
          <iframe
            title="Mapa de Cabañas La Esperanza en Villa Larca, San Luis"
            src={site.address.embedUrl}
            className="h-[320px] w-full border-0 sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}
