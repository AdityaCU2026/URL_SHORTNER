import React, { useState, useEffect } from "react";
import { createShortUrl } from "../api/shortUrl.api";
import { useSelector } from "react-redux";
import { QueryClient } from "@tanstack/react-query";
import { queryClient } from "../main";

const UrlForm = () => {
  const [url, setUrl] = useState("https://www.google.com");
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [customSlug, setCustomSlug] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = async () => {
    try {
      const shortUrl = await createShortUrl(url, customSlug);
      setShortUrl(shortUrl);
      queryClient.invalidateQueries({ queryKey: ["userUrls"] });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className={`max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6 transition-opacity duration-700 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="url"
            className="block text-sm font-semibold text-gray-800 mb-2"
          >
            Enter your URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onInput={(event) => setUrl(event.target.value)}
            placeholder="https://example.com"
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
          />
        </div>
        {isAuthenticated && (
          <div>
            <label
              htmlFor="customSlug"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Custom URL (optional)
            </label>
            <input
              type="text"
              id="customSlug"
              value={customSlug}
              onChange={(event) => setCustomSlug(event.target.value)}
              placeholder="Enter custom slug"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition"
            />
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 disabled:opacity-50 transition transform hover:-translate-y-0.5"
      >
        Shorten URL
      </button>
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg font-medium animate-fadeIn">
          {error}
        </div>
      )}
      {shortUrl && (
        <div className="mt-8 animate-fadeIn">
          <h2 className="text-xl font-bold mb-3 text-gray-900">Your shortened URL:</h2>
          <div className="flex items-center rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 p-3 border-none bg-gray-100 text-gray-900 font-semibold"
            />
            <button
              onClick={handleCopy}
              className={`px-6 py-3 transition-colors duration-300 ${
                copied
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-800"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
