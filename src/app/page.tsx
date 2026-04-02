import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-[var(--color-emerald)]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute inset-16 bg-[var(--color-ruby)]/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
        </div>
        <div className="absolute top-0 left-0 w-full h-px gold-line" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-28">
          <p className="text-[var(--color-gold)] text-[12px] tracking-[0.4em] uppercase mb-10">
            アレキサンドライト買取専門
          </p>
          <h1 className="font-luxury text-5xl md:text-7xl leading-[1.05] mb-6 tracking-tight">
            Alexandrite
          </h1>
          <div className="gold-line max-w-[80px] mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-medium mb-6">
            大切な宝石だからこそ、<br />
            <span className="text-[var(--color-gold)]">その価値を正しく。</span>
          </p>
          <p className="text-white/60 text-base mb-12 max-w-lg mx-auto leading-relaxed">
            「この石、本当はいくらの価値があるんだろう？」<br />
            そんな想いに、アレキサンドライト専門の<br className="hidden md:block" />
            提携鑑定士が丁寧にお応えします。
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[var(--color-gold)] text-black font-bold px-12 py-4 rounded-full text-[15px] tracking-wider hover:bg-[var(--color-gold-light)] transition-all duration-300 cursor-pointer shadow-lg shadow-[var(--color-gold)]/15"
          >
            無料査定を申し込む
          </Link>
          <div className="flex justify-center gap-8 mt-14 text-[12px] text-white/40 tracking-wider">
            {["鑑別書なしOK", "全国対応", "送料無料", "秘密厳守"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 共感セクション ===== */}
      <section className="py-20">
        <div className="gold-line mb-20" />
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-8">Your Feelings</p>
          <h2 className="text-xl md:text-2xl leading-relaxed mb-8 text-white/80">
            「街の買取店に持っていったけど、<br />
            アレキサンドライトは専門外と言われた」<br /><br />
            「ネットで調べても相場がバラバラで、<br />
            適正な価格がわからない」<br /><br />
            「大切な人から受け継いだ宝石。<br />
            安く手放したくない」
          </h2>
          <div className="gold-line max-w-[60px] mx-auto my-10" />
          <p className="text-white/60 text-base leading-relaxed">
            アレキサンドライトは世界三大希少石のひとつ。<br />
            一般の買取店では、その本当の価値を<br className="hidden md:block" />
            見極めることが難しい宝石です。<br /><br />
            <span className="text-[var(--color-gold)]">だからこそ、専門の目で正しく査定する必要があります。</span>
          </p>
        </div>
      </section>

      {/* ===== カラーチェンジ写真 ===== */}
      <section className="py-20">
        <div className="gold-line mb-20" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Color Change</p>
          <h2 className="font-luxury text-3xl md:text-4xl mb-4">昼のエメラルド、夜のルビー</h2>
          <p className="text-white/60 text-[15px] mb-12 max-w-lg mx-auto">
            光源によって緑から赤へと色が変わる——<br />
            この神秘的なカラーチェンジこそが、アレキサンドライトの最大の魅力です。
          </p>
          <div className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-[var(--color-gold)]/15">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Alexandrite.jpg"
              alt="アレキサンドライトのカラーチェンジ"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="text-white/30 text-[12px] mt-4 tracking-wider">同一の石 — 光源の違いによるカラーチェンジ</p>
        </div>
      </section>

      {/* ===== 選ばれる理由（ベネフィット）===== */}
      <section id="about" className="py-20">
        <div className="gold-line mb-20" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Why Choose Us</p>
            <h2 className="font-luxury text-3xl md:text-4xl mb-4">私たちが選ばれる理由</h2>
            <p className="text-white/60 text-[15px]">お客様に安心してお任せいただくために</p>
          </div>
          <div className="space-y-0">
            {[
              { num: "01", title: "アレキサンドライトだけに特化", desc: "「カラーストーン全般」ではなく、アレキサンドライト一本に絞った専門性。変色効果の微妙な違いまで正確に評価できます。" },
              { num: "02", title: "鑑別書がなくても大丈夫", desc: "「鑑別書を紛失した」「もらいものだから書類がない」——ご安心ください。提携鑑定機関で正確に鑑別いたします。" },
              { num: "03", title: "産地ごとの価値を熟知", desc: "ロシア・ブラジル・スリランカ。産地によって数倍の価格差があるアレキサンドライトの市場価値を正しく把握しています。" },
              { num: "04", title: "費用は一切かかりません", desc: "査定料、送料、キャンセル料、すべて0円。「まずは値段だけ知りたい」というご相談も大歓迎です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 py-8 border-b border-white/5">
                <span className="text-[var(--color-gold)]/40 font-luxury text-3xl leading-none w-12 flex-shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-white/60 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== お客様の声 ===== */}
      <section className="py-20">
        <div className="gold-line mb-20" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Voice</p>
            <h2 className="font-luxury text-3xl md:text-4xl">ご利用者さまの声</h2>
          </div>
          <div className="space-y-6">
            {[
              { text: "母から受け継いだ指輪。街の買取店では2万円と言われましたが、こちらでは15万円の査定でした。アレキサンドライトの価値をわかってくれる方に見てもらえてよかったです。", who: "60代女性・東京都" },
              { text: "鑑別書がなくて不安でしたが、丁寧に鑑定していただき、ブラジル産の良質なものとわかりました。説明もわかりやすく、安心してお任せできました。", who: "50代男性・大阪府" },
              { text: "遺品整理で出てきた宝石の価値がわからず相談しました。写真を送っただけで翌日には概算をいただけて、スピードに驚きました。", who: "40代女性・神奈川県" },
            ].map((item, i) => (
              <div key={i} className="border border-white/8 rounded-xl p-7 hover:border-[var(--color-gold)]/15 transition-colors duration-300">
                <p className="text-white/70 text-[15px] leading-relaxed mb-4 italic">「{item.text}」</p>
                <p className="text-[var(--color-gold)] text-[13px]">— {item.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 買取相場 ===== */}
      <section id="price" className="py-20">
        <div className="gold-line mb-20" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Price Range</p>
            <h2 className="font-luxury text-3xl md:text-4xl mb-4">買取相場の目安</h2>
            <p className="text-white/60 text-[15px]">品質とカラット数で大きく変わります</p>
          </div>
          <div className="max-w-[180px] mx-auto mb-10">
            <div className="rounded-lg overflow-hidden border border-[var(--color-gold)]/15">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/0/01/Alexandrite_26.75cts.jpg" alt="26.75ctアレキサンドライト" width={300} height={225} className="w-full h-auto" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-[var(--color-gold)]/20">
                  <th className="text-left py-4 px-5 text-[var(--color-gold)] font-normal text-[12px] tracking-widest uppercase">カラット</th>
                  <th className="text-right py-4 px-5 text-[var(--color-gold)] font-normal text-[12px] tracking-widest uppercase">Sランク</th>
                  <th className="text-right py-4 px-5 text-white/50 font-normal text-[12px] tracking-widest uppercase">Aランク</th>
                  <th className="text-right py-4 px-5 text-white/50 font-normal text-[12px] tracking-widest uppercase">Bランク</th>
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
                    <td className="py-4 px-5 text-right text-white/60">{row.a}</td>
                    <td className="py-4 px-5 text-right text-white/60">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-white/30 mt-6 text-center tracking-wider">※ 変色効果の強さ、透明度、産地等により変動します。正確な査定は無料でお受けしています。</p>
        </div>
      </section>

      {/* ===== 買取の流れ ===== */}
      <section id="flow" className="py-20">
        <div className="gold-line mb-20" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Process</p>
            <h2 className="font-luxury text-3xl md:text-4xl">かんたん3ステップ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
            {[
              { num: "01", title: "お申し込み", desc: "フォームまたは写真を\n送るだけでOK", time: "5分" },
              { num: "02", title: "専門鑑定", desc: "提携鑑定士が\n丁寧に査定", time: "最短即日" },
              { num: "03", title: "お振込み", desc: "ご納得いただければ\nすぐにお振込み", time: "査定後すぐ" },
            ].map((item) => (
              <div key={item.num} className="bg-background p-8 text-center">
                <span className="text-[var(--color-gold)] font-luxury text-3xl">{item.num}</span>
                <h3 className="font-medium mt-4 mb-2">{item.title}</h3>
                <p className="text-white/60 text-[13px] whitespace-pre-line leading-relaxed">{item.desc}</p>
                <p className="text-[var(--color-gold)]/60 text-[11px] mt-3 tracking-wider">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== コラム ===== */}
      <section className="py-20">
        <div className="gold-line mb-20" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Column</p>
            <h2 className="font-luxury text-3xl md:text-4xl">お役立ちコラム</h2>
          </div>
          <div className="space-y-3">
            {[
              { href: "/articles/alexandrite-color-change", title: "カラーチェンジの仕組みと評価基準" },
              { href: "/articles/alexandrite-kaitori-souba", title: "買取相場｜カラット別・ランク別の価格表" },
              { href: "/articles/alexandrite-kanbetsusho", title: "鑑別書とは？なくても売れる？" },
              { href: "/articles/alexandrite-sanchi", title: "産地別の特徴と価値｜ロシア・ブラジル・スリランカ" },
              { href: "/articles/alexandrite-satei-point", title: "査定で見られる5つのポイント" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block border border-white/5 rounded-lg px-6 py-4 hover:border-[var(--color-gold)]/20 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer group">
                <span className="text-[15px] text-white/70 group-hover:text-white transition-colors duration-300">{item.title}</span>
                <span className="text-[var(--color-gold)] text-sm ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-20">
        <div className="gold-line mb-20" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">FAQ</p>
            <h2 className="font-luxury text-3xl md:text-4xl">よくあるご質問</h2>
          </div>
          <Accordion className="space-y-2">
            {[
              { q: "鑑別書がなくても査定できますか？", a: "はい。提携の鑑定機関で正確に鑑別いたします。鑑別書がある場合はご一緒にお送りいただくと、より迅速に査定できます。" },
              { q: "合成アレキサンドライトも買取できますか？", a: "合成石の買取は対応しておりません。ただし、天然石かどうかの判別は無料で行っていますので、お気軽にご相談ください。" },
              { q: "ルース（裸石）だけでも大丈夫ですか？", a: "もちろんです。ジュエリーにセットされた状態でも、ルースの状態でも、どちらでもお受けしています。" },
              { q: "キャンセルできますか？", a: "もちろんです。査定料・送料・キャンセル料すべて無料です。「まず値段だけ知りたい」という方も大歓迎です。" },
              { q: "査定にどのくらいかかりますか？", a: "お写真をお送りいただければ最短即日で概算をお伝えします。宅配査定の場合は到着後1〜2営業日です。" },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-white/5 rounded-lg px-6 bg-transparent hover:border-white/10 transition-colors duration-300">
                <AccordionTrigger className="text-left text-[15px] py-5 cursor-pointer hover:no-underline text-white/80 hover:text-white transition-colors duration-300">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 text-[14px] leading-relaxed pb-5">
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
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="gold-line mb-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-gold)]/3 rounded-full blur-[200px]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[var(--color-gold)] text-[12px] tracking-[0.3em] uppercase mb-6">Contact</p>
            <h2 className="font-luxury text-3xl md:text-4xl mb-4">無料査定のお申し込み</h2>
            <p className="text-white/60 text-[15px] leading-relaxed">
              「値段だけ知りたい」でも大丈夫です。<br />
              アレキサンドライトのことなら、何でもお気軽にご相談ください。
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
