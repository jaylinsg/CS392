"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm({ initialQuery = '' }: { initialQuery?: string }) {
  const [q, setQ] = useState(initialQuery);
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?q=${encodeURIComponent(q)}`);
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto mb-8 flex max-w-md">
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search artworks…"
        className="flex-grow px-4 py-2 rounded-l-full border-0 focus:ring-2 focus:ring-white focus:outline-none"
      />
      <button
        type="submit"
        className="bg-white text-brand-dark font-semibold px-6 rounded-r-full hover:opacity-90 transition"
      >
        Search
      </button>
    </form>
  );
}
