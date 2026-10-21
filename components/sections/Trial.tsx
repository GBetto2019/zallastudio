import Image from "next/image";
import { trial, waMessages } from "@/content/site";
import { photos, alts } from "@/lib/photos";
import { Eyebrow } from "../ui/Eyebrow";
import { WhatsAppLink } from "../ui/WhatsAppLink";
import { Check, WhatsAppGlyph } from "../ui/icons";

/** Agendamento direto no WhatsApp — o studio não usa agenda online. */
export function Trial() {
  return (
    <section className="section" id="agendar">
      <div className="shell trial">
        <div className="trial-card">
          <Eyebrow>{trial.eyebrow}</Eyebrow>
          <h2 className="disp trial-title">{trial.title}</h2>
          <span className="trial-dur">
            <span className="dotmin" />
            {trial.duration}
          </span>
          <p>{trial.text}</p>

          <ul className="trial-list">
            {trial.bullets.map((b) => (
              <li key={b}>
                <Check /> {b}
              </li>
            ))}
          </ul>

          <WhatsAppLink className="btn big" message={waMessages.trial}>
            <WhatsAppGlyph />
            {trial.cta}
          </WhatsAppLink>
        </div>

        <div className="trial-media">
          <Image src={photos.polia} alt={alts.polia} placeholder="blur" sizes="(max-width: 900px) 92vw, 40vw" />
        </div>
      </div>
    </section>
  );
}
