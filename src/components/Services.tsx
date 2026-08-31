import { amenities } from "../data/site";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Photo } from "./Photo";
import { Eyebrow, Section, SectionTitle } from "./Section";

const amenityIcons = [
  "users",
  "kitchen",
  "snowflake",
  "wifi",
  "pool",
  "grill",
  "car",
  "star",
] as const;

export function Services() {
  return (
    <Section id="servicios" className="py-16 sm:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Las cabañas</Eyebrow>
          <SectionTitle>Unidades independientes, predio compartido</SectionTitle>
          <p className="mt-4 text-ink-soft">
            El complejo tiene varias cabañas. Cada una es un alojamiento aparte,
            con pileta, parrilla y jardín en común.
          </p>
          <p className="mt-3 text-sm text-ink-soft">
            La capacidad y las tarifas varían según la cabaña, la temporada y la
            cantidad de huéspedes. Las confirmamos al consultar fechas.
          </p>
          <Button href="#reservar" className="mt-6">
            Consultar las cabañas
          </Button>
        </div>

        <div className="overflow-hidden rounded-[1.6rem] shadow-[var(--shadow-lift)]">
          <Photo
            slug="cabana-galeria"
            alt="Cabaña con galería y jardín en La Esperanza, Villa Larca"
            className="block aspect-[4/5] sm:aspect-[5/4]"
            sizes="(max-width: 1024px) 100vw, 540px"
          />
        </div>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {amenities.map((item, index) => (
          <li key={item.title} className="rounded-3xl bg-linen p-5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cream text-brick">
              <Icon name={amenityIcons[index]} />
            </span>
            <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
