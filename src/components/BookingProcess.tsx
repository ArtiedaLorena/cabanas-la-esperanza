import { bookingSteps } from "../data/site";
import { Eyebrow, Section, SectionTitle } from "./Section";

export function BookingProcess() {
  return (
    <Section className="pt-10 pb-16 sm:pt-12 sm:pb-24">
      <div className="max-w-2xl">
        <Eyebrow>Cómo reservar</Eyebrow>
        <SectionTitle>Tres pasos. Sin plataformas de por medio.</SectionTitle>
        <p className="mt-4 text-ink-soft">
          No hay reserva automática ni pagos en el sitio. La consulta llega directo
          por WhatsApp y se confirma con la administración.
        </p>
      </div>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {bookingSteps.map((step) => (
          <li key={step.n} className="rounded-3xl bg-night p-6 text-cream">
            <span className="font-serif text-3xl text-sand">{step.n}</span>
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-cream/80">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
