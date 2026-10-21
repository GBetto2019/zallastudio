/**
 * Registro dos assets do acervo. Importar daqui (e não por caminho solto)
 * garante que o next/image receba largura/altura reais e gere AVIF/WebP
 * responsivo.
 *
 * Os arquivos ficam em `assets/`, fora de `public/`, justamente para que
 * ninguém sirva o JPG original sem otimização. Todas as fotos são verticais e
 * com no máximo ~1000 px de largura: por isso nenhuma seção as estica em tela
 * cheia no desktop.
 */

import hero from "@/assets/fotos/hero.jpeg";
import perfil from "@/assets/fotos/perfil.jpeg";
import cadeiraLaranja from "@/assets/fotos/cadeira-laranja.jpeg";
import forca from "@/assets/fotos/forca.jpeg";
import polia from "@/assets/fotos/polia.jpeg";
import extensora from "@/assets/fotos/extensora.jpeg";
import legpress from "@/assets/fotos/legpress.jpg";
import turma1 from "@/assets/fotos/turma-1.jpeg";
import turma2 from "@/assets/fotos/turma-2.jpeg";
import turma3 from "@/assets/fotos/turma-3.jpeg";

import logoEscuro from "@/assets/logo/logo-principal-fundo-escuro.svg";
import simbolo from "@/assets/logo/simbolo-laranja.svg";

export const photos = {
  hero,
  perfil,
  cadeiraLaranja,
  forca,
  polia,
  extensora,
  legpress,
  turma1,
  turma2,
  turma3,
} as const;

export type PhotoKey = keyof typeof photos;

/**
 * Logo completo só a partir de 140 px de largura; abaixo disso, só o símbolo
 * (mínimo 32 px) — regra do guia de marca §01.
 */
export const logos = { full: logoEscuro, symbol: simbolo } as const;

/** Texto alternativo do acervo — descritivo, nunca "foto do studio". */
export const alts: Record<PhotoKey, string> = {
  hero: "Bárbara Zalla sentada no leg press, de fones de ouvido, concentrada antes da série",
  perfil: "Bárbara Zalla de perfil executando tríceps na polia",
  cadeiraLaranja: "Bárbara Zalla puxando a polia ao lado de um banco laranja, em luz baixa",
  forca: "Bárbara Zalla flexionando o braço, vista de cima",
  polia: "Bárbara Zalla segurando a polia alta e olhando para a câmera",
  extensora: "Bárbara Zalla sentada na cadeira extensora, de roupa verde-limão",
  legpress: "Bárbara Zalla executando leg press",
  turma1: "Cinco alunas sorrindo apoiadas na barra do Studio Zalla",
  turma2: "Bárbara Zalla com duas alunas no studio, em selfie no espelho",
  turma3: "Bárbara Zalla e uma aluna sorrindo na estação de agachamento",
};
