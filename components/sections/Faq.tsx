import { faq, faqSection } from "@/content/site";
import { Eyebrow } from "../ui/Eyebrow";

/**
 * Accordion sem JavaScript: `name` compartilhado faz o próprio HTML abrir um
 * <details> por vez, e o teclado funciona de graça.
 */
export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="shell">
        <div className="section-head center">
          <Eyebrow centered>{faqSection.eyebrow}</Eyebrow>
          <h2 className="disp">{faqSection.title}</h2>
        </div>

        <div className="faq">
          {faq.map((item) => (
            <details className="qa" name="faq" key={item.q}>
              <summary>{item.q}</summary>
              <div className="ans">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
