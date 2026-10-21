import {
  business,
  siteUrl,
  address,
  openingHours,
  instagram,
  whatsappNumber,
  faq,
  plans,
} from "@/content/site";

/**
 * JSON-LD de negócio local. É o que faz o studio aparecer em
 * "personal trainer perto de mim" com endereço e horário.
 * Validar em https://search.google.com/test/rich-results antes do go-live.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ExerciseGym", "LocalBusiness"],
    "@id": `${siteUrl}/#studio`,
    name: business.name,
    legalName: business.legalName,
    description: business.tagline,
    url: siteUrl,
    telephone: `+${whatsappNumber}`,
    ...(business.email ? { email: business.email } : {}),
    image: `${siteUrl}/og.jpg`,
    logo: `${siteUrl}/og.jpg`,
    sameAs: [instagram.url],
    founder: { "@type": "Person", name: business.trainer, jobTitle: "Personal trainer" },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: "BR",
    },
    // Só entra quando houver coordenada confirmada — ver address.geo em site.ts.
    ...(address.geo
      ? { geo: { "@type": "GeoCoordinates", latitude: address.geo.lat, longitude: address.geo.lng } }
      : {}),
    // flatMap porque um dia pode ter mais de um turno e cada turno é uma
    // especificação separada no schema.org. Lista vazia = horário ainda não informado.
    ...(openingHours.length
      ? {
          openingHoursSpecification: openingHours.flatMap((h) =>
            (h.schema ?? []).map((shift) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: shift.days,
              opens: shift.opens,
              closes: shift.closes,
            })),
          ),
        }
      : {}),
    // Uma oferta por frequência: cada linha da tabela de planos tem preço próprio.
    makesOffer: plans.flatMap((plan) =>
      plan.tiers.map((tier) => ({
        "@type": "Offer",
        name: `Plano ${plan.name} — ${tier.freq} por semana`,
        description: plan.tagline,
        price: tier.price,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
      })),
    ),
  };
}

/** FAQPage — habilita o rich result de perguntas na busca. */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
