import type { ReactNode } from "react";
import { cn } from "../lib/cn";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-brick text-cream hover:bg-brick-dark shadow-[0_10px_24px_-12px_rgba(180,72,50,0.9)]",
  secondary:
    "bg-cream/95 text-ink border border-ink/10 hover:bg-white",
  ghost:
    "bg-transparent text-cream border border-cream/40 hover:bg-cream/10",
  whatsapp:
    "bg-[#128C7E] text-white hover:bg-[#0e7a6e]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  external,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium tracking-wide transition-colors duration-200",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
