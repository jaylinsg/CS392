import { getArtObjects } from '../lib/harvardApi';
import ArtList from '../components/ArtList';
import SearchForm from '../components/SearchForm';

type Props = {
  searchParams: { q?: string };
};

export default async function Home({ searchParams }: Props) {
  const artObjects = await getArtObjects(searchParams.q);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center mb-10 drop-shadow-lg">
        Harvard Art Explorer
      </h1>

      <SearchForm initialQuery={searchParams.q} />

      {artObjects === null ? (
        <p className="text-center text-red-200">Error loading artworks.</p>
      ) : artObjects.length === 0 ? (
        <p className="text-center text-gray-200">
          No results for “{searchParams.q}.”
        </p>
      ) : (
        <ArtList artObjects={artObjects} />
      )}
    </main>
  );
}
