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
  const inverted = scrolled || open;

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

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300",
        inverted ? "bg-cream/95 shadow-sm backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.75rem] sm:gap-4 sm:px-8 lg:px-10"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="flex min-h-11 min-w-0 items-center gap-2 sm:gap-2.5"
          aria-label="Cabañas La Esperanza, Villa Larca"
          onClick={() => setOpen(false)}
        >
          <span
            className={cn(
              "flex h-10 w-12 shrink-0 items-center justify-center rounded-xl px-1 sm:h-11 sm:w-14",
              inverted ? "bg-transparent" : "bg-cream/95 shadow-sm",
            )}
          >
            <Logo variant="mark" className="h-7 w-auto sm:h-8" />
          </span>
          <span className="min-w-0 leading-tight">
            <span
              className={cn(
                "block truncate font-serif text-base sm:text-xl",
                inverted ? "text-ink" : "text-cream drop-shadow-sm",
              )}
            >
              La Esperanza
            </span>
            <span
              className={cn(
                "block truncate text-[0.6rem] uppercase tracking-[0.16em] sm:text-[0.65rem] sm:tracking-[0.18em]",
                inverted ? "text-ink-soft" : "text-cream/75",
              )}
            >
              Villa Larca
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap text-[0.8125rem] transition-colors xl:text-sm",
                    inverted ? "text-ink-soft hover:text-ink" : "text-cream/85 hover:text-cream",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#reservar" className="hidden min-h-11 px-5 xl:inline-flex">
            Consultar disponibilidad
          </Button>
          <button
            type="button"
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full lg:hidden",
              inverted
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
        className="max-h-[calc(100svh-4rem-env(safe-area-inset-top))] overflow-y-auto border-t border-ink/10 bg-cream lg:hidden"
      >
        <ul className="flex flex-col gap-1 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
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
            <Button
              href={buildWhatsAppUrl()}
              variant="whatsapp"
              external
              className="w-full"
              onClick={() => setOpen(false)}
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Reservar por WhatsApp
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
