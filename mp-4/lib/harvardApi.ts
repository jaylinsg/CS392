import { ArtObject } from "@/types";

// lib/harvardApi.ts
export async function getArtObjects(query?: string) {
  const apiKey = process.env.HARVARD_API_KEY;
  const qParam = query ? `&q=${encodeURIComponent(query)}` : "";
  const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=12${qParam}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Harvard API error ${res.status}`);
    const json = await res.json();
    return json.records as ArtObject[];
  } catch (err) {
    console.error("getArtObjects()", err);
    return null;
  }
}
