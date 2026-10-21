import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

/**
 * Só a página principal: /privacidade é noindex e bloqueada no robots.txt, e
 * listá-la aqui mandaria ao Google sinais contraditórios.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/og.jpg`],
    },
  ];
}
