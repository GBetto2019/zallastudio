import Image from "next/image";
import Link from "next/link";
import {
  business,
  footerLinks,
  instagram,
  address,
  phoneDisplay,
  hoursSummary,
  waMessages,
} from "@/content/site";
import { logos } from "@/lib/photos";
import { WhatsAppLink } from "./ui/WhatsAppLink";
import { InstagramGlyph, WhatsAppGlyph } from "./ui/icons";

export function Footer() {
  return (
    <footer>
      <div className="shell">
        <div className="foot">
          <div className="brand">
            <Image className="logo" src={logos.full} alt={business.legalName} width={180} unoptimized />
            <p>{business.tagline}</p>
            <div className="socials">
              <a href={instagram.url} target="_blank" rel="noopener" aria-label={`Instagram do ${business.name}`}>
                <InstagramGlyph />
              </a>
              <WhatsAppLink message={waMessages.footer} asButton={false} aria-label={`WhatsApp do ${business.name}`}>
                <WhatsAppGlyph />
              </WhatsAppLink>
            </div>
          </div>

          <div>
            <h4>Navegar</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <WhatsAppLink message={waMessages.footer} asButton={false}>
                  WhatsApp {phoneDisplay}
                </WhatsAppLink>
              </li>
              <li>
                <a href="#localizacao">
                  {address.street} · {address.city}/{address.state}
                </a>
              </li>
              {business.email && (
                <li>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </li>
              )}
              <li>
                <span>{hoursSummary}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>
            © {new Date().getFullYear()} {business.legalName} · {business.cref}
          </span>
          <Link href="/privacidade">Política de privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
