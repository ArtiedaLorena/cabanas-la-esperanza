import type { ReactNode } from "react";

type IconProps = {
  name:
    | "wifi"
    | "users"
    | "snowflake"
    | "car"
    | "pool"
    | "grill"
    | "kitchen"
    | "pin"
    | "whatsapp"
    | "instagram"
    | "phone"
    | "mail"
    | "arrow"
    | "check"
    | "menu"
    | "close"
    | "calendar"
    | "mountain"
    | "star";
  className?: string;
};

const paths: Record<IconProps["name"], ReactNode> = {
  wifi: (
    <>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <path d="M12 20h.01" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 3v18" />
      <path d="M8 7l4-4 4 4" />
      <path d="M16 17l-4 4-4-4" />
      <path d="m4 12 16 0" />
    </>
  ),
  car: (
    <>
      <path d="M5 17h14v-5H5z" />
      <path d="M7 12 8.5 7h7L17 12" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
    </>
  ),
  pool: (
    <>
      <path d="M2 16c1.5-1 3.5-1 5 0s3.5 1 5 0 3.5-1 5 0 3.5 1 5 0" />
      <path d="M2 20c1.5-1 3.5-1 5 0s3.5 1 5 0 3.5-1 5 0 3.5 1 5 0" />
      <path d="M6 6h.01" />
      <path d="M10 4h.01" />
      <path d="M14 6h.01" />
      <path d="M18 4h.01" />
    </>
  ),
  grill: (
    <>
      <path d="M4 10h16" />
      <path d="M6 10c0 4 2 8 6 8s6-4 6-8" />
      <path d="M8 22h8" />
      <path d="M12 18v4" />
    </>
  ),
  kitchen: (
    <>
      <path d="M3 10h18v10H3z" />
      <path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
      <path d="M7 15h4" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  whatsapp: (
    <path d="M20 11.5A8.5 8.5 0 0 1 7.4 18.8L4 20l1.3-3.3A8.5 8.5 0 1 1 20 11.5Zm-8.3 4.4c2.2 0 4.1-1.5 4.7-3.6.1-.3 0-.5-.2-.6l-1.7-.8c-.2-.1-.5 0-.6.2l-.7 1c-.1.2-.4.2-.6.1-1-.4-1.8-1.2-2.2-2.2-.1-.2 0-.5.1-.6l1-.7c.2-.1.3-.4.2-.6l-.8-1.7c-.1-.2-.4-.3-.6-.2-2.1.6-3.6 2.5-3.6 4.7 0 2.7 2.3 5 5 5Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 7 9-7" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </>
  ),
  mountain: (
    <>
      <path d="m3 20 7-12 4 7 2-3 5 8Z" />
      <path d="M10 8 12 5l2 3" />
    </>
  ),
  star: (
    <path d="m12 3 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8Z" />
  ),
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
