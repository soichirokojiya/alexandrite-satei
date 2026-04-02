import { put } from "@vercel/blob";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return Response.json({ error: "ファイルが選択されていません" }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return Response.json({ error: "画像ファイルのみアップロード可能です" }, { status: 400 });
  }

  if (file.size > 10 * 1024 * 1024) {
    return Response.json({ error: "ファイルサイズは10MB以下にしてください" }, { status: 400 });
  }

  try {
    const blob = await put(`inquiry/${Date.now()}-${file.name}`, file, {
      access: "public",
    });

    return Response.json({ url: blob.url });
  } catch (error) {
    console.error("Upload error:", error);
    return Response.json({ error: "アップロードに失敗しました" }, { status: 500 });
  }
}
