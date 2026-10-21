import { benefits } from "@/content/site";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/icons";

export function Benefits() {
  return (
    <section className="section alt" id="beneficios">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>{benefits.eyebrow}</Eyebrow>
          <h2 className="disp">{benefits.title}</h2>
          <p>{benefits.text}</p>
        </div>

        <div className="ben-grid">
          {benefits.items.map((b) => (
            <div className="ben" key={b.title}>
              <Icon name={b.icon} className="ic" strokeWidth={1.6} />
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>

        <p className="ben-note">{benefits.note}</p>
      </div>
    </section>
  );
}
