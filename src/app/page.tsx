import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero-bg text-white relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background gem effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-[var(--color-emerald)]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute inset-12 bg-[var(--color-ruby)]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <div className="absolute inset-24 bg-[var(--color-gold)]/8 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-[var(--color-gold)] text-sm tracking-[0.2em] mb-8 font-medium">
            アレキサンドライト買取専門 — 世界三大希少石
          </p>
          <h1 className="font-luxury text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
            Alexandrite
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-6">
            その美しさの価値、<span className="text-[var(--color-gold)]">正しく査定いたします。</span>
          </p>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            「昼のエメラルド、夜のルビー」——<br />
            光によって色が変わる神秘の宝石を、<br />
            専門の提携鑑定士が適正に評価します。
          </p>

          {/* CTA */}
          <Link
            href="#contact"
            className="inline-block bg-[var(--color-gold)] text-[var(--color-navy)] font-bold text-lg px-12 py-4 rounded-full hover:bg-[var(--color-gold-light)] transition-all duration-300 cursor-pointer shadow-lg shadow-[var(--color-gold)]/20"
          >
            無料査定を申し込む
          </Link>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-8 mt-14 text-sm text-white/50">
            {["鑑別書なしOK", "全国対応", "送料無料", "秘密厳守"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--color-gold)]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 実績バー ===== */}
      <section className="bg-[var(--color-navy-light)] text-white py-8 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "専門", label: "アレキサンドライト特化" },
            { value: "0円", label: "査定料・送料" },
            { value: "全国", label: "対応エリア" },
            { value: "最短即日", label: "査定スピード" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl md:text-3xl font-extrabold text-[var(--color-gold)]">{item.value}</p>
              <p className="text-xs text-white/50 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== アレキサンドライトとは ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">アレキサンドライトとは</h2>
          <p className="text-center text-muted-foreground mb-10">ダイヤモンドより希少とされる、神秘の宝石</p>

          {/* カラーチェンジ実物写真 */}
          <div className="max-w-2xl mx-auto mb-14">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Alexandrite.jpg"
                alt="アレキサンドライトのカラーチェンジ — 昼光下（緑）と白熱灯下（赤）の比較"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-3">
              同じ石が光源で色が変わる — 昼光下では緑色、白熱灯下では赤紫色に
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <Card>
              <CardContent className="p-7 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-emerald)] to-[var(--color-ruby)] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2">カラーチェンジ</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">太陽光では深い緑色、白熱灯の下では赤紫色に変化する神秘的な宝石。この変色効果が最大の魅力です。</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-7 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--color-navy)] flex items-center justify-center">
                  <svg className="w-7 h-7 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2">世界三大希少石</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">パパラチアサファイア、パライバトルマリンと並ぶ世界三大希少石。品質の高いものはダイヤモンドより高値で取引されます。</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-7 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--color-navy)] flex items-center justify-center">
                  <svg className="w-7 h-7 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
                </div>
                <h3 className="font-bold text-lg mb-2">価格上昇傾向</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">産出量の減少に伴い、市場価格は年々上昇。特にロシア産は入手困難で高騰中です。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== 買取相場 ===== */}
      <section id="price" className="py-20 bg-[var(--color-navy)] text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">買取相場の目安</h2>
          <p className="text-center text-white/60 mb-10">品質とカラット数で大きく変わります</p>
          <div className="max-w-xs mx-auto mb-12">
            <div className="relative rounded-xl overflow-hidden border border-white/10 gem-glow">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/01/Alexandrite_26.75cts.jpg"
                alt="26.75カラットのアレキサンドライト カット石"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-white/40 text-xs mt-3">26.75ct アレキサンドライト</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-3 px-4 text-[var(--color-gold)] font-bold">カラット</th>
                  <th className="text-right py-3 px-4 text-[var(--color-gold)]">Sランク</th>
                  <th className="text-right py-3 px-4 text-[var(--color-gold)]">Aランク</th>
                  <th className="text-right py-3 px-4 text-[var(--color-gold)]">Bランク</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {[
                  { ct: "0.2ct", s: "5万円~", a: "2万円~", b: "1万円~" },
                  { ct: "0.5ct", s: "15万円~", a: "5万円~", b: "2.5万円~" },
                  { ct: "0.8ct", s: "40万円~", a: "8万円~", b: "4万円~" },
                  { ct: "1.0ct", s: "90万円~", a: "10万円~", b: "5万円~" },
                  { ct: "3.0ct", s: "450万円~", a: "30万円~", b: "15万円~" },
                ].map((row) => (
                  <tr key={row.ct} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-bold">{row.ct}</td>
                    <td className="py-3 px-4 text-right font-bold text-[var(--color-gold)]">{row.s}</td>
                    <td className="py-3 px-4 text-right">{row.a}</td>
                    <td className="py-3 px-4 text-right">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/40 mt-6 text-center">※ 相場は変色効果の強さ、透明度、産地等により変動します。正確な査定は無料でお受けしています。</p>
        </div>
      </section>

      {/* ===== お悩み ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">こんなお悩み、ありませんか？</h2>
          <p className="text-center text-muted-foreground mb-14">アレキサンドライトの査定は、専門知識が必要です</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "本物かどうかわからない", desc: "鑑別書がない、合成石との区別がつかない。まずはプロに見てほしい" },
              { title: "適正価格がわからない", desc: "ネットの情報がバラバラで、相場観がつかめない" },
              { title: "一般の買取店では安すぎた", desc: "街のリサイクルショップではアレキサンドライトの価値を正しく評価してもらえない" },
              { title: "遺品整理で宝石が出てきた", desc: "故人のジュエリーにアレキサンドライトらしい石がある" },
              { title: "古いデザインで使わない", desc: "昔のジュエリーのデザインが合わない。でも石自体には価値がありそう" },
              { title: "まとまったお金が必要", desc: "長年所有してきた宝石を適正価格で現金化したい" },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 選ばれる理由 ===== */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">選ばれる理由</h2>
          <p className="text-center text-muted-foreground mb-10">アレキサンドライトの価値を正しく評価するために</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { num: "01", title: "アレキサンドライト専門", desc: "カラーストーンの中でも特に査定が難しいアレキサンドライトに特化。変色効果の品質を正確に評価できる専門の提携鑑定士が対応します。" },
              { num: "02", title: "鑑別書なしでもOK", desc: "鑑別書がなくても査定可能です。提携の鑑定機関で正確に鑑別し、適正価格をご提示します。" },
              { num: "03", title: "産地・品質に応じた適正評価", desc: "ロシア産、ブラジル産、スリランカ産など産地による価値の違いを熟知。カラーチェンジの鮮明さ、透明度、カラットを総合的に評価します。" },
              { num: "04", title: "査定料・送料すべて無料", desc: "宅配査定の送料、査定料、キャンセル料すべて無料。お気軽にお申し込みください。" },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-7 flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--color-navy)] text-[var(--color-gold)] flex items-center justify-center font-extrabold text-lg">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 査定ポイント ===== */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">査定額を決める5つのポイント</h2>
          <div className="space-y-6">
            {[
              { title: "変色効果（カラーチェンジ）", desc: "緑→赤のコントラストが鮮明なほど高評価。最も重要な査定基準です。", tag: "最重要" },
              { title: "カラー（色の濃さ）", desc: "濃く鮮やかな色が高評価。薄すぎる、黒っぽすぎるものは減額傾向。", tag: "重要" },
              { title: "クラリティ（透明度）", desc: "インクルージョン（内包物）が少ないほど高評価。", tag: "重要" },
              { title: "カラット（大きさ）", desc: "1ctを超えると希少価値が飛躍的に上昇。3ct以上は極めて希少。", tag: "重要" },
              { title: "産地", desc: "ロシア産が最高評価。次いでブラジル産、スリランカ産の順。", tag: "考慮" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-[var(--color-gold)] flex items-center justify-center font-bold flex-shrink-0 text-sm">{i + 1}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">{item.title}</h3>
                    <Badge variant="secondary" className="text-[10px]">{item.tag}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 買取の流れ ===== */}
      <section id="flow" className="py-20 bg-secondary/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">かんたん3ステップ</h2>
          <div className="space-y-6">
            {[
              { title: "無料査定のお申し込み", desc: "フォームからお気軽にご連絡ください。お品物の写真だけでもOKです。", time: "所要時間：5分" },
              { title: "専門鑑定士が査定", desc: "宅配または写真をもとに、専門の提携鑑定士が査定。送料は当社負担です。", time: "最短即日" },
              { title: "買取金額のご提示", desc: "査定結果をご説明します。ご納得いただければお振込み。お断りでも費用ゼロ。", time: "査定後すぐ" },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-[var(--color-gold)] flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold text-lg mb-0.5">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{item.desc}</p>
                  <Badge variant="secondary" className="text-xs">{item.time}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">よくあるご質問</h2>
          <Accordion className="space-y-3">
            {[
              { q: "鑑別書がなくても査定できますか？", a: "はい、鑑別書がなくても査定可能です。提携の鑑定機関で正確に鑑別いたします。鑑別書があれば査定がスムーズになりますので、お持ちの場合はご一緒にお送りください。" },
              { q: "合成アレキサンドライトも買取できますか？", a: "申し訳ございませんが、合成（人工）アレキサンドライトの買取は対応しておりません。天然石かどうかの判別も無料で行っておりますのでお気軽にご相談ください。" },
              { q: "ルース（裸石）だけでも買取できますか？", a: "もちろんです。ルースの状態でも正確に査定いたします。ジュエリーにセットされた状態でもどちらでもお受けしています。" },
              { q: "査定後にキャンセルはできますか？", a: "もちろん可能です。査定料・送料・キャンセル料すべて無料です。" },
              { q: "どのくらいで査定結果がわかりますか？", a: "写真をお送りいただければ最短即日で概算をお伝えします。宅配査定は到着後1〜2営業日です。" },
              { q: "遠方ですが対応してもらえますか？", a: "全国対応です。宅配査定は送料無料で、専用の梱包キットもご用意しています。" },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5 bg-card">
                <AccordionTrigger className="text-left font-bold py-5 text-[15px] cursor-pointer hover:no-underline">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-[14px]">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org", "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "鑑別書がなくても査定できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、鑑別書がなくても査定可能です。" } },
                  { "@type": "Question", name: "合成アレキサンドライトも買取できますか？", acceptedAnswer: { "@type": "Answer", text: "合成アレキサンドライトの買取は対応しておりません。天然石かどうかの判別は無料です。" } },
                  { "@type": "Question", name: "ルース（裸石）だけでも買取できますか？", acceptedAnswer: { "@type": "Answer", text: "もちろんです。ルースの状態でも正確に査定いたします。" } },
                  { "@type": "Question", name: "査定後にキャンセルはできますか？", acceptedAnswer: { "@type": "Answer", text: "もちろん可能です。査定料・送料・キャンセル料すべて無料です。" } },
                  { "@type": "Question", name: "どのくらいで査定結果がわかりますか？", acceptedAnswer: { "@type": "Answer", text: "写真なら最短即日、宅配査定は到着後1〜2営業日です。" } },
                  { "@type": "Question", name: "遠方ですが対応してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "全国対応。宅配査定は送料無料です。" } },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="py-20 relative text-white overflow-hidden hero-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-gold)]/5 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは<span className="text-[var(--color-gold)]">無料査定</span>からお気軽にどうぞ</h2>
            <p className="text-white/80 text-lg">アレキサンドライトのことなら何でもご相談ください。</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
