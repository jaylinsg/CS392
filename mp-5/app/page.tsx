"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, alias }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong");
    } else {
      const shortUrl = `${window.location.origin}/r/${alias}`;
      setResult(shortUrl);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Enter an alias (e.g. my-link)"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Shorten
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && (
        <p className="mt-4">
          Shortened URL:{" "}
          <a href={result} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {result}
          </a>
        </p>
      )}
    </main>
  );
}
