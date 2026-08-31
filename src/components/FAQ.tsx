import { useId, useState } from "react";
import { faqs } from "../data/site";
import { Eyebrow, Section, SectionTitle } from "./Section";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <SectionTitle>Lo que suelen consultar antes de reservar</SectionTitle>
          <p className="mt-4 text-ink-soft">
            Si no está acá, escribinos por WhatsApp.
          </p>
        </div>
        <div className="divide-y divide-ink/10 rounded-3xl border border-ink/10 bg-white">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.q}
              item={item}
              open={open === index}
              onToggle={() => setOpen(open === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function FAQItem({
  item,
  open,
  onToggle,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div>
      <h3>
        <button
          id={buttonId}
          type="button"
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-ink"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {item.q}
          <span className="text-brick" aria-hidden="true">
            {open ? "–" : "+"}
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
        <p className="px-5 pb-5 text-sm text-ink-soft">{item.a}</p>
      </div>
    </div>
  );
}
