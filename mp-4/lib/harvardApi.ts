const HARVARD_API_KEY = process.env.HARVARD_API_KEY as string;

interface HarvardRecord {
    id: number;
    title?: string;
    people?: { name: string }[];
    primaryimageurl?: string;
}

export async function getArtworks(query: string) {
    try {
        const res = await fetch(
            `https://api.harvardartmuseums.org/object?apikey=${HARVARD_API_KEY}&keyword=${encodeURIComponent(query)}&size=10`
        );

        if (!res.ok) {
            throw new Error("Failed to fetch Harvard Art Museum data");
        }

        const data = await res.json();

        return data.records.map((record: HarvardRecord) => ({
            id: record.id,
            title: record.title || "Untitled",
            artist: record.people?.[0]?.name || "Unknown Artist",
            image: record.primaryimageurl || "/no-image.jpg",
        }));
    } catch (error) {
        console.error(error);
        return [];
    }
}
