"use client";

import BlogCard, { BlogCardSkeleton } from "@/components/BlogCard";
import { Article } from "@/types";
import { RotateCcw } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchArticles = useCallback(() => {
    setLoading(true);
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);
  return (
    <div className=" bg-[url('/bg.svg')] bg-contain bg-right-top bg-no-repeat py-16 md:py-24">
      <div className="container mx-auto ">
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {Array.from({ length: 12 }).map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>
        )}
        {error && (
          <div className="text-center">
            <h4 className="text-2xl text-red-500 mb-5">
              An error occurred while fetching articles.
            </h4>
            {error.message && (
              <p className="text-red-400">Error: {error.message}</p>
            )}
            <button
              onClick={fetchArticles}
              className="mt-4 px-4 py-2 bg-primary text-white rounded"
            >
              Try again
              <RotateCcw size={16} className="inline-block ml-2" />
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {articles.map((article: Article) => (
              <BlogCard article={article} key={article.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
