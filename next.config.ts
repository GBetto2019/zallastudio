import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // O acervo é todo fotográfico e escuro; AVIF entrega o melhor peso/qualidade.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
