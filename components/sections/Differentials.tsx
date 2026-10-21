import Image from "next/image";
import { differentials } from "@/content/site";
import { photos, alts } from "@/lib/photos";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/icons";

export function Differentials() {
  return (
    <section className="section" id="diferenciais">
      <div className="shell diff">
        <div className="diff-media">
          <Image src={photos.extensora} alt={alts.extensora} placeholder="blur" sizes="(max-width: 900px) 92vw, 38vw" />
          <div className="tag">{differentials.photoTag}</div>
        </div>

        <div>
          <Eyebrow>{differentials.eyebrow}</Eyebrow>
          <h2 className="disp diff-title">
            {differentials.title[0]}
            <br />
            <span className="hot">{differentials.title[1]}</span>
          </h2>
          <p className="diff-body">{differentials.body}</p>

          <div className="pillars">
            {differentials.pillars.map((p) => (
              <div className="pillar" key={p.title}>
                <Icon name={p.icon} className="ic" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
