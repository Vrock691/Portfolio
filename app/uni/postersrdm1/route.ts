import { get } from "@vercel/edge-config";

export async function GET() {
    const LINK: string | null = await get("postersrdlink") ?? null

    if (!LINK) {
        return new Response("Blob storage URL not configured. Set VERCEL_BLOB_URL.", { status: 500 });
    }

    const upstream = await fetch(LINK);
    if (!upstream.ok) {
        return new Response(`Failed to fetch PDF from blob (status ${upstream.status})`, { status: upstream.status });
    }

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", "inline; filename=postersrdm1.pdf");

    return new Response(upstream.body, { status: 200, headers });
}
