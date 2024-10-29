"use client";

import BlogCard, { BlogCardSkeleton } from "@/components/BlogCard";
import { Article } from "@/types";
import { useEffect, useState } from "react";
export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
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
        {error && <p>Error: {error.message}</p>}
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
