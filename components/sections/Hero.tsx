import Image from "next/image";
import { hero, waMessages, business } from "@/content/site";
import { photos, alts, logos } from "@/lib/photos";
import { Eyebrow } from "../ui/Eyebrow";
import { WhatsAppLink } from "../ui/WhatsAppLink";
import { WhatsAppGlyph } from "../ui/icons";

export function Hero() {
  return (
    <section className="hero" id="top">
      {/* No celular a foto cobre o fundo; no desktop fica na metade direita,
          porque o original tem só ~800 px de largura e esticaria em tela cheia. */}
      <div className="hero-bg">
        {/* LCP da página: carrega com prioridade e sem lazy. */}
        <Image src={photos.hero} alt={alts.hero} priority placeholder="blur" sizes="(max-width: 900px) 100vw, 50vw" />
      </div>

      <div className="shell hero-inner">
        {/* Logo sobre área escura e acima do mínimo de 140 px — guia §01. */}
        <Image className="hero-logo" src={logos.full} alt={business.legalName} width={200} priority unoptimized />

        <Eyebrow>{hero.eyebrow}</Eyebrow>

        <h1 className="disp">
          {hero.headline.plain}
          <br />
          <em>{hero.headline.hot}</em>
        </h1>

        <p className="sub">{hero.sub}</p>

        <div className="hero-cta">
          <WhatsAppLink className="btn big" message={waMessages.hero}>
            <WhatsAppGlyph />
            {hero.ctaPrimary}
          </WhatsAppLink>
          <a className="btn ghost big" href="#agendar">
            <span>{hero.ctaSecondary}</span>
          </a>
        </div>

        <p className="hero-note">
          <i className="dash" aria-hidden="true" />
          {hero.note}
        </p>
      </div>
    </section>
  );
}
