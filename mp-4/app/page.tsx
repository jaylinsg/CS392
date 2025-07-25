import { getArtworks } from "../lib/harvardApi";
import ArtList from "../components/ArtList";
import { Artwork } from "../types";
import SearchForm from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const params = (await searchParams) || {};
  const query = params.q || "van gogh";
  const artworks: Artwork[] = await getArtworks(query);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Harvard Art Search</h1>
      <SearchForm />
      <ArtList artworks={artworks} />
    </main>
  );
}
