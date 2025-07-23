import { ArtObject } from '../types';

export default function ArtCard({ art }: { art: ArtObject }) {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition p-4">
      {art.primaryimageurl && (
        <img
          src={art.primaryimageurl}
          alt={art.title ?? 'Artwork'}
          className="w-full h-12 object-cover rounded-lg"
        />
      )}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-900">{art.title ?? 'Untitled'}</h2>
        <p className="text-sm text-gray-700 mt-1">{art.period ?? 'Unknown period'}</p>
        {art.description && (
          <p className="mt-2 text-gray-800 text-sm">
            {art.description}
          </p>
        )}
      </div>
    </div>
  );
}
