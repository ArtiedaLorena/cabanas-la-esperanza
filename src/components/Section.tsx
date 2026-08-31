import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export function Section({
  id,
  children,
  className,
  as: Tag = "section",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "footer" | "header";
}) {
  return (
    <Tag id={id} className={cn("px-5 sm:px-8 lg:px-10", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brick">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-serif text-[2rem] leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
      {children}
    </h2>
  );
}
