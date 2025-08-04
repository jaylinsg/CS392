"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setCopied(false);

    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="w-full max-w-md bg-white text-black p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">🔗 URL Shortener</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter a valid URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Enter a custom alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            className="p-3 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Shorten URL
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-600 font-medium text-center bg-red-100 p-2 rounded">
            {error}
          </p>
        )}

        {result && (
          <div className="mt-6 text-center">
            <p className="text-green-700 font-medium">
              Shortened URL:
              <a
                href={result}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-600 underline break-all"
              >
                {result}
              </a>
            </p>
            <button
              onClick={handleCopy}
              className="mt-3 bg-gray-800 text-white hover:bg-gray-700 text-sm px-4 py-2 rounded"
            >
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
