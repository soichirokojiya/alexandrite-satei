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
  const [formData, setFormData] = useState<FormData>({ name: "", phone: "", email: "", item_type: "", message: "" });
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
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (!res.ok) { const data = await res.json(); throw new Error(data.error || "送信に失敗しました"); }
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", item_type: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました");
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white text-[15px] placeholder-white/25 focus:outline-none focus:border-[var(--color-gold)]/50 focus:ring-1 focus:ring-[var(--color-gold)]/20 transition-all duration-300";

  if (status === "success") {
    return (
      <div className="border border-[var(--color-gold)]/20 rounded-2xl p-12 text-center" role="status" aria-live="polite">
        <div className="w-14 h-14 border-2 border-[var(--color-gold)] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-xl font-luxury mb-3">送信完了しました</h3>
        <p className="text-white/60">専門鑑定士より1営業日以内にご連絡いたします。</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-[var(--color-gold)] text-sm underline underline-offset-4 cursor-pointer">別のお問い合わせ</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-white/10 rounded-2xl p-8 md:p-10 space-y-6 backdrop-blur-sm bg-white/[0.02]">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="c-name" className="block text-[13px] text-white/60 tracking-wider uppercase mb-2">お名前 <span className="text-[var(--color-gold)]">*</span></label>
          <input id="c-name" type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="山田 太郎" className={inputClass} />
        </div>
        <div>
          <label htmlFor="c-phone" className="block text-[13px] text-white/60 tracking-wider uppercase mb-2">電話番号 <span className="text-[var(--color-gold)]">*</span></label>
          <input id="c-phone" type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="090-1234-5678" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="c-email" className="block text-[13px] text-white/60 tracking-wider uppercase mb-2">メールアドレス <span className="text-[var(--color-gold)]">*</span></label>
        <input id="c-email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="example@email.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="c-item" className="block text-[13px] text-white/60 tracking-wider uppercase mb-2">アイテムの種類 <span className="text-[var(--color-gold)]">*</span></label>
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
        <label htmlFor="c-msg" className="block text-[13px] text-white/60 tracking-wider uppercase mb-2">ご相談内容 <span className="text-[var(--color-gold)]">*</span></label>
        <textarea id="c-msg" name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="カラット数、産地、鑑別書の有無など" className={`${inputClass} resize-none`} />
      </div>
      {status === "error" && <div role="alert" className="text-red-400 text-sm p-3 border border-red-400/20 rounded-lg">{errorMessage}</div>}
      <button type="submit" disabled={status === "sending"} className="w-full bg-[var(--color-gold)] text-black py-4 rounded-full font-bold text-[15px] tracking-wider hover:bg-[var(--color-gold-light)] transition-all duration-300 disabled:opacity-50 cursor-pointer">
        {status === "sending" ? "送信中..." : "無料査定を申し込む"}
      </button>
      <p className="text-[12px] text-center text-white/50">しつこい営業は一切いたしません。秘密厳守。</p>
    </form>
  );
}
