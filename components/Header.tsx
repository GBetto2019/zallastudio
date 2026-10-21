"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks, waMessages, business, headerCta } from "@/content/site";
import { logos } from "@/lib/photos";
import { WhatsAppLink } from "./ui/WhatsAppLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="shell nav">
        <a href="#top" aria-label={`${business.name} — início`}>
          {/* O logo completo pede 140 px de largura e não cabe na barra: aqui vai
              só o símbolo SZ, como manda o guia. O logo inteiro aparece no Hero. */}
          <Image className="logo" src={logos.symbol} alt={business.legalName} height={34} priority unoptimized />
          <span className="nav-name" aria-hidden="true">
            {business.name}
          </span>
        </a>

        <button
          className="burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>

        <nav id="menu" className={open ? "open" : undefined}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppLink className="btn" message={waMessages.header}>
          {headerCta}
        </WhatsAppLink>
      </div>
    </header>
  );
}
