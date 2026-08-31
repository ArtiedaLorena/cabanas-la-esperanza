import { useEffect, useId, useState } from "react";
import { gallery } from "../data/site";
import { Eyebrow, Section, SectionTitle } from "./Section";
import { Photo } from "./Photo";
import { Icon } from "./Icon";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((value) => (value === null ? value : (value + 1) % gallery.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((value) =>
          value === null ? value : (value - 1 + gallery.length) % gallery.length,
        );
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <Section id="galeria" className="pt-16 pb-8 sm:pt-24 sm:pb-10">
      <div className="max-w-2xl">
        <Eyebrow>Galería</Eyebrow>
        <SectionTitle>El lugar, tal como es</SectionTitle>
        <p className="mt-4 text-ink-soft">
          Fotos reales del predio, las cabañas, la pileta y el entorno de Villa Larca.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((item, index) => (
          <li key={item.slug} className="min-w-0">
            <button
              type="button"
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl focus-visible:outline-offset-4"
              onClick={() => setActive(index)}
              aria-label={`Ampliar foto: ${item.caption}`}
            >
              <Photo
                slug={item.slug}
                alt={item.alt}
                className="absolute inset-0 block h-full w-full"
                imgClassName="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-night/70 to-transparent p-3 text-left text-sm text-cream">
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-night/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream text-ink"
            aria-label="Cerrar galería"
            onClick={() => setActive(null)}
          >
            <Icon name="close" />
          </button>
          <button
            type="button"
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-cream/90 text-ink sm:left-6"
            aria-label="Foto anterior"
            onClick={(event) => {
              event.stopPropagation();
              setActive((value) =>
                value === null ? value : (value - 1 + gallery.length) % gallery.length,
              );
            }}
          >
            <span className="sr-only">Anterior</span>
            <span aria-hidden="true" className="text-xl">
              ‹
            </span>
          </button>
          <button
            type="button"
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-cream/90 text-ink sm:right-6"
            aria-label="Foto siguiente"
            onClick={(event) => {
              event.stopPropagation();
              setActive((value) => (value === null ? value : (value + 1) % gallery.length));
            }}
          >
            <span className="sr-only">Siguiente</span>
            <span aria-hidden="true" className="text-xl">
              ›
            </span>
          </button>
          <figure
            className="max-h-[85svh] max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Photo
              slug={gallery[active].slug}
              alt={gallery[active].alt}
              className="block max-h-[75svh] overflow-hidden rounded-2xl"
              imgClassName="max-h-[75svh] w-auto mx-auto object-contain"
              sizes="90vw"
            />
            <figcaption id={titleId} className="mt-3 text-center text-cream">
              {gallery[active].caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </Section>
  );
}
