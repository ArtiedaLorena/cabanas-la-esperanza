import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { site } from "../data/site";
import { bookingWhatsAppMessage, buildWhatsAppUrl } from "../lib/whatsapp";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Photo } from "./Photo";
import { Eyebrow, Section, SectionTitle } from "./Section";

const guests = Array.from({ length: site.bookingGuestsMax }, (_, index) => String(index + 1));

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function BookingForm() {
  const minDate = useMemo(() => todayIso(), []);
  const [status, setStatus] = useState<"idle" | "error" | "ready">("idle");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const checkIn = String(data.get("checkIn") ?? "");
    const checkOut = String(data.get("checkOut") ?? "");
    const people = String(data.get("guests") ?? "");
    const notes = String(data.get("notes") ?? "");

    if (!name || !phone || !checkIn || !checkOut || !people) {
      setStatus("error");
      setError("Completá nombre, teléfono, fechas y cantidad de personas.");
      return;
    }

    if (checkOut <= checkIn) {
      setStatus("error");
      setError("La fecha de egreso tiene que ser posterior al ingreso.");
      return;
    }

    const url = buildWhatsAppUrl(
      bookingWhatsAppMessage({
        name,
        phone,
        checkIn,
        checkOut,
        guests: people,
        notes,
      }),
    );

    setStatus("ready");
    setError("");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Section id="reservar" className="py-16 sm:py-24">
      <div className="overflow-hidden rounded-[2rem] bg-linen shadow-[var(--shadow-card)] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative hidden min-h-full lg:block">
          <Photo
            slug="cabana-parrilla"
            alt="Patio y parrilla de Cabañas La Esperanza en Villa Larca"
            className="absolute inset-0 block h-full"
            imgClassName="h-full object-cover"
            sizes="40vw"
          />
          <div className="absolute inset-0 bg-night/25" />
          <p className="absolute bottom-8 left-8 right-8 font-serif text-3xl leading-tight text-cream">
            Contanos tus fechas y te respondemos por WhatsApp.
          </p>
        </div>

        <div className="p-6 sm:p-10">
          <Eyebrow>Reserva directa</Eyebrow>
          <SectionTitle>Consultá disponibilidad</SectionTitle>
          <p className="mt-3 text-ink-soft">
            Este formulario no cobra ni confirma solo. Arma el mensaje y lo abrís
            en WhatsApp para consultar las cabañas con La Esperanza.
          </p>

          <form className="mt-8 grid gap-4" onSubmit={onSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className={inputClass}
                  placeholder="Tu nombre"
                />
              </Field>
              <Field label="Teléfono" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className={inputClass}
                  placeholder="11 0000-0000"
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ingreso" htmlFor="checkIn">
                <input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  required
                  min={minDate}
                  className={inputClass}
                />
              </Field>
              <Field label="Egreso" htmlFor="checkOut">
                <input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  required
                  min={minDate}
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Cantidad de personas" htmlFor="guests">
              <select id="guests" name="guests" required className={inputClass} defaultValue="2">
                {guests.map((value) => (
                  <option key={value} value={value}>
                    {value} {value === "1" ? "persona" : "personas"}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Consulta (opcional)" htmlFor="notes">
              <textarea
                id="notes"
                name="notes"
                rows={3}
                className={`${inputClass} resize-y`}
                placeholder="¿Viajan con niños? ¿Necesitan más de una cabaña? Contanos lo que haga falta."
              />
            </Field>

            {status === "error" ? (
              <p className="text-sm text-brick" role="alert">
                {error}
              </p>
            ) : null}
            {status === "ready" ? (
              <p className="text-sm text-moss" role="status">
                Se abrió WhatsApp con tu consulta. Si no lo ves, permití las ventanas emergentes.
              </p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" className="w-full sm:w-auto">
                Enviar consulta por WhatsApp
                <Icon name="whatsapp" className="h-4 w-4" />
              </Button>
              <Button href={`mailto:${site.contact.email}`} variant="secondary" className="w-full sm:w-auto">
                Escribir al mail
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

const inputClass =
  "min-h-12 w-full rounded-2xl border border-ink/10 bg-cream px-4 text-base text-ink outline-none transition focus:border-brick";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}
