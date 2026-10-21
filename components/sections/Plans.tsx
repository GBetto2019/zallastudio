import { plans, plansSection, waMessages } from "@/content/site";
import { Eyebrow } from "../ui/Eyebrow";
import { Icon } from "../ui/icons";
import { WhatsAppLink } from "../ui/WhatsAppLink";

/**
 * Tabela de planos no formato da arte do studio: cada plano é um cartão e
 * cada frequência é uma linha clicável. A mensagem do WhatsApp leva o plano e
 * a frequência — a Bárbara recebe o lead já sabendo o que a pessoa quer.
 */
export function Plans() {
  return (
    <section className="section alt" id="planos">
      <div className="shell">
        <div className="section-head">
          <Eyebrow>{plansSection.eyebrow}</Eyebrow>
          <h2 className="disp">{plansSection.title}</h2>
          <p>{plansSection.text}</p>
        </div>

        <div className="plans">
          {plans.map((plan) => (
            <article className={plan.wide ? "plan wide" : "plan"} key={plan.id}>
              <div className="plan-head">
                <span className="plan-ic">
                  <Icon name={plan.icon} />
                </span>
                <div>
                  <span className="kicker">{plan.kicker}</span>
                  <h3 className="disp pname">{plan.name}</h3>
                </div>
                {plan.badge && <span className="badge">★ {plan.badge}</span>}
              </div>

              <p className="pdesc">{plan.tagline}</p>

              <ul className="tiers">
                {plan.tiers.map((tier) => {
                  const label = `${plan.name} — ${tier.freq} por semana`;
                  return (
                    <li key={tier.freq}>
                      <WhatsAppLink
                        className="tier"
                        message={waMessages.plan(label)}
                        asButton={false}
                        aria-label={`Plano ${label}, R$ ${tier.price}${plan.period ? " por mês" : ""}. Falar no WhatsApp`}
                      >
                        <span className="freq">
                          <b>{tier.freq}</b> por semana
                        </span>
                        <span className="tprice">
                          <small>R$</small> {tier.price}
                          <small>,00</small>
                          {plan.period && <em>{plan.period}</em>}
                        </span>
                      </WhatsAppLink>
                    </li>
                  );
                })}
              </ul>

              <p className="pnote">{plan.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
