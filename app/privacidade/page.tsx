import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business, whatsappNumber, phoneDisplay } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como a ${business.legalName} trata os dados pessoais de quem usa este site, conforme a LGPD.`,
  robots: { index: false, follow: true },
};

/**
 * Exigência da LGPD. O texto cobre o fluxo real do site hoje: não há
 * formulário próprio nem banco de leads — o único canal é o WhatsApp.
 * Revisar com a cliente antes do go-live e atualizar se entrar analytics ou pixel.
 */
export default function Privacidade() {
  // Sem e-mail cadastrado, o canal de privacidade é só o WhatsApp.
  const contact = (
    <>
      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener">
        WhatsApp {phoneDisplay}
      </a>
      {business.email && (
        <>
          {" "}
          ou pelo e-mail <a href={`mailto:${business.email}`}>{business.email}</a>
        </>
      )}
    </>
  );

  return (
    <>
      <Header />
      <main className="section legal-page">
        <div className="shell prose">
          <h1 className="disp">Política de Privacidade</h1>
          <p className="updated">Última atualização: outubro de 2026</p>

          <h2>Quem é o controlador</h2>
          <p>
            {business.legalName}, de {business.trainer}, é o controlador dos dados pessoais tratados a partir deste site.
            Contato para assuntos de privacidade: {contact}.
          </p>

          <h2>Que dados coletamos</h2>
          <p>
            Este site não possui formulário próprio e não mantém banco de dados de visitantes. Você só nos entrega dados pessoais
            quando decide iniciar uma conversa:
          </p>
          <ul>
            <li>
              <strong>WhatsApp</strong> — ao clicar em qualquer botão de WhatsApp, você é levado ao aplicativo com uma mensagem já
              escrita. O envio depende de você. A partir daí valem os termos do WhatsApp (Meta), e passamos a tratar seu nome e
              telefone para responder ao seu contato.
            </li>
            <li>
              <strong>Google Maps</strong> — o mapa da seção de localização é um conteúdo incorporado do Google, que pode registrar
              seu IP e dados de navegação ao ser carregado.
            </li>
          </ul>

          <h2>Para que usamos</h2>
          <p>
            Exclusivamente para responder ao seu contato, agendar sua aula e apresentar planos e serviços. Não vendemos, não
            alugamos e não compartilhamos seus dados com terceiros para fins comerciais.
          </p>

          <h2>Base legal</h2>
          <p>
            O tratamento se apoia no seu consentimento — manifestado no momento em que você opta por nos chamar ou agendar — e no
            legítimo interesse de responder a quem procura o studio (art. 7º, I e IX, da Lei 13.709/2018).
          </p>

          <h2>Por quanto tempo guardamos</h2>
          <p>
            Conversas de WhatsApp ficam conosco enquanto durar o relacionamento comercial e pelo prazo
            legal aplicável. Depois disso são apagados ou anonimizados.
          </p>

          <h2>Cookies</h2>
          <p>
            Não usamos cookies de rastreamento ou publicidade. O mapa incorporado do Google Maps pode gravar cookies próprios
            quando carregado — e ele só é carregado quando você chega até a seção de localização.
          </p>

          <h2>Seus direitos</h2>
          <p>
            A LGPD garante a você confirmar a existência de tratamento, acessar, corrigir, anonimizar, portar ou eliminar seus
            dados, e revogar o consentimento a qualquer momento. Para exercer qualquer um desses direitos, fale com a gente
            pelo {contact}. Respondemos em até 15 dias.
          </p>

          <h2>Alterações</h2>
          <p>
            Se esta política mudar, a nova versão passa a valer a partir da publicação nesta página, com a data de atualização
            revista no topo.
          </p>

          <p className="back">
            <Link href="/">← Voltar para a página inicial</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
