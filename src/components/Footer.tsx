import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f1a] text-white/40">
      <div className="gold-line" />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="font-luxury text-xl text-[var(--color-gold)] mb-2">アレキサンドライト買取センター</p>
          <p className="text-xs tracking-widest uppercase">Alexandrite Purchase Center</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-sm mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-white/60 text-xs tracking-widest uppercase mb-4">サービス</h3>
            <ul className="space-y-2">
              {[
                { href: "/#price", label: "買取相場" },
                { href: "/#about", label: "選ばれる理由" },
                { href: "/#flow", label: "買取の流れ" },
                { href: "/#faq", label: "よくある質問" },
                { href: "/#contact", label: "無料査定" },
              ].map((item) => (
                <li key={item.href}><Link href={item.href} className="hover:text-[var(--color-gold)] transition-colors duration-300">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white/60 text-xs tracking-widest uppercase mb-4">査定対象</h3>
            <ul className="space-y-2">
              <li>リング（指輪）</li>
              <li>ネックレス・ペンダント</li>
              <li>ルース（裸石）</li>
              <li>ピアス・イヤリング</li>
              <li>鑑別書なしの石</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white/60 text-xs tracking-widest uppercase mb-4">運営</h3>
            <p><a href="https://cfac.co.jp" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors duration-300">Common Future & Company株式会社</a></p>
          </div>
        </div>
        <div className="gold-line mb-8" />
        <p className="text-center text-xs text-white/25">&copy; {new Date().getFullYear()} アレキサンドライト買取センター All rights reserved.</p>
      </div>
    </footer>
  );
}
