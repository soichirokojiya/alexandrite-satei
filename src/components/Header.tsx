"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--color-navy)] text-white sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-emerald)] to-[var(--color-ruby)] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 2L3 9h3l6-5 6 5h3L12 2z" fill="#fff" opacity="0.8"/>
              <path d="M6 9l6 13 6-13H6z" fill="#fff"/>
            </svg>
          </div>
          <div className="leading-snug">
            <div className="text-sm font-bold text-[var(--color-gold)]">アレキサンドライト買取センター</div>
            <div className="text-[10px] text-white/50">アレキサンドライト買取専門</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {[
            { href: "/#price", label: "買取相場" },
            { href: "/#about", label: "選ばれる理由" },
            { href: "/#flow", label: "買取の流れ" },
            { href: "/#faq", label: "よくある質問" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="text-white/70 hover:text-[var(--color-gold)] transition-colors duration-200 cursor-pointer">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="bg-[var(--color-gold)] text-[var(--color-navy)] px-5 py-2 rounded-lg font-bold hover:bg-[var(--color-gold-light)] transition-colors duration-200 cursor-pointer text-sm">
            無料査定はこちら
          </Link>
        </nav>

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[var(--color-navy-light)] px-5 pb-4 space-y-1 border-t border-white/10">
          {[
            { href: "/#price", label: "買取相場" },
            { href: "/#about", label: "選ばれる理由" },
            { href: "/#flow", label: "買取の流れ" },
            { href: "/#faq", label: "よくある質問" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="block py-3 text-white/70 border-b border-white/10 cursor-pointer" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="block text-center bg-[var(--color-gold)] text-[var(--color-navy)] px-5 py-3 rounded-lg font-bold mt-3 cursor-pointer" onClick={() => setMenuOpen(false)}>
            無料査定はこちら
          </Link>
        </nav>
      )}
    </header>
  );
}
