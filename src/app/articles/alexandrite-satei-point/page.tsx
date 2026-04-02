import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アレキサンドライトの査定で見られる5つのポイント",
  description:
    "アレキサンドライトの査定で重要な5つのポイント（変色効果、カラー、クラリティ、カラット、産地）を専門家が解説。",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "アレキサンドライトの査定で見られる5つのポイント",
  description:
    "アレキサンドライトの査定で重要な5つのポイント（変色効果、カラー、クラリティ、カラット、産地）を専門家が解説。",
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

export default function AlexandriteSateiPointPage() {
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
          <span className="text-white/70">アレキサンドライトの査定で見られる5つのポイント</span>
        </nav>

        <h1 className="font-luxury text-3xl md:text-5xl text-[var(--color-gold)] leading-tight mb-8">
          アレキサンドライトの査定で見られる5つのポイント
        </h1>

        <p className="text-white/60 text-sm mb-12">
          最終更新日：2025年1月
        </p>

        {/* 導入 */}
        <section className="mb-12">
          <p className="text-foreground/80 leading-relaxed mb-4">
            アレキサンドライトの査定は、ダイヤモンドの4C（カラー・クラリティ・カラット・カット）と異なり、変色効果という独自の評価軸が加わるため、専門的な知識と経験を持つ鑑定士でなければ正確な評価が難しい宝石です。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            本記事では、アレキサンドライトの査定において専門鑑定士が実際に確認する5つの重要なポイントを詳しく解説します。これらのポイントを理解しておくことで、お手持ちのアレキサンドライトの価値をおおよそ把握でき、査定時にも適正な評価を受けやすくなります。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            5つのポイントは、重要度の高い順に「変色効果」「カラー」「クラリティ」「カラット」「産地」です。それぞれが買取価格にどの程度影響するのか、具体的な例とともに解説いたします。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* ポイント1: 変色効果 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            ポイント1：変色効果（カラーチェンジ）― 最重要の評価基準
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            アレキサンドライトの査定において最も重要なポイントが、変色効果（カラーチェンジ）です。査定額全体の40〜50%は、このカラーチェンジの品質で決まると言っても過言ではありません。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            鑑定士はまず、昼光相当の光源（D65光源、色温度約6500K）と白熱灯（A光源、色温度約2856K）を用いて、石の色変化を確認します。理想的なカラーチェンジとは、昼光下でのビビッドなブルーイッシュグリーンから、白熱灯下でのビビッドなパープリッシュレッドへの劇的な変化です。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            変色効果の評価は以下の3つの側面から行われます。
          </p>
          <ul className="list-disc list-inside text-foreground/80 leading-relaxed mb-4 space-y-2 pl-4">
            <li><strong>変色の度合い（Degree）：</strong>色相がどの程度変化するか。100%のコンプリートチェンジが理想</li>
            <li><strong>変色の鮮明さ（Strength）：</strong>色の切り替わりがはっきりしているか。瞬時に色が変わって見えるものが最高評価</li>
            <li><strong>各色の彩度（Saturation）：</strong>緑の状態も赤の状態も、それぞれが鮮やかで美しいか</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mb-4">
            査定ランクとしては、Sランク（変色度70%以上、ストロングチェンジ、高彩度）、Aランク（変色度50〜70%、モデレート〜ストロングチェンジ）、Bランク（変色度30〜50%、モデレートチェンジ）、Cランク（変色度20〜30%、ウィークチェンジ）、Dランク（変色度20%未満、ベリーウィークチェンジ）に分類されます。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            SランクとDランクでは、同じカラット数であっても買取価格に10倍以上の開きが生じることがあります。カラーチェンジの品質は、アレキサンドライトの存在意義そのものと言えるため、これほどまでに大きな価格差が生まれるのです。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* ポイント2: カラー */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            ポイント2：カラー（地色の美しさ）
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            変色効果とは別に、それぞれの光源下での「地色」の美しさも重要な評価基準です。カラーの評価は、色相（Hue）、彩度（Saturation）、明度（Tone）の3要素で行われます。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            昼光下のカラー評価
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            昼光下では、ブルーイッシュグリーン（青みのある緑）が最高評価を受けます。純粋な緑、イエローイッシュグリーン（黄緑がかった緑）の順に評価が下がります。ブラウンやグレーのトーンが混じるとさらに評価が下がります。明度については、明るすぎず暗すぎない中間的なトーンが理想です。石が暗すぎると色の鮮やかさが失われ、明るすぎると色が薄く見えます。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            白熱灯下のカラー評価
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            白熱灯下では、パープリッシュレッド（紫みのある赤）からレッドが最高評価です。オレンジレッド、ブラウニッシュレッドの順に評価が下がります。赤みが強く鮮やかなものほど、ルビーのような印象を与え、高い評価を受けます。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            カラーのランク分け
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            カラーの評価は査定額の約20〜25%を占めます。最高品質のカラー（ビビッドなブルーイッシュグリーン ↔ ビビッドなパープリッシュレッド）は、くすんだ色味の石に比べて2〜3倍の価格差が生じます。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            重要なのは、カラーチェンジの評価とカラーの評価は別物であるということです。カラーチェンジが鮮明であっても、各色がくすんでいれば総合的な評価は下がります。逆に、カラーチェンジはやや控えめでも、各色が美しい場合はそれなりに高い評価を受けることがあります。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* ポイント3: クラリティ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            ポイント3：クラリティ（透明度・内包物）
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            クラリティはインクルージョン（内包物）の量や種類、配置によって評価されます。アレキサンドライトはタイプIIの宝石（通常、いくつかのインクルージョンを含む）に分類されるため、ダイヤモンドほど厳格なクラリティ基準は適用されません。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            クラリティの評価基準は以下の通りです。
          </p>
          <ul className="list-disc list-inside text-foreground/80 leading-relaxed mb-4 space-y-2 pl-4">
            <li><strong>アイクリーン（Eye Clean）：</strong>肉眼でインクルージョンが確認できない。最高評価</li>
            <li><strong>スライトリーインクルーデッド（Slightly Included）：</strong>肉眼でわずかにインクルージョンが確認できるが、美観を大きく損なわない</li>
            <li><strong>モデレートリーインクルーデッド（Moderately Included）：</strong>肉眼でインクルージョンが明確に確認でき、美観にやや影響がある</li>
            <li><strong>ヘビリーインクルーデッド（Heavily Included）：</strong>多量のインクルージョンがあり、透明度や美観に大きく影響する</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mb-4">
            クラリティが査定額に占める割合は約10〜15%です。アイクリーンのアレキサンドライトは希少性が高く、ヘビリーインクルーデッドの石に比べて2〜4倍の価格差が生じることがあります。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            ただし、インクルージョンの存在は必ずしもマイナスではありません。天然の証拠となるインクルージョン（シルクインクルージョン、指紋状インクルージョンなど）は、合成石ではないことの裏付けとなります。また、特定のインクルージョンパターンは産地推定の手がかりにもなります。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            注意すべきは、石の耐久性に影響するインクルージョンです。表面に達するクラックや大きなフェザー（羽状のインクルージョン）は、将来的に石が割れるリスクを高めるため、大幅な減額要因となります。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* ポイント4: カラット */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            ポイント4：カラット（重量とサイズ）
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            カラットはアレキサンドライトの重量を示す単位で、1カラット＝0.2グラムです。カラット数が大きくなるほど価格は上昇しますが、この上昇は直線的ではなく、指数関数的です。つまり、2カラットの石は1カラットの石の2倍ではなく、3〜5倍の価格になることがあります。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            これは「カラットプレミアム」と呼ばれる現象で、大きな石ほど希少性が高まるため、カラット単価自体が上昇していきます。アレキサンドライトの場合、以下のカラット帯で特に大きなプレミアムが発生します。
          </p>
          <ul className="list-disc list-inside text-foreground/80 leading-relaxed mb-4 space-y-2 pl-4">
            <li><strong>0.5ct超え：</strong>ジュエリーとして十分な存在感が出るサイズ。カラット単価が上昇し始める</li>
            <li><strong>1.0ct超え：</strong>高品質なものは非常に希少。カラット単価が急激に上昇</li>
            <li><strong>2.0ct超え：</strong>コレクターズクオリティ。市場に出回ることが少なく、プレミアム大</li>
            <li><strong>3.0ct超え：</strong>ミュージアムクオリティ。世界的にも稀少で、オークション級の価値</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mb-4">
            カラットが査定額に占める割合は約15〜20%です。ただし、前述の通り、大きくても品質（カラーチェンジ、カラー、クラリティ）が低ければ高い評価は得られません。小さくても品質の高い石のほうが、大きくて品質の低い石よりも高額で買取されることは珍しくありません。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            査定では、カラット数は精密な宝石用秤で正確に計量されます。ルースの場合はそのまま計量されますが、ジュエリーにセットされている場合は、石のサイズ（縦・横・深さ）から推定重量が算出されます。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            また、カットの良し悪しもカラットの評価に影響します。適切にカットされた石は、重量に対して最大限の輝きとカラーチェンジを発揮します。深すぎるカットは重量を稼ぐために石が暗くなり、浅すぎるカットは光が漏れてカラーチェンジが弱くなります。バランスの取れたカットは、同カラット数の中で高い評価を受けます。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* ポイント5: 産地 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            ポイント5：産地 ― 出自がもたらすプレミアム
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            産地はアレキサンドライトの査定において、約5〜10%の影響力を持ちます。割合としては他のポイントに比べて小さいですが、高額な石の場合はこの差が数十万円〜数百万円の金額差になり得ます。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            産地ごとの評価の序列は、一般的にロシア・ウラル産 &gt; ブラジル産 &gt; スリランカ産 &gt; その他の産地となります。ロシア産はアレキサンドライト発見の地であり、かつ最も美しいカラーチェンジを示すことから、最高の評価を受けます。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            ただし、この序列は「一般的な傾向」であり、絶対的なものではありません。鮮やかなカラーチェンジを持つブラジル産が、やや地味なカラーチェンジのロシア産よりも高く評価されることもあります。あくまで「同品質であれば、ロシア産が最も高い」という理解が正確です。
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            査定において産地を評価に反映するためには、信頼できる鑑定機関の産地証明書が必要です。産地証明がない場合、鑑定士は石のインクルージョンパターンや色味から産地を推定しますが、確定的な評価は難しく、産地プレミアムは適用されないことが一般的です。
          </p>
          <p className="text-foreground/80 leading-relaxed">
            特にヴィンテージジュエリーに使用されているアレキサンドライトは、ロシア産である可能性があります。19世紀〜20世紀初頭の欧州製ジュエリーに使われているアレキサンドライトは、時代的にロシア産の可能性が高く、産地証明を取得する価値があります。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* 高額査定のコツ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            高額査定を引き出すコツ
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            上記5つの査定ポイントを理解した上で、実際に高額査定を引き出すためのコツをご紹介します。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            石をきれいにしておく
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            査定前に、石の表面を柔らかい布で丁寧に拭いてください。汚れや皮脂は光の透過を妨げ、カラーチェンジの鮮やかさを損ないます。ぬるま湯と中性洗剤で優しく洗浄する方法も有効です。ただし、超音波洗浄機はインクルージョンのある石にダメージを与える可能性があるため、使用は避けてください。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            鑑別書・産地証明を準備する
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            信頼できる鑑定機関の鑑別書があれば必ず持参してください。鑑別書がない場合は、査定前に取得を検討されることをお勧めします。特に推定買取価格が50万円以上の石は、鑑別書・産地証明の費用（数万円）を投資する価値があります。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            付属品を揃える
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            購入時の箱、保証書、レシート、ブランドの証明書などがある場合は、すべて揃えて査定に出しましょう。特にハイブランド（カルティエ、ティファニー、ブルガリなど）のジュエリーの場合、ブランドの付属品が揃っていることで、ブランド価値が査定額に上乗せされます。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            専門業者を選ぶ
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            アレキサンドライトは非常に特殊な宝石です。一般的なリサイクルショップではカラーチェンジの価値を正確に評価できず、低い査定額を提示されるリスクがあります。カラーストーン、特にアレキサンドライトに精通した専門業者に査定を依頼することが、高額査定を引き出す最大のコツです。
          </p>

          <h3 className="text-xl font-semibold text-[var(--color-gold)]/80 mb-4 mt-8">
            複数業者で相見積もりを取る
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            1社だけの査定では、その価格が適正かどうか判断できません。最低3社程度で見積もりを取り、相場感を把握した上で売却先を決定してください。業者によって販売ルートや在庫状況が異なるため、同じ石でも大きな価格差が生じることがあります。
          </p>
        </section>

        <div className="gold-line my-16" />

        {/* 査定前にやるべきこと */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-6">
            査定前にやるべきこと ― チェックリスト
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            査定を受ける前に、以下のチェックリストを参考に準備を進めてください。
          </p>
          <ul className="list-disc list-inside text-foreground/80 leading-relaxed mb-4 space-y-3 pl-4">
            <li>石の表面を柔らかい布で丁寧に拭き、汚れを取り除く</li>
            <li>鑑別書・鑑定書がある場合は手元に用意する</li>
            <li>購入時の付属品（箱、保証書、レシートなど）を探して揃える</li>
            <li>太陽光と白熱灯の下でカラーチェンジの様子を自分で確認してみる</li>
            <li>石にキズやクラックがないか、10倍ルーペがあれば確認する</li>
            <li>いつ、どこで購入したか、購入価格はいくらだったかを整理する</li>
            <li>査定を依頼する専門業者を2〜3社ピックアップする</li>
            <li>各業者の口コミや実績を確認する</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed">
            これらの準備をしっかりと行うことで、査定がスムーズに進み、適正な価格での買取が期待できます。査定は無料で行っている業者が多いため、まずは気軽に相談してみることをお勧めします。
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
                href="/articles/alexandrite-kaitori-souba"
                className="text-white/70 hover:text-[var(--color-gold)] transition-colors"
              >
                → アレキサンドライトの買取相場｜カラット別・ランク別の価格表
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
          </ul>
        </section>

        <div className="gold-line my-16" />

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold text-[var(--color-gold)] mb-4">
            アレキサンドライトの無料査定はこちら
          </h2>
          <p className="text-foreground/60 mb-8 leading-relaxed">
            5つのポイントをプロの鑑定士が総合的に評価し、適正な買取価格をご提示いたします。<br />
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
