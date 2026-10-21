import Image from "next/image";
import { instagram, instagramSection } from "@/content/site";
import { photos, alts } from "@/lib/photos";
import { Eyebrow } from "../ui/Eyebrow";
import { InstagramGlyph } from "../ui/icons";

/**
 * Grade estática linkada ao perfil. A API oficial do Instagram exige app review
 * e um token que expira — não compensa numa LP.
 * TODO(dados-reais): trocar por 6 posts reais do perfil.
 */
const grid = (["forca", "turma2", "legpress", "cadeiraLaranja", "turma3", "hero"] as const).map((key) => ({
  src: photos[key],
  alt: alts[key],
}));

export function Instagram() {
  return (
    <section className="section">
      <div className="shell">
        <div className="ig-head">
          <div>
            <Eyebrow>{instagramSection.eyebrow}</Eyebrow>
            <h2 className="disp ig-handle">
              {instagram.handle}
            </h2>
          </div>
          <a className="btn" href={instagram.url} target="_blank" rel="noopener">
            <span>
              <InstagramGlyph />
              {instagramSection.cta}
            </span>
          </a>
        </div>

        <div className="ig-grid">
          {grid.map((post, i) => (
            <a key={i} href={instagram.url} target="_blank" rel="noopener" aria-label={`Ver no Instagram: ${post.alt}`}>
              <Image src={post.src} alt="" placeholder="blur" sizes="(max-width: 820px) 33vw, 16vw" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
