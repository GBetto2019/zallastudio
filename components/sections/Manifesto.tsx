import Image from "next/image";
import { manifesto } from "@/content/site";
import { photos, alts } from "@/lib/photos";
import { Eyebrow } from "../ui/Eyebrow";

/** As boas-vindas do site Canva viram a voz da marca, numa seção própria. */
export function Manifesto() {
  return (
    <section className="manifesto">
      <div className="hero-bg">
        <Image src={photos.cadeiraLaranja} alt={alts.cadeiraLaranja} placeholder="blur" sizes="(max-width: 900px) 100vw, 45vw" />
      </div>

      <div className="shell">
        <Eyebrow>{manifesto.eyebrow}</Eyebrow>
        <blockquote>
          <p className="disp">
            {manifesto.line1.before}
            <br />
            {manifesto.line1.break}
            <span className="hot">{manifesto.line1.hot}</span>
          </p>
          <p className="l2">{manifesto.line2}</p>
          <p className="by">
            <i className="dash" aria-hidden="true" />
            {manifesto.caption}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
