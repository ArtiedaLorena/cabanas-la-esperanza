import { benefits, site } from "../data/site";
import { Eyebrow, Section, SectionTitle } from "./Section";
import { Icon } from "./Icon";
import { Photo } from "./Photo";

export function Benefits() {
  return (
    <Section id="cabanas" className="py-16 sm:py-24">
      <div className="max-w-2xl">
        <Eyebrow>Las cabañas</Eyebrow>
        <SectionTitle>El Tala y Los Molles</SectionTitle>
        <p className="mt-4 text-ink-soft">
          Dos cabañas independientes en Villa Larca: patio, pileta y sierras de
          fondo. Cada grupo se queda en su unidad, con espacios compartidos para
          el asado y el mate.
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {site.cabins.map((cabin) => (
          <li
            key={cabin.name}
            className="overflow-hidden rounded-[1.6rem] bg-white shadow-[var(--shadow-card)]"
          >
            <Photo
              slug={cabin.slug}
              alt={cabin.alt}
              className="block aspect-[4/5] sm:aspect-[5/4]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="px-5 py-4">
              <h3 className="font-serif text-2xl text-ink">{cabin.name}</h3>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-14 max-w-2xl">
        <Eyebrow>Por qué elegirnos</Eyebrow>
        <SectionTitle>Un predio simple, cuidado y listo para quedarse</SectionTitle>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {benefits.map((benefit, index) => (
          <li
            key={benefit.title}
            className="rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-[var(--shadow-card)]"
          >
            <span className="font-serif text-2xl text-brick">0{index + 1}</span>
            <h3 className="mt-3 text-lg font-semibold text-ink">{benefit.title}</h3>
            <p className="mt-2 text-ink-soft">{benefit.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-start gap-3 rounded-2xl bg-moss/10 px-5 py-4 text-sm text-moss">
        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
        <p>Predio de ejemplo para una landing de reservas. Disponible todo el año.</p>
      </div>
    </Section>
  );
}
