export const site = {
  name: "Cabañas La Esperanza",
  shortName: "La Esperanza",
  tagline: "Descansá en Villa Larca, al pie de las sierras",
  url: "https://cabanaslaesperanza.com.ar",
  locale: "es_AR",
  description:
    "Complejo de cabañas en Villa Larca, San Luis. Varias unidades independientes, pileta, parrilla, Wi-Fi, aire frío/calor y cochera cubierta. Reservá por WhatsApp.",
  instagram: {
    handle: "la_esperanza_alquiler",
    url: "https://www.instagram.com/la_esperanza_alquiler/",
  },
  contact: {
    phoneDisplay: "11 3393-9545",
    phoneTel: "+541133939545",
    whatsapp: "5491133939545",
    email: "debora9807@hotmail.com",
  },
  address: {
    street: "San Martín 973",
    locality: "Villa Larca",
    region: "San Luis",
    country: "Argentina",
    postalCode: "D5883",
    full: "San Martín 973, Villa Larca, San Luis, Argentina",
    lat: -32.6177721,
    lng: -64.9759724,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=San+Mart%C3%ADn+973,+Villa+Larca,+San+Luis,+Argentina",
    embedUrl:
      "https://www.google.com/maps?q=San+Mart%C3%ADn+973,+Villa+Larca,+San+Luis,+Argentina&hl=es&z=16&output=embed",
  },
  capacity: 6,
  bookingGuestsMax: 12,
  beds: {
    matrimonial: 1,
    individual: 4,
  },
  municipalSource:
    "https://municipalidadvillalarca.com/dondealojarse/",
} as const;

