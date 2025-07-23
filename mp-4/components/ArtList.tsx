import ArtCard from './ArtCard';
import { ArtObject } from '../types';

export default function ArtList({ artObjects }: { artObjects: ArtObject[] }) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {artObjects.map((art) => (
        <ArtCard key={art.id} art={art} />
      ))}
    </div>
  );
}
