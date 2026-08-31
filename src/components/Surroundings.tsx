import { activities, morePlaces, places } from "../data/site";
import { Photo } from "./Photo";
import { Eyebrow, Section, SectionTitle } from "./Section";

export function Surroundings() {
  return (
    <Section id="entorno" className="pt-8 pb-10 sm:pt-10 sm:pb-12">
      <div className="max-w-2xl">
        <Eyebrow>Qué hacer</Eyebrow>
        <SectionTitle>Lugares y planes en Villa Larca</SectionTitle>
        <p className="mt-4 text-ink-soft">
          El pueblo está al pie de los Comechingones, a unos 35 km de Villa de
          Merlo. Desde las cabañas salís a cascadas, diques, senderos y miradores
          sin largos traslados.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {places.map((place) => (
          <li
            key={place.title}
            className="overflow-hidden rounded-[1.6rem] bg-linen shadow-[var(--shadow-card)]"
          >
            <Photo
              slug={place.slug}
              alt={place.alt}
              className="block aspect-[4/3]"
              sizes="(max-width: 640px) 100vw, 540px"
            />
            <div className="p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brick">
                {place.tag}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-ink">{place.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{place.text}</p>
              <p className="mt-4 text-xs text-ink-soft/80">Foto: {place.credit}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {morePlaces.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.6rem] border border-ink/10 bg-white/70 p-6"
          >
            <h3 className="font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-ink">Qué se puede hacer</h3>
        <p className="mt-2 max-w-2xl text-sm text-ink-soft">
          En Villa Larca y la costa de los Comechingones hay naturaleza y aire
          libre para armar el día.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {activities.map((activity) => (
            <li
              key={activity}
              className="rounded-full bg-linen px-4 py-2 text-sm font-medium text-ink"
            >
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