export const navLinks = [
  { href: "#cabanas", label: "Las cabañas" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#entorno", label: "Qué hacer" },
  { href: "#reservar", label: "Reservar" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#faq", label: "FAQ" },
] as const;

export const gallery = [
  {
    slug: "pileta-sierras",
    alt: "Pileta con vista a las Sierras de Comechingones en Cabañas La Esperanza, Villa Larca",
    caption: "Pileta con vista a las sierras",
  },
  {
    slug: "cabana-galeria",
    alt: "Cabaña con galería, jardín y montañas de fondo en Villa Larca",
    caption: "Cabaña y jardín",
  },
  {
    slug: "cabana-cochera",
    alt: "Cabaña con cochera cubierta en La Esperanza, Villa Larca",
    caption: "Cochera cubierta",
  },
  {
    slug: "cabana-parrilla",
    alt: "Patio con parrilla de ladrillo en Cabañas La Esperanza",
    caption: "Patio y parrilla",
  },
  {
    slug: "quincho-parrilla",
    alt: "Quincho con parrilla cubierta y techo de madera en Cabañas La Esperanza",
    caption: "Quincho para el asado",
  },
  {
    slug: "cabana-cartel",
    alt: "Cartel de madera de Cabañas La Esperanza en San Martín 973, Villa Larca",
    caption: "San Martín 973",
  },
  {
    slug: "complejo-pileta",
    alt: "Vista del predio de La Esperanza con pileta y cabañas en Villa Larca",
    caption: "El predio",
  },
  {
    slug: "sierras-comechingones",
    alt: "Sierras de los Comechingones vistas desde Villa Larca, San Luis",
    caption: "Las sierras",
  },
  {
    slug: "dique-entorno",
    alt: "Paisaje de dique y sierras en el entorno de Villa Larca, San Luis",
    caption: "Naturaleza cerca",
  },
  {
    slug: "atardecer-luces",
    alt: "Atardecer con luces en el jardín de Cabañas La Esperanza, Villa Larca",
    caption: "Atardecer en el jardín",
  },
  {
    slug: "entrada-principal",
    alt: "Puerta de entrada de una cabaña en La Esperanza, Villa Larca",
    caption: "Entrada",
  },
  {
    slug: "cabana-madera-pileta",
    alt: "Cabaña con pileta en La Esperanza, Villa Larca",
    caption: "Cabaña y pileta",
  },
] as const;

export const amenities = [
  {
    title: "Capacidad por unidad",
    text: "Hay cabañas habilitadas para hasta 6 personas. Si son más, consultá por más de una unidad.",
  },
  {
    title: "Cocina equipada",
    text: "Cocina, heladera, vajilla y termotanque para que te sientas como en casa.",
  },
  {
    title: "Aire frío / calor",
    text: "Climatización todo el año, en un destino de sierras con noches frescas.",
  },
  {
    title: "Wi-Fi",
    text: "Conexión para trabajar remoto o compartir las fotos del viaje.",
  },
  {
    title: "Pileta",
    text: "Piscina en el predio, con vista abierta a las Sierras de Comechingones.",
  },
  {
    title: "Parrilla y quincho",
    text: "Asador de ladrillo y espacio cubierto para el asado, sin apuro.",
  },
  {
    title: "Cochera cubierta",
    text: "Lugar para dejar el auto protegido, a metros de las cabañas.",
  },
  {
    title: "TV satelital",
    text: "Directv / TV por cable disponible de forma opcional. Consultá al reservar.",
  },
] as const;

export const benefits = [
  {
    title: "Ubicación serrana, sin ruido de ciudad",
    text: "Villa Larca está al pie de los Comechingones: un pueblo chico, cielo limpio y noches tranquilas.",
  },
  {
    title: "Todo lo necesario para quedarte",
    text: "Cabañas climatizadas, cocina, Wi-Fi, pileta, parrilla y cochera. Llegás y te instalás.",
  },
  {
    title: "Base ideal para conocer la zona",
    text: "Cerca del Chorro de San Ignacio, el Dique Piscu Yaco y a unos 35 km de Villa de Merlo.",
  },
  {
    title: "Reserva directa y simple",
    text: "Sin plataformas ni comisiones extra. Escribinos por WhatsApp y coordinamos fechas.",
  },
] as const;

export const bookingSteps = [
  {
    n: "01",
    title: "Consultá fechas",
    text: "Completá el formulario o escribinos por WhatsApp con ingreso, egreso y cantidad de personas.",
  },
  {
    n: "02",
    title: "Confirmamos disponibilidad",
    text: "Te respondemos con la disponibilidad de las cabañas y los detalles de la estadía.",
  },
  {
    n: "03",
    title: "Reservá tu lugar",
    text: "Acordamos la reserva de forma directa. Sin pasarelas de pago en esta página.",
  },
] as const;

export const places = [
  {
    slug: "chorro-san-ignacio",
    title: "Chorro de San Ignacio",
    tag: "Cascada · a unos 3 km",
    text: "Cascada de unos 25 metros, senderos y arroyo. Se llega por Ruta Provincial 1, al sur del pueblo; desde el complejo municipal hay una caminata señalizada. Paseos, trekking y baños en el arroyo.",
    alt: "Chorro de San Ignacio, cascada en Villa Larca, San Luis",
    credit: "Tripin",
  },
  {
    slug: "laguna-milagrosa",
    title: "Laguna Milagrosa",
    tag: "Circuito del Chorro",
    text: "A unos 400 metros del Chorro, bordeando el arroyo. Una olla de agua clara en el mismo sendero hacia la sierra.",
    alt: "Laguna Milagrosa en el circuito del Chorro de San Ignacio, Villa Larca",
    credit: "Un paraíso prop",
  },
  {
    slug: "cueva-del-indio",
    title: "Cueva del Indio",
    tag: "Circuito del Chorro",
    text: "Formación natural en el recorrido del Chorro, vinculada a la presencia comechingona en la zona. Se llega caminando por el arroyo.",
    alt: "Cueva del Indio en las sierras de Villa Larca, San Luis",
    credit: "Jolucho Merlo",
  },
  {
    slug: "dique-piscu-yaco",
    title: "Dique Piscu Yaco",
    tag: "Embalse · Cortaderas y Villa Larca",
    text: "Playas en el embalse y arroyo de agua clara, entre Cortaderas y Villa Larca. Un clásico de la Costa de los Comechingones para pasar el día.",
    alt: "Dique Piscu Yaco con las Sierras de Comechingones de fondo",
    credit: "Visita San Luis",
  },
  {
    slug: "cascada-esmeralda",
    title: "Cascada Esmeralda",
    tag: "Cortaderas · trekking",
    text: "En la Quebrada de Villa Elena, Cortaderas. Salto de unos 9 metros con una hoya verdosa. Se llega con una caminata de unos 90 minutos por el arroyo, de dificultad baja a moderada.",
    alt: "Cascada Esmeralda en Cortaderas, San Luis",
    credit: "Red Turismo Argentina",
  },
  {
    slug: "quebrada-del-tala",
    title: "Quebrada del Tala y miradores",
    tag: "Vistas al valle",
    text: "Miradores con vista a la Quebrada del Tala y al Valle de Concarán. En la zona también está Piedra de Luz, una formación rocosa sobre la sierra.",
    alt: "Quebrada del Tala en las Sierras de Comechingones, Villa Larca",
    credit: "El Corredor Noticias",
  },
] as const;

export const morePlaces = [
  {
    title: "Museo Inti y el pueblo",
    text: "En el centro: plaza, iglesia y paseo de artesanos. También está el Museo Inti, de tema paleontológico y arqueológico.",
  },
  {
    title: "Villa de Merlo",
    text: "A unos 35 km. Gastronomía, servicios y más movimiento, a un rato en auto desde un pueblo más tranquilo.",
  },
] as const;

export const activities = [
  "Caminatas y trekking",
  "Cabalgatas",
  "Cicloturismo",
  "Baños en arroyo y dique",
  "Observación de aves",
  "Fotografía de naturaleza",
] as const;

export const faqs = [
  {
    q: "¿Cómo puedo reservar?",
    a: "La reserva se hace de forma directa. Completá el formulario de esta página o escribinos por WhatsApp al 11 3393-9545 con las fechas y la cantidad de personas. Te confirmamos disponibilidad.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "En San Martín 973, Villa Larca, San Luis, al pie de las Sierras de los Comechingones. Podés abrir la ubicación en Google Maps desde esta página.",
  },
  {
    q: "¿Cuántas personas entran?",
    a: "Hay varias cabañas. La capacidad depende de cada una: algunas entran hasta 6 personas. Contanos cuántos son y te proponemos la que mejor calce, o más de una si hace falta.",
  },
  {
    q: "¿Puedo reservar más de una cabaña?",
    a: "Sí. Contanos cuántas personas viajan y te confirmamos disponibilidad de las cabañas que hagan falta.",
  },
  {
    q: "¿Qué incluye el alojamiento?",
    a: "Wi-Fi, cocina, heladera, vajilla, termotanque, aire frío/calor y cochera cubierta. En el predio hay pileta y parrilla. El TV satelital es opcional.",
  },
  {
    q: "¿Hay pileta?",
    a: "Sí. Hay pileta en el predio, con vista a las Sierras de Comechingones.",
  },
  {
    q: "¿Hay Wi-Fi y cochera?",
    a: "Sí. Las cabañas tienen Wi-Fi y hay cochera cubierta.",
  },
  {
    q: "¿Cómo se informan las tarifas?",
    a: "Las tarifas varían según temporada y cantidad de huéspedes. Las consultamos al confirmar fechas.",
  },
  {
    q: "¿Qué hay cerca?",
    a: "Están en el pueblo. Cerca del Chorro de San Ignacio, el Dique Piscu Yaco y los miradores de las sierras, y a unos 35 km de Villa de Merlo.",
  },
] as const;
