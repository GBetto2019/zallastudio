import { reviews, reviewsSection } from "@/content/site";
import { Eyebrow } from "../ui/Eyebrow";

export function Reviews() {
  // Sem depoimento real, a seção não aparece (ver `reviews` em site.ts).
  if (reviews.length === 0) return null;

  return (
    <section className="section alt">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>{reviewsSection.eyebrow}</Eyebrow>
          <h2 className="disp">{reviewsSection.title}</h2>
        </div>

        {/* No mobile vira carrossel com scroll-snap (ver reviews.css). */}
        <div className="reviews">
          {reviews.map((r) => (
            <div className="review" key={r.author}>
              <div className="stars" aria-label={`${r.stars} de 5 estrelas`}>
                <span aria-hidden="true">{"★".repeat(r.stars)}</span>
              </div>
              <q>{r.text}</q>
              <div className="who">
                <div className="av" aria-hidden="true">
                  {r.author.charAt(0)}
                </div>
                <div>
                  <b>{r.author}</b>
                  <span>{r.since}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
