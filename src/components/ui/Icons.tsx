import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function ArrowRight(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" {...base} {...props}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" {...base} {...props}>
      <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" {...base} {...props}>
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}

export function Chevron(props: IconProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" {...base} {...props}>
      <path d="m2.5 4.5 3.5 3.5 3.5-3.5" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" {...base} {...props}>
      <path d="m3 8.5 3.2 3.2L13 4.8" />
    </svg>
  );
}

export function Telegram(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M21 4.5 3 11.2l5.6 2 2.2 6.3 3.2-4 5 3.5z" />
      <path d="m8.6 13.2 7.9-5.4-5.7 7" />
    </svg>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.1 3.1z" />
      <path d="M9 8.5c-.4 2.7 3.3 6.4 6 6l.8-1.5-2-1-.9.8c-.8-.3-1.7-1.2-2-2l.8-.9-1-2z" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h.01" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M5 4h3.5l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function LogoMark(props: IconProps) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 7.2c-1.9-1.5-3.8-2.2-5.7-2.2C5.7 5 3.8 7.3 3.8 10.3c0 2.3.9 3.9 1.7 5.9.8 2 1 7.8 3 7.8 2.4 0 1.8-6.2 5.5-6.2s3.1 6.2 5.5 6.2c2 0 2.2-5.8 3-7.8.8-2 1.7-3.6 1.7-5.9C24.2 7.3 22.3 5 19.7 5c-1.9 0-3.8.7-5.7 2.2z" />
      <path d="M9.5 10.8c2.7 2.4 6.3 2.4 9 0" />
    </svg>
  );
}
