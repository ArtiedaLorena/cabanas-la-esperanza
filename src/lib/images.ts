export function photoSrc(slug: string, size: "full" | "sm" = "full") {
  return size === "sm" ? `/images/${slug}-sm.webp` : `/images/${slug}.webp`;
}

export function photoFallback(slug: string) {
  return `/images/${slug}.jpg`;
}
