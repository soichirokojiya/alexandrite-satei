import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アレキサンドライトの買取相場｜カラット別・ランク別の価格表",
  description:
    "アレキサンドライトの買取相場をカラット別・品質ランク別に解説。0.2ct〜3ctの価格帯と査定額を左右する要素。",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "アレキサンドライトの買取相場｜カラット別・ランク別の価格表",
  description:
    "アレキサンドライトの買取相場をカラット別・品質ランク別に解説。0.2ct〜3ctの価格帯と査定額を左右する要素。",
  author: {
    "@type": "Organization",
    name: "アレキサンドライト買取センター",
    url: "https://alexandrite.love",
  },
  publisher: {
    "@type": "Organization",
    name: "アレキサンドライト買取センター",
    url: "https://alexandrite.love",
  },
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
};

export default function AlexandriteKaitoriSoubaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* パンくずリスト */}
        <nav className="text-sm text-white/50 mb-12">
          <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">
            トップ
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-white/70">アレキサンドライトの買取相場</span>
        </nav>

        <h1 className="font-luxury text-3xl md:text-5xl text-[var(--color-gold)] leading-tight mb-8">
          アレキサンドライトの買取相場｜カラット別・ランク別の価格表
        </h1>

        <p className="text-white/60 text-sm mb-12">
          最終更新日：2025年1月
        </p>

        {/* 導入 */}
        <section className="mb-12">
          <p className="text-foreground/80 leading-relaxed mb-4">
            アレキサンドライトは、世界三大希少石のひとつに数えられる宝石であり、その買取相場はカラット数や品質によって大きく異なります。0.2カラットの小粒な石から3カラットを超える大粒の石まで、品質ランクに応じて数万円から数百万円に至るまで幅広い価格帯が存在します。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            本記事では、アレキサンドライトの買取相場をカラット別・品質ランク別に整理した価格表とともに、査定額を左右する5つの重要な要素、高く売るためのコツ、そして市場価格の変動要因までを包括的に解説いたします。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            宝石の買取相場は需要と供給のバランスによって常に変動していますが、アレキサンドライトは近年の産出量の減少により、全体的に価格が上昇傾向にあります。お手持ちのアレキサンドライトの価値を正しく把握するための参考としてご活用ください。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* セクション1: カラット別価格表 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            カラット別・ランク別の買取価格表
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            以下の価格表は、2025年1月時点の市場相場を基にした目安です。品質ランクは、カラーチェンジの鮮明さ・色味・クラリティ・カットの総合評価に基づいて分類しています。実際の買取価格は、個々の石の状態や市場動向により変動します。
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-gold)]/30">
                  <th className="text-left py-3 px-2 text-[var(--color-gold)]">カラット</th>
                  <th className="text-right py-3 px-2 text-[var(--color-gold)]">Sランク</th>
                  <th className="text-right py-3 px-2 text-[var(--color-gold)]">Aランク</th>
                  <th className="text-right py-3 px-2 text-[var(--color-gold)]">Bランク</th>
                  <th className="text-right py-3 px-2 text-[var(--color-gold)]">Cランク</th>
                  <th className="text-right py-3 px-2 text-[var(--color-gold)]">Dランク</th>
                </tr>
              </thead>
              <tbody className="text-foreground/70">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-2">0.2〜0.3ct</td>
                  <td className="text-right py-3 px-2">15〜30万</td>
                  <td className="text-right py-3 px-2">8〜15万</td>
                  <td className="text-right py-3 px-2">3〜8万</td>
                  <td className="text-right py-3 px-2">1〜3万</td>
                  <td className="text-right py-3 px-2">0.5〜1万</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-2">0.3〜0.5ct</td>
                  <td className="text-right py-3 px-2">30〜70万</td>
                  <td className="text-right py-3 px-2">15〜30万</td>
                  <td className="text-right py-3 px-2">5〜15万</td>
                  <td className="text-right py-3 px-2">2〜5万</td>
                  <td className="text-right py-3 px-2">1〜2万</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-2">0.5〜1.0ct</td>
                  <td className="text-right py-3 px-2">70〜200万</td>
                  <td className="text-right py-3 px-2">30〜70万</td>
                  <td className="text-right py-3 px-2">10〜30万</td>
                  <td className="text-right py-3 px-2">5〜10万</td>
                  <td className="text-right py-3 px-2">2〜5万</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-2">1.0〜2.0ct</td>
                  <td className="text-right py-3 px-2">200〜600万</td>
                  <td className="text-right py-3 px-2">70〜200万</td>
                  <td className="text-right py-3 px-2">30〜70万</td>
                  <td className="text-right py-3 px-2">10〜30万</td>
                  <td className="text-right py-3 px-2">5〜10万</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-2">2.0〜3.0ct</td>
                  <td className="text-right py-3 px-2">600〜1500万</td>
                  <td className="text-right py-3 px-2">200〜600万</td>
                  <td className="text-right py-3 px-2">70〜200万</td>
                  <td className="text-right py-3 px-2">30〜70万</td>
                  <td className="text-right py-3 px-2">10〜30万</td>
                </tr>
                <tr>
                  <td className="py-3 px-2">3.0ct以上</td>
                  <td className="text-right py-3 px-2">1500万〜</td>
                  <td className="text-right py-3 px-2">600万〜</td>
                  <td className="text-right py-3 px-2">200万〜</td>
                  <td className="text-right py-3 px-2">70万〜</td>
                  <td className="text-right py-3 px-2">30万〜</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-foreground/60 text-sm mb-4">
            ※上記は目安であり、実際の買取価格は石の個別状態・市場動向により異なります。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            各ランクの基準
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            <strong className="text-[var(--color-gold)]">Sランク：</strong>最高品質。鮮やかで明確なカラーチェンジ（70%以上の変色）、高い透明度、優れたカット、理想的な色味（昼光下でビビッドグリーン、白熱灯下でビビッドレッド）。市場全体の3%未満。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            <strong className="text-[var(--color-gold)]">Aランク：</strong>高品質。良好なカラーチェンジ（50〜70%の変色）、透明度が高くインクルージョンが目立たない。美しい色味だが、Sランクに比べるとやや彩度が劣る。市場の約10%。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            <strong className="text-[var(--color-gold)]">Bランク：</strong>中品質。中程度のカラーチェンジ（30〜50%の変色）、一部にインクルージョンが見られるが全体の美観を大きく損なわない。ジュエリーとして十分な品質。市場の約25%。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            <strong className="text-[var(--color-gold)]">Cランク：</strong>標準品質。カラーチェンジが弱い、またはくすんだ色味。インクルージョンが肉眼で確認できる程度に存在。ジュエリーとしての使用は可能だが、コレクション価値は低い。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            <strong className="text-[var(--color-gold)]">Dランク：</strong>低品質。カラーチェンジがほとんど見られない、透明度が低い、キズや割れがある。素材としての価値で買取される場合が多い。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* セクション2: 価格を左右する5要素 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            買取価格を左右する5つの要素
          </h2>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            1. カラーチェンジの鮮明さ
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            アレキサンドライトの価値を最も大きく左右する要素が、カラーチェンジの鮮明さです。太陽光と白熱灯での色の変化が明確で、かつ変化後の各色が美しいほど高評価となります。鮮やかな緑から鮮やかな赤への変化を示す石は、同サイズの石と比較して5〜10倍の価格差が生じることがあります。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            変色効果の評価には「変色の度合い」と「変色の質」の両面があります。度合いが大きくても、各色がくすんでいたり暗すぎたりすると評価は下がります。理想は、昼光下でのビビッドなブルーイッシュグリーンから、白熱灯下でのビビッドなパープリッシュレッドへの劇的な変化です。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            2. カラット（重量）
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            カラットが大きくなるほど、カラット単価も上昇する傾向があります（プレミアム効果）。特に1カラットを超えるアレキサンドライトは希少性が高まり、カラット単価が急激に上昇します。3カラットを超える高品質のアレキサンドライトは、世界的にも極めて稀少で、オークションでは驚くような高値がつくことがあります。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            ただし、大きくても品質が低ければ評価は上がりません。0.5カラットの高品質石が、3カラットの低品質石よりも高い買取価格となることは珍しくありません。重量と品質のバランスが重要です。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            3. クラリティ（透明度）
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            アレキサンドライトは一般的にインクルージョン（内包物）が多い宝石ですが、透明度が高い石ほど高く評価されます。特に、肉眼で確認できるインクルージョンがないものは「アイクリーン」と呼ばれ、希少性が高まります。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            ただし、ルーペで見える程度の微細なインクルージョンは天然石の証であり、評価を大きく下げることはありません。問題となるのは、石の美しさや耐久性に影響する大きなキズ・クラック・不透明なインクルージョンです。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            4. 産地
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            アレキサンドライトの産地は、買取価格に大きな影響を与えます。ロシア・ウラル産は歴史的な価値と美しいカラーチェンジから最高評価を受けますが、現在はほぼ産出されていないため入手困難です。ブラジル産は品質のバランスが良く安定した需要があります。スリランカ産は大粒のものが見つかることがあり、サイズを重視する場合に注目されます。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            5. 鑑別書の有無
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            GIA、CGL、AGTなどの信頼性の高い鑑定機関の鑑別書があると、天然であることの証明となり買取価格にプラスの影響を与えます。特に産地証明がついている場合は、ロシア産やブラジル産といった高評価の産地であることが確認でき、さらに高い査定額が期待できます。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            鑑別書がない場合でも買取は可能ですが、査定に時間がかかることがあります。また、鑑別費用を差し引いた金額が提示される場合もあるため、事前に鑑別書を取得しておくことをお勧めします。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* セクション3: 高く売るコツ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            アレキサンドライトを高く売るコツ
          </h2>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            専門業者に査定を依頼する
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            アレキサンドライトは特殊な宝石であり、一般的なリサイクルショップや質屋では適正な評価が難しい場合があります。カラーストーン、特にアレキサンドライトに精通した専門業者に査定を依頼することで、カラーチェンジの品質やランクを正確に評価してもらえます。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            複数の業者で見積もりを取る
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            買取価格は業者によって異なります。最低でも3社程度で見積もりを取り、比較検討することをお勧めします。業者ごとに得意分野や販売ルートが異なるため、同じ石でも数万円〜数十万円の差がつくことがあります。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            付属品を揃える
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            鑑別書、購入時のレシート、ブランドの保証書、元箱などの付属品があれば、すべて揃えて査定に出しましょう。特にハイブランドのジュエリーに使用されている場合、付属品の有無が査定額に大きく影響します。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            石の状態を整える
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            査定前に、石の表面を柔らかい布で丁寧に拭いておきましょう。ジュエリーの場合は、金属部分の汚れも取り除いておくと印象が良くなります。ただし、超音波洗浄機の使用はインクルージョンのある石にはリスクがあるため避けてください。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            急いで売らない
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            焦って売却すると、足元を見られて安い価格を提示されるリスクがあります。時間に余裕を持って複数業者を回り、納得のいく価格を提示してくれる業者を選びましょう。アレキサンドライトの相場は長期的に見て上昇傾向にあるため、急がなければ有利な条件で売却できる可能性があります。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* セクション4: 時期による価格変動 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            時期による価格変動と市場動向
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            アレキサンドライトの買取相場は、季節やグローバルな市場動向によっても変動します。一般的に、年末年始やクリスマスシーズンの前は宝石の需要が高まるため、買取価格も上昇する傾向があります。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            近年のアレキサンドライト市場は、以下の要因により全体的に価格が上昇傾向にあります。
          </p>
          <ul className="list-disc list-inside text-foreground/80 leading-relaxed mb-4 space-y-2 pl-4">
            <li>主要産地（ブラジル・スリランカ）での産出量の減少</li>
            <li>中国やインドなど新興国の富裕層からの需要増加</li>
            <li>投資対象としてのカラーストーンへの注目度の高まり</li>
            <li>ロシア産のヴィンテージ品が市場に出回る機会の減少</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mb-4">
            特に1カラット以上の高品質のアレキサンドライトは、過去10年間で平均30〜50%の価格上昇が見られています。この傾向は今後も継続すると予測されており、長期保有による値上がりを期待することもできます。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            一方で、為替相場の変動も買取価格に影響を与えます。円安の局面では、海外バイヤーにとって日本での仕入れが割安になるため、輸出向けの需要が増加し、買取価格が上昇しやすくなります。逆に円高の局面では、やや買取価格が落ち着く傾向があります。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            売却のタイミングとしては、需要の高まるシーズン（10〜12月）や、円安局面を狙うことで、より有利な条件での売却が期待できます。ただし、市場タイミングを完全に読むことは困難であるため、複数の業者から見積もりを取得し、納得のいく価格であれば売却を決断することが現実的です。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* 関連記事 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            関連記事
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/articles/alexandrite-color-change"
                className="text-white/70 hover:text-[var(--color-gold)] transition-colors"
              >
                → アレキサンドライトのカラーチェンジとは？色が変わる仕組みを解説
              </Link>
            </li>
            <li>
              <Link
                href="/articles/alexandrite-kanbetsusho"
                className="text-white/70 hover:text-[var(--color-gold)] transition-colors"
              >
                → アレキサンドライトの鑑別書とは？なくても売れる？
              </Link>
            </li>
            <li>
              <Link
                href="/articles/alexandrite-sanchi"
                className="text-white/70 hover:text-[var(--color-gold)] transition-colors"
              >
                → アレキサンドライトの産地別の特徴と価値
              </Link>
            </li>
            <li>
              <Link
                href="/articles/alexandrite-satei-point"
                className="text-white/70 hover:text-[var(--color-gold)] transition-colors"
              >
                → アレキサンドライトの査定で見られる5つのポイント
              </Link>
            </li>
          </ul>
        </section>

        <div className="gold-line my-16" />

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-4">
            アレキサンドライトの無料査定はこちら
          </h2>
          <p className="text-foreground/60 mb-8 leading-relaxed">
            お手持ちのアレキサンドライトの正確な買取価格を、専門の鑑定士が無料で査定いたします。<br />
            鑑別書がなくても問題ございません。まずはお気軽にご相談ください。
          </p>
          <Link
            href="/#contact"
            className="inline-block border border-[var(--color-gold)]/50 text-[var(--color-gold)] px-8 py-3 rounded-full text-sm tracking-widest hover:bg-[var(--color-gold)] hover:text-black transition-all duration-500"
          >
            無料査定を申し込む
          </Link>
        </section>
      </article>
    </>
  );
}
