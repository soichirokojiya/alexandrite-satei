import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="max-w-5xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-emerald)] to-[var(--color-ruby)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M12 2L3 9h3l6-5 6 5h3L12 2z" fill="#fff" opacity="0.8"/>
                  <path d="M6 9l6 13 6-13H6z" fill="#fff"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm text-[var(--color-gold)]">アレキサンドライト買取センター</div>
                <div className="text-[10px] text-white/50">アレキサンドライト買取専門</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              世界三大希少石のひとつ、アレキサンドライトに特化した専門査定サービスです。
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-[var(--color-gold)] text-sm">サービス</h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/#price" className="hover:text-white transition-colors duration-200">買取相場</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors duration-200">選ばれる理由</Link></li>
              <li><Link href="/#flow" className="hover:text-white transition-colors duration-200">買取の流れ</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors duration-200">よくある質問</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors duration-200">無料査定</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-[var(--color-gold)] text-sm">査定対象</h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>アレキサンドライト リング</li>
              <li>アレキサンドライト ネックレス</li>
              <li>アレキサンドライト ルース（裸石）</li>
              <li>アレキサンドライト ピアス・イヤリング</li>
              <li>鑑別書なしのアレキサンドライト</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-white/40 space-y-1">
          <p>
            運営：<a href="https://cfac.co.jp" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/60 transition-colors duration-200">Common Future & Company株式会社</a>
          </p>
          <p>&copy; {new Date().getFullYear()} アレキサンドライト買取センター All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
