"use client";

import { Artwork } from "../types";

interface ArtListProps {
    artworks: Artwork[];
}

export default function ArtList({ artworks }: ArtListProps) {
    if (!artworks.length) {
        return <p>No artworks found.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {artworks.map((art) => (
                <div key={art.id} className="border rounded p-2 shadow">
                    <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-48 object-cover mb-2"
                    />
                    <h2 className="font-bold text-lg">{art.title}</h2>
                    <p className="text-sm text-gray-600">{art.artist}</p>
                </div>
            ))}
        </div>
    );
}
