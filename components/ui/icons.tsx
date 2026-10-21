import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Check das listas de plano e de agendamento. */
export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true" {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function WhatsAppGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a9.9 9.9 0 00-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20zm4.5-5.8c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 01-1.9-1.2 7.2 7.2 0 01-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5.2-.4v-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a.9.9 0 00-.7.3A2.8 2.8 0 006 8.7a4.9 4.9 0 001 2.6 11.2 11.2 0 004.3 3.8 9.5 9.5 0 001.5.5 3.4 3.4 0 001.6.1 2.6 2.6 0 001.7-1.2 2.1 2.1 0 00.2-1.2c-.1-.1-.2-.1-.4-.2z" />
    </svg>
  );
}

export function InstagramGlyph(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Ícones referenciados por nome em `content/site.ts` — assim o conteúdo
 * escolhe o ícone sem importar JSX.
 */
export const namedIcons = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  barbell: <path d="M6 7v10M18 7v10M4 9v6M20 9v6M6 12h12" />,
  pulse: <path d="M3 12h4l2.5-7 4 14 2.5-7H21" />,
  group: (
    <>
      <circle cx="12" cy="8" r="3" />
      <circle cx="5" cy="10" r="2.2" />
      <circle cx="19" cy="10" r="2.2" />
      <path d="M6.5 20c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5M1.5 19c0-2.4 1.6-4.2 3.8-4.4M22.5 19c0-2.4-1.6-4.2-3.8-4.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 12.5l2 2 4-4" />
    </>
  ),
  trend: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  apple: (
    <>
      <path d="M12 7.5c-1.6-1-5-1.1-6.4 1.6S5 16 7.5 19c1.2 1.4 2.6 1.6 4.5.7 1.9.9 3.3.7 4.5-.7 2.5-3 3.3-7.2 1.9-9.9S13.6 6.5 12 7.5z" />
      <path d="M12 7.5c0-2 1-3.6 3-4.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  flame: (
    <path d="M12 21c-3.9 0-7-2.7-7-6.5 0-3.3 2.2-5.4 3.6-7 .4 1.8 1.4 3 2.6 3.5C11 7.5 12.5 4.5 15 3c-.3 2.6.8 4.4 2 6 1.2 1.6 2 3.3 2 5.5 0 3.8-3.1 6.5-7 6.5z" />
  ),
  drop: <path d="M12 3s-6 6.6-6 11a6 6 0 0012 0c0-4.4-6-11-6-11z" />,
  body: (
    <>
      <circle cx="12" cy="4.5" r="2" />
      <path d="M12 7.5v7M6 10.5h12M12 14.5l-3.5 6.5M12 14.5l3.5 6.5" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2M9 9.5h.01M15 9.5h.01" />
    </>
  ),
} as const;

export type IconName = keyof typeof namedIcons;

/** Renderiza um ícone do registro com o traço padrão da página. */
export function Icon({ name, className, strokeWidth = 1.7 }: { name: IconName; className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true">
      {namedIcons[name]}
    </svg>
  );
}
