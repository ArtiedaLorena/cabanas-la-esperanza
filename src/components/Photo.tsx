import type { ImgHTMLAttributes } from "react";
import { photoFallback, photoSrc } from "../lib/images";
import { cn } from "../lib/cn";

type PhotoProps = {
  slug: string;
  alt: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "srcSet" | "width" | "height">;

export function Photo({
  slug,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px",
  className,
  imgClassName,
  width = 640,
  height = 800,
  priority = false,
  ...rest
}: PhotoProps) {
  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet={`${photoSrc(slug, "sm")} 480w, ${photoSrc(slug)} 1600w`}
        sizes={sizes}
      />
      <img
        src={photoFallback(slug)}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className={cn("h-full w-full object-cover", imgClassName)}
        {...rest}
      />
    </picture>
  );
}
