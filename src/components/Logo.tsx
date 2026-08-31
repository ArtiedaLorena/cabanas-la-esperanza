type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
};

const sources = {
  full: {
    src: "/logos/logo-full.webp",
    fallback: "/logos/logo-full.png",
    width: 420,
    height: 251,
  },
  mark: {
    src: "/logos/logo-mark.webp",
    fallback: "/logos/logo-mark.png",
    width: 240,
    height: 99,
  },
} as const;

export function Logo({ variant = "full", className = "h-11 w-auto" }: LogoProps) {
  const asset = sources[variant];

  return (
    <picture>
      <source type="image/webp" srcSet={asset.src} />
      <img
        src={asset.fallback}
        alt={variant === "mark" ? "" : "Cabañas La Esperanza, Villa Larca, San Luis"}
        width={asset.width}
        height={asset.height}
        className={className}
        decoding="async"
      />
    </picture>
  );
}
