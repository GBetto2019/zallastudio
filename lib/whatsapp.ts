import { whatsappNumber } from "@/content/site";

/**
 * Monta o link do WhatsApp com a mensagem já preenchida.
 * A mensagem muda conforme a origem do clique, então a Bárbara
 * sabe de qual seção veio o lead sem precisar perguntar.
 */
export function waLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
