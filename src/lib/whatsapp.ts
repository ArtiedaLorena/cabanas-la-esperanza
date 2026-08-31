import { site } from "../data/site";

export const defaultWhatsAppMessage =
  "Hola, quiero consultar disponibilidad para Cabañas La Esperanza en Villa Larca.";

export function buildWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function bookingWhatsAppMessage(input: {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  notes: string;
}) {
  const lines = [
    "Hola, quiero consultar disponibilidad en Cabañas La Esperanza (Villa Larca).",
    "",
    `Nombre: ${input.name}`,
    `Teléfono: ${input.phone}`,
    `Ingreso: ${input.checkIn}`,
    `Egreso: ${input.checkOut}`,
    `Personas: ${input.guests}`,
  ];

  if (input.notes.trim()) {
    lines.push(`Consulta: ${input.notes.trim()}`);
  }

  return lines.join("\n");
}
