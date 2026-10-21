import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatWhatsApp } from "@/components/FloatWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Manifesto } from "@/components/sections/Manifesto";
import { Benefits } from "@/components/sections/Benefits";
import { Differentials } from "@/components/sections/Differentials";
import { Plans } from "@/components/sections/Plans";
import { Studio } from "@/components/sections/Studio";
import { Coach } from "@/components/sections/Coach";
import { Reviews } from "@/components/sections/Reviews";
import { Trial } from "@/components/sections/Trial";
import { Location } from "@/components/sections/Location";
import { Instagram } from "@/components/sections/Instagram";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { faqJsonLd } from "@/lib/jsonld";

/**
 * Mesma arquitetura da landing da Quilograma: prova (fatos e benefícios),
 * oferta (diferenciais e planos), confiança (studio e Bárbara) e conversão
 * (aula experimental, localização e CTA final).
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Manifesto />
        <Benefits />
        <Differentials />
        <Plans />
        <Studio />
        <Coach />
        <Reviews />
        <Trial />
        <Location />
        <Instagram />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatWhatsApp />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />
    </>
  );
}
