import { Benefits } from "./components/Benefits";
import { BookingForm } from "./components/BookingForm";
import { BookingProcess } from "./components/BookingProcess";
import { FAQ } from "./components/FAQ";
import { FinalCTA, Footer } from "./components/FinalCTA";
import { Gallery } from "./components/Gallery";
import { Hero, TrustBar } from "./components/Hero";
import { JsonLd } from "./components/JsonLd";
import { Location } from "./components/Location";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Surroundings } from "./components/Surroundings";
import { StickyMobileCTA, WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <JsonLd />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-cream focus:px-4 focus:py-2"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <TrustBar />
        <Benefits />
        <Services />
        <Gallery />
        <Surroundings />
        <BookingProcess />
        <BookingForm />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </>
  );
}
