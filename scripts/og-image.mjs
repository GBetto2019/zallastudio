/**
 * Gera public/og.jpg — a imagem do preview de link (WhatsApp, Instagram, Google).
 *
 * Por que um script e não app/opengraph-image.tsx: o ImageResponse do Next só
 * emite PNG, e um PNG fotográfico de 1200x630 passa de 1 MB. O WhatsApp — que é
 * o canal principal desta LP — não renderiza preview desse tamanho. Em JPEG a
 * mesma imagem fica abaixo de 100 KB.
 *
 * A composição segue o modelo de capa do guia de marca §04: logo à esquerda
 * sobre o preto, foto à direita. As fotos do acervo são verticais e estreitas,
 * então ocupam só metade da largura em vez de serem esticadas.
 *
 * Rodar: npm run og   (o resultado é commitado)
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SIZE = { width: 1200, height: 630 };
const INK = "#0b0b0c";
const FLAME = "#f07b2e";
const PHOTO_WIDTH = 560;

const PHOTO = "assets/fotos/hero.jpeg";
const LOGO = "assets/logo/logo-principal-fundo-escuro.svg";
const TARGET = "public/og.jpg";

await mkdir("public", { recursive: true });

// 1. Foto recortada para a metade direita.
const photo = await sharp(PHOTO)
  .resize({ width: PHOTO_WIDTH, height: SIZE.height, fit: "cover", position: "attention" })
  .toBuffer();

// 2. Véu que dissolve a foto no preto, do lado do logo.
const scrim = Buffer.from(
  `<svg width="${PHOTO_WIDTH}" height="${SIZE.height}">
     <defs>
       <linearGradient id="v" x1="0" y1="0" x2="1" y2="0">
         <stop offset="0%"   stop-color="${INK}" stop-opacity="1"/>
         <stop offset="35%"  stop-color="${INK}" stop-opacity="0.35"/>
         <stop offset="100%" stop-color="${INK}" stop-opacity="0.1"/>
       </linearGradient>
     </defs>
     <rect width="100%" height="100%" fill="url(#v)"/>
   </svg>`,
);

// 3. Logotipo em vetor, rasterizado em alta densidade para não serrilhar.
const logoWidth = 460;
const logo = await sharp(LOGO, { density: 300 }).resize({ width: logoWidth }).png().toBuffer();
const { height: logoHeight = 0 } = await sharp(logo).metadata();
const logoArea = SIZE.width - PHOTO_WIDTH;

// 4. Filete laranja na base, o laranja só no detalhe (proporção 70/20/10).
const bar = Buffer.from(
  `<svg width="${SIZE.width}" height="8"><rect width="100%" height="100%" fill="${FLAME}"/></svg>`,
);

const info = await sharp({ create: { ...SIZE, channels: 3, background: INK } })
  .composite([
    { input: photo, top: 0, left: SIZE.width - PHOTO_WIDTH },
    { input: scrim, top: 0, left: SIZE.width - PHOTO_WIDTH },
    {
      input: logo,
      left: Math.round((logoArea - logoWidth) / 2) + 20,
      top: Math.round((SIZE.height - logoHeight) / 2),
    },
    { input: bar, top: SIZE.height - 8, left: 0 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(TARGET);

console.log(`${TARGET}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
