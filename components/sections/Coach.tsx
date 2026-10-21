import Image from "next/image";
import { coach } from "@/content/site";
import { photos, alts } from "@/lib/photos";
import { Eyebrow } from "../ui/Eyebrow";

/** Studio de uma profissional só: no lugar da grade de equipe, um perfil completo. */
export function Coach() {
  return (
    <section className="section alt" id="sobre">
      <div className="shell coach">
        <div className="coach-media">
          <Image src={photos.perfil} alt={alts.perfil} placeholder="blur" sizes="(max-width: 900px) 92vw, 42vw" />
        </div>

        <div>
          <Eyebrow>{coach.eyebrow}</Eyebrow>
          <h2 className="disp coach-name">{coach.name}</h2>
          <p className="coach-role">{coach.role}</p>

          <div className="coach-bio">
            {coach.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ul className="dash-list coach-creds">
            {coach.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
