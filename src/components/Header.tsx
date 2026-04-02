"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md text-foreground sticky top-0 z-50 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-luxury text-lg tracking-wide text-[var(--color-gold)] cursor-pointer">
          アレキサンドライト買取センター
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wider text-muted-foreground">
          {[
            { href: "/#price", label: "買取相場" },
            { href: "/#about", label: "選ばれる理由" },
            { href: "/#flow", label: "買取の流れ" },
            { href: "/#faq", label: "FAQ" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground transition-colors duration-200 cursor-pointer">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="bg-[var(--color-gold)] text-white px-5 py-2 rounded-full font-bold hover:bg-[var(--color-gold-light)] transition-colors duration-200 cursor-pointer text-[12px] tracking-wider">
            無料査定
          </Link>
        </nav>

        <button className="md:hidden p-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー" aria-expanded={menuOpen}>
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white px-6 pb-6 space-y-1 border-t border-border">
          {[
            { href: "/#price", label: "買取相場" },
            { href: "/#about", label: "選ばれる理由" },
            { href: "/#flow", label: "買取の流れ" },
            { href: "/#faq", label: "FAQ" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="block py-3 text-muted-foreground border-b border-border cursor-pointer" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="block text-center bg-[var(--color-gold)] text-white py-3 rounded-full font-bold mt-3 cursor-pointer" onClick={() => setMenuOpen(false)}>
            無料査定
          </Link>
        </nav>
      )}
    </header>
  );
}
