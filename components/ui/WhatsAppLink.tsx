import { waLink } from "@/lib/whatsapp";

type Props = {
  /** Mensagem pré-preenchida — identifica a origem do lead. */
  message: string;
  className?: string;
  children: React.ReactNode;
  /** `.btn` embrulha o conteúdo num <span> que alinha ícone e texto. */
  asButton?: boolean;
  "aria-label"?: string;
};

export function WhatsAppLink({ message, className, children, asButton = true, ...rest }: Props) {
  return (
    <a className={className} href={waLink(message)} target="_blank" rel="noopener" {...rest}>
      {asButton ? <span>{children}</span> : children}
    </a>
  );
}
