import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

// O eslint-config-next 16 já publica flat config; não precisa de FlatCompat.
const config = [
  { ignores: [".next/**", "out/**", "node_modules/**"] },
  ...coreWebVitals,
  ...typescript,
];

export default config;
