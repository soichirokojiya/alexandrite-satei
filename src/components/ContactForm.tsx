"use client";

import { useState, useRef } from "react";

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
  const [images, setImages] = useState<{ file: File; preview: string; url?: string; uploading: boolean }[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (const file of Array.from(files)) {
      if (!file.type.startsWith("image/")) continue;
      if (file.size > 10 * 1024 * 1024) continue;

      const preview = URL.createObjectURL(file);
      const idx = images.length;
      setImages((prev) => [...prev, { file, preview, uploading: true }]);

      try {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (res.ok && data.url) {
          setImages((prev) => prev.map((img, i) => i === idx ? { ...img, url: data.url, uploading: false } : img));
        } else {
          setImages((prev) => prev.map((img, i) => i === idx ? { ...img, uploading: false } : img));
        }
      } catch {
        setImages((prev) => prev.map((img, i) => i === idx ? { ...img, uploading: false } : img));
      }
    }
    if (fileRef.current) fileRef.current.value = "";
  };

  const removeImage = (idx: number) => {
    setImages((prev) => {
      URL.revokeObjectURL(prev[idx].preview);
      return prev.filter((_, i) => i !== idx);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const imageUrls = images.filter((img) => img.url).map((img) => img.url);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, imageUrls }),
      });
      if (!res.ok) { const data = await res.json(); throw new Error(data.error || "送信に失敗しました"); }
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", item_type: "", message: "" });
      setImages([]);
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

      {/* 画像アップロード */}
      <div>
        <label className="block text-[13px] text-white/60 tracking-wider uppercase mb-2">
          お品物の写真 <span className="text-white/30">（任意・複数可）</span>
        </label>
        <div
          className="border-2 border-dashed border-white/15 rounded-lg p-6 text-center cursor-pointer hover:border-[var(--color-gold)]/30 transition-colors duration-300"
          onClick={() => fileRef.current?.click()}
        >
          <svg className="w-8 h-8 text-white/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <p className="text-white/40 text-[13px]">クリックして写真を選択</p>
          <p className="text-white/25 text-[11px] mt-1">JPG, PNG（10MBまで）</p>
        </div>
        <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFileSelect} />

        {images.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">
            {images.map((img, i) => (
              <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.preview} alt={`添付${i + 1}`} className="w-full h-full object-cover" />
                {img.uploading && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {!img.uploading && (
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 w-5 h-5 bg-black/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors"
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {status === "error" && <div role="alert" className="text-red-400 text-sm p-3 border border-red-400/20 rounded-lg">{errorMessage}</div>}
      <button type="submit" disabled={status === "sending" || images.some((img) => img.uploading)} className="w-full bg-[var(--color-gold)] text-black py-4 rounded-full font-bold text-[15px] tracking-wider hover:bg-[var(--color-gold-light)] transition-all duration-300 disabled:opacity-50 cursor-pointer">
        {status === "sending" ? "送信中..." : "無料査定を申し込む"}
      </button>
      <p className="text-[12px] text-center text-white/40">しつこい営業は一切いたしません。秘密厳守。</p>
    </form>
  );
}
