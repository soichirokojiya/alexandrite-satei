"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  item_type: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "", phone: "", email: "", item_type: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "送信に失敗しました");
      }
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", item_type: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました");
    }
  };

  const inputClass = "w-full border-2 border-[var(--color-navy)]/15 rounded-lg px-4 py-3.5 text-[16px] focus:outline-none focus:border-[var(--color-gold)] transition-colors duration-200 bg-white";

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-sm text-center" role="status" aria-live="polite">
        <div className="w-16 h-16 bg-[var(--color-emerald)] rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-3">送信完了しました</h3>
        <p className="text-muted-foreground text-lg">
          お問い合わせありがとうございます。<br />専門鑑定士より1営業日以内にご連絡いたします。
        </p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-[var(--color-gold)] underline cursor-pointer">
          別のお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 md:p-10 shadow-sm space-y-6 text-foreground">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="c-name" className="block font-bold mb-2 text-[15px]">
            お名前 <span className="text-red-500 text-sm">必須</span>
          </label>
          <input id="c-name" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="山田 太郎" className={inputClass} />
        </div>
        <div>
          <label htmlFor="c-phone" className="block font-bold mb-2 text-[15px]">
            電話番号 <span className="text-red-500 text-sm">必須</span>
          </label>
          <input id="c-phone" type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="090-1234-5678" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="c-email" className="block font-bold mb-2 text-[15px]">
          メールアドレス <span className="text-red-500 text-sm">必須</span>
        </label>
        <input id="c-email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="example@email.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="c-item" className="block font-bold mb-2 text-[15px]">
          アイテムの種類 <span className="text-red-500 text-sm">必須</span>
        </label>
        <select id="c-item" name="item_type" required value={formData.item_type} onChange={handleChange} className={inputClass}>
          <option value="">選択してください</option>
          <option value="リング（指輪）">リング（指輪）</option>
          <option value="ネックレス・ペンダント">ネックレス・ペンダント</option>
          <option value="ピアス・イヤリング">ピアス・イヤリング</option>
          <option value="ルース（裸石）">ルース（裸石）</option>
          <option value="ブローチ">ブローチ</option>
          <option value="その他・複数">その他・複数</option>
        </select>
      </div>

      <div>
        <label htmlFor="c-msg" className="block font-bold mb-2 text-[15px]">
          ご相談内容 <span className="text-red-500 text-sm">必須</span>
        </label>
        <textarea id="c-msg" name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="カラット数、産地、鑑別書の有無など、わかる範囲でお書きください" className={`${inputClass} resize-none`} />
      </div>

      {status === "error" && (
        <div role="alert" className="bg-red-50 text-red-600 p-4 rounded-lg">{errorMessage}</div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[var(--color-gold)] text-[var(--color-navy)] py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-gold-light)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "sending" ? "送信中..." : "無料査定を申し込む"}
      </button>

      <p className="text-sm text-center text-muted-foreground">
        ※ しつこい営業は一切いたしません。秘密厳守でご対応します。
      </p>
    </form>
  );
}
