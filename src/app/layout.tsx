import type { Metadata } from "next";
import { Noto_Sans_JP, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexandrite-satei.vercel.app"),
  title: {
    default: "アレキサンドライト査定.com｜アレキサンドライト買取専門の無料査定",
    template: "%s｜アレキサンドライト査定.com",
  },
  description:
    "アレキサンドライトの買取・査定なら専門サイト「アレキサンドライト査定.com」。世界三大希少石のひとつ、アレキサンドライトを専門鑑定士が適正価格で査定。カラーチェンジの美しさ・産地・カラットに応じた高額査定。鑑別書なしでもOK。全国対応・送料無料の宅配査定。",
  keywords: [
    "アレキサンドライト 買取",
    "アレキサンドライト 査定",
    "アレキサンドライト 買取相場",
    "アレキサンドライト 売却",
    "アレキサンドライト 買取価格",
    "カラーストーン 買取",
    "宝石 買取",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "アレキサンドライト査定.com",
    title: "アレキサンドライト査定.com｜アレキサンドライト買取専門の無料査定",
    description: "アレキサンドライト専門の買取査定。世界三大希少石を専門鑑定士が適正価格で査定。全国対応・送料無料。",
  },
  twitter: {
    card: "summary_large_image",
    title: "アレキサンドライト査定.com",
    description: "アレキサンドライト専門の買取査定。世界三大希少石を適正価格で。全国対応・送料無料。",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={cn("h-full antialiased", notoSansJP.variable, geist.variable, "font-sans")}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "アレキサンドライト査定.com",
              description: "アレキサンドライト専門の買取査定サービス",
              url: "https://alexandrite-satei.vercel.app",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
