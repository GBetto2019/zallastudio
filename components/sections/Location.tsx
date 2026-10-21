import { address, maps, openingHours, hoursNote, waMessages, business, locationSection } from "@/content/site";
import { Eyebrow } from "../ui/Eyebrow";
import { WhatsAppLink } from "../ui/WhatsAppLink";

export function Location() {
  return (
    <section className="section alt" id="localizacao">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>{locationSection.eyebrow}</Eyebrow>
          <h2 className="disp">{locationSection.title}</h2>
        </div>

        <div className="loc">
          {/* loading="lazy": o mapa não entra no primeiro paint. */}
          <div className="map">
            <iframe
              src={maps.embedUrl}
              title={`Mapa com a localização do ${business.legalName}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="loc-info">
            <div className="loc-block">
              <span className="lbl">Endereço</span>
              <address>
                {address.street}
                <br />
                {address.city} — {address.state} · CEP {address.postalCode}
              </address>
            </div>

            <div className="loc-block">
              <span className="lbl">Horários</span>
              {openingHours.length > 0 && (
                <dl className="hours">
                  {openingHours.map((h) => (
                    <div key={h.label} style={{ display: "contents" }}>
                      <dt>{h.label}</dt>
                      <dd>{h.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <p className="hours-note">{hoursNote}</p>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn" href={maps.directionsUrl} target="_blank" rel="noopener">
                <span>{locationSection.directions}</span>
              </a>
              <WhatsAppLink className="btn ghost" message={waMessages.location}>
                {locationSection.ask}
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
