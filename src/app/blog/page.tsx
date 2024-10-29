"use client";

import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";
export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-4 gap-8 ">
            {articles.map((article) => (
              <BlogCard article={article} key={article.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
