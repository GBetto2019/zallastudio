"use client";

import { useEffect, useState } from "react";
import { waMessages } from "@/content/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "./ui/icons";

/** Botão flutuante — entra depois que a pessoa começa a rolar. */
export function FloatWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      const max = document.body.scrollHeight - window.innerHeight;
      setShow(max > 0 && window.scrollY / max > 0.15);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={show ? "float show" : "float"}
      href={waLink(waMessages.float)}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      aria-hidden={!show}
      tabIndex={show ? undefined : -1}
    >
      <span className="ping" aria-hidden="true" />
      <WhatsAppGlyph />
    </a>
  );
}
