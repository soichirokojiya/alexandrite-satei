"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#141420]/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-[var(--color-gold)]/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-luxury text-lg tracking-wide text-[var(--color-gold)] cursor-pointer">
          アレキサンドライト買取センター
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wider uppercase text-white/50">
          {[
            { href: "/#price", label: "買取相場" },
            { href: "/#about", label: "選ばれる理由" },
            { href: "/#flow", label: "買取の流れ" },
            { href: "/#faq", label: "FAQ" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--color-gold)] transition-colors duration-300 cursor-pointer">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="border border-[var(--color-gold)]/50 text-[var(--color-gold)] px-5 py-2 rounded-full hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300 cursor-pointer text-[12px]">
            無料査定
          </Link>
        </nav>

        <button className="md:hidden p-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー" aria-expanded={menuOpen}>
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-[var(--color-gold)] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-[var(--color-gold)] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[var(--color-gold)] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#141420] px-6 pb-6 space-y-1 border-t border-[var(--color-gold)]/10">
          {[
            { href: "/#price", label: "買取相場" },
            { href: "/#about", label: "選ばれる理由" },
            { href: "/#flow", label: "買取の流れ" },
            { href: "/#faq", label: "FAQ" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="block py-3 text-white/50 text-sm border-b border-white/5 cursor-pointer" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="block text-center border border-[var(--color-gold)]/50 text-[var(--color-gold)] py-3 rounded-full mt-4 text-sm cursor-pointer" onClick={() => setMenuOpen(false)}>
            無料査定
          </Link>
        </nav>
      )}
    </header>
  );
}
