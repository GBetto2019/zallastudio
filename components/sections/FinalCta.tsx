import Image from "next/image";
import { finalCta, waMessages } from "@/content/site";
import { logos } from "@/lib/photos";
import { WhatsAppLink } from "../ui/WhatsAppLink";
import { WhatsAppGlyph } from "../ui/icons";

export function FinalCta() {
  return (
    <section className="finalcta">
      {/* Símbolo SZ como marca d'água — uso previsto no guia §01. */}
      <Image className="watermark" src={logos.symbol} alt="" aria-hidden="true" unoptimized />
      <div className="shell">
        <h2 className="disp">
          {finalCta.title.before}
          <span className="dark">{finalCta.title.hot}</span>
        </h2>
        <p>{finalCta.text}</p>
        <WhatsAppLink className="btn big" message={waMessages.finalCta}>
          <WhatsAppGlyph />
          {finalCta.button}
        </WhatsAppLink>
      </div>
    </section>
  );
}
