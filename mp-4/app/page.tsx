import { getArtObjects } from '../lib/harvardApi';
import ArtList from '../components/ArtList';
import SearchForm from '../components/SearchForm';

export default async function Home({
  params,
  searchParams,
}: {
  params: {};                                      // root route has no dynamic params
  searchParams: { q?: string | string[] };         // annotate exactly what you expect
}) {
  // extract q (could be array or string)
  const qParam = Array.isArray(searchParams.q)
    ? searchParams.q[0]
    : searchParams.q;

  const artObjects = await getArtObjects(qParam);

  return (
    <main className="flex flex-col items-center justify-center p-4 pt-28">
      <h1 className="text-5xl font-bold text-center mb-10 drop-shadow-lg">
        Harvard Art Explorer
      </h1>

      <SearchForm initialQuery={qParam} />

      {artObjects === null ? (
        <p className="text-center text-red-200">Error loading artworks.</p>
      ) : artObjects.length === 0 ? (
        <p className="text-center text-gray-200">
          No results for “{qParam}.”
        </p>
      ) : (
        <ArtList artObjects={artObjects} />
      )}
    </main>
  );
}