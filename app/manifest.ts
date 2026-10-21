import type { MetadataRoute } from "next";
import { business, seo } from "@/content/site";

/** Nome, cor e ícone quando o site é salvo na tela inicial do celular. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.legalName,
    short_name: business.name,
    description: seo.page.description,
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0c",
    theme_color: "#0b0b0c",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
