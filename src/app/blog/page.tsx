"use client";

import BlogCard, { BlogCardSkeleton } from "@/components/BlogCard";
import { Article } from "@/types";
import { ArrowBigDown, ArrowDown, RotateCcw } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);

  const fetchArticles = useCallback(() => {
    setLoading(true);
    fetch("https://dev.to/api/articles?page=" + page)
      .then((response) => response.json())
      .then((data) => {
        setArticles((prevArticles) => [...prevArticles, ...data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError(error);
        setLoading(false);
      });
  }, [page]);

  const loadMoreArticles = () => {
    setPage((prevPage) => prevPage + 1);
    fetchArticles();
  };

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
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {articles.map((article: Article) => (
                <BlogCard article={article} key={article.id} />
              ))}
            </div>
            <button
              onClick={loadMoreArticles}
              className="block mx-auto mt-20 w-fit px-6 py-2 text text-primary bg-primary-light rounded group shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
            >
              <ArrowDown
                size={16}
                className="inline-block mr-2 group-hover:animate-bounce"
              />
              Load more
            </button>
          </>
        )}
      </div>
    </div>
  );
}
