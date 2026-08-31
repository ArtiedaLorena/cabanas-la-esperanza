import { useEffect, useState } from "react";
import { navLinks, site } from "../data/site";
import { cn } from "../lib/cn";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-cream/95 shadow-sm backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:h-[4.75rem] sm:px-8 lg:px-10"
        aria-label="Principal"
      >
        <a href="#inicio" className="flex min-h-11 items-center gap-2.5" aria-label="Cabañas La Esperanza, Villa Larca">
          <span
            className={cn(
              "flex h-11 w-14 shrink-0 items-center justify-center rounded-xl px-1",
              scrolled || open ? "bg-transparent" : "bg-cream/95 shadow-sm",
            )}
          >
            <Logo variant="mark" className="h-8 w-auto" />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-serif text-lg sm:text-xl",
                scrolled || open ? "text-ink" : "text-cream drop-shadow-sm",
              )}
            >
              La Esperanza
            </span>
            <span
              className={cn(
                "block text-[0.65rem] uppercase tracking-[0.18em]",
                scrolled || open ? "text-ink-soft" : "text-cream/75",
              )}
            >
              Villa Larca
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  scrolled || open ? "text-ink-soft hover:text-ink" : "text-cream/85 hover:text-cream",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href="#reservar" className="hidden min-h-11 px-5 sm:inline-flex">
            Consultar disponibilidad
          </Button>
          <Button
            href={buildWhatsAppUrl()}
            variant="whatsapp"
            external
            className="min-h-11 px-4 sm:hidden"
            ariaLabel="Reservar por WhatsApp"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            WhatsApp
          </Button>
          <button
            type="button"
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full lg:hidden",
              scrolled || open
                ? "border border-ink/10 bg-cream/80 text-ink"
                : "border border-cream/30 bg-night/30 text-cream",
            )}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-ink/10 bg-cream lg:hidden"
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex min-h-12 items-center rounded-xl px-3 text-base text-ink hover:bg-linen"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button href="#reservar" className="w-full" onClick={() => setOpen(false)}>
              Consultar disponibilidad
            </Button>
          </li>
          <li>
            <p className="px-3 pt-3 text-sm text-ink-soft">{site.address.full}</p>
          </li>
        </ul>
      </div>
    </header>
  );
}
