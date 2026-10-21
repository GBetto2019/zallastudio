import type { Metadata, Viewport } from "next";
import { Archivo, Montserrat } from "next/font/google";
import { business, address, siteUrl, seo } from "@/content/site";
import { localBusinessJsonLd } from "@/lib/jsonld";
import "@/styles/index.css";

/**
 * Fontes do guia de marca §03, ambas do Google Fonts: Archivo Expanded Bold nos
 * títulos (o eixo `wdth` é o que expande — ver .disp em base.css) e Montserrat
 * no texto e nos rótulos. O next/font auto-hospeda tudo, aplica display:swap e
 * faz preload — sem requisição a servidor de terceiro.
 */
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

/**
 * A imagem leva um sufixo de versão: WhatsApp e Facebook cacheiam a og:image
 * por URL, de forma agressiva. Mudar a arte sem mudar a URL faz o preview
 * antigo persistir por dias. Ao regerar a arte, incremente este número.
 */
const ogImage = "/og.jpg?v=1";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seo.page.title, template: `%s · ${business.name}` },
  description: seo.page.description,
  applicationName: business.name,
  keywords: [
    "personal trainer",
    "studio de personal",
    "musculação",
    "emagrecimento",
    "condicionamento físico",
    "treino em grupo",
    `personal trainer ${address.city}`,
    `personal trainer em ${address.city}`,
    `academia ${address.city}`,
    business.trainer,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: business.legalName,
    title: seo.share.title,
    description: seo.share.description,
    // Gerada por `npm run og` (JPEG leve — o WhatsApp descarta preview pesado).
    images: [{ url: ogImage, width: 1200, height: 630, type: "image/jpeg", alt: seo.share.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.share.title,
    description: seo.share.description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // Renderizado no servidor a partir de content/site.ts — sem entrada de usuário.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </body>
    </html>
  );
}
