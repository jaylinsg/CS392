"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!query.trim()) return;
        router.push(`/?q=${encodeURIComponent(query.trim())}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                type="text"
                placeholder="Search artworks..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 flex-1 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 rounded">
                Search
            </button>
        </form>
    );
}
