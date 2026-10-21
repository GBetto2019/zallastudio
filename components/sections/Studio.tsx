import Image from "next/image";
import { studio } from "@/content/site";
import { photos, alts } from "@/lib/photos";
import { Eyebrow } from "../ui/Eyebrow";

/** Fotos reais das turmas — mostram o tamanho do grupo melhor que qualquer texto. */
const gallery = [photos.turma1, photos.turma2, photos.turma3];
const galleryAlts = [alts.turma1, alts.turma2, alts.turma3];

export function Studio() {
  return (
    <section className="section" id="studio">
      <div className="shell struct">
        <div>
          <Eyebrow>{studio.eyebrow}</Eyebrow>
          <h2 className="disp struct-title">{studio.title}</h2>
          <ul className="dash-list">
            {studio.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="gal">
          {gallery.map((src, i) => (
            <div className="shot" key={galleryAlts[i]}>
              <Image src={src} alt={galleryAlts[i]} placeholder="blur" sizes="(max-width: 900px) 31vw, 20vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
