import { Resend } from "resend";

export const dynamic = "force-dynamic";

const escapeHtml = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: unknown;
  try { body = await request.json(); } catch { return Response.json({ error: "不正なリクエストです" }, { status: 400 }); }

  if (typeof body !== "object" || body === null) return Response.json({ error: "不正なリクエストです" }, { status: 400 });

  const { name, phone, email, item_type, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof phone !== "string" || typeof email !== "string" || typeof item_type !== "string" || typeof message !== "string") {
    return Response.json({ error: "必須項目を入力してください" }, { status: 400 });
  }

  const n = name.trim(), p = phone.trim(), e = email.trim(), it = item_type.trim(), m = message.trim();
  if (!n || !p || !e || !it || !m) return Response.json({ error: "必須項目を入力してください" }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return Response.json({ error: "メールアドレスの形式が正しくありません" }, { status: 400 });

  try {
    await resend.emails.send({
      from: "アレキサンドライト査定 <onboarding@resend.dev>",
      to: ["koujiy@souichirou.org", "mokeygod@gmail.com"],
      subject: `【アレキ査定】${escapeHtml(n)}様からのお問い合わせ`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0f172a;border-bottom:2px solid #c8a45e;padding-bottom:10px;">アレキサンドライト査定のお問い合わせ</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:20px;">
            <tr style="border-bottom:1px solid #eee;"><td style="padding:12px;font-weight:bold;width:140px;color:#0f172a;">お名前</td><td style="padding:12px;">${escapeHtml(n)}</td></tr>
            <tr style="border-bottom:1px solid #eee;"><td style="padding:12px;font-weight:bold;color:#0f172a;">電話番号</td><td style="padding:12px;">${escapeHtml(p)}</td></tr>
            <tr style="border-bottom:1px solid #eee;"><td style="padding:12px;font-weight:bold;color:#0f172a;">メールアドレス</td><td style="padding:12px;">${escapeHtml(e)}</td></tr>
            <tr style="border-bottom:1px solid #eee;"><td style="padding:12px;font-weight:bold;color:#0f172a;">アイテム種類</td><td style="padding:12px;">${escapeHtml(it)}</td></tr>
            <tr><td style="padding:12px;font-weight:bold;color:#0f172a;vertical-align:top;">ご相談内容</td><td style="padding:12px;white-space:pre-wrap;">${escapeHtml(m)}</td></tr>
          </table>
        </div>`,
      replyTo: e,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "送信に失敗しました。しばらく時間をおいて再度お試しください。" }, { status: 500 });
  }
}
