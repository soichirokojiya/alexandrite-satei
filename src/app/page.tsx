import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <div className="absolute inset-0 bg-[var(--color-emerald)]/8 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute inset-20 bg-[var(--color-ruby)]/6 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
        </div>
        <div className="absolute top-0 left-0 w-full h-px gold-line" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-32">
          <p className="text-[var(--color-gold)] text-[12px] tracking-[0.4em] uppercase mb-10">
            アレキサンドライト買取専門
          </p>
          <h1 className="font-luxury text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 tracking-tight">
            Alexandrite
          </h1>
          <div className="gold-line max-w-[100px] mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-light mb-4 text-white/80">
            その美しさの価値を、正しく。
          </p>
          <p className="text-white/40 text-[15px] mb-14 max-w-md mx-auto leading-relaxed">
            世界三大希少石のひとつ、アレキサンドライト。<br />
            専門の提携鑑定士が、適正な価値を査定いたします。
          </p>
          <Link
            href="#contact"
            className="inline-block border border-[var(--color-gold)]/50 text-[var(--color-gold)] px-12 py-4 rounded-full text-[14px] tracking-widest uppercase hover:bg-[var(--color-gold)] hover:text-black transition-all duration-500 cursor-pointer"
          >
            無料査定を申し込む
          </Link>
          <div className="flex justify-center gap-10 mt-16 text-[12px] text-white/30 tracking-wider">
            {["鑑別書なしOK", "全国対応", "送料無料", "秘密厳守"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== カラーチェンジ写真 ===== */}
      <section className="py-24">
        <div className="gold-line mb-24" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Color Change</p>
          <h2 className="font-luxury text-3xl md:text-4xl mb-4">昼のエメラルド、夜のルビー</h2>
          <p className="text-white/40 text-[15px] mb-14 max-w-lg mx-auto">
            太陽光では深い緑色、白熱灯の下では赤紫色に。<br />
            ひとつの石が見せる二つの顔——それがアレキサンドライトです。
          </p>
          <div className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Alexandrite.jpg"
              alt="アレキサンドライトのカラーチェンジ"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="text-white/25 text-[12px] mt-4 tracking-wider">同一の石 — 光源の違いによるカラーチェンジ</p>
        </div>
      </section>

      {/* ===== 実績 ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
            {[
              { value: "専門", sub: "アレキサンドライト特化" },
              { value: "0円", sub: "査定料・送料" },
              { value: "全国", sub: "対応エリア" },
              { value: "即日", sub: "最短査定" },
            ].map((item) => (
              <div key={item.sub} className="bg-background p-8 text-center">
                <p className="text-2xl md:text-3xl font-luxury text-[var(--color-gold)]">{item.value}</p>
                <p className="text-[11px] text-white/30 tracking-wider mt-2 uppercase">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 買取相場 ===== */}
      <section id="price" className="py-24">
        <div className="gold-line mb-24" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Price Range</p>
            <h2 className="font-luxury text-3xl md:text-4xl mb-4">買取相場の目安</h2>
            <p className="text-white/40 text-[15px]">品質とカラット数で大きく変わります</p>
          </div>

          {/* カット石写真 */}
          <div className="max-w-[200px] mx-auto mb-12">
            <div className="rounded-lg overflow-hidden border border-[var(--color-gold)]/20">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/0/01/Alexandrite_26.75cts.jpg" alt="26.75ctアレキサンドライト" width={300} height={225} className="w-full h-auto" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-[var(--color-gold)]/20">
                  <th className="text-left py-4 px-5 text-[var(--color-gold)] font-normal text-[12px] tracking-widest uppercase">カラット</th>
                  <th className="text-right py-4 px-5 text-[var(--color-gold)] font-normal text-[12px] tracking-widest uppercase">Sランク</th>
                  <th className="text-right py-4 px-5 text-white/40 font-normal text-[12px] tracking-widest uppercase">Aランク</th>
                  <th className="text-right py-4 px-5 text-white/40 font-normal text-[12px] tracking-widest uppercase">Bランク</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ct: "0.2ct", s: "5万円〜", a: "2万円〜", b: "1万円〜" },
                  { ct: "0.5ct", s: "15万円〜", a: "5万円〜", b: "2.5万円〜" },
                  { ct: "1.0ct", s: "90万円〜", a: "10万円〜", b: "5万円〜" },
                  { ct: "3.0ct", s: "450万円〜", a: "30万円〜", b: "15万円〜" },
                ].map((row) => (
                  <tr key={row.ct} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-5 font-medium">{row.ct}</td>
                    <td className="py-4 px-5 text-right text-[var(--color-gold)] font-medium">{row.s}</td>
                    <td className="py-4 px-5 text-right text-white/50">{row.a}</td>
                    <td className="py-4 px-5 text-right text-white/50">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-white/20 mt-6 text-center tracking-wider">※ 変色効果の強さ、透明度、産地等により変動します</p>
        </div>
      </section>

      {/* ===== お悩み ===== */}
      <section className="py-24">
        <div className="gold-line mb-24" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Common Concerns</p>
            <h2 className="font-luxury text-3xl md:text-4xl">こんなお悩み、ありませんか？</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "本物かどうかわからない",
              "適正価格がわからない",
              "一般の買取店では安すぎた",
              "遺品整理で宝石が出てきた",
              "古いデザインで使わない",
              "まとまったお金が必要",
            ].map((text, i) => (
              <div key={i} className="border border-white/8 rounded-lg p-5 hover:border-[var(--color-gold)]/20 transition-colors duration-300">
                <p className="text-[15px] text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 選ばれる理由 ===== */}
      <section id="about" className="py-24">
        <div className="gold-line mb-24" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Why Choose Us</p>
            <h2 className="font-luxury text-3xl md:text-4xl">選ばれる理由</h2>
          </div>
          <div className="space-y-0">
            {[
              { num: "01", title: "アレキサンドライト専門", desc: "変色効果の品質を正確に評価できる専門の提携鑑定士が対応します。" },
              { num: "02", title: "鑑別書なしでもOK", desc: "提携の鑑定機関で正確に鑑別し、適正価格をご提示します。" },
              { num: "03", title: "産地・品質に応じた適正評価", desc: "ロシア産、ブラジル産、スリランカ産など産地による価値の違いを熟知しています。" },
              { num: "04", title: "すべて無料", desc: "査定料、送料、キャンセル料。すべて無料です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 py-8 border-b border-white/5">
                <span className="text-[var(--color-gold)]/50 font-luxury text-3xl leading-none w-12 flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                  <p className="text-white/40 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 査定ポイント ===== */}
      <section className="py-24">
        <div className="gold-line mb-24" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Appraisal Points</p>
            <h2 className="font-luxury text-3xl md:text-4xl">査定額を決める5つのポイント</h2>
          </div>
          <div className="space-y-6">
            {[
              { title: "変色効果", desc: "緑→赤のコントラストが鮮明なほど高評価。最重要の査定基準。", tag: "最重要" },
              { title: "カラー", desc: "濃く鮮やかな色ほど高評価。", tag: "重要" },
              { title: "クラリティ", desc: "内包物が少ないほど高評価。", tag: "重要" },
              { title: "カラット", desc: "1ctを超えると希少価値が飛躍的に上昇。", tag: "重要" },
              { title: "産地", desc: "ロシア産が最高評価。次いでブラジル産。", tag: "考慮" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <span className="text-[var(--color-gold)] font-luxury text-2xl leading-none w-8 flex-shrink-0 text-right">{i + 1}</span>
                <div className="flex-1 border-b border-white/5 pb-6">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <span className="text-[10px] text-[var(--color-gold)]/60 border border-[var(--color-gold)]/20 px-2 py-0.5 rounded-full">{item.tag}</span>
                  </div>
                  <p className="text-white/40 text-[14px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 買取の流れ ===== */}
      <section id="flow" className="py-24">
        <div className="gold-line mb-24" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Process</p>
            <h2 className="font-luxury text-3xl md:text-4xl">かんたん3ステップ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
            {[
              { num: "01", title: "お申し込み", desc: "フォームから\nお気軽に", time: "5分" },
              { num: "02", title: "専門鑑定", desc: "提携鑑定士が\n丁寧に査定", time: "最短即日" },
              { num: "03", title: "ご提示", desc: "ご納得なら\nお振込み", time: "査定後すぐ" },
            ].map((item) => (
              <div key={item.num} className="bg-background p-8 text-center">
                <span className="text-[var(--color-gold)] font-luxury text-3xl">{item.num}</span>
                <h3 className="font-medium mt-4 mb-2">{item.title}</h3>
                <p className="text-white/40 text-[13px] whitespace-pre-line">{item.desc}</p>
                <p className="text-[var(--color-gold)]/50 text-[11px] mt-3 tracking-wider">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-24">
        <div className="gold-line mb-24" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">FAQ</p>
            <h2 className="font-luxury text-3xl md:text-4xl">よくあるご質問</h2>
          </div>
          <Accordion className="space-y-2">
            {[
              { q: "鑑別書がなくても査定できますか？", a: "はい。提携の鑑定機関で正確に鑑別いたします。鑑別書がある場合はご一緒にお送りください。" },
              { q: "合成アレキサンドライトも買取できますか？", a: "合成石の買取は対応しておりません。天然石かどうかの判別は無料で行っています。" },
              { q: "ルース（裸石）だけでも大丈夫ですか？", a: "もちろんです。ジュエリーでもルースでもどちらでもお受けしています。" },
              { q: "キャンセルできますか？", a: "もちろんです。査定料・送料・キャンセル料すべて無料です。" },
              { q: "査定にどのくらいかかりますか？", a: "写真なら最短即日で概算をお伝えします。宅配は到着後1〜2営業日です。" },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-white/5 rounded-lg px-6 bg-transparent hover:border-white/10 transition-colors duration-300">
                <AccordionTrigger className="text-left text-[15px] py-5 cursor-pointer hover:no-underline text-white/80 hover:text-white transition-colors duration-300">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/40 text-[14px] leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "鑑別書がなくても査定できますか？", acceptedAnswer: { "@type": "Answer", text: "はい。提携の鑑定機関で正確に鑑別いたします。" } },
              { "@type": "Question", name: "合成アレキサンドライトも買取できますか？", acceptedAnswer: { "@type": "Answer", text: "合成石の買取は対応しておりません。天然石の判別は無料です。" } },
              { "@type": "Question", name: "ルース（裸石）だけでも大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "もちろんです。" } },
              { "@type": "Question", name: "キャンセルできますか？", acceptedAnswer: { "@type": "Answer", text: "査定料・送料・キャンセル料すべて無料です。" } },
              { "@type": "Question", name: "査定にどのくらいかかりますか？", acceptedAnswer: { "@type": "Answer", text: "写真なら最短即日、宅配は1〜2営業日です。" } },
            ],
          }) }} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="gold-line mb-24" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-gold)]/3 rounded-full blur-[200px]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Contact</p>
            <h2 className="font-luxury text-3xl md:text-4xl mb-4">無料査定のお申し込み</h2>
            <p className="text-white/40 text-[15px]">アレキサンドライトのことなら何でもご相談ください。</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
