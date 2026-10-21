"""Gera public/og.jpg — a imagem do preview de link (WhatsApp, Facebook, Instagram, LinkedIn, X).

1200 × 630 em JPEG: o WhatsApp descarta preview pesado, e um PNG fotográfico
desse tamanho passa de 1 MB. Aqui fica bem abaixo de 300 KB.

A arte leva texto, porque no WhatsApp a imagem é o que mais aparece: logo,
"— PERSONAL TRAINER · SANTO ANTÔNIO DE POSSE", a chamada "TREINO COM MÉTODO"
e a aula grátis. As fontes são as da marca (Archivo Expanded Bold e Montserrat,
em scripts/fontes, SIL OFL); o logo vem do SVG oficial em assets/logo.

Rodar a partir de site/:  npm run og   (requer Python com Pillow e PyMuPDF; o
resultado é commitado). Ao mudar a arte, incremente `ogImage` em app/layout.tsx.
"""

from pathlib import Path

import fitz
from PIL import Image, ImageDraw, ImageFont, ImageOps

W, H = 1200, 630
PRETO = (11, 11, 12)
LARANJA = (240, 123, 46)
OFFWHITE = (243, 240, 235)
NEVOA = (201, 197, 190)

SITE = Path(__file__).resolve().parent.parent
FONTES = SITE / "scripts" / "fontes"
DESTINO = SITE / "public" / "og.jpg"

MARGEM = 72
LARGURA_FOTO = 500
LIMITE_TEXTO = W - LARGURA_FOTO - 24


def archivo(px: int) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(str(FONTES / "Archivo-variavel-latin.woff2"), px)
    f.set_variation_by_axes([700, 125])  # Bold, Expanded
    return f


def montserrat(px: int, peso: int) -> ImageFont.FreeTypeFont:
    f = ImageFont.truetype(str(FONTES / "Montserrat-variavel-latin.woff2"), px)
    f.set_variation_by_axes([peso])
    return f


def logo(largura: int) -> Image.Image:
    pagina = fitz.open(str(SITE / "assets" / "logo" / "logo-principal-fundo-escuro.svg"))[0]
    escala = largura * 2 / pagina.rect.width
    pix = pagina.get_pixmap(matrix=fitz.Matrix(escala, escala), alpha=True)
    img = Image.frombytes("RGBA", (pix.width, pix.height), pix.samples)
    img = img.crop(img.getbbox())  # tira a área de proteção transparente
    return img.resize((largura, round(img.height * largura / img.width)), Image.LANCZOS)


def espacado(draw: ImageDraw.ImageDraw, xy, texto: str, fonte, cor, tracking: float) -> float:
    """Caixa alta com espaçamento largo, como a tag "— PERSONAL TRAINER —"."""
    x, y = xy
    extra = fonte.size * tracking
    for c in texto:
        draw.text((x, y), c, font=fonte, fill=cor)
        x += draw.textlength(c, font=fonte) + extra
    return x - extra - xy[0]


def main() -> None:
    capa = Image.new("RGB", (W, H), PRETO)

    # Foto à direita, dissolvendo no preto do lado do texto.
    foto = ImageOps.fit(Image.open(SITE / "assets" / "fotos" / "hero.jpeg").convert("RGB"),
                        (LARGURA_FOTO, H), Image.LANCZOS, centering=(0.5, 0.4))
    capa.paste(foto, (W - LARGURA_FOTO, 0))
    # Opaco na borda esquerda da foto, some em 60% da largura dela.
    veu = Image.new("RGBA", (LARGURA_FOTO, H), PRETO + (0,))
    linha = Image.new("L", (LARGURA_FOTO, 1))
    linha.putdata([max(20, round(255 * (1 - x / (LARGURA_FOTO * 0.6)))) for x in range(LARGURA_FOTO)])
    veu.putalpha(linha.resize((LARGURA_FOTO, H)))
    capa.paste(veu, (W - LARGURA_FOTO, 0), veu)

    d = ImageDraw.Draw(capa)

    marca = logo(170)
    capa.paste(marca, (MARGEM, 58), marca)

    y = 58 + marca.height + 44
    d.rectangle([MARGEM, y + 9, MARGEM + 30, y + 11], fill=LARANJA)
    rotulo = montserrat(15, 600)
    largura_rotulo = espacado(d, (MARGEM + 44, y), "PERSONAL TRAINER · SANTO ANTÔNIO DE POSSE", rotulo, LARANJA, 0.2)

    titulo = archivo(60)
    y += 38
    d.text((MARGEM, y), "TREINO", font=titulo, fill=OFFWHITE)
    d.text((MARGEM, y + 66), "COM MÉTODO", font=titulo, fill=LARANJA)

    y += 66 * 2 + 22
    d.text((MARGEM, y), "Individual ou em turmas de até 4 pessoas", font=montserrat(23, 500), fill=NEVOA)

    # "Botão" da aula grátis: laranja com texto preto, como os botões do site.
    y += 54
    selo = montserrat(15, 700)
    texto_selo = "AULA EXPERIMENTAL GRÁTIS"
    largura_selo = sum(d.textlength(c, font=selo) + selo.size * 0.12 for c in texto_selo) - selo.size * 0.12
    d.rounded_rectangle([MARGEM, y, MARGEM + largura_selo + 44, y + 46], radius=8, fill=LARANJA)
    espacado(d, (MARGEM + 22, y + 14), texto_selo, selo, PRETO, 0.12)

    d.rectangle([0, H - 8, W, H], fill=LARANJA)

    # Nada do bloco de texto pode entrar na foto.
    assert MARGEM + d.textlength("COM MÉTODO", font=titulo) < LIMITE_TEXTO
    assert MARGEM + 44 + largura_rotulo < LIMITE_TEXTO
    assert MARGEM + d.textlength("Individual ou em turmas de até 4 pessoas", font=montserrat(23, 500)) < LIMITE_TEXTO

    DESTINO.parent.mkdir(exist_ok=True)
    capa.save(DESTINO, quality=84, optimize=True, progressive=True)
    print(f"{DESTINO.relative_to(SITE)}: {W}x{H}, {DESTINO.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
